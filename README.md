# Boilterplate 🚀🌭

Adjusted for my needs, updated deps.

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## 🔨 Configured development tools:

- [Vue 3](https://v3.vuejs.org/) - The framework
- [Vite](https://vitejs.dev/) - With type check. Auto start on IDE startup
- [Typescript](https://www.typescriptlang.org/) - Strict types
- [Vue Router](https://router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Axios](https://axios-http.com/)
- [ESLint](https://eslint.org/) ± [Prettier](https://prettier.io/)
- [Tailwind](https://tailwindcss.com/) - basic setup

## Unit tests tools

- [Jest](https://jestjs.io/)

## Recommended IDE Setup

- [VSCodium](https://vscodium.com/) - Open-source VSCode
- All the environment is already set up, just install the recommended extensions (plugin hints are available in IDE)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

// *This doesn't seem to work. The option is **absent*** ✂️...

## 🚀 How to get started ?

### 1. Clone the repo. Don't tell me you need a guide for it

### 2. Install deps
```sh
yarn -D
```

### Scripts
Debug: ``` yarn dev ```

Lint: ``` yarn lint ```

Build: ``` yarn build ```