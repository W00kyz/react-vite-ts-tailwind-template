# wookyz — Template React + Vite + TS + Tailwind

Template opinado para iniciar projetos com stack moderna.

## Stack Principal

- **React 18** — UI
- **Vite 7** — Dev server / bundler
- **TypeScript 5** — Tipagem
- **Tailwind CSS 3 + @tailwind/forms** — Estilização
- **ESLint 9 + TypeScript‑ESLint + React Hooks + React Refresh** — Linting
- **Prettier 3** — Formatação
- **Vitest 3** — Testes

## Internacionalização (i18n)

- **i18next + react‑i18next**
- **i18next‑http‑backend** — Carregamento de traduções
- **i18next‑browser‑languagedetector** — Detecção de idioma
- **i18next‑cli** — CLI para lint/extract/sync
- Script de sync automático dos _namespaces_ (`scripts/sync-i18n-namespaces.js`)

### Scripts úteis

```bash
npm run i18n:lint     # lint nas traduções
npm run i18n:extract  # extrai chaves usadas no código
npm run i18n:sync     # sincroniza namespaces
npm run i18n          # extract + sync + status
```

## State / Data

- **@reduxjs/toolkit + react‑redux**
- **@tanstack/react‑query** — fetch/cache de dados
- **msw** — Mock Service Worker para mocks em dev/test

## Aliases (TS + Vite)

Config em `tsconfig.json` / support no Vite via `vite-tsconfig-paths`:

```
@/* → src/*
@app/* → src/app/*
@components/* → src/components/*
@hooks/* → src/hooks/*
@datasources/* → src/datasources/*
```

## Scripts

```bash
npm run dev       # ambiente de desenvolvimento
npm run build     # build produção
npm run preview   # pré‑visualizar build
npm run lint      # ESLint
```

## Engines

- Node >= 18
- Yarn >= 1.22.5

## Licença

MIT
