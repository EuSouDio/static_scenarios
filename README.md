# Planner de Testes (Frontend only)

Esta é uma aplicação **somente frontend** para planejar e exportar cenários de teste. Não há backend.

Os dados são previamente alocados em **memória + localStorage**. Para “persistir” os dados criados para o projeto, use o botão **Exportar JS** na aba **Gerenciar** e **substitua** o arquivo `data.js` pelo arquivo gerado `custom-data.js` (renomeie para `data.js`) ou copie o conteúdo de `custom-data.js` para `data.js`.

## Estrutura de arquivos
```
index.html
data.js           # dados de exemplo (ES Module)
README.md
```

## Como usar (passo a passo)

1. Abra o `index.html` no navegador (duplo clique ou via servidor estático).
![Abrindo APP.](/images/open_app.gif "Vídeo abrindo App pelo Live Server")

2. A aba **Planejamento** permite:
   - Selecionar **Loja**.
   - Preencher **Tipo de teste** (apenas informativo, aparece no Markdown), **Tarefa** e **Notas**.
   - Marcar **Categorias** (checkbox). A tabela só aparece quando houver **pelo menos uma categoria** marcada.
   ![Apresentando cenários por categorias](/images/categories.gif "Vídeo filtrando cenários por categorias")
   - Editar **Evidências (DESKTOP/MOBILE)** e **Status** diretamente na tabela (válidos apenas para exportações; **não** entram no `data.js`).
   - Exportar:
     - **CSV** (delimitado por `;`, UTF-8 com BOM).
     - **Markdown**: inclui cabeçalho com **Nome da loja, Tipo de teste, Tarefa, Qtd. manuais, Qtd. automatizados, Total** e a tabela. A contagem considera **cada cenário = 2** (desktop + mobile).
     - **Excel (.xlsx)** usando **SheetJS**.

   ![Copiando Markdown para JIRA.](/images/markdown.gif "Vídeo Copiando Markdown para JIRA")    
3. A aba **Gerenciar** permite:
   - Criar/editar/excluir **Lojas** (o nome **não** pode duplicar).

   ![Criando Loja](/images/criandoLoja.gif "Vídeo criando loja e cenários")

   ![Editando Loja](/images/editStore.gif "Vídeo editando loja")

   ![Excluindo Loja](/images/delStore.gif "Vídeo excluindo loja")
   - Criar/remover **Categorias** **por loja** (bloqueio de duplicadas case-insensitive na mesma loja).

   ![Criando Categorias para lojas](/images/createCategory.gif "Vídeo criando categorias")

   ![Removendo categorias](/images/delCategory.gif "Vídeo removendo categoria")
   - **Importar CSV** para a loja selecionada:
     - **Modelo CSV**: `categoria;execucao;nomeTeste;evidDesktop;evidMobile;status`
     - **Pré-visualizar** antes de importar.
     - **Importar**: cria automaticamente categorias ausentes e adiciona cenários (somente `execucao` = `Manual` ou `Automatizado`).
   - **Exportar JS**: baixa um **`custom-data.js`** (ES Module) com o banco atual. Para integrar ao seu projeto, **substitua seu `data.js` por este arquivo** (ou renomeie `custom-data.js` para `data.js`).
   - **Restaurar dados de exemplo**: reseta o estado para o conteúdo do `data.js` (apenas localStorage). Para efetividade, precisa exportar JS `custom-data.js` e substituir pelo `data.js`.

## Observações importantes
- **Tipos de teste** não fazem parte do modelo de dados. É um campo livre em **Planejamento** apenas para o **Markdown**.
- **Categorias** são **por loja**; a mesma categoria pode existir em lojas diferentes.
- Ao **excluir uma loja**, todas as suas categorias e cenários são removidos do estado.
- **Edições inline** (evidências/status) **não** são salvas no `data.js` nem em `custom-data.js`; elas só existem para as exportações do momento.
- O app importa `./data.js`. Quando você gerar o `custom-data.js` pela UI, **renomeie** para `data.js` e **substitua** o antigo.

## CSV e Excel
- **CSV**: separador `;`, com **UTF-8 BOM** para compatibilidade com Excel/Windows.
- **Excel**: arquivo `cenarios.xlsx` gerado com **SheetJS** (sem dependências extras).

## Estrutura dos dados (ES Module)
```js
export const db = {
  lojas: [{ id, nome, ambiente, url }],
  categorias: { [lojaId]: [{ id, nome }] },
  cenarios: [{
    id, lojaId, categoriaId,
    execucao: 'Manual' | 'Automatizado',
    nomeTeste, evidDesktop, evidMobile, status
  }]
};
```

## Dúvidas frequentes
- **“Exportar JS” não atualizou minha aplicação.**  
  O navegador faz download de `custom-data.js`. Para refletir no app, **renomeie** para `data.js` e **substitua** o arquivo do projeto.
- **O Markdown não colou certo no Jira.**  
  O conteúdo é **Markdown padrão (GFM)**. Se sua instância não renderiza bem, cole como **código** ou habilite o “Visual Markdown” no Jira Cloud.

Bom uso! ✨