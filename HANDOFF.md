# Handoff — Facial Class Design System (estado em 2026-06-11)

Desenvolvido por **Edegar Junior**. Ponto de retomada; atualizar conforme avançar.

## ✅ Concluído

### Design system online (GitHub Pages)
- **URL pública:** https://eddie-facialacademy.github.io/facialclass-design-system/
- Repo público `facialclass-design-system` (conta `Eddie-FacialAcademy`), branch `main`, `index.html` na raiz.
- `index.html`: showcase self-contained, dark/light automático + toggle, click-to-copy, **copiar/baixar SVG** de logos+ícones, **download PNG** dos gradientes.

### Pacote portátil (`design-system/`)
- `silka.css` · `facial-design-system.css` · `facial-design-tokens.json` · `Button.tsx` · `THEME.md` · `DESIGN-SYSTEM.md`.

### Marca (fiel ao brandbook §3.3)
- **Cor predominante:** roxo `#644389` (medium purple). Institucionais (7): roxo, lilás `#A289D7`, amarelo claro `#FFE4A4`, vermelho claro `#FFB1BD`, amarelado `#FFCA9B`, branco, preto.
- **Logos** Facial (4 composições) embutidos como `<symbol>` `currentColor` (seguem o tema: branco no dark, roxo no light).
- **Tipografia** Silka — **headers em Medium (500)**; eyebrow 600; numeral 700; body 300.

## Deploy / git (durável)
- `.git` **fora do OneDrive**: `AppData\Local\gitdirs\` (fonte: `_online-design-system/`, espelho de `../facialclass-brand-system.html`).
- **LF** travado (`.gitattributes`); `.gitignore` barra `desktop.ini`.
- **Auth:** Git Credential Manager (Cofre do Windows) — push **silencioso, sem token**. Republicar: editar → `git add/commit/push`.

## 🔜 Próximo (Framer)
- A landing já está montada na `/facialclass-v2` (Framer). Componentização em andamento — ver `../framer-api/FRAMER-BUILD-RECIPE.md` na pasta do projeto da landing.
- Aplicar os Text Styles (L/M/S = 1200/810/390) e Color Styles a partir deste design system — ver `design-system/DESIGN-SYSTEM.md`.

## Arquivos-chave
- Showcase: `index.html`
- Pacote portátil: `design-system/` (css, tokens.json, Button.tsx, silka.css, DESIGN-SYSTEM.md, THEME.md)
- Docs: `README.md`, `HANDOFF.md`
