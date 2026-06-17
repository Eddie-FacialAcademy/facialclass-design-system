# Facial Class — Design System

Design system da **Facial Class** (assinatura de HOF da Facial Academy). Marca alinhada ao brandbook Facial Academy (§3.3); cor predominante **roxo `#644389`** (medium purple); tipografia **Silka** (embutida em woff2, headers em **Medium 500**).

Desenvolvido por **Edegar Junior**.

## Entregas

- **index.html** — design system reutilizável (showcase navegável): paleta (institucional + derivada), temas **dark/light**, tipografia (Silka), **gradientes**, **ícones** (Phosphor Thin, copiar SVG), **logos** (copiar/baixar SVG) e sistema de **botões** (variantes/tamanhos/estados). Click-to-copy em cores, valores e código; download PNG dos gradientes.
  - 🌐 **Online (para compartilhar):** https://eddie-facialacademy.github.io/facialclass-design-system/ — GitHub Pages (repo público `facialclass-design-system`).

## Design System portátil (`design-system/`)

Pacote para aplicar a marca em **qualquer projeto/ferramenta** (web, React, Framer, agentes de IA).

- **silka.css** — fonte **Silka** (pesos 300–700) embutida em woff2/base64, self-contained; linke antes do CSS principal.
- **facial-design-system.css** — drop-in (tokens dark/light + reset + foco + motion + tipografia + botões + chips/badges/status).
- **facial-design-tokens.json** — tokens legíveis por máquina (Style Dictionary, Framer, IA).
- **Button.tsx** — Code Component Framer/React com Property Controls.
- **DESIGN-SYSTEM.md** — spec completa, 3 formas de aplicar e **prompt pronto para IA**.
- **THEME.md** — como o claro/escuro é configurado e ativado pelo tema do sistema do visitante (web + Framer).

## Notas técnicas

- **Cores:** derivadas das **7 cores institucionais** da Facial Academy (brandbook §3.3): roxo `#644389`, lilás `#A289D7`, amarelo claro `#FFE4A4`, vermelho claro `#FFB1BD`, amarelado `#FFCA9B`, branco `#FFFFFF`, preto `#000000`.
- **Tipografia:** Silka (institucional), embutida em base64/woff2; Poppins como fallback (quando a Silka não estiver disponível), depois system-ui. **Headers em Medium (500)**; eyebrow 600; numeral 700; body 300.
- **Ícones:** biblioteca **Phosphor**, peso **Thin** (stroke 1pt na grade 24), `currentColor`.
- **Tema:** dark por padrão; light via `data-theme="light"`; sem atributo segue `prefers-color-scheme`. Toggle persiste em `fc-theme`.

## Publicação

Repo público `facialclass-design-system` (conta `Eddie-FacialAcademy`), branch `main`, `index.html` na raiz, GitHub Pages. `.git` fora do OneDrive (`AppData\Local\gitdirs\`); line-endings LF (`.gitattributes`). Deploy: editar → `git add/commit/push` (credencial no Cofre do Windows, sem token). Ver `HANDOFF.md`.
