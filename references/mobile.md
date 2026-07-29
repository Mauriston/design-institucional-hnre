# Mobile / PWA / React Native — HNRe

Cores e tipografia: `cores.md`, `tipografia.md` (§8 escala mobile). Marca: `marca.md`. Esqueleto:
`../assets/base-mobile.html`. Tokens: `../assets/tokens.css` e `../assets/theme.ts`.
Escopo: apps nativos, híbridos e PWA (iOS, Android, tablets, corporativos).

## 1. Princípios

Unidade institucional (marca da MB acima de qualquer componente local) · clareza clínica/administrativa
(uma tarefa principal por tela) · eficiência (menos etapas e digitação) · prevenção de erro · acessibilidade ·
privacidade visual · consistência entre iOS/Android/PWA. A interface deve explicitar o contexto de acesso
(`user`, `admin`, operador, supervisor, auditor) e não presumir familiaridade com termos médico-militares.

## 2. Marca no app

Não repetir a marca em todas as telas. Aplicar em: splash, autenticação, cabeçalho institucional de 1º nível,
"Sobre", documentos/comprovantes exportados, rodapé de páginas públicas. Nas telas transacionais, usar título
do módulo + sigla `HNRe` + setor + ícone funcional + navegação nativa. **App icon** derivado da marca exige
validação; sem aprovação, usar ícone funcional neutro e manter a marca oficial dentro do app. Área de
segurança, reduções mínimas e proibições: `marca.md`.

## 3. Cor e tema

Proporção mobile ~65–80% superfícies claras · 15–25% Azul · até 10% Amarelo+Verde.
**Tema claro** (preferencial): fundo branco, texto Azul, ações primárias Azul, foco Amarelo, confirmação Verde.
**Tema escuro** (opcional; MIV não define): fundo Azul Marinha, texto branco, cartões claros só quando precisar
separação forte; nunca recolorir a marca; não usar preto puro dominante. Cores funcionais: `cores.md` §6.

## 4. Grid e espaçamento

Base 4, múltiplos de 8 (8/12/16/24/32/48/64). Margens laterais: 16 (compacto), 20–24 (amplo), 24–32 (tablet);
conteúdo central em tablet ≤ 640–720. Respeitar **safe areas** (`env(safe-area-inset-*)`), ilha dinâmica,
indicador de início e áreas de gesto — não pôr marca/ação/dado crítico sob recortes. Retrato primeiro; paisagem
para tabelas/imagens/gráficos. Uma área de rolagem por tela; preservar posição e estado ao voltar.

## 5. Estrutura vertical

```text
Status bar / safe area
App bar / identificação
Contexto / filtro (opcional)
Conteúdo rolável
Ação persistente (se necessária)
Navegação inferior / safe area
```

## 6. Navegação

Refletir a arquitetura de informação, não o organograma; priorizar tarefas; exibir só módulos autorizados ao perfil.
- **Bottom nav:** 3–5 destinos frequentes, ícone + rótulo (não ocultar rótulos), selecionado em Azul, foco em Amarelo; nunca ação destrutiva como destino.
- **App bar:** voltar/menu + título + 1–2 ações; evitar logotipo completo em toda app bar e mais de duas ações no topo.
- **Menu lateral:** destinos secundários, admin, config, ajuda, troca de contexto rara — nunca única via para tarefas diárias.
- **Tabs:** alternam visões do mesmo objeto; nunca representam etapas de formulário.
- **Perfil:** `admin` com área claramente identificada; troca de perfil/unidade explícita, não só por cor.

## 7. Componentes

- **Botões:** primário (Azul/branco), secundário (borda Azul), terciário (texto Azul), destrutivo (cor funcional de perigo — nunca Amarelo/Verde; descrever efeito; confirmar). Altura ≥ 48; rótulo com verbo; evitar "Sim/Não". Estados: padrão, pressionado, foco, carregando (mantém largura, impede envio duplo), desabilitado, sucesso.
- **Campos:** rótulo sempre visível (placeholder não substitui); altura ≥ 52; entrada Montserrat ~16; erro junto ao campo + resumo no topo; teclado adequado; máscara não impede colar/editar; obrigatórios por texto (não só `*`); preservar dados após falha.
- **Cards:** fundo branco, borda derivada do Azul, raio moderado, sombra mínima; título Montserrat Semibold/Bold; sem card dentro de card, sem cartão inteiro colorido, sem Amarelo como fundo de grande área.
- **Listas:** linha ≥ 56; principal à esquerda, metadado abaixo/à direita; divisores discretos; ação essencial nunca só em gesto de arraste.
- **Chips/badges:** com texto, não só cor; diferenciar chip interativo de badge informativo.
- **Alertas/banners:** ícone + título + mensagem + ação; críticos não somem sozinhos.
- **Diálogos:** confirmação de alto impacto/escolha curta — não para formulário longo ou navegação.
- **Bottom sheets:** ações contextuais/filtros; título, fechamento previsível, safe area, ações críticas visíveis.
- **Toasts/snackbars:** confirmação de baixa criticidade; não é canal único de erro; "Desfazer" quando seguro; sem dado sensível.
- **Estados vazios / carregamento / erro:** explicar o que houve, se é esperado e a próxima ação; skeleton em listas (sem simular conteúdo clínico real); erro em linguagem operacional, sem stack trace/token/chave; nunca culpar o usuário.

## 8. Fluxos clínicos, periciais e administrativos

Hierarquia na tela de caso/paciente/inspeção: 1) identificação do objeto, 2) status, 3) ação pendente,
4) dados essenciais, 5) histórico, 6) metadados/auditoria. Nunca esconder informação crítica só em aba secundária.
Manter **contexto persistente** ao editar (nome/id, tipo de processo, finalidade, status, unidade, data);
evitar repetir dados pessoais completos quando um id parcial basta.
Formulários longos: dividir por objetivos, mostrar progresso, salvar rascunho, validar por etapa sem apagar,
revisar antes de concluir; **diferenciar** "Salvar", "Enviar", "Homologar", "Tramitar", "Concluir".

**Confirmação proporcional ao risco:** baixo/reversível → executar + "Desfazer"; médio → diálogo com
consequência; alto/irreversível → revisão + confirmação explícita + registro; clínico/pericial crítico →
confirmação contextual + identificação do responsável + efeito inequívoco.

**Status** por texto + cor funcional + ícone quando necessário (`● Pendente`, `✓ Concluído`, `! Requer correção`,
`× Cancelado`) — nunca só "verde/amarelo/vermelho".

**Dados/indicadores:** número em Montserrat Bold/Extrabold; unidade e período visíveis; comparação
identificada; rótulos diretos; sem Amarelo pequeno sobre branco; acesso ao valor exato; fonte e data de
atualização. **Tabelas em tela pequena:** transformar linha em card → priorizar colunas essenciais →
expandir detalhe → rolagem horizontal só se indispensável → exportação para análise extensa.
**Datas/horas:** `DD/MM/AAAA`, 24h; fuso quando houver ambiguidade; não só expressões relativas em registro auditável.

## 9. Movimento

Movimento explica mudança de estado (nunca ornamento contínuo). Durações: feedback 100–150ms · componente
150–250ms · tela 200–300ms · expansão até 400ms. Respeitar movimento reduzido; nunca animar a marca por
deformação. Haptics com parcimônia (confirmação, seleção importante, erro, conclusão, alerta).

## 10. Acessibilidade

Nome acessível em todo controle; ordem de foco lógica; texto responde ao aumento do sistema; contraste em
todos os estados; nada só por cor; ícones críticos com rótulo; erros anunciados por tecnologia assistiva.
**Alvo de toque:** ~44×44 (iOS), ~48×48 (Android/multiplataforma) — o ícone pode ser menor que a área
interativa. Corpo ≥ 16; não impedir zoom em PWA; sem texto essencial < 12; evitar Light em texto pequeno.
Foco visível em Amarelo Ouro sem alterar a geometria do componente.

## 11. Privacidade e segurança visual

Exposição mínima: só o dado da tarefa atual; sem dados pessoais completos em listas; ocultar sensível em
notificações; sem conteúdo clínico em mensagens de sucesso genéricas; bloqueio por inatividade conforme o
sistema. Autenticação identifica app + HNRe e o ambiente (produção/homologação/treinamento); nunca credencial
em texto aberto; nunca expor token/ID interno. Permissões (câmera, local, arquivos): explicar por quê e como,
só quando a tarefa começar.

## 12. Responsividade

| Faixa | Referência | Comportamento |
|---|---|---|
| Compacta | < 600 | 1 coluna, bottom nav, margens 16–24 |
| Média | 600–839 | 1–2 colunas, painéis laterais opcionais |
| Expandida | ≥ 840 | 2 colunas, navegação lateral, conteúdo central limitado |

Responder à largura disponível (não ao nome do device); dobráveis/janelas: evitar conteúdo crítico sobre
dobradiça, preservar estado ao redimensionar, testar janela dividida.

## 13. Repositório recomendado

```text
src/
├── assets/brand/official/   (arquivos oficiais — não editar; documentar origem/versão)
├── design-system/           colors.ts · typography.ts · spacing.ts · motion.ts · theme.ts
├── components/              actions · feedback · forms · navigation · surfaces
└── features/ · hooks/ · services/ · utils/
```
Nomes explícitos: `logotipo-marinha-horizontal-colorido.png`, `distintivo-naval-horizontal-colorido.png`, etc.
Não incluir arquivo de fonte sem licença.

## 14. Governança

Alteração relevante registra: problema, impacto, componente/token, compatibilidade com o MIV, impacto em
a11y, evidência antes/depois, aprovação e versão do design system. Exigem validação institucional: app icon
derivado da marca, assinatura própria, slogan local, composição conjunta, uso de marca não previsto, novo
símbolo/selo/monograma, uso promocional externo, ou quando nenhuma versão oficial produzir legibilidade.
