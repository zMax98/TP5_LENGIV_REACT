# TP5 – Lenguajes IV (React + Vite)

Este repo es la evolución de TP3/TP4, agregando la **página API** que consume **REST Countries** (distinta de Rick & Morty).

## Cómo correr
```bash
npm i
npm run dev
```

## Deploy en GitHub Pages
Asegurate de que `vite.config.js` tenga:
```js
export default defineConfig({ base: '/TP5_LENGIV_REACT/' })
```
Luego:
```bash
npm run deploy
```

- Página: `https://<usuario>.github.io/TP5_LENGIV_REACT/`
- Repo: `https://github.com/<usuario>/TP5_LENGIV_REACT`
