# Cores — HNRe / Marinha do Brasil

## 1. Cores institucionais oficiais

| Cor | HEX | RGB (tela) | CMYK (impressão) | PANTONE® |
|---|---|---|---|---|
| **AZUL MARINHA** | `#050F41` | R 5 · G 15 · B 65 | C 100 · M 75 · Y 0 · K 75 | 2768 C |
| **AMARELO OURO** | `#FAB932` | R 250 · G 185 · B 50 | C 0 · M 30 · Y 100 · K 0 | 1235 C |
| **VERDE BRASIL** | `#079551` | R 0 · G 148 · B 68 | C 90 · M 16 · Y 100 · K 4 | 355 C |

> **Nota técnica (não ignorar):** o HEX do Verde Brasil é `#079551`, enquanto o MIV informa o RGB
> equivalente como R 0 · G 148 · B 68. **Não recalcular nem "corrigir"** — usar `#079551` em tela e o
> valor correspondente ao meio (RGB/CMYK/Pantone) conforme indicado pelo próprio MIV. Não gerar um
> terceiro valor "médio".

## 2. Função de cada cor

| Cor | Função predominante |
|---|---|
| **AZUL MARINHA** | Dominante: cabeçalhos, navegação, títulos, fundos formais, barras de seção, ações primárias, série principal de dados. |
| **AMARELO OURO** | Acento de alta visibilidade: foco, divisores, marcadores, destaques breves, ícones. **Nunca** fundo dominante de grandes áreas; **nunca** texto sobre branco. |
| **VERDE BRASIL** | Acento complementar: confirmações, indicadores positivos, progresso, destaques secundários. Não substitui o Azul Marinha como cor principal. |
| Branco | Fundo principal, respiro, suporte para a versão colorida da marca. |
| Preto | Restrito: aplicações positivas monocromáticas e alto contraste funcional. |

## 3. Proporção cromática operacional

- **60–80%** branco e áreas de respiro;
- **15–30%** Azul Marinha;
- **até 10%** Amarelo Ouro + Verde Brasil somados.

Recomendação de implementação do HNRe (não fórmula do MIV): evita excesso cromático e preserva o caráter institucional.

## 4. Contraste (acessibilidade digital)

Adaptações técnicas para tela — não alteram as cores institucionais.

| Fundo | Texto | Contraste | Uso |
|---|---|---|---|
| `#050F41` Azul | Branco | 18,24:1 | Texto e títulos. |
| Branco | `#050F41` Azul | 18,24:1 | Corpo, títulos, controles. |
| `#FAB932` Ouro | `#050F41` Azul | 10,47:1 | Destaques, botões de acento. |
| `#079551` Verde | `#050F41` Azul | 4,71:1 | Texto normal com tamanho/peso adequados. |
| `#079551` Verde | Branco | 3,87:1 | **Só** texto grande ou negrito. |
| `#FAB932` Ouro | Branco | 1,74:1 | **Não usar para texto.** |

**Regras funcionais obrigatórias:** não comunicar estado só por cor; acompanhar cor semântica com texto/ícone/padrão; evitar texto Ouro sobre branco; evitar texto branco pequeno sobre Verde; não criar "novas cores institucionais" a partir das cores secundárias do distintivo (elas existem só para compor a coroa naval).

## 5. Tokens CSS (fonte-verdade: `assets/tokens.css`)

```css
:root {
  --mb-azul-marinha: #050f41;
  --mb-amarelo-ouro: #fab932;
  --mb-verde-brasil: #079551;
  --mb-branco: #ffffff;
  --mb-preto: #000000;

  /* Derivações por transparência (não são novas cores) */
  --mb-azul-04: rgba(5, 15, 65, 0.04);
  --mb-azul-08: rgba(5, 15, 65, 0.08);
  --mb-azul-16: rgba(5, 15, 65, 0.16);
  --mb-azul-32: rgba(5, 15, 65, 0.32);
  --mb-overlay: rgba(5, 15, 65, 0.72);

  /* Aplicação semântica */
  --color-brand: var(--mb-azul-marinha);
  --color-accent: var(--mb-amarelo-ouro);
  --color-positive: var(--mb-verde-brasil);
  --color-background: var(--mb-branco);
  --color-surface: var(--mb-branco);
  --color-text: var(--mb-azul-marinha);
  --color-border: var(--mb-azul-16);
  --color-focus: var(--mb-amarelo-ouro);
}
```

## 6. Cores funcionais (UI) — não institucionais

Erros, riscos e estados podem exigir cores semânticas. Elas **não** são institucionais, **não** tocam a
marca e ficam visualmente subordinadas ao Azul Marinha; sempre com texto/ícone.

```css
--ui-success: #079551;  /* coincide com Verde Brasil */
--ui-warning: #9a6700;
--ui-danger:  #b42318;
--ui-info:    #175cd3;
```
