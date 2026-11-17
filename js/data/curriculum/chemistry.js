starterLibrary.chemistry = {
  name: "Química",
  icon: "⚗️",
  priority: "Prioridade alta",
  parts: [
    {
      category: "Química geral",
      title: "Matéria, energia e misturas",
      intro:
        "A Química estuda a composição, as propriedades e as transformações da matéria, assim como as trocas de energia que acompanham essas transformações.",
      heading: "Estados, propriedades e separações",
      points: [
        [
          "Matéria e energia",
          "Matéria tem massa e ocupa espaço. Energia pode ser transferida ou transformada durante fenômenos físicos e químicos.",
          "Ao derreter 10 g de gelo, a amostra continua sendo água: muda o estado físico, não a identidade química. A energia transferida altera o movimento e as interações das partículas.",
        ],
        [
          "Estados físicos",
          "Sólidos tendem a manter forma e volume; líquidos mantêm volume e assumem a forma do recipiente; gases se expandem para ocupá-lo.",
          "Ao aquecer gelo, a temperatura pode permanecer constante durante a fusão enquanto energia é usada na mudança de estado; depois que todo o gelo derrete, a água líquida volta a aquecer.",
        ],
        [
          "Propriedades",
          "Massa, volume e densidade descrevem amostras; propriedades características ajudam a identificar materiais. Densidade = massa/volume.",
          "Uma amostra de 50 g que ocupa 25 cm³ tem densidade 2 g/cm³; massa e volume variam com a quantidade, enquanto a densidade pode ajudar a identificar o material.",
        ],
        [
          "Substâncias e misturas",
          "Substância pura tem composição definida. Misturas homogêneas apresentam uma fase visível; heterogêneas apresentam duas ou mais fases.",
          "Água destilada é uma substância pura; água com sal dissolvido é uma mistura homogênea. A aparência uniforme não torna a mistura uma substância única.",
        ],
        [
          "Fenômenos e separação",
          "Mudanças de estado costumam ser físicas; reações formam substâncias novas. Filtração, decantação, destilação e centrifugação separam misturas por propriedades distintas.",
          "Areia e água podem ser separadas por filtração porque a areia é insolúvel e fica retida. Sal dissolvido exige outro método, como evaporação ou destilação.",
        ],
      ],
      note: "Escolha o método de separação conforme as propriedades dos componentes, como tamanho de partícula, densidade ou ponto de ebulição.",
      questions: [
        {
          text: "Uma mistura homogênea apresenta:",
          choices: [
            "Uma fase visível",
            "Sempre duas fases",
            "Somente substâncias sólidas",
          ],
          answer: 0,
        },
        {
          text: "Como se calcula a densidade?",
          choices: [
            "Massa dividida pelo volume",
            "Volume dividido pela temperatura",
            "Massa multiplicada pelo tempo",
          ],
          answer: 0,
        },
        {
          text: "Qual método pode separar um sólido insolúvel de um líquido?",
          choices: ["Filtração", "Fusão nuclear", "Eletrização"],
          answer: 0,
        },
      ],
    },
    {
      category: "Estrutura atômica",
      title: "Modelos atômicos, íons e isótopos",
      intro:
        "Modelos atômicos representam o que experimentos permitem inferir sobre a estrutura da matéria. A composição do núcleo e a distribuição de elétrons explicam propriedades dos elementos.",
      heading: "Número atômico e partículas",
      points: [
        [
          "Modelos atômicos",
          "Modelos históricos, de Dalton a descrições quânticas, foram revisados conforme novas observações experimentais.",
          "O espalhamento de partículas alfa no experimento de Rutherford indicou um núcleo pequeno e positivo, levando a um modelo diferente do átomo maciço de Dalton.",
        ],
        [
          "Partículas e números",
          "Prótons têm carga positiva, nêutrons não têm carga e elétrons têm carga negativa. O número atômico Z conta prótons; o número de massa A conta prótons e nêutrons.",
          "Um átomo com 11 prótons e 12 nêutrons tem número atômico 11 e número de massa 23; o número atômico identifica o elemento.",
        ],
        [
          "Íons",
          "Um átomo forma cátion ao perder elétrons e ânion ao ganhá-los; o número de prótons não muda na ionização.",
          "Um átomo de sódio perde um elétron e se torna Na⁺; o número de prótons não muda, mas a carga líquida passa a ser positiva.",
        ],
        [
          "Isótopos, isóbaros e isótonos",
          "Isótopos têm mesmo Z e diferentes nêutrons; isóbaros têm mesmo A; isótonos têm mesmo número de nêutrons.",
          "No átomo de número de massa 23 e número atômico 11, há 11 prótons e 23 − 11 = 12 nêutrons.",
        ],
        [
          "Distribuição eletrônica",
          "Elétrons ocupam níveis e subníveis de energia segundo regras quânticas; os elétrons mais externos participam de muitas propriedades químicas.",
          "O sódio tem 11 elétrons e configuração por camadas 2–8–1; perder o elétron mais externo forma Na⁺, que fica com configuração estável de 2–8.",
        ],
      ],
      note: "Para um átomo neutro, número de elétrons = número de prótons. Para um íon, considere também a carga.",
      questions: [
        {
          text: "Qual partícula muda em número quando um átomo vira íon?",
          choices: ["Elétron", "Próton", "Nêutron"],
          answer: 0,
        },
        {
          text: "Isótopos de um mesmo elemento possuem o mesmo número de:",
          choices: ["Prótons", "Nêutrons", "Massa"],
          answer: 0,
        },
        {
          text: "O número de massa A corresponde ao total de:",
          choices: [
            "Prótons e nêutrons",
            "Prótons e elétrons",
            "Elétrons e nêutrons",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Tabela periódica",
      title: "Organização e propriedades periódicas",
      intro:
        "A tabela periódica organiza os elementos pelo número atômico e agrupa elementos com propriedades relacionadas. Tendências periódicas ajudam a prever comportamentos químicos.",
      heading: "Famílias, períodos e tendências",
      points: [
        [
          "Períodos e famílias",
          "Linhas horizontais são períodos; colunas são famílias ou grupos, que frequentemente reúnem elementos com propriedades semelhantes.",
          "Sódio e potássio estão na mesma família da tabela periódica e têm propriedades semelhantes; estar no mesmo período significa ocupar a mesma linha.",
        ],
        [
          "Tipos de elementos",
          "A tabela periódica reúne metais, ametais e gases nobres e organiza elementos representativos e de transição. Localização ajuda a antecipar propriedades, embora exceções exijam consulta a dados específicos.",
          "À temperatura ambiente, o ferro é metal e conduz eletricidade; o oxigênio é ametal e existe como gás molecular. A tabela organiza elementos com propriedades distintas.",
        ],
        [
          "Raio atômico",
          "Em tendências gerais, o raio diminui ao longo de um período e aumenta ao descer um grupo, com ressalvas ligadas à estrutura eletrônica.",
          "Ao descer uma família, átomos tendem a ter maior raio porque ganham camadas eletrônicas. Compare elementos no mesmo grupo para ver essa tendência.",
        ],
        [
          "Eletronegatividade e ionização",
          "Eletronegatividade descreve atração por elétrons em ligações. Energia de ionização é a energia necessária para remover um elétron; afinidade eletrônica descreve a variação energética associada ao ganho de elétron.",
          "Na ligação H–Cl, o cloro atrai mais os elétrons compartilhados por ser mais eletronegativo. Isso não significa que o elétron foi completamente transferido.",
        ],
      ],
      note: "Tendências periódicas são padrões gerais; consulte a posição do elemento e o contexto antes de comparar propriedades.",
      questions: [
        {
          text: "Como são chamadas as colunas da tabela periódica?",
          choices: ["Famílias ou grupos", "Períodos", "Isótopos"],
          answer: 0,
        },
        {
          text: "A energia de ionização se relaciona à energia necessária para:",
          choices: [
            "Remover um elétron",
            "Fundir dois núcleos",
            "Separar uma mistura por filtração",
          ],
          answer: 0,
        },
        {
          text: "Elementos de uma mesma família frequentemente apresentam:",
          choices: [
            "Propriedades químicas relacionadas",
            "O mesmo número de massa",
            "O mesmo número de nêutrons",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Ligações químicas",
      title: "Ligações, geometria e forças intermoleculares",
      intro:
        "Ligações químicas descrevem interações que mantêm átomos unidos em substâncias. A estrutura e a distribuição de cargas influenciam forma, polaridade e propriedades dos materiais.",
      heading: "Como átomos e moléculas interagem",
      points: [
        [
          "Ligação iônica",
          "Atração entre íons de cargas opostas, frequentemente formada após transferência de elétrons entre átomos.",
          "No NaCl, o sódio perde um elétron e o cloro o recebe; íons de cargas opostas se atraem.",
        ],
        [
          "Ligação covalente",
          "Átomos compartilham pares de elétrons; estruturas de Lewis representam os elétrons de valência e ligações.",
          "Na molécula de água, oxigênio e hidrogênios compartilham pares de elétrons em ligações covalentes.",
        ],
        [
          "Ligação metálica",
          "Na ligação metálica, elétrons deslocalizados se distribuem pelo retículo de cátions; sua mobilidade ajuda a explicar condução elétrica, brilho e maleabilidade dos metais.",
          "No cobre, elétrons deslocalizados ajudam a explicar a condução elétrica e a maleabilidade do metal; não há moléculas isoladas de cobre no sólido.",
        ],
        [
          "Geometria e polaridade",
          "A disposição de regiões eletrônicas influencia a geometria molecular. Polaridade depende das ligações e da geometria total da molécula.",
          "A molécula de água tem geometria angular e distribuição desigual de cargas, por isso é polar; no CO₂ linear, os dipolos se cancelam e a molécula é apolar.",
        ],
        [
          "Forças intermoleculares",
          "Interações entre moléculas incluem forças de dispersão, dipolo-dipolo e ligações de hidrogênio, que afetam propriedades como ebulição.",
          "Como a massa molar da água é 18 g/mol, 36 g de água correspondem a 36 ÷ 18 = 2 mol.",
        ],
      ],
      note: "Uma molécula pode ter ligações polares e ainda ser apolar se sua geometria cancelar os dipolos.",
      questions: [
        {
          text: "Na ligação covalente, átomos geralmente:",
          choices: [
            "Compartilham pares de elétrons",
            "Compartilham prótons",
            "Perdem todos os nêutrons",
          ],
          answer: 0,
        },
        {
          text: "A polaridade molecular depende:",
          choices: [
            "Das ligações e da geometria",
            "Somente da massa da amostra",
            "Apenas da cor da substância",
          ],
          answer: 0,
        },
        {
          text: "Pontes de hidrogênio são um tipo de:",
          choices: [
            "Interação intermolecular",
            "Partícula subatômica",
            "Reação de fissão",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Funções inorgânicas",
      title: "Ácidos, bases, sais, óxidos e pH",
      intro:
        "Funções inorgânicas agrupam substâncias por propriedades e comportamentos químicos. Ácidos, bases, sais e óxidos aparecem em processos naturais, produtos e reações.",
      heading: "Propriedades e neutralização",
      points: [
        [
          "Ácidos e bases",
          "Em água, modelos diferentes descrevem ácidos como doadores de prótons ou produtores de H₃O⁺ e bases como receptoras de prótons ou produtoras de OH⁻.",
          "Suco de limão tem caráter ácido (pH abaixo de 7); uma solução de sabão costuma ser básica (pH acima de 7).",
        ],
        [
          "Sais e óxidos",
          "Sais são compostos iônicos; óxidos são compostos binários em que o oxigênio se liga a outro elemento, com exceções de nomenclatura e comportamento.",
          "NaCl é um sal formado por íons Na⁺ e Cl⁻; CO₂ é um óxido porque combina oxigênio com outro elemento. Classifique pela composição e pela ligação, não pela aparência.",
        ],
        [
          "Nomenclatura",
          "Nomes de compostos seguem regras que consideram composição, cargas e estados de oxidação; a fórmula indica proporções dos elementos.",
          "Fe₂O₃ é óxido de ferro(III): cada O tem NOX −2, totalizando −6; os dois Fe precisam somar +6, então cada Fe é +3.",
        ],
        [
          "Indicadores, pH e pOH",
          "Indicadores mudam de cor conforme o meio. Em soluções aquosas diluídas, pH relaciona-se à concentração de H₃O⁺ e pOH à de OH⁻.",
          "Suco de limão tem caráter ácido (pH abaixo de 7); uma solução de sabão costuma ser básica (pH acima de 7).",
        ],
        [
          "Neutralização e ambiente",
          "Reações ácido-base podem formar água e sal. Emissões que originam ácidos na atmosfera contribuem para a chuva ácida.",
          "Um antiácido reage com parte do ácido do estômago e reduz sua acidez; numa amostra ambiental, meça pH antes e depois em vez de presumir neutralização completa.",
        ],
      ],
      note: "pH abaixo de 7 indica meio ácido e acima de 7, básico em condições usuais; a interpretação depende da temperatura e do sistema.",
      questions: [
        {
          text: "Uma reação de neutralização ácido-base pode formar:",
          choices: ["Água e sal", "Somente elétrons", "Sempre um metal puro"],
          answer: 0,
        },
        {
          text: "Em condições usuais, pH menor que 7 indica meio:",
          choices: ["Ácido", "Básico", "Sem água necessariamente"],
          answer: 0,
        },
        {
          text: "Qual instrumento pode indicar uma faixa aproximada de pH pela cor?",
          choices: ["Indicador ácido-base", "Balança", "Peneira"],
          answer: 0,
        },
      ],
    },
    {
      category: "Reações químicas",
      title: "Equações, balanceamento e oxirredução",
      intro:
        "Reações químicas reorganizam átomos e ligações, formando produtos a partir de reagentes. Equações balanceadas representam a conservação dos átomos.",
      heading: "Tipos de reação e NOX",
      points: [
        [
          "Equações químicas",
          "Reagentes aparecem antes da seta e produtos depois; fórmulas e estados físicos comunicam a transformação.",
          "Para formar água, escreva H₂ + O₂ → H₂O e ajuste apenas coeficientes: 2H₂ + O₂ → 2H₂O. Conte átomos em ambos os lados para conferir conservação.",
        ],
        [
          "Balanceamento",
          "Ajuste coeficientes para conservar a quantidade de átomos de cada elemento. Não altere os índices das fórmulas ao balancear.",
          "Na formação da água, 2H₂ + O₂ → 2H₂O conserva 4 átomos de H e 2 de O em cada lado.",
        ],
        [
          "Tipos de reação",
          "Síntese forma substâncias mais complexas; decomposição divide compostos; simples troca e dupla troca reorganizam participantes.",
          "Em 2H₂ + O₂ → 2H₂O, duas substâncias formam um produto, exemplo de síntese. Conte os reagentes e produtos para classificar a transformação.",
        ],
        [
          "Oxidação e redução",
          "Oxidação envolve perda de elétrons ou aumento do número de oxidação; redução envolve ganho de elétrons ou diminuição do NOX.",
          "Em Zn + Cu²⁺ → Zn²⁺ + Cu, o Zn perde elétrons e se oxida; Cu²⁺ ganha elétrons e se reduz. As duas mudanças ocorrem juntas.",
        ],
        [
          "Número de oxidação",
          "NOX é uma ferramenta contábil para acompanhar elétrons em compostos e identificar espécies oxidadas e reduzidas.",
          "Em H₂O, cada H tem NOX +1 e o O, −2; a soma é zero porque a molécula é neutra. A mudança de NOX ajuda a identificar oxidação e redução.",
        ],
      ],
      note: "Em uma reação redox, oxidação e redução ocorrem juntas.",
      questions: [
        {
          text: "Ao balancear uma equação, o que se ajusta?",
          choices: [
            "Coeficientes",
            "Índices das fórmulas",
            "Símbolos dos elementos",
          ],
          answer: 0,
        },
        {
          text: "Oxidação corresponde, em termos de elétrons, à:",
          choices: [
            "Perda de elétrons",
            "Ganho de elétrons",
            "Ausência de mudança sempre",
          ],
          answer: 0,
        },
        {
          text: "Em uma reação, deve-se conservar o número de átomos de cada elemento para respeitar:",
          choices: [
            "A conservação da matéria",
            "A lei da gravidade",
            "A nomenclatura",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Estequiometria",
      title: "Mol, massa molar e cálculos químicos",
      intro:
        "A estequiometria usa equações balanceadas para relacionar quantidades de reagentes e produtos. O mol conecta a escala microscópica à massa que pode ser medida.",
      heading: "Quantidades de substância",
      points: [
        [
          "Massa atômica e molecular",
          "Massas relativas dos átomos permitem calcular massas de moléculas ou unidades de fórmula somando as contribuições dos elementos.",
          "Como a massa molar da água é 18 g/mol, 36 g de água correspondem a 36 ÷ 18 = 2 mol.",
        ],
        [
          "Mol e número de Avogadro",
          "Um mol contém aproximadamente 6,022 × 10²³ entidades elementares; indique se são átomos, moléculas, íons ou outras entidades.",
          "Como a massa molar da água é 18 g/mol, 36 g de água correspondem a 36 ÷ 18 = 2 mol.",
        ],
        [
          "Massa molar",
          "É a massa por mol, expressa normalmente em g/mol. n = m/M relaciona quantidade em mol, massa e massa molar.",
          "Como a massa molar da água é 18 g/mol, 36 g de água correspondem a 36 ÷ 18 = 2 mol.",
        ],
        [
          "Cálculo estequiométrico",
          "Use os coeficientes da equação balanceada como proporções em mol e converta para massa ou outra grandeza conforme necessário.",
          "Na reação 2H₂ + O₂ → 2H₂O, 2 mol de H₂ reagem com 1 mol de O₂; use os coeficientes balanceados como proporção entre quantidades.",
        ],
        [
          "Limitante, excesso, rendimento e pureza",
          "O reagente limitante termina primeiro. Excesso sobra; rendimento compara produto obtido com o teórico; pureza indica a fração efetiva de uma amostra.",
          "Na reação 2H₂ + O₂ → 2H₂O, 2 mol de H₂ precisam de 1 mol de O₂. Com 2 mol de H₂ e 2 mol de O₂, H₂ limita o produto e O₂ sobra.",
        ],
      ],
      note: "Sempre balanceie a equação antes de usar os coeficientes nas proporções estequiométricas.",
      questions: [
        {
          text: "Quantas entidades há em aproximadamente 1 mol?",
          choices: ["6,022 × 10²³", "6,022 × 10³", "1.000"],
          answer: 0,
        },
        {
          text: "Qual relação calcula a quantidade de matéria a partir da massa?",
          choices: ["n = m/M", "n = M/m²", "n = m + M"],
          answer: 0,
        },
        {
          text: "Qual reagente limita a quantidade máxima de produto?",
          choices: [
            "O que se esgota primeiro",
            "O que está em excesso",
            "Sempre o de maior massa",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Soluções",
      title: "Solubilidade e concentração",
      intro:
        "Soluções são misturas homogêneas formadas por soluto e solvente. Sua composição pode ser descrita por concentração e alterada por diluição ou mistura.",
      heading: "Preparo e análise de soluções",
      points: [
        [
          "Soluto e solvente",
          "Soluto é a substância dispersa; solvente é o meio que dissolve. Soluções podem ser insaturadas, saturadas ou, em condições específicas, supersaturadas.",
          "Ao dissolver açúcar em água, o açúcar é o soluto e a água é o solvente; volume da solução inclui ambos, não apenas o volume inicial de água.",
        ],
        [
          "Solubilidade",
          "Indica quanto soluto pode dissolver em certas condições, como temperatura e pressão; diferentes substâncias apresentam comportamentos distintos.",
          "Se uma solução já dissolveu o máximo de sal permitido naquela temperatura, mais sal pode ficar no fundo. O limite de solubilidade depende da substância e das condições.",
        ],
        [
          "Concentração comum e molar",
          "Concentração comum C = massa do soluto/volume da solução. Molaridade = quantidade de soluto em mol/volume da solução em litros.",
          "Uma solução contém 0,5 mol de soluto em 2 L: a concentração molar é 0,5/2 = 0,25 mol/L. Use o volume final da solução, em litros.",
        ],
        [
          "Diluição e mistura",
          "Na diluição, adicionar solvente reduz a concentração sem alterar a quantidade de soluto; para o mesmo soluto, C₁V₁ = C₂V₂.",
          "Diluir 100 mL de solução 2 mol/L até 500 mL reduz a concentração para 0,4 mol/L, pois C₁V₁ = C₂V₂ e a quantidade de soluto se conserva.",
        ],
        [
          "Titulação e propriedades coligativas",
          "Titulação estima concentração por reação com solução conhecida. Propriedades coligativas dependem do número de partículas dissolvidas, não apenas de sua identidade.",
          "Numa titulação, adicione uma solução de concentração conhecida até o indicador mudar de cor; o volume gasto permite calcular a quantidade desconhecida pela reação balanceada.",
        ],
      ],
      note: "Ao usar fórmulas de concentração, confira as unidades de massa, volume e quantidade de matéria.",
      questions: [
        {
          text: "Em uma solução, o soluto é:",
          choices: [
            "A substância dissolvida",
            "Sempre o recipiente",
            "O volume total necessariamente",
          ],
          answer: 0,
        },
        {
          text: "Na diluição com solvente, a quantidade de soluto permanece:",
          choices: ["A mesma", "Sempre zero", "Duplicada automaticamente"],
          answer: 0,
        },
        {
          text: "A molaridade relaciona quantidade de soluto com:",
          choices: [
            "Volume da solução",
            "Massa do recipiente",
            "Temperatura do laboratório apenas",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Físico-química",
      title: "Termoquímica e lei de Hess",
      intro:
        "A termoquímica analisa transferências de energia em reações. A variação de entalpia ajuda a descrever o calor absorvido ou liberado a pressão constante.",
      heading: "Energia das reações",
      points: [
        [
          "Endotérmica e exotérmica",
          "Uma reação endotérmica absorve energia do entorno; uma exotérmica libera energia para ele. Na equação termoquímica, ΔH positivo indica absorção e ΔH negativo, liberação, para a reação escrita.",
          "Se uma reação tem ΔH = −250 kJ, libera 250 kJ por quantidade estequiométrica indicada e é exotérmica; sinal negativo representa energia dos produtos menor que a dos reagentes.",
        ],
        [
          "Entalpia",
          "A variação ΔH compara entalpias de produtos e reagentes. Em convenção usual, ΔH < 0 indica processo exotérmico e ΔH > 0, endotérmico.",
          "Se uma reação libera 250 kJ de calor, ela é exotérmica e ΔH = −250 kJ para a reação escrita.",
        ],
        [
          "Lei de Hess",
          "A variação total de entalpia depende dos estados inicial e final; some equações termoquímicas ajustadas para obter a reação desejada.",
          "Se uma reação libera 250 kJ de calor, ela é exotérmica e ΔH = −250 kJ para a reação escrita.",
        ],
        [
          "Ligações e energia",
          "Romper ligações requer energia; formar ligações libera energia. O balanço desses processos contribui para a variação energética.",
          "Quebrar ligações químicas exige energia; formar ligações libera energia. O balanço entre energia absorvida e liberada determina se a reação global aquece ou resfria o entorno.",
        ],
      ],
      note: "Ao inverter uma equação termoquímica, inverta o sinal de ΔH; ao multiplicá-la, multiplique ΔH pelo mesmo fator.",
      questions: [
        {
          text: "Uma reação exotérmica:",
          choices: [
            "Libera energia para o entorno",
            "Absorve sempre toda energia do entorno",
            "Não envolve energia",
          ],
          answer: 0,
        },
        {
          text: "Na convenção usual, qual sinal de ΔH indica processo exotérmico?",
          choices: ["Negativo", "Positivo", "Sempre zero"],
          answer: 0,
        },
        {
          text: "A lei de Hess permite somar equações porque ΔH depende:",
          choices: [
            "Dos estados inicial e final",
            "Da ordem das etapas somente",
            "Do tamanho do recipiente",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Físico-química",
      title: "Cinética e equilíbrio químico",
      intro:
        "A cinética química estuda a velocidade das reações. O equilíbrio descreve um estado dinâmico em que velocidades direta e inversa se igualam em um sistema fechado.",
      heading: "Velocidade, catalisadores e equilíbrio",
      points: [
        [
          "Velocidade das reações",
          "A velocidade depende de fatores como concentração, temperatura, superfície de contato e natureza dos reagentes.",
          "Comprimidos efervescentes reagem mais depressa triturados do que inteiros porque a área de contato aumenta; temperatura e concentração também podem alterar a velocidade.",
        ],
        [
          "Catalisadores",
          "Fornecem um caminho de menor energia de ativação e aceleram a chegada ao equilíbrio sem serem consumidos de forma permanente.",
          "Um catalisador oferece um caminho de menor energia de ativação e acelera a reação sem ser consumido na equação global; não altera a quantidade de produto prevista pelo equilíbrio.",
        ],
        [
          "Equilíbrio e constante",
          "No equilíbrio químico, as velocidades direta e inversa são iguais. A constante K expressa a relação entre quantidades de produtos e reagentes no equilíbrio, conforme a equação.",
          "Aumentar a temperatura geralmente acelera uma reação porque mais partículas atingem energia suficiente para reagir.",
        ],
        [
          "Le Chatelier",
          "Quando um sistema em equilíbrio sofre perturbação, sua composição se ajusta de modo a atenuar o efeito da mudança, como alteração de concentração, pressão ou temperatura.",
          "No equilíbrio N₂ + 3H₂ ⇌ 2NH₃, aumentar a pressão favorece o lado com menos mols gasosos, o da amônia, até que se estabeleça novo equilíbrio.",
        ],
      ],
      note: "No equilíbrio, as concentrações ficam constantes ao longo do tempo, mas as reações microscópicas continuam ocorrendo.",
      questions: [
        {
          text: "Um catalisador geralmente:",
          choices: [
            "Aumenta a velocidade da reação",
            "Muda a identidade dos átomos",
            "Impede a reação direta",
          ],
          answer: 0,
        },
        {
          text: "No equilíbrio químico, as velocidades direta e inversa são:",
          choices: ["Iguais", "Sempre nulas", "Necessariamente infinitas"],
          answer: 0,
        },
        {
          text: "O princípio de Le Chatelier descreve a resposta do equilíbrio a:",
          choices: [
            "Perturbações no sistema",
            "Mudanças na tabela periódica",
            "Alterações no número atômico",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Eletroquímica",
      title: "Pilhas, eletrólise e corrosão",
      intro:
        "A eletroquímica relaciona reações de oxidação e redução com energia elétrica. Pilhas produzem corrente a partir de reações espontâneas; eletrólise usa energia elétrica para promover transformações.",
      heading: "Células e aplicações",
      points: [
        [
          "Oxirredução e potencial",
          "Transferência de elétrons envolve oxidação e redução. Potenciais de eletrodo ajudam a estimar a tendência de uma reação eletroquímica.",
          "Na formação da água, 2H₂ + O₂ → 2H₂O conserva 4 átomos de H e 2 de O em cada lado.",
        ],
        [
          "Pilhas e células",
          "Em uma pilha galvânica, a reação espontânea converte energia química em elétrica. Os eletrodos e o circuito permitem o fluxo de elétrons e íons.",
          "Numa pilha, uma reação espontânea de oxirredução transforma energia química em energia elétrica.",
        ],
        [
          "Eletrólise",
          "Uma fonte externa força uma reação não espontânea; aplicações incluem obtenção e revestimento de materiais.",
          "Numa pilha, uma reação espontânea de oxirredução transforma energia química em energia elétrica.",
        ],
        [
          "Corrosão",
          "É a degradação de materiais por reações químicas ou eletroquímicas com o ambiente; revestimentos e proteção catódica podem reduzi-la.",
          "Numa pilha, uma reação espontânea de oxirredução transforma energia química em energia elétrica.",
        ],
        [
          "Baterias e indústria",
          "Baterias armazenam energia química reversivelmente em diferentes graus; células eletroquímicas são usadas em transporte, eletrônica e processos industriais.",
          "Em uma bateria descarregando, uma reação redox espontânea gera corrente elétrica; na eletrólise, uma fonte externa força uma transformação não espontânea.",
        ],
      ],
      note: "Oxidação ocorre no ânodo e redução no cátodo; em pilhas e células eletrolíticas, os sinais dos eletrodos diferem.",
      questions: [
        {
          text: "Uma pilha galvânica transforma principalmente:",
          choices: [
            "Energia química em elétrica",
            "Energia sonora em química",
            "Luz em massa",
          ],
          answer: 0,
        },
        {
          text: "A eletrólise utiliza:",
          choices: [
            "Energia elétrica para impulsionar reação",
            "Somente gravidade",
            "Nenhum circuito",
          ],
          answer: 0,
        },
        {
          text: "A corrosão é um processo de:",
          choices: [
            "Degradação química ou eletroquímica",
            "Congelamento de toda solução",
            "Separação por peneiração",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Química orgânica",
      title: "Carbono e hidrocarbonetos",
      intro:
        "A Química Orgânica estuda compostos de carbono. As ligações do carbono permitem grande diversidade de cadeias e estruturas.",
      heading: "Cadeias, classificação e nomenclatura",
      points: [
        [
          "Cadeias carbônicas",
          "Podem ser abertas ou cíclicas, normais ou ramificadas, saturadas ou insaturadas e homogêneas ou heterogêneas.",
          "No propano, CH₃–CH₂–CH₃, três carbonos formam uma cadeia aberta e saturada; classifique observando ligações e presença de ciclos ou ramificações.",
        ],
        [
          "Hidrocarbonetos",
          "Contêm carbono e hidrogênio. Alcanos têm ligações simples; alcenos têm pelo menos uma dupla; alcinos têm pelo menos uma tripla.",
          "Metano (CH₄) é um hidrocarboneto: contém apenas carbono e hidrogênio.",
        ],
        [
          "Aromáticos",
          "Incluem estruturas cíclicas conjugadas, como o benzeno; sua estabilidade e reatividade diferem das cadeias abertas simples.",
          "O benzeno é aromático por sua estrutura cíclica conjugada e estabilidade eletrônica; não se classifica como aromático apenas por ter cheiro.",
        ],
        [
          "Nomenclatura",
          "O nome considera tamanho da cadeia principal, tipo de ligação e ramificações, seguindo regras sistemáticas.",
          "Fe₂O₃ é óxido de ferro(III): cada O tem NOX −2, totalizando −6; os dois Fe precisam somar +6, então cada Fe é +3.",
        ],
        [
          "Isomeria",
          "Isômeros têm mesma fórmula molecular e diferentes estruturas ou arranjos espaciais; isso pode alterar suas propriedades.",
          "Butano e isobutano têm fórmula C₄H₁₀, mas conectam os átomos de modo diferente; mesma fórmula molecular não significa mesma estrutura ou propriedades.",
        ],
      ],
      note: "Uma diferença estrutural entre isômeros pode resultar em propriedades e comportamentos distintos.",
      questions: [
        {
          text: "Qual classe de hidrocarboneto apresenta ligação dupla entre carbonos?",
          choices: ["Alceno", "Alcano", "Sal"],
          answer: 0,
        },
        {
          text: "Compostos orgânicos são caracterizados principalmente por estruturas que contêm:",
          choices: ["Carbono", "Hélio", "Somente sódio"],
          answer: 0,
        },
        {
          text: "Isômeros têm:",
          choices: [
            "Mesma fórmula molecular e estruturas diferentes",
            "Sempre fórmulas moleculares diferentes",
            "Sempre as mesmas propriedades",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Química orgânica",
      title: "Funções orgânicas e reações",
      intro:
        "Grupos funcionais classificam compostos orgânicos por padrões de ligação e ajudam a prever propriedades e reações. Polímeros são moléculas grandes construídas a partir de unidades menores.",
      heading: "Compostos e transformações orgânicas",
      points: [
        [
          "Álcoois e fenóis",
          "Álcoois têm grupo hidroxila ligado a carbono saturado; fenóis têm hidroxila ligada diretamente a anel aromático.",
          "No etanol, a hidroxila está ligada a carbono saturado; no fenol, está ligada diretamente ao anel aromático. A posição do grupo distingue as funções.",
        ],
        [
          "Aldeídos, cetonas e ácidos",
          "Aldeídos e cetonas contêm carbonila, mas sua posição na cadeia difere; ácidos carboxílicos têm o grupo –COOH. Identifique o grupo funcional antes de nomear o composto.",
          "Suco de limão tem caráter ácido (pH abaixo de 7); uma solução de sabão costuma ser básica (pH acima de 7).",
        ],
        [
          "Ésteres e éteres",
          "Ésteres contêm grupo derivado de ácido carboxílico e álcool; éteres têm oxigênio entre dois grupos carbônicos.",
          "O acetato de etila contém o grupo éster –COO–; o éter etílico tem um oxigênio entre dois grupos carbônicos (C–O–C). Compare a estrutura para distinguir as funções.",
        ],
        [
          "Aminas e amidas",
          "Aminas são derivadas da amônia com substituintes orgânicos; amidas possuem grupo carbonila ligado a nitrogênio.",
          "Na metilamina, o nitrogênio está ligado a carbono sem carbonila adjacente; em uma amida, o N integra o grupo ligado a C=O. Essa carbonila muda a função.",
        ],
        [
          "Reações e polímeros",
          "Reações orgânicas podem adicionar, substituir, eliminar ou reorganizar grupos. Polímeros são formados por repetição de unidades menores.",
          "O etanol (CH₃CH₂OH) é um álcool: seu grupo característico é a hidroxila ligada a carbono.",
        ],
      ],
      note: "Identificar o grupo funcional é um primeiro passo para nomear e compreender propriedades de um composto orgânico.",
      questions: [
        {
          text: "Qual função contém o grupo carboxila?",
          choices: ["Ácido carboxílico", "Éter", "Alcano"],
          answer: 0,
        },
        {
          text: "Um polímero é formado por:",
          choices: [
            "Unidades estruturais repetidas",
            "Somente um átomo isolado",
            "Uma mistura sem ligações",
          ],
          answer: 0,
        },
        {
          text: "Aldeídos e cetonas possuem qual grupo característico?",
          choices: ["Carbonila", "Cloreto metálico", "Fosfato"],
          answer: 0,
        },
      ],
    },
    {
      category: "Química ambiental",
      title: "Poluição, clima e química verde",
      intro:
        "A Química Ambiental investiga substâncias e transformações no ar, na água e no solo. Compreender fontes e efeitos ajuda a planejar prevenção, tratamento e uso responsável de recursos.",
      heading: "Ambiente, resíduos e energia",
      points: [
        [
          "Atmosfera e clima",
          "Poluentes atmosféricos afetam a qualidade do ar. Gases de efeito estufa retêm parte da energia térmica; emissões humanas intensificam o aquecimento global.",
          "A queima de combustíveis libera CO₂, que aumenta a concentração de gases de efeito estufa; medir emissões e sua permanência ajuda a relacionar química atmosférica e aquecimento.",
        ],
        [
          "Camada de ozônio e chuva ácida",
          "Certas substâncias destroem ozônio estratosférico. Óxidos de enxofre e nitrogênio podem formar ácidos atmosféricos e contribuir para chuva ácida.",
          "Óxidos de enxofre e nitrogênio liberados na atmosfera podem formar ácidos que retornam com a precipitação; isso difere da redução do ozônio estratosférico, ligada a outras substâncias.",
        ],
        [
          "Água, esgoto e solo",
          "Tratamento de água remove contaminantes para torná-la adequada ao uso; tratamento de esgoto reduz a carga de poluentes antes da devolução ao ambiente.",
          "Nitrato detectado em um poço próximo a áreas agrícolas pode indicar contaminação, mas uma amostra isolada não identifica a fonte. Compare pontos, períodos e possíveis fontes antes de concluir.",
        ],
        [
          "Resíduos e reciclagem",
          "Reduzir consumo, reutilizar materiais, reciclar e destinar resíduos corretamente diminui impactos sobre solo e água.",
          "Separar alumínio limpo para reciclagem permite reaproveitar o metal e reduz a necessidade de extração; resíduos contaminados podem exigir tratamento antes do reaproveitamento.",
        ],
        [
          "Indústria, combustíveis e química verde",
          "Processos industriais podem gerar emissões, efluentes e resíduos. Combustíveis fósseis e biocombustíveis têm diferentes fontes e impactos; a química verde busca reduzir resíduos, riscos e consumo de recursos.",
          "Uma indústria pode reduzir impacto ao recuperar solventes e evitar reagentes perigosos desde o projeto. Química verde prioriza prevenir resíduos, não apenas tratá-los depois.",
        ],
      ],
      note: "Avalie impactos ao longo de todo o ciclo de vida de um produto, da obtenção da matéria-prima ao descarte.",
      questions: [
        {
          text: "O tratamento de esgoto busca:",
          choices: [
            "Reduzir poluentes antes da devolução ao ambiente",
            "Aumentar resíduos nos rios",
            "Produzir plástico automaticamente",
          ],
          answer: 0,
        },
        {
          text: "O aquecimento global recente é intensificado principalmente por:",
          choices: [
            "Aumento de gases de efeito estufa",
            "Ausência completa de atmosfera",
            "Redução da gravidade",
          ],
          answer: 0,
        },
        {
          text: "Uma meta da química verde é:",
          choices: [
            "Reduzir resíduos e riscos",
            "Aumentar desperdício",
            "Ignorar o uso de recursos",
          ],
          answer: 0,
        },
      ],
    },
  ],
};
