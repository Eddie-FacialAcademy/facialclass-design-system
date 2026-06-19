# Handoff — Facial Class Design System (estado em 2026-06-11)

**Versão:** 1.0.0

Desenvolvido por **Edegar Junior**. Ponto de retomada; atualizar conforme avançar.

## ✅ Concluído

### Design system online (GitHub Pages)
- **URL pública:** https://eddie-facialacademy.github.io/facialclass-design-system/
- Repo público `facialclass-design-system` (conta `Eddie-FacialAcademy`), branch `main`, `index.html` na raiz.
- `index.html`: showcase self-contained, dark/light automático + toggle, click-to-copy, **copiar/baixar SVG** de logos+ícones, **download PNG** dos gradientes.

### Pacote portátil (`design-system/`)
- `silka.css` · `facial-design-system.css` · `facial-design-tokens.json` · `Button.tsx` · `THEME.md` · `DESIGN-SYSTEM.md`.

### Marca
- **Cor predominante:** roxo `#644389` (medium purple). Institucionais (7): roxo, lilás `#A289D7`, amarelo claro `#FFE4A4`, vermelho claro `#FFB1BD`, amarelado `#FFCA9B`, branco, preto.
- **Logos** Facial (4 composições) embutidos como `<symbol>` `currentColor` (seguem o tema: branco no dark, roxo no light).
- **Tipografia** Silka — **headers em Medium (500)**; eyebrow 600; numeral 700; body 300.

### CTA theme-aware (`--cta`) — contraste de componente
- **Tema escuro:** o CTA (botão preenchido/sólido) usa roxo mais claro `#7C5EA7` (gradiente `#7C5EA7 → #6E51A0`; hover `#6E51A0`; texto branco). Antes era `#644389`, que "apagava" no fundo escuro (~2.6:1 vs fundo) e reprovava na WCAG 1.4.11 (Non-text Contrast).
- **Tema claro:** CTA permanece `#644389` (texto branco), **inalterado**.
- **Tokens:** `--cta-grad` / `--cta-solid` / `--cta-solid-h` / `--cta-ink`. Os botões `.b.fill` / `.fc-btn.fc-fill` (e solid) consomem `--cta`, **não mais** `--roxo2` direto.
- **Acessibilidade em 2 níveis:** (1) **texto** ≥ 4.5:1; (2) **componente/botão vs. fundo** ≥ 3:1 (WCAG 1.4.11, Non-text Contrast). O CTA escuro foi clareado justamente para passar o nível 2. Registrado no `design-system/CHANGELOG.md`.

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
