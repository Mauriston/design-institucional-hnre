# Arquivos oficiais de marca — HNRe / Marinha do Brasil

> Regra de ouro: **usar somente matrizes oficiais**. Nunca recortar de outro arquivo, revetorizar um
> raster, capturar por print, recolorir, distorcer ou aplicar efeito. Ver `../../references/marca.md`.

## Fonte-verdade (Drive) — árvore resolvida

Pasta oficial (ID `1PvNifVgCxGmJop6F1zWf_ZheTsVHC31P`):

```
MIV MB/                         (1WYHgVIYv27CpAgTaYxWBJm1PazGJ-ISR)
├── Manual de Identidade Visual Marinha do Brasil.pdf   (1_gkmxSRL6ffCqOPeqUD_a9rnzpfkGiA7)
└── LOGOTIPO/                    (1811HIvuwS8CqXaXaQtx6BRUJDZdDj8AO)
    ├── RGB/  → PNG · PDF · EPS · AI      (PNG: 1ud8andyJWMC7yMJH-tND0yyerxzjTOsN)   ← digital
    └── CMYK/ → PNG · PDF · EPS · AI                                                  ← impressão
MIV HNRe/                       (1L6ooo6xWrUsWa9RciUjaRHuaEwZ95d32)
├── LOGO HNRe/                   (1mj_dqwe4367_RG3HOKYxglG1MiVllIgw)  → brasão do HNRe
└── MOEDAS HNRe/                 (1AnPO8Y-A-VPgY3Fc2469ejSg-Pxz0qu2)  → moedas/medalhas
```

Formatos: `.AI` (edição vetorial), `.EPS` (vetorial), `.PDF` (vetor/impressão), `.PNG` transparente
(web/apresentações/escritório). Para digital, usar **RGB/PNG** (ou vetor exportado do oficial, sem redesenho).

## Manifesto essencial (nome canônico ← arquivo de origem · ID)

**Estado:** os 7 arquivos essenciais abaixo marcados com ✓ **já estão embutidos** neste diretório
(cópias RGB/PNG oficiais). Os demais permanecem só referenciados — baixar da pasta RGB/PNG
(`1ud8andyJWMC7yMJH-tND0yyerxzjTOsN`) ou LOGO HNRe quando necessário. Nomes canônicos à esquerda.
Observação: os PNG de logotipo vêm em canvas quadrado 1787×1787 com margem transparente — preservar
proporção e não recortar a matriz.

### Logotipo da Marinha — uso externo/misto e digital

| Nome canônico (salvar assim) | Origem no Drive | ID |
|---|---|---|
| ✓ `logotipo-marinha-horizontal-colorido.png` | LOGO-COR-HOR.png | `1ygKbtdRArrOnxASbcWZY6XJIFNP8zL0T` |
| ✓ `logotipo-marinha-vertical-colorido.png` | LOGO-COR-VERT.png | `1GEzae5__xZBoyMtZXj8pHvmtzgiBYAbS` |
| ✓ `logotipo-marinha-simbolo-colorido.png` | LOGO-COR-ICON.png | `1YW_wTwus84x1jJF-CHprXrnQtpZmi22m` |
| `logotipo-marinha-horizontal-branco.png` (mono, p/ fundo Azul) | LOGO-BCO-HOR.png | `1H4p35Sxlk_DnKAMMBLHOa9ZdILF25B4_` |
| `logotipo-marinha-vertical-branco.png` (mono, p/ fundo Azul) | LOGO-BCO-VERT.png | `1IaqRJqPk7Q884QpVGt2VlEGBiwnUBebe` |
| ✓ `logotipo-marinha-horizontal-fundo-azul.png` (colorido, texto branco) | LOGO-COR-HOR-WHITE.png | `1if8Zx_S1KB2Z5aPHJJe5D8IB_WNbnGW6` |
| ✓ `logotipo-marinha-ultrawide-slogan.png` (alternativa + slogan verde, fundo claro) | LOGO-COR-ULTRAWIDE-DISCLAIMER-VD.png | `19ghxXPgUdBZmFcu1kmkQdb0xupXyZu5z` |
| ✓ `logotipo-marinha-ultrawide-slogan-fundo-azul.png` (slogan amarelo + texto branco, fundo Azul) | LOGO-COR-ULTRAWIDE-DISCLAIMER-BCO-AM.png | `10dgMC6-ISj06hFVvV2kNK85_k-0fgNrY` |
| `logotipo-marinha-ultrawide-colorido.png` (alternativa sem slogan) | LOGO-COR-ULTRAWIDE.png | `1bZjB7lsMyzrTHFSvmUZ9V1IHo4G4frVN` |

### Brasão do HNRe — identidade da OM

| Nome canônico | Origem | ID | Obs. |
|---|---|---|---|
| ✓ `brasao-hnre.png` | HNRe_BRASAO.png | `1c232rEB_44V7CfPEU-3S36Y2Av1aUwZ4` | Chapado, 308 KB — **preferir para tela**. |
| `brasao-hnre-3d.svg` | HNRe_BRASAO_3D.svg | `15AI9-YJdsFGbPEf-0mMLe5miKrw0lRBk` | Vetor 3D (~1 MB). |
| `brasao-hnre-3d.png` | HNRe_BRASAO_3D.png | `1npxqjaFJMRox7GRYNu1QMu9Ifr-6bIgf` | 3D 23 MB — só alta resolução; evitar em web. |

> **Distintivo naval** (âncora/coroa genérica da MB para uso interno) **não está nesta pasta** — só
> logotipo + brasão do HNRe. Se uma peça estritamente interna exigir o distintivo, obter a matriz
> oficial pelo CCEM antes de usar. Para a maioria dos casos internos do HNRe, o **brasão da OM** já resolve.

## Convenção de nomes na origem

`LOGO-{COR|AZ|AM|VD|BCO|PTO}-{HOR|VERT|ICON|LETT|ULTRAWIDE}[-WHITE][-DISCLAIMER-*].png`
onde COR=colorido · AZ/AM/VD/BCO/PTO=mono (azul/amarelo/verde/branco/preto) · ICON=só símbolo ·
LETT=só lettering · ULTRAWIDE=horizontal alternativa · DISCLAIMER=com slogan.

## Reduções mínimas digitais (não violar)

Logotipo vertical 70 px · horizontal 40 px. Distintivo vertical 80 px · horizontal 50 px.
Área de segurança = altura da letra "M" do lettering, aplicada no contêiner (token `--brand-clearspace`).

## Escolha rápida: qual marca

- Público externo / paciente / civil / web pública → **logotipo (colorido)**.
- Fundo Azul Marinha / escuro → versão **branca** (mono) ou `-fundo-azul`.
- Fundo Amarelo ou Verde → nunca colorida; usar mono autorizada.
- Interno / OM → **brasão do HNRe**; conjunto com outra Força → distintivo naval (CCEM), ordem MB · EB · FAB.

## Procedência / versão

Base normativa: MIV MB — dezembro/2025 (manual completo: ID `1_gkmxSRL6ffCqOPeqUD_a9rnzpfkGiA7`).
Origem: CCEM / pasta institucional no Drive. Registrar data de cópia e versão ao atualizar.
Não editar as matrizes; não incluir arquivos de fonte sem licença.
