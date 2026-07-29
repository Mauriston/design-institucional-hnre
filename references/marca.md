# Marca — Logotipo, Distintivo, Monograma

Arquivos oficiais e procedência: ver `../assets/brand/README.md`. **Nunca** improvisar a marca.

## 1. Logotipo × Distintivo naval — qual usar

**Logotipo da Marinha** (modernidade, clareza) — preferencial para público externo/misto e materiais digitais:
site público, campanha, peça para pacientes/sociedade, comunicação externa, sistema web de acesso externo,
apresentação para público civil ou congresso.

**Distintivo naval** (tradição, legado) — identificação institucional interna: documentos e expedientes
internos, intranet, identificação e sinalização interna, crachás, endomarketing, reunião clínica interna,
evento de público militar, e **obrigatoriamente** em assinatura conjunta com outras Forças.

### Matriz prática (HNRe)

| Contexto | Marca |
|---|---|
| Site público / campanha / material para paciente | Logotipo |
| Sistema web de público externo | Logotipo |
| Apresentação para instituição civil / congresso | Logotipo |
| Intranet / sistema estritamente interno | Distintivo (ou logotipo conforme finalidade) |
| Reunião clínica interna | Distintivo |
| Evento conjunto MB–EB–FAB | Distintivo |
| Documento oficial interno | Distintivo, conforme padrão documental |

## 2. Nome da OM

Denominação **Hospital Naval de Recife**; sigla **HNRe** (não usar `HNR`). Não transformar o nome em novo
logotipo; não fundir/anexar o nome ao logotipo ou distintivo sem modelo oficial. Havendo assinatura oficial
aprovada do HNRe, usar exclusivamente o arquivo-matriz correspondente. Para slogan de OM, o MIV sugere nome
em Octin College + slogan em Montserrat abaixo — validar quando virar assinatura recorrente.

## 3. Área de segurança

Respiro mínimo = **altura da letra "M"** do lettering, para logotipo e distintivo. Dentro dela: nada de
texto, bordas, botões, ícones, avatares, fotos de alto contraste, loaders, marcas parceiras ou navegação.
No código, a área pertence ao **contêiner** da marca — não encolher o arquivo para simular respiro.

## 4. Redução mínima

| Marca / versão | Impresso | Digital |
|---|---|---|
| Logotipo vertical | 9 mm | 70 px |
| Logotipo horizontal | 5 mm | 40 px |
| Distintivo vertical | 11 mm | 80 px |
| Distintivo horizontal | 7 mm | 50 px |

Abaixo disso é proibido (perda de legibilidade).

## 5. Prioridade de versões

1. Priorizar a **versão colorida**.
2. Aplicar sobre branco ou fundo que preserve legibilidade.
3. Monocromática só nas cores institucionais autorizadas.
4. Positiva/negativa quando houver restrição técnica (carimbo, serigrafia, mono).
5. Só usar vertical, horizontal e variações expressamente autorizadas no MIV.

## 6. Símbolo, lettering e monograma

- **Logotipo:** pode-se usar só o símbolo ou só o lettering, nas versões oficiais isoladas — nunca recortando de outro arquivo.
- **Monograma MB:** complementa, **não substitui** o logotipo; adequado a ícones, assinaturas visuais e contextos reduzidos; deve estar acompanhado do símbolo oficial na mesma peça/página.
- **Distintivo sem lettering:** autorizado; priorizar colorido; mono nas cores institucionais. A versão com "MARINHA DO BRASIL" em semicírculo na orla **nunca** recebe lettering adicional abaixo.

## 7. Versão horizontal alternativa e slogan

Versão horizontal alternativa: só colorida, para aplicações muito horizontais (faixas, testeiras ultrawide) e
quando o slogan acompanhar o logotipo. Slogan atual: **"PROTEGENDO NOSSAS RIQUEZAS, CUIDANDO DA NOSSA GENTE"**.
Em fundo branco, texto complementar em Azul Marinha ou Verde Brasil; em fundo Azul, branco ou Amarelo Ouro.
O lema **"TUDO PELA PÁTRIA"** não é slogan promocional.

## 8. Fundos

- **Logotipo colorido:** não usar sobre Amarelo Ouro nem Verde Brasil (anéis se confundem) → usar mono autorizada. Sobre Azul, escolher versão de contraste adequado.
- **Distintivo colorido:** não usar sobre Amarelo Ouro (cabo dourado se confunde) → mono autorizada.
- **Gradientes/fundos não institucionais:** com parcimônia e contraste suficiente; marca escura em fundo claro, clara em fundo escuro; quando nenhuma versão institucional contrastar, usar a versão branca autorizada. Nunca sobre área visualmente carregada.

## 9. Fotografia

Verificar contraste, leitura de símbolo/lettering, ausência de sobreposição a rostos/textos/equipamentos,
alinhamento, área de segurança e versão adequada. Evitar marca clara sobre área clara, escura sobre escura,
fundo com cores próximas às da marca, e "salvar" aplicação ruim com contorno/sombra/placa. Se necessário,
reservar área limpa ou usar faixa institucional sólida.

## 10. Proibições absolutas

Nunca: contorno/`outline`; versão não prevista no MIV; alterar o lettering; distorcer/achatar/esticar/
inclinar/rotacionar/perspectiva/3D; subtrair ou modificar elementos; sombra/brilho/chanfrado/relevo;
alterar cores; usar partes da marca para criar símbolos derivados; redesenhar o lettering com Octin ou outra
fonte; inserir em forma/selo/moldura não autorizada; transparência que prejudique leitura; animar por
deformação/fragmentação; usar cores secundárias do distintivo como paleta; capturar por print ou vetorizar
de novo um raster.

## 11. Implementação em código

- Guardar arquivos oficiais em diretório protegido e versionado; registrar a versão usada.
- Impedir redimensionamento não proporcional (`width`/`height` coerentes); nunca `filter`, `mix-blend-mode`, máscara ou recoloração CSS.
- Não usar a marca como `background-image` quando tiver função institucional/informativa; usar `<img>` com `alt` adequado.
- Não duplicar "Marinha do Brasil" em texto adjacente ao lettering (redundância visual).
- App icon derivado da marca → validação institucional; em protótipo sem aprovação, usar ícone funcional neutro e manter a marca oficial dentro do app.

## 12. Assinaturas conjuntas

Respeitar hierarquia: em composição vertical, a de maior grau acima; em horizontal, à direita. Com outras
Forças, usar **distintivo**; ordem **MB, EB, FAB**; havendo Ministério da Defesa, sua marca à direita/acima.
Publicidade com o Governo Federal segue também o Manual de Uso da Marca correspondente. Respeitar a área de
segurança de cada marca; não normalizar tamanho só pela largura — considerar peso visual.
