import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const dataFile = path.join(rootDir, 'ui_kits', 'portfolio', 'projects-data.js');

const expectedCategoryColors = {
  powerbi: '#FFEE00',
  tableau: '#1B2585',
  python: '#E0003D',
  experimentos: '#F07090',
  pesquisa: '#9494C8'
};

function loadPortfolioData() {
  const source = fs.readFileSync(dataFile, 'utf8');
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(source, context, { filename: dataFile });
  return {
    siteConfig: context.window.SITE_CONFIG,
    portfolioData: context.window.PROJECTS_DATA
  };
}

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function validateAbout(about, errors) {
  ['pt', 'en'].forEach((lang) => {
    const content = about?.[lang];
    assert(content, `about.${lang} ausente`, errors);
    if (!content) return;

    assert(Array.isArray(content.bio) && content.bio.length >= 3, `about.${lang}.bio deve ter ao menos 3 paragrafos`, errors);
    assert(Array.isArray(content.experience) && content.experience.length >= 2, `about.${lang}.experience deve ter ao menos 2 entradas`, errors);
    assert(Array.isArray(content.education) && content.education.length >= 3, `about.${lang}.education deve ter ao menos 3 entradas`, errors);
    assert(Array.isArray(content.skills) && content.skills.length >= 4, `about.${lang}.skills deve ter ao menos 4 grupos`, errors);
  });
}

function validateProjects(projects, categories, errors, sectionName) {
  const ids = new Set();
  projects.forEach((project, index) => {
    const label = `${sectionName}[${index}]`;
    assert(Number.isInteger(project.id), `${label}.id deve ser inteiro`, errors);
    assert(!ids.has(project.id), `${label}.id repetido (${project.id})`, errors);
    ids.add(project.id);
    assert(typeof project.title === 'string' && project.title.trim(), `${label}.title obrigatorio`, errors);
    assert(categories[project.category], `${label}.category invalida: ${project.category}`, errors);
    assert(Number.isInteger(project.template) && project.template >= 1 && project.template <= 6, `${label}.template deve estar entre 1 e 6`, errors);
    assert(Array.isArray(project.tools), `${label}.tools deve ser array`, errors);
    assert(Array.isArray(project.tags), `${label}.tags deve ser array`, errors);
    assert(Array.isArray(project.results), `${label}.results deve ser array`, errors);
  });
}

function main() {
  const errors = [];
  const { siteConfig, portfolioData } = loadPortfolioData();

  assert(siteConfig && typeof siteConfig === 'object', 'SITE_CONFIG ausente', errors);
  assert(portfolioData && typeof portfolioData === 'object', 'PROJECTS_DATA ausente', errors);
  if (errors.length) {
    throw new Error(errors.join('\n'));
  }

  const { categories, about, projects, archived } = portfolioData;

  assert(categories && typeof categories === 'object', 'categories ausente', errors);
  assert(Array.isArray(projects), 'projects deve ser array', errors);
  assert(Array.isArray(archived), 'archived deve ser array', errors);

  Object.entries(expectedCategoryColors).forEach(([key, color]) => {
    assert(categories[key], `categoria obrigatoria ausente: ${key}`, errors);
    if (categories[key]) {
      assert(categories[key].color === color, `categoria ${key} deve usar ${color}`, errors);
    }
  });

  validateAbout(about, errors);
  validateProjects(projects || [], categories || {}, errors, 'projects');
  validateProjects(archived || [], categories || {}, errors, 'archived');

  if (errors.length) {
    console.error('Validacao falhou:\n');
    console.error(errors.map((error) => `- ${error}`).join('\n'));
    process.exit(1);
  }

  console.log('Validacao concluida com sucesso.');
}

main();
