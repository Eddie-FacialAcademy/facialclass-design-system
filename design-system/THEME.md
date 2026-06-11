# Tema claro/escuro — Facial Class Design System

Desenvolvido por **Edegar Junior**.

**Regra:** o **dark é a base**; o **light é a variante**. O site/app **segue automaticamente a aparência do sistema do visitante** (`prefers-color-scheme`). Opcionalmente, um **toggle** deixa o usuário escolher e a escolha é **lembrada** (`localStorage`).

Toda cor é um token com par **Light/Dark**. Componentes consomem tokens — nunca hex solto — então trocam de tema sozinhos.

---

## 1. Web (HTML/CSS) — já implementado em `facial-design-system.css`

Três camadas, nesta ordem:

```css
/* 1) Base = dark (padrão) */
:root{ --bg:#0A070E; --txt:#F9F8FD; /* … todos os tokens dark … */ color-scheme:dark; }

/* 2) Segue o sistema: se o SO está em light e o usuário NÃO escolheu manualmente */
@media (prefers-color-scheme: light){
  :root:not([data-theme="dark"]){ --bg:#FFFFFF; --txt:#241733; /* … light … */ color-scheme:light; }
}

/* 3) Escolha manual do usuário (toggle) vence o sistema */
[data-theme="light"]{ --bg:#FFFFFF; --txt:#241733; /* … light … */ color-scheme:light; }
[data-theme="dark"]{ /* herda o :root dark */ }
```

Resultado:
- SO dark + sem escolha → **dark**
- SO light + sem escolha → **light** (automático)
- `data-theme` definido → **vence** o sistema

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
- [ ] Testar nos dois temas (contraste e legibilidade).
