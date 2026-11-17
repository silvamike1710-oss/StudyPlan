# Plano de Estudos 95

Site de estudos sem dependências nem etapa de build. Abra `index.html` no navegador para usar.

## Onde encontrar cada parte

- `index.html` — estrutura da página, navegação, área de conteúdo e formulários.
- `css/styles.css` — estilos visuais e impressão, incluindo o tema inspirado no Windows 95.
- `js/data/curriculum.js` — currículo padrão: matérias, partes, teoria e questões das aulas.
- `js/data/theory-examples.js` — exemplos concretos e cálculos aplicados a cada conceito da teoria.
- `js/data/exam-questions.js` — banco autoral de questões de prova; cada item inclui suportes, alternativas, gabarito, explicação e referência de aula.
- `js/practice.js` — quizzes, simulados por dia/área, cronômetros, revisão de erros, histórico e prática de redação.
- `js/app.js` — inicialização, armazenamento local, navegação, busca e renderização das telas.

Os arquivos JavaScript são carregados como scripts clássicos, na ordem indicada no fim de `index.html`, para compartilhar os dados e as funções da aplicação. Os exemplos da teoria podem ser ajustados na terceira posição de cada item `points` (`[conceito, explicação, exemplo]`); quando ela não é informada, a aplicação usa um exemplo relacionado à matéria e ao conceito.

## Provas e dados salvos

O banco de prova é autoral e ainda é menor que um caderno oficial do ENEM. A interface mostra a quantidade real de questões disponíveis por área, sem duplicar questões para preencher 45 itens. Para cadastrar uma questão, acrescente um objeto em `js/data/exam-questions.js`, com cinco alternativas, índice `answer` de 0 a 4, uma explicação e `lessonRef` apontando para um título de parte existente no currículo. Use `keepOrder: true` quando a sequência das opções tiver significado (por exemplo, uma escala crescente) e tipos de apoio `text`, `chart`, `line`, `table` ou `svg`; o SVG aceita somente elementos e atributos estáticos permitidos pelo renderizador.

Os quizzes gerados a partir da teoria pedem para relacionar uma descrição ao conceito correto, usando opções da mesma parte da aula. As alternativas são embaralhadas quando a ordem não tem significado. Para uma parte personalizada, informe ao menos três ideias, uma por linha; o formato `Conceito: descrição` produz opções mais claras.

O cronômetro das provas é proporcional ao número de questões disponíveis no banco atual (aproximadamente três minutos por questão), não à duração de um caderno oficial completo. A seção de Linguagens permite selecionar Inglês ou Espanhol.

O navegador guarda respostas em andamento por referências compactas às questões, um caderno de erros sem cópias integrais dos enunciados, rascunhos/temas de redação e até 50 práticas no `localStorage`. Redações finalizadas ou arquivadas podem ser relidas na tela Revisão. A estimativa de linhas usa aproximadamente 10 palavras por linha manuscrita e não substitui a contagem na folha oficial. A autoavaliação por competência não calcula nota.

O histórico é local a este navegador; não é sincronizado entre dispositivos.
