# Tema claro/escuro — Facial Class Design System

Desenvolvido por **Edegar Junior**.

**Regra:** o **dark é a base**; o **light é a variante**. O site/app **segue automaticamente a aparência do sistema do visitante** (`prefers-color-scheme`). Opcionalmente, um **toggle** deixa o usuário escolher e a escolha é **lembrada** (`localStorage`).

Toda cor é um token com par **Light/Dark**. Componentes consomem tokens — nunca hex solto — então trocam de tema sozinhos.

---

## 1. Web (HTML/CSS) — já implementado em `facial-design-system.css`

Três camadas, nesta ordem:

```css
/* 1) Base = dark (padrão) */
:root{ --bg:#0A070E; --txt:#F9F8FD; /* … todos os tokens dark … */
       /* CTA theme-aware (dark): roxo MAIS CLARO #7C5EA7 */
       --cta-grad:linear-gradient(120deg,#7C5EA7,#6E51A0); --cta-solid:#7C5EA7; --cta-solid-h:#6E51A0; --cta-ink:#fff;
       color-scheme:dark; }

/* 2) Segue o sistema: se o SO está em light e o usuário NÃO escolheu manualmente */
@media (prefers-color-scheme: light){
  :root:not([data-theme="dark"]){ --bg:#FAFAFA; --txt:#241733; /* … light … */ color-scheme:light; }
}

/* 3) Escolha manual do usuário (toggle) vence o sistema */
[data-theme="light"]{ --bg:#FAFAFA; --txt:#241733; /* … light … */ color-scheme:light; }
[data-theme="dark"]{ /* herda o :root dark */ }
```

Resultado:
- SO dark + sem escolha → **dark**
- SO light + sem escolha → **light** (automático)
- `data-theme` definido → **vence** o sistema

### CTA theme-aware (`--cta`)

O botão de ação principal (preenchido/sólido) também é um token com par **Light/Dark**: `--cta-grad` / `--cta-solid` / `--cta-solid-h` / `--cta-ink`.

- **Tema escuro:** o CTA usa roxo **MAIS CLARO** `#7C5EA7` — gradiente `#7C5EA7 → #6E51A0`, hover `#6E51A0`, texto branco (`--cta-ink:#fff`).
- **Tema claro:** o CTA = `#644389` (texto branco).

> No dark o valor antes era `#644389`, que **apagava** sobre o fundo escuro (~2.6:1 vs. fundo) e reprovava na **WCAG 1.4.11** (contraste de componente); por isso foi clareado para `#7C5EA7`.

Os botões preenchidos/sólidos (`.b.fill` / `.fc-btn.fc-fill` e a variante solid) **consomem o token `--cta`** (`--cta-grad` no fill, `--cta-solid` + `--cta-solid-h` no solid, `--cta-ink` no texto) — **nunca** `--roxo2` / `--roxo-bright` diretamente. Assim o CTA troca de tema sozinho e mantém o contraste de componente.

### Toggle (anti-flash + persistente)
No `<head>`, **antes** da pintura, pra não piscar:
```html
<script>(function(){try{var t=localStorage.getItem('fc-theme');
if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';
document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();</script>
```
Botão que alterna e salva:
```js
btn.addEventListener('click',function(){
  var n=document.documentElement.getAttribute('data-theme')==='light'?'dark':'light';
  document.documentElement.setAttribute('data-theme',n);
  localStorage.setItem('fc-theme',n);
});
```

> `color-scheme` em cada tema faz scrollbars/controles nativos acompanharem. No light, dourado/rosa como **texto** usam as variantes `-ink`.

> **Acessibilidade em 2 níveis** (vale para botões/CTA e contraste em geral):
> 1. **Texto** ≥ **4.5:1** (AA) — ex.: no light, dourado/rosa usam as variantes `-ink`.
> 2. **Componente/botão vs. fundo** ≥ **3:1** (WCAG 1.4.11, *Non-text Contrast*) — ex.: o CTA do tema escuro foi clareado para `#7C5EA7` justamente para passar este nível, que o valor anterior `#644389` (~2.6:1 vs. fundo) não cumpria.

---

## 2. Framer — como deve ser feito

1. **Color Styles com Light + Dark** (já subidos em `Facial Class/…`): cada estilo tem valor de Light e de Dark. ✅
2. **Aplique os Color Styles** nos fills/textos das camadas (não use hex solto). Como o estilo carrega os dois valores, a camada troca de tema sozinha.
3. **Ativação por tema do visitante:** o site publicado **segue o `prefers-color-scheme`** do sistema automaticamente quando as cores usam Color Styles com variante Dark. Não precisa de código.
4. **Toggle manual no Framer (opcional):** crie uma Variable de tema (ou use um Component com variantes Light/Dark) ligada a um botão; ela sobrepõe o tema do sistema, equivalente ao `data-theme` da web. Persistência fica por conta do toggle.

> Importante: o que faz o tema funcionar é **tudo usar os Color Styles**. Qualquer cor hardcoded não troca. Mesma regra da web (tokens, nunca hex solto).

---

## 3. Checklist
- [ ] Todas as superfícies/textos usam Color Styles (web: tokens; Framer: Color Styles).
- [ ] `prefers-color-scheme` ativo (web: o `@media`; Framer: Color Styles com Dark).
- [ ] Toggle opcional persiste a escolha (`fc-theme`) e sobrepõe o sistema.
- [ ] No light, texto dourado/rosa usa `-ink` (contraste AA).
- [ ] Botões fill/solid consomem `--cta` (`--cta-grad`/`--cta-solid`/`--cta-solid-h`/`--cta-ink`), nunca `--roxo2`/`--roxo-bright` direto.
- [ ] Acessibilidade em **2 níveis**: (1) texto ≥ 4.5:1 (AA, ex. tokens `-ink`); (2) componente/botão vs. fundo ≥ 3:1 (WCAG 1.4.11). O CTA escuro `#7C5EA7` passa o nível 2.
- [ ] Testar nos dois temas (contraste e legibilidade).
