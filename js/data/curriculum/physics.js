starterLibrary.physics = {
  name: "Física",
  icon: "⚙️",
  priority: "Prioridade alta",
  parts: [
    {
      category: "Fundamentos da Física",
      title: "Grandezas, unidades e medidas",
      intro:
        "A Física descreve fenômenos naturais usando modelos, medições e relações matemáticas. Uma medida precisa de valor numérico e unidade.",
      heading: "Medir e representar fenômenos",
      points: [
        [
          "Grandezas físicas",
          "São propriedades que podem ser medidas, como comprimento, tempo, massa, temperatura e corrente elétrica.",
          "Ao medir uma mesa, registre comprimento de 1,20 m e temperatura do ambiente separadamente; cada grandeza responde a uma pergunta e precisa de unidade adequada.",
        ],
        [
          "Sistema Internacional",
          "O SI padroniza unidades. Exemplos de unidades básicas incluem metro (m), quilograma (kg), segundo (s), kelvin (K) e ampere (A).",
          "Uma distância de 2,5 km equivale a 2.500 m no SI; escreva o fator de conversão (1 km = 1.000 m) para manter a unidade coerente.",
        ],
        [
          "Conversões",
          "Use fatores de conversão equivalentes a 1 e verifique se as unidades finais correspondem à grandeza desejada.",
          "Converta 72 km/h para m/s multiplicando por 1.000 e dividindo por 3.600: 72×1.000/3.600 = 20 m/s. Confira se a unidade final é velocidade.",
        ],
        [
          "Escalares e vetores",
          "Escalares são descritos por um valor e unidade; vetores também têm direção e sentido. Massa é escalar, enquanto deslocamento e força são vetoriais.",
          "Dizer que alguém caminhou 3 km informa uma distância; dizer 3 km para leste também informa direção e sentido.",
        ],
        [
          "Notação, algarismos e dimensões",
          "Notação científica representa valores muito grandes ou pequenos. Algarismos significativos comunicam precisão; análise dimensional verifica compatibilidade de fórmulas.",
          "Na fórmula x = vt, velocidade tem dimensão m/s e tempo, s; o produto resulta em metros. A checagem dimensional confirma a unidade da posição.",
        ],
      ],
      note: "Uma equação física correta precisa ser dimensionalmente consistente nos dois lados.",
      questions: [
        {
          text: "Qual unidade do SI mede tempo?",
          choices: ["Segundo", "Metro", "Quilograma"],
          answer: 0,
        },
        {
          text: "Qual grandeza é vetorial?",
          choices: ["Deslocamento", "Temperatura", "Massa"],
          answer: 0,
        },
        {
          text: "Para que serve a análise dimensional?",
          choices: [
            "Verificar compatibilidade de unidades em uma relação",
            "Medir a cor de um objeto",
            "Substituir todos os experimentos",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Cinemática",
      title: "Movimento, referencial e velocidade",
      intro:
        "A Cinemática descreve movimentos sem investigar suas causas. Dizer se algo está em movimento depende do referencial escolhido.",
      heading: "Posição, trajetória e velocidade",
      points: [
        [
          "Movimento e repouso",
          "Um corpo está em movimento quando sua posição muda com o tempo em relação a um referencial; em outro referencial, a descrição pode mudar.",
          "Um passageiro sentado está em repouso em relação ao ônibus, mas em movimento em relação à rua; indique sempre o referencial ao descrever o estado.",
        ],
        [
          "Trajetória e deslocamento",
          "Trajetória é o caminho percorrido. Deslocamento é a diferença vetorial entre posição final e inicial; distância percorrida considera o caminho.",
          "Uma pessoa caminha 3 m para leste e 3 m para oeste: percorre 6 m, mas seu deslocamento final é zero porque retorna ao ponto de partida.",
        ],
        [
          "Velocidade média",
          "Velocidade média é o deslocamento dividido pelo intervalo de tempo; rapidez média usa a distância total percorrida. Um retorno ao ponto inicial pode dar deslocamento nulo, mesmo após caminhar bastante.",
          "Um ciclista percorre 12 km em 30 min (0,5 h): vₘ = 12 ÷ 0,5 = 24 km/h.",
        ],
        [
          "Movimento uniforme",
          "No movimento uniforme, a velocidade mantém módulo e sentido constantes, então posições mudam por intervalos iguais em tempos iguais. A função x = x₀ + vt permite prever a posição a partir da posição inicial e do tempo.",
          "Um ônibus a 10 m/s por 6 s percorre 60 m; com posição inicial 5 m, x = 5 + 10 × 6 = 65 m.",
        ],
        [
          "Gráficos",
          "Em gráfico posição-tempo, a inclinação representa velocidade; em gráfico velocidade-tempo, a área algébrica representa deslocamento.",
          "Num gráfico posição-tempo, uma reta mais inclinada representa maior velocidade constante.",
        ],
      ],
      note: "Não confunda distância percorrida, que depende da trajetória, com deslocamento entre as posições inicial e final.",
      questions: [
        {
          text: "A descrição de movimento depende principalmente:",
          choices: [
            "Do referencial",
            "Da cor do corpo",
            "Da massa do observador",
          ],
          answer: 0,
        },
        {
          text: "No movimento uniforme, a velocidade:",
          choices: ["É constante", "Aumenta sempre", "É sempre zero"],
          answer: 0,
        },
        {
          text: "Em um gráfico posição-tempo, a inclinação representa:",
          choices: ["Velocidade", "Massa", "Temperatura"],
          answer: 0,
        },
      ],
    },
    {
      category: "Cinemática",
      title: "Aceleração, MUV e queda livre",
      intro:
        "A aceleração mede a mudança da velocidade ao longo do tempo. No movimento uniformemente variado, a aceleração é constante.",
      heading: "Movimentos acelerados",
      points: [
        [
          "Aceleração média",
          "A aceleração média mede quanto a velocidade muda por unidade de tempo: aₘ = Δv/Δt. Considere o sinal das velocidades; uma aceleração negativa pode indicar redução da velocidade ou mudança de sentido, conforme o referencial.",
          "Um carro passa de 0 a 20 m/s em 5 s: aₘ = (20 − 0) ÷ 5 = 4 m/s².",
        ],
        [
          "MUV",
          "Com aceleração constante, v = v₀ + at e x = x₀ + v₀t + at²/2. A equação v² = v₀² + 2aΔx não depende explicitamente do tempo.",
          "Um carrinho parte do repouso com aceleração constante de 2 m/s²; após 3 s, v = v₀ + at = 0 + 2×3 = 6 m/s.",
        ],
        [
          "Queda livre",
          "Quando a resistência do ar é desprezada, corpos próximos à superfície terrestre aceleram aproximadamente com a aceleração gravitacional g.",
          "Desprezando o ar, uma pedra solta do repouso cai por 2 s com g ≈ 10 m/s² e atinge cerca de 20 m/s; massa não muda a aceleração nesse modelo.",
        ],
        [
          "Lançamento vertical",
          "É um movimento sob aceleração da gravidade; no ponto mais alto, a velocidade instantânea é zero, mas a aceleração continua atuando.",
          "Uma bola lançada para cima com 20 m/s leva cerca de 2 s para chegar ao ponto mais alto se g ≈ 10 m/s²; ali v = 0 por um instante, mas a aceleração continua para baixo.",
        ],
        [
          "Gráficos de movimento",
          "A inclinação de v×t fornece aceleração; a área sob v×t fornece deslocamento. Inclua sinais e unidades na interpretação.",
          "Num gráfico posição-tempo, uma reta mais inclinada representa maior velocidade constante.",
        ],
      ],
      note: "Escolha um sentido positivo e mantenha essa convenção de sinais durante toda a resolução.",
      questions: [
        {
          text: "Como se calcula a aceleração média?",
          choices: ["Δv ÷ Δt", "Δt ÷ Δv", "Distância × tempo"],
          answer: 0,
        },
        {
          text: "No ponto mais alto de um lançamento vertical, desprezando o ar:",
          choices: [
            "A velocidade é zero e a gravidade continua atuando",
            "A velocidade e a gravidade são zero",
            "A aceleração muda para cima",
          ],
          answer: 0,
        },
        {
          text: "Em um gráfico velocidade-tempo, a área representa:",
          choices: ["Deslocamento", "Massa", "Aceleração gravitacional"],
          answer: 0,
        },
      ],
    },
    {
      category: "Cinemática",
      title: "Lançamentos horizontal e oblíquo",
      intro:
        "Lançamentos podem ser analisados decompondo o movimento em componentes horizontal e vertical. Sem resistência do ar, essas componentes evoluem independentemente.",
      heading: "Movimento em duas dimensões",
      points: [
        [
          "Lançamento horizontal",
          "Sem resistência do ar, a velocidade horizontal permanece constante, enquanto a componente vertical muda pela gravidade. Analise os dois movimentos separadamente para prever posição e tempo de queda.",
          "Uma esfera sai horizontalmente de uma mesa: mantém a velocidade horizontal enquanto a gravidade aumenta a velocidade para baixo; calcule os eixos separadamente.",
        ],
        [
          "Lançamento oblíquo",
          "A velocidade inicial é decomposta em componentes horizontal e vertical. A gravidade altera a componente vertical.",
          "Uma bola lançada a 20 m/s e 30° tem componente horizontal vₓ = 20 cos 30° e vertical vᵧ = 20 sen 30°; analise cada componente separadamente, desprezando o ar.",
        ],
        [
          "Trajetória e alcance",
          "Sem resistência do ar e em condições ideais, a trajetória é parabólica; tempo de voo e alcance dependem da velocidade e da altura inicial.",
          "Sem resistência do ar e com mesma altura inicial e final, aumentar a componente horizontal aumenta a distância percorrida durante o tempo de voo; o alcance depende também da velocidade vertical e da gravidade.",
        ],
        [
          "Gráficos",
          "Em lançamentos, estude x(t) e y(t), ou as componentes vx e vy, separadamente. Inclinação e área têm interpretações distintas conforme a grandeza nos eixos; preserve unidades e sinais.",
          "Num gráfico posição-tempo, uma reta mais inclinada representa maior velocidade constante.",
        ],
      ],
      note: "Em modelos ideais, a componente horizontal da velocidade não muda; a componente vertical muda por causa da gravidade.",
      questions: [
        {
          text: "Sem resistência do ar, qual componente da velocidade se mantém constante no lançamento?",
          choices: ["Horizontal", "Vertical", "Nenhuma"],
          answer: 0,
        },
        {
          text: "Qual curva descreve idealmente a trajetória de um projétil?",
          choices: ["Parábola", "Circunferência sempre", "Reta vertical"],
          answer: 0,
        },
        {
          text: "Qual aceleração atua verticalmente no lançamento ideal?",
          choices: ["Gravidade", "Atrito do chão", "Força centrípeta sempre"],
          answer: 0,
        },
      ],
    },
    {
      category: "Dinâmica",
      title: "Leis de Newton e forças",
      intro:
        "A Dinâmica relaciona forças ao movimento. Força resultante nula implica velocidade constante; força resultante não nula produz aceleração.",
      heading: "Interações e diagramas de forças",
      points: [
        [
          "Primeira lei e inércia",
          "Se a força resultante é nula, um corpo mantém repouso ou movimento retilíneo uniforme. Inércia é essa resistência a mudar o estado, não uma força que o empurra para continuar.",
          "Quando um ônibus freia, passageiros tendem a continuar em movimento e se inclinam para a frente. A tendência de manter o estado de movimento é a inércia; o cinto exerce a força que altera esse movimento.",
        ],
        [
          "Segunda lei",
          "A força resultante sobre um corpo produz aceleração segundo Fᵣ = ma: para a mesma massa, uma força resultante maior gera maior aceleração. Use a soma vetorial das forças, não apenas uma força isolada.",
          "Uma força resultante de 12 N sobre uma massa de 3 kg produz a = Fᵣ/m = 12/3 = 4 m/s². Use a força resultante, não uma força isolada.",
        ],
        [
          "Terceira lei",
          "Forças de ação e reação têm mesma intensidade e direção, sentidos opostos e atuam em corpos diferentes.",
          "Ao empurrar uma parede, a pessoa exerce força nela e a parede exerce força igual e oposta na pessoa. As forças não se cancelam no diagrama de um só corpo porque atuam em corpos diferentes.",
        ],
        [
          "Peso e normal",
          "Peso é a força gravitacional sobre um corpo. A força normal é a força de contato perpendicular à superfície.",
          "Um livro parado sobre uma mesa horizontal tem peso para baixo e força normal da mesa para cima; em equilíbrio, os módulos se igualam, mas são forças de naturezas distintas.",
        ],
        [
          "Atrito e força elástica",
          "Atrito se opõe ao deslizamento ou à tendência de deslizamento entre superfícies. Uma mola ideal exerce força restauradora proporcional à deformação: F = −kx.",
          "Ao comprimir uma mola, ela exerce força restauradora oposta à deformação; ao empurrar uma caixa, o atrito se opõe ao deslizamento relativo entre as superfícies.",
        ],
      ],
      note: "Ação e reação não se cancelam no diagrama de um único corpo porque atuam em corpos diferentes.",
      questions: [
        {
          text: "Qual relação expressa a segunda lei de Newton?",
          choices: ["Fᵣ = ma", "Fᵣ = m/a", "Fᵣ = a − m"],
          answer: 0,
        },
        {
          text: "Forças de ação e reação atuam:",
          choices: [
            "Em corpos diferentes",
            "Sempre no mesmo corpo",
            "Somente em objetos em repouso",
          ],
          answer: 0,
        },
        {
          text: "A força normal é perpendicular:",
          choices: [
            "À superfície de contato",
            "Sempre ao peso",
            "Sempre à velocidade",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Dinâmica",
      title: "Plano inclinado e movimento circular",
      intro:
        "A escolha de eixos adequados simplifica a análise de forças em planos inclinados. Em trajetórias curvas, a velocidade muda de direção e há aceleração centrípeta.",
      heading: "Componentes e força centrípeta",
      points: [
        [
          "Plano inclinado",
          "Decomponha o peso em componentes paralela e perpendicular ao plano. Sem atrito, a componente paralela tende a acelerar o corpo pela rampa.",
          "Num bloco em repouso numa rampa, o peso pode ser decomposto em componente paralela à rampa (mg sen θ) e perpendicular (mg cos θ); escolha eixos alinhados ao plano.",
        ],
        [
          "Atrito no plano",
          "A força de atrito depende das superfícies e da força normal; seu sentido se opõe ao deslizamento ou à tendência de movimento.",
          "Para um bloco que desliza numa rampa, o atrito cinético aponta contra o movimento e, no modelo simples, seu módulo é μₖN; determine a normal antes de calcular.",
        ],
        [
          "Movimento circular",
          "Mesmo com rapidez constante, a velocidade muda de direção; por isso, há aceleração dirigida para o centro.",
          "Um ponto na borda de uma roda que gira completa uma volta por segundo; mesmo com rapidez constante, sua velocidade muda de direção e há aceleração centrípeta.",
        ],
        [
          "Força centrípeta",
          "A resultante radial necessária ao movimento circular é Fᶜ = mv²/r. Não é uma nova interação: pode ser fornecida por tensão, atrito, gravidade ou normal.",
          "Um carro contorna uma curva de raio 20 m a 10 m/s: a aceleração centrípeta é v²/r = 100/20 = 5 m/s², dirigida ao centro da curva.",
        ],
      ],
      note: "Força centrípeta nomeia a resultante dirigida ao centro, não uma força adicional separada das interações existentes.",
      questions: [
        {
          text: "No movimento circular, para onde aponta a aceleração centrípeta?",
          choices: [
            "Para o centro da trajetória",
            "Sempre para fora",
            "Sempre na direção tangencial",
          ],
          answer: 0,
        },
        {
          text: "Qual relação representa o módulo da força centrípeta?",
          choices: ["mv²/r", "mr/v²", "m + v + r"],
          answer: 0,
        },
        {
          text: "A força centrípeta pode ser fornecida por:",
          choices: [
            "Atrito, tensão ou gravidade",
            "Uma interação única chamada centrípeta em todos os casos",
            "Apenas calor",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Trabalho, energia e potência",
      title: "Trabalho e formas de energia",
      intro:
        "Trabalho mede a transferência de energia por uma força ao longo de um deslocamento. Energia pode ser armazenada em diferentes formas e transformada.",
      heading: "Trabalho e energia mecânica",
      points: [
        [
          "Trabalho de uma força",
          "Para uma força constante, W = Fd cos θ, em que θ é o ângulo entre força e deslocamento. Uma força no mesmo sentido realiza trabalho positivo; uma perpendicular realiza trabalho nulo.",
          "Uma força de 10 N desloca uma caixa 3 m na mesma direção: W = Fd cos 0° = 10×3 = 30 J. Se a força fosse perpendicular ao deslocamento, o trabalho seria zero.",
        ],
        [
          "Energia cinética",
          "Energia cinética é a energia associada ao movimento: Eᶜ = mv²/2. Ela cresce com a massa e com o quadrado da velocidade, por isso dobrar a velocidade quadruplica essa energia.",
          "Uma bola de 2 kg a 3 m/s tem Eᶜ = mv²/2 = 2×3²/2 = 9 J. Dobrar a velocidade quadruplica a energia cinética, pois v aparece ao quadrado.",
        ],
        [
          "Energia potencial gravitacional",
          "Perto da superfície terrestre, Eᵖᵍ = mgh em relação a um nível de referência escolhido: elevar um objeto aumenta sua energia potencial. O valor depende da altura medida a partir desse nível.",
          "Com g ≈ 10 m/s², um objeto de 2 kg a 3 m de altura tem Eₚ = mgh = 60 J.",
        ],
        [
          "Energia potencial elástica",
          "Uma mola ideal deformada armazena energia potencial elástica: Eᵖᵉ = kx²/2, em que k é a constante da mola e x é o alongamento ou compressão em relação ao equilíbrio.",
          "Uma máquina realiza 600 J de trabalho em 3 s: P = 600 ÷ 3 = 200 W.",
        ],
        [
          "Energia mecânica e conservação",
          "É a soma das energias cinética e potencial. Se apenas forças conservativas realizam trabalho, a energia mecânica total se conserva.",
          "Uma bola descendo uma rampa perde energia potencial gravitacional e ganha cinética; sem atrito, a soma mecânica permanece constante.",
        ],
      ],
      note: "O trabalho pode ser positivo, negativo ou nulo, dependendo do ângulo entre força e deslocamento.",
      questions: [
        {
          text: "Qual expressão calcula a energia cinética?",
          choices: ["mv²/2", "mgh", "kx"],
          answer: 0,
        },
        {
          text: "Perto da superfície terrestre, a energia potencial gravitacional é:",
          choices: ["mgh", "mv²/2", "F/d"],
          answer: 0,
        },
        {
          text: "Quando a energia mecânica se conserva em um modelo simples?",
          choices: [
            "Quando não há trabalho de forças não conservativas",
            "Sempre que um corpo se move",
            "Somente quando a massa é zero",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Trabalho, energia e potência",
      title: "Potência, rendimento e máquinas simples",
      intro:
        "Potência mede a rapidez de transferência ou transformação de energia. Máquinas simples mudam a intensidade ou a direção de forças, mas não eliminam o trabalho necessário.",
      heading: "Desempenho e vantagem mecânica",
      points: [
        [
          "Potência",
          "Potência mede a rapidez com que o trabalho é realizado ou a energia é transferida: P = W/Δt. Em movimento com força paralela à velocidade, P = Fv; a unidade SI é o watt.",
          "Uma máquina realiza 600 J de trabalho em 3 s: P = 600 ÷ 3 = 200 W.",
        ],
        [
          "Rendimento",
          "É a razão entre energia ou potência útil e energia ou potência fornecida, normalmente expressa como percentual.",
          "Se uma máquina recebe 500 J e entrega 350 J de energia útil, seu rendimento é 350/500 = 0,70, ou 70%; o restante se transforma em outras formas.",
        ],
        [
          "Máquinas simples",
          "Alavancas, roldanas, planos inclinados e rodas e eixos podem facilitar tarefas ao trocar força por distância ou mudar sua direção.",
          "Uma alavanca com braço de esforço mais longo pode reduzir a força necessária para erguer uma carga, mas exige deslocar o esforço por uma distância maior.",
        ],
        [
          "Conservação",
          "Em sistemas reais, atrito e outras interações transformam parte da energia mecânica útil em calor e som. A energia total se conserva quando se incluem o sistema e o ambiente.",
          "Uma máquina dissipa parte da energia mecânica em calor e som, mas a energia total se conserva quando se incluem máquina e ambiente no sistema.",
        ],
      ],
      note: "Uma máquina pode reduzir a força necessária aumentando a distância ao longo da qual ela é aplicada.",
      questions: [
        {
          text: "Como se calcula potência média?",
          choices: [
            "Trabalho dividido pelo intervalo de tempo",
            "Massa dividida pelo volume",
            "Força multiplicada pela distância sempre",
          ],
          answer: 0,
        },
        {
          text: "Rendimento compara energia útil com:",
          choices: [
            "Energia fornecida",
            "Massa do equipamento",
            "Temperatura ambiente apenas",
          ],
          answer: 0,
        },
        {
          text: "Uma máquina simples pode trocar força por:",
          choices: [
            "Distância ou mudança de direção",
            "Criação de energia",
            "Desaparecimento do trabalho",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Hidrostática",
      title: "Densidade, pressão e empuxo",
      intro:
        "A Hidrostática estuda fluidos em repouso. Densidade e pressão ajudam a explicar forças em líquidos e gases e a flutuação de corpos.",
      heading: "Pressão em fluidos",
      points: [
        [
          "Densidade",
          "Densidade é massa por unidade de volume: ρ = m/V. Ela permite comparar materiais, desde que massa e volume usem unidades compatíveis; a unidade SI é kg/m³.",
          "Uma peça de 200 g ocupa 50 cm³: ρ = m/V = 200/50 = 4 g/cm³. Compare densidades somente com unidades compatíveis.",
        ],
        [
          "Pressão",
          "Pressão é a força perpendicular distribuída por uma área: p = F/A, medida em pascals (Pa). Mantendo a força, reduzir a área aumenta a pressão, como ocorre ao usar uma ponta mais fina.",
          "Uma força perpendicular de 100 N distribuída por 2 m² produz p = F/A = 100/2 = 50 Pa. Mantendo a força e reduzindo a área, a pressão aumenta.",
        ],
        [
          "Pressão atmosférica e hidrostática",
          "A atmosfera exerce pressão. Em um líquido de densidade constante, a pressão varia com profundidade: p = p₀ + ρgh.",
          "Em água, a 2 m de profundidade, a pressão manométrica é ρgh ≈ 1.000×10×2 = 20.000 Pa. Para a pressão absoluta, some também a pressão na superfície.",
        ],
        [
          "Princípio de Pascal",
          "Uma variação de pressão aplicada a um fluido confinado é transmitida ao fluido, princípio usado em sistemas hidráulicos.",
          "Num elevador hidráulico, pressão aplicada a um pistão transmite-se pelo fluido; pistão de área maior pode exercer força maior, em troca de deslocamento menor.",
        ],
        [
          "Arquimedes e empuxo",
          "Um corpo imerso recebe empuxo para cima igual ao peso do fluido deslocado; a relação entre peso, empuxo e densidades ajuda a prever flutuação.",
          "Um bloco submerso desloca água; o empuxo para cima equivale ao peso do fluido deslocado, por isso uma peça pode parecer mais leve dentro da água.",
        ],
      ],
      note: "Um corpo flutua em equilíbrio quando o empuxo equilibra seu peso.",
      questions: [
        {
          text: "Como se calcula densidade?",
          choices: ["ρ = m/V", "ρ = V/m²", "ρ = m + V"],
          answer: 0,
        },
        {
          text: "Em um líquido parado, a pressão geralmente aumenta com:",
          choices: [
            "A profundidade",
            "A cor do recipiente",
            "A distância horizontal apenas",
          ],
          answer: 0,
        },
        {
          text: "O empuxo corresponde ao peso:",
          choices: [
            "Do fluido deslocado",
            "Do recipiente",
            "Do ar em qualquer situação",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Termologia e termodinâmica",
      title: "Temperatura, calor e dilatação",
      intro:
        "Temperatura está relacionada ao estado térmico de um sistema; calor é energia transferida devido a uma diferença de temperatura. Variações térmicas podem alterar dimensões e estado físico.",
      heading: "Escalas e mudanças térmicas",
      points: [
        [
          "Temperatura e escalas",
          "Celsius, Fahrenheit e kelvin usam escalas diferentes. Conversões preservam o estado térmico: °F = 9·°C/5 + 32 e K = °C + 273,15.",
          "Uma colher de metal esquenta ao ficar em contato com uma bebida quente porque há transferência de energia térmica.",
        ],
        [
          "Calor sensível e específico",
          "Quando há mudança de temperatura sem mudança de fase, o calor trocado é Q = mcΔT. O calor específico c indica quanta energia é necessária para variar em 1 °C a temperatura de uma unidade de massa.",
          "Uma colher de metal esquenta ao ficar em contato com uma bebida quente porque há transferência de energia térmica.",
        ],
        [
          "Calor latente",
          "Durante uma mudança de fase ideal, Q = mL e a temperatura permanece constante enquanto as fases coexistem. L é a energia por unidade de massa necessária para completar a transformação.",
          "Uma colher de metal esquenta ao ficar em contato com uma bebida quente porque há transferência de energia térmica.",
        ],
        [
          "Capacidade térmica",
          "A capacidade térmica C = Q/ΔT indica a energia necessária para elevar em um grau a temperatura de um corpo inteiro. Diferentemente do calor específico, ela depende também da quantidade de matéria.",
          "Dois recipientes recebem a mesma quantidade de calor: o de maior capacidade térmica sofre menor variação de temperatura, pois precisa de mais energia por grau.",
        ],
        [
          "Dilatação e mudanças de estado",
          "Aquecimento pode aumentar dimensões e provocar fusão, vaporização ou outras transições; resfriamento pode levar a condensação ou solidificação.",
          "Uma colher de metal esquenta ao ficar em contato com uma bebida quente porque há transferência de energia térmica.",
        ],
      ],
      note: "Calor e temperatura não são sinônimos: calor é energia em trânsito entre sistemas a temperaturas diferentes.",
      questions: [
        {
          text: "Qual fórmula calcula calor sensível?",
          choices: ["Q = mcΔT", "Q = m/V", "Q = F/A"],
          answer: 0,
        },
        {
          text: "Durante uma mudança de fase ideal, a temperatura:",
          choices: [
            "Pode permanecer constante",
            "Sempre dobra",
            "Fica sempre em zero absoluto",
          ],
          answer: 0,
        },
        {
          text: "Qual relação aproxima kelvin de Celsius?",
          choices: ["K = °C + 273,15", "K = °C − 100", "K = 2°C"],
          answer: 0,
        },
      ],
    },
    {
      category: "Termologia e termodinâmica",
      title: "Propagação de calor e termodinâmica",
      intro:
        "A energia térmica se transfere por condução, convecção ou irradiação. A Termodinâmica descreve relações entre calor, trabalho e energia interna.",
      heading: "Transferência, máquinas e leis",
      points: [
        [
          "Condução",
          "Transferência de energia por interações microscópicas, comum em sólidos, sem transporte global do material.",
          "A ponta de uma colher metálica aquece quando a outra ponta fica na sopa quente; energia se transfere pelo material sem transporte macroscópico da colher.",
        ],
        [
          "Convecção",
          "Na convecção, energia térmica é transportada pelo movimento de porções de um fluido. Em água aquecida, regiões mais quentes tendem a subir e regiões mais frias a descer, formando correntes.",
          "Ao aquecer água numa panela, porções mais quentes tendem a subir e as mais frias a descer, formando correntes que transportam energia no fluido.",
        ],
        [
          "Irradiação",
          "Na irradiação, energia se propaga por ondas eletromagnéticas e não precisa de meio material. É assim que a energia do Sol atravessa o espaço até a Terra.",
          "O calor do Sol chega à Terra por radiação eletromagnética e atravessa o vácuo; não precisa de contato ou corrente de matéria.",
        ],
        [
          "Leis da Termodinâmica",
          "A primeira lei expressa conservação de energia, relacionando calor, trabalho e energia interna. A segunda estabelece limites e direção espontânea de processos.",
          "Um café quente esfria ao transferir energia ao ambiente; a energia se conserva, mas o processo espontâneo dispersa energia e não reverte sozinho.",
        ],
        [
          "Máquinas térmicas e rendimento",
          "Máquinas térmicas transformam parte do calor em trabalho. Nenhuma máquina cíclica converte todo o calor recebido em trabalho; o rendimento é inferior a 100%.",
          "Um motor recebe calor de uma fonte quente, transforma parte em trabalho e rejeita o restante a uma fonte fria; não converte todo o calor em trabalho.",
        ],
      ],
      note: "Irradiação pode ocorrer no vácuo; condução e convecção dependem de matéria.",
      questions: [
        {
          text: "Qual processo pode transferir calor pelo vácuo?",
          choices: ["Irradiação", "Condução", "Convecção"],
          answer: 0,
        },
        {
          text: "A convecção envolve principalmente:",
          choices: [
            "Movimento de porções de fluido",
            "Ondas sem matéria",
            "Somente contato entre sólidos",
          ],
          answer: 0,
        },
        {
          text: "Uma máquina térmica cíclica ideal não pode transformar em trabalho:",
          choices: [
            "Todo o calor recebido",
            "Nenhuma energia",
            "A massa em comprimento",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Ondulatória",
      title: "Ondas, frequência e propagação",
      intro:
        "Ondas transportam energia e informação sem transportar matéria de forma líquida ao longo do meio. Ondas mecânicas precisam de um meio; eletromagnéticas também podem se propagar no vácuo.",
      heading: "Tipos e grandezas de onda",
      points: [
        [
          "Tipos de onda",
          "Ondas transversais oscilam perpendicularmente à propagação; longitudinais oscilam paralelamente. Ondas podem ser mecânicas ou eletromagnéticas.",
          "Uma onda numa corda é mecânica e precisa do meio; a luz é eletromagnética e pode se propagar no vácuo. Compare direção da oscilação e propagação.",
        ],
        [
          "Frequência e período",
          "Frequência f conta oscilações por segundo, em hertz; período T mede a duração de uma oscilação, em segundos. São inversos: T = 1/f, então maior frequência significa menor período.",
          "Se uma onda completa 5 oscilações em 1 s, f = 5 Hz e T = 1/f = 0,2 s. Frequência conta ciclos por segundo; período mede o tempo de um ciclo.",
        ],
        [
          "Comprimento e velocidade",
          "Comprimento de onda λ é a distância entre pontos em mesma fase. A velocidade de propagação é v = λf.",
          "Se uma onda tem frequência 4 Hz e comprimento de onda 2 m, sua velocidade é v = fλ = 8 m/s; mantenha unidades compatíveis.",
        ],
        [
          "Reflexão e refração",
          "Reflexão devolve a onda ao meio de origem; refração altera sua velocidade ao passar para outro meio, podendo mudar direção.",
          "Um raio que chega a um espelho plano com 30° em relação à normal é refletido com 30° em relação à mesma normal; os ângulos são medidos da normal, não da superfície.",
        ],
        [
          "Difração, interferência e ressonância",
          "Difração contorna aberturas e obstáculos; interferência combina ondas; ressonância ocorre quando uma excitação favorece oscilações de um sistema.",
          "Ondas sonoras se espalham ao passar por uma porta (difração); duas ondas podem reforçar-se (interferência) e uma frequência externa pode ampliar a vibração de um objeto (ressonância).",
        ],
      ],
      note: "Ao mudar de meio, a frequência é determinada pela fonte; velocidade e comprimento de onda podem mudar.",
      questions: [
        {
          text: "Qual relação conecta velocidade, comprimento de onda e frequência?",
          choices: ["v = λf", "v = λ/f²", "v = λ + f"],
          answer: 0,
        },
        {
          text: "Qual é a relação entre período e frequência?",
          choices: ["T = 1/f", "T = f²", "T = f + 1"],
          answer: 0,
        },
        {
          text: "Qual tipo de onda pode se propagar no vácuo?",
          choices: ["Eletromagnética", "Som no ar", "Onda em uma corda"],
          answer: 0,
        },
      ],
    },
    {
      category: "Acústica",
      title: "Som, audição e instrumentos",
      intro:
        "A Acústica estuda o som e sua propagação. O som audível é uma onda mecânica, e suas características físicas se relacionam à percepção sonora.",
      heading: "Frequência, intensidade e timbre",
      points: [
        [
          "Propagação sonora",
          "Som precisa de um meio material e não se propaga no vácuo. Sua velocidade depende das propriedades do meio.",
          "Uma batida numa mesa transmite vibrações pelo sólido até o ouvido; o som precisa de matéria para se propagar e não viaja no vácuo.",
        ],
        [
          "Altura e frequência",
          "A frequência está relacionada à altura percebida: frequências maiores tendem a soar mais agudas e menores, mais graves. Altura não é o mesmo que intensidade ou volume.",
          "Se uma onda completa 5 oscilações em 1 s, sua frequência é 5 Hz.",
        ],
        [
          "Intensidade e timbre",
          "Intensidade está relacionada à amplitude e à energia transportada. Timbre ajuda a distinguir fontes mesmo quando tocam a mesma nota.",
          "Duas pessoas tocam a mesma nota no mesmo volume, uma no piano e outra no violino; a diferença de qualidade sonora é timbre, enquanto intensidade se relaciona à energia transportada.",
        ],
        [
          "Eco e reverberação",
          "Eco é uma reflexão percebida separadamente; reverberação é a persistência de reflexões sonoras próximas no tempo.",
          "Um grito refletido por uma parede distante pode ser ouvido como eco separado; numa sala pequena, muitas reflexões próximas se misturam em reverberação.",
        ],
        [
          "Doppler, ruído e música",
          "O efeito Doppler altera a frequência percebida quando há movimento relativo. Poluição sonora pode afetar saúde; instrumentos produzem sons por vibração de cordas, colunas de ar ou membranas.",
          "A sirene de uma ambulância parece mais aguda ao se aproximar e mais grave ao se afastar; o movimento relativo altera a frequência percebida.",
        ],
      ],
      note: "Altura relaciona-se à frequência; volume percebido e intensidade não são a mesma grandeza física em todas as situações.",
      questions: [
        {
          text: "O som pode se propagar no vácuo?",
          choices: [
            "Não, precisa de um meio material",
            "Sim, como qualquer onda mecânica",
            "Somente à noite",
          ],
          answer: 0,
        },
        {
          text: "Uma frequência maior tende a ser percebida como som mais:",
          choices: ["Agudo", "Grave", "Lento sempre"],
          answer: 0,
        },
        {
          text: "O timbre ajuda a distinguir:",
          choices: [
            "Fontes sonoras diferentes",
            "Som de matéria e antimatéria",
            "Apenas a temperatura",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Óptica",
      title: "Luz, reflexão, refração e imagens",
      intro:
        "A Óptica estuda a luz e seus efeitos. Em muitos contextos, raios de luz são um modelo útil para descrever propagação, reflexão e formação de imagens.",
      heading: "Espelhos, lentes e visão",
      points: [
        [
          "Natureza e propagação",
          "A luz é radiação eletromagnética. Em meio homogêneo transparente, pode ser modelada propagando-se em linha reta.",
          "A luz do Sol atravessa o espaço até a Terra, ao contrário do som, que precisa de um meio material; um objeto opaco bloqueia a luz e forma sombra.",
        ],
        [
          "Reflexão",
          "A lei da reflexão estabelece ângulo de incidência igual ao ângulo de reflexão, medidos em relação à normal.",
          "Um raio que chega a um espelho plano com 30° em relação à normal é refletido com 30° em relação à mesma normal; os ângulos são medidos da normal, não da superfície.",
        ],
        [
          "Refração",
          "Ao passar entre meios, a velocidade da luz muda e o raio pode mudar de direção; a frequência permanece constante.",
          "Um raio que passa do ar para a água muda de velocidade e, em geral, de direção. O canudo parece deslocado por essa mudança de direção da luz, não porque esteja quebrado.",
        ],
        [
          "Espelhos e lentes",
          "Espelhos planos formam imagens virtuais e simétricas; espelhos esféricos e lentes convergentes ou divergentes podem formar imagens distintas conforme a posição do objeto.",
          "Um espelho plano forma imagem virtual à mesma distância atrás do espelho que o objeto está à frente; uma lente convergente pode formar imagens diferentes conforme a posição do objeto.",
        ],
        [
          "Cor e espectro",
          "A luz branca reúne diferentes comprimentos de onda. Dispersão separa componentes; objetos aparentam cores conforme a luz refletida ou transmitida.",
          "Um prisma separa a luz branca em cores porque diferentes comprimentos de onda são refratados de modos distintos; um objeto parece vermelho ao refletir mais luz vermelha que outras cores.",
        ],
        [
          "Olho humano",
          "Córnea e cristalino focalizam luz na retina. Miopia e hipermetropia podem ser corrigidas com lentes adequadas, mediante avaliação profissional.",
          "A luz refletida por um objeto é focalizada pela córnea e pelo cristalino sobre a retina; a acomodação muda a curvatura do cristalino para focalizar distâncias diferentes.",
        ],
      ],
      note: "A imagem formada por uma lente depende de sua geometria e da distância entre objeto e lente.",
      questions: [
        {
          text: "Na reflexão, o ângulo de incidência é:",
          choices: [
            "Igual ao ângulo de reflexão",
            "Sempre o dobro",
            "Sempre zero",
          ],
          answer: 0,
        },
        {
          text: "Ao mudar de meio, a frequência da luz normalmente:",
          choices: ["Permanece constante", "Dobra sempre", "Vira comprimento"],
          answer: 0,
        },
        {
          text: "Onde se forma a imagem detectada pelo olho?",
          choices: ["Na retina", "No tímpano", "Na íris apenas"],
          answer: 0,
        },
      ],
    },
    {
      category: "Eletricidade",
      title: "Cargas, corrente e leis de Ohm",
      intro:
        "A Eletricidade estuda cargas e seus efeitos. Em circuitos, corrente elétrica descreve o fluxo ordenado de carga e tensão representa diferença de potencial elétrico.",
      heading: "Circuitos e resistência",
      points: [
        [
          "Carga e eletrização",
          "Corpos podem ganhar ou perder elétrons e ficar eletrizados. Cargas de mesmo sinal se repelem e de sinais opostos se atraem.",
          "Ao esfregar um balão no cabelo, há transferência de elétrons entre materiais; cargas de mesmo sinal se repelem e cargas opostas se atraem.",
        ],
        [
          "Condutores e isolantes",
          "Condutores permitem movimentação relativamente fácil de cargas; isolantes dificultam esse movimento.",
          "Num fio de cobre, elétrons podem se deslocar com relativa facilidade; o revestimento plástico dificulta essa movimentação e ajuda a isolar o condutor.",
        ],
        [
          "Corrente e tensão",
          "Corrente I = ΔQ/Δt mede carga por tempo. Tensão elétrica corresponde à diferença de potencial entre pontos.",
          "Uma resistência de 6 Ω ligada a 12 V conduz i = U/R = 12/6 = 2 A.",
        ],
        [
          "Resistência e leis de Ohm",
          "Em condutor ôhmico, V = RI. Para fio uniforme, R = ρL/A depende do material, comprimento e área da seção.",
          "Um resistor de 4 Ω ligado a 12 V conduz 3 A no modelo ôhmico, pois I = U/R = 12/4; a relação vale quando a resistência permanece constante.",
        ],
        [
          "Potência, energia e efeito Joule",
          "P = VI; energia consumida pode ser calculada por E = Pt e cobrada em kWh. Resistores transformam energia elétrica em térmica pelo efeito Joule.",
          "Uma máquina realiza 600 J de trabalho em 3 s: P = 600 ÷ 3 = 200 W.",
        ],
      ],
      note: "Para estimar consumo em kWh, multiplique potência em kW pelo tempo de uso em horas.",
      questions: [
        {
          text: "Qual relação representa a primeira lei de Ohm?",
          choices: ["V = RI", "V = R + I", "V = I/R²"],
          answer: 0,
        },
        {
          text: "Qual é a unidade comum de consumo de energia elétrica residencial?",
          choices: ["kWh", "kW/h", "Volt por metro"],
          answer: 0,
        },
        {
          text: "A corrente elétrica mede:",
          choices: [
            "Carga que atravessa uma seção por unidade de tempo",
            "Massa por unidade de volume",
            "Energia por área apenas",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Eletricidade",
      title: "Resistores, circuitos e segurança",
      intro:
        "Circuitos elétricos combinam fontes, fios e componentes. Entender associações e proteções ajuda a prever corrente, tensão e consumo com segurança.",
      heading: "Associações e instalações",
      points: [
        [
          "Associação em série",
          "A mesma corrente percorre os componentes; a tensão total é dividida entre eles e as resistências equivalentes se somam.",
          "Em dois resistores de 4 Ω e 6 Ω em série, R equivalente = 10 Ω e a mesma corrente atravessa ambos; uma interrupção abre o único caminho.",
        ],
        [
          "Associação em paralelo",
          "A tensão é a mesma em cada ramo; a corrente se divide e o inverso da resistência equivalente é a soma dos inversos.",
          "Em dois resistores de 6 Ω em paralelo, a tensão é a mesma nos ramos e a resistência equivalente é 3 Ω; cada ramo oferece um caminho à corrente.",
        ],
        [
          "Curto-circuito",
          "Um caminho de resistência muito baixa pode causar corrente elevada, aquecimento e risco de incêndio.",
          "Um fio de resistência muito baixa ligando pontos de potenciais diferentes pode provocar corrente excessiva; fusível ou disjuntor interrompe o circuito para reduzir risco.",
        ],
        [
          "Instalações residenciais",
          "Fiação, disjuntores e aterramento devem ser dimensionados e instalados conforme normas por profissionais qualificados.",
          "Lâmpadas domésticas são ligadas em paralelo para que cada uma receba a tensão da rede e possa funcionar independentemente; instalações devem ser feitas por profissional qualificado.",
        ],
        [
          "Consumo e proteção",
          "Desligar equipamentos e escolher aparelhos eficientes pode reduzir consumo; nunca manipule circuitos energizados.",
          "Um aparelho de 1.000 W usado por 2 h consome 2 kWh; disjuntores protegem circuitos contra correntes excessivas e não devem ser substituídos por peças de maior capacidade sem avaliação técnica.",
        ],
      ],
      note: "Não faça reparos elétricos em instalações energizadas; procure profissional habilitado.",
      questions: [
        {
          text: "Em uma associação em série, qual grandeza é igual em todos os resistores?",
          choices: ["Corrente", "Tensão total do circuito", "Resistência"],
          answer: 0,
        },
        {
          text: "Um curto-circuito pode provocar:",
          choices: [
            "Corrente elevada e aquecimento",
            "Queda permanente da gravidade",
            "Consumo nulo em qualquer situação",
          ],
          answer: 0,
        },
        {
          text: "Quem deve realizar instalações residenciais?",
          choices: [
            "Profissional qualificado",
            "Qualquer pessoa sem desligar a energia",
            "Somente crianças",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Eletromagnetismo",
      title: "Ímãs, campos e indução",
      intro:
        "O Eletromagnetismo estuda relações entre correntes elétricas e campos magnéticos. Essas relações fundamentam motores, geradores e transformadores.",
      heading: "Magnetismo e geração elétrica",
      points: [
        [
          "Ímãs e campo magnético",
          "Ímãs produzem campos magnéticos; polos opostos se atraem e polos iguais se repelem. A Terra também tem campo magnético.",
          "A limalha de ferro em torno de um ímã alinha-se aproximadamente com as linhas do campo; a orientação da bússola indica o campo local.",
        ],
        [
          "Força magnética",
          "Cargas em movimento e correntes podem sofrer força em campos magnéticos; a direção depende do movimento, da corrente e do campo.",
          "Um fio percorrido por corrente dentro de um campo magnético pode sofrer força; inverter a corrente inverte o sentido da força, mantida a orientação do campo.",
        ],
        [
          "Indução eletromagnética",
          "Quando o fluxo magnético através de um circuito varia, pode surgir uma tensão induzida; mover um ímã em relação a uma bobina é uma forma de produzir essa variação. Um campo constante, sem mudança do fluxo, não basta.",
          "Ao mover um ímã em relação a uma bobina, o fluxo magnético pode variar e induzir tensão; sem mudança do fluxo, não há indução nesse arranjo.",
        ],
        [
          "Faraday e Lenz",
          "A lei de Faraday relaciona tensão induzida à variação do fluxo; a lei de Lenz determina sentido que se opõe à mudança que a produz.",
          "Ao aproximar um ímã de uma bobina, a corrente induzida cria campo que se opõe à variação do fluxo; essa oposição, prevista pela lei de Lenz, expressa conservação de energia.",
        ],
        [
          "Transformadores, motores e geradores",
          "Transformadores alteram tensão em corrente alternada; motores convertem energia elétrica em movimento e geradores convertem movimento em energia elétrica.",
          "Num transformador, corrente alternada na bobina primária cria fluxo variável que induz tensão na secundária; motores convertem energia elétrica em movimento e geradores fazem o processo inverso.",
        ],
      ],
      note: "Indução requer variação de fluxo magnético; apenas aproximar campos estáticos sem mudança não mantém tensão induzida.",
      questions: [
        {
          text: "O que pode induzir tensão em um circuito?",
          choices: [
            "Variação do fluxo magnético",
            "Campo estático sem qualquer mudança",
            "Apenas massa do fio",
          ],
          answer: 0,
        },
        {
          text: "A lei de Lenz determina:",
          choices: [
            "O sentido que se opõe à variação do fluxo",
            "A cor de um ímã",
            "O número atômico do cobre",
          ],
          answer: 0,
        },
        {
          text: "Um motor elétrico transforma principalmente:",
          choices: [
            "Energia elétrica em movimento",
            "Movimento em combustível",
            "Calor em carga estática sempre",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Física moderna",
      title: "Radioatividade e energia nuclear",
      intro:
        "A Física moderna estuda fenômenos em escalas atômicas e nucleares. Núcleos instáveis podem emitir radiação e sofrer transformações.",
      heading: "Radiações e transformações nucleares",
      points: [
        [
          "Radioatividade",
          "É a emissão espontânea de radiação por núcleos instáveis, que se transformam em núcleos mais estáveis.",
          "Uma amostra de 80 g com meia-vida de 10 anos fica com 40 g após 10 anos e 20 g após 20 anos.",
        ],
        [
          "Alfa, beta e gama",
          "Radiação alfa é composta por núcleos de hélio; beta envolve partículas emitidas em transformações nucleares; gama é radiação eletromagnética de alta energia.",
          "Uma folha de papel detém muitas partículas alfa, uma lâmina metálica reduz parte da radiação beta e raios gama exigem blindagem mais espessa; a proteção depende do tipo e da situação.",
        ],
        [
          "Meia-vida",
          "É o tempo para que metade dos núcleos radioativos de uma amostra se desintegre, em média. Não prevê o instante de decaimento de um núcleo individual.",
          "Uma amostra de 80 g com meia-vida de 10 anos fica com 40 g após 10 anos e 20 g após 20 anos.",
        ],
        [
          "Fissão e fusão",
          "Fissão divide núcleos pesados; fusão une núcleos leves. Ambas podem liberar energia e exigem análise de condições e riscos.",
          "Na fissão, um núcleo pesado se divide em núcleos menores; na fusão, núcleos leves se combinam. Ambos os processos podem liberar energia, mas não são a mesma reação.",
        ],
        [
          "Aplicações e proteção",
          "Tecnologias nucleares têm aplicações energéticas e médicas; segurança envolve contenção, controle de exposição e gestão de resíduos.",
          "Na radioterapia, a radiação é planejada para atingir um tumor minimizando a exposição de tecidos saudáveis; dose, tipo de radiação e proteção são controlados por profissionais.",
        ],
      ],
      note: "Atividade de uma amostra diminui ao longo do tempo segundo a meia-vida, mas não cai a zero de forma súbita.",
      questions: [
        {
          text: "O que significa meia-vida?",
          choices: [
            "Tempo para metade dos núcleos da amostra decair, em média",
            "Tempo para toda radiação desaparecer sempre",
            "Idade exata de cada átomo",
          ],
          answer: 0,
        },
        {
          text: "Na fissão nuclear, núcleos pesados:",
          choices: [
            "Se dividem",
            "Se unem sempre",
            "Viraram moléculas orgânicas",
          ],
          answer: 0,
        },
        {
          text: "A radiação gama é:",
          choices: [
            "Radiação eletromagnética",
            "Um núcleo de hélio",
            "Um próton em repouso",
          ],
          answer: 0,
        },
      ],
    },
    {
      category: "Física moderna",
      title: "Efeito fotoelétrico, quântica e relatividade",
      intro:
        "Alguns fenômenos microscópicos não são explicados adequadamente por modelos clássicos. A Física moderna introduziu descrições quânticas e relativísticas testadas por experimentos.",
      heading: "Novas ideias sobre luz e espaço-tempo",
      points: [
        [
          "Efeito fotoelétrico",
          "Luz pode transferir energia em pacotes; elétrons são emitidos de certos materiais quando a frequência da luz ultrapassa um valor característico.",
          "Aumentar a intensidade de luz abaixo da frequência mínima não libera elétrons; é preciso superar a frequência de corte do material. Acima dela, maior intensidade pode aumentar a quantidade emitida.",
        ],
        [
          "Noções de Física quântica",
          "Em escala microscópica, energia e outras grandezas podem ter valores quantizados; previsões frequentemente são probabilísticas.",
          "No efeito fotoelétrico, elétrons só são emitidos quando a frequência da luz supera um limiar; aumentar apenas a intensidade abaixo do limiar não basta.",
        ],
        [
          "Relatividade especial",
          "As leis da Física são as mesmas em referenciais inerciais e a velocidade da luz no vácuo é constante; medidas de espaço e tempo dependem do referencial.",
          "A dilatação do tempo prevista pela relatividade especial torna-se mensurável em partículas que viajam muito rápido; em velocidades cotidianas, o efeito é desprezível.",
        ],
        [
          "Aplicações",
          "Dispositivos semicondutores, sensores e tecnologias de comunicação dependem de princípios da Física moderna.",
          "Um sensor de luz pode usar um semicondutor para converter luz em sinal elétrico; materiais e circuitos são escolhidos conforme a frequência e a intensidade que precisam detectar.",
        ],
      ],
      note: "No efeito fotoelétrico, aumentar a intensidade abaixo da frequência mínima não substitui a necessidade de frequência suficiente para emitir elétrons.",
      questions: [
        {
          text: "No efeito fotoelétrico, a emissão depende de a luz atingir:",
          choices: [
            "Frequência mínima característica",
            "Qualquer frequência, sem limite",
            "Somente uma cor refletida",
          ],
          answer: 0,
        },
        {
          text: "A Física quântica é especialmente importante para descrever:",
          choices: [
            "Fenômenos em escala microscópica",
            "Somente trajetórias de planetas clássicos",
            "Apenas mapas geográficos",
          ],
          answer: 0,
        },
        {
          text: "Na relatividade especial, a velocidade da luz no vácuo é:",
          choices: [
            "Constante",
            "Dependente da cor do observador",
            "Sempre zero",
          ],
          answer: 0,
        },
      ],
    },
  ],
};
