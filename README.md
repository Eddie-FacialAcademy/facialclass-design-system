# Facial Class — Design System

Design system da **Facial Class** (assinatura de HOF da Facial Academy). Cor predominante **roxo `#644389`** (medium purple); tipografia **Silka** (embutida em woff2, headers em **Medium 500**).

Desenvolvido por **Edegar Junior**.

## Entregas

- **index.html** — design system reutilizável (showcase navegável): paleta (institucional + derivada), temas **dark/light**, tipografia (Silka), **gradientes**, **ícones** (Phosphor Thin, copiar SVG), **logos** (copiar/baixar SVG) e sistema de **botões** (variantes/tamanhos/estados; CTA preenchido via token theme-aware **`--cta`**). Click-to-copy em cores, valores e código; download PNG dos gradientes.
  - 🌐 **Online (para compartilhar):** https://eddie-facialacademy.github.io/facialclass-design-system/ — GitHub Pages (repo público `facialclass-design-system`).

## Design System portátil (`design-system/`)

Pacote para aplicar a marca em **qualquer projeto/ferramenta** (web, React, Framer, agentes de IA).

- **silka.css** — fonte **Silka** (pesos 300–700) embutida em woff2/base64, self-contained; linke antes do CSS principal.
- **facial-design-system.css** — drop-in (tokens dark/light + reset + foco + motion + tipografia + botões + chips/badges/status). CTA preenchido/sólido (`.b.fill` / `.fc-btn.fc-fill`) usa o token theme-aware **`--cta`** (conjunto `--cta-grad` / `--cta-solid` / `--cta-solid-h` / `--cta-ink`), e não `--roxo2` / `--roxo-bright` direto.
- **facial-design-tokens.json** — tokens legíveis por máquina (Style Dictionary, Framer, IA).
- **Button.tsx** — Code Component Framer/React com Property Controls.
- **DESIGN-SYSTEM.md** — spec completa, 3 formas de aplicar e **prompt pronto para IA**.
- **THEME.md** — como o claro/escuro é configurado e ativado pelo tema do sistema do visitante (web + Framer).

## Notas técnicas

- **Cores:** derivadas das **7 cores institucionais** da Facial Academy: roxo `#644389`, lilás `#A289D7`, amarelo claro `#FFE4A4`, vermelho claro `#FFB1BD`, amarelado `#FFCA9B`, branco `#FFFFFF`, preto `#000000`.
- **Tipografia:** Silka (institucional), embutida em base64/woff2; Poppins como fallback (quando a Silka não estiver disponível), depois system-ui. **Headers em Medium (500)**; eyebrow 600; numeral 700; body 300.
- **Ícones:** biblioteca **Phosphor**, peso **Thin** (stroke 1pt na grade 24), `currentColor`.
- **Tema:** dark por padrão; light via `data-theme="light"`; sem atributo segue `prefers-color-scheme`. Toggle persiste em `fc-theme`.
- **CTA theme-aware (`--cta`):** o botão preenchido/sólido usa o token `--cta`. No **tema escuro** o CTA usa roxo mais claro `#7C5EA7` (gradiente `#7C5EA7`→`#6E51A0`, hover `#6E51A0`, `--cta-ink` `#fff`); no **tema claro** mantém `#644389` (`--cta-ink` `#fff`). A identidade roxa da marca permanece inalterada.
- **Acessibilidade (2 níveis):** (1) **texto** ≥ 4.5:1; (2) **componente/botão vs fundo** ≥ 3:1 (WCAG 1.4.11, Non-text Contrast). O CTA escuro foi clareado para `#7C5EA7` justamente para passar o nível 2 — o antigo `#644389` dava ~2.6:1 contra o fundo escuro e reprovava 1.4.11.

## Publicação

Repo público `facialclass-design-system` (conta `Eddie-FacialAcademy`), branch `main`, `index.html` na raiz, GitHub Pages. `.git` fora do OneDrive (`AppData\Local\gitdirs\`); line-endings LF (`.gitattributes`). Deploy: editar → `git add/commit/push` (credencial no Cofre do Windows, sem token). Ver `HANDOFF.md`.

## CHANGELOG

### 1.0.0

- **CTA escuro mais claro + acessibilidade em 2 níveis:** o CTA preenchido/sólido passou a usar o token theme-aware `--cta`. No tema escuro o CTA usa roxo mais claro `#7C5EA7` (gradiente `#7C5EA7`→`#6E51A0`, hover `#6E51A0`, `--cta-ink` `#fff`); no tema claro mantém `#644389` (`--cta-ink` `#fff`). Os botões `.b.fill` / `.fc-btn.fc-fill` (e solid) passaram a usar `--cta` (não mais `--roxo2` / `--roxo-bright` direto). Motivo: contraste de componente — o CTA escuro foi clareado para passar o nível 2 da acessibilidade (componente/botão vs fundo ≥ 3:1, WCAG 1.4.11), pois o antigo `#644389` dava ~2.6:1 contra o fundo escuro e reprovava. Regra de 2 níveis adotada: texto ≥ 4.5:1 e componente/botão vs fundo ≥ 3:1. Identidade roxa da marca inalterada.
