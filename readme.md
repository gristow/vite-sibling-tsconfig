# Vite Sibling TSConfig Bug

When importing a typescript file from a sibling directory to the vite directory, whether by relative imports or via an alias, neither the tsconfig.json settings of the vite directory nor of the sibling directory are applied.

## To reproduce:
- clone the repo: `git clone https://github.com/gristow/vite-sibling-tsconfig.git`
- run `yarn` or `npm i` in the `vite` subdirectory
- run `yarn` or `npm i` in the `sibling` directory.
- run `yarn dev` or `npm run dev` in the `vite` subdirectory.

In this demonstration, identical files (./vite/src/lib/mobxNonSiblingDemo and ./sibling/src/mobxSiblingDemo) are imported into App.svelte.

The tsconfig `compilerOptions.useDefineForClassFields` is respected and compiled correctly for the file in the `vite/src/lib` directory, but not for the one in the `sibling/src` directory. As a result, it becomes impossible to observe certain properties on mobx stores.

## Relevant Files:

```
vite-sibling-tsconfig (root)
└───vite
│   └──src
│   │  │- App.svelte
│   │  │
│   │  └──lib
│   │      │- mobxNonSiblingDemo.ts
│   │
|   │- tsconfig.json        
│   
└───sibling
    └──src
    │  │- mobxSiblingDemo.ts
    │
    │- tsconfig.json        
```