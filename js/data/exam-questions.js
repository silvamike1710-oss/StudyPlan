const examQuestionBank = [
  {
    id: "mat-0001",
    subjectId: "math",
    topic: "Porcentagem e variação percentual",
    difficulty: "intermediate",
    support: [
      {
        type: "text",
        content:
          "Uma loja anuncia uma mochila por R$ 240 e oferece 15% de desconto para pagamentos à vista. O desconto é calculado sobre o preço anunciado, sem taxas adicionais.",
        source: "Situação-problema original, elaborada para o simulado.",
      },
    ],
    statement: "Qual valor será pago pela mochila com o desconto anunciado?",
    choices: ["R$ 180", "R$ 204", "R$ 216", "R$ 225", "R$ 240"],
    answer: 1,
    keepOrder: true,
    explanation:
      "Calcule 15% de R$ 240: 0,15 × 240 = R$ 36. Subtraia o desconto: 240 − 36 = R$ 204.",
    lessonRef: {
      subjectId: "math",
      partTitle: "Porcentagem e variação percentual",
    },
  },
  {
    id: "mat-0002",
    subjectId: "math",
    topic: "Razões, proporções e regra de três",
    difficulty: "basic",
    support: [
      {
        type: "table",
        title: "Trecho percorrido pela equipe",
        headers: ["Tempo", "Distância"],
        rows: [
          ["1 hora", "6 km"],
          ["3 horas", "18 km"],
        ],
        source: "Dados hipotéticos de uma situação-problema original.",
      },
    ],
    statement:
      "Mantido esse ritmo médio, quantos quilômetros a equipe percorrerá em cinco horas?",
    choices: ["24 km", "27 km", "30 km", "36 km", "45 km"],
    answer: 2,
    keepOrder: true,
    explanation:
      "A razão é 18 ÷ 3 = 6 km por hora. Em cinco horas, 6 × 5 = 30 km.",
    lessonRef: {
      subjectId: "math",
      partTitle: "Razões, proporções e regra de três",
    },
  },
  {
    id: "mat-0003",
    subjectId: "math",
    topic: "Estatística e probabilidade",
    difficulty: "intermediate",
    support: [
      {
        type: "chart",
        chart: {
          title: "Consumo de água em uma escola",
          description: "Consumo diário hipotético registrado em quatro dias.",
          labels: ["Seg.", "Ter.", "Qua.", "Qui."],
          values: [420, 390, 450, 340],
          unit: "L",
        },
        source: "Dados hipotéticos, criados para esta questão.",
      },
    ],
    statement:
      "A meta é manter o consumo abaixo de 400 L por dia. Em quantos dos dias registrados a meta foi atingida?",
    choices: [
      "Em nenhum dia",
      "Em um dia",
      "Em dois dias",
      "Em três dias",
      "Em quatro dias",
    ],
    answer: 2,
    keepOrder: true,
    explanation:
      "Terça-feira registrou 390 L e quinta-feira, 340 L. Como ambos os valores são menores que 400 L, a meta foi atingida em dois dias, alternativa C.",
    lessonRef: {
      subjectId: "math",
      partTitle: "Tabelas, gráficos e medidas de tendência central",
    },
  },
  {
    id: "mat-0004",
    subjectId: "math",
    topic: "Funções",
    difficulty: "intermediate",
    support: [
      {
        type: "text",
        content:
          "Um serviço de bicicletas cobra uma tarifa fixa de R$ 8,00 para liberar o equipamento e mais R$ 3,00 por hora de uso. Não há cobrança fracionada neste exercício.",
        source: "Situação-problema original.",
      },
    ],
    statement:
      "Qual expressão representa o custo C, em reais, para h horas de uso?",
    choices: [
      "C(h) = 8h + 3",
      "C(h) = 3h − 8",
      "C(h) = 8 + 3h",
      "C(h) = 11h",
      "C(h) = 24h",
    ],
    answer: 2,
    explanation:
      "A parcela fixa de R$ 8 é somada ao custo variável de R$ 3 por hora: C(h) = 8 + 3h.",
    lessonRef: { subjectId: "math", partTitle: "Conceito, domínio e gráficos" },
  },
  {
    id: "mat-0005",
    subjectId: "math",
    topic: "Função afim e função quadrática",
    difficulty: "intermediate",
    support: [
      {
        type: "chart",
        chart: {
          title: "Altura de uma planta ao longo das semanas",
          description: "Medições hipotéticas feitas no mesmo horário.",
          labels: ["0 sem.", "1 sem.", "2 sem.", "3 sem."],
          values: [5, 8, 11, 14],
          unit: "cm",
        },
        source: "Dados hipotéticos, preparados para o exercício.",
      },
    ],
    statement:
      "Entre as medições consecutivas, qual foi a variação média da altura por semana?",
    choices: [
      "1 cm/semana",
      "2 cm/semana",
      "3 cm/semana",
      "5 cm/semana",
      "9 cm/semana",
    ],
    answer: 2,
    keepOrder: true,
    explanation:
      "A altura aumenta 3 cm a cada intervalo de uma semana: (14 − 5) ÷ 3 = 3 cm por semana.",
    lessonRef: {
      subjectId: "math",
      partTitle: "Função afim e função quadrática",
    },
  },
  {
    id: "mat-0006",
    subjectId: "math",
    topic: "Quadriláteros, polígonos, perímetro e área",
    difficulty: "basic",
    support: [
      {
        type: "svg",
        title: "Molde de uma peça decorativa",
        description:
          "A figura representa um paralelogramo com base e altura indicadas.",
        viewBox: "0 0 360 200",
        elements: [
          {
            tag: "polygon",
            attributes: {
              points: "95,155 250,155 290,55 135,55",
              fill: "#dce8f5",
              stroke: "#173d78",
              "stroke-width": "3",
            },
          },
          {
            tag: "line",
            attributes: {
              x1: "135",
              y1: "55",
              x2: "135",
              y2: "155",
              stroke: "#333",
              "stroke-width": "2",
            },
          },
          {
            tag: "text",
            attributes: {
              x: "170",
              y: "178",
              "font-size": "16",
              "text-anchor": "middle",
            },
            text: "base = 8 cm",
          },
          {
            tag: "text",
            attributes: {
              x: "105",
              y: "112",
              "font-size": "15",
              "text-anchor": "end",
            },
            text: "altura = 5 cm",
          },
        ],
        source: "Ilustração esquemática original, sem escala.",
      },
    ],
    statement: "Qual é a área do paralelogramo representado?",
    choices: ["13 cm²", "26 cm²", "40 cm²", "80 cm²", "160 cm²"],
    answer: 2,
    keepOrder: true,
    explanation:
      "A área do paralelogramo é base × altura: 8 × 5 = 40 cm². A altura é perpendicular à base, não o comprimento do lado inclinado.",
    lessonRef: {
      subjectId: "math",
      partTitle: "Quadriláteros, polígonos, perímetro e área",
    },
  },
  {
    id: "nat-0001",
    subjectId: "biology",
    topic: "Fotossíntese, respiração e fermentação",
    difficulty: "intermediate",
    support: [
      {
        type: "text",
        content:
          "Em uma atividade escolar, dois grupos semelhantes de plantas da mesma espécie foram mantidos sob as mesmas condições, inclusive com igual volume de água; a única diferença foi a iluminação. Após um período de adaptação no escuro para reduzir o amido já armazenado, um grupo ficou exposto à luz e o outro permaneceu no escuro. Depois, folhas dos dois grupos foram analisadas quanto à presença de amido.",
        source: "Experimento hipotético elaborado para esta questão.",
      },
    ],
    statement:
      "Qual resultado é mais compatível com a produção de matéria orgânica pela fotossíntese?",
    choices: [
      "Maior presença de amido nas folhas expostas à luz, se as demais condições forem adequadas.",
      "A mesma presença de amido, pois a água sozinha substitui a energia luminosa.",
      "Maior presença de amido nas folhas mantidas no escuro, pois a fotossíntese independe de luz.",
      "Ausência de amido nos dois grupos, pois plantas não produzem matéria orgânica.",
      "Produção de amido apenas nas raízes, já que folhas não participam do processo.",
    ],
    answer: 0,
    explanation:
      "Como os grupos diferem apenas pela iluminação e o amido previamente armazenado foi reduzido, a comparação destaca o efeito da luz. Ela fornece energia para a fotossíntese; por isso, folhas iluminadas tendem a produzir mais carboidratos, parte dos quais pode ser armazenada como amido.",
    lessonRef: {
      subjectId: "biology",
      partTitle: "Fotossíntese, respiração e fermentação",
    },
  },
  {
    id: "nat-0002",
    subjectId: "physics",
    topic: "Movimento, referencial e velocidade",
    difficulty: "basic",
    support: [
      {
        type: "text",
        content:
          "Um ônibus percorre 120 km em duas horas, sem paradas, em um trecho no qual a velocidade média pode ser considerada constante.",
        source: "Situação-problema original.",
      },
    ],
    statement: "Qual é a velocidade média do ônibus nesse trecho?",
    choices: ["30 km/h", "40 km/h", "60 km/h", "120 km/h", "240 km/h"],
    answer: 2,
    keepOrder: true,
    explanation:
      "A velocidade média é a distância dividida pelo tempo: 120 km ÷ 2 h = 60 km/h.",
    lessonRef: {
      subjectId: "physics",
      partTitle: "Movimento, referencial e velocidade",
    },
  },
  {
    id: "nat-0003",
    subjectId: "chemistry",
    topic: "Transformações químicas",
    difficulty: "intermediate",
    support: [
      {
        type: "text",
        content:
          "Uma estudante misturou vinagre e bicarbonato em um frasco aberto. Houve efervescência e, depois da reação, parte do material deixou de ser observada no recipiente.",
        source: "Experimento demonstrativo original.",
      },
    ],
    statement:
      "Qual explicação relaciona a efervescência à conservação da massa?",
    choices: [
      "A massa desaparece porque toda reação química destrói matéria.",
      "Um gás pode ser formado e escapar do frasco aberto; em um sistema fechado, a massa total se conserva.",
      "A efervescência indica que os átomos foram convertidos em energia sem qualquer produto.",
      "A conservação só ocorre quando não há formação de gases.",
      "A massa se conserva apenas nos reagentes, não nos produtos.",
    ],
    answer: 1,
    explanation:
      "A reação produz gás, que pode sair de um recipiente aberto. Em um sistema fechado, os produtos gasosos também são contabilizados e a massa total se conserva.",
    lessonRef: {
      subjectId: "chemistry",
      partTitle: "Equações, balanceamento e oxirredução",
    },
  },
  {
    id: "nat-0004",
    subjectId: "biology",
    topic: "Ecologia e relações ambientais",
    difficulty: "intermediate",
    support: [
      {
        type: "chart",
        chart: {
          title: "Temperatura e germinação de sementes",
          description:
            "Taxa hipotética de germinação observada em condições controladas.",
          labels: ["10 °C", "20 °C", "30 °C", "40 °C"],
          values: [15, 55, 80, 25],
          unit: "%",
        },
        source: "Dados simulados, não representam estudo publicado.",
      },
    ],
    statement:
      "Considerando apenas os valores observados, em qual temperatura ocorreu a maior taxa de germinação?",
    choices: ["10 °C", "20 °C", "30 °C", "40 °C", "A taxa foi igual em todas"],
    answer: 2,
    keepOrder: true,
    explanation:
      "A maior taxa registrada é 80%, correspondente a 30 °C. O resultado descreve este experimento hipotético e não deve ser generalizado para todas as espécies.",
    lessonRef: {
      subjectId: "biology",
      partTitle: "Grupos vegetais, tecidos e órgãos",
    },
  },
  {
    id: "nat-0005",
    subjectId: "physics",
    topic: "Movimento, referencial e velocidade",
    difficulty: "intermediate",
    support: [
      {
        type: "line",
        chart: {
          title: "Velocidade de um carrinho em movimento",
          description: "Medições hipotéticas durante um movimento retilíneo.",
          labels: ["0 s", "2 s", "4 s", "6 s"],
          values: [0, 4, 8, 12],
          unit: "m/s",
        },
        source: "Medições hipotéticas para fins didáticos.",
      },
    ],
    statement:
      "Considerando o aumento uniforme indicado, qual é a aceleração média do carrinho?",
    choices: ["0,5 m/s²", "1 m/s²", "2 m/s²", "4 m/s²", "12 m/s²"],
    answer: 2,
    keepOrder: true,
    explanation:
      "A velocidade passa de 0 m/s para 12 m/s em 6 s. A aceleração média é Δv/Δt = 12/6 = 2 m/s².",
    lessonRef: {
      subjectId: "physics",
      partTitle: "Movimento, referencial e velocidade",
    },
  },
  {
    id: "hum-0001",
    subjectId: "geography",
    topic: "Urbanização e espaço geográfico",
    difficulty: "intermediate",
    support: [
      {
        type: "text",
        content:
          "Uma cidade ampliou bairros residenciais nas áreas periféricas, mas manteve empregos, hospitais e equipamentos culturais concentrados na região central. O transporte coletivo não acompanhou o mesmo ritmo de expansão.",
        source: "Situação urbana hipotética.",
      },
    ],
    statement:
      "Qual efeito socioespacial tende a ser intensificado nesse cenário?",
    choices: [
      "Redução automática das distâncias entre moradia e trabalho.",
      "Maior dependência de deslocamentos longos e desigualdade no acesso a serviços.",
      "Desaparecimento da segregação residencial.",
      "Distribuição homogênea dos empregos por todo o município.",
      "Eliminação da necessidade de planejamento do transporte.",
    ],
    answer: 1,
    explanation:
      "A expansão periférica sem descentralização de empregos e serviços tende a aumentar deslocamentos e a desigualdade de acesso, exigindo políticas urbanas e de mobilidade.",
    lessonRef: {
      subjectId: "geography",
      partTitle: "Urbanização, metrópoles e desigualdades",
    },
  },
  {
    id: "hum-0002",
    subjectId: "history",
    topic: "Revolução Farroupilha e imigração",
    difficulty: "intermediate",
    support: [
      {
        type: "text",
        content:
          "Ao estudar a Revolução Farroupilha e a imigração no sul do Brasil, uma turma compara cartas de participantes, registros administrativos e relatos escritos décadas depois. As fontes apresentam interpretações diferentes sobre as motivações da revolta e os grupos envolvidos.",
        source: "Situação didática original.",
      },
    ],
    statement:
      "Que procedimento ajuda a construir uma interpretação histórica mais consistente?",
    choices: [
      "Escolher o relato mais recente e tratá-lo como descrição neutra.",
      "Comparar autoria, contexto e finalidade das fontes, reconhecendo perspectivas distintas.",
      "Descartar registros administrativos por serem sempre falsos.",
      "Usar apenas uma fonte para evitar contradições.",
      "Ignorar o contexto e interpretar documentos com valores atuais.",
    ],
    answer: 1,
    explanation:
      "A crítica e a comparação de fontes consideram quem produziu cada documento, em que contexto e com que finalidade, permitindo analisar divergências em vez de apagá-las.",
    lessonRef: {
      subjectId: "history",
      partTitle: "Revolução Farroupilha e imigração",
    },
  },
  {
    id: "hum-0003",
    subjectId: "sociology",
    topic: "Pesquisa social, dados e interpretação",
    difficulty: "intermediate",
    support: [
      {
        type: "chart",
        chart: {
          title: "Tempo médio de deslocamento",
          description: "Levantamento hipotético de um grupo de trabalhadores.",
          labels: ["Centro", "Norte", "Leste", "Sul"],
          values: [28, 41, 36, 52],
          unit: "min",
        },
        source: "Dados hipotéticos, produzidos para a questão.",
      },
    ],
    statement:
      "Qual conclusão é sustentada diretamente pelos dados apresentados?",
    choices: [
      "O grupo da região Sul teve o maior tempo médio de deslocamento.",
      "Todos os trabalhadores usam o mesmo meio de transporte.",
      "A região Sul possui a maior população da cidade.",
      "A distância explica sozinha todos os tempos observados.",
      "O tempo médio de toda a cidade é necessariamente 52 minutos.",
    ],
    answer: 0,
    explanation:
      "Entre os valores exibidos, 52 minutos é o maior e corresponde à região Sul. O gráfico não fornece dados sobre população, meios de transporte ou causas.",
    lessonRef: {
      subjectId: "sociology",
      partTitle: "Pesquisa social, dados e interpretação",
    },
  },
  {
    id: "hum-0004",
    subjectId: "philosophy",
    topic: "Argumentação, lógica e falácias",
    difficulty: "basic",
    support: [
      {
        type: "text",
        content:
          "Em uma reunião, uma pessoa defende a criação de ciclovias. Outra responde: “Não devemos considerar essa proposta; quem a apresentou nem sequer sabe dirigir”.",
        source: "Exemplo original de argumentação.",
      },
    ],
    statement: "Que problema de argumentação aparece na resposta?",
    choices: [
      "Uma avaliação das evidências sobre segurança viária.",
      "Um ataque à pessoa que desvia da análise da proposta.",
      "Uma demonstração de que ciclovias são inviáveis.",
      "Uma comparação válida entre dois meios de transporte.",
      "Uma conclusão necessária a partir de dados apresentados.",
    ],
    answer: 1,
    explanation:
      "A resposta ataca uma característica do proponente em vez de avaliar razões e evidências sobre a proposta; trata-se de um argumento ad hominem.",
    lessonRef: {
      subjectId: "philosophy",
      partTitle: "Argumentação, lógica e falácias",
    },
  },
  {
    id: "hum-0005",
    subjectId: "geography",
    topic: "População, indicadores e transição demográfica",
    difficulty: "intermediate",
    support: [
      {
        type: "chart",
        chart: {
          title: "Distribuição de moradores por faixa etária",
          description: "Distribuição percentual hipotética em um levantamento.",
          labels: ["0–14 anos", "15–59 anos", "60+ anos"],
          values: [22, 64, 14],
          unit: "%",
        },
        source:
          "Distribuição hipotética elaborada para o exercício; um único levantamento.",
      },
    ],
    statement:
      "Qual faixa etária reúne a maior parcela da população representada?",
    choices: [
      "0 a 14 anos",
      "15 a 59 anos",
      "60 anos ou mais",
      "As três parcelas são iguais",
      "O gráfico não informa faixas etárias",
    ],
    answer: 1,
    explanation:
      "A faixa de 15 a 59 anos corresponde a 64%, o maior valor do gráfico. Os dados não permitem inferir tendências temporais ou causas.",
    lessonRef: {
      subjectId: "geography",
      partTitle: "População, indicadores e transição demográfica",
    },
  },
  {
    id: "lin-0001",
    subjectId: "portuguese",
    topic: "Interpretação e gêneros textuais",
    difficulty: "intermediate",
    support: [
      {
        type: "text",
        content:
          "“Leve sua caneca. O café continua quente; o copo descartável, não precisa ir com você.” A frase aparece em cartazes perto de bebedouros de uma universidade.",
        source: "Texto publicitário original.",
      },
    ],
    statement:
      "Considerando o local de circulação e a construção da frase, o cartaz busca principalmente",
    choices: [
      "descrever tecnicamente o processo de fabricação de canecas.",
      "incentivar uma mudança de hábito com apelo à redução de descartáveis.",
      "proibir o consumo de café dentro da universidade.",
      "informar que copos descartáveis conservam melhor a temperatura.",
      "narrar a história dos bebedouros do campus.",
    ],
    answer: 1,
    explanation:
      "O imperativo “Leve sua caneca” e o contraste com o copo descartável articulam uma orientação prática a um apelo ambiental.",
    lessonRef: {
      subjectId: "portuguese",
      partTitle: "Gêneros jornalísticos, literários e visuais",
    },
  },
  {
    id: "lin-0002",
    subjectId: "literature",
    topic: "Literatura brasileira",
    difficulty: "intermediate",
    support: [
      {
        type: "text",
        content:
          "Em um romance, a narradora descreve a praça por lembranças fragmentadas: o banco vazio, a feira de domingo e a casa que já não pertence à família. O espaço presente aparece atravessado por recordações.",
        source: "Situação literária original.",
      },
    ],
    statement:
      "Nesse procedimento narrativo, a descrição do espaço contribui para",
    choices: [
      "eliminar qualquer marca de subjetividade do relato.",
      "articular memória e experiência da narradora na construção do sentido.",
      "comprovar que toda lembrança é uma reprodução objetiva do passado.",
      "substituir os acontecimentos por uma explicação científica.",
      "impedir que o leitor perceba mudanças no tempo.",
    ],
    answer: 1,
    explanation:
      "A praça não é apenas cenário: as lembranças selecionadas associam o espaço à experiência e às perdas da narradora.",
    lessonRef: {
      subjectId: "literature",
      partTitle: "Narrativa, poesia e interpretação",
    },
  },
  {
    id: "lin-0003",
    subjectId: "english",
    topic: "Reading strategies",
    difficulty: "basic",
    support: [
      {
        type: "text",
        content:
          "“Bring your own bottle. Refill stations are available across campus, helping students reduce single-use plastic.”",
        source: "Aviso original em inglês, elaborado para este exercício.",
      },
    ],
    statement: "According to the notice, students are encouraged to",
    choices: [
      "buy a new plastic bottle every day.",
      "use refill stations to reduce disposable plastic.",
      "avoid drinking water on campus.",
      "remove the refill stations from the campus.",
      "bring glass bottles only for teachers.",
    ],
    answer: 1,
    explanation:
      "The notice connects bringing a reusable bottle and using refill stations to reducing single-use plastic.",
    lessonRef: {
      subjectId: "english",
      partTitle: "Interpretação, vocabulário e intenção",
    },
  },
  {
    id: "lin-0004",
    subjectId: "communication",
    topic: "Mídia, informação e cidadania digital",
    difficulty: "intermediate",
    support: [
      {
        type: "text",
        content:
          "Uma mensagem compartilhada muitas vezes afirma que uma mudança no transporte começará no dia seguinte, mas não identifica o órgão responsável nem apresenta um link para a publicação original.",
        source: "Situação original de educação midiática.",
      },
    ],
    statement:
      "Antes de divulgar a mensagem, uma atitude de verificação adequada é",
    choices: [
      "considerar o número de compartilhamentos como prova suficiente.",
      "procurar a publicação original e confirmar a informação em canais oficiais e independentes.",
      "repassar a mensagem para descobrir depois se era verdadeira.",
      "confiar apenas no nome de quem enviou.",
      "editar a mensagem para que pareça mais convincente.",
    ],
    answer: 1,
    explanation:
      "Verificar origem, data e confirmação em fontes confiáveis reduz a circulação de informação falsa; popularidade e confiança pessoal não comprovam a alegação.",
    lessonRef: {
      subjectId: "communication",
      partTitle: "Desinformação, checagem e circulação de conteúdo",
    },
  },
  {
    id: "lin-0005",
    subjectId: "communication",
    topic: "Tecnologias e meios de comunicação",
    difficulty: "basic",
    support: [
      {
        type: "chart",
        chart: {
          title: "Como moradores souberam de uma campanha local",
          description:
            "Respostas hipotéticas de participantes de uma atividade comunitária.",
          labels: ["Cartaz", "Rádio", "Redes", "Indicação"],
          values: [18, 12, 45, 25],
          unit: "%",
        },
        source: "Dados simulados, sem relação com pesquisa real.",
      },
    ],
    statement:
      "Qual canal teve o maior percentual de indicações e por quantos pontos percentuais superou o segundo colocado?",
    choices: [
      "Redes, 20 pontos percentuais.",
      "Indicação, 7 pontos percentuais.",
      "Cartaz, 27 pontos percentuais.",
      "Rádio, 13 pontos percentuais.",
      "Redes, 45 pontos percentuais.",
    ],
    answer: 0,
    explanation:
      "Redes registra 45%, e indicação, 25%. A diferença é 45 − 25 = 20 pontos percentuais.",
    lessonRef: {
      subjectId: "communication",
      partTitle: "Tecnologias e meios de comunicação",
    },
  },
  {
    id: "lin-0006",
    subjectId: "communication",
    topic: "Exclusão digital e acessibilidade",
    difficulty: "intermediate",
    support: [
      {
        type: "chart",
        chart: {
          title: "Barreiras relatadas para acessar um serviço digital",
          description:
            "Respostas hipotéticas de participantes de uma consulta comunitária.",
          labels: ["Conexão", "Custo", "Aparelho", "Acessib."],
          values: [35, 30, 20, 15],
          unit: "%",
        },
        source:
          "Dados simulados para o exercício; não representam uma pesquisa real.",
      },
    ],
    statement:
      "Qual é a diferença, em pontos percentuais, entre a barreira mais citada e a menos citada?",
    choices: ["5 p.p.", "10 p.p.", "15 p.p.", "20 p.p.", "35 p.p."],
    answer: 3,
    keepOrder: true,
    explanation:
      "A maior parcela é conexão, com 35%, e a menor é acessibilidade, com 15%. A diferença é 35 − 15 = 20 pontos percentuais.",
    lessonRef: {
      subjectId: "communication",
      partTitle: "Exclusão digital e acessibilidade",
    },
  },
  {
    id: "lin-0007",
    subjectId: "spanish",
    topic: "Interpretação, vocabulário e intenção",
    difficulty: "basic",
    support: [
      {
        type: "text",
        content:
          "«En el barrio, la biblioteca abre sus puertas también por la noche. Vecinas y vecinos pueden leer, estudiar y participar en talleres gratuitos.»",
        source: "Aviso original em espanhol, elaborado para este exercício.",
      },
    ],
    statement: "De acordo com o aviso, a biblioteca oferece",
    choices: [
      "oficinas gratuitas e espaço para leitura e estudo.",
      "somente empréstimos pagos durante o dia.",
      "aulas noturnas exclusivas para funcionários.",
      "a venda de livros e materiais escolares.",
      "o fechamento do espaço durante a noite.",
    ],
    answer: 0,
    explanation:
      "O aviso informa que a biblioteca abre à noite e oferece leitura, estudo e oficinas gratuitas. Não menciona venda de materiais ou restrição a funcionários.",
    lessonRef: {
      subjectId: "spanish",
      partTitle: "Interpretação, vocabulário e variedades",
    },
  },
];
