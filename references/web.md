# Web / Artefatos / Apps — HNRe

Para cores e tipografia use `cores.md` e `tipografia.md`. Esqueleto pronto: `../assets/base-web.html`
e tokens em `../assets/tokens.css`. Tema React/RN: `../assets/theme.ts`.

## 1. Princípios

Traduzir a personalidade da MB — **Moderna** (interfaces claras, responsivas, design plano, sem
ornamentação), **Confiável** (hierarquia previsível, dados legíveis, contrastes consistentes, marcas
corretas) e **Inspiradora** (valoriza o serviço e o compromisso com o paciente).

## 2. Layout

- Fundo branco dominante; Azul Marinha na estrutura (cabeçalho, navegação, ações primárias); acentos pontuais em Amarelo Ouro/Verde Brasil.
- Container central ~`75rem`; margens/respiro generosos; alinhamento à esquerda; evitar parágrafos centralizados longos.
- Cards: fundo branco, borda derivada do Azul (`--mb-azul-16`), raio moderado, sombra mínima ou ausente. Estado positivo com borda superior Verde + texto/ícone (nunca só cor).
- Botões: `--primary` (Azul/branco), `--secondary` (borda Azul), `--accent` (Amarelo/Azul), `--positive` (Verde/Azul). Altura mínima ~2.75rem; rótulo iniciado por verbo.

## 3. Marca em código (resumo — detalhe em `marca.md` §11)

- Só arquivo oficial via `<img>` com `alt`; área de segurança no contêiner (`--brand-clearspace`, calibrado pela altura do "M").
- Redução mínima digital: logo horizontal `min-height: 40px`, vertical `70px`; distintivo `50px`/`80px`.
- Proibido `filter`/`mix-blend-mode`/máscara/recoloração; nunca como `background-image` institucional.

## 4. Acessibilidade

`skip-link`; foco visível em Amarelo Ouro (`:focus-visible { outline: 3px solid ... }`); contraste conforme
`cores.md`; testar zoom 200%, navegação por teclado, `prefers-reduced-motion`; `theme-color` = `#050F41`;
informação nunca só por cor. Testar em largura móvel, desktop, projeção e impressão.

## 5. Estrutura HTML base (ver arquivo completo em assets)

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#050F41" />
  <title>Hospital Naval de Recife</title>
  <link rel="stylesheet" href="/styles/hnre.css" />
</head>
<body>
  <a class="skip-link" href="#conteudo">Ir para o conteúdo</a>
  <header class="institutional-header">
    <div class="institutional-header__inner">
      <div class="brand-safe-area" aria-label="Marinha do Brasil">
        <img class="brand-logo brand-logo--horizontal"
             src="/assets/marca/logotipo-marinha-horizontal-colorido.png"
             alt="Marinha do Brasil" width="240" height="80" />
      </div>
      <div class="institutional-id">
        <p class="institutional-id__eyebrow">Marinha do Brasil</p>
        <p class="institutional-id__name">Hospital Naval de Recife</p>
      </div>
    </div>
  </header>
  <main id="conteudo" class="page-shell"><!-- hero, seções, cards --></main>
  <footer class="institutional-footer">
    <p>Hospital Naval de Recife · Marinha do Brasil</p>
  </footer>
</body>
</html>
```

## 6. Artefatos e React

- Reutilizar `assets/tokens.css` (ou mapear para Tailwind theme). Em React, `assets/theme.ts` dá o objeto de cores/tipografia/espaço.
- Manter o mesmo sistema visual entre artefato inline, app web e PWA — a diferença é layout, não identidade.
- Para dashboards, ver também `apresentacoes.md` §Dados e `mobile.md` §Dados/indicadores (rótulos diretos, série principal em Azul, séries de comparação em Ouro/Verde, nunca cores do distintivo como série).
