import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(scriptDir, '..');
const dataFile = path.join(rootDir, 'ui_kits', 'portfolio', 'projects-data.js');

/* ── Schema canônico (2026-05-03) ─────────────────────────── */
const expectedInterestColors = {
  tecnologia:     '#1B2585',
  esportes:       '#9494C8',
  entretenimento: '#E0003D',
  experimentos:   '#F07090'
};

const expectedTechnologies = new Set([
  'Power BI', 'DAX', 'M Language', 'SQL',
  'Python', 'Pandas', 'Excel', 'Tableau',
  'Looker', 'spaCy', 'Claude Code', 'CODEX'
]);

const expectedSolutionTypes = new Set([
  'data-viz', 'data-trt', 'data-stl', 'auto', 'rsh'
]);

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

function validateProjects(projects, interests, technologies, solutionType, errors, sectionName) {
  const ids = new Set();
  const techSet = new Set(technologies || []);
  const solKeys = new Set(Object.keys(solutionType || {}));
  const intKeys = new Set(Object.keys(interests || {}));

  projects.forEach((project, index) => {
    const label = `${sectionName}[${index}]`;
    assert(Number.isInteger(project.id), `${label}.id deve ser inteiro`, errors);
    assert(!ids.has(project.id), `${label}.id repetido (${project.id})`, errors);
    ids.add(project.id);
    assert(typeof project.title === 'string' && project.title.trim(), `${label}.title obrigatorio`, errors);

    // interest única
    assert(typeof project.interest === 'string' && intKeys.has(project.interest),
      `${label}.interest invalida: ${project.interest}`, errors);

    // technologies subset
    assert(Array.isArray(project.technologies), `${label}.technologies deve ser array`, errors);
    (project.technologies || []).forEach((t) => {
      assert(techSet.has(t), `${label}.technologies item desconhecido: ${t}`, errors);
    });

    // solutionType subset
    assert(Array.isArray(project.solutionType), `${label}.solutionType deve ser array`, errors);
    (project.solutionType || []).forEach((s) => {
      assert(solKeys.has(s), `${label}.solutionType item desconhecido: ${s}`, errors);
    });

    // template
    assert(Number.isInteger(project.template) && project.template >= 1 && project.template <= 6,
      `${label}.template deve estar entre 1 e 6`, errors);

    // arrays auxiliares
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

  const { interests, technologies, solutionType, about, projects, archived } = portfolioData;

  assert(interests && typeof interests === 'object', 'interests ausente', errors);
  assert(Array.isArray(technologies), 'technologies deve ser array', errors);
  assert(solutionType && typeof solutionType === 'object', 'solutionType ausente', errors);
  assert(Array.isArray(projects), 'projects deve ser array', errors);
  assert(Array.isArray(archived), 'archived deve ser array', errors);

  // Cores blindadas das interests (espelha IDENTIDADE_VISUAL.md §8)
  Object.entries(expectedInterestColors).forEach(([key, color]) => {
    assert(interests[key], `interest obrigatoria ausente: ${key}`, errors);
    if (interests[key]) {
      assert(interests[key].color === color, `interest ${key} deve usar ${color}`, errors);
    }
  });

  // Technologies canônica
  expectedTechnologies.forEach((tech) => {
    assert((technologies || []).includes(tech), `technology obrigatoria ausente: ${tech}`, errors);
  });

  // Solution types canônicas
  expectedSolutionTypes.forEach((key) => {
    assert(solutionType?.[key], `solutionType obrigatorio ausente: ${key}`, errors);
  });

  validateAbout(about, errors);
  validateProjects(projects || [], interests || {}, technologies || [], solutionType || {}, errors, 'projects');
  validateProjects(archived || [], interests || {}, technologies || [], solutionType || {}, errors, 'archived');

  if (errors.length) {
    console.error('Validacao falhou:\n');
    console.error(errors.map((error) => `- ${error}`).join('\n'));
    process.exit(1);
  }

  console.log('Validacao concluida com sucesso.');
}

main();
