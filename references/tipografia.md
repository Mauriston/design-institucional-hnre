# Tipografia — HNRe / Marinha do Brasil

## 1. Hierarquia oficial

| Classificação (MIV) | Família | Função |
|---|---|---|
| **Principal** | **Octin College** | Títulos e destaques; força e tradição. |
| **Apoio** | **Montserrat** | Uso amplo: títulos, subtítulos, corpo, tabelas, legendas, UI. |
| **Alternativa** | **Bebas Neue Pro** | Alternativa à Octin em títulos; texto condensado em espaço reduzido. |
| **Terciária** | **Arial** | Só substitui a Montserrat quando indisponível. **Nunca** substitui a Octin. |

Pesos disponíveis: Octin (Light→Black) · Montserrat (Light, Regular, Medium, Bold, Extrabold, Black) ·
Bebas Neue Pro (Thin→ExtraBold).

## 2. Octin College — quando (e quando não)

**Usar:** capa/hero, título principal de seção, nome de campanha, identificação da OM em peça aprovada, chamadas curtas.
Limitar a **≤ 3 linhas** (≤ 2 no mobile) e a corpos confortáveis.

**Nunca usar em:** prontuários, laudos, relatórios longos, formulários, tabelas clínicas, instruções ao
paciente, corpo de e-mail, botões, campos, menus, notificações, ou textos abaixo do tamanho confortável.
Nunca reconstruir o lettering naval com ela.

## 3. Montserrat — a fonte de trabalho

Padrão para praticamente tudo: títulos e subtítulos, corpo, formulários e campos, legendas, tabelas,
dashboards, gráficos (eixos/legendas), navegação, notas e metadados. É a família mais legível em tela e impresso.

## 4. Bebas Neue Pro / Arial

- **Bebas Neue Pro:** títulos curtos, números de destaque, faixas/painéis condensados. Evitar em instruções clínicas, parágrafos, formulários, rótulos críticos ou textos lidos sob pressão.
- **Arial:** só como fallback da Montserrat (estações sem as fontes, sistemas legados, exportações sem embed).

## 5. Matriz de uso por plataforma

| Elemento | Web | Google Slides | Canva |
|---|---|---|---|
| Título de capa | Octin (ou Bebas alt.) | Octin se disponível; senão Bebas | Octin se licenciada/carregada; senão Bebas |
| Títulos de seção | Octin ou Bebas | Octin ou Bebas | Octin ou Bebas |
| Subtítulos | Montserrat ou Bebas | Montserrat | Montserrat |
| Corpo | Montserrat | Montserrat; Arial só se indisponível | Montserrat; Arial só se indisponível |
| Tabelas/gráficos | Montserrat | Montserrat | Montserrat |
| Legendas compactas | Montserrat ou Bebas | Montserrat ou Bebas | Montserrat ou Bebas |

> Disponibilidade técnica não autoriza redistribuir arquivos de fonte. Hospedar/embutir só fontes licenciadas para o projeto.

## 6. Escala — Web

| Token | Fonte | Tamanho | Peso | Line-height | Uso |
|---|---|---|---|---|---|
| `display` | Octin / Bebas | 40–56px | Bold–Black | 1.0–1.1 | Capa/hero; ≤ 3 linhas. |
| `h1` | Octin / Bebas | 32–40px | Bold | 1.1 | Título principal. |
| `h2` | Montserrat | 24–32px | Bold–Extrabold | 1.2 | Seções. |
| `h3` | Montserrat | 18–24px | Bold | 1.3 | Subseções, cards. |
| `body-lg` | Montserrat | 18px | Regular | 1.55 | Introduções, instruções. |
| `body` | Montserrat | 16px | Regular | 1.55–1.65 | Corpo padrão. |
| `body-sm` | Montserrat | 14px | Regular–Medium | 1.5 | Tabelas, legendas, metadados. |
| `label` | Montserrat | 12–14px | Medium–Bold | 1.3 | Formulários, controles. |

## 7. Escala — Apresentações 16:9 (pt)

| Elemento | Tamanho |
|---|---|
| Título de capa | 34–44 pt |
| Título de slide | 28–34 pt |
| Subtítulo | 20–24 pt |
| Corpo | 18–24 pt |
| Tabela | mínimo 16 pt |
| Legenda/fonte | mínimo 12–14 pt |

Ampliar quando sala, distância de leitura ou densidade exigirem.

## 8. Escala — Mobile (sp/px)

| Token | Família | Tam. | LH | Peso | Uso |
|---|---|---|---|---|---|
| `display` | Octin / Bebas | 32 | 36 | Bold–Black | Tela institucional; ≤ 2 linhas. |
| `headline-1` | Montserrat | 28 | 34 | Bold–Extrabold | Título principal de tela. |
| `headline-2` | Montserrat | 24 | 30 | Bold | Título de seção. |
| `headline-3` | Montserrat | 20 | 26 | Bold | Card/subseção. |
| `title` | Montserrat | 18 | 24 | Semibold–Bold | Cabeçalhos, diálogos. |
| `body-lg` | Montserrat | 18 | 28 | Regular | Orientação/introdução. |
| `body` | Montserrat | 16 | 24 | Regular | Corpo e campos. |
| `body-sm` | Montserrat | 14 | 20 | Regular–Medium | Metadados. |
| `label` | Montserrat | 14 | 18 | Semibold | Botões, tabs, rótulos. |
| `caption` | Montserrat | 12 | 16 | Regular–Medium | Legendas, notas. |

Unidades: `sp` (Android), pontos escaláveis (iOS), `rem`/relativas (PWA). Não bloquear o aumento de texto do sistema; evitar altura fixa em componentes com texto variável.

## 9. Composição textual

Alinhar à esquerda textos longos; não justificar; caixa alta só em rótulos curtos/títulos compatíveis;
não truncar diagnósticos, nomes, procedimentos ou erros; reticências só se o conteúdo completo estiver
acessível em outra ação; números tabulares em métricas/datas quando a fonte suportar.
