---
name: design-institucional-hnre
description: >-
  Sistema de identidade visual do Hospital Naval de Recife (HNRe) e da Marinha do Brasil,
  derivado do MIV MB (dez/2025). Use SEMPRE que for CRIAR, ESTILIZAR ou REVISAR qualquer
  entrega visual do contexto JRS/HNRe, HNRe ou Marinha — apresentações e slides (Google Slides,
  PowerPoint/PPTX, Canva), artefatos HTML/React, apps web, dashboards, PWA e apps mobile (iOS,
  Android, React Native), PDFs, cartazes, banners, aulas e peças institucionais. Dispara mesmo
  sem a palavra "design": basta o pedido envolver uma entrega visual da JRS/HNRe/Marinha
  ("monta um slide da JRS", "faz um painel do HNRe", "cria a tela do app", "landing da OM").
  A skill GERA já no padrão (cores #050F41/#FAB932/#079551, tipografia Octin College → Montserrat →
  Bebas Neue Pro → Arial, marca oficial, tokens prontos) e AUDITA conformidade com checklists.
  Não use para conteúdo médico-pericial normativo (DGPM-406), mapeamento de processos (Netuno)
  ou diagramas BPMN — essas têm skills próprias; combine com elas quando a entrega for visual.
---

# Design Institucional — HNRe / Marinha do Brasil

Traduz o **Manual de Identidade Visual da Marinha do Brasil (MIV MB, dez/2025)** em decisões
operacionais recorrentes para produtos digitais e apresentações do **Hospital Naval de Recife (HNRe)**
e da **Junta Regular de Saúde (JRS)**. A skill tem dois modos, quase sempre usados juntos:

- **GERAR** — produzir a entrega (slide, artefato, app, tela, PDF) já dentro do padrão.
- **AUDITAR** — revisar uma entrega existente contra os checklists de conformidade.

## Regra de prevalência (leia primeiro)

Em qualquer divergência, omissão ou caso excepcional, **prevalece o MIV MB**, seguido das
orientações do **CCEM** e da cadeia de comando. Esta skill é padrão operacional do HNRe, abaixo do MIV.
**Pare e sinalize ao usuário** (não improvise) sempre que a tarefa exigir: criar nova versão de
logotipo/distintivo/lettering/monograma, assinatura própria da OM, slogan local, app icon derivado
da marca, composição conjunta com outra Força, ou qualquer uso de marca não previsto. Esses casos
exigem validação institucional.

---

## Núcleo inegociável (aplica-se a TODA entrega)

Estas regras valem em web, slide, mobile, PDF e impresso. Detalhe e exceções nos `references`.

### Cores institucionais — exatamente estes valores

| Cor | HEX | Papel |
|---|---|---|
| **AZUL MARINHA** | `#050F41` | Cor dominante: cabeçalhos, navegação, títulos, fundos formais, ações primárias. |
| **AMARELO OURO** | `#FAB932` | Acento de alta visibilidade: foco, divisores, destaques breves. Nunca fundo dominante; nunca texto sobre branco. |
| **VERDE BRASIL** | `#079551` | Acento complementar: confirmação, progresso, estado favorável. Não substitui o azul. |

- **Proporção cromática:** ~60–80% branco/respiro · 15–30% Azul Marinha · até 10% Amarelo Ouro + Verde Brasil somados.
- Nunca recalcular/"corrigir" o HEX do Verde Brasil — usar `#079551` (ver nota em `references/cores.md`).
- **Cores secundárias do distintivo naval NÃO são paleta institucional** e não viram séries de dados.
- Estado (erro/sucesso/prioridade) **nunca** só por cor: sempre com texto, ícone ou rótulo.
- Cores funcionais (danger/warning/info) são de UI, não institucionais, e jamais tocam a marca.

### Tipografia — hierarquia oficial

1. **Octin College** (principal) — só títulos e destaques curtos (≤ 3 linhas; ≤ 2 no mobile). Nunca em corpo, tabela, formulário ou laudo.
2. **Montserrat** (apoio) — fonte de uso amplo: corpo, títulos, tabelas, UI, legendas.
3. **Bebas Neue Pro** (alternativa) — substitui a Octin em títulos e cabe em espaços condensados.
4. **Arial** (terciária) — só quando a Montserrat não estiver disponível. **Nunca** substitui a Octin.

Nunca reconstruir o lettering "MARINHA DO BRASIL" com fonte. Não redistribuir arquivos de fonte sem licença.

### Marca — apenas arquivos oficiais

- Usar **somente matrizes oficiais** (`.AI/.EPS/.PDF/.PNG` transparente). Ver `assets/brand/README.md`.
- **Nunca** recolorir, distorcer, rotacionar, achatar, aplicar sombra/filtro/`outline`/3D, mascarar, recortar manualmente ou usar `filter`/`mix-blend-mode` em CSS.
- **Logotipo** = público/externo/misto e materiais digitais. **Distintivo naval** = interno/militar/intranet. Matriz completa em `references/marca.md`.
- **Área de segurança** = altura da letra "M" do lettering, no contêiner da marca (não encolher o arquivo para fingir respiro).
- **Redução mínima digital:** logotipo 70px (vertical) / 40px (horizontal); distintivo 80px / 50px.
- Priorizar versão colorida; uma única zona de marca por tela/slide; nunca marca-d'água sobre conteúdo clínico.

### Acessibilidade e idioma

- Idioma padrão **pt-BR**; datas `DD/MM/AAAA`; horas em 24h.
- Contraste alto; foco visível (Amarelo Ouro); alvo de toque ≥ 44px (iOS) / 48px (Android); respeitar aumento de fonte e movimento reduzido.
- Evitar sempre: texto Amarelo Ouro sobre branco; texto branco pequeno sobre Verde Brasil.

---

## Fluxo de trabalho

### 1. Enquadrar (antes de gerar)

Responda mentalmente — e pergunte ao usuário só o que não der para inferir:

1. **Plataforma?** web/artefato · apresentação 16:9 · mobile/PWA · PDF/impresso → define qual `reference/` carregar.
2. **Público?** externo/misto vs. interno/militar → define **logotipo vs. distintivo** (`references/marca.md`).
3. **Contexto de dado?** há conteúdo clínico/pericial sensível? → anonimização e privacidade visual.
4. **A marca está disponível?** confira `assets/brand/`; se faltar o arquivo certo, veja o README e a pasta do Drive.

### 2. Carregar a referência da plataforma

Leia **apenas** o que a tarefa exigir:

| Se a entrega é… | Leia |
|---|---|
| Site, artefato HTML/React, dashboard, landing | `references/web.md` + `references/cores.md` + `references/tipografia.md` |
| Slide / apresentação / deck / aula (16:9) | `references/apresentacoes.md` |
| App mobile, PWA, tela, React Native | `references/mobile.md` |
| Regra de logo/distintivo, assinatura, fundo | `references/marca.md` |
| PDF, cartaz, banner, peça impressa | `references/cores.md` + `references/tipografia.md` + `references/marca.md` |

Tokens prontos ficam em `assets/` — **prefira reutilizá-los a redigitar valores** (evita erro de HEX/escala).

### 3. Gerar no padrão

- Comece pelos tokens: importe/cole `assets/tokens.css` (web/PWA) ou `assets/theme.ts` (React/RN); use `assets/base-web.html` ou `assets/base-mobile.html` como esqueleto.
- Para **PPTX**, combine com a skill `pptx`/`slides-jrs`; para **BPMN**, com `bpmn-generator`; para **conteúdo pericial**, com `assessor-pericial-dgpm406`. Esta skill governa a **camada visual**; elas, o conteúdo.
- Aplique a hierarquia: fundo branco → Azul Marinha estrutural → acentos pontuais. Títulos na fonte de display; corpo em Montserrat.
- Marca: uma zona, arquivo oficial, área de segurança e redução mínima respeitadas.

### 4. Auditar

Rode o checklist de `references/checklists.md` correspondente à entrega e reporte **item a item** o que passou e o que precisa corrigir, citando a regra. Nunca aprove silenciosamente uma marca recolorida, um HEX aproximado, Octin em corpo de texto, ou estado comunicado só por cor.

---

## Estrutura da skill

```
design-institucional-hnre/
├── SKILL.md                  ← você está aqui (núcleo + roteamento)
├── references/
│   ├── cores.md              paleta, tokens, contraste, proporção, nota do Verde Brasil
│   ├── tipografia.md         hierarquia + escalas (web / slide 16:9 / mobile) + matriz por plataforma
│   ├── marca.md              logotipo × distintivo, área de segurança, reduções, fundos, proibições, assinaturas conjuntas
│   ├── web.md                templates web/desktop, regras de implementação da marca em código
│   ├── apresentacoes.md      templates de slide A–E, grid 16:9, cabeçalho/rodapé, gráficos
│   ├── mobile.md             navegação, componentes, fluxos clínicos, a11y, responsividade, tokens mobile
│   └── checklists.md         checklists de conformidade (marca, cor, tipografia, layout, a11y, clínico)
└── assets/
    ├── tokens.css            variáveis CSS oficiais (comentadas)
    ├── theme.ts              tema TypeScript (React / React Native)
    ├── base-web.html         esqueleto web acessível
    ├── base-mobile.html      esqueleto PWA mobile-first (safe areas, bottom-nav)
    └── brand/README.md       procedência dos arquivos de marca + pasta oficial no Drive
```

**Base normativa:** MIV MB — dezembro/2025. **Escopo:** HNRe/JRS. Revisar sempre que o MIV, as
marcas oficiais ou as orientações do CCEM forem atualizados.
