starterLibrary.math = {
  name: "Matemática",
  icon: "📐",
  parts: [
    {
      category: "Matemática básica",
      title: "Números e operações",
      intro:
        "Os conjuntos numéricos organizam os números conforme suas propriedades. Conhecer as operações, os sinais e a ordem de cálculo ajuda a resolver expressões e problemas.",
      heading: "Conjuntos, sinais e cálculos",
      points: [
        [
          "Naturais e inteiros",
          "Os naturais (ℕ; neste material, incluindo 0) são 0, 1, 2…; os inteiros (ℤ) incluem também os negativos: …−2, −1, 0, 1, 2…. Inteiros não incluem frações como 1/2.",
          "A temperatura passa de −3 °C para 2 °C: a variação é 2 − (−3) = 5 °C. Subtrair um negativo equivale a somar; por isso, o resultado é positivo.",
        ],
        [
          "Racionais e irracionais",
          "Racionais (ℚ) podem ser escritos como fração de inteiros, como −3/4 ou 0,5. Irracionais não têm representação decimal finita ou periódica, como √2 e π.",
          "3/4 é racional porque pode ser escrito como quociente de inteiros; √2 é irracional porque sua expansão decimal não termina nem se repete periodicamente.",
        ],
        [
          "Positivos, negativos e módulo",
          "Na reta numérica, números positivos ficam à direita do zero e negativos à esquerda. O módulo |x| é a distância até zero; por exemplo, |−5| = 5.",
          "|−7| = 7: o módulo mede a distância até zero, portanto não é negativo.",
        ],
        [
          "Operações e decimais",
          "Adição, subtração, multiplicação e divisão seguem regras de sinais. Números decimais podem ser alinhados pela vírgula para somar e subtrair; para multiplicar, conte as casas decimais.",
          "Em 2(3 + 4) − 5, resolva primeiro os parênteses: 2×7 − 5 = 9; siga a ordem das operações antes de somar ou subtrair.",
        ],
        [
          "Expressões numéricas",
          "Respeite a ordem: parênteses, potências e raízes, multiplicações e divisões, adições e subtrações. Em operações de mesma prioridade, siga da esquerda para a direita.",
          "Em 2 + 3×4, faça primeiro a multiplicação: 2 + 12 = 14. Parênteses podem mudar a ordem, então (2 + 3)×4 = 20.",
        ],
      ],
      note: "Subtrair um número equivale a somar seu oposto: 7 − (−2) = 7 + 2 = 9.",
      questions: [
        {
          text: "Qual destes números é irracional?",
          choices: ["0,25", "√2", "−3"],
          answer: 1,
        },
        { text: "Quanto vale |−8|?", choices: ["−8", "0", "8"], answer: 2 },
        {
          text: "Qual operação deve ser resolvida primeiro em 3 + 2 × 4?",
          choices: ["A adição", "A multiplicação", "As duas ao mesmo tempo"],
          answer: 1,
        },
      ],
    },
    {
      category: "Matemática básica",
      title: "Frações, divisibilidade, MMC e MDC",
      intro:
        "Frações representam partes de um todo e também quocientes. A divisibilidade, os múltiplos e os divisores permitem simplificar frações e encontrar denominadores comuns.",
      heading: "Frações e divisores",
      points: [
        [
          "Frações",
          "O numerador indica as partes consideradas e o denominador, em quantas partes iguais o todo foi dividido. Frações equivalentes representam o mesmo valor.",
          "Para encontrar 3/4 de 20, divida 20 em quatro partes iguais (5 cada) e tome três: 3×5 = 15. O denominador indica partes iguais e o numerador quantas usar.",
        ],
        [
          "Comparação e operações",
          "Simplifique dividindo numerador e denominador por um divisor comum. Para comparar ou somar frações com denominadores diferentes, use um denominador comum; na multiplicação, multiplique numeradores e denominadores.",
          "As turmas A (notas 7, 7, 7) e B (5, 7, 9) têm média 7, mas B varia mais. A média sozinha não descreve a dispersão.",
        ],
        [
          "Divisibilidade",
          "Um número é divisível por outro quando a divisão é exata. Por exemplo, números pares são divisíveis por 2; números cuja soma dos algarismos é divisível por 3 também são divisíveis por 3.",
          "números pares são divisíveis por 2;",
        ],
        [
          "Múltiplos e divisores",
          "Múltiplos de um número são resultados de multiplicá-lo por inteiros; divisores o dividem sem resto. Assim, 12 é múltiplo de 4 e 4 é divisor de 12.",
          "Os múltiplos de 4 são 4, 8, 12, 16…; como 12 = 4 × 3, 12 é múltiplo de 4 e 4 é divisor de 12.",
        ],
        [
          "MMC e MDC",
          "O MMC é o menor múltiplo comum positivo e ajuda a somar frações. O MDC é o maior divisor comum e ajuda a simplificá-las. Para 6 e 8: MMC = 24 e MDC = 2.",
          "Dois alarmes tocam a cada 6 e 8 minutos: o próximo toque simultâneo ocorre após MMC(6,8) = 24 min. Para dividir 24 objetos igualmente no maior número de grupos, use MDC.",
        ],
      ],
      note: "Para somar 1/6 + 1/4, use o MMC 12: 2/12 + 3/12 = 5/12.",
      questions: [
        {
          text: "Qual é o resultado de 1/4 + 1/2?",
          choices: ["2/6", "3/4", "2/4"],
          answer: 1,
        },
        {
          text: "Qual é o MMC de 6 e 8?",
          choices: ["12", "24", "48"],
          answer: 1,
        },
        {
          text: "Qual é o MDC de 12 e 18?",
          choices: ["3", "6", "36"],
          answer: 1,
        },
      ],
    },
    {
      category: "Matemática básica",
      title: "Razões, proporções e regra de três",
      intro:
        "Razões comparam grandezas por meio de uma divisão. Quando duas razões são iguais, formam uma proporção, que pode ser usada para encontrar um valor desconhecido.",
      heading: "Proporcionalidade na prática",
      points: [
        [
          "Razão e proporção",
          "A razão entre 2 e 5 é 2/5. Em uma proporção, como 2/5 = 4/10, o produto dos extremos é igual ao dos meios.",
          "Se 3 cadernos custam R$ 18, cada um custa R$ 6; 5 cadernos custam 5 × 6 = R$ 30.",
        ],
        [
          "Regra de três simples",
          "Relacione duas grandezas. Em proporcionalidade direta, ambas aumentam ou diminuem juntas; na inversa, quando uma aumenta, a outra diminui.",
          "Se 3 cadernos custam R$ 18, cada um custa R$ 6; 5 cadernos custam 5 × 6 = R$ 30.",
        ],
        [
          "Regra de três composta",
          "Relacione três ou mais grandezas e determine se cada uma é direta ou inversamente proporcional à incógnita antes de montar o cálculo.",
          "Se 3 cadernos custam R$ 18, cada um custa R$ 6; 5 cadernos custam 5 × 6 = R$ 30.",
        ],
        [
          "Exemplo",
          "Se 3 cadernos custam R$ 18, cada um custa R$ 6; mantendo o preço unitário, 5 custam 5×6=R$ 30. A proporcionalidade depende dessa constância.",
          "Se 3 cadernos custam R$ 18, divida 18 por 3 para obter R$ 6 por caderno; depois multiplique 5×6 = R$ 30 para cinco, supondo preço unitário constante.",
        ],
      ],
      note: "Antes de multiplicar cruzado, confira se as grandezas são diretamente ou inversamente proporcionais.",
      questions: [
        {
          text: "Se 3 cadernos custam R$ 18, quanto custam 5 pelo mesmo preço unitário?",
          choices: ["R$ 24", "R$ 30", "R$ 36"],
          answer: 1,
        },
        {
          text: "Se mais trabalhadores fazem o mesmo serviço em menos tempo, as grandezas são:",
          choices: [
            "Diretamente proporcionais",
            "Inversamente proporcionais",
            "Sempre iguais",
          ],
          answer: 1,
        },
        {
          text: "Uma razão compara grandezas por meio de:",
          choices: ["Uma divisão", "Uma soma obrigatória", "Uma raiz"],
          answer: 0,
        },
      ],
    },
    {
      category: "Matemática básica",
      title: "Potências, raízes e notação científica",
      intro:
        "Potenciação representa multiplicações repetidas. A radiciação desfaz uma potência, enquanto a notação científica facilita a escrita de números muito grandes ou muito pequenos.",
      heading: "Regras e representações",
      points: [
        [
          "Potenciação",
          "Em aⁿ, a é a base e n indica quantas vezes a base aparece como fator: 2³ = 2 × 2 × 2 = 8. Para a ≠ 0, a⁰ = 1; não confunda elevar à potência com multiplicar a base pelo expoente.",
          "3⁴ = 3 × 3 × 3 × 3 = 81; o expoente indica quantas vezes a base aparece como fator.",
        ],
        [
          "Propriedades das potências",
          "Na mesma base, aᵐ × aⁿ = aᵐ⁺ⁿ e aᵐ ÷ aⁿ = aᵐ⁻ⁿ. Uma potência elevada a outra potência tem expoentes multiplicados.",
          "3⁴ = 3 × 3 × 3 × 3 = 81; o expoente indica quantas vezes a base aparece como fator.",
        ],
        [
          "Radiciação",
          "√a é o número não negativo que, ao quadrado, resulta em a. Assim, √49 = 7. A raiz quadrada é a operação inversa de elevar ao quadrado.",
          "√81 = 9 porque 9² = 81; a raiz quadrada principal é não negativa.",
        ],
        [
          "Notação científica",
          "A notação científica escreve um número como a × 10ⁿ, com 1 ≤ |a| < 10, facilitando comparar valores muito grandes ou pequenos. Por exemplo, 3.500.000 = 3,5 × 10⁶.",
          "A distância 150.000.000 km pode ser escrita como 1,5 × 10⁸ km.",
        ],
      ],
      note: "Ao elevar um número negativo ao quadrado, use parênteses: (−3)² = 9, enquanto −3² = −9.",
      questions: [
        { text: "Quanto é 2³?", choices: ["6", "8", "9"], answer: 1 },
        { text: "Qual é √49?", choices: ["6", "7", "24,5"], answer: 1 },
        {
          text: "Como escrever 3.500.000 em notação científica?",
          choices: ["35 × 10⁵", "3,5 × 10⁶", "0,35 × 10⁷"],
          answer: 1,
        },
      ],
    },
    {
      category: "Matemática básica",
      title: "Expressões algébricas",
      intro:
        "A álgebra usa letras para representar números desconhecidos ou variáveis. A ordem das operações também vale para expressões com letras.",
      heading: "Letras, termos e substituição",
      points: [
        [
          "Variáveis e expressões",
          "Em 3x + 2, x é uma variável e a expressão representa um valor que depende dela. Se x = 4, seu valor numérico é 3 × 4 + 2 = 14.",
          "Se uma corrida custa R$ 4 de taxa fixa mais R$ 2 por quilômetro, o custo para x quilômetros é 4 + 2x. A letra representa qualquer distância permitida, e não um número fixo.",
        ],
        [
          "Termos semelhantes",
          "Só podem ser somados ou subtraídos quando têm a mesma parte literal: 3x + 2x = 5x, mas 3x + 2y não pode ser reduzido.",
          "Em 3x + 2x − 4, some apenas os termos semelhantes: 5x − 4.",
        ],
        [
          "Valor numérico",
          "Substitua cada variável pelo valor indicado e siga a ordem das operações. Se x = 4, então 2x + 3 = 11.",
          "Para x = −2, 3x² + 1 = 3×(−2)² + 1 = 13. Substitua primeiro, use parênteses no negativo e só então calcule as potências.",
        ],
        [
          "Distributiva",
          "A propriedade distributiva multiplica o fator por cada termo dentro dos parênteses: 2(x + 3) = 2x + 6. Ela permite retirar parênteses sem alterar o valor da expressão.",
          "Em 3(x − 4), multiplique 3 por cada termo: 3x − 12. Distribuir apenas no primeiro termo deixaria a expressão incorreta.",
        ],
      ],
      note: "Use parênteses ao substituir uma variável por um número negativo: se x = −2, então x² = (−2)² = 4.",
      questions: [
        {
          text: "Se x = 4, quanto vale 2x + 3?",
          choices: ["11", "14", "9"],
          answer: 0,
        },
        {
          text: "Simplifique 3x + 2x.",
          choices: ["5x", "5x²", "6x"],
          answer: 0,
        },
        {
          text: "Aplique a distributiva: 2(x + 3).",
          choices: ["2x + 3", "2x + 6", "x + 6"],
          answer: 1,
        },
      ],
    },
    {
      category: "Matemática financeira",
      title: "Matemática Financeira — conceitos básicos",
      intro:
        "A matemática financeira ajuda a comparar valores em datas diferentes e a entender como juros, taxas e prazos alteram o valor do dinheiro. Ela aparece em investimentos, empréstimos, dívidas e compras parceladas.",
      heading: "Elementos de uma operação financeira",
      points: [
        [
          "Capital (C)",
          "Capital é o valor inicial aplicado, emprestado ou devido, antes de acrescentar juros. Em uma aplicação de R$ 1.000, por exemplo, C = R$ 1.000.",
          "Um investimento de R$ 1.200 começa com capital C = R$ 1.200; esse é o valor inicial antes de calcular os rendimentos.",
        ],
        [
          "Juros (J)",
          "Juros são o valor cobrado ou recebido pelo uso do capital durante certo período. Dependem do capital, da taxa e do tempo, conforme o regime de cálculo.",
          "Com capital de R$ 1.200, taxa de 2% ao mês e 5 meses, os juros simples são J = 1.200 × 0,02 × 5 = R$ 120.",
        ],
        [
          "Montante (M)",
          "Montante é o total ao fim da operação: capital mais juros. A relação básica é M = C + J; se R$ 1.000 renderem R$ 60, M será R$ 1.060.",
          "Se o capital é R$ 1.200 e os juros são R$ 120, o montante final é M = C + J = R$ 1.320.",
        ],
        [
          "Taxa de juros (i)",
          "Percentual usado para calcular os juros. Sempre considere o período da taxa, como mês ou ano, junto com o prazo.",
          "Uma taxa de 2% ao mês corresponde a 0,02 por mês; em um cálculo, use a forma decimal e combine o prazo na mesma unidade.",
        ],
      ],
      note: "Antes de calcular, confira se a taxa e o prazo estão na mesma unidade de tempo.",
      questions: [
        {
          text: "O que representa o capital (C)?",
          choices: [
            "O valor inicial da operação",
            "A soma final de todas as parcelas",
            "O prazo do empréstimo",
          ],
          answer: 0,
        },
        {
          text: "Qual relação expressa o montante?",
          choices: ["M = C − J", "M = C + J", "M = J ÷ C"],
          answer: 1,
        },
        {
          text: "O que é importante verificar ao usar uma taxa de juros?",
          choices: [
            "Se a taxa e o prazo usam períodos compatíveis",
            "Se o capital é sempre igual a zero",
            "Se o montante é menor que os juros",
          ],
          answer: 0,
        },
      ],
      source: {
        url: "https://www.todamateria.com.br/matematica-financeira/",
        author: "Rosimar Gouveia",
        role: "Professora de Matemática e Física",
      },
    },
    {
      category: "Matemática financeira",
      title: "Porcentagem e variação percentual",
      intro:
        "Porcentagem significa uma razão por 100. Para calcular p% de um valor, transforme p% em p/100 e multiplique pelo valor. Esse cálculo ajuda a encontrar descontos, acréscimos e variações de preço.",
      heading: "Descontos, aumentos e variações",
      points: [
        [
          "Desconto",
          "Uma camiseta de R$ 120 com 50% de desconto tem abatimento de 0,50 × 120 = R$ 60. O preço final é R$ 120 − R$ 60 = R$ 60.",
          "Uma mochila de R$ 200 com 15% de desconto: 0,15 × 200 = R$ 30 de desconto; o preço final é R$ 170.",
        ],
        [
          "Outro exemplo de desconto",
          "Com 23% de desconto em R$ 120, o abatimento é 0,23 × 120 = R$ 27,60; subtraia esse valor do preço inicial para obter R$ 92,40. A porcentagem é calculada sobre o valor inicial.",
          "Uma mochila de R$ 200 com 15% de desconto: 0,15 × 200 = R$ 30 de desconto; o preço final é R$ 170.",
        ],
        [
          "Aumento",
          "Se o feijão custa R$ 8 e sobe 30%, o acréscimo é 0,30 × 8 = R$ 2,40 e o novo preço é R$ 10,40. O percentual de aumento usa o preço inicial como base.",
          "Uma mochila de R$ 200 com 15% de desconto: 0,15 × 200 = R$ 30 de desconto; o preço final é R$ 170.",
        ],
        [
          "Variação percentual",
          "Compare a diferença com o valor inicial: (variação ÷ valor inicial) × 100%. De R$ 25 para R$ 28, a variação é 3/25 = 12%.",
          "Uma mochila de R$ 200 com 15% de desconto: 0,15 × 200 = R$ 30 de desconto; o preço final é R$ 170.",
        ],
      ],
      note: "Para um aumento, some o acréscimo ao preço inicial; para um desconto, subtraia o abatimento.",
      questions: [
        {
          text: "Uma compra de R$ 120 recebe 50% de desconto. Quanto se paga?",
          choices: ["R$ 60", "R$ 50", "R$ 90"],
          answer: 0,
        },
        {
          text: "Quanto é 30% de R$ 8?",
          choices: ["R$ 0,80", "R$ 2,40", "R$ 3,00"],
          answer: 1,
        },
        {
          text: "Um preço passou de R$ 25 para R$ 28. Qual foi a variação percentual?",
          choices: ["3%", "12%", "28%"],
          answer: 1,
        },
      ],
      source: {
        url: "https://www.todamateria.com.br/matematica-financeira/",
        author: "Rosimar Gouveia",
        role: "Professora de Matemática e Física",
      },
    },
    {
      category: "Matemática financeira",
      title: "Juros simples e compostos",
      intro:
        "No regime simples, os juros de cada período são calculados sobre o capital inicial. No regime composto, os juros são incorporados ao saldo, e os períodos seguintes rendem sobre esse novo montante.",
      heading: "Fórmulas e interpretação",
      points: [
        [
          "Juros simples",
          "J = C × i × n. C é o capital, i é a taxa por período e n é o número de períodos. O montante é M = C + J, ou M = C × (1 + i × n).",
          "Com capital de R$ 1.200, taxa de 2% ao mês e 5 meses, os juros simples são J = 1.200 × 0,02 × 5 = R$ 120.",
        ],
        [
          "Exemplo de juros simples",
          "Em juros simples, a taxa incide sempre sobre o capital inicial: R$ 1.000 a 2% ao mês por 3 meses geram J = 1.000 × 0,02 × 3 = R$ 60 e M = R$ 1.060.",
          "Se 3 cadernos custam R$ 18, divida 18 por 3 para obter R$ 6 por caderno; depois multiplique 5×6 = R$ 30 para cinco, supondo preço unitário constante.",
        ],
        [
          "Juros compostos",
          "Nos juros compostos, cada período incide sobre o saldo acumulado, incluindo juros anteriores. Para taxa i por período e n períodos, M = C × (1 + i)^n.",
          "Com capital de R$ 1.200, taxa de 2% ao mês e 5 meses, os juros simples são J = 1.200 × 0,02 × 5 = R$ 120.",
        ],
        [
          "Exemplo de juros compostos",
          "Com capital de R$ 1.000, taxa de 2% ao mês e 3 meses, M = 1.000 × (1,02)^3 ≈ R$ 1.061,21. A diferença para juros simples vem dos juros sobre juros.",
          "Se 3 cadernos custam R$ 18, divida 18 por 3 para obter R$ 6 por caderno; depois multiplique 5×6 = R$ 30 para cinco, supondo preço unitário constante.",
        ],
      ],
      note: "Use a taxa em forma decimal (2% = 0,02) e mantenha taxa e período na mesma unidade. Nos compostos, o expoente n indica o número de períodos.",
      questions: [
        {
          text: "Qual fórmula calcula os juros simples?",
          choices: ["J = C × i × n", "J = C + i + n", "J = C ÷ (i × n)"],
          answer: 0,
        },
        {
          text: "R$ 1.000 a 2% ao mês por 3 meses rende quanto de juros simples?",
          choices: ["R$ 20", "R$ 60", "R$ 120"],
          answer: 1,
        },
        {
          text: "O que distingue os juros compostos?",
          choices: [
            "A taxa deixa de existir",
            "Cada período considera o saldo acumulado",
            "Os juros são sempre iguais a zero",
          ],
          answer: 1,
        },
      ],
      source: {
        url: "https://www.todamateria.com.br/matematica-financeira/",
        author: "Rosimar Gouveia",
        role: "Professora de Matemática e Física",
      },
    },
    {
      category: "Matemática financeira",
      title: "Inflação, lucro e decisões de compra",
      intro:
        "A matemática financeira também ajuda a comparar o custo de produtos, entender o efeito da inflação e avaliar o resultado de uma venda ou de uma compra parcelada.",
      heading: "Comparando valores no cotidiano",
      points: [
        [
          "Lucro e prejuízo",
          "Lucro = preço de venda − custo. Se o resultado for negativo, há prejuízo. A margem de lucro percentual costuma comparar o lucro com o custo ou com a receita; indique qual base está usando.",
          "Uma loja compra um livro por R$ 30 e vende por R$ 42: o lucro é R$ 12, ou 40% sobre o custo.",
        ],
        [
          "Inflação",
          "É o aumento generalizado dos preços ao longo do tempo, reduzindo o poder de compra do dinheiro. Se preços sobem 5%, um valor de R$ 100 precisa virar R$ 105 para acompanhar esse aumento.",
          "Com inflação de 5%, um produto de R$ 100 passa a custar R$ 105, se o preço acompanhar integralmente o índice.",
        ],
        [
          "Comparação de preços",
          "Compare preços pela mesma unidade (por quilo, litro ou unidade) e considere descontos, frete e quantidade para descobrir qual opção realmente compensa.",
          "As turmas A (notas 7, 7, 7) e B (5, 7, 9) têm média 7, mas B varia mais. A média sozinha não descreve a dispersão.",
        ],
        [
          "Parcelamentos e financiamentos",
          "Some o valor total das parcelas, observe entrada, taxas, tarifas e prazo e compare o total financiado com o preço à vista. Parcelas menores podem significar um custo final maior.",
          "Um produto de R$ 900 pode ser pago em 10 parcelas de R$ 100: total = 10 × 100 = R$ 1.000, sem contar outras taxas. Compare esse total com o preço à vista, não só o valor de cada parcela.",
        ],
      ],
      note: "Confira o custo total, e não apenas o valor da parcela. Em compras com juros, prazo maior pode aumentar bastante o montante pago.",
      questions: [
        {
          text: "Um produto custa R$ 80 e é vendido por R$ 100. Qual é o lucro em reais?",
          choices: ["R$ 20", "R$ 80", "R$ 180"],
          answer: 0,
        },
        {
          text: "O que costuma acontecer com o poder de compra quando há inflação?",
          choices: [
            "A mesma quantia compra menos",
            "A mesma quantia compra sempre mais",
            "Os preços deixam de existir",
          ],
          answer: 0,
        },
        {
          text: "O que comparar ao avaliar um parcelamento?",
          choices: [
            "Somente o valor da primeira parcela",
            "O custo total, incluindo taxas e juros",
            "Apenas a cor do produto",
          ],
          answer: 1,
        },
      ],
      source: {
        url: "https://www.todamateria.com.br/matematica-financeira/",
        author: "Rosimar Gouveia",
        role: "Professora de Matemática e Física",
      },
    },
    {
      category: "Álgebra",
      title: "Monômios, polinômios e produtos notáveis",
      intro:
        "Expressões algébricas são formadas por números, variáveis e operações. Monômios e polinômios podem ser organizados e transformados usando propriedades das operações.",
      heading: "Operações e identidades",
      points: [
        [
          "Monômios e polinômios",
          "Monômio tem um único termo, como 3x². Polinômio é uma soma ou subtração de monômios, como x² + 2x − 1.",
          "Em 3x + 2x − 4, some apenas os termos semelhantes: 5x − 4.",
        ],
        [
          "Operações",
          "Some termos semelhantes. Para multiplicar monômios, multiplique coeficientes e some expoentes de bases iguais; para dividir, divida coeficientes e subtraia expoentes.",
          "Em 2(3 + 4) − 5, resolva primeiro os parênteses: 2×7 − 5 = 9; siga a ordem das operações antes de somar ou subtrair.",
        ],
        [
          "Distributiva",
          "Para multiplicar polinômios, cada termo de um fator multiplica cada termo do outro e, no fim, reduza termos semelhantes.",
          "Em 3(x − 4), multiplique 3 por cada termo: 3x − 12. Distribuir apenas no primeiro termo deixaria a expressão incorreta.",
        ],
        [
          "Produtos notáveis",
          "Produtos notáveis são identidades que agilizam expansões: (a + b)² = a² + 2ab + b² e (a + b)(a − b) = a² − b². O termo do meio surge dos produtos cruzados.",
          "(x + 3)² não é x² + 9: aplique (a + b)² = a² + 2ab + b², obtendo x² + 6x + 9. O termo do meio vem do produto cruzado.",
        ],
      ],
      note: "O quadrado da soma não é a soma dos quadrados: (a + b)² inclui o termo 2ab.",
      questions: [
        {
          text: "Qual é o desenvolvimento de (x + 3)²?",
          choices: ["x² + 9", "x² + 6x + 9", "x² + 3x + 9"],
          answer: 1,
        },
        {
          text: "Qual expressão é um polinômio?",
          choices: ["2x² − x + 4", "Somente 7", "Uma igualdade sem variáveis"],
          answer: 0,
        },
        {
          text: "Quanto é (a + b)(a − b)?",
          choices: ["a² + b²", "a² − b²", "a² − 2ab + b²"],
          answer: 1,
        },
      ],
    },
    {
      category: "Álgebra",
      title: "Fatoração",
      intro:
        "Fatorar é reescrever uma soma ou diferença como um produto. Essa transformação pode simplificar expressões e ajudar a resolver equações.",
      heading: "Casos frequentes",
      points: [
        [
          "Fator comum",
          "Na fatoração por fator comum, coloque em evidência o maior fator compartilhado: 6x + 9 = 3(2x + 3). Distribuir de volta permite conferir o resultado.",
          "Em 6x + 9, 3 é o fator comum: 6x + 9 = 3(2x + 3). Multiplicar de volta confere a fatoração.",
        ],
        [
          "Agrupamento",
          "Na fatoração por agrupamento, separe termos em grupos que revelem um fator comum: ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y). Multiplicar a resposta confere o resultado.",
          "x² + 5x pode ser fatorado colocando x em evidência: x(x + 5).",
        ],
        [
          "Diferença de quadrados",
          "A diferença entre dois quadrados fatoriza como a² − b² = (a − b)(a + b), pois os termos cruzados se cancelam ao multiplicar os binômios.",
          "x² − 16 = x² − 4² = (x − 4)(x + 4); é uma diferença de dois quadrados, não um quadrado de diferença.",
        ],
        [
          "Trinômio quadrado perfeito",
          "Um trinômio é quadrado perfeito quando o primeiro e o último termos são quadrados e o central é o dobro do produto das raízes: a² + 2ab + b² = (a + b)².",
          "x² + 6x + 9 = x² + 2·x·3 + 3² = (x + 3)²; confira se o termo do meio é o dobro do produto.",
        ],
      ],
      note: "Confira uma fatoração multiplicando os fatores e verificando se o polinômio original reaparece.",
      questions: [
        {
          text: "Fatore 6x + 9.",
          choices: ["3(2x + 3)", "6(x + 9)", "3(2x + 9)"],
          answer: 0,
        },
        {
          text: "Fatore x² − 16.",
          choices: ["(x − 4)²", "(x − 4)(x + 4)", "x(x − 16)"],
          answer: 1,
        },
        {
          text: "Qual é a forma fatorada de x² + 6x + 9?",
          choices: ["(x + 3)²", "(x − 3)²", "x(x + 9)"],
          answer: 0,
        },
      ],
    },
    {
      category: "Álgebra",
      title: "Equações, sistemas e inequações",
      intro:
        "Uma equação afirma que duas expressões têm o mesmo valor. Resolver é encontrar os valores que tornam a igualdade verdadeira; sistemas combinam equações e inequações usam sinais de comparação.",
      heading: "Do primeiro grau aos sistemas",
      points: [
        [
          "Equação do primeiro grau",
          "Isole a incógnita fazendo a mesma operação nos dois lados, preservando a igualdade. Em 2x + 3 = 11, subtraia 3 e divida por 2 para obter x = 4; substitua para conferir.",
          "Para resolver 3x + 5 = 20, subtraia 5 dos dois lados e divida por 3: x = 5; substitua o resultado para conferir a igualdade.",
        ],
        [
          "Equação do segundo grau",
          "Para ax² + bx + c = 0, com a ≠ 0, calcule Δ = b² − 4ac e use x = (−b ± √Δ)/(2a). O sinal de Δ indica se há duas raízes reais, uma raiz real ou nenhuma raiz real.",
          "A altura de uma bola pode ser modelada por h(t) = −t² + 4t. O vértice ocorre em t = 2 e indica a altura máxima do modelo.",
        ],
        [
          "Sistemas de equações",
          "Encontre valores que satisfaçam todas as equações. Use substituição ou eliminação; a solução é o ponto de encontro das condições.",
          "Ingressos adulto custam R$ 20 e infantis R$ 10. Se foram vendidos 5 ingressos por R$ 70, x + y = 5 e 20x + 10y = 70; a solução x = 2, y = 3 satisfaz as duas condições.",
        ],
        [
          "Inequações",
          "Resolva como uma equação, mas inverta o sinal da desigualdade ao multiplicar ou dividir por número negativo.",
          "De 2x + 1 < 7, subtraia 1 e divida por 2: x < 3. As soluções são todos os números menores que 3.",
        ],
        [
          "Problemas e sequências",
          "Defina a incógnita, traduza as informações em equações e confira o resultado no enunciado. Em sequências, identifique o padrão que relaciona os termos.",
          "Na sequência 2, 5, 8, 11, soma-se 3 a cada termo; o próximo é 14.",
        ],
      ],
      note: "Ao resolver −2x < 6, dividir por −2 inverte o sinal: x > −3.",
      questions: [
        {
          text: "Resolva 2x + 3 = 11.",
          choices: ["x = 4", "x = 7", "x = 14"],
          answer: 0,
        },
        {
          text: "Qual é a fórmula do discriminante de ax² + bx + c = 0?",
          choices: ["Δ = b² − 4ac", "Δ = a + b + c", "Δ = 4a − bc"],
          answer: 0,
        },
        {
          text: "Ao dividir uma inequação por um número negativo, o sinal:",
          choices: ["Permanece igual", "É invertido", "Desaparece"],
          answer: 1,
        },
      ],
    },
    {
      category: "Funções",
      title: "Conceito, domínio e gráficos",
      intro:
        "Uma função associa cada elemento do domínio a exatamente um elemento do contradomínio. Ela pode ser representada por uma regra, uma tabela, pares ordenados ou um gráfico.",
      heading: "Lendo uma função",
      points: [
        [
          "Domínio, contradomínio e imagem",
          "Domínio: entradas permitidas. Contradomínio: conjunto de possíveis saídas definido para a função. Imagem: saídas que a função realmente assume.",
          "Para f(x) = x² com domínio {−2, −1, 0, 1, 2} e contradomínio {0, 1, 2, 3, 4}, a imagem é {0, 1, 4}: são as saídas que a regra realmente produz.",
        ],
        [
          "Plano cartesiano",
          "Cada ponto tem coordenadas (x, y): x é a abscissa e y é a ordenada. O gráfico mostra como a saída varia com a entrada.",
          "O ponto (−2, 5) fica duas unidades à esquerda e cinco acima da origem; primeiro localize x, depois y.",
        ],
        [
          "Interpretação de gráficos",
          "Observe eixos, escala, unidades, intervalos, interceptos e tendência. O zero ou raiz é o valor de x para o qual f(x) = 0.",
          "As listas A (6, 8, 10) e B (2, 8, 14) têm média 8, mas B é mais dispersa; compare desvio padrão e contexto, não apenas a média.",
        ],
        [
          "Teste da reta vertical",
          "Um gráfico representa y como função de x se toda reta vertical o intercepta no máximo uma vez; assim, cada x tem uma única saída. Um círculo falha nesse teste.",
          "Uma parábola vertical passa no teste: cada reta vertical a cruza uma vez. Um círculo falha porque algumas retas verticais cruzam dois pontos, logo não define y como função única de x.",
        ],
      ],
      note: "Nem todo número do contradomínio precisa pertencer à imagem da função.",
      questions: [
        {
          text: "O que é o domínio de uma função?",
          choices: [
            "O conjunto de entradas permitidas",
            "Somente os valores máximos",
            "O conjunto de pontos fora do gráfico",
          ],
          answer: 0,
        },
        {
          text: "Qual é a raiz de f(x) = 2x − 6?",
          choices: ["x = 2", "x = 3", "x = 6"],
          answer: 1,
        },
        {
          text: "No plano cartesiano, o ponto (−2, 5) tem qual ordenada?",
          choices: ["−2", "3", "5"],
          answer: 2,
        },
      ],
    },
    {
      category: "Funções",
      title: "Função afim e função quadrática",
      intro:
        "Funções afins e quadráticas modelam situações de variação constante ou curvada. Seus gráficos permitem interpretar raízes, crescimento, decrescimento e valores extremos.",
      heading: "Retas e parábolas",
      points: [
        [
          "Função afim",
          "f(x) = ax + b. Seu gráfico é uma reta; a é o coeficiente angular e b é o intercepto no eixo y. Se a > 0, cresce; se a < 0, decresce.",
          "Se uma corrida custa R$ 5 de taxa fixa mais R$ 2 por quilômetro, o preço é f(x) = 5 + 2x; em 4 km, f(4) = R$ 13.",
        ],
        [
          "Raiz da função afim",
          "A raiz da função afim é o valor de x que torna f(x) = 0, isto é, onde o gráfico cruza o eixo x. Em ax + b = 0, x = −b/a, quando a ≠ 0.",
          "Se uma corrida custa R$ 5 de taxa fixa mais R$ 2 por quilômetro, o preço é f(x) = 5 + 2x; em 4 km, f(4) = R$ 13.",
        ],
        [
          "Função quadrática",
          "f(x) = ax² + bx + c, com a ≠ 0. Seu gráfico é uma parábola; o sinal de a indica se ela abre para cima ou para baixo.",
          "A altura de uma bola pode ser modelada por h(t) = −t² + 4t. O vértice ocorre em t = 2 e indica a altura máxima do modelo.",
        ],
        [
          "Raízes, vértice e extremos",
          "As raízes podem ser encontradas pelo discriminante. O vértice ocorre em xᵥ = −b/(2a); para a > 0 há mínimo e para a < 0 há máximo.",
          "Em f(x) = −(x − 2)² + 9, o vértice é (2, 9), um máximo porque a parábola abre para baixo; as raízes são x = −1 e x = 5, obtidas ao igualar f(x) a zero.",
        ],
      ],
      note: "Na função afim, a inclinação é constante; na quadrática, a inclinação varia ao longo da parábola.",
      questions: [
        {
          text: "Na função f(x) = 3x − 2, qual é o coeficiente angular?",
          choices: ["−2", "2", "3"],
          answer: 2,
        },
        {
          text: "Se a parábola tem a > 0, seu vértice representa:",
          choices: ["Um valor mínimo", "Um valor máximo", "Uma reta vertical"],
          answer: 0,
        },
        {
          text: "Qual é a raiz de f(x) = 2x + 8?",
          choices: ["−4", "4", "−8"],
          answer: 0,
        },
      ],
    },
    {
      category: "Funções",
      title: "Funções exponenciais e logarítmicas",
      intro:
        "Funções exponenciais descrevem variações multiplicativas, como crescimento percentual repetido. Logaritmos ajudam a descobrir o expoente necessário para atingir determinado valor.",
      heading: "Crescimento e decrescimento",
      points: [
        [
          "Função exponencial",
          "Na função exponencial f(x) = aˣ, a > 0 e a ≠ 1; a > 1 produz crescimento e 0 < a < 1, decrescimento. A variável aparece no expoente, o que distingue o modelo de uma função polinomial.",
          "Uma população que dobra a cada período pode ser modelada por P(t) = 100 × 2ᵗ; após 3 períodos, são 800 indivíduos.",
        ],
        [
          "Função logarítmica",
          "logₐ(x) = y pergunta a que expoente elevar a base a para obter x, ou seja, aʸ = x. Exige x > 0, a > 0 e a ≠ 1; o domínio não inclui zero nem números negativos.",
          "Se 2ˣ = 8, então x = log₂(8) = 3, pois 2³ = 8.",
        ],
        [
          "Relação entre exponencial e logaritmo",
          "Exponencial e logaritmo de mesma base são funções inversas: aˣ = y equivale a logₐ(y) = x. Uma desfaz a operação da outra dentro dos domínios permitidos.",
          "Se 2ˣ = 8, então x = log₂(8) = 3, pois 2³ = 8.",
        ],
        [
          "Aplicações",
          "Modelos exponenciais aparecem em juros compostos, populações e decaimento; a escala logarítmica ajuda a representar grandezas com ampla variação.",
          "Um saldo de R$ 1.000 que cresce 10% ao ano segue um modelo exponencial: após dois anos, 1.000×1,1² = R$ 1.210.",
        ],
      ],
      note: "Em y = 2ˣ, cada aumento de 1 em x dobra y; já log₂(8) = 3 porque 2³ = 8.",
      questions: [
        {
          text: "A função 3ˣ é crescente ou decrescente?",
          choices: ["Crescente", "Decrescente", "Constante"],
          answer: 0,
        },
        { text: "Quanto é log₂(8)?", choices: ["2", "3", "4"], answer: 1 },
        {
          text: "Qual condição faz parte do domínio de logₐ(x)?",
          choices: ["x > 0", "x < 0", "x = 0"],
          answer: 0,
        },
      ],
    },
    {
      category: "Geometria plana",
      title: "Pontos, retas, ângulos e triângulos",
      intro:
        "A geometria plana estuda figuras em duas dimensões. Pontos, retas e planos são ideias fundamentais para descrever posições, relações e medidas.",
      heading: "Fundamentos e triângulos",
      points: [
        [
          "Ponto, reta e plano",
          "Pontos indicam posições; retas se estendem indefinidamente; planos são superfícies planas ilimitadas.",
          "Uma quadra pode ser representada por um plano, a posição de uma lâmpada por um ponto e o encontro de duas paredes por uma reta. O modelo simplifica a forma real para estudar posições.",
        ],
        [
          "Ângulos e retas",
          "Ângulos medem a abertura entre semirretas; um ângulo reto mede 90°. Retas paralelas não se cruzam, enquanto retas perpendiculares se encontram formando esse ângulo.",
          "Duas ruas que se cruzam formando um canto de 90° são perpendiculares; se forem prolongadas e mantiverem sempre a mesma distância, são paralelas.",
        ],
        [
          "Triângulos",
          "A soma dos ângulos internos é 180°. Classifique pelos lados (equilátero, isósceles, escaleno) ou pelos ângulos (acutângulo, retângulo, obtusângulo).",
          "Um triângulo com ângulos 50° e 60° tem terceiro ângulo 180° − 50° − 60° = 70°. A soma 180° permite encontrar o ângulo que falta.",
        ],
        [
          "Pitágoras",
          "Em triângulo retângulo, a² + b² = c², em que c é a hipotenusa. Exemplo: lados 3 e 4 dão hipotenusa 5.",
          "Um triângulo retângulo com catetos 3 cm e 4 cm tem hipotenusa √(3² + 4²) = 5 cm.",
        ],
        [
          "Semelhança e congruência",
          "Figuras semelhantes têm ângulos iguais e lados proporcionais; congruentes têm mesma forma e mesmas medidas.",
          "Dois mapas da mesma planta, um em dobro da escala, mostram figuras semelhantes: ângulos iguais e lados proporcionais. Se lados e ângulos também tiverem as mesmas medidas, as figuras são congruentes.",
        ],
      ],
      note: "O teorema de Pitágoras só se aplica a triângulos retângulos.",
      questions: [
        {
          text: "Quanto somam os ângulos internos de um triângulo?",
          choices: ["90°", "180°", "360°"],
          answer: 1,
        },
        {
          text: "Um triângulo retângulo tem catetos 3 e 4. Qual é a hipotenusa?",
          choices: ["5", "6", "7"],
          answer: 0,
        },
        {
          text: "Retas perpendiculares formam qual ângulo?",
          choices: ["45°", "90°", "180°"],
          answer: 1,
        },
      ],
    },
    {
      category: "Geometria plana",
      title: "Quadriláteros, polígonos, perímetro e área",
      intro:
        "Polígonos são figuras planas fechadas formadas por segmentos de reta. Perímetro mede o contorno; área mede a superfície ocupada.",
      heading: "Formas e medidas",
      points: [
        [
          "Quadriláteros",
          "Quadrado tem quatro lados iguais e ângulos retos; retângulo tem lados opostos iguais e ângulos retos; losango tem quatro lados iguais; paralelogramo tem lados opostos paralelos; trapézio tem um par de lados paralelos.",
          "Um quadrilátero com quatro ângulos retos e lados 5 cm e 3 cm é um retângulo, não necessariamente um quadrado; o critério decisivo é ter os quatro ângulos retos.",
        ],
        [
          "Polígonos",
          "São nomeados pelo número de lados. A soma dos ângulos internos de um polígono convexo de n lados é (n − 2) × 180°.",
          "Um hexágono convexo tem soma dos ângulos internos (6 − 2) × 180° = 720°. Use n − 2 triângulos para justificar a fórmula.",
        ],
        [
          "Perímetro e áreas",
          "Some os lados para obter o perímetro. Retângulo: A = base × altura; triângulo: A = base × altura ÷ 2; paralelogramo: A = base × altura; trapézio: A = (base maior + base menor) × altura ÷ 2.",
          "Um triângulo de base 8 cm e altura 3 cm tem área (8 × 3) ÷ 2 = 12 cm². O perímetro, ao contrário, seria a soma dos três lados e usa cm.",
        ],
        [
          "Circunferência e círculo",
          "Circunferência é o contorno; círculo é a região interna. Para raio r, o comprimento é C=2πr e a área é A=πr²; note que comprimento usa unidade linear e área, unidade quadrada.",
          "Para um círculo de raio 3 cm, o contorno mede 2πr = 6π cm e a região interna mede πr² = 9π cm². O primeiro é comprimento; o segundo, área.",
        ],
        [
          "Arcos e setores",
          "Um arco é parte da circunferência; um setor é a região limitada por dois raios e um arco. Para ângulo central θ em graus, área do setor = (θ/360°) × πr².",
          "Um setor de 90° em um círculo de raio 4 cm é um quarto do círculo: área = (90/360) × π × 4² = 4π cm².",
        ],
      ],
      note: "Use unidades quadradas para área (cm²) e unidades lineares para perímetro (cm).",
      questions: [
        {
          text: "Qual é a área de um retângulo de base 5 e altura 3?",
          choices: ["8", "15", "16"],
          answer: 1,
        },
        {
          text: "Qual fórmula calcula o comprimento da circunferência?",
          choices: ["πr²", "2πr", "πd²"],
          answer: 1,
        },
        {
          text: "Qual quadrilátero tem exatamente um par de lados paralelos na definição usual?",
          choices: ["Trapézio", "Losango", "Retângulo"],
          answer: 0,
        },
      ],
    },
    {
      category: "Geometria espacial",
      title: "Sólidos geométricos e planificação",
      intro:
        "A geometria espacial estuda figuras com três dimensões. Planificações mostram as faces de um sólido abertas em um plano.",
      heading: "Prismas, pirâmides e corpos redondos",
      points: [
        [
          "Prismas e cubos",
          "Prismas têm duas bases paralelas e congruentes. Cubo é um prisma de faces quadradas iguais; paralelepípedo tem faces em forma de paralelogramo.",
          "Um paralelepípedo de 2 m × 3 m × 4 m tem V = comprimento × largura × altura = 24 m³; num prisma geral, use área da base × altura.",
        ],
        [
          "Pirâmides",
          "Uma pirâmide tem uma base poligonal e faces laterais triangulares que se encontram num vértice. Seu volume é um terço do produto entre a área da base e a altura.",
          "Uma pirâmide com área da base 12 m² e altura 9 m tem V = Aᵦh/3 = 12×9/3 = 36 m³; o fator 1/3 a distingue do prisma.",
        ],
        [
          "Cilindros e cones",
          "O cilindro tem duas bases circulares paralelas e volume πr²h; o cone tem uma base circular, um vértice e volume πr²h/3. Em ambos, h é a altura perpendicular à base.",
          "Um cilindro de raio 2 cm e altura 5 cm tem V = πr²h = 20π cm³; para um cone com as mesmas dimensões, divida por 3.",
        ],
        [
          "Esferas",
          "Na esfera, todos os pontos da superfície ficam à mesma distância r do centro. Seu volume é V = 4πr³/3, e o raio aparece elevado ao cubo.",
          "Uma esfera de raio 3 cm tem V = 4πr³/3 = 4π×27/3 = 36π cm³; eleve o raio ao cubo.",
        ],
        [
          "Planificações",
          "Uma planificação mostra as faces de um sólido abertas no plano; dobradas pelas arestas, elas devem se encontrar sem lacunas ou sobreposição. Nem toda disposição de faces forma um sólido válido.",
          "Ao abrir uma caixa cúbica, aparecem seis quadrados iguais conectados pelas arestas; dobrando-os sem sobrepor, recompõe-se o cubo.",
        ],
      ],
      note: "Identifique as bases e as faces antes de escolher uma fórmula de área ou volume.",
      questions: [
        {
          text: "Qual sólido tem duas bases circulares paralelas?",
          choices: ["Cone", "Cilindro", "Pirâmide"],
          answer: 1,
        },
        {
          text: "Qual é a forma das faces laterais de uma pirâmide?",
          choices: ["Triângulos", "Círculos", "Sempre quadrados"],
          answer: 0,
        },
        {
          text: "O que uma planificação representa?",
          choices: [
            "As faces do sólido abertas em um plano",
            "Somente o volume do sólido",
            "Uma vista sem medidas",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Geometria espacial",
      title: "Áreas, volumes e capacidade",
      intro:
        "A área lateral soma as faces laterais; a área total inclui também as bases. Volume mede o espaço ocupado por um sólido.",
      heading: "Fórmulas essenciais",
      points: [
        [
          "Prisma e paralelepípedo",
          "Volume do prisma: área da base × altura. Para um paralelepípedo retângulo, V = comprimento × largura × altura.",
          "Um paralelepípedo de 2 m × 3 m × 4 m tem V = comprimento × largura × altura = 24 m³; num prisma geral, use área da base × altura.",
        ],
        [
          "Áreas lateral e total",
          "A área total soma a área lateral e as bases. Em um prisma reto, a área lateral é o perímetro da base × altura e Aₜ = Aₗ + 2Aᵦ. No cubo, Aₜ = 6a².",
          "Num cubo de aresta 2 cm, cada face tem 4 cm² e a área total é 6×4 = 24 cm²; some todas as faces, não apenas as laterais.",
        ],
        [
          "Cilindro, cone e esfera",
          "Cilindro: V = πr²h, Aₗ = 2πrh e Aₜ = 2πrh + 2πr². Cone: V = πr²h/3 e Aₗ = πrg, em que g é a geratriz. Esfera: V = 4πr³/3 e área = 4πr².",
          "Com r = 2 e h = 5, o cilindro tem 20π unidades cúbicas; cone igual tem 20π/3 e esfera de raio 2 tem 32π/3. Escolha a fórmula do sólido antes de substituir.",
        ],
        [
          "Pirâmide",
          "O volume de uma pirâmide é V=Aᵦh/3, um terço do volume de um prisma com mesma base e altura. A área total soma a base e as áreas das faces laterais.",
          "Uma pirâmide com área da base 12 m² e altura 9 m tem V = Aᵦh/3 = 12×9/3 = 36 m³; o fator 1/3 a distingue do prisma.",
        ],
        [
          "Unidades de volume e capacidade",
          "1 dm³ = 1 L; 1 cm³ = 1 mL; 1 m³ = 1.000 L. Ao converter unidades cúbicas, cada mudança de unidade corresponde a um fator 1.000.",
          "Uma caixa de 1 dm³ comporta 1 L; uma de 1 cm³ comporta 1 mL. Para converter unidades cúbicas, cada mudança de escala linear por 10 corresponde a ×1.000 no volume.",
        ],
      ],
      note: "Área usa unidades quadradas e volume, unidades cúbicas. Capacidade costuma ser expressa em litros ou mililitros.",
      questions: [
        {
          text: "Qual é o volume de um cubo de aresta 3?",
          choices: ["9", "18", "27"],
          answer: 2,
        },
        {
          text: "Qual volume corresponde a 1 dm³?",
          choices: ["1 L", "10 L", "100 mL"],
          answer: 0,
        },
        {
          text: "O volume de um cilindro é:",
          choices: ["πrh", "πr²h", "2πr²h"],
          answer: 1,
        },
      ],
    },
    {
      category: "Geometria analítica",
      title: "Coordenadas, distância e ponto médio",
      intro:
        "A geometria analítica combina álgebra e geometria usando coordenadas. Cada ponto do plano é localizado por um par ordenado (x, y).",
      heading: "Medidas no plano cartesiano",
      points: [
        [
          "Coordenadas cartesianas",
          "No par ordenado (x, y), o primeiro número indica o deslocamento horizontal e o segundo, o vertical. Parta da origem e localize x antes de subir ou descer por y.",
          "No ponto (−2, 5), x = −2 indica a posição horizontal e y = 5 a vertical; leia sempre o primeiro e o segundo valores nessa ordem.",
        ],
        [
          "Distância entre pontos",
          "A distância entre A(x₁, y₁) e B(x₂, y₂) é d = √[(x₂ − x₁)² + (y₂ − y₁)²], obtida pelo teorema de Pitágoras aplicado às diferenças horizontal e vertical.",
          "Entre A(1,2) e B(4,6), d = √[(4−1)² + (6−2)²] = √25 = 5 unidades; a fórmula aplica Pitágoras às diferenças horizontal e vertical.",
        ],
        [
          "Ponto médio",
          "O ponto médio fica exatamente entre as extremidades do segmento: M = ((x₁ + x₂)/2, (y₁ + y₂)/2). Calcule a média das coordenadas x e a média das coordenadas y separadamente.",
          "Entre A(0,0) e B(4,2), o ponto médio é ((0+4)/2,(0+2)/2) = (2,1); calcule a média de cada coordenada.",
        ],
        [
          "Inclinação e coeficiente angular",
          "Para uma reta não vertical, m = (y₂ − y₁)/(x₂ − x₁). Ele mede a variação vertical por unidade horizontal.",
          "Entre (1, 2) e (4, 8), m = (8 − 2)/(4 − 1) = 2: a cada unidade que x aumenta, y aumenta 2.",
        ],
      ],
      note: "A inclinação de uma reta vertical não é definida pelo coeficiente angular, pois x₂ − x₁ = 0.",
      questions: [
        {
          text: "Qual é o ponto médio entre (0, 0) e (4, 2)?",
          choices: ["(2, 1)", "(4, 1)", "(2, 2)"],
          answer: 0,
        },
        {
          text: "Qual é a distância entre (0, 0) e (3, 4)?",
          choices: ["5", "7", "12"],
          answer: 0,
        },
        {
          text: "O coeficiente angular mede:",
          choices: [
            "A variação de y dividida pela variação de x",
            "A área sob a reta",
            "Apenas a posição inicial",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Geometria analítica",
      title: "Equação e interpretação da reta",
      intro:
        "Uma reta no plano pode ser descrita por uma equação. Seus coeficientes informam a inclinação e onde ela cruza os eixos.",
      heading: "Formas da equação da reta",
      points: [
        [
          "Forma reduzida",
          "Na forma reduzida y = mx + b, m é o coeficiente angular e b indica onde a reta cruza o eixo y, no ponto (0, b). O sinal de m mostra se a reta cresce ou decresce.",
          "Na equação y = 3x − 2, compare com y = mx + b: a inclinação é m = 3 e a reta cruza o eixo y em (0, −2).",
        ],
        [
          "Forma geral",
          "A forma geral da reta é Ax + By + C = 0. Se B ≠ 0, isole y para obter y = −(A/B)x − C/B e identificar a inclinação e a interseção com o eixo y.",
          "Escreva 2x + y − 4 = 0 como y = −2x + 4. Assim, a inclinação é −2 e a interseção com o eixo y é 4.",
        ],
        [
          "Inclinação pela equação",
          "Em y = 2x + 1, o coeficiente angular m = 2 significa que, quando x aumenta uma unidade, y aumenta duas. Use o coeficiente para interpretar a variação e a direção da reta.",
          "Na reta y = −2x + 5, m = −2: quando x aumenta 1, y diminui 2. O sinal negativo indica que a reta desce da esquerda para a direita.",
        ],
        [
          "Interseções",
          "Para encontrar a interseção com o eixo y, faça x = 0. Para encontrar a raiz ou interseção com o eixo x, faça y = 0.",
          "Na reta y = 2x + 1, faça x = 0 para obter a interseção com y: (0,1); faça y = 0 e encontre x = −1/2 para a interseção com x.",
        ],
      ],
      note: "Uma reta com coeficiente angular positivo sobe da esquerda para a direita; com coeficiente negativo, desce.",
      questions: [
        {
          text: "Na reta y = 3x − 4, qual é o coeficiente angular?",
          choices: ["−4", "3", "4"],
          answer: 1,
        },
        {
          text: "Onde y = 2x + 1 cruza o eixo y?",
          choices: ["(0, 1)", "(1, 0)", "(0, 2)"],
          answer: 0,
        },
        {
          text: "Se o coeficiente angular é negativo, a reta:",
          choices: [
            "Desce da esquerda para a direita",
            "Sobe da esquerda para a direita",
            "É sempre vertical",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Trigonometria",
      title: "Razões trigonométricas no triângulo retângulo",
      intro:
        "A trigonometria relaciona os ângulos e os lados dos triângulos. Em um triângulo retângulo, seno, cosseno e tangente dependem do ângulo escolhido.",
      heading: "Seno, cosseno e tangente",
      points: [
        [
          "Triângulo retângulo",
          "Um triângulo retângulo tem um ângulo de 90°; a hipotenusa, sempre o maior lado, fica oposta a esse ângulo. Os outros lados são catetos e formam o ângulo reto.",
          "Um triângulo retângulo com catetos 3 cm e 4 cm tem hipotenusa √(3² + 4²) = 5 cm.",
        ],
        [
          "Seno",
          "Num triângulo retângulo, sen(θ) = cateto oposto/hipotenusa. Identifique o ângulo θ primeiro, pois o cateto oposto muda quando se escolhe outro ângulo agudo.",
          "Num triângulo retângulo, se o cateto oposto mede 3 e a hipotenusa 5, sen(θ) = 3/5.",
        ],
        [
          "Cosseno e tangente",
          "Num triângulo retângulo, cos(θ) = cateto adjacente/hipotenusa e tg(θ) = cateto oposto/cateto adjacente. Os catetos são definidos em relação ao ângulo escolhido.",
          "Num triângulo retângulo, se o cateto oposto mede 3 e a hipotenusa 5, sen(θ) = 3/5.",
        ],
        [
          "Ângulos notáveis",
          "30°: sen = 1/2, cos = √3/2. 45°: sen = cos = √2/2. 60°: sen = √3/2, cos = 1/2. Use também tg = sen/cos.",
          "Num triângulo retângulo com ângulo de 30° e hipotenusa de 10 cm, sen 30° = 1/2; portanto, o cateto oposto mede 10×1/2 = 5 cm.",
        ],
      ],
      note: "Identifique primeiro o ângulo de referência; os catetos oposto e adjacente mudam quando o ângulo escolhido muda.",
      questions: [
        {
          text: "Como se calcula o seno em um triângulo retângulo?",
          choices: [
            "Oposto ÷ hipotenusa",
            "Adjacente ÷ hipotenusa",
            "Oposto ÷ adjacente",
          ],
          answer: 0,
        },
        {
          text: "Quanto vale sen(30°)?",
          choices: ["1/2", "√2/2", "√3/2"],
          answer: 0,
        },
        {
          text: "Qual lado fica oposto ao ângulo de 90°?",
          choices: [
            "Cateto adjacente",
            "Hipotenusa",
            "Cateto oposto ao ângulo de referência",
          ],
          answer: 1,
        },
      ],
    },
    {
      category: "Trigonometria",
      title: "Ciclo trigonométrico e leis dos senos e cossenos",
      intro:
        "As relações trigonométricas podem ser estendidas a ângulos no ciclo trigonométrico. Em triângulos que não são retângulos, as leis dos senos e dos cossenos ajudam a relacionar lados e ângulos.",
      heading: "Relações e aplicações",
      points: [
        [
          "Ciclo trigonométrico",
          "É uma circunferência de raio 1 centrada na origem. O ângulo é medido a partir do eixo x positivo; as coordenadas do ponto são (cos θ, sen θ).",
          "Num triângulo retângulo, se o cateto oposto mede 3 e a hipotenusa 5, sen(θ) = 3/5.",
        ],
        [
          "Identidade fundamental",
          "Para qualquer ângulo, sen²(θ)+cos²(θ)=1, relação derivada do raio unitário do ciclo. A tangente é sen(θ)/cos(θ) e não está definida quando cos(θ)=0.",
          "Para 30°, sen²θ + cos²θ = (1/2)² + (√3/2)² = 1/4 + 3/4 = 1; a identidade vale para qualquer ângulo.",
        ],
        [
          "Lei dos senos",
          "Em qualquer triângulo, a/sen(A) = b/sen(B) = c/sen(C), relacionando cada lado ao seno do ângulo oposto.",
          "Num triângulo retângulo, se o cateto oposto mede 3 e a hipotenusa 5, sen(θ) = 3/5.",
        ],
        [
          "Lei dos cossenos",
          "c² = a² + b² − 2ab cos(C). É útil quando se conhecem dois lados e o ângulo entre eles, ou os três lados.",
          "Num triângulo retângulo, se o cateto oposto mede 3 e a hipotenusa 5, sen(θ) = 3/5.",
        ],
      ],
      note: "As leis dos senos e dos cossenos permitem resolver triângulos oblíquos e têm aplicações em medições indiretas, como estimar alturas e distâncias.",
      questions: [
        {
          text: "Qual identidade relaciona seno e cosseno no ciclo?",
          choices: [
            "sen² θ + cos² θ = 1",
            "sen θ + cos θ = 0",
            "sen² θ − cos² θ = 1",
          ],
          answer: 0,
        },
        {
          text: "A lei dos senos relaciona cada lado com:",
          choices: [
            "O seno do ângulo oposto",
            "O cosseno de qualquer ângulo",
            "O perímetro do triângulo",
          ],
          answer: 0,
        },
        {
          text: "A lei dos cossenos é útil para:",
          choices: [
            "Resolver triângulos que não são necessariamente retângulos",
            "Calcular apenas áreas de círculos",
            "Somar ângulos de um quadrado",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Estatística e probabilidade",
      title: "Tabelas, gráficos e medidas de tendência central",
      intro:
        "A estatística organiza dados para descrever um conjunto e comunicar padrões. Tabelas e gráficos ajudam a visualizar frequências, categorias e mudanças.",
      heading: "Resumindo e interpretando dados",
      points: [
        [
          "Tabelas e gráficos",
          "Leia título, legenda, unidades, escala e período. Gráficos de barras comparam categorias; linhas mostram mudanças ao longo do tempo; setores representam partes de um total.",
          "Uma tabela registra 10, 15 e 20 vendas em três meses; um gráfico de linhas facilita ver o aumento, mas confira os rótulos e a escala dos eixos.",
        ],
        [
          "Média simples",
          "A média simples soma os valores e divide pela quantidade, atribuindo o mesmo peso a cada observação. Para 4, 6 e 8, a média é (4 + 6 + 8)/3 = 6.",
          "Nas notas 6, 8 e 10, a média simples é (6 + 8 + 10)/3 = 8, pois as três notas têm o mesmo peso.",
        ],
        [
          "Média ponderada",
          "Na média ponderada, multiplique cada valor por seu peso, some os produtos e divida pela soma dos pesos. Valores com peso maior influenciam mais o resultado.",
          "Com notas 6 (peso 1) e 8 (peso 2), a média ponderada é (6×1 + 8×2)/(1+2) = 22/3 ≈ 7,33; a nota de maior peso influencia mais.",
        ],
        [
          "Moda e mediana",
          "Moda é o valor mais frequente. Mediana é o valor central após ordenar os dados; com quantidade par, tire a média dos dois centrais.",
          "Em 2, 4, 9, a mediana é 4, o valor central após ordenar os dados.",
        ],
        [
          "Amplitude",
          "Amplitude é a diferença entre o maior e o menor valor e indica a extensão total dos dados. Ela não mostra como os valores se distribuem entre esses extremos.",
          "Nos dados 4, 7, 9 e 12, amplitude = maior − menor = 12 − 4 = 8; ela mede a extensão total, não a dispersão de cada valor.",
        ],
      ],
      note: "A média pode ser afetada por valores extremos; a mediana costuma ser mais resistente a eles.",
      questions: [
        {
          text: "Qual é a média simples de 4, 6 e 8?",
          choices: ["6", "18", "8"],
          answer: 0,
        },
        {
          text: "O que é a moda?",
          choices: [
            "O valor mais frequente",
            "O maior valor",
            "A diferença entre máximo e mínimo",
          ],
          answer: 0,
        },
        {
          text: "Qual gráfico costuma mostrar mudanças ao longo do tempo?",
          choices: [
            "Gráfico de linhas",
            "Gráfico de setores",
            "Diagrama sem eixos",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Estatística e probabilidade",
      title: "Variância e desvio padrão",
      intro:
        "Medidas de dispersão mostram o quanto os dados se espalham ao redor da média. Dois conjuntos podem ter a mesma média e variabilidades bem diferentes.",
      heading: "Dispersão dos dados",
      points: [
        [
          "Variância",
          "Calcule a diferença entre cada dado e a média, eleve cada diferença ao quadrado e faça a média desses quadrados. Em amostras, uma convenção comum divide por n − 1.",
          "Nos dados 2 e 4, a média é 3 e os desvios quadráticos são 1 e 1. A variância populacional é (1 + 1)/2 = 1; ela mede dispersão em unidades ao quadrado.",
        ],
        [
          "Desvio padrão",
          "O desvio padrão é a raiz quadrada da variância e fica na mesma unidade dos dados. Ele resume o afastamento típico em relação à média, mas não descreve sozinho todos os valores.",
          "Na sequência 2, 5, 8, 11, soma-se 3 a cada termo; o próximo é 14.",
        ],
        [
          "Interpretação",
          "Desvio padrão pequeno indica dados mais agrupados em torno da média; um valor maior indica maior dispersão. Considere também a unidade, a escala e possíveis valores extremos.",
          "As listas A (6, 8, 10) e B (2, 8, 14) têm média 8, mas B é mais dispersa; compare desvio padrão e contexto, não apenas a média.",
        ],
        [
          "Comparação",
          "Ao comparar conjuntos, observe média e dispersão: médias iguais podem ocultar distribuições diferentes. Verifique escala, unidades e contexto antes de concluir qual conjunto é mais variável.",
          "As turmas A (notas 7, 7, 7) e B (5, 7, 9) têm média 7, mas B varia mais. A média sozinha não descreve a dispersão.",
        ],
      ],
      note: "A fórmula da variância muda se os dados representam uma população inteira ou uma amostra dela.",
      questions: [
        {
          text: "O desvio padrão é:",
          choices: [
            "A raiz quadrada da variância",
            "O dobro da média",
            "Sempre igual à amplitude",
          ],
          answer: 0,
        },
        {
          text: "Um desvio padrão maior geralmente indica:",
          choices: [
            "Maior dispersão dos dados",
            "Que todos os dados são iguais",
            "Que a média é zero",
          ],
          answer: 0,
        },
        {
          text: "As diferenças em relação à média são elevadas ao quadrado no cálculo da:",
          choices: ["Moda", "Variância", "Mediana"],
          answer: 1,
        },
      ],
    },
    {
      category: "Estatística e probabilidade",
      title: "Contagem, análise combinatória e probabilidade",
      intro:
        "A análise combinatória conta possibilidades sem precisar listar todas. A probabilidade mede a chance de um evento ocorrer em uma situação aleatória.",
      heading: "Contar e calcular chances",
      points: [
        [
          "Princípio fundamental da contagem",
          "Se uma escolha pode ser feita de m formas e outra de n formas, juntas podem ser feitas de m × n formas.",
          "Com 3 camisetas e 2 calças, há 3 × 2 = 6 combinações de roupa. Multiplicamos as opções de etapas independentes.",
        ],
        [
          "Permutação, arranjo e combinação",
          "Permutação ordena todos os elementos: n!. Arranjo escolhe e ordena parte deles: n!/(n−p)!. Combinação escolhe sem considerar a ordem: n!/[p!(n−p)!].",
          "Escolher 2 representantes entre 5 estudantes sem considerar a ordem dá C(5,2) = 10 duplas.",
        ],
        [
          "Probabilidade",
          "Em resultados igualmente possíveis, P(A) = casos favoráveis ÷ casos possíveis. O valor fica entre 0 e 1.",
          "Ao lançar um dado honesto, a chance de sair número par é 3/6 = 1/2 = 50%.",
        ],
        [
          "Eventos independentes e dependentes",
          "Em eventos independentes, a ocorrência de um não altera a chance do outro e P(A e B) = P(A)P(B). Em eventos dependentes, a chance muda; use a probabilidade condicionada.",
          "Lançar uma moeda e um dado são eventos independentes; retirar duas cartas sem reposição é dependente porque a primeira retirada muda as chances da segunda.",
        ],
      ],
      note: "A ordem importa em arranjos e permutações; não importa em combinações.",
      questions: [
        {
          text: "Ao escolher 2 pessoas entre 5 sem importar a ordem, usamos:",
          choices: ["Combinação", "Permutação", "Média ponderada"],
          answer: 0,
        },
        {
          text: "Ao lançar um dado honesto, qual é a probabilidade de sair 6?",
          choices: ["1/2", "1/6", "5/6"],
          answer: 1,
        },
        {
          text: "Em eventos independentes, P(A e B) é:",
          choices: ["P(A) × P(B)", "P(A) + P(B) sempre", "Sempre zero"],
          answer: 0,
        },
      ],
    },
    {
      category: "Progressões",
      title: "Sequências e progressão aritmética (PA)",
      intro:
        "Uma sequência é uma lista ordenada de termos que pode seguir um padrão. Na progressão aritmética, a diferença entre termos consecutivos é constante.",
      heading: "Razão, termo geral e soma da PA",
      points: [
        [
          "Padrões e razão",
          "Numa progressão aritmética (PA), a diferença entre termos consecutivos é constante: r = aₙ − aₙ₋₁. Em 3, 7, 11, …, soma-se 4 a cada passo.",
          "Se 3 cadernos custam R$ 18, cada um custa R$ 6; 5 cadernos custam 5 × 6 = R$ 30.",
        ],
        [
          "Termo geral",
          "O termo de posição n numa PA é aₙ = a₁ + (n − 1)r, em que a₁ é o primeiro termo e r é a diferença constante. O fator n − 1 conta quantos passos se avançou.",
          "Na PA 4, 7, 10, …, aₙ = 4 + (n − 1)×3; o 5º termo é 16. A razão constante é somada a cada passo.",
        ],
        [
          "Soma dos termos",
          "A soma dos n primeiros termos de uma PA é Sₙ = n(a₁ + aₙ)/2: emparelhe primeiro e último, segundo e penúltimo, que têm a mesma soma.",
          "Na PA 2, 5, 8, 11, a soma dos quatro termos é S₄ = (2 + 11)×4/2 = 26; use o primeiro e o último termo.",
        ],
        [
          "Aplicações",
          "Uma PA modela situações em que a quantidade muda sempre pelo mesmo valor, como uma poupança que aumenta R$ 20 a cada semana. Se o acréscimo variar, o modelo pode não servir.",
          "Se uma pessoa poupa R$ 20 a mais a cada semana, os depósitos semanais podem ser modelados por uma PA; a diferença constante ajuda a prever o próximo valor.",
        ],
      ],
      note: "Uma PA tem diferença constante; não confunda essa diferença com a razão multiplicativa de uma PG.",
      questions: [
        {
          text: "Qual é a razão da PA 3, 7, 11, 15, …?",
          choices: ["3", "4", "7"],
          answer: 1,
        },
        {
          text: "Qual é o 5º termo da PA 2, 5, 8, …?",
          choices: ["11", "14", "17"],
          answer: 1,
        },
        {
          text: "Qual fórmula calcula a soma de uma PA?",
          choices: ["Sₙ = n(a₁ + aₙ)/2", "Sₙ = a₁ × r", "Sₙ = n² + r"],
          answer: 0,
        },
      ],
    },
    {
      category: "Progressões",
      title: "Progressão geométrica (PG)",
      intro:
        "Na progressão geométrica, cada termo é obtido multiplicando o anterior por uma razão constante. Esse padrão modela crescimento ou redução multiplicativa.",
      heading: "Razão, termo geral e soma da PG",
      points: [
        [
          "Razão",
          "Numa progressão geométrica (PG), a razão q é o quociente entre termos consecutivos não nulos: q = aₙ/aₙ₋₁. Em 2, 6, 18, …, multiplica-se por 3 a cada passo.",
          "Se 3 cadernos custam R$ 18, cada um custa R$ 6; 5 cadernos custam 5 × 6 = R$ 30.",
        ],
        [
          "Termo geral",
          "O termo de posição n numa PG é aₙ = a₁ × qⁿ⁻¹, em que a₁ é o primeiro termo e q é o fator multiplicativo constante. Use n − 1 porque do primeiro ao enésimo há n − 1 passos.",
          "Na PG 3, 6, 12, …, aₙ = 3×2ⁿ⁻¹; o 5º termo é 48. A razão constante é multiplicada a cada passo.",
        ],
        [
          "Soma finita",
          "Para q ≠ 1, a soma dos n primeiros termos é Sₙ = a₁(qⁿ − 1)/(q − 1); se q = 1, todos os termos são iguais e Sₙ = n × a₁.",
          "Na PG 2, 6, 18, a soma dos três termos é 2 + 6 + 18 = 26. Confira os termos incluídos antes de aplicar a fórmula da soma finita.",
        ],
        [
          "Soma infinita",
          "Uma PG infinita converge apenas quando |q| < 1; nesse caso, S = a₁/(1 − q). Se a razão não estiver nesse intervalo, os termos não diminuem o suficiente para uma soma finita.",
          "Na PG 8, 4, 2, 1, …, a razão é 1/2 e a soma infinita converge para 8/(1 − 1/2) = 16. Isso só vale porque |r| < 1.",
        ],
        [
          "Aplicações",
          "Uma PG modela crescimento por fator constante, como uma população idealizada que dobra em cada período ou um saldo com juros compostos. Na realidade, limites de recursos podem interromper esse padrão.",
          "Uma população de bactérias que dobra a cada período segue uma PG idealizada: partindo de 100, após três períodos há 100×2³ = 800, se as condições permanecerem iguais.",
        ],
      ],
      note: "PA soma uma diferença fixa a cada etapa; PG multiplica por uma razão fixa.",
      questions: [
        {
          text: "Qual é a razão da PG 2, 6, 18, …?",
          choices: ["3", "4", "6"],
          answer: 0,
        },
        {
          text: "Qual é o 4º termo da PG 2, 6, 18, …?",
          choices: ["36", "54", "72"],
          answer: 1,
        },
        {
          text: "Quando a soma infinita de uma PG converge?",
          choices: ["Quando |q| < 1", "Quando q > 1", "Para qualquer q"],
          answer: 0,
        },
      ],
    },
  ],
};
