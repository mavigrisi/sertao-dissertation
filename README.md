# Plataforma digital da tese — "O sertão vai dar no mediterrâneo"

Site Jekyll com os 6 capítulos definidos no planejamento da tese, estrutura de navegação por tema/texto-guia/linha do tempo, e a base para a rede de conexões (Cytoscape.js) e os mapas (Leaflet.js).

## Rodar localmente

```bash
bundle install
bundle exec jekyll serve
```

Acesse `http://localhost:4000`.

## Estrutura

- `_chapters/` — os 6 capítulos, como uma *collection* do Jekyll. Cada arquivo tem front matter com `numero`, `slug`, `texto_guia`, `relacionados` (links para outros capítulos) e `ferramentas` (lista das ferramentas técnicas daquele capítulo).
- `_layouts/`
  - `default.html` — casca do site (nav + footer).
  - `home.html` — home/portal sensorial.
  - `chapter.html` — template padrão de capítulo (conteúdo + barra lateral com minimapa, texto-guia e capítulos relacionados).
  - `network.html` — usado pelo Capítulo 5 (rede interativa).
- `_includes/` — componentes reutilizáveis (nav, footer, minimapa, caixa de texto-guia, capítulos relacionados, carregamento condicional de bibliotecas JS/CSS via `head-libs.html`).
- `_data/` — dados estruturados (a povoar: por exemplo `timeline.yml`).
- `assets/data/network.json` — dados de exemplo da rede (nós/arestas). **Substituir pelos dados reais da pesquisa.**
- `assets/data/rotas-cristaos-novos.geojson` — dados de exemplo para o mapa do Capítulo 3. **Substituir.**
- `assets/js/network.js` — inicializa o Cytoscape.js na página da rede.
- `assets/css/main.css` — estilo base (não é design final).
- `_bibliography/references.bib` — bibliografia em BibTeX, usada pelo plugin `jekyll-scholar` para citações no site.
- `.github/workflows/deploy.yml` — build e publicação automática no GitHub Pages via GitHub Actions.

## Por que build via GitHub Actions, e não o build automático do GitHub Pages

O build automático do GitHub Pages só permite uma lista restrita de plugins (não inclui `jekyll-scholar`, usado aqui para citações). O workflow em `.github/workflows/deploy.yml` builda o site com `bundle exec jekyll build` (liberdade total de plugins) e publica o resultado — isso preserva o layout e o comportamento independentemente de mudanças futuras na lista de plugins permitidos pelo GitHub.

No repositório do GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Submissão à OhioLINK/ETD

Conforme as diretrizes já registradas no projeto: o PDF exigido pela OSU é apenas a capa/página de assinatura; o site (este repositório, zipado) é o arquivo suplementar.

## Adicionar bibliotecas por capítulo

No front matter de qualquer página, use `libs: [leaflet, cytoscape, wavesurfer, timeline, photoswipe]` conforme necessário — `_includes/head-libs.html` carrega os scripts/CSS via CDN automaticamente.

## Próximos passos sugeridos

1. Substituir os dados de exemplo (`network.json`, `rotas-cristaos-novos.geojson`) pelos dados reais.
2. Definir os textos-guia de cada capítulo (front matter `texto_guia`).
3. Decidir hospedagem de áudio/vídeo pesado (Git LFS vs. Internet Archive/repositório institucional — ver documento de ferramentas técnicas do projeto).
4. Popular `_bibliography/references.bib` com a bibliografia completa do prospectus.
5. Escrever o conteúdo de cada capítulo (hoje com texto placeholder `[conteúdo a desenvolver]`).
