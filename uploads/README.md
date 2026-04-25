# `uploads/` — Material bruto enviado pelo Diego

> Pasta de **arquivos crus**. Tudo que o Diego subir como referência ou material de origem mora aqui.
> Antes de mexer, ler [`../README.md`](../README.md).

---

## O que mora aqui

Material original sem otimização: SVGs originais, CV, fontes de origem, referências de cor, screenshots colados.

Exemplos atuais:

- `Logo - Branco - Diego Furtado.svg` / `Logo - Preto - Diego Furtado.svg` (originais — versão otimizada vive em `../assets/`)
- `Ativo 9.svg` … `Ativo 14.svg` (motifs originais — versão otimizada vive em `../assets/`)
- `BebasNeue-Regular.ttf`, `JetBrainsMono-*.ttf` (originais — versões consumidas pelo site vivem em `../fonts/`)
- `CV - Diego Furtado.pdf` (currículo)
- `CORES@3x-50.jpg` (referência de paleta)
- `pasted-*.png` (screenshots colados)

---

## Regras locais (em adição às da raiz)

### NÃO FAZER

- **Não apagar nada.** Esta pasta é arquivo morto-vivo. Mesmo que pareça duplicata, é a fonte original.
- **Não editar** arquivos aqui. Trabalhe sempre na cópia em `assets/` ou `fonts/`.
- **Não referenciar** arquivos daqui no site público. O site consome `../assets/` e `../fonts/`.
- **Não renomear** arquivos com espaços / acentos: o nome original conta como rastro do envio.

### O QUE PODE SER FEITO

- **Adicionar** novos arquivos enviados pelo Diego.
- **Promover** um arquivo para `assets/` ou `fonts/` (criar a versão otimizada/renomeada na pasta correta, mantendo o original aqui).
- **Listar** o conteúdo desta pasta para o Diego quando ele perguntar "o que eu já te enviei?".

---

## Promoção de arquivo (uploads → assets / fonts)

Quando um arquivo é considerado parte do site:

1. Copiar para `../assets/` ou `../fonts/` com nome no padrão (`ativo-{n}-{nome}.svg`, kebab-case).
2. **Não alterar** o original aqui.
3. Atualizar `colors_and_type.css` ou outros consumidores se for fonte.
4. Registrar no `CHANGELOG.md` da raiz.
