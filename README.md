# Plano de Estudos 95

Site de estudos sem dependências nem etapa de build. Abra `index.html` no navegador para usar.

## Onde encontrar cada parte

- `index.html` — estrutura da página, navegação, área de conteúdo e formulários.
- `css/styles.css` — estilos visuais e impressão, incluindo o tema inspirado no Windows 95.
- `js/data/curriculum.js` — currículo padrão: matérias, partes, teoria e questões das aulas.
- `js/data/exam-questions.js` — banco autoral de questões de prova; cada item inclui suportes, alternativas, gabarito, explicação e referência de aula.
- `js/practice.js` — quizzes, simulados por dia/área, cronômetros, revisão de erros, histórico e prática de redação.
- `js/app.js` — inicialização, armazenamento local, navegação, busca e renderização das telas.

Os arquivos JavaScript são carregados como scripts clássicos, na ordem indicada no fim de `index.html`, para compartilhar os dados e as funções da aplicação.

## Provas e dados salvos

O banco de prova é autoral e ainda é menor que um caderno oficial do ENEM. A interface mostra a quantidade real de questões disponíveis por área, sem duplicar questões para preencher 45 itens. Para cadastrar uma questão, acrescente um objeto em `js/data/exam-questions.js`, com cinco alternativas, índice `answer` de 0 a 4, uma explicação e `lessonRef` apontando para um título de parte existente no currículo.

O navegador guarda respostas em andamento, rascunho de redação e até 50 práticas concluídas no `localStorage`. O histórico é local a este navegador; não é sincronizado entre dispositivos.
