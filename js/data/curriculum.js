const starterLibrary = {
  physics: {
    name: "Física",
    icon: "⚙️",
    priority: "Prioridade alta",
    parts: [
      {
        category: "Fundamentos da Física",
        title: "Grandezas, unidades e medidas",
        intro: "A Física descreve fenômenos naturais usando modelos, medições e relações matemáticas. Uma medida precisa de valor numérico e unidade.",
        heading: "Medir e representar fenômenos",
        points: [
          ["Grandezas físicas", "São propriedades que podem ser medidas, como comprimento, tempo, massa, temperatura e corrente elétrica."],
          ["Sistema Internacional", "O SI padroniza unidades. Exemplos de unidades básicas incluem metro (m), quilograma (kg), segundo (s), kelvin (K) e ampere (A)."],
          ["Conversões", "Use fatores de conversão equivalentes a 1 e verifique se as unidades finais correspondem à grandeza desejada."],
          ["Escalares e vetores", "Escalares têm módulo; vetores têm módulo, direção e sentido. Deslocamento e força são vetoriais."],
          ["Notação, algarismos e dimensões", "Notação científica representa valores muito grandes ou pequenos. Algarismos significativos comunicam precisão; análise dimensional verifica compatibilidade de fórmulas."]
        ],
        note: "Uma equação física correta precisa ser dimensionalmente consistente nos dois lados.",
        questions: [
          { text: "Qual unidade do SI mede tempo?", choices: ["Segundo", "Metro", "Quilograma"], answer: 0 },
          { text: "Qual grandeza é vetorial?", choices: ["Deslocamento", "Temperatura", "Massa"], answer: 0 },
          { text: "Para que serve a análise dimensional?", choices: ["Verificar compatibilidade de unidades em uma relação", "Medir a cor de um objeto", "Substituir todos os experimentos"], answer: 0 }
        ]
      },
      {
        category: "Cinemática",
        title: "Movimento, referencial e velocidade",
        intro: "A Cinemática descreve movimentos sem investigar suas causas. Dizer se algo está em movimento depende do referencial escolhido.",
        heading: "Posição, trajetória e velocidade",
        points: [
          ["Movimento e repouso", "Um corpo está em movimento quando sua posição muda com o tempo em relação a um referencial; em outro referencial, a descrição pode mudar."],
          ["Trajetória e deslocamento", "Trajetória é o caminho percorrido. Deslocamento é a diferença vetorial entre posição final e inicial; distância percorrida considera o caminho."],
          ["Velocidade média", "É o deslocamento dividido pelo intervalo de tempo; rapidez média usa a distância total percorrida."],
          ["Movimento uniforme", "No MU, a velocidade é constante e a posição varia linearmente: x = x₀ + vt."],
          ["Gráficos", "Em gráfico posição-tempo, a inclinação representa velocidade; em gráfico velocidade-tempo, a área algébrica representa deslocamento."]
        ],
        note: "Não confunda distância percorrida, que depende da trajetória, com deslocamento entre as posições inicial e final.",
        questions: [
          { text: "A descrição de movimento depende principalmente:", choices: ["Do referencial", "Da cor do corpo", "Da massa do observador"], answer: 0 },
          { text: "No movimento uniforme, a velocidade:", choices: ["É constante", "Aumenta sempre", "É sempre zero"], answer: 0 },
          { text: "Em um gráfico posição-tempo, a inclinação representa:", choices: ["Velocidade", "Massa", "Temperatura"], answer: 0 }
        ]
      },
      {
        category: "Cinemática",
        title: "Aceleração, MUV e queda livre",
        intro: "A aceleração mede a mudança da velocidade ao longo do tempo. No movimento uniformemente variado, a aceleração é constante.",
        heading: "Movimentos acelerados",
        points: [
          ["Aceleração média", "É a variação da velocidade dividida pelo intervalo de tempo: aₘ = Δv/Δt."],
          ["MUV", "Com aceleração constante, v = v₀ + at e x = x₀ + v₀t + at²/2. A equação v² = v₀² + 2aΔx não depende explicitamente do tempo."],
          ["Queda livre", "Quando a resistência do ar é desprezada, corpos próximos à superfície terrestre aceleram aproximadamente com a aceleração gravitacional g."],
          ["Lançamento vertical", "É um movimento sob aceleração da gravidade; no ponto mais alto, a velocidade instantânea é zero, mas a aceleração continua atuando."],
          ["Gráficos de movimento", "A inclinação de v×t fornece aceleração; a área sob v×t fornece deslocamento. Inclua sinais e unidades na interpretação."]
        ],
        note: "Escolha um sentido positivo e mantenha essa convenção de sinais durante toda a resolução.",
        questions: [
          { text: "Como se calcula a aceleração média?", choices: ["Δv ÷ Δt", "Δt ÷ Δv", "Distância × tempo"], answer: 0 },
          { text: "No ponto mais alto de um lançamento vertical, desprezando o ar:", choices: ["A velocidade é zero e a gravidade continua atuando", "A velocidade e a gravidade são zero", "A aceleração muda para cima"], answer: 0 },
          { text: "Em um gráfico velocidade-tempo, a área representa:", choices: ["Deslocamento", "Massa", "Aceleração gravitacional"], answer: 0 }
        ]
      },
      {
        category: "Cinemática",
        title: "Lançamentos horizontal e oblíquo",
        intro: "Lançamentos podem ser analisados decompondo o movimento em componentes horizontal e vertical. Sem resistência do ar, essas componentes evoluem independentemente.",
        heading: "Movimento em duas dimensões",
        points: [
          ["Lançamento horizontal", "A velocidade horizontal inicial é mantida; verticalmente, o objeto cai com aceleração da gravidade."],
          ["Lançamento oblíquo", "A velocidade inicial é decomposta em componentes horizontal e vertical. A gravidade altera a componente vertical."],
          ["Trajetória e alcance", "Sem resistência do ar e em condições ideais, a trajetória é parabólica; tempo de voo e alcance dependem da velocidade e da altura inicial."],
          ["Gráficos", "Estude separadamente x(t) e y(t), ou as componentes vx e vy, preservando unidades e sinais."]
        ],
        note: "Em modelos ideais, a componente horizontal da velocidade não muda; a componente vertical muda por causa da gravidade.",
        questions: [
          { text: "Sem resistência do ar, qual componente da velocidade se mantém constante no lançamento?", choices: ["Horizontal", "Vertical", "Nenhuma"], answer: 0 },
          { text: "Qual curva descreve idealmente a trajetória de um projétil?", choices: ["Parábola", "Circunferência sempre", "Reta vertical"], answer: 0 },
          { text: "Qual aceleração atua verticalmente no lançamento ideal?", choices: ["Gravidade", "Atrito do chão", "Força centrípeta sempre"], answer: 0 }
        ]
      },
      {
        category: "Dinâmica",
        title: "Leis de Newton e forças",
        intro: "A Dinâmica relaciona forças ao movimento. Força resultante nula implica velocidade constante; força resultante não nula produz aceleração.",
        heading: "Interações e diagramas de forças",
        points: [
          ["Primeira lei e inércia", "Um corpo mantém repouso ou movimento retilíneo uniforme se a força resultante sobre ele for nula."],
          ["Segunda lei", "A força resultante é relacionada à massa e à aceleração por Fᵣ = ma."],
          ["Terceira lei", "Forças de ação e reação têm mesma intensidade e direção, sentidos opostos e atuam em corpos diferentes."],
          ["Peso e normal", "Peso é a força gravitacional sobre um corpo. A força normal é a força de contato perpendicular à superfície."],
          ["Atrito e força elástica", "Atrito se opõe ao deslizamento ou à tendência de deslizamento entre superfícies. Uma mola ideal exerce força restauradora proporcional à deformação: F = −kx."]
        ],
        note: "Ação e reação não se cancelam no diagrama de um único corpo porque atuam em corpos diferentes.",
        questions: [
          { text: "Qual relação expressa a segunda lei de Newton?", choices: ["Fᵣ = ma", "Fᵣ = m/a", "Fᵣ = a − m"], answer: 0 },
          { text: "Forças de ação e reação atuam:", choices: ["Em corpos diferentes", "Sempre no mesmo corpo", "Somente em objetos em repouso"], answer: 0 },
          { text: "A força normal é perpendicular:", choices: ["À superfície de contato", "Sempre ao peso", "Sempre à velocidade"], answer: 0 }
        ]
      },
      {
        category: "Dinâmica",
        title: "Plano inclinado e movimento circular",
        intro: "A escolha de eixos adequados simplifica a análise de forças em planos inclinados. Em trajetórias curvas, a velocidade muda de direção e há aceleração centrípeta.",
        heading: "Componentes e força centrípeta",
        points: [
          ["Plano inclinado", "Decomponha o peso em componentes paralela e perpendicular ao plano. Sem atrito, a componente paralela tende a acelerar o corpo pela rampa."],
          ["Atrito no plano", "A força de atrito depende das superfícies e da força normal; seu sentido se opõe ao deslizamento ou à tendência de movimento."],
          ["Movimento circular", "Mesmo com rapidez constante, a velocidade muda de direção; por isso, há aceleração dirigida para o centro."],
          ["Força centrípeta", "A resultante radial necessária ao movimento circular é Fᶜ = mv²/r. Não é uma nova interação: pode ser fornecida por tensão, atrito, gravidade ou normal."]
        ],
        note: "Força centrípeta nomeia a resultante dirigida ao centro, não uma força adicional separada das interações existentes.",
        questions: [
          { text: "No movimento circular, para onde aponta a aceleração centrípeta?", choices: ["Para o centro da trajetória", "Sempre para fora", "Sempre na direção tangencial"], answer: 0 },
          { text: "Qual relação representa o módulo da força centrípeta?", choices: ["mv²/r", "mr/v²", "m + v + r"], answer: 0 },
          { text: "A força centrípeta pode ser fornecida por:", choices: ["Atrito, tensão ou gravidade", "Uma interação única chamada centrípeta em todos os casos", "Apenas calor"], answer: 0 }
        ]
      },
      {
        category: "Trabalho, energia e potência",
        title: "Trabalho e formas de energia",
        intro: "Trabalho mede a transferência de energia por uma força ao longo de um deslocamento. Energia pode ser armazenada em diferentes formas e transformada.",
        heading: "Trabalho e energia mecânica",
        points: [
          ["Trabalho de uma força", "Para força constante, W = Fd cos θ, em que θ é o ângulo entre a força e o deslocamento."],
          ["Energia cinética", "Energia associada ao movimento: Eᶜ = mv²/2."],
          ["Energia potencial gravitacional", "Perto da superfície terrestre, Eᵖᵍ = mgh em relação a um nível de referência escolhido."],
          ["Energia potencial elástica", "Para uma mola ideal, Eᵖᵉ = kx²/2, em que x é a deformação."],
          ["Energia mecânica e conservação", "É a soma das energias cinética e potencial. Se apenas forças conservativas realizam trabalho, a energia mecânica total se conserva."]
        ],
        note: "O trabalho pode ser positivo, negativo ou nulo, dependendo do ângulo entre força e deslocamento.",
        questions: [
          { text: "Qual expressão calcula a energia cinética?", choices: ["mv²/2", "mgh", "kx"], answer: 0 },
          { text: "Perto da superfície terrestre, a energia potencial gravitacional é:", choices: ["mgh", "mv²/2", "F/d"], answer: 0 },
          { text: "Quando a energia mecânica se conserva em um modelo simples?", choices: ["Quando não há trabalho de forças não conservativas", "Sempre que um corpo se move", "Somente quando a massa é zero"], answer: 0 }
        ]
      },
      {
        category: "Trabalho, energia e potência",
        title: "Potência, rendimento e máquinas simples",
        intro: "Potência mede a rapidez de transferência ou transformação de energia. Máquinas simples mudam a intensidade ou a direção de forças, mas não eliminam o trabalho necessário.",
        heading: "Desempenho e vantagem mecânica",
        points: [
          ["Potência", "P = W/Δt; em situações de movimento com força paralela à velocidade, P = Fv."],
          ["Rendimento", "É a razão entre energia ou potência útil e energia ou potência fornecida, normalmente expressa como percentual."],
          ["Máquinas simples", "Alavancas, roldanas, planos inclinados e rodas e eixos podem facilitar tarefas ao trocar força por distância ou mudar sua direção."],
          ["Conservação", "Em sistemas reais, atrito e outras perdas transformam parte da energia útil em calor e som."]
        ],
        note: "Uma máquina pode reduzir a força necessária aumentando a distância ao longo da qual ela é aplicada.",
        questions: [
          { text: "Como se calcula potência média?", choices: ["Trabalho dividido pelo intervalo de tempo", "Massa dividida pelo volume", "Força multiplicada pela distância sempre"], answer: 0 },
          { text: "Rendimento compara energia útil com:", choices: ["Energia fornecida", "Massa do equipamento", "Temperatura ambiente apenas"], answer: 0 },
          { text: "Uma máquina simples pode trocar força por:", choices: ["Distância ou mudança de direção", "Criação de energia", "Desaparecimento do trabalho"], answer: 0 }
        ]
      },
      {
        category: "Hidrostática",
        title: "Densidade, pressão e empuxo",
        intro: "A Hidrostática estuda fluidos em repouso. Densidade e pressão ajudam a explicar forças em líquidos e gases e a flutuação de corpos.",
        heading: "Pressão em fluidos",
        points: [
          ["Densidade", "ρ = m/V relaciona a massa ao volume."],
          ["Pressão", "É força perpendicular dividida pela área: p = F/A. A unidade SI é o pascal (Pa)."],
          ["Pressão atmosférica e hidrostática", "A atmosfera exerce pressão. Em um líquido de densidade constante, a pressão varia com profundidade: p = p₀ + ρgh."],
          ["Princípio de Pascal", "Uma variação de pressão aplicada a um fluido confinado é transmitida ao fluido, princípio usado em sistemas hidráulicos."],
          ["Arquimedes e empuxo", "Um corpo imerso recebe empuxo para cima igual ao peso do fluido deslocado; a relação entre peso, empuxo e densidades ajuda a prever flutuação."]
        ],
        note: "Um corpo flutua em equilíbrio quando o empuxo equilibra seu peso.",
        questions: [
          { text: "Como se calcula densidade?", choices: ["ρ = m/V", "ρ = V/m²", "ρ = m + V"], answer: 0 },
          { text: "Em um líquido parado, a pressão geralmente aumenta com:", choices: ["A profundidade", "A cor do recipiente", "A distância horizontal apenas"], answer: 0 },
          { text: "O empuxo corresponde ao peso:", choices: ["Do fluido deslocado", "Do recipiente", "Do ar em qualquer situação"], answer: 0 }
        ]
      },
      {
        category: "Termologia e termodinâmica",
        title: "Temperatura, calor e dilatação",
        intro: "Temperatura está relacionada ao estado térmico de um sistema; calor é energia transferida devido a uma diferença de temperatura. Variações térmicas podem alterar dimensões e estado físico.",
        heading: "Escalas e mudanças térmicas",
        points: [
          ["Temperatura e escalas", "Celsius, Fahrenheit e kelvin usam escalas diferentes. Conversões preservam o estado térmico: °F = 9·°C/5 + 32 e K = °C + 273,15."],
          ["Calor sensível e específico", "Sem mudança de fase, Q = mcΔT, em que c é o calor específico."],
          ["Calor latente", "Durante uma mudança de fase ideal, Q = mL, com temperatura constante enquanto coexistem as fases."],
          ["Capacidade térmica", "C = Q/ΔT descreve a energia necessária para variar a temperatura de um corpo."],
          ["Dilatação e mudanças de estado", "Aquecimento pode aumentar dimensões e provocar fusão, vaporização ou outras transições; resfriamento pode levar a condensação ou solidificação."]
        ],
        note: "Calor e temperatura não são sinônimos: calor é energia em trânsito entre sistemas a temperaturas diferentes.",
        questions: [
          { text: "Qual fórmula calcula calor sensível?", choices: ["Q = mcΔT", "Q = m/V", "Q = F/A"], answer: 0 },
          { text: "Durante uma mudança de fase ideal, a temperatura:", choices: ["Pode permanecer constante", "Sempre dobra", "Fica sempre em zero absoluto"], answer: 0 },
          { text: "Qual relação aproxima kelvin de Celsius?", choices: ["K = °C + 273,15", "K = °C − 100", "K = 2°C"], answer: 0 }
        ]
      },
      {
        category: "Termologia e termodinâmica",
        title: "Propagação de calor e termodinâmica",
        intro: "A energia térmica se transfere por condução, convecção ou irradiação. A Termodinâmica descreve relações entre calor, trabalho e energia interna.",
        heading: "Transferência, máquinas e leis",
        points: [
          ["Condução", "Transferência de energia por interações microscópicas, comum em sólidos, sem transporte global do material."],
          ["Convecção", "Transferência associada ao movimento de porções de fluidos, como ar aquecido que sobe."],
          ["Irradiação", "Transferência por ondas eletromagnéticas; não requer meio material."],
          ["Leis da Termodinâmica", "A primeira lei expressa conservação de energia, relacionando calor, trabalho e energia interna. A segunda estabelece limites e direção espontânea de processos."],
          ["Máquinas térmicas e rendimento", "Máquinas térmicas transformam parte do calor em trabalho. Nenhuma máquina cíclica converte todo o calor recebido em trabalho; o rendimento é inferior a 100%."]
        ],
        note: "Irradiação pode ocorrer no vácuo; condução e convecção dependem de matéria.",
        questions: [
          { text: "Qual processo pode transferir calor pelo vácuo?", choices: ["Irradiação", "Condução", "Convecção"], answer: 0 },
          { text: "A convecção envolve principalmente:", choices: ["Movimento de porções de fluido", "Ondas sem matéria", "Somente contato entre sólidos"], answer: 0 },
          { text: "Uma máquina térmica cíclica ideal não pode transformar em trabalho:", choices: ["Todo o calor recebido", "Nenhuma energia", "A massa em comprimento"], answer: 0 }
        ]
      },
      {
        category: "Ondulatória",
        title: "Ondas, frequência e propagação",
        intro: "Ondas transportam energia e informação sem transportar matéria de forma líquida ao longo do meio. Ondas mecânicas precisam de um meio; eletromagnéticas também podem se propagar no vácuo.",
        heading: "Tipos e grandezas de onda",
        points: [
          ["Tipos de onda", "Ondas transversais oscilam perpendicularmente à propagação; longitudinais oscilam paralelamente. Ondas podem ser mecânicas ou eletromagnéticas."],
          ["Frequência e período", "Frequência f é o número de oscilações por segundo; período T é o tempo de uma oscilação e T = 1/f."],
          ["Comprimento e velocidade", "Comprimento de onda λ é a distância entre pontos em mesma fase. A velocidade de propagação é v = λf."],
          ["Reflexão e refração", "Reflexão devolve a onda ao meio de origem; refração altera sua velocidade ao passar para outro meio, podendo mudar direção."],
          ["Difração, interferência e ressonância", "Difração contorna aberturas e obstáculos; interferência combina ondas; ressonância ocorre quando uma excitação favorece oscilações de um sistema."]
        ],
        note: "Ao mudar de meio, a frequência é determinada pela fonte; velocidade e comprimento de onda podem mudar.",
        questions: [
          { text: "Qual relação conecta velocidade, comprimento de onda e frequência?", choices: ["v = λf", "v = λ/f²", "v = λ + f"], answer: 0 },
          { text: "Qual é a relação entre período e frequência?", choices: ["T = 1/f", "T = f²", "T = f + 1"], answer: 0 },
          { text: "Qual tipo de onda pode se propagar no vácuo?", choices: ["Eletromagnética", "Som no ar", "Onda em uma corda"], answer: 0 }
        ]
      },
      {
        category: "Acústica",
        title: "Som, audição e instrumentos",
        intro: "A Acústica estuda o som e sua propagação. O som audível é uma onda mecânica, e suas características físicas se relacionam à percepção sonora.",
        heading: "Frequência, intensidade e timbre",
        points: [
          ["Propagação sonora", "Som precisa de um meio material e não se propaga no vácuo. Sua velocidade depende das propriedades do meio."],
          ["Altura e frequência", "A frequência está relacionada à altura percebida: frequências maiores tendem a soar mais agudas."],
          ["Intensidade e timbre", "Intensidade está relacionada à amplitude e à energia transportada. Timbre ajuda a distinguir fontes mesmo quando tocam a mesma nota."],
          ["Eco e reverberação", "Eco é uma reflexão percebida separadamente; reverberação é a persistência de reflexões sonoras próximas no tempo."],
          ["Doppler, ruído e música", "O efeito Doppler altera a frequência percebida quando há movimento relativo. Poluição sonora pode afetar saúde; instrumentos produzem sons por vibração de cordas, colunas de ar ou membranas."]
        ],
        note: "Altura relaciona-se à frequência; volume percebido e intensidade não são a mesma grandeza física em todas as situações.",
        questions: [
          { text: "O som pode se propagar no vácuo?", choices: ["Não, precisa de um meio material", "Sim, como qualquer onda mecânica", "Somente à noite"], answer: 0 },
          { text: "Uma frequência maior tende a ser percebida como som mais:", choices: ["Agudo", "Grave", "Lento sempre"], answer: 0 },
          { text: "O timbre ajuda a distinguir:", choices: ["Fontes sonoras diferentes", "Som de matéria e antimatéria", "Apenas a temperatura"], answer: 0 }
        ]
      },
      {
        category: "Óptica",
        title: "Luz, reflexão, refração e imagens",
        intro: "A Óptica estuda a luz e seus efeitos. Em muitos contextos, raios de luz são um modelo útil para descrever propagação, reflexão e formação de imagens.",
        heading: "Espelhos, lentes e visão",
        points: [
          ["Natureza e propagação", "A luz é radiação eletromagnética. Em meio homogêneo transparente, pode ser modelada propagando-se em linha reta."],
          ["Reflexão", "A lei da reflexão estabelece ângulo de incidência igual ao ângulo de reflexão, medidos em relação à normal."],
          ["Refração", "Ao passar entre meios, a velocidade da luz muda e o raio pode mudar de direção; a frequência permanece constante."],
          ["Espelhos e lentes", "Espelhos planos formam imagens virtuais e simétricas; espelhos esféricos e lentes convergentes ou divergentes podem formar imagens distintas conforme a posição do objeto."],
          ["Cor e espectro", "A luz branca reúne diferentes comprimentos de onda. Dispersão separa componentes; objetos aparentam cores conforme a luz refletida ou transmitida."],
          ["Olho humano", "Córnea e cristalino focalizam luz na retina. Miopia e hipermetropia podem ser corrigidas com lentes adequadas, mediante avaliação profissional."]
        ],
        note: "A imagem formada por uma lente depende de sua geometria e da distância entre objeto e lente.",
        questions: [
          { text: "Na reflexão, o ângulo de incidência é:", choices: ["Igual ao ângulo de reflexão", "Sempre o dobro", "Sempre zero"], answer: 0 },
          { text: "Ao mudar de meio, a frequência da luz normalmente:", choices: ["Permanece constante", "Dobra sempre", "Vira comprimento"], answer: 0 },
          { text: "Onde se forma a imagem detectada pelo olho?", choices: ["Na retina", "No tímpano", "Na íris apenas"], answer: 0 }
        ]
      },
      {
        category: "Eletricidade",
        title: "Cargas, corrente e leis de Ohm",
        intro: "A Eletricidade estuda cargas e seus efeitos. Em circuitos, corrente elétrica descreve o fluxo ordenado de carga e tensão representa diferença de potencial elétrico.",
        heading: "Circuitos e resistência",
        points: [
          ["Carga e eletrização", "Corpos podem ganhar ou perder elétrons e ficar eletrizados. Cargas de mesmo sinal se repelem e de sinais opostos se atraem."],
          ["Condutores e isolantes", "Condutores permitem movimentação relativamente fácil de cargas; isolantes dificultam esse movimento."],
          ["Corrente e tensão", "Corrente I = ΔQ/Δt mede carga por tempo. Tensão elétrica corresponde à diferença de potencial entre pontos."],
          ["Resistência e leis de Ohm", "Em condutor ôhmico, V = RI. Para fio uniforme, R = ρL/A depende do material, comprimento e área da seção."],
          ["Potência, energia e efeito Joule", "P = VI; energia consumida pode ser calculada por E = Pt e cobrada em kWh. Resistores transformam energia elétrica em térmica pelo efeito Joule."]
        ],
        note: "Para estimar consumo em kWh, multiplique potência em kW pelo tempo de uso em horas.",
        questions: [
          { text: "Qual relação representa a primeira lei de Ohm?", choices: ["V = RI", "V = R + I", "V = I/R²"], answer: 0 },
          { text: "Qual é a unidade comum de consumo de energia elétrica residencial?", choices: ["kWh", "kW/h", "Volt por metro"], answer: 0 },
          { text: "A corrente elétrica mede:", choices: ["Carga que atravessa uma seção por unidade de tempo", "Massa por unidade de volume", "Energia por área apenas"], answer: 0 }
        ]
      },
      {
        category: "Eletricidade",
        title: "Resistores, circuitos e segurança",
        intro: "Circuitos elétricos combinam fontes, fios e componentes. Entender associações e proteções ajuda a prever corrente, tensão e consumo com segurança.",
        heading: "Associações e instalações",
        points: [
          ["Associação em série", "A mesma corrente percorre os componentes; a tensão total é dividida entre eles e as resistências equivalentes se somam."],
          ["Associação em paralelo", "A tensão é a mesma em cada ramo; a corrente se divide e o inverso da resistência equivalente é a soma dos inversos."],
          ["Curto-circuito", "Um caminho de resistência muito baixa pode causar corrente elevada, aquecimento e risco de incêndio."],
          ["Instalações residenciais", "Fiação, disjuntores e aterramento devem ser dimensionados e instalados conforme normas por profissionais qualificados."],
          ["Consumo e proteção", "Desligar equipamentos e escolher aparelhos eficientes pode reduzir consumo; nunca manipule circuitos energizados."]
        ],
        note: "Não faça reparos elétricos em instalações energizadas; procure profissional habilitado.",
        questions: [
          { text: "Em uma associação em série, qual grandeza é igual em todos os resistores?", choices: ["Corrente", "Tensão total do circuito", "Resistência"], answer: 0 },
          { text: "Um curto-circuito pode provocar:", choices: ["Corrente elevada e aquecimento", "Queda permanente da gravidade", "Consumo nulo em qualquer situação"], answer: 0 },
          { text: "Quem deve realizar instalações residenciais?", choices: ["Profissional qualificado", "Qualquer pessoa sem desligar a energia", "Somente crianças"], answer: 0 }
        ]
      },
      {
        category: "Eletromagnetismo",
        title: "Ímãs, campos e indução",
        intro: "O Eletromagnetismo estuda relações entre correntes elétricas e campos magnéticos. Essas relações fundamentam motores, geradores e transformadores.",
        heading: "Magnetismo e geração elétrica",
        points: [
          ["Ímãs e campo magnético", "Ímãs produzem campos magnéticos; polos opostos se atraem e polos iguais se repelem. A Terra também tem campo magnético."],
          ["Força magnética", "Cargas em movimento e correntes podem sofrer força em campos magnéticos; a direção depende do movimento, da corrente e do campo."],
          ["Indução eletromagnética", "Uma variação do fluxo magnético através de um circuito pode induzir tensão elétrica."],
          ["Faraday e Lenz", "A lei de Faraday relaciona tensão induzida à variação do fluxo; a lei de Lenz determina sentido que se opõe à mudança que a produz."],
          ["Transformadores, motores e geradores", "Transformadores alteram tensão em corrente alternada; motores convertem energia elétrica em movimento e geradores convertem movimento em energia elétrica."]
        ],
        note: "Indução requer variação de fluxo magnético; apenas aproximar campos estáticos sem mudança não mantém tensão induzida.",
        questions: [
          { text: "O que pode induzir tensão em um circuito?", choices: ["Variação do fluxo magnético", "Campo estático sem qualquer mudança", "Apenas massa do fio"], answer: 0 },
          { text: "A lei de Lenz determina:", choices: ["O sentido que se opõe à variação do fluxo", "A cor de um ímã", "O número atômico do cobre"], answer: 0 },
          { text: "Um motor elétrico transforma principalmente:", choices: ["Energia elétrica em movimento", "Movimento em combustível", "Calor em carga estática sempre"], answer: 0 }
        ]
      },
      {
        category: "Física moderna",
        title: "Radioatividade e energia nuclear",
        intro: "A Física moderna estuda fenômenos em escalas atômicas e nucleares. Núcleos instáveis podem emitir radiação e sofrer transformações.",
        heading: "Radiações e transformações nucleares",
        points: [
          ["Radioatividade", "É a emissão espontânea de radiação por núcleos instáveis, que se transformam em núcleos mais estáveis."],
          ["Alfa, beta e gama", "Radiação alfa é composta por núcleos de hélio; beta envolve partículas emitidas em transformações nucleares; gama é radiação eletromagnética de alta energia."],
          ["Meia-vida", "É o tempo para que metade dos núcleos radioativos de uma amostra se desintegre, em média. Não prevê o instante de decaimento de um núcleo individual."],
          ["Fissão e fusão", "Fissão divide núcleos pesados; fusão une núcleos leves. Ambas podem liberar energia e exigem análise de condições e riscos."],
          ["Aplicações e proteção", "Tecnologias nucleares têm aplicações energéticas e médicas; segurança envolve contenção, controle de exposição e gestão de resíduos."]
        ],
        note: "Atividade de uma amostra diminui ao longo do tempo segundo a meia-vida, mas não cai a zero de forma súbita.",
        questions: [
          { text: "O que significa meia-vida?", choices: ["Tempo para metade dos núcleos da amostra decair, em média", "Tempo para toda radiação desaparecer sempre", "Idade exata de cada átomo"], answer: 0 },
          { text: "Na fissão nuclear, núcleos pesados:", choices: ["Se dividem", "Se unem sempre", "Viraram moléculas orgânicas"], answer: 0 },
          { text: "A radiação gama é:", choices: ["Radiação eletromagnética", "Um núcleo de hélio", "Um próton em repouso"], answer: 0 }
        ]
      },
      {
        category: "Física moderna",
        title: "Efeito fotoelétrico, quântica e relatividade",
        intro: "Alguns fenômenos microscópicos não são explicados adequadamente por modelos clássicos. A Física moderna introduziu descrições quânticas e relativísticas testadas por experimentos.",
        heading: "Novas ideias sobre luz e espaço-tempo",
        points: [
          ["Efeito fotoelétrico", "Luz pode transferir energia em pacotes; elétrons são emitidos de certos materiais quando a frequência da luz ultrapassa um valor característico."],
          ["Noções de Física quântica", "Em escala microscópica, energia e outras grandezas podem ter valores quantizados; previsões frequentemente são probabilísticas."],
          ["Relatividade especial", "As leis da Física são as mesmas em referenciais inerciais e a velocidade da luz no vácuo é constante; medidas de espaço e tempo dependem do referencial."],
          ["Aplicações", "Dispositivos semicondutores, sensores e tecnologias de comunicação dependem de princípios da Física moderna."]
        ],
        note: "No efeito fotoelétrico, aumentar a intensidade abaixo da frequência mínima não substitui a necessidade de frequência suficiente para emitir elétrons.",
        questions: [
          { text: "No efeito fotoelétrico, a emissão depende de a luz atingir:", choices: ["Frequência mínima característica", "Qualquer frequência, sem limite", "Somente uma cor refletida"], answer: 0 },
          { text: "A Física quântica é especialmente importante para descrever:", choices: ["Fenômenos em escala microscópica", "Somente trajetórias de planetas clássicos", "Apenas mapas geográficos"], answer: 0 },
          { text: "Na relatividade especial, a velocidade da luz no vácuo é:", choices: ["Constante", "Dependente da cor do observador", "Sempre zero"], answer: 0 }
        ]
      }
    ]
  },
  biology: {
    name: "Biologia",
    icon: "🧬",
    priority: "Prioridade alta",
    parts: [
      {
        category: "Fundamentos da Biologia",
        title: "Vida, organização e método científico",
        intro: "A Biologia investiga a vida por meio de observações, perguntas e evidências. Os seres vivos compartilham características como organização celular, metabolismo e capacidade de reprodução.",
        heading: "Como a Biologia estuda a vida",
        points: [
          ["Características da vida", "Organização celular, uso de energia, resposta ao ambiente, manutenção do equilíbrio interno, crescimento, reprodução e evolução são características associadas aos seres vivos."],
          ["Níveis de organização", "Átomos e moléculas formam estruturas celulares; células formam tecidos, órgãos e sistemas. Organismos interagem em populações, comunidades e ecossistemas."],
          ["Origem da vida", "Hipóteses científicas investigam como moléculas e sistemas capazes de reprodução podem ter surgido na Terra primitiva; novas evidências podem refinar explicações."],
          ["Abiogênese e biogênese", "A antiga ideia de geração espontânea (abiogênese) foi refutada por experimentos. A biogênese sustenta que, nas condições observadas, seres vivos vêm de outros seres vivos."],
          ["Método científico", "Uma investigação formula perguntas, propõe hipóteses testáveis, coleta dados, analisa resultados e comunica conclusões que podem ser verificadas."]
        ],
        note: "Uma hipótese científica precisa ser testável e pode ser revista diante de novas evidências.",
        questions: [
          { text: "Qual sequência segue níveis crescentes de organização biológica?", choices: ["Célula, tecido, órgão, sistema", "Órgão, célula, átomo, tecido", "Ecossistema, célula, população, órgão"], answer: 0 },
          { text: "O que pode acontecer com uma hipótese científica diante de novas evidências?", choices: ["Ser revisada", "Tornar-se impossível de testar", "Substituir todos os dados"], answer: 0 },
          { text: "A biogênese afirma que, nas condições observadas, seres vivos:", choices: ["Surgem de outros seres vivos", "Aparecem sempre de matéria sem vida", "Não têm relação com reprodução"], answer: 0 }
        ]
      },
      {
        category: "Citologia",
        title: "Células, membranas e organelas",
        intro: "A teoria celular reconhece a célula como unidade básica dos seres vivos. Células procariontes não têm núcleo envolvido por membrana; eucariontes têm núcleo e organelas membranosas.",
        heading: "Estrutura e transporte celular",
        points: [
          ["Teoria celular", "Seres vivos são constituídos por células; a célula realiza funções vitais e novas células se originam de células preexistentes."],
          ["Procariontes e eucariontes", "Procariontes, como bactérias, não possuem núcleo delimitado por membrana. Eucariontes têm núcleo organizado e compartimentos especializados."],
          ["Células animais e vegetais", "Ambas são eucariontes. Vegetais geralmente possuem parede celular, cloroplastos e grande vacúolo; animais não possuem parede celular nem cloroplastos."],
          ["Membrana e citoplasma", "A membrana plasmática controla trocas com o meio. O citoplasma abriga organelas e várias reações."],
          ["Núcleo e organelas", "O núcleo abriga o DNA. Mitocôndrias participam da respiração; ribossomos produzem proteínas; retículo endoplasmático e complexo golgiense processam e transportam moléculas; lisossomos participam da digestão celular."],
          ["Cloroplastos e vacúolos", "Cloroplastos realizam fotossíntese em plantas e algas; vacúolos armazenam substâncias e ajudam no equilíbrio de água."],
          ["Transporte pela membrana", "Difusão e osmose são transportes passivos; a osmose envolve água. Alguns transportes usam energia e movem substâncias contra o gradiente."]
        ],
        note: "A osmose é o movimento de água através de uma membrana seletiva, em resposta à diferença de concentração de solutos.",
        questions: [
          { text: "Qual célula possui núcleo delimitado por membrana?", choices: ["Eucarionte", "Procarionte", "Vírus"], answer: 0 },
          { text: "Qual organela participa da fotossíntese?", choices: ["Lisossomo", "Cloroplasto", "Ribossomo"], answer: 1 },
          { text: "A osmose descreve principalmente o movimento de:", choices: ["Água através de membrana seletiva", "Proteínas para dentro do núcleo", "DNA para fora da célula"], answer: 0 }
        ]
      },
      {
        category: "Metabolismo celular",
        title: "Fotossíntese, respiração e fermentação",
        intro: "O metabolismo reúne reações que transformam matéria e energia nas células. Alguns processos armazenam energia em moléculas; outros a liberam para as atividades celulares.",
        heading: "Transformações de energia",
        points: [
          ["Fotossíntese", "Organismos fotossintetizantes usam energia luminosa para formar moléculas orgânicas a partir de dióxido de carbono e água, liberando oxigênio em muitas formas de fotossíntese."],
          ["Respiração celular", "Células extraem energia química de moléculas orgânicas; na respiração aeróbia, o oxigênio participa do processo e há produção de ATP."],
          ["Fermentação", "É uma via de obtenção de energia sem uso de oxigênio como receptor final de elétrons; pode produzir compostos como ácido lático ou etanol."],
          ["ATP", "O ATP funciona como intermediário energético, transferindo energia para processos celulares."],
          ["Quimiossíntese", "Alguns microrganismos usam energia de reações químicas inorgânicas para produzir matéria orgânica, sem depender diretamente da luz."]
        ],
        note: "Fotossíntese armazena parte da energia em moléculas orgânicas; respiração e fermentação disponibilizam energia delas.",
        questions: [
          { text: "Qual molécula transfere energia para muitas atividades da célula?", choices: ["ATP", "DNA", "Celulose"], answer: 0 },
          { text: "A fotossíntese utiliza principalmente energia:", choices: ["Luminosa", "Sonora", "Mecânica"], answer: 0 },
          { text: "Qual processo pode ocorrer sem oxigênio?", choices: ["Fermentação", "Somente fotossíntese", "Transcrição do DNA"], answer: 0 }
        ]
      },
      {
        category: "Divisão celular",
        title: "Ciclo celular, mitose e meiose",
        intro: "O ciclo celular organiza o crescimento e a divisão das células. Mitose e meiose distribuem o material genético de maneiras diferentes.",
        heading: "Cromossomos e formação de células",
        points: [
          ["Ciclo celular", "Inclui crescimento, duplicação do DNA e divisão celular. A regulação do ciclo ajuda a manter os tecidos."],
          ["Mitose", "Em geral, origina duas células-filhas com o mesmo número de cromossomos da célula original; é importante para crescimento e renovação."],
          ["Meiose", "Envolve duas divisões e forma células com metade do número de cromossomos, além de contribuir para a variabilidade genética."],
          ["Haploide e diploide", "Células haploides têm um conjunto de cromossomos (n); diploides têm dois conjuntos (2n)."],
          ["Gametas", "Em animais, gametas são haploides; na fecundação, sua união restabelece o número diploide."]
        ],
        note: "A meiose reduz à metade o número de cromossomos; a mitose normalmente conserva esse número.",
        questions: [
          { text: "Qual processo está ligado à formação de gametas haploides?", choices: ["Meiose", "Mitose", "Osmose"], answer: 0 },
          { text: "Em geral, quantas células-filhas a mitose produz?", choices: ["Duas", "Três", "Quatro"], answer: 0 },
          { text: "Uma célula diploide possui:", choices: ["Dois conjuntos de cromossomos", "Um conjunto de cromossomos", "Nenhum cromossomo"], answer: 0 }
        ]
      },
      {
        category: "Genética",
        title: "DNA, herança e leis de Mendel",
        intro: "A genética estuda a informação hereditária e como características são transmitidas. O DNA contém genes, que participam da produção de moléculas e da expressão de características.",
        heading: "Genes, alelos e herança",
        points: [
          ["DNA, RNA e proteínas", "A informação do DNA pode ser transcrita em RNA; ribossomos traduzem a informação de certos RNAs para formar proteínas."],
          ["Genes e cromossomos", "Genes são segmentos de DNA; cromossomos são estruturas de DNA associado a proteínas. O código genético relaciona códons do RNA a aminoácidos."],
          ["Mendel e alelos", "A primeira lei descreve a segregação de alelos na formação dos gametas. A segunda trata da distribuição independente de pares de características em condições apropriadas."],
          ["Dominância, genótipo e fenótipo", "Genótipo é a constituição genética; fenótipo é a característica observável, influenciada por genes e ambiente. Dominância descreve relações entre alelos para determinada característica."],
          ["Heredogramas e heranças", "Heredogramas mostram padrões familiares. Grupos sanguíneos ABO e fator Rh, assim como algumas características ligadas ao sexo, ajudam a analisar padrões hereditários."],
          ["Mutações", "Alterações no material genético podem não ter efeito, ser prejudiciais ou contribuir para variação; seu efeito depende do contexto."]
        ],
        note: "Dominante não significa necessariamente mais comum, melhor ou mais vantajoso.",
        questions: [
          { text: "O que é o genótipo?", choices: ["A constituição genética", "Apenas o ambiente de um organismo", "O conjunto de órgãos"], answer: 0 },
          { text: "A primeira lei de Mendel descreve principalmente:", choices: ["A segregação dos alelos", "A produção de ATP", "A circulação sanguínea"], answer: 0 },
          { text: "Uma mutação pode:", choices: ["Ter efeitos diferentes conforme o contexto", "Ser sempre benéfica", "Não envolver material genético"], answer: 0 }
        ]
      },
      {
        category: "Biotecnologia",
        title: "Biotecnologia e aplicações",
        intro: "A biotecnologia usa organismos, células ou moléculas biológicas para desenvolver ferramentas e produtos. Suas aplicações incluem medicina, pesquisa e agricultura.",
        heading: "Ferramentas e questões sociais",
        points: [
          ["Engenharia genética e DNA recombinante", "Técnicas permitem analisar ou combinar segmentos de DNA; organismos transgênicos recebem material genético introduzido por biotecnologia."],
          ["Clonagem e células-tronco", "Clonagem produz cópias geneticamente muito semelhantes em determinados contextos. Células-tronco podem se diferenciar em outros tipos celulares."],
          ["Testes de DNA e PCR", "Testes genéticos analisam regiões do DNA para responder a perguntas específicas. PCR amplifica segmentos de material genético para facilitar sua análise."],
          ["Terapia gênica", "Busca tratar doenças ao introduzir, remover ou modificar material genético em células, sob critérios rigorosos de segurança."],
          ["Aplicações", "Biotecnologia contribui para diagnósticos, produção de medicamentos, pesquisa e melhoramento agrícola; seus usos envolvem avaliação ética e ambiental."]
        ],
        note: "A técnica escolhida depende da pergunta de pesquisa e deve considerar segurança, consentimento e impactos.",
        questions: [
          { text: "Qual técnica amplifica segmentos de DNA?", choices: ["PCR", "Osmose", "Mitose"], answer: 0 },
          { text: "Organismos transgênicos recebem:", choices: ["Material genético introduzido por biotecnologia", "Sempre um núcleo ausente", "Somente água"], answer: 0 },
          { text: "A avaliação de aplicações biotecnológicas deve considerar:", choices: ["Segurança e impactos éticos e ambientais", "Apenas a aparência do laboratório", "Nenhuma evidência"], answer: 0 }
        ]
      },
      {
        category: "Evolução",
        title: "Teorias evolutivas e seleção natural",
        intro: "A evolução descreve mudanças hereditárias em populações ao longo das gerações. Evidências de diferentes áreas permitem investigar a história e o parentesco dos seres vivos.",
        heading: "Variação, adaptação e especiação",
        points: [
          ["Lamarck e Darwin", "Lamarck propôs ideias históricas sobre transformação e uso e desuso. Darwin destacou a seleção natural; a síntese moderna integra evolução e genética."],
          ["Seleção natural e adaptação", "Variações hereditárias podem afetar sobrevivência e reprodução em determinado ambiente; ao longo das gerações, algumas variantes tornam-se mais comuns."],
          ["Mutação e variabilidade", "Mutações e recombinação geram variação genética. Deriva genética altera frequências ao acaso, especialmente em populações pequenas."],
          ["Especiação", "O surgimento de espécies pode ocorrer quando populações acumulam diferenças e passam a ter isolamento reprodutivo."],
          ["Evidências e evolução humana", "Fósseis, anatomia comparada, biogeografia e dados moleculares contribuem para reconstruir relações evolutivas, inclusive da linhagem humana."]
        ],
        note: "Indivíduos não evoluem por necessidade: a evolução é observada como mudança hereditária em populações ao longo das gerações.",
        questions: [
          { text: "Em que nível se observa a evolução ao longo das gerações?", choices: ["Em populações", "Em um indivíduo que muda de espécie", "Em uma organela isolada"], answer: 0 },
          { text: "A deriva genética é uma mudança nas frequências genéticas causada:", choices: ["Pelo acaso", "Pela escolha consciente dos genes", "Sempre pela gravidade"], answer: 0 },
          { text: "Qual conjunto pode fornecer evidências evolutivas?", choices: ["Fósseis e dados moleculares", "Somente previsões sem observação", "Apenas nomes de espécies"], answer: 0 }
        ]
      },
      {
        category: "Ecologia",
        title: "Ecossistemas, relações e ciclos",
        intro: "A Ecologia estuda as relações entre organismos e ambiente. Energia e matéria circulam de formas diferentes nos ecossistemas.",
        heading: "Organização e funcionamento dos ecossistemas",
        points: [
          ["Níveis ecológicos", "Indivíduo pertence a uma população; populações formam comunidades; comunidades e fatores físicos formam ecossistemas. Habitat é onde uma espécie vive; nicho descreve seu papel e modo de vida."],
          ["Cadeias, teias e níveis tróficos", "Produtores formam matéria orgânica; consumidores se alimentam de outros organismos; decompositores reciclam nutrientes. Teias conectam várias cadeias."],
          ["Energia e pirâmides", "A energia flui pelas relações alimentares e parte se dissipa como calor. Pirâmides representam energia, biomassa ou número de organismos."],
          ["Ciclos biogeoquímicos", "Água, carbono e nitrogênio circulam entre seres vivos, atmosfera, água e solo por processos biológicos e físicos."],
          ["Relações ecológicas e sucessão", "Competição, mutualismo e parasitismo são exemplos de relações. Sucessão ecológica é a mudança gradual de comunidades ao longo do tempo."]
        ],
        note: "A matéria é reciclada nos ecossistemas; a energia flui e parte se dissipa como calor a cada transferência.",
        questions: [
          { text: "Qual nível reúne populações de espécies diferentes em uma área?", choices: ["Comunidade", "Indivíduo", "Órgão"], answer: 0 },
          { text: "Qual é a principal função ecológica dos decompositores?", choices: ["Reciclar nutrientes", "Impedir toda a fotossíntese", "Criar energia do nada"], answer: 0 },
          { text: "Em um ecossistema, a energia:", choices: ["Flui e parte se dissipa como calor", "É reciclada integralmente", "Não passa entre organismos"], answer: 0 }
        ]
      },
      {
        category: "Ecologia",
        title: "Biomas, biodiversidade e conservação",
        intro: "Biomas reúnem comunidades adaptadas a condições ambientais regionais. A biodiversidade inclui a variedade de genes, espécies e ecossistemas e pode ser afetada por atividades humanas.",
        heading: "Impactos e sustentabilidade",
        points: [
          ["Biomas brasileiros e mundiais", "Clima, solo e disponibilidade de água influenciam a vegetação e os animais característicos de cada bioma; exemplos brasileiros incluem Amazônia, Cerrado, Caatinga, Mata Atlântica, Pantanal e Pampa. Em escala mundial, há florestas tropicais, savanas, desertos, campos e tundras."],
          ["Desmatamento e queimadas", "Podem fragmentar habitats, liberar poluentes, alterar ciclos de água e carbono e reduzir populações."],
          ["Biodiversidade e espécies invasoras", "A perda de biodiversidade diminui a variedade de formas de vida. Espécies invasoras podem competir com espécies nativas e alterar relações ecológicas."],
          ["Conservação", "Áreas protegidas, restauração, uso sustentável e proteção de espécies ajudam a conservar ecossistemas."],
          ["Sustentabilidade", "Busca conciliar necessidades sociais, atividades econômicas e conservação ambiental a longo prazo."]
        ],
        note: "Conservar biodiversidade também ajuda a manter serviços ecossistêmicos, como polinização e proteção de mananciais.",
        questions: [
          { text: "Qual destes é um bioma brasileiro?", choices: ["Cerrado", "Saara polar", "Tundra oceânica brasileira"], answer: 0 },
          { text: "Uma espécie invasora pode:", choices: ["Alterar relações ecológicas e competir com espécies nativas", "Garantir que toda espécie nativa aumente", "Não interagir com o ambiente"], answer: 0 },
          { text: "Sustentabilidade busca:", choices: ["Conciliar necessidades humanas e conservação a longo prazo", "Eliminar todos os ecossistemas", "Usar recursos sem considerar consequências"], answer: 0 }
        ]
      },
      {
        category: "Fisiologia humana",
        title: "Sistemas do corpo e homeostase",
        intro: "A Fisiologia estuda como estruturas do organismo funcionam em conjunto. Sistemas corporais coordenam obtenção de nutrientes, transporte, excreção, movimento e reprodução.",
        heading: "Integração dos sistemas",
        points: [
          ["Digestório e respiratório", "O digestório transforma alimentos e absorve nutrientes; o respiratório realiza trocas de gases entre o organismo e o ambiente."],
          ["Cardiovascular e circulatório", "O coração impulsiona o sangue, que transporta gases, nutrientes, resíduos e sinais químicos pelo corpo."],
          ["Urinário", "Rins filtram o sangue, regulam água e sais e participam da eliminação de resíduos pela urina."],
          ["Nervoso e endócrino", "O sistema nervoso coordena respostas rápidas por sinais elétricos e químicos; o endócrino libera hormônios que regulam funções."],
          ["Imunológico e locomotor", "O sistema imune reconhece e combate ameaças. Sistemas esquelético e muscular sustentam o corpo e possibilitam movimentos."],
          ["Reprodutor e homeostase", "Sistemas reprodutores produzem gametas e hormônios. Homeostase mantém condições internas dentro de limites funcionais."]
        ],
        note: "Os sistemas trabalham integrados: por exemplo, respiração e circulação cooperam no transporte de oxigênio.",
        questions: [
          { text: "Qual sistema filtra o sangue e forma a urina?", choices: ["Urinário", "Esquelético", "Digestório"], answer: 0 },
          { text: "Qual sistema costuma coordenar respostas rápidas por sinais elétricos?", choices: ["Nervoso", "Digestório", "Esquelético"], answer: 0 },
          { text: "Homeostase é a manutenção:", choices: ["De condições internas relativamente estáveis", "De um único tipo de célula", "Da ausência de qualquer mudança"], answer: 0 }
        ]
      },
      {
        category: "Microbiologia e saúde",
        title: "Microrganismos, prevenção e saúde pública",
        intro: "Microrganismos incluem grupos muito diversos, como vírus, bactérias, fungos e protozoários. Alguns causam doenças, enquanto muitos têm papéis importantes nos ecossistemas e na saúde.",
        heading: "Agentes, imunidade e prevenção",
        points: [
          ["Vírus e bactérias", "Vírus dependem de células hospedeiras para se reproduzir; bactérias são organismos celulares procariontes. Antibióticos agem contra bactérias, não contra vírus."],
          ["Fungos, protozoários e helmintos", "Fungos são eucariontes; protozoários são eucariontes unicelulares; helmintos são vermes parasitas. Alguns representantes desses grupos causam doenças."],
          ["Vacinas e imunidade", "Vacinas treinam o sistema imunológico e ajudam a prevenir doenças. Anticorpos reconhecem alvos específicos; imunidade também envolve células."],
          ["Saneamento e epidemiologia", "Água tratada, esgoto coletado, higiene e vigilância epidemiológica reduzem riscos e ajudam a acompanhar a transmissão de doenças."],
          ["Prevenção e saúde pública", "Prevenção inclui vacinação, informação, medidas de barreira quando apropriadas, diagnóstico e acesso ao cuidado. ISTs podem ser prevenidas e tratadas com orientação de profissionais de saúde."]
        ],
        note: "Antibióticos não tratam infecções virais e devem ser usados apenas com orientação profissional.",
        questions: [
          { text: "Antibióticos são usados principalmente contra:", choices: ["Bactérias", "Vírus", "Todas as doenças sem distinção"], answer: 0 },
          { text: "Qual é um objetivo das vacinas?", choices: ["Preparar o sistema imunológico para reconhecer agentes", "Substituir o saneamento", "Eliminar a necessidade de prevenção"], answer: 0 },
          { text: "Qual medida ajuda a reduzir doenças relacionadas à água?", choices: ["Saneamento básico", "Compartilhar água sem tratamento", "Ignorar vigilância epidemiológica"], answer: 0 }
        ]
      },
      {
        category: "Botânica",
        title: "Grupos vegetais, tecidos e órgãos",
        intro: "As plantas são organismos fotossintetizantes com ciclos de vida e estruturas variadas. Grupos vegetais desenvolveram adaptações que permitiram a ocupação de diferentes ambientes.",
        heading: "Diversidade e estrutura das plantas",
        points: [
          ["Briófitas e pteridófitas", "Briófitas não têm vasos condutores verdadeiros e dependem de água para a fecundação. Pteridófitas têm vasos, mas não produzem sementes."],
          ["Gimnospermas e angiospermas", "Gimnospermas produzem sementes não envolvidas por frutos; angiospermas formam flores e frutos que envolvem as sementes."],
          ["Tecidos e órgãos", "Tecidos vegetais incluem estruturas de crescimento, proteção, preenchimento e condução. Raízes absorvem água; caules sustentam e transportam; folhas captam luz e realizam trocas gasosas."],
          ["Seiva", "Xilema conduz principalmente água e sais minerais; floema distribui açúcares e outras substâncias orgânicas."],
          ["Flores, frutos e sementes", "Flores participam da reprodução; após a fecundação, sementes e frutos podem se desenvolver e contribuir para a dispersão."],
          ["Hormônios e reprodução", "Hormônios vegetais regulam crescimento e respostas. A reprodução pode ocorrer por vias sexuadas ou assexuadas, conforme a espécie."]
        ],
        note: "Vasos condutores, sementes, flores e frutos são características que ajudam a distinguir grandes grupos vegetais.",
        questions: [
          { text: "Qual grupo vegetal produz flores e frutos?", choices: ["Angiospermas", "Briófitas", "Pteridófitas"], answer: 0 },
          { text: "Qual tecido conduz principalmente água e sais minerais?", choices: ["Xilema", "Floema", "Epiderme"], answer: 0 },
          { text: "Qual grupo não possui vasos condutores verdadeiros?", choices: ["Briófitas", "Gimnospermas", "Angiospermas"], answer: 0 }
        ]
      },
      {
        category: "Zoologia",
        title: "Classificação e diversidade animal",
        intro: "A Zoologia estuda os animais e suas características. A classificação organiza a diversidade e ajuda a comparar estruturas, ciclos de vida e adaptações.",
        heading: "Invertebrados e vertebrados",
        points: [
          ["Invertebrados", "Poríferos têm corpo poroso; cnidários possuem células urticantes; platelmintos são vermes achatados; nematódeos são cilíndricos; anelídeos apresentam segmentos."],
          ["Moluscos e artrópodes", "Moluscos têm corpo mole e muitos apresentam concha. Artrópodes possuem exoesqueleto e apêndices articulados; incluem insetos, aracnídeos e crustáceos."],
          ["Equinodermos", "São animais marinhos, como estrelas-do-mar e ouriços, com sistema ambulacrário característico."],
          ["Peixes e anfíbios", "Peixes são vertebrados aquáticos; anfíbios geralmente apresentam fases de vida ligadas à água e à terra."],
          ["Répteis, aves e mamíferos", "Répteis têm pele queratinizada; aves possuem penas; mamíferos têm pelos e glândulas mamárias. Há diversidade e exceções dentro dos grupos."],
          ["Adaptações", "Estruturas e comportamentos podem favorecer sobrevivência e reprodução em certos ambientes; adaptações se estabelecem em populações ao longo de gerações."]
        ],
        note: "Classificação descreve parentescos e características compartilhadas; não significa que um grupo atual seja ancestral direto de outro.",
        questions: [
          { text: "Qual grupo possui exoesqueleto e apêndices articulados?", choices: ["Artrópodes", "Anelídeos", "Cnidários"], answer: 0 },
          { text: "Qual característica identifica aves?", choices: ["Penas", "Pelos e glândulas mamárias", "Ausência de coluna em todos os casos"], answer: 0 },
          { text: "Adaptações evolutivas se estabelecem principalmente:", choices: ["Em populações ao longo de gerações", "Quando um indivíduo decide mudar", "Sem relação com hereditariedade"], answer: 0 }
        ]
      }
    ]
  },
  math: {
    name: "Matemática",
    icon: "📐",
    parts: [
      {
        category: "Matemática básica",
        title: "Números e operações",
        intro: "Os conjuntos numéricos organizam os números conforme suas propriedades. Conhecer as operações, os sinais e a ordem de cálculo ajuda a resolver expressões e problemas.",
        heading: "Conjuntos, sinais e cálculos",
        points: [
          ["Naturais e inteiros", "Naturais (ℕ) incluem 0, 1, 2…; inteiros (ℤ) incluem também os negativos: …−2, −1, 0, 1, 2…"],
          ["Racionais e irracionais", "Racionais (ℚ) podem ser escritos como fração de inteiros, como −3/4 ou 0,5. Irracionais não têm representação decimal finita ou periódica, como √2 e π."],
          ["Positivos, negativos e módulo", "Na reta numérica, números positivos ficam à direita do zero e negativos à esquerda. O módulo |x| é a distância até zero; por exemplo, |−5| = 5."],
          ["Operações e decimais", "Adição, subtração, multiplicação e divisão seguem regras de sinais. Números decimais podem ser alinhados pela vírgula para somar e subtrair; para multiplicar, conte as casas decimais."],
          ["Expressões numéricas", "Respeite a ordem: parênteses, potências e raízes, multiplicações e divisões, adições e subtrações. Em operações de mesma prioridade, siga da esquerda para a direita."]
        ],
        note: "Subtrair um número equivale a somar seu oposto: 7 − (−2) = 7 + 2 = 9.",
        questions: [
          { text: "Qual destes números é irracional?", choices: ["0,25", "√2", "−3"], answer: 1 },
          { text: "Quanto vale |−8|?", choices: ["−8", "0", "8"], answer: 2 },
          { text: "Qual operação deve ser resolvida primeiro em 3 + 2 × 4?", choices: ["A adição", "A multiplicação", "As duas ao mesmo tempo"], answer: 1 }
        ]
      },
      {
        category: "Matemática básica",
        title: "Frações, divisibilidade, MMC e MDC",
        intro: "Frações representam partes de um todo e também quocientes. A divisibilidade, os múltiplos e os divisores permitem simplificar frações e encontrar denominadores comuns.",
        heading: "Frações e divisores",
        points: [
          ["Frações", "O numerador indica as partes consideradas e o denominador, em quantas partes iguais o todo foi dividido. Frações equivalentes representam o mesmo valor."],
          ["Comparação e operações", "Simplifique dividindo numerador e denominador por um divisor comum. Para comparar ou somar frações com denominadores diferentes, use um denominador comum; na multiplicação, multiplique numeradores e denominadores."],
          ["Divisibilidade", "Um número é divisível por outro quando a divisão é exata. Por exemplo, números pares são divisíveis por 2; números cuja soma dos algarismos é divisível por 3 também são divisíveis por 3."],
          ["Múltiplos e divisores", "Múltiplos de 4 incluem 4, 8, 12…; divisores de 12 incluem 1, 2, 3, 4, 6 e 12."],
          ["MMC e MDC", "O MMC é o menor múltiplo comum positivo e ajuda a somar frações. O MDC é o maior divisor comum e ajuda a simplificá-las. Para 6 e 8: MMC = 24 e MDC = 2."]
        ],
        note: "Para somar 1/6 + 1/4, use o MMC 12: 2/12 + 3/12 = 5/12.",
        questions: [
          { text: "Qual é o resultado de 1/4 + 1/2?", choices: ["2/6", "3/4", "2/4"], answer: 1 },
          { text: "Qual é o MMC de 6 e 8?", choices: ["12", "24", "48"], answer: 1 },
          { text: "Qual é o MDC de 12 e 18?", choices: ["3", "6", "36"], answer: 1 }
        ]
      },
      {
        category: "Matemática básica",
        title: "Razões, proporções e regra de três",
        intro: "Razões comparam grandezas por meio de uma divisão. Quando duas razões são iguais, formam uma proporção, que pode ser usada para encontrar um valor desconhecido.",
        heading: "Proporcionalidade na prática",
        points: [
          ["Razão e proporção", "A razão entre 2 e 5 é 2/5. Em uma proporção, como 2/5 = 4/10, o produto dos extremos é igual ao dos meios."],
          ["Regra de três simples", "Relacione duas grandezas. Em proporcionalidade direta, ambas aumentam ou diminuem juntas; na inversa, quando uma aumenta, a outra diminui."],
          ["Regra de três composta", "Relacione três ou mais grandezas e determine se cada uma é direta ou inversamente proporcional à incógnita antes de montar o cálculo."],
          ["Exemplo", "Se 3 cadernos custam R$ 18, então 5 cadernos custam R$ 30, supondo preço unitário constante."]
        ],
        note: "Antes de multiplicar cruzado, confira se as grandezas são diretamente ou inversamente proporcionais.",
        questions: [
          { text: "Se 3 cadernos custam R$ 18, quanto custam 5 pelo mesmo preço unitário?", choices: ["R$ 24", "R$ 30", "R$ 36"], answer: 1 },
          { text: "Se mais trabalhadores fazem o mesmo serviço em menos tempo, as grandezas são:", choices: ["Diretamente proporcionais", "Inversamente proporcionais", "Sempre iguais"], answer: 1 },
          { text: "Uma razão compara grandezas por meio de:", choices: ["Uma divisão", "Uma soma obrigatória", "Uma raiz"], answer: 0 }
        ]
      },
      {
        category: "Matemática básica",
        title: "Potências, raízes e notação científica",
        intro: "Potenciação representa multiplicações repetidas. A radiciação desfaz uma potência, enquanto a notação científica facilita a escrita de números muito grandes ou muito pequenos.",
        heading: "Regras e representações",
        points: [
          ["Potenciação", "Em aⁿ, a é a base e n é o expoente. Por exemplo, 2³ = 2 × 2 × 2 = 8. Para a ≠ 0, a⁰ = 1."],
          ["Propriedades das potências", "Na mesma base, aᵐ × aⁿ = aᵐ⁺ⁿ e aᵐ ÷ aⁿ = aᵐ⁻ⁿ. Uma potência elevada a outra potência tem expoentes multiplicados."],
          ["Radiciação", "√a é o número não negativo que, ao quadrado, resulta em a. Assim, √49 = 7. A raiz quadrada é a operação inversa de elevar ao quadrado."],
          ["Notação científica", "Escreva um número como a × 10ⁿ, com 1 ≤ |a| < 10. Por exemplo, 3.500.000 = 3,5 × 10⁶."]
        ],
        note: "Ao elevar um número negativo ao quadrado, use parênteses: (−3)² = 9, enquanto −3² = −9.",
        questions: [
          { text: "Quanto é 2³?", choices: ["6", "8", "9"], answer: 1 },
          { text: "Qual é √49?", choices: ["6", "7", "24,5"], answer: 1 },
          { text: "Como escrever 3.500.000 em notação científica?", choices: ["35 × 10⁵", "3,5 × 10⁶", "0,35 × 10⁷"], answer: 1 }
        ]
      },
      {
        category: "Matemática básica",
        title: "Expressões algébricas",
        intro: "A álgebra usa letras para representar números desconhecidos ou variáveis. A ordem das operações também vale para expressões com letras.",
        heading: "Letras, termos e substituição",
        points: [
          ["Variáveis e expressões", "Em 3x + 2, x é uma variável; a expressão representa um valor que depende de x."],
          ["Termos semelhantes", "Só podem ser somados ou subtraídos quando têm a mesma parte literal: 3x + 2x = 5x, mas 3x + 2y não pode ser reduzido."],
          ["Valor numérico", "Substitua cada variável pelo valor indicado e siga a ordem das operações. Se x = 4, então 2x + 3 = 11."],
          ["Distributiva", "Multiplique o fator por cada termo dentro dos parênteses: 2(x + 3) = 2x + 6."]
        ],
        note: "Use parênteses ao substituir uma variável por um número negativo: se x = −2, então x² = (−2)² = 4.",
        questions: [
          { text: "Se x = 4, quanto vale 2x + 3?", choices: ["11", "14", "9"], answer: 0 },
          { text: "Simplifique 3x + 2x.", choices: ["5x", "5x²", "6x"], answer: 0 },
          { text: "Aplique a distributiva: 2(x + 3).", choices: ["2x + 3", "2x + 6", "x + 6"], answer: 1 }
        ]
      },
      {
        category: "Matemática financeira",
        title: "Matemática Financeira — conceitos básicos",
        intro: "A matemática financeira ajuda a comparar valores em datas diferentes e a entender como juros, taxas e prazos alteram o valor do dinheiro. Ela aparece em investimentos, empréstimos, dívidas e compras parceladas.",
        heading: "Elementos de uma operação financeira",
        points: [
          ["Capital (C)", "Valor inicial aplicado, emprestado ou devido."],
          ["Juros (J)", "Valor cobrado ou recebido pelo uso do capital durante certo período."],
          ["Montante (M)", "Total ao fim da operação: capital mais juros. A relação básica é M = C + J."],
          ["Taxa de juros (i)", "Percentual usado para calcular os juros. Sempre considere o período da taxa, como mês ou ano, junto com o prazo."]
        ],
        note: "Antes de calcular, confira se a taxa e o prazo estão na mesma unidade de tempo.",
        questions: [
          { text: "O que representa o capital (C)?", choices: ["O valor inicial da operação", "A soma final de todas as parcelas", "O prazo do empréstimo"], answer: 0 },
          { text: "Qual relação expressa o montante?", choices: ["M = C − J", "M = C + J", "M = J ÷ C"], answer: 1 },
          { text: "O que é importante verificar ao usar uma taxa de juros?", choices: ["Se a taxa e o prazo usam períodos compatíveis", "Se o capital é sempre igual a zero", "Se o montante é menor que os juros"], answer: 0 }
        ],
        source: { url: "https://www.todamateria.com.br/matematica-financeira/", author: "Rosimar Gouveia", role: "Professora de Matemática e Física" }
      },
      {
        category: "Matemática financeira",
        title: "Porcentagem e variação percentual",
        intro: "Porcentagem significa uma razão por 100. Para calcular p% de um valor, transforme p% em p/100 e multiplique pelo valor. Esse cálculo ajuda a encontrar descontos, acréscimos e variações de preço.",
        heading: "Descontos, aumentos e variações",
        points: [
          ["Desconto", "Uma camiseta de R$ 120 com 50% de desconto tem abatimento de 0,50 × 120 = R$ 60. O preço final é R$ 120 − R$ 60 = R$ 60."],
          ["Outro exemplo de desconto", "Com 23% de desconto em R$ 120, o abatimento é 0,23 × 120 = R$ 27,60; o valor a pagar fica R$ 92,40."],
          ["Aumento", "Se o feijão custa R$ 8 e sobe 30%, o acréscimo é 0,30 × 8 = R$ 2,40. O novo preço é R$ 10,40."],
          ["Variação percentual", "Compare a diferença com o valor inicial: (variação ÷ valor inicial) × 100%. De R$ 25 para R$ 28, a variação é 3/25 = 12%."]
        ],
        note: "Para um aumento, some o acréscimo ao preço inicial; para um desconto, subtraia o abatimento.",
        questions: [
          { text: "Uma compra de R$ 120 recebe 50% de desconto. Quanto se paga?", choices: ["R$ 60", "R$ 50", "R$ 90"], answer: 0 },
          { text: "Quanto é 30% de R$ 8?", choices: ["R$ 0,80", "R$ 2,40", "R$ 3,00"], answer: 1 },
          { text: "Um preço passou de R$ 25 para R$ 28. Qual foi a variação percentual?", choices: ["3%", "12%", "28%"], answer: 1 }
        ],
        source: { url: "https://www.todamateria.com.br/matematica-financeira/", author: "Rosimar Gouveia", role: "Professora de Matemática e Física" }
      },
      {
        category: "Matemática financeira",
        title: "Juros simples e compostos",
        intro: "No regime simples, os juros de cada período são calculados sobre o capital inicial. No regime composto, os juros são incorporados ao saldo, e os períodos seguintes rendem sobre esse novo montante.",
        heading: "Fórmulas e interpretação",
        points: [
          ["Juros simples", "J = C × i × n. C é o capital, i é a taxa por período e n é o número de períodos. O montante é M = C + J, ou M = C × (1 + i × n)."],
          ["Exemplo de juros simples", "R$ 1.000 a 2% ao mês por 3 meses: J = 1.000 × 0,02 × 3 = R$ 60. Portanto, M = R$ 1.060."],
          ["Juros compostos", "O saldo cresce a cada período. Para n períodos, M = C × (1 + i)^n."],
          ["Exemplo de juros compostos", "R$ 1.000 a 2% ao mês por 3 meses: M = 1.000 × (1,02)^3 = R$ 1.061,21, aproximadamente."]
        ],
        note: "Use a taxa em forma decimal (2% = 0,02) e mantenha taxa e período na mesma unidade. Nos compostos, o expoente n indica o número de períodos.",
        questions: [
          { text: "Qual fórmula calcula os juros simples?", choices: ["J = C × i × n", "J = C + i + n", "J = C ÷ (i × n)"], answer: 0 },
          { text: "R$ 1.000 a 2% ao mês por 3 meses rende quanto de juros simples?", choices: ["R$ 20", "R$ 60", "R$ 120"], answer: 1 },
          { text: "O que distingue os juros compostos?", choices: ["A taxa deixa de existir", "Cada período considera o saldo acumulado", "Os juros são sempre iguais a zero"], answer: 1 }
        ],
        source: { url: "https://www.todamateria.com.br/matematica-financeira/", author: "Rosimar Gouveia", role: "Professora de Matemática e Física" }
      },
      {
        category: "Matemática financeira",
        title: "Inflação, lucro e decisões de compra",
        intro: "A matemática financeira também ajuda a comparar o custo de produtos, entender o efeito da inflação e avaliar o resultado de uma venda ou de uma compra parcelada.",
        heading: "Comparando valores no cotidiano",
        points: [
          ["Lucro e prejuízo", "Lucro = preço de venda − custo. Se o resultado for negativo, há prejuízo. A margem de lucro percentual costuma comparar o lucro com o custo ou com a receita; indique qual base está usando."],
          ["Inflação", "É o aumento generalizado dos preços ao longo do tempo, reduzindo o poder de compra do dinheiro. Se preços sobem 5%, um valor de R$ 100 precisa virar R$ 105 para acompanhar esse aumento."],
          ["Comparação de preços", "Compare preços pela mesma unidade (por quilo, litro ou unidade) e considere descontos, frete e quantidade para descobrir qual opção realmente compensa."],
          ["Parcelamentos e financiamentos", "Some o valor total das parcelas, observe entrada, taxas, tarifas e prazo e compare o total financiado com o preço à vista. Parcelas menores podem significar um custo final maior."]
        ],
        note: "Confira o custo total, e não apenas o valor da parcela. Em compras com juros, prazo maior pode aumentar bastante o montante pago.",
        questions: [
          { text: "Um produto custa R$ 80 e é vendido por R$ 100. Qual é o lucro em reais?", choices: ["R$ 20", "R$ 80", "R$ 180"], answer: 0 },
          { text: "O que costuma acontecer com o poder de compra quando há inflação?", choices: ["A mesma quantia compra menos", "A mesma quantia compra sempre mais", "Os preços deixam de existir"], answer: 0 },
          { text: "O que comparar ao avaliar um parcelamento?", choices: ["Somente o valor da primeira parcela", "O custo total, incluindo taxas e juros", "Apenas a cor do produto"], answer: 1 }
        ],
        source: { url: "https://www.todamateria.com.br/matematica-financeira/", author: "Rosimar Gouveia", role: "Professora de Matemática e Física" }
      },
      {
        category: "Álgebra",
        title: "Monômios, polinômios e produtos notáveis",
        intro: "Expressões algébricas são formadas por números, variáveis e operações. Monômios e polinômios podem ser organizados e transformados usando propriedades das operações.",
        heading: "Operações e identidades",
        points: [
          ["Monômios e polinômios", "Monômio tem um único termo, como 3x². Polinômio é uma soma ou subtração de monômios, como x² + 2x − 1."],
          ["Operações", "Some termos semelhantes. Para multiplicar monômios, multiplique coeficientes e some expoentes de bases iguais; para dividir, divida coeficientes e subtraia expoentes."],
          ["Distributiva", "Para multiplicar polinômios, cada termo de um fator multiplica cada termo do outro e, no fim, reduza termos semelhantes."],
          ["Produtos notáveis", "(a + b)² = a² + 2ab + b²; (a − b)² = a² − 2ab + b²; (a + b)(a − b) = a² − b²."]
        ],
        note: "O quadrado da soma não é a soma dos quadrados: (a + b)² inclui o termo 2ab.",
        questions: [
          { text: "Qual é o desenvolvimento de (x + 3)²?", choices: ["x² + 9", "x² + 6x + 9", "x² + 3x + 9"], answer: 1 },
          { text: "Qual expressão é um polinômio?", choices: ["2x² − x + 4", "Somente 7", "Uma igualdade sem variáveis"], answer: 0 },
          { text: "Quanto é (a + b)(a − b)?", choices: ["a² + b²", "a² − b²", "a² − 2ab + b²"], answer: 1 }
        ]
      },
      {
        category: "Álgebra",
        title: "Fatoração",
        intro: "Fatorar é reescrever uma soma ou diferença como um produto. Essa transformação pode simplificar expressões e ajudar a resolver equações.",
        heading: "Casos frequentes",
        points: [
          ["Fator comum", "Coloque em evidência o maior fator compartilhado: 6x + 9 = 3(2x + 3)."],
          ["Agrupamento", "Agrupe termos para encontrar fatores comuns. Por exemplo, ax + ay + bx + by = (a + b)(x + y)."],
          ["Diferença de quadrados", "a² − b² = (a − b)(a + b)."],
          ["Trinômio quadrado perfeito", "a² + 2ab + b² = (a + b)²; a² − 2ab + b² = (a − b)²."]
        ],
        note: "Confira uma fatoração multiplicando os fatores e verificando se o polinômio original reaparece.",
        questions: [
          { text: "Fatore 6x + 9.", choices: ["3(2x + 3)", "6(x + 9)", "3(2x + 9)"], answer: 0 },
          { text: "Fatore x² − 16.", choices: ["(x − 4)²", "(x − 4)(x + 4)", "x(x − 16)"], answer: 1 },
          { text: "Qual é a forma fatorada de x² + 6x + 9?", choices: ["(x + 3)²", "(x − 3)²", "x(x + 9)"], answer: 0 }
        ]
      },
      {
        category: "Álgebra",
        title: "Equações, sistemas e inequações",
        intro: "Uma equação afirma que duas expressões têm o mesmo valor. Resolver é encontrar os valores que tornam a igualdade verdadeira; sistemas combinam equações e inequações usam sinais de comparação.",
        heading: "Do primeiro grau aos sistemas",
        points: [
          ["Equação do primeiro grau", "Isole a incógnita fazendo a mesma operação nos dois lados. Exemplo: 2x + 3 = 11 resulta em x = 4."],
          ["Equação do segundo grau", "Na forma ax² + bx + c = 0, com a ≠ 0, use Bhaskara: Δ = b² − 4ac e x = (−b ± √Δ)/(2a)."],
          ["Sistemas de equações", "Encontre valores que satisfaçam todas as equações. Use substituição ou eliminação; a solução é o ponto de encontro das condições."],
          ["Inequações", "Resolva como uma equação, mas inverta o sinal da desigualdade ao multiplicar ou dividir por número negativo."],
          ["Problemas e sequências", "Defina a incógnita, traduza as informações em equações e confira o resultado no enunciado. Em sequências, identifique o padrão que relaciona os termos."]
        ],
        note: "Ao resolver −2x < 6, dividir por −2 inverte o sinal: x > −3.",
        questions: [
          { text: "Resolva 2x + 3 = 11.", choices: ["x = 4", "x = 7", "x = 14"], answer: 0 },
          { text: "Qual é a fórmula do discriminante de ax² + bx + c = 0?", choices: ["Δ = b² − 4ac", "Δ = a + b + c", "Δ = 4a − bc"], answer: 0 },
          { text: "Ao dividir uma inequação por um número negativo, o sinal:", choices: ["Permanece igual", "É invertido", "Desaparece"], answer: 1 }
        ]
      },
      {
        category: "Funções",
        title: "Conceito, domínio e gráficos",
        intro: "Uma função associa cada elemento do domínio a exatamente um elemento do contradomínio. Ela pode ser representada por uma regra, uma tabela, pares ordenados ou um gráfico.",
        heading: "Lendo uma função",
        points: [
          ["Domínio, contradomínio e imagem", "Domínio: entradas permitidas. Contradomínio: conjunto de possíveis saídas definido para a função. Imagem: saídas que a função realmente assume."],
          ["Plano cartesiano", "Cada ponto tem coordenadas (x, y): x é a abscissa e y é a ordenada. O gráfico mostra como a saída varia com a entrada."],
          ["Interpretação de gráficos", "Observe eixos, escala, unidades, intervalos, interceptos e tendência. O zero ou raiz é o valor de x para o qual f(x) = 0."],
          ["Teste da reta vertical", "Um gráfico representa uma função de x se toda reta vertical o intercepta no máximo uma vez."]
        ],
        note: "Nem todo número do contradomínio precisa pertencer à imagem da função.",
        questions: [
          { text: "O que é o domínio de uma função?", choices: ["O conjunto de entradas permitidas", "Somente os valores máximos", "O conjunto de pontos fora do gráfico"], answer: 0 },
          { text: "Qual é a raiz de f(x) = 2x − 6?", choices: ["x = 2", "x = 3", "x = 6"], answer: 1 },
          { text: "No plano cartesiano, o ponto (−2, 5) tem qual ordenada?", choices: ["−2", "3", "5"], answer: 2 }
        ]
      },
      {
        category: "Funções",
        title: "Função afim e função quadrática",
        intro: "Funções afins e quadráticas modelam situações de variação constante ou curvada. Seus gráficos permitem interpretar raízes, crescimento, decrescimento e valores extremos.",
        heading: "Retas e parábolas",
        points: [
          ["Função afim", "f(x) = ax + b. Seu gráfico é uma reta; a é o coeficiente angular e b é o intercepto no eixo y. Se a > 0, cresce; se a < 0, decresce."],
          ["Raiz da função afim", "Resolva ax + b = 0. A raiz é x = −b/a, quando a ≠ 0."],
          ["Função quadrática", "f(x) = ax² + bx + c, com a ≠ 0. Seu gráfico é uma parábola; o sinal de a indica se ela abre para cima ou para baixo."],
          ["Raízes, vértice e extremos", "As raízes podem ser encontradas pelo discriminante. O vértice ocorre em xᵥ = −b/(2a); para a > 0 há mínimo e para a < 0 há máximo."]
        ],
        note: "Na função afim, a inclinação é constante; na quadrática, a inclinação varia ao longo da parábola.",
        questions: [
          { text: "Na função f(x) = 3x − 2, qual é o coeficiente angular?", choices: ["−2", "2", "3"], answer: 2 },
          { text: "Se a parábola tem a > 0, seu vértice representa:", choices: ["Um valor mínimo", "Um valor máximo", "Uma reta vertical"], answer: 0 },
          { text: "Qual é a raiz de f(x) = 2x + 8?", choices: ["−4", "4", "−8"], answer: 0 }
        ]
      },
      {
        category: "Funções",
        title: "Funções exponenciais e logarítmicas",
        intro: "Funções exponenciais descrevem variações multiplicativas, como crescimento percentual repetido. Logaritmos ajudam a descobrir o expoente necessário para atingir determinado valor.",
        heading: "Crescimento e decrescimento",
        points: [
          ["Função exponencial", "f(x) = aˣ, com a > 0 e a ≠ 1. Se a > 1, a função cresce; se 0 < a < 1, decresce."],
          ["Função logarítmica", "logₐ(x) = y significa aʸ = x. Seu domínio exige x > 0, a > 0 e a ≠ 1."],
          ["Relação entre exponencial e logaritmo", "São funções inversas: aˣ = y equivale a logₐ(y) = x."],
          ["Aplicações", "Modelos exponenciais aparecem em juros compostos, populações e decaimento; a escala logarítmica ajuda a representar grandezas com ampla variação."]
        ],
        note: "Em y = 2ˣ, cada aumento de 1 em x dobra y; já log₂(8) = 3 porque 2³ = 8.",
        questions: [
          { text: "A função 3ˣ é crescente ou decrescente?", choices: ["Crescente", "Decrescente", "Constante"], answer: 0 },
          { text: "Quanto é log₂(8)?", choices: ["2", "3", "4"], answer: 1 },
          { text: "Qual condição faz parte do domínio de logₐ(x)?", choices: ["x > 0", "x < 0", "x = 0"], answer: 0 }
        ]
      },
      {
        category: "Geometria plana",
        title: "Pontos, retas, ângulos e triângulos",
        intro: "A geometria plana estuda figuras em duas dimensões. Pontos, retas e planos são ideias fundamentais para descrever posições, relações e medidas.",
        heading: "Fundamentos e triângulos",
        points: [
          ["Ponto, reta e plano", "Pontos indicam posições; retas se estendem indefinidamente; planos são superfícies planas ilimitadas."],
          ["Ângulos e retas", "Ângulos medem abertura. Retas paralelas não se cruzam; perpendiculares se cruzam formando 90°."],
          ["Triângulos", "A soma dos ângulos internos é 180°. Classifique pelos lados (equilátero, isósceles, escaleno) ou pelos ângulos (acutângulo, retângulo, obtusângulo)."],
          ["Pitágoras", "Em triângulo retângulo, a² + b² = c², em que c é a hipotenusa. Exemplo: lados 3 e 4 dão hipotenusa 5."],
          ["Semelhança e congruência", "Figuras semelhantes têm ângulos iguais e lados proporcionais; congruentes têm mesma forma e mesmas medidas."]
        ],
        note: "O teorema de Pitágoras só se aplica a triângulos retângulos.",
        questions: [
          { text: "Quanto somam os ângulos internos de um triângulo?", choices: ["90°", "180°", "360°"], answer: 1 },
          { text: "Um triângulo retângulo tem catetos 3 e 4. Qual é a hipotenusa?", choices: ["5", "6", "7"], answer: 0 },
          { text: "Retas perpendiculares formam qual ângulo?", choices: ["45°", "90°", "180°"], answer: 1 }
        ]
      },
      {
        category: "Geometria plana",
        title: "Quadriláteros, polígonos, perímetro e área",
        intro: "Polígonos são figuras planas fechadas formadas por segmentos de reta. Perímetro mede o contorno; área mede a superfície ocupada.",
        heading: "Formas e medidas",
        points: [
          ["Quadriláteros", "Quadrado tem quatro lados iguais e ângulos retos; retângulo tem lados opostos iguais e ângulos retos; losango tem quatro lados iguais; paralelogramo tem lados opostos paralelos; trapézio tem um par de lados paralelos."],
          ["Polígonos", "São nomeados pelo número de lados. A soma dos ângulos internos de um polígono convexo de n lados é (n − 2) × 180°."],
          ["Perímetro e áreas", "Some os lados para obter o perímetro. Retângulo: A = base × altura; triângulo: A = base × altura ÷ 2; paralelogramo: A = base × altura; trapézio: A = (base maior + base menor) × altura ÷ 2."],
          ["Circunferência e círculo", "Circunferência é o contorno; círculo é a região interna. Comprimento: C = 2πr. Área: A = πr²."],
          ["Arcos e setores", "Um arco é parte da circunferência; um setor é a região limitada por dois raios e um arco. Para ângulo central θ em graus, área do setor = (θ/360°) × πr²."]
        ],
        note: "Use unidades quadradas para área (cm²) e unidades lineares para perímetro (cm).",
        questions: [
          { text: "Qual é a área de um retângulo de base 5 e altura 3?", choices: ["8", "15", "16"], answer: 1 },
          { text: "Qual fórmula calcula o comprimento da circunferência?", choices: ["πr²", "2πr", "πd²"], answer: 1 },
          { text: "Qual quadrilátero tem exatamente um par de lados paralelos na definição usual?", choices: ["Trapézio", "Losango", "Retângulo"], answer: 0 }
        ]
      },
      {
        category: "Geometria espacial",
        title: "Sólidos geométricos e planificação",
        intro: "A geometria espacial estuda figuras com três dimensões. Planificações mostram as faces de um sólido abertas em um plano.",
        heading: "Prismas, pirâmides e corpos redondos",
        points: [
          ["Prismas e cubos", "Prismas têm duas bases paralelas e congruentes. Cubo é um prisma de faces quadradas iguais; paralelepípedo tem faces em forma de paralelogramo."],
          ["Pirâmides", "Têm uma base poligonal e faces laterais triangulares que se encontram em um vértice."],
          ["Cilindros e cones", "Cilindro tem duas bases circulares paralelas; cone tem uma base circular e um vértice."],
          ["Esferas", "Todos os pontos da superfície estão à mesma distância do centro. Volume: V = 4πr³/3."],
          ["Planificações", "São representações planas das faces que podem ser dobradas para formar um sólido, sem sobreposição."]
        ],
        note: "Identifique as bases e as faces antes de escolher uma fórmula de área ou volume.",
        questions: [
          { text: "Qual sólido tem duas bases circulares paralelas?", choices: ["Cone", "Cilindro", "Pirâmide"], answer: 1 },
          { text: "Qual é a forma das faces laterais de uma pirâmide?", choices: ["Triângulos", "Círculos", "Sempre quadrados"], answer: 0 },
          { text: "O que uma planificação representa?", choices: ["As faces do sólido abertas em um plano", "Somente o volume do sólido", "Uma vista sem medidas"], answer: 0 }
        ]
      },
      {
        category: "Geometria espacial",
        title: "Áreas, volumes e capacidade",
        intro: "A área lateral soma as faces laterais; a área total inclui também as bases. Volume mede o espaço ocupado por um sólido.",
        heading: "Fórmulas essenciais",
        points: [
          ["Prisma e paralelepípedo", "Volume do prisma: área da base × altura. Para um paralelepípedo retângulo, V = comprimento × largura × altura."],
          ["Áreas lateral e total", "A área total soma a área lateral e as bases. Em um prisma reto, a área lateral é o perímetro da base × altura e Aₜ = Aₗ + 2Aᵦ. No cubo, Aₜ = 6a²."],
          ["Cilindro, cone e esfera", "Cilindro: V = πr²h, Aₗ = 2πrh e Aₜ = 2πrh + 2πr². Cone: V = πr²h/3 e Aₗ = πrg, em que g é a geratriz. Esfera: V = 4πr³/3 e área = 4πr²."],
          ["Pirâmide", "V = Aᵦh/3. Em pirâmides regulares, a área lateral é a soma das faces triangulares; Aₜ = Aₗ + Aᵦ."],
          ["Unidades de volume e capacidade", "1 dm³ = 1 L; 1 cm³ = 1 mL; 1 m³ = 1.000 L. Ao converter unidades cúbicas, cada mudança de unidade corresponde a um fator 1.000."]
        ],
        note: "Área usa unidades quadradas e volume, unidades cúbicas. Capacidade costuma ser expressa em litros ou mililitros.",
        questions: [
          { text: "Qual é o volume de um cubo de aresta 3?", choices: ["9", "18", "27"], answer: 2 },
          { text: "Qual volume corresponde a 1 dm³?", choices: ["1 L", "10 L", "100 mL"], answer: 0 },
          { text: "O volume de um cilindro é:", choices: ["πrh", "πr²h", "2πr²h"], answer: 1 }
        ]
      },
      {
        category: "Geometria analítica",
        title: "Coordenadas, distância e ponto médio",
        intro: "A geometria analítica combina álgebra e geometria usando coordenadas. Cada ponto do plano é localizado por um par ordenado (x, y).",
        heading: "Medidas no plano cartesiano",
        points: [
          ["Coordenadas cartesianas", "O primeiro número indica a posição horizontal x; o segundo indica a posição vertical y."],
          ["Distância entre pontos", "Entre A(x₁, y₁) e B(x₂, y₂), d = √[(x₂ − x₁)² + (y₂ − y₁)²]."],
          ["Ponto médio", "O ponto médio do segmento AB é ((x₁ + x₂)/2, (y₁ + y₂)/2)."],
          ["Inclinação e coeficiente angular", "Para uma reta não vertical, m = (y₂ − y₁)/(x₂ − x₁). Ele mede a variação vertical por unidade horizontal."]
        ],
        note: "A inclinação de uma reta vertical não é definida pelo coeficiente angular, pois x₂ − x₁ = 0.",
        questions: [
          { text: "Qual é o ponto médio entre (0, 0) e (4, 2)?", choices: ["(2, 1)", "(4, 1)", "(2, 2)"], answer: 0 },
          { text: "Qual é a distância entre (0, 0) e (3, 4)?", choices: ["5", "7", "12"], answer: 0 },
          { text: "O coeficiente angular mede:", choices: ["A variação de y dividida pela variação de x", "A área sob a reta", "Apenas a posição inicial"], answer: 0 }
        ]
      },
      {
        category: "Geometria analítica",
        title: "Equação e interpretação da reta",
        intro: "Uma reta no plano pode ser descrita por uma equação. Seus coeficientes informam a inclinação e onde ela cruza os eixos.",
        heading: "Formas da equação da reta",
        points: [
          ["Forma reduzida", "y = mx + b, em que m é o coeficiente angular e b é o ponto em que a reta cruza o eixo y."],
          ["Forma geral", "Ax + By + C = 0. Se B ≠ 0, isolando y é possível identificar a inclinação m = −A/B."],
          ["Inclinação pela equação", "Em y = 2x + 1, o coeficiente angular é 2: quando x aumenta 1, y aumenta 2."],
          ["Interseções", "Para encontrar a interseção com o eixo y, faça x = 0. Para encontrar a raiz ou interseção com o eixo x, faça y = 0."]
        ],
        note: "Uma reta com coeficiente angular positivo sobe da esquerda para a direita; com coeficiente negativo, desce.",
        questions: [
          { text: "Na reta y = 3x − 4, qual é o coeficiente angular?", choices: ["−4", "3", "4"], answer: 1 },
          { text: "Onde y = 2x + 1 cruza o eixo y?", choices: ["(0, 1)", "(1, 0)", "(0, 2)"], answer: 0 },
          { text: "Se o coeficiente angular é negativo, a reta:", choices: ["Desce da esquerda para a direita", "Sobe da esquerda para a direita", "É sempre vertical"], answer: 0 }
        ]
      },
      {
        category: "Trigonometria",
        title: "Razões trigonométricas no triângulo retângulo",
        intro: "A trigonometria relaciona os ângulos e os lados dos triângulos. Em um triângulo retângulo, seno, cosseno e tangente dependem do ângulo escolhido.",
        heading: "Seno, cosseno e tangente",
        points: [
          ["Triângulo retângulo", "Tem um ângulo de 90°. A hipotenusa fica oposta ao ângulo reto; os outros dois lados são catetos."],
          ["Seno", "sen(θ) = cateto oposto ÷ hipotenusa."],
          ["Cosseno e tangente", "cos(θ) = cateto adjacente ÷ hipotenusa; tg(θ) = cateto oposto ÷ cateto adjacente."],
          ["Ângulos notáveis", "30°: sen = 1/2, cos = √3/2. 45°: sen = cos = √2/2. 60°: sen = √3/2, cos = 1/2. Use também tg = sen/cos."]
        ],
        note: "Identifique primeiro o ângulo de referência; os catetos oposto e adjacente mudam quando o ângulo escolhido muda.",
        questions: [
          { text: "Como se calcula o seno em um triângulo retângulo?", choices: ["Oposto ÷ hipotenusa", "Adjacente ÷ hipotenusa", "Oposto ÷ adjacente"], answer: 0 },
          { text: "Quanto vale sen(30°)?", choices: ["1/2", "√2/2", "√3/2"], answer: 0 },
          { text: "Qual lado fica oposto ao ângulo de 90°?", choices: ["Cateto adjacente", "Hipotenusa", "Cateto oposto ao ângulo de referência"], answer: 1 }
        ]
      },
      {
        category: "Trigonometria",
        title: "Ciclo trigonométrico e leis dos senos e cossenos",
        intro: "As relações trigonométricas podem ser estendidas a ângulos no ciclo trigonométrico. Em triângulos que não são retângulos, as leis dos senos e dos cossenos ajudam a relacionar lados e ângulos.",
        heading: "Relações e aplicações",
        points: [
          ["Ciclo trigonométrico", "É uma circunferência de raio 1 centrada na origem. O ângulo é medido a partir do eixo x positivo; as coordenadas do ponto são (cos θ, sen θ)."],
          ["Identidade fundamental", "Para qualquer ângulo, sen²(θ) + cos²(θ) = 1. A tangente é tg(θ) = sen(θ)/cos(θ), quando cos(θ) ≠ 0."],
          ["Lei dos senos", "Em qualquer triângulo, a/sen(A) = b/sen(B) = c/sen(C), relacionando cada lado ao seno do ângulo oposto."],
          ["Lei dos cossenos", "c² = a² + b² − 2ab cos(C). É útil quando se conhecem dois lados e o ângulo entre eles, ou os três lados."]
        ],
        note: "As leis dos senos e dos cossenos permitem resolver triângulos oblíquos e têm aplicações em medições indiretas, como estimar alturas e distâncias.",
        questions: [
          { text: "Qual identidade relaciona seno e cosseno no ciclo?", choices: ["sen² θ + cos² θ = 1", "sen θ + cos θ = 0", "sen² θ − cos² θ = 1"], answer: 0 },
          { text: "A lei dos senos relaciona cada lado com:", choices: ["O seno do ângulo oposto", "O cosseno de qualquer ângulo", "O perímetro do triângulo"], answer: 0 },
          { text: "A lei dos cossenos é útil para:", choices: ["Resolver triângulos que não são necessariamente retângulos", "Calcular apenas áreas de círculos", "Somar ângulos de um quadrado"], answer: 0 }
        ]
      },
      {
        category: "Estatística e probabilidade",
        title: "Tabelas, gráficos e medidas de tendência central",
        intro: "A estatística organiza dados para descrever um conjunto e comunicar padrões. Tabelas e gráficos ajudam a visualizar frequências, categorias e mudanças.",
        heading: "Resumindo e interpretando dados",
        points: [
          ["Tabelas e gráficos", "Leia título, legenda, unidades, escala e período. Gráficos de barras comparam categorias; linhas mostram mudanças ao longo do tempo; setores representam partes de um total."],
          ["Média simples", "Some os valores e divida pela quantidade. Para 4, 6 e 8, a média é 6."],
          ["Média ponderada", "Multiplique cada valor por seu peso, some os produtos e divida pela soma dos pesos."],
          ["Moda e mediana", "Moda é o valor mais frequente. Mediana é o valor central após ordenar os dados; com quantidade par, tire a média dos dois centrais."],
          ["Amplitude", "É a diferença entre o maior e o menor valor; indica a extensão dos dados."]
        ],
        note: "A média pode ser afetada por valores extremos; a mediana costuma ser mais resistente a eles.",
        questions: [
          { text: "Qual é a média simples de 4, 6 e 8?", choices: ["6", "18", "8"], answer: 0 },
          { text: "O que é a moda?", choices: ["O valor mais frequente", "O maior valor", "A diferença entre máximo e mínimo"], answer: 0 },
          { text: "Qual gráfico costuma mostrar mudanças ao longo do tempo?", choices: ["Gráfico de linhas", "Gráfico de setores", "Diagrama sem eixos"], answer: 0 }
        ]
      },
      {
        category: "Estatística e probabilidade",
        title: "Variância e desvio padrão",
        intro: "Medidas de dispersão mostram o quanto os dados se espalham ao redor da média. Dois conjuntos podem ter a mesma média e variabilidades bem diferentes.",
        heading: "Dispersão dos dados",
        points: [
          ["Variância", "Calcule a diferença entre cada dado e a média, eleve cada diferença ao quadrado e faça a média desses quadrados. Em amostras, uma convenção comum divide por n − 1."],
          ["Desvio padrão", "É a raiz quadrada da variância e fica na mesma unidade dos dados."],
          ["Interpretação", "Desvio padrão pequeno indica dados mais próximos da média; maior indica maior dispersão."],
          ["Comparação", "Compare a dispersão junto com a média e considere a escala e o contexto dos conjuntos."]
        ],
        note: "A fórmula da variância muda se os dados representam uma população inteira ou uma amostra dela.",
        questions: [
          { text: "O desvio padrão é:", choices: ["A raiz quadrada da variância", "O dobro da média", "Sempre igual à amplitude"], answer: 0 },
          { text: "Um desvio padrão maior geralmente indica:", choices: ["Maior dispersão dos dados", "Que todos os dados são iguais", "Que a média é zero"], answer: 0 },
          { text: "As diferenças em relação à média são elevadas ao quadrado no cálculo da:", choices: ["Moda", "Variância", "Mediana"], answer: 1 }
        ]
      },
      {
        category: "Estatística e probabilidade",
        title: "Contagem, análise combinatória e probabilidade",
        intro: "A análise combinatória conta possibilidades sem precisar listar todas. A probabilidade mede a chance de um evento ocorrer em uma situação aleatória.",
        heading: "Contar e calcular chances",
        points: [
          ["Princípio fundamental da contagem", "Se uma escolha pode ser feita de m formas e outra de n formas, juntas podem ser feitas de m × n formas."],
          ["Permutação, arranjo e combinação", "Permutação ordena todos os elementos: n!. Arranjo escolhe e ordena parte deles: n!/(n−p)!. Combinação escolhe sem considerar a ordem: n!/[p!(n−p)!]."],
          ["Probabilidade", "Em resultados igualmente possíveis, P(A) = casos favoráveis ÷ casos possíveis. O valor fica entre 0 e 1."],
          ["Eventos independentes e dependentes", "Em eventos independentes, a ocorrência de um não altera a chance do outro e P(A e B) = P(A)P(B). Em eventos dependentes, a chance muda; use a probabilidade condicionada."]
        ],
        note: "A ordem importa em arranjos e permutações; não importa em combinações.",
        questions: [
          { text: "Ao escolher 2 pessoas entre 5 sem importar a ordem, usamos:", choices: ["Combinação", "Permutação", "Média ponderada"], answer: 0 },
          { text: "Ao lançar um dado honesto, qual é a probabilidade de sair 6?", choices: ["1/2", "1/6", "5/6"], answer: 1 },
          { text: "Em eventos independentes, P(A e B) é:", choices: ["P(A) × P(B)", "P(A) + P(B) sempre", "Sempre zero"], answer: 0 }
        ]
      },
      {
        category: "Progressões",
        title: "Sequências e progressão aritmética (PA)",
        intro: "Uma sequência é uma lista ordenada de termos que pode seguir um padrão. Na progressão aritmética, a diferença entre termos consecutivos é constante.",
        heading: "Razão, termo geral e soma da PA",
        points: [
          ["Padrões e razão", "Na PA, a razão r = aₙ − aₙ₋₁. Em 3, 7, 11, …, a razão é 4."],
          ["Termo geral", "aₙ = a₁ + (n − 1)r, em que a₁ é o primeiro termo."],
          ["Soma dos termos", "Sₙ = n(a₁ + aₙ)/2."],
          ["Aplicações", "PA modela aumentos ou reduções por uma quantidade fixa em cada etapa."]
        ],
        note: "Uma PA tem diferença constante; não confunda essa diferença com a razão multiplicativa de uma PG.",
        questions: [
          { text: "Qual é a razão da PA 3, 7, 11, 15, …?", choices: ["3", "4", "7"], answer: 1 },
          { text: "Qual é o 5º termo da PA 2, 5, 8, …?", choices: ["11", "14", "17"], answer: 1 },
          { text: "Qual fórmula calcula a soma de uma PA?", choices: ["Sₙ = n(a₁ + aₙ)/2", "Sₙ = a₁ × r", "Sₙ = n² + r"], answer: 0 }
        ]
      },
      {
        category: "Progressões",
        title: "Progressão geométrica (PG)",
        intro: "Na progressão geométrica, cada termo é obtido multiplicando o anterior por uma razão constante. Esse padrão modela crescimento ou redução multiplicativa.",
        heading: "Razão, termo geral e soma da PG",
        points: [
          ["Razão", "Para termos consecutivos não nulos, q = aₙ/aₙ₋₁. Na sequência 2, 6, 18, …, q = 3."],
          ["Termo geral", "aₙ = a₁ × qⁿ⁻¹."],
          ["Soma finita", "Para q ≠ 1, Sₙ = a₁(qⁿ − 1)/(q − 1). Se q = 1, Sₙ = n × a₁."],
          ["Soma infinita", "Quando |q| < 1, a soma infinita converge: S = a₁/(1 − q)."],
          ["Aplicações", "PG aparece em juros compostos, duplicações sucessivas, escalas e processos de decaimento."]
        ],
        note: "PA soma uma diferença fixa a cada etapa; PG multiplica por uma razão fixa.",
        questions: [
          { text: "Qual é a razão da PG 2, 6, 18, …?", choices: ["3", "4", "6"], answer: 0 },
          { text: "Qual é o 4º termo da PG 2, 6, 18, …?", choices: ["36", "54", "72"], answer: 1 },
          { text: "Quando a soma infinita de uma PG converge?", choices: ["Quando |q| < 1", "Quando q > 1", "Para qualquer q"], answer: 0 }
        ]
      }
    ]
  },
  chemistry: {
    name: "Química",
    icon: "⚗️",
    priority: "Prioridade alta",
    parts: [
      {
        category: "Química geral",
        title: "Matéria, energia e misturas",
        intro: "A Química estuda a composição, as propriedades e as transformações da matéria, assim como as trocas de energia que acompanham essas transformações.",
        heading: "Estados, propriedades e separações",
        points: [
          ["Matéria e energia", "Matéria tem massa e ocupa espaço. Energia pode ser transferida ou transformada durante fenômenos físicos e químicos."],
          ["Estados físicos", "Sólidos tendem a manter forma e volume; líquidos mantêm volume e assumem a forma do recipiente; gases se expandem para ocupá-lo."],
          ["Propriedades", "Massa, volume e densidade descrevem amostras; propriedades características ajudam a identificar materiais. Densidade = massa/volume."],
          ["Substâncias e misturas", "Substância pura tem composição definida. Misturas homogêneas apresentam uma fase visível; heterogêneas apresentam duas ou mais fases."],
          ["Fenômenos e separação", "Mudanças de estado costumam ser físicas; reações formam substâncias novas. Filtração, decantação, destilação e centrifugação separam misturas por propriedades distintas."]
        ],
        note: "Escolha o método de separação conforme as propriedades dos componentes, como tamanho de partícula, densidade ou ponto de ebulição.",
        questions: [
          { text: "Uma mistura homogênea apresenta:", choices: ["Uma fase visível", "Sempre duas fases", "Somente substâncias sólidas"], answer: 0 },
          { text: "Como se calcula a densidade?", choices: ["Massa dividida pelo volume", "Volume dividido pela temperatura", "Massa multiplicada pelo tempo"], answer: 0 },
          { text: "Qual método pode separar um sólido insolúvel de um líquido?", choices: ["Filtração", "Fusão nuclear", "Eletrização"], answer: 0 }
        ]
      },
      {
        category: "Estrutura atômica",
        title: "Modelos atômicos, íons e isótopos",
        intro: "Modelos atômicos representam o que experimentos permitem inferir sobre a estrutura da matéria. A composição do núcleo e a distribuição de elétrons explicam propriedades dos elementos.",
        heading: "Número atômico e partículas",
        points: [
          ["Modelos atômicos", "Modelos históricos, de Dalton a descrições quânticas, foram revisados conforme novas observações experimentais."],
          ["Partículas e números", "Prótons têm carga positiva, nêutrons não têm carga e elétrons têm carga negativa. O número atômico Z conta prótons; o número de massa A conta prótons e nêutrons."],
          ["Íons", "Um átomo forma cátion ao perder elétrons e ânion ao ganhá-los; o número de prótons não muda na ionização."],
          ["Isótopos, isóbaros e isótonos", "Isótopos têm mesmo Z e diferentes nêutrons; isóbaros têm mesmo A; isótonos têm mesmo número de nêutrons."],
          ["Distribuição eletrônica", "Elétrons ocupam níveis e subníveis de energia segundo regras quânticas; os elétrons mais externos participam de muitas propriedades químicas."]
        ],
        note: "Para um átomo neutro, número de elétrons = número de prótons. Para um íon, considere também a carga.",
        questions: [
          { text: "Qual partícula muda em número quando um átomo vira íon?", choices: ["Elétron", "Próton", "Nêutron"], answer: 0 },
          { text: "Isótopos de um mesmo elemento possuem o mesmo número de:", choices: ["Prótons", "Nêutrons", "Massa"], answer: 0 },
          { text: "O número de massa A corresponde ao total de:", choices: ["Prótons e nêutrons", "Prótons e elétrons", "Elétrons e nêutrons"], answer: 0 }
        ]
      },
      {
        category: "Tabela periódica",
        title: "Organização e propriedades periódicas",
        intro: "A tabela periódica organiza os elementos pelo número atômico e agrupa elementos com propriedades relacionadas. Tendências periódicas ajudam a prever comportamentos químicos.",
        heading: "Famílias, períodos e tendências",
        points: [
          ["Períodos e famílias", "Linhas horizontais são períodos; colunas são famílias ou grupos, que frequentemente reúnem elementos com propriedades semelhantes."],
          ["Tipos de elementos", "A tabela inclui metais, ametais e gases nobres, além de elementos representativos e de transição."],
          ["Raio atômico", "Em tendências gerais, o raio diminui ao longo de um período e aumenta ao descer um grupo, com ressalvas ligadas à estrutura eletrônica."],
          ["Eletronegatividade e ionização", "Eletronegatividade descreve atração por elétrons em ligações. Energia de ionização é a energia necessária para remover um elétron; afinidade eletrônica descreve a variação energética associada ao ganho de elétron."]
        ],
        note: "Tendências periódicas são padrões gerais; consulte a posição do elemento e o contexto antes de comparar propriedades.",
        questions: [
          { text: "Como são chamadas as colunas da tabela periódica?", choices: ["Famílias ou grupos", "Períodos", "Isótopos"], answer: 0 },
          { text: "A energia de ionização se relaciona à energia necessária para:", choices: ["Remover um elétron", "Fundir dois núcleos", "Separar uma mistura por filtração"], answer: 0 },
          { text: "Elementos de uma mesma família frequentemente apresentam:", choices: ["Propriedades químicas relacionadas", "O mesmo número de massa", "O mesmo número de nêutrons"], answer: 0 }
        ]
      },
      {
        category: "Ligações químicas",
        title: "Ligações, geometria e forças intermoleculares",
        intro: "Ligações químicas descrevem interações que mantêm átomos unidos em substâncias. A estrutura e a distribuição de cargas influenciam forma, polaridade e propriedades dos materiais.",
        heading: "Como átomos e moléculas interagem",
        points: [
          ["Ligação iônica", "Atração entre íons de cargas opostas, frequentemente formada após transferência de elétrons entre átomos."],
          ["Ligação covalente", "Átomos compartilham pares de elétrons; estruturas de Lewis representam os elétrons de valência e ligações."],
          ["Ligação metálica", "Em metais, elétrons deslocalizados ajudam a explicar condução elétrica, brilho e maleabilidade."],
          ["Geometria e polaridade", "A disposição de regiões eletrônicas influencia a geometria molecular. Polaridade depende das ligações e da geometria total da molécula."],
          ["Forças intermoleculares", "Interações entre moléculas incluem forças de dispersão, dipolo-dipolo e ligações de hidrogênio, que afetam propriedades como ebulição."]
        ],
        note: "Uma molécula pode ter ligações polares e ainda ser apolar se sua geometria cancelar os dipolos.",
        questions: [
          { text: "Na ligação covalente, átomos geralmente:", choices: ["Compartilham pares de elétrons", "Compartilham prótons", "Perdem todos os nêutrons"], answer: 0 },
          { text: "A polaridade molecular depende:", choices: ["Das ligações e da geometria", "Somente da massa da amostra", "Apenas da cor da substância"], answer: 0 },
          { text: "Pontes de hidrogênio são um tipo de:", choices: ["Interação intermolecular", "Partícula subatômica", "Reação de fissão"], answer: 0 }
        ]
      },
      {
        category: "Funções inorgânicas",
        title: "Ácidos, bases, sais, óxidos e pH",
        intro: "Funções inorgânicas agrupam substâncias por propriedades e comportamentos químicos. Ácidos, bases, sais e óxidos aparecem em processos naturais, produtos e reações.",
        heading: "Propriedades e neutralização",
        points: [
          ["Ácidos e bases", "Em água, modelos diferentes descrevem ácidos como doadores de prótons ou produtores de H₃O⁺ e bases como receptoras de prótons ou produtoras de OH⁻."],
          ["Sais e óxidos", "Sais são compostos iônicos; óxidos são compostos binários em que o oxigênio se liga a outro elemento, com exceções de nomenclatura e comportamento."],
          ["Nomenclatura", "Nomes de compostos seguem regras que consideram composição, cargas e estados de oxidação; a fórmula indica proporções dos elementos."],
          ["Indicadores, pH e pOH", "Indicadores mudam de cor conforme o meio. Em soluções aquosas diluídas, pH relaciona-se à concentração de H₃O⁺ e pOH à de OH⁻."],
          ["Neutralização e ambiente", "Reações ácido-base podem formar água e sal. Emissões que originam ácidos na atmosfera contribuem para a chuva ácida."]
        ],
        note: "pH abaixo de 7 indica meio ácido e acima de 7, básico em condições usuais; a interpretação depende da temperatura e do sistema.",
        questions: [
          { text: "Uma reação de neutralização ácido-base pode formar:", choices: ["Água e sal", "Somente elétrons", "Sempre um metal puro"], answer: 0 },
          { text: "Em condições usuais, pH menor que 7 indica meio:", choices: ["Ácido", "Básico", "Sem água necessariamente"], answer: 0 },
          { text: "Qual instrumento pode indicar uma faixa aproximada de pH pela cor?", choices: ["Indicador ácido-base", "Balança", "Peneira"], answer: 0 }
        ]
      },
      {
        category: "Reações químicas",
        title: "Equações, balanceamento e oxirredução",
        intro: "Reações químicas reorganizam átomos e ligações, formando produtos a partir de reagentes. Equações balanceadas representam a conservação dos átomos.",
        heading: "Tipos de reação e NOX",
        points: [
          ["Equações químicas", "Reagentes aparecem antes da seta e produtos depois; fórmulas e estados físicos comunicam a transformação."],
          ["Balanceamento", "Ajuste coeficientes para conservar a quantidade de átomos de cada elemento. Não altere os índices das fórmulas ao balancear."],
          ["Tipos de reação", "Síntese forma substâncias mais complexas; decomposição divide compostos; simples troca e dupla troca reorganizam participantes."],
          ["Oxidação e redução", "Oxidação envolve perda de elétrons ou aumento do número de oxidação; redução envolve ganho de elétrons ou diminuição do NOX."],
          ["Número de oxidação", "NOX é uma ferramenta contábil para acompanhar elétrons em compostos e identificar espécies oxidadas e reduzidas."]
        ],
        note: "Em uma reação redox, oxidação e redução ocorrem juntas.",
        questions: [
          { text: "Ao balancear uma equação, o que se ajusta?", choices: ["Coeficientes", "Índices das fórmulas", "Símbolos dos elementos"], answer: 0 },
          { text: "Oxidação corresponde, em termos de elétrons, à:", choices: ["Perda de elétrons", "Ganho de elétrons", "Ausência de mudança sempre"], answer: 0 },
          { text: "Em uma reação, deve-se conservar o número de átomos de cada elemento para respeitar:", choices: ["A conservação da matéria", "A lei da gravidade", "A nomenclatura"], answer: 0 }
        ]
      },
      {
        category: "Estequiometria",
        title: "Mol, massa molar e cálculos químicos",
        intro: "A estequiometria usa equações balanceadas para relacionar quantidades de reagentes e produtos. O mol conecta a escala microscópica à massa que pode ser medida.",
        heading: "Quantidades de substância",
        points: [
          ["Massa atômica e molecular", "Massas relativas dos átomos permitem calcular massas de moléculas ou unidades de fórmula somando as contribuições dos elementos."],
          ["Mol e número de Avogadro", "Um mol contém aproximadamente 6,022 × 10²³ entidades elementares; indique se são átomos, moléculas, íons ou outras entidades."],
          ["Massa molar", "É a massa por mol, expressa normalmente em g/mol. n = m/M relaciona quantidade em mol, massa e massa molar."],
          ["Cálculo estequiométrico", "Use os coeficientes da equação balanceada como proporções em mol e converta para massa ou outra grandeza conforme necessário."],
          ["Limitante, excesso, rendimento e pureza", "O reagente limitante termina primeiro. Excesso sobra; rendimento compara produto obtido com o teórico; pureza indica a fração efetiva de uma amostra."]
        ],
        note: "Sempre balanceie a equação antes de usar os coeficientes nas proporções estequiométricas.",
        questions: [
          { text: "Quantas entidades há em aproximadamente 1 mol?", choices: ["6,022 × 10²³", "6,022 × 10³", "1.000"], answer: 0 },
          { text: "Qual relação calcula a quantidade de matéria a partir da massa?", choices: ["n = m/M", "n = M/m²", "n = m + M"], answer: 0 },
          { text: "Qual reagente limita a quantidade máxima de produto?", choices: ["O que se esgota primeiro", "O que está em excesso", "Sempre o de maior massa"], answer: 0 }
        ]
      },
      {
        category: "Soluções",
        title: "Solubilidade e concentração",
        intro: "Soluções são misturas homogêneas formadas por soluto e solvente. Sua composição pode ser descrita por concentração e alterada por diluição ou mistura.",
        heading: "Preparo e análise de soluções",
        points: [
          ["Soluto e solvente", "Soluto é a substância dispersa; solvente é o meio que dissolve. Soluções podem ser insaturadas, saturadas ou, em condições específicas, supersaturadas."],
          ["Solubilidade", "Indica quanto soluto pode dissolver em certas condições, como temperatura e pressão; diferentes substâncias apresentam comportamentos distintos."],
          ["Concentração comum e molar", "Concentração comum C = massa do soluto/volume da solução. Molaridade = quantidade de soluto em mol/volume da solução em litros."],
          ["Diluição e mistura", "Na diluição, adicionar solvente reduz a concentração sem alterar a quantidade de soluto; para o mesmo soluto, C₁V₁ = C₂V₂."],
          ["Titulação e propriedades coligativas", "Titulação estima concentração por reação com solução conhecida. Propriedades coligativas dependem do número de partículas dissolvidas, não apenas de sua identidade."]
        ],
        note: "Ao usar fórmulas de concentração, confira as unidades de massa, volume e quantidade de matéria.",
        questions: [
          { text: "Em uma solução, o soluto é:", choices: ["A substância dissolvida", "Sempre o recipiente", "O volume total necessariamente"], answer: 0 },
          { text: "Na diluição com solvente, a quantidade de soluto permanece:", choices: ["A mesma", "Sempre zero", "Duplicada automaticamente"], answer: 0 },
          { text: "A molaridade relaciona quantidade de soluto com:", choices: ["Volume da solução", "Massa do recipiente", "Temperatura do laboratório apenas"], answer: 0 }
        ]
      },
      {
        category: "Físico-química",
        title: "Termoquímica e lei de Hess",
        intro: "A termoquímica analisa transferências de energia em reações. A variação de entalpia ajuda a descrever o calor absorvido ou liberado a pressão constante.",
        heading: "Energia das reações",
        points: [
          ["Endotérmica e exotérmica", "Reação endotérmica absorve energia do entorno; exotérmica libera energia para o entorno."],
          ["Entalpia", "A variação ΔH compara entalpias de produtos e reagentes. Em convenção usual, ΔH < 0 indica processo exotérmico e ΔH > 0, endotérmico."],
          ["Lei de Hess", "A variação total de entalpia depende dos estados inicial e final; some equações termoquímicas ajustadas para obter a reação desejada."],
          ["Ligações e energia", "Romper ligações requer energia; formar ligações libera energia. O balanço desses processos contribui para a variação energética."]
        ],
        note: "Ao inverter uma equação termoquímica, inverta o sinal de ΔH; ao multiplicá-la, multiplique ΔH pelo mesmo fator.",
        questions: [
          { text: "Uma reação exotérmica:", choices: ["Libera energia para o entorno", "Absorve sempre toda energia do entorno", "Não envolve energia"], answer: 0 },
          { text: "Na convenção usual, qual sinal de ΔH indica processo exotérmico?", choices: ["Negativo", "Positivo", "Sempre zero"], answer: 0 },
          { text: "A lei de Hess permite somar equações porque ΔH depende:", choices: ["Dos estados inicial e final", "Da ordem das etapas somente", "Do tamanho do recipiente"], answer: 0 }
        ]
      },
      {
        category: "Físico-química",
        title: "Cinética e equilíbrio químico",
        intro: "A cinética química estuda a velocidade das reações. O equilíbrio descreve um estado dinâmico em que velocidades direta e inversa se igualam em um sistema fechado.",
        heading: "Velocidade, catalisadores e equilíbrio",
        points: [
          ["Velocidade das reações", "A velocidade depende de fatores como concentração, temperatura, superfície de contato e natureza dos reagentes."],
          ["Catalisadores", "Fornecem um caminho de menor energia de ativação e aceleram a chegada ao equilíbrio sem serem consumidos de forma permanente."],
          ["Equilíbrio e constante", "No equilíbrio químico, as velocidades direta e inversa são iguais. A constante K expressa a relação entre quantidades de produtos e reagentes no equilíbrio, conforme a equação."],
          ["Le Chatelier", "Quando um sistema em equilíbrio sofre perturbação, sua composição se ajusta de modo a atenuar o efeito da mudança, como alteração de concentração, pressão ou temperatura."]
        ],
        note: "No equilíbrio, as concentrações ficam constantes ao longo do tempo, mas as reações microscópicas continuam ocorrendo.",
        questions: [
          { text: "Um catalisador geralmente:", choices: ["Aumenta a velocidade da reação", "Muda a identidade dos átomos", "Impede a reação direta"], answer: 0 },
          { text: "No equilíbrio químico, as velocidades direta e inversa são:", choices: ["Iguais", "Sempre nulas", "Necessariamente infinitas"], answer: 0 },
          { text: "O princípio de Le Chatelier descreve a resposta do equilíbrio a:", choices: ["Perturbações no sistema", "Mudanças na tabela periódica", "Alterações no número atômico"], answer: 0 }
        ]
      },
      {
        category: "Eletroquímica",
        title: "Pilhas, eletrólise e corrosão",
        intro: "A eletroquímica relaciona reações de oxidação e redução com energia elétrica. Pilhas produzem corrente a partir de reações espontâneas; eletrólise usa energia elétrica para promover transformações.",
        heading: "Células e aplicações",
        points: [
          ["Oxirredução e potencial", "Transferência de elétrons envolve oxidação e redução. Potenciais de eletrodo ajudam a estimar a tendência de uma reação eletroquímica."],
          ["Pilhas e células", "Em uma pilha galvânica, a reação espontânea converte energia química em elétrica. Os eletrodos e o circuito permitem o fluxo de elétrons e íons."],
          ["Eletrólise", "Uma fonte externa força uma reação não espontânea; aplicações incluem obtenção e revestimento de materiais."],
          ["Corrosão", "É a degradação de materiais por reações químicas ou eletroquímicas com o ambiente; revestimentos e proteção catódica podem reduzi-la."],
          ["Baterias e indústria", "Baterias armazenam energia química reversivelmente em diferentes graus; células eletroquímicas são usadas em transporte, eletrônica e processos industriais."]
        ],
        note: "Oxidação ocorre no ânodo e redução no cátodo; em pilhas e células eletrolíticas, os sinais dos eletrodos diferem.",
        questions: [
          { text: "Uma pilha galvânica transforma principalmente:", choices: ["Energia química em elétrica", "Energia sonora em química", "Luz em massa"], answer: 0 },
          { text: "A eletrólise utiliza:", choices: ["Energia elétrica para impulsionar reação", "Somente gravidade", "Nenhum circuito"], answer: 0 },
          { text: "A corrosão é um processo de:", choices: ["Degradação química ou eletroquímica", "Congelamento de toda solução", "Separação por peneiração"], answer: 0 }
        ]
      },
      {
        category: "Química orgânica",
        title: "Carbono e hidrocarbonetos",
        intro: "A Química Orgânica estuda compostos de carbono. As ligações do carbono permitem grande diversidade de cadeias e estruturas.",
        heading: "Cadeias, classificação e nomenclatura",
        points: [
          ["Cadeias carbônicas", "Podem ser abertas ou cíclicas, normais ou ramificadas, saturadas ou insaturadas e homogêneas ou heterogêneas."],
          ["Hidrocarbonetos", "Contêm carbono e hidrogênio. Alcanos têm ligações simples; alcenos têm pelo menos uma dupla; alcinos têm pelo menos uma tripla."],
          ["Aromáticos", "Incluem estruturas cíclicas conjugadas, como o benzeno; sua estabilidade e reatividade diferem das cadeias abertas simples."],
          ["Nomenclatura", "O nome considera tamanho da cadeia principal, tipo de ligação e ramificações, seguindo regras sistemáticas."],
          ["Isomeria", "Isômeros têm mesma fórmula molecular e diferentes estruturas ou arranjos espaciais; isso pode alterar suas propriedades."]
        ],
        note: "Uma diferença estrutural entre isômeros pode resultar em propriedades e comportamentos distintos.",
        questions: [
          { text: "Qual classe de hidrocarboneto apresenta ligação dupla entre carbonos?", choices: ["Alceno", "Alcano", "Sal"], answer: 0 },
          { text: "Compostos orgânicos são caracterizados principalmente por estruturas que contêm:", choices: ["Carbono", "Hélio", "Somente sódio"], answer: 0 },
          { text: "Isômeros têm:", choices: ["Mesma fórmula molecular e estruturas diferentes", "Sempre fórmulas moleculares diferentes", "Sempre as mesmas propriedades"], answer: 0 }
        ]
      },
      {
        category: "Química orgânica",
        title: "Funções orgânicas e reações",
        intro: "Grupos funcionais classificam compostos orgânicos por padrões de ligação e ajudam a prever propriedades e reações. Polímeros são moléculas grandes construídas a partir de unidades menores.",
        heading: "Compostos e transformações orgânicas",
        points: [
          ["Álcoois e fenóis", "Álcoois têm grupo hidroxila ligado a carbono saturado; fenóis têm hidroxila ligada diretamente a anel aromático."],
          ["Aldeídos, cetonas e ácidos", "Aldeídos e cetonas contêm carbonila em posições distintas; ácidos carboxílicos têm grupo carboxila."],
          ["Ésteres e éteres", "Ésteres contêm grupo derivado de ácido carboxílico e álcool; éteres têm oxigênio entre dois grupos carbônicos."],
          ["Aminas e amidas", "Aminas são derivadas da amônia com substituintes orgânicos; amidas possuem grupo carbonila ligado a nitrogênio."],
          ["Reações e polímeros", "Reações orgânicas podem adicionar, substituir, eliminar ou reorganizar grupos. Polímeros são formados por repetição de unidades menores."]
        ],
        note: "Identificar o grupo funcional é um primeiro passo para nomear e compreender propriedades de um composto orgânico.",
        questions: [
          { text: "Qual função contém o grupo carboxila?", choices: ["Ácido carboxílico", "Éter", "Alcano"], answer: 0 },
          { text: "Um polímero é formado por:", choices: ["Unidades estruturais repetidas", "Somente um átomo isolado", "Uma mistura sem ligações"], answer: 0 },
          { text: "Aldeídos e cetonas possuem qual grupo característico?", choices: ["Carbonila", "Cloreto metálico", "Fosfato"], answer: 0 }
        ]
      },
      {
        category: "Química ambiental",
        title: "Poluição, clima e química verde",
        intro: "A Química Ambiental investiga substâncias e transformações no ar, na água e no solo. Compreender fontes e efeitos ajuda a planejar prevenção, tratamento e uso responsável de recursos.",
        heading: "Ambiente, resíduos e energia",
        points: [
          ["Atmosfera e clima", "Poluentes atmosféricos afetam a qualidade do ar. Gases de efeito estufa retêm parte da energia térmica; emissões humanas intensificam o aquecimento global."],
          ["Camada de ozônio e chuva ácida", "Certas substâncias destroem ozônio estratosférico. Óxidos de enxofre e nitrogênio podem formar ácidos atmosféricos e contribuir para chuva ácida."],
          ["Água, esgoto e solo", "Tratamento de água remove contaminantes para torná-la adequada ao uso; tratamento de esgoto reduz a carga de poluentes antes da devolução ao ambiente."],
          ["Resíduos e reciclagem", "Reduzir consumo, reutilizar materiais, reciclar e destinar resíduos corretamente diminui impactos sobre solo e água."],
          ["Indústria, combustíveis e química verde", "Processos industriais podem gerar emissões, efluentes e resíduos. Combustíveis fósseis e biocombustíveis têm diferentes fontes e impactos; a química verde busca reduzir resíduos, riscos e consumo de recursos."]
        ],
        note: "Avalie impactos ao longo de todo o ciclo de vida de um produto, da obtenção da matéria-prima ao descarte.",
        questions: [
          { text: "O tratamento de esgoto busca:", choices: ["Reduzir poluentes antes da devolução ao ambiente", "Aumentar resíduos nos rios", "Produzir plástico automaticamente"], answer: 0 },
          { text: "O aquecimento global recente é intensificado principalmente por:", choices: ["Aumento de gases de efeito estufa", "Ausência completa de atmosfera", "Redução da gravidade"], answer: 0 },
          { text: "Uma meta da química verde é:", choices: ["Reduzir resíduos e riscos", "Aumentar desperdício", "Ignorar o uso de recursos"], answer: 0 }
        ]
      }
    ]
  },
  history: {
    name: "História",
    icon: "🏛️",
    parts: [{
      category: "Idade Moderna",
      title: "Renascimento",
      intro: "O Renascimento foi um período de renovação das artes e dos estudos, inspirado também por ideias da Antiguidade greco-romana. Começou na Itália por volta do século XIV e se espalhou pela Europa.",
      heading: "Ideias e transformações",
      points: [
        ["Humanismo", "Valorizava o estudo, a capacidade humana e a leitura de textos clássicos."],
        ["Arte e ciência", "Artistas estudaram anatomia e perspectiva; a observação ganhou importância."],
        ["Imprensa", "A impressão de livros ajudou a difundir textos e novas ideias."],
        ["Mecenas", "Pessoas e instituições com recursos financiaram artistas, arquitetos e estudiosos."]
      ],
      note: "As mudanças renascentistas se espalharam gradualmente e ocorreram de maneiras diferentes em cada região.",
      questions: [
        { text: "Em qual região o Renascimento começou?", choices: ["Itália", "Noruega", "Egito"], answer: 0 },
        { text: "O que ajudou a ampliar a circulação de livros?", choices: ["A bússola", "A imprensa", "A máquina a vapor"], answer: 1 },
        { text: "O que os mecenas faziam?", choices: ["Financiavam artistas e estudiosos", "Escreviam todos os livros", "Encerravam o comércio"], answer: 0 }
      ]
    },
    {
      category: "História Geral",
      title: "Pré-História e Antiguidade",
      intro: "O estudo das primeiras sociedades acompanha transformações no modo de vida, na produção de alimentos e na organização de cidades e Estados.",
      heading: "Da agricultura às primeiras civilizações",
      points: [
        ["Pré-História, Paleolítico e Neolítico", "No Paleolítico, grupos humanos viviam principalmente da caça, pesca e coleta. No Neolítico, agricultura, domesticação de animais e sedentarização transformaram as comunidades."],
        ["Revolução Agrícola", "O cultivo e a criação de animais favoreceram excedentes, crescimento populacional, divisão de trabalho e formação de assentamentos."],
        ["Antiguidade Oriental", "Sociedades da Mesopotâmia e do Egito organizaram cidades, Estados, escrita, comércio e sistemas religiosos ligados a seus ambientes."],
        ["Hebreus, fenícios e persas", "Hebreus desenvolveram uma tradição religiosa monoteísta; fenícios se destacaram no comércio marítimo e em um alfabeto; persas construíram um vasto império."],
        ["Grécia Antiga", "Cidades-Estado como Atenas e Esparta tiveram modelos políticos distintos. A cultura grega influenciou filosofia, teatro e política."],
        ["Roma Antiga e crise imperial", "Roma passou por monarquia, república e império. Crises políticas, econômicas e militares contribuíram para a queda do Império Romano do Ocidente."]
      ],
      note: "A agricultura surgiu em diferentes regiões e épocas; não foi uma única revolução simultânea no mundo todo."
    },
    {
      category: "Idade Média",
      title: "Feudalismo, Igreja e mundo medieval",
      intro: "A Idade Média europeia foi diversa e mudou ao longo dos séculos. Relações rurais, poderes locais e instituições religiosas tiveram grande importância, ao lado de sociedades urbanas e comerciais.",
      heading: "Sociedade e transformações medievais",
      points: [
        ["Feudalismo e sociedade medieval", "A produção rural e relações de dependência organizavam muitas regiões da Europa. A sociedade era hierarquizada, mas variava conforme lugar e período."],
        ["Igreja Católica", "A Igreja era uma instituição religiosa e política influente, participante da cultura, da educação e da organização social."],
        ["Império Bizantino e expansão islâmica", "O Império Bizantino preservou tradições greco-romanas no Oriente. A expansão islâmica conectou sociedades por vastas regiões da Ásia, África e Europa."],
        ["Cruzadas e contatos", "As Cruzadas foram expedições religiosas e militares que também envolveram disputas políticas, comércio e contatos entre povos."],
        ["Renascimento comercial e urbano", "Comércio e cidades cresceram em várias regiões; novos grupos urbanos e atividades artesanais ganharam espaço."],
        ["Crise do feudalismo e Peste Negra", "Crises agrícolas, conflitos, mudanças econômicas e a peste do século XIV transformaram profundamente a população e as relações feudais."]
      ],
      note: "Evite tratar a Idade Média como um período uniforme ou simplesmente como uma época sem conhecimento e cidades."
    },
    {
      category: "Idade Moderna",
      title: "Reformas, absolutismo e expansão europeia",
      intro: "A Idade Moderna reuniu mudanças políticas, religiosas, econômicas e culturais. A formação de Estados centralizados coexistiu com disputas e expansões imperiais.",
      heading: "Religião, poder e comércio",
      points: [
        ["Humanismo e Renascimento Cultural", "Valorizaram estudos clássicos e capacidades humanas; novas técnicas e patrocínio transformaram as artes e a produção intelectual."],
        ["Reforma e Contrarreforma", "A Reforma Protestante contestou práticas e autoridades da Igreja ocidental. A Contrarreforma reorganizou a Igreja Católica e respondeu a essas mudanças."],
        ["Absolutismo e mercantilismo", "Monarquias centralizaram poderes em diferentes graus. Políticas mercantilistas buscavam fortalecer o Estado por meio do comércio e da exploração colonial."],
        ["Grandes Navegações e colonialismo", "A expansão marítima europeia conectou continentes, estabeleceu impérios coloniais e intensificou exploração, escravização e trocas desiguais."],
        ["Revolução Científica e Iluminismo", "Novos métodos de observação e debate sobre razão, direitos e governo desafiaram explicações e autoridades tradicionais."]
      ],
      note: "As mudanças modernas ocorreram em ritmos diferentes e foram acompanhadas de violência colonial e resistência."
    },
    {
      category: "Idade Moderna",
      title: "Revoluções e novas sociedades",
      intro: "Entre os séculos XVII e XIX, revoluções políticas e industriais alteraram instituições, produção e relações de poder em diversas partes do mundo.",
      heading: "Revoluções políticas e industriais",
      points: [
        ["Revoluções Inglesas", "Conflitos do século XVII limitaram o poder monárquico e redefiniram relações entre Parlamento e Coroa."],
        ["Revolução Industrial", "A mecanização e a produção fabril mudaram o trabalho, as cidades, os transportes e a economia, com impactos sociais profundos."],
        ["Independência dos Estados Unidos", "As colônias britânicas da América do Norte romperam com a metrópole e formaram uma república, mantendo contradições como a escravidão."],
        ["Revolução Francesa", "A derrubada da ordem monárquica e os conflitos revolucionários difundiram debates sobre cidadania, direitos e soberania."],
        ["Era Napoleônica", "Guerras e reformas napoleônicas remodelaram territórios e instituições europeias, com efeitos duradouros sobre a política."]
      ],
      note: "Declarações de direitos e ideias de cidadania coexistiram com exclusões sociais e coloniais."
    },
    {
      category: "Idade Contemporânea",
      title: "Revoluções, guerras e regimes políticos",
      intro: "A contemporaneidade foi marcada por industrialização, nacionalismos, imperialismos, revoluções e guerras que reorganizaram fronteiras e sociedades.",
      heading: "Conflitos e transformações globais",
      points: [
        ["Revoluções liberais e imperialismo", "Movimentos liberais contestaram ordens políticas; potências industrializadas ampliaram o domínio imperial e neocolonial na África e na Ásia."],
        ["Primeira Guerra e Revolução Russa", "A guerra de 1914–1918 transformou impérios e sociedades. A Revolução Russa derrubou o czarismo e levou à criação de um Estado socialista."],
        ["Crise de 1929, fascismo e nazismo", "A crise econômica ampliou desemprego e instabilidade. Regimes fascistas e nazistas impuseram autoritarismo, perseguições e militarização."],
        ["Segunda Guerra Mundial", "O conflito global causou destruição em massa e Holocausto, terminou em 1945 e foi seguido pela criação de novas instituições internacionais."],
        ["Guerra Fria e descolonização", "EUA e URSS disputaram influência sem guerra direta entre as superpotências; muitos países da África e da Ásia conquistaram independência."],
        ["Revolução Cubana e ditaduras latino-americanas", "Mudanças revolucionárias e regimes autoritários marcaram diferentes países; ditaduras envolveram repressão e violações de direitos."]
      ],
      note: "A Guerra Fria teve conflitos indiretos e impactos locais; não foi uma guerra direta permanente entre EUA e URSS."
    },
    {
      category: "Idade Contemporânea",
      title: "Globalização e conflitos contemporâneos",
      intro: "O mundo contemporâneo é interligado por fluxos de comércio, informação, pessoas e capital, mas também marcado por desigualdades e disputas regionais.",
      heading: "Uma ordem mundial em transformação",
      points: [
        ["Globalização", "Intensifica conexões econômicas, culturais e tecnológicas, sem eliminar desigualdades ou fronteiras."],
        ["Nova ordem mundial", "Após a Guerra Fria, as relações de poder se reorganizaram; a distribuição de influência permanece dinâmica e disputada."],
        ["Conflitos contemporâneos", "Conflitos podem envolver disputas territoriais, recursos, identidades, intervenções e crises humanitárias; analise múltiplas perspectivas e evidências."],
        ["Descolonização e memória", "As independências e legados coloniais continuam influenciando instituições, fronteiras e desigualdades."]
      ],
      note: "Ao estudar conflitos atuais, diferencie fatos verificados, interpretações e propaganda."
    },
    {
      category: "História do Brasil",
      title: "Povos originários, colonização e economia colonial",
      intro: "A história do Brasil começa muito antes da chegada portuguesa e inclui a diversidade de povos indígenas, a colonização e as profundas disputas por território e trabalho.",
      heading: "Formação da sociedade colonial",
      points: [
        ["Povos indígenas e chegada portuguesa", "Povos originários constituíam sociedades diversas. A chegada portuguesa iniciou invasão, alianças, disputas e processos de colonização."],
        ["Brasil Colônia e administração", "Capitanias hereditárias e governo-geral foram formas de administração portuguesa, com resultados e poderes desiguais."],
        ["Açúcar e escravidão", "A economia açucareira usou trabalho escravizado indígena e, em escala crescente, africano, sustentando exploração e violência."],
        ["Quilombos e resistências", "Pessoas escravizadas resistiram de diversas formas; quilombos foram comunidades de resistência e construção de autonomia."],
        ["Invasões holandesas e bandeirantismo", "Disputas europeias atingiram o território colonial. Expedições bandeirantes avançaram pelo interior, contribuindo para expansão territorial e violência contra indígenas."]
      ],
      note: "Povos indígenas e africanos escravizados foram agentes históricos, não apenas grupos passivos nas narrativas coloniais."
    },
    {
      category: "História do Brasil",
      title: "Mineração, revoltas e Independência",
      intro: "A mineração, as tensões coloniais e as mudanças políticas no início do século XIX contribuíram para novas formas de organização do território brasileiro.",
      heading: "Da crise colonial ao Império",
      points: [
        ["Mineração e sociedade", "A extração de ouro e diamantes deslocou atividades econômicas, estimulou urbanização e aumentou a fiscalização portuguesa."],
        ["Revoltas coloniais", "Inconfidência Mineira e Conjuração Baiana expressaram críticas ao domínio colonial, com participantes, projetos e bases sociais diferentes."],
        ["Família real no Brasil", "A transferência da corte portuguesa em 1808 alterou instituições e relações comerciais na colônia."],
        ["Independência e Primeiro Reinado", "A independência de 1822 criou o Império do Brasil, mas manteve a escravidão e concentrou conflitos políticos."]
      ],
      note: "A Independência rompeu vínculos políticos com Portugal, mas não eliminou desigualdades estruturais."
    },
    {
      category: "História do Brasil",
      title: "Brasil Império, abolição e República",
      intro: "O período imperial envolveu disputas regionais, construção do Estado e escravidão. Sua crise culminou na abolição e na Proclamação da República.",
      heading: "Do Período Regencial à República Velha",
      points: [
        ["Período Regencial", "Revoltas regenciais refletiram tensões regionais, sociais e políticas durante a menoridade de Pedro II."],
        ["Segundo Reinado e Guerra do Paraguai", "O Segundo Reinado consolidou instituições imperiais enquanto a escravidão persistia; a Guerra do Paraguai envolveu países da região e grandes perdas humanas."],
        ["Abolição da escravidão", "A abolição em 1888 resultou de resistências negras e movimentos abolicionistas; não foi acompanhada de reparação ou igualdade social."],
        ["Proclamação e República Velha", "A República foi proclamada em 1889. A política do café com leite e o coronelismo descrevem mecanismos de poder oligárquico, embora não expliquem toda a política do período."]
      ],
      note: "A abolição legal não encerrou o racismo nem garantiu acesso igualitário a terra, educação e trabalho."
    },
    {
      category: "História do Brasil",
      title: "Era Vargas, ditadura e Brasil contemporâneo",
      intro: "No século XX, o Brasil passou por centralização política, industrialização, ditadura e redemocratização. A Constituição de 1988 marcou a reconstrução democrática.",
      heading: "Política brasileira no século XX e XXI",
      points: [
        ["Era Vargas e Estado Novo", "Vargas governou em períodos distintos; o Estado Novo foi uma ditadura com centralização, censura e políticas trabalhistas."],
        ["Populismo e governo JK", "Governos eleitos buscaram apoio popular por diferentes estratégias. JK promoveu industrialização e construção de Brasília, junto a custos e desigualdades."],
        ["Ditadura Militar", "De 1964 a 1985, o regime autoritário restringiu direitos, censurou e perseguiu opositores, ao mesmo tempo que promoveu mudanças econômicas."],
        ["Redemocratização e Constituição de 1988", "Mobilizações civis e negociações encerraram a ditadura; a Constituição de 1988 ampliou garantias e direitos democráticos."],
        ["Brasil contemporâneo", "O país enfrenta debates sobre democracia, desigualdade, direitos, economia e meio ambiente; fontes confiáveis ajudam a interpretar mudanças recentes."]
      ],
      note: "Compare fontes e perspectivas ao estudar períodos políticos recentes."
    },
    {
      category: "História do Rio Grande do Sul",
      title: "Povos, missões e disputas no território gaúcho",
      intro: "A história do Rio Grande do Sul foi moldada por povos originários, missões religiosas, disputas entre impérios e diferentes formas de ocupação do território.",
      heading: "Formação histórica do estado",
      points: [
        ["Povos indígenas e ocupação", "Povos indígenas ocupavam e organizavam o território muito antes da formação das fronteiras atuais."],
        ["Missões Jesuíticas", "Missões reuniram comunidades indígenas e religiosos, envolvendo evangelização, trabalho e disputas coloniais."],
        ["Portugal, Espanha e Tratado de Madrid", "As coroas disputaram fronteiras na região; o Tratado de Madrid, em 1750, redesenhou limites e provocou conflitos e deslocamentos."],
        ["Formação econômica e social", "Pecuária, estâncias, agricultura, imigração e atividades comerciais contribuíram para a formação regional em contextos diversos."]
      ],
      note: "Fronteiras e identidades regionais se formaram por processos históricos, negociações e conflitos."
    },
    {
      category: "História do Rio Grande do Sul",
      title: "Revolução Farroupilha e imigração",
      intro: "Conflitos regionais, imigração e participação em acontecimentos nacionais marcaram a história do Rio Grande do Sul nos séculos XIX e XX.",
      heading: "Revoltas, imigração e política",
      points: [
        ["Revolução Farroupilha", "Conflito de 1835 a 1845 envolveu disputas políticas, econômicas e fiscais; diferentes grupos tinham interesses distintos."],
        ["Imigração alemã e italiana", "A imigração transformou comunidades, atividades produtivas e culturas, sem substituir a presença dos povos indígenas e de populações afro-brasileiras."],
        ["Participação em conflitos nacionais", "Grupos e lideranças gaúchas participaram de guerras e disputas políticas do país em diferentes períodos."],
        ["Memória regional", "Símbolos e narrativas sobre o passado devem ser analisados junto às fontes e às diferentes experiências sociais."]
      ],
      note: "A Revolução Farroupilha teve participantes e objetivos diversos; a memória posterior selecionou e reinterpretou aspectos do conflito."
    }]
  }
};

function curriculumPart(category, title, intro, points, note) {
  const sampleIndices = [...new Set([0, Math.floor((points.length - 1) / 2), points.length - 1])]
    .filter(index => points[index]);
  const questions = sampleIndices.map((pointIndex, questionIndex) => {
    const point = points[pointIndex];
    const labels = points.map(item => item[0]);
    const distractors = labels.filter((_, index) => index !== pointIndex);
    const choices = [point[0], ...distractors.slice(0, 2)];
    const answer = questionIndex % choices.length;
    choices.splice(answer, 0, choices.shift());
    return {
      text: `Qual conceito corresponde a esta descrição? ${point[1]}`,
      choices,
      answer,
      explanation: `${point[0]}: ${point[1]}`
    };
  });
  return {
    category,
    title,
    intro,
    heading: "Conceitos principais",
    points,
    note,
    questions
  };
}

Object.assign(starterLibrary, {
  geography: {
    name: "Geografia",
    icon: "🌎",
    parts: [
      curriculumPart("Cartografia", "Mapas, orientação e coordenadas",
        "A Cartografia representa espaços por meio de mapas e outras imagens. Para interpretar um mapa, observe orientação, escala, projeção, legenda e finalidade.",
        [
          ["Orientação geográfica", "Pontos cardeais (N, S, L, O) e colaterais ajudam a indicar direções e localizar elementos no espaço."],
          ["Coordenadas, latitude e longitude", "Latitude mede posições ao norte ou sul do Equador; longitude, a leste ou oeste de Greenwich. Juntas formam coordenadas geográficas."],
          ["Fusos horários", "A rotação da Terra e a convenção dos meridianos organizam fusos; limites políticos podem alterar seus contornos."],
          ["Escalas cartográficas", "Relacionam uma distância no mapa a uma distância real. Escala grande mostra área menor com mais detalhe; escala pequena, área maior com menos detalhe."],
          ["Projeções e mapas temáticos", "Toda projeção plana distorce alguma propriedade. Mapas temáticos representam dados como população, clima ou economia."]
        ], "Leia título, legenda, orientação, escala e fonte antes de tirar conclusões de um mapa."),
      curriculumPart("Cartografia", "Relevo, GPS e geotecnologias",
        "Mapas de relevo e tecnologias de localização permitem observar formas da superfície e mudanças territoriais em diferentes escalas.",
        [
          ["Curvas de nível", "Linhas que unem pontos de mesma altitude; curvas próximas indicam encostas íngremes e curvas afastadas, declives suaves."],
          ["Sensoriamento remoto", "Satélites e sensores registram informações da superfície sem contato direto, apoiando estudos ambientais e territoriais."],
          ["GPS e geotecnologias", "Sistemas de posicionamento por satélite estimam localização. Sistemas de informação geográfica integram dados espaciais e atributos."],
          ["Leitura crítica de mapas", "Observe data, fonte, escala, projeção e escolhas de classificação; mapas selecionam e representam aspectos da realidade."]
        ], "Dados geográficos podem mudar com o tempo; confira a data e a fonte."),
      curriculumPart("Geografia física", "Estrutura da Terra e dinâmica do relevo",
        "A superfície terrestre resulta da interação entre processos internos do planeta e agentes externos que desgastam, transportam e depositam materiais.",
        [
          ["Estrutura interna da Terra", "Crosta, manto e núcleo têm propriedades distintas; calor interno participa da dinâmica geológica."],
          ["Placas tectônicas", "A litosfera está fragmentada em placas que se movem. Seus limites podem produzir terremotos, vulcanismo, montanhas e fossas."],
          ["Vulcanismo e terremotos", "Vulcões liberam magma, gases e cinzas; terremotos resultam da liberação de energia, frequentemente associada a falhas e limites de placas."],
          ["Relevo e agentes internos", "Tectonismo e vulcanismo formam e deformam estruturas; montanhas, planaltos e planícies são classificados por formas e processos."],
          ["Agentes externos", "Intemperismo, erosão, transporte e sedimentação atuam pela água, vento, gelo, variações de temperatura e seres vivos."]
        ], "O relevo é dinâmico: forças internas constroem formas e agentes externos as modificam."),
      curriculumPart("Geografia física", "Rochas, solos e hidrografia",
        "Rochas, solos e águas formam sistemas conectados. O uso do território altera infiltração, erosão e a disponibilidade dos recursos hídricos.",
        [
          ["Rochas e minerais", "Minerais são componentes com composição e estrutura características. Rochas ígneas, sedimentares e metamórficas se formam por processos diferentes."],
          ["Formação dos solos", "Solos resultam da alteração de rochas e da ação do clima, relevo, organismos e tempo; possuem horizontes e propriedades variados."],
          ["Erosão e conservação", "Retirada da vegetação e manejo inadequado podem acelerar erosão. Cobertura vegetal e práticas conservacionistas ajudam a proteger o solo."],
          ["Hidrografia e bacias", "Uma bacia hidrográfica reúne o rio principal, afluentes e terras drenadas. Usos da água conectam atividades humanas a montante e a jusante."],
          ["Ciclo hidrológico, oceanos e mares", "Evaporação, condensação, precipitação, infiltração e escoamento movimentam a água. Oceanos e mares influenciam clima, circulação e ecossistemas."]
        ], "A bacia hidrográfica é uma unidade útil para planejar água e impactos ambientais."),
      curriculumPart("Climatologia", "Tempo, clima e fatores climáticos",
        "Tempo descreve condições atmosféricas em curto prazo; clima sintetiza padrões observados por períodos longos. Elementos e fatores ajudam a explicar diferenças regionais.",
        [
          ["Tempo e clima", "Tempo inclui condições momentâneas como chuva e temperatura; clima representa padrões e variações de longo prazo."],
          ["Elementos climáticos", "Temperatura, umidade, pressão, ventos e precipitação são medidos para caracterizar a atmosfera."],
          ["Fatores climáticos", "Latitude, altitude, relevo, distância do mar, vegetação e circulação oceânica influenciam o clima."],
          ["Massas de ar", "Grandes porções de ar com propriedades de temperatura e umidade deslocam-se e interagem, alterando o tempo."],
          ["Tipos de clima e Brasil", "Classificações climáticas agrupam padrões de temperatura e chuva; no Brasil há climas equatoriais, tropicais, semiáridos e subtropicais, entre outros recortes."]
        ], "Um episódio de frio ou calor não basta para comprovar uma mudança climática de longo prazo."),
      curriculumPart("Climatologia", "Fenômenos e mudanças climáticas",
        "Fenômenos atmosféricos naturais variam de ano para ano; mudanças climáticas de longo prazo podem ser intensificadas por atividades humanas.",
        [
          ["El Niño e La Niña", "Fases de variação nas águas do Pacífico tropical alteram padrões de circulação e podem influenciar chuva e temperatura em diferentes regiões."],
          ["Mudanças climáticas", "Tendências climáticas de longo prazo incluem alterações em temperatura, precipitação e frequência de extremos; causas e impactos devem ser avaliados com evidências."],
          ["Aquecimento global", "O aumento da concentração de gases de efeito estufa por atividades humanas intensifica a retenção de energia no sistema climático."],
          ["Eventos extremos", "Ondas de calor, secas e chuvas intensas geram riscos diferentes conforme exposição, vulnerabilidade e preparo da população."]
        ], "Risco climático depende do evento, de quem está exposto e das condições de prevenção e resposta."),
      curriculumPart("Biomas e meio ambiente", "Biomas brasileiros e conservação",
        "Biomas reúnem ecossistemas associados a condições ambientais e formas de vida. No Brasil, diversidade natural e modos de ocupação variam entre regiões.",
        [
          ["Amazônia e Cerrado", "A Amazônia abriga florestas tropicais e vasta biodiversidade; o Cerrado é uma savana diversa, com espécies adaptadas a períodos secos e fogo."],
          ["Caatinga e Mata Atlântica", "A Caatinga apresenta adaptações à escassez de água; a Mata Atlântica é muito diversa e intensamente fragmentada."],
          ["Pantanal e Pampa", "O Pantanal tem ciclos de inundação que moldam habitats; o Pampa reúne campos naturais e espécies associadas ao sul do Brasil."],
          ["Impactos e conservação", "Desmatamento, queimadas, poluição e desertificação degradam ambientes. Conservação, restauração e desenvolvimento sustentável conciliam proteção e necessidades sociais."],
          ["Fontes de energia", "Fontes renováveis se recompõem em escalas humanas, como solar e eólica; não renováveis, como petróleo e carvão, são finitas e têm impactos específicos."]
        ], "A conservação de cada bioma depende de suas características ecológicas e das comunidades que vivem nele."),
      curriculumPart("População e demografia", "População, indicadores e transição demográfica",
        "A Demografia analisa tamanho, distribuição e composição das populações. Indicadores ajudam a compreender mudanças, mas não descrevem sozinhos as condições de vida.",
        [
          ["Crescimento populacional", "Depende do balanço entre nascimentos, mortes e migrações; taxas de natalidade e mortalidade permitem comparar contextos."],
          ["Expectativa de vida e densidade", "Expectativa de vida é uma estimativa estatística; densidade demográfica relaciona população e área, sem indicar por si só a distribuição real."],
          ["Pirâmides etárias", "Representam a população por idade e sexo e ajudam a observar mudanças na estrutura etária."],
          ["Transição demográfica", "Descreve mudanças históricas nas taxas de mortalidade e natalidade, frequentemente associadas a transformações sociais e econômicas."],
          ["Migrações e distribuição", "Migrações internas e internacionais, êxodo rural, deslocamentos de refugiados e urbanização alteram a distribuição populacional."]
        ], "Densidade média pode esconder concentrações e vazios dentro de uma mesma região."),
      curriculumPart("Geografia urbana", "Urbanização, metrópoles e desigualdades",
        "A urbanização concentra população e atividades nas cidades. Seu ritmo, infraestrutura e efeitos sociais variam muito entre países e regiões.",
        [
          ["Urbanização brasileira", "O crescimento das cidades brasileiras acelerou com industrialização e migrações, frequentemente sem infraestrutura suficiente para todos."],
          ["Metrópoles e regiões metropolitanas", "Metrópoles concentram serviços e influência; regiões metropolitanas articulam municípios com relações funcionais intensas."],
          ["Conurbação e megacidades", "Conurbação é a continuidade física entre áreas urbanas; megacidades têm população muito elevada, sem que isso signifique igualdade de acesso."],
          ["Segregação e favelização", "Desigualdades no acesso à moradia e aos serviços contribuem para segregação socioespacial e expansão de assentamentos precários."],
          ["Mobilidade e planejamento", "Transporte, saneamento, habitação e espaços públicos exigem planejamento que considere acesso, segurança e participação social."]
        ], "Problemas urbanos têm causas interligadas; soluções precisam combinar moradia, transporte, trabalho e serviços."),
      curriculumPart("Geografia agrária", "Agricultura, estrutura fundiária e campo",
        "O espaço rural reúne atividades produtivas e modos de vida diversos. A distribuição da terra e as tecnologias agrícolas influenciam relações sociais e impactos ambientais.",
        [
          ["Agricultura e pecuária", "Produção vegetal e criação animal variam em escala, tecnologia, finalidade e relação com mercados."],
          ["Agronegócio e agricultura familiar", "Cadeias do agronegócio integram produção e comércio; agricultura familiar tem grande diversidade e papel na produção de alimentos e economias locais."],
          ["Subsistência e Revolução Verde", "A agricultura de subsistência atende principalmente às necessidades da família. A Revolução Verde ampliou insumos e produtividade, mas seus benefícios e custos foram desiguais."],
          ["Modernização e estrutura fundiária", "Mecanização e concentração de terras coexistem; reforma agrária discute redistribuição e acesso à terra."],
          ["Conflitos e ambiente", "Movimentos sociais, conflitos rurais e impactos ambientais da agropecuária envolvem território, trabalho, direitos e uso de recursos."]
        ], "Modernização pode elevar produção sem resolver desigualdades de acesso à terra e renda."),
      curriculumPart("Geografia econômica", "Economia, indústria e globalização",
        "A Geografia Econômica examina onde e como atividades produtivas se organizam. Fluxos globais conectam regiões, mas os benefícios e decisões se distribuem de forma desigual.",
        [
          ["Setores econômicos", "Setor primário envolve recursos e produção agropecuária; secundário transforma matérias-primas; terciário reúne comércio e serviços."],
          ["Industrialização brasileira", "A industrialização do Brasil ocorreu em etapas e regiões distintas, articulada a políticas, mercados, infraestrutura e trabalho."],
          ["Globalização e DIT", "A Divisão Internacional do Trabalho distribui tarefas produtivas entre países; essa distribuição muda e reflete relações de poder."],
          ["Blocos e comércio", "Blocos econômicos estabelecem graus variados de cooperação. Comércio internacional envolve circulação de bens, serviços, capital e regras."],
          ["Sistemas e desigualdade", "Capitalismo, socialismo e neoliberalismo designam projetos e arranjos diversos; desigualdade e acesso a serviços permanecem questões centrais."],
          ["Transportes, infraestrutura e energia", "Redes de transporte e infraestrutura conectam territórios; fontes energéticas renováveis e não renováveis têm custos e impactos distintos."]
        ], "A globalização conecta lugares, mas não elimina diferenças de poder e renda."),
      curriculumPart("Geopolítica", "Estados, fronteiras e organizações",
        "A Geopolítica estuda território, poder e relações entre Estados e outros atores. Fronteiras e alianças são produzidas historicamente e podem mudar.",
        [
          ["Estados e fronteiras", "Estados nacionais exercem soberania sobre territórios e populações; fronteiras podem ser negociadas, contestadas ou atravessadas."],
          ["Guerra Fria e nova ordem", "A rivalidade entre EUA e URSS estruturou a Guerra Fria; seu fim alterou alianças sem encerrar disputas geopolíticas."],
          ["Potências e conflitos", "Relações entre EUA, China e Rússia envolvem interesses econômicos, militares e diplomáticos; Oriente Médio e conflito Israel-Palestina exigem contexto histórico e múltiplas fontes."],
          ["Organizações e alianças", "ONU, OTAN, União Europeia e BRICS têm funções e composições distintas; Mercosul promove integração regional sul-americana."],
          ["Globalização e regionalização", "A integração mundial convive com acordos regionais, barreiras e disputas sobre comércio, segurança e circulação."]
        ], "Organizações internacionais não têm todas o mesmo papel, composição ou poder de decisão.")
    ]
  },
  philosophy: {
    name: "Filosofia",
    icon: "💭",
    parts: [
      curriculumPart("Filosofia Antiga", "Mito, razão e primeiros filósofos",
        "A Filosofia desenvolve perguntas e argumentos sobre realidade, conhecimento e vida comum. Na Grécia antiga, novas formas de investigação dialogaram com tradições míticas.",
        [
          ["Origem da Filosofia; mito e razão", "Mitos transmitem narrativas e sentidos culturais; a investigação filosófica busca explicar problemas por argumentos debatidos e examinados."],
          ["Pré-socráticos", "Pensadores como Tales, Heráclito e Parmênides investigaram princípios da natureza, mudança e permanência."],
          ["Sofistas", "Ensinavam retórica e argumentação em cidades gregas; seus debates abordaram linguagem, convenções e política."],
          ["Sócrates", "Usava diálogo e perguntas para examinar conceitos e crenças, estimulando reflexão crítica."]
        ], "Mito e razão não são simplesmente etapas que se apagam: podem coexistir como formas diferentes de interpretar o mundo."),
      curriculumPart("Filosofia Antiga", "Platão, Aristóteles e escolas helenísticas",
        "A filosofia antiga investigou ética, política, conhecimento e natureza. Diferentes escolas propuseram caminhos distintos para uma vida boa.",
        [
          ["Platão", "Relacionou conhecimento, justiça e formas inteligíveis; seus diálogos exploram debates filosóficos e políticos."],
          ["Aristóteles", "Estudou lógica, natureza, ética e política; a virtude é desenvolvida por hábitos orientados pela razão."],
          ["Ética antiga", "Pergunta como viver bem e agir com virtude em relação a si e à comunidade."],
          ["Estoicismo", "Enfatiza virtude, razão e discernimento entre aquilo que depende de nós e o que não depende."],
          ["Epicurismo", "Associa felicidade à busca prudente de prazer, amizade e tranquilidade, evitando desejos que gerem sofrimento."]
        ], "Escolas antigas diferem sobre prazer, virtude e controle das paixões; compare seus argumentos."),
      curriculumPart("Filosofia Medieval", "Fé, razão e filosofia cristã",
        "A filosofia medieval articulou tradições greco-romanas, debates religiosos e novas instituições de ensino. A relação entre fé e razão assumiu diferentes formas.",
        [
          ["Patrística", "Produção dos primeiros pensadores cristãos, que dialogaram com filosofias antigas para interpretar e defender doutrinas."],
          ["Santo Agostinho", "Relacionou interioridade, tempo, memória e conhecimento a uma reflexão filosófica cristã."],
          ["Escolástica", "Método de debate e investigação que organizou questões, argumentos e respostas em instituições medievais."],
          ["São Tomás de Aquino", "Articulou filosofia aristotélica e teologia cristã, discutindo diferentes vias de conhecimento."],
          ["Fé e razão", "Debates medievais investigaram como crença religiosa e argumentação racional podem se relacionar, sem uma única resposta."]
        ], "A filosofia medieval incluiu debates variados e não se reduz a uma oposição simples entre fé e razão."),
      curriculumPart("Filosofia Moderna", "Racionalismo, empirismo e conhecimento",
        "A filosofia moderna examinou os fundamentos do conhecimento e a capacidade da razão. Racionalistas e empiristas propuseram caminhos diferentes.",
        [
          ["Renascimento e Humanismo", "Valorizaram novas formas de estudo, a retomada de textos clássicos e a reflexão sobre capacidades humanas."],
          ["Racionalismo e Descartes", "O racionalismo atribui papel central à razão. Descartes buscou fundamentos seguros por meio da dúvida metódica."],
          ["Empirismo, Locke e Hume", "O empirismo destaca a experiência. Locke investigou a origem das ideias; Hume examinou causalidade, hábito e limites do conhecimento."],
          ["Iluminismo e Kant", "Iluministas defenderam exame crítico e autonomia. Kant investigou as condições e os limites da razão."],
          ["Revolução Científica", "Observação, experimentação e matematização transformaram práticas científicas e explicações sobre a natureza."]
        ], "Racionalismo e empirismo são posições com diferenças internas, não blocos absolutamente homogêneos."),
      curriculumPart("Filosofia Moderna", "Contratualismo e pensamento político",
        "O contratualismo usa a ideia de contrato para investigar a origem e a legitimidade da autoridade política, propondo respostas diferentes.",
        [
          ["Hobbes", "Argumenta que a autoridade soberana pode ser necessária para reduzir insegurança e conflito."],
          ["Locke", "Defende direitos naturais e governo limitado, cujo poder depende de consentimento e pode ser contestado."],
          ["Rousseau", "Relaciona legitimidade política à vontade geral e à participação dos cidadãos."],
          ["Montesquieu", "Analisa leis e formas de governo e defende a separação de poderes como limite à concentração de autoridade."]
        ], "Compare como cada autor entende liberdade, conflito, consentimento e limites do governo."),
      curriculumPart("Filosofia Contemporânea", "Crítica social e existencialismo",
        "A filosofia contemporânea questiona estruturas sociais, valores, liberdade e formas de poder em sociedades modernas.",
        [
          ["Karl Marx", "Analisa capitalismo, classes sociais, trabalho e conflitos materiais na transformação histórica."],
          ["Friedrich Nietzsche", "Questiona valores herdados e investiga como moral, cultura e relações de força moldam a vida."],
          ["Existencialismo e Sartre", "Enfatiza existência, liberdade, escolhas e responsabilidade em situações concretas."],
          ["Hannah Arendt", "Reflete sobre ação política, totalitarismo, responsabilidade e espaço público."],
          ["Michel Foucault", "Investiga relações entre poder, conhecimento, instituições e modos de disciplinar corpos e condutas."]
        ], "Teorias críticas oferecem ferramentas de interpretação; aplique conceitos com atenção ao contexto e às evidências."),
      curriculumPart("Filosofia Contemporânea", "Escola de Frankfurt, ciência e pós-modernidade",
        "Debates contemporâneos examinam os efeitos da razão técnica, da mídia, da ciência e das mudanças culturais sobre a vida social.",
        [
          ["Escola de Frankfurt", "Pensadores como Adorno e Horkheimer analisaram capitalismo, cultura de massa e racionalidade instrumental."],
          ["Indústria cultural", "O conceito examina como produção cultural em massa pode padronizar conteúdos e transformá-los em mercadorias."],
          ["Filosofia da ciência", "Investiga métodos, evidências, explicação, limites e mudanças das teorias científicas."],
          ["Pós-modernidade", "Debates sobre pós-modernidade analisam pluralidade, críticas a narrativas totalizantes e transformações culturais; o conceito é controverso."]
        ], "Indústria cultural é uma ferramenta crítica, não uma afirmação de que todo público recebe mensagens de modo idêntico."),
      curriculumPart("Temas filosóficos", "Ética, direitos e vida pública",
        "A reflexão ética e política ajuda a discutir escolhas, instituições e direitos. Argumentar filosoficamente exige definir conceitos e examinar razões e consequências.",
        [
          ["Ética e moral", "Moral reúne normas e costumes; ética investiga criticamente princípios, responsabilidades e justificativas para agir."],
          ["Política, poder e democracia", "Estudam-se autoridade, participação, representação, limites do poder e formas de decisão coletiva."],
          ["Justiça, liberdade e igualdade", "Teorias distintas discutem distribuição de recursos, direitos, oportunidades, autonomia e tratamento equitativo."],
          ["Cidadania e direitos humanos", "Abrangem direitos, deveres, participação e dignidade de todas as pessoas."],
          ["Conhecimento, ciência e tecnologia", "Filosofia pergunta como justificamos crenças e como avaliar benefícios, riscos e responsabilidades de tecnologias."],
          ["Bioética e filosofia da arte", "Bioética examina dilemas de saúde e vida; filosofia da arte investiga criação, interpretação, experiência e valor estético."]
        ], "Uma boa análise ética identifica envolvidos, direitos, alternativas, consequências e princípios em conflito.")
    ]
  },
  sociology: {
    name: "Sociologia",
    icon: "👥",
    parts: [
      curriculumPart("Fundamentos da Sociologia", "Sociedade, instituições e socialização",
        "A Sociologia investiga como relações, instituições e processos históricos moldam a vida coletiva e as experiências individuais.",
        [
          ["Surgimento da Sociologia", "A disciplina se consolidou no século XIX diante de transformações como industrialização, urbanização e revoluções políticas."],
          ["Sociedade e indivíduo", "A vida social influencia identidades e oportunidades; indivíduos também reproduzem e transformam relações e instituições."],
          ["Fato social", "Para Durkheim, formas de agir e pensar exteriores ao indivíduo exercem influência e podem ser analisadas socialmente."],
          ["Ação e relações sociais", "Weber analisa ações dotadas de sentido e as relações orientadas pelo comportamento de outras pessoas."],
          ["Instituições, socialização e cultura", "Família, escola, Estado e outras instituições organizam práticas; socialização transmite e transforma referências culturais."]
        ], "Explicações sociológicas conectam experiências pessoais a padrões e estruturas sociais."),
      curriculumPart("Principais pensadores", "Durkheim, Marx e Weber",
        "Autores clássicos formularam perspectivas distintas sobre ordem social, conflito, trabalho e sentido da ação.",
        [
          ["Émile Durkheim", "Estudou fatos sociais, solidariedade, divisão do trabalho e formas de integração social."],
          ["Karl Marx", "Analisou classes, propriedade, trabalho e conflitos ligados à organização capitalista da produção."],
          ["Max Weber", "Investigou ação social, dominação, burocracia e os sentidos atribuídos pelos indivíduos às suas ações."],
          ["Auguste Comte", "Defendeu uma ciência da sociedade e teve influência na formação do positivismo."]
        ], "Compare objeto de estudo e método: cada autor explica a sociedade por conceitos diferentes."),
      curriculumPart("Principais pensadores", "Bourdieu, Bauman e Gramsci",
        "Pensadores posteriores ampliaram análises sobre cultura, desigualdade, modernidade e poder.",
        [
          ["Pierre Bourdieu", "Conceitos como habitus, campo e capital ajudam a analisar práticas e reprodução de desigualdades."],
          ["Zygmunt Bauman", "A ideia de modernidade líquida descreve relações e instituições percebidas como mais instáveis e mutáveis."],
          ["Antonio Gramsci", "Hegemonia explica como liderança política e cultural pode ser construída por consentimento e disputa de ideias."],
          ["Comparação de perspectivas", "Bourdieu analisa disposições, campos e capitais; Bauman enfatiza transformações da modernidade; Gramsci examina hegemonia e disputa cultural."]
        ], "Use os conceitos como instrumentos de análise, não como rótulos desligados do contexto."),
      curriculumPart("Cultura e identidade", "Cultura, diversidade e patrimônio",
        "Cultura reúne práticas, conhecimentos e símbolos aprendidos e compartilhados. Identidades são construídas nas relações e podem se transformar.",
        [
          ["Cultura popular e erudita", "Distinções entre cultura popular e erudita refletem também instituições, acesso e relações de poder."],
          ["Etnocentrismo e relativismo", "Etnocentrismo julga outras culturas pelo padrão do próprio grupo; relativismo cultural busca compreender práticas em seu contexto."],
          ["Diversidade e identidade cultural", "Identidades individuais e coletivas combinam referências variadas, pertencimentos e mudanças históricas."],
          ["Cultura brasileira e patrimônio", "A cultura brasileira é plural e marcada por contribuições indígenas, africanas, europeias e de muitos outros grupos. Patrimônio pode ser material ou imaterial."],
          ["Movimentos culturais e indústria cultural", "Movimentos culturais produzem expressão e disputa pública; indústria cultural examina a produção e circulação comercial de conteúdos."]
        ], "Compreender uma prática em seu contexto não exige deixar de analisar desigualdades ou violações de direitos."),
      curriculumPart("Sociedade e desigualdade", "Classes, discriminação e direitos",
        "Desigualdades resultam de processos históricos e instituições que distribuem recursos, reconhecimento e oportunidades de modo desigual.",
        [
          ["Classes e estratificação", "Classe social e estratificação descrevem posições diferenciadas em relações de produção, renda, prestígio e poder."],
          ["Desigualdade e mobilidade", "Desigualdade social e econômica envolve diferenças de acesso a renda, educação, saúde e influência; mobilidade descreve mudanças de posição."],
          ["Racismo estrutural", "Práticas institucionais e processos históricos podem reproduzir desvantagens raciais mesmo sem uma ação discriminatória explícita em cada caso."],
          ["Preconceito, discriminação e gênero", "Preconceitos são julgamentos; discriminação é tratamento desigual. Desigualdades de gênero refletem normas e instituições."],
          ["Exclusão e direitos das minorias", "Grupos minoritários podem enfrentar barreiras e violência; direitos e políticas de inclusão buscam remover discriminações."]
        ], "Diferencie desigualdade entre indivíduos de mecanismos institucionais e históricos que a reproduzem."),
      curriculumPart("Política e cidadania", "Estado, democracia e participação",
        "A Sociologia política analisa instituições, autoridade, cidadania e formas pelas quais pessoas participam das decisões coletivas.",
        [
          ["Estado e governo", "Estado é uma organização política e jurídica duradoura; governo é o conjunto de autoridades que o dirige por certo período."],
          ["Poder e regimes", "Poder é a capacidade de influenciar decisões. Democracia envolve participação, competição política e garantias; autoritarismo restringe pluralismo e liberdades."],
          ["Cidadania e direitos", "Direitos civis, políticos e sociais sustentam participação e dignidade; constituições organizam instituições e garantias."],
          ["Movimentos, sindicatos e participação", "Movimentos sociais e sindicatos articulam demandas; participação também ocorre por eleições, conselhos e mobilizações públicas."],
          ["Direitos humanos", "Princípios de dignidade e direitos aplicam-se a todas as pessoas; sua garantia depende de instituições e ação coletiva."]
        ], "Eleições são fundamentais, mas participação democrática também inclui direitos, fiscalização e organização social."),
      curriculumPart("Trabalho e economia", "Trabalho, produção e transformações",
        "O trabalho organiza produção, relações sociais e identidade. Mudanças tecnológicas e econômicas transformam condições de emprego e distribuição de renda.",
        [
          ["Divisão social do trabalho", "Distribui tarefas entre pessoas e grupos e pode aumentar a especialização, mas também produzir hierarquias."],
          ["Taylorismo e Fordismo", "Taylorismo organiza tarefas e tempos de trabalho; Fordismo associa produção em massa a linhas de montagem."],
          ["Toyotismo", "Valoriza produção flexível, estoques reduzidos e adaptação à demanda, embora seus efeitos sobre o trabalho variem."],
          ["Capitalismo e trabalho", "Relações capitalistas envolvem propriedade, produção para o mercado e trabalho assalariado em contextos históricos diversos."],
          ["Desemprego, informalidade e precarização", "Automação, globalização e reestruturações podem alterar vagas, segurança, direitos e condições de trabalho."]
        ], "Tecnologia pode criar tarefas e eliminar outras; seus efeitos dependem de políticas e relações de trabalho.")
    ]
  },
  portuguese: {
    name: "Língua Portuguesa",
    icon: "📚",
    priority: "Prioridade alta",
    parts: [
      curriculumPart("Interpretação de texto", "Leitura, inferência e argumentação",
        "Interpretar textos envolve relacionar informações, linguagem, contexto e propósito. A resposta precisa ser sustentada por elementos do texto.",
        [
          ["Ideia principal e informações", "Identifique tema, tese e informações explícitas; conecte pistas para inferir conteúdos implícitos sem inventar dados."],
          ["Linguagem verbal, não verbal e mista", "Palavras, imagens, gráficos e gestos podem construir sentido em conjunto."],
          ["Contexto e intenção comunicativa", "Considere autor, público, suporte, contexto de circulação e objetivo do texto."],
          ["Ironia, humor e ambiguidade", "Ironia pode indicar sentido oposto ao literal; humor depende de pistas e expectativas; ambiguidade admite mais de uma leitura."],
          ["Intertextualidade e figuras", "Textos podem retomar outros textos; metáfora, comparação, hipérbole e outras figuras criam efeitos de sentido."],
          ["Ponto de vista e persuasão", "Distinga fato e opinião, reconheça argumentos e avalie estratégias de persuasão."]
        ], "Fundamente inferências em pistas linguísticas ou visuais presentes no texto."),
      curriculumPart("Gêneros textuais", "Gêneros jornalísticos, literários e visuais",
        "Gêneros textuais atendem a propósitos e situações de comunicação. Reconhecê-los ajuda a compreender forma, público e escolhas de linguagem.",
        [
          ["Notícia e reportagem", "Notícia informa um acontecimento de modo conciso; reportagem contextualiza e aprofunda dados, fontes e perspectivas."],
          ["Artigo de opinião e editorial", "Artigo apresenta a posição de seu autor; editorial expressa a perspectiva institucional do veículo."],
          ["Crônica, conto e poema", "Crônica parte de situações cotidianas; conto constrói narrativa breve; poema explora ritmo, imagens e organização verbal."],
          ["Charge, tirinha e cartum", "Combinam texto e imagem para produzir humor, crítica ou comentário, frequentemente ligados ao contexto."],
          ["Publicidade e circulação", "Propagandas, anúncios e cartazes buscam informar ou persuadir. Textos científicos, digitais e jornalísticos variam em estrutura e público."]
        ], "O gênero ajuda a interpretar escolhas, mas não determina sozinho a qualidade ou a intenção de um texto."),
      curriculumPart("Gramática", "Classes gramaticais e estrutura da oração",
        "A gramática descreve padrões da língua e como as escolhas linguísticas produzem sentido. Classificar palavras ajuda a compreender suas funções no texto.",
        [
          ["Classes de palavras I", "Substantivos nomeiam; adjetivos caracterizam; verbos exprimem processos; advérbios modificam verbos, adjetivos ou outros advérbios."],
          ["Classes de palavras II", "Pronomes retomam ou acompanham nomes; artigos determinam; preposições relacionam termos; conjunções conectam orações; numerais quantificam; interjeições exprimem reações."],
          ["Sujeito e predicado", "O sujeito é o termo sobre o qual se declara algo; o predicado contém a declaração. Há diferentes tipos e construções sem sujeito expresso."],
          ["Complementos e termos acessórios", "Complementos verbais completam verbos; complemento nominal completa nome; adjuntos qualificam circunstâncias; aposto explica e vocativo chama interlocutor."],
          ["Orações", "Coordenação liga orações sintaticamente independentes; subordinação estabelece relação de dependência sintática."]
        ], "A função de uma palavra depende do contexto; a mesma forma pode pertencer a classes diferentes."),
      curriculumPart("Gramática", "Concordância, regência e escrita",
        "Convenções gramaticais ajudam a produzir textos claros em contextos formais. A norma-padrão é uma variedade de referência, não a única forma legítima de falar.",
        [
          ["Concordância", "Concordância verbal relaciona verbo e sujeito; concordância nominal relaciona nomes e seus determinantes."],
          ["Regência e crase", "Regência estuda relações entre termos e preposições exigidas; crase marca a fusão da preposição a com artigo ou pronome em contextos específicos."],
          ["Colocação pronominal", "Próclise, ênclise e mesóclise descrevem posições de pronomes átonos segundo contextos sintáticos e convenções."],
          ["Pontuação, ortografia e acentuação", "Pontuação organiza relações e ritmo; ortografia e acentuação seguem convenções da escrita."],
          ["Formação de palavras", "Derivação, composição e outros processos criam vocábulos a partir de elementos existentes."]
        ], "Revise pontuação e concordância considerando a estrutura e o sentido da frase."),
      curriculumPart("Semântica e linguística", "Sentidos, variação e coesão",
        "A língua varia com região, situação, grupo e época. Analisar sentidos e conexões textuais exige observar usos reais e contexto.",
        [
          ["Sinônimos, antônimos e sentidos", "Sinônimos têm sentidos próximos; antônimos expressam oposição. Denotação é sentido mais literal; conotação é sentido figurado ou associado."],
          ["Polissemia, homônimos e parônimos", "Polissemia permite sentidos relacionados; homônimos têm forma ou som igual; parônimos são semelhantes na forma, mas diferentes no significado."],
          ["Variação linguística", "Fala e escrita variam regional, social e situacionalmente. Variação é parte natural da língua e não deve ser confundida com incapacidade."],
          ["Formalidade e norma-padrão", "Escolhas formais ou informais dependem da situação. A norma-padrão é convenção importante em certos contextos, não medida do valor de falantes."],
          ["Coesão, coerência e argumentação", "Coesão conecta partes do texto; coerência organiza sentidos; operadores argumentativos indicam relações como causa, oposição e conclusão."]
        ], "Combata o preconceito linguístico e avalie a adequação da linguagem ao contexto."),
      curriculumPart("Funções da linguagem", "Intenções e funções da comunicação",
        "As funções da linguagem destacam componentes diferentes da comunicação. Um texto pode combinar funções, embora uma delas possa predominar.",
        [
          ["Referencial", "Destaca informação e contexto, buscando apresentar dados ou explicar um assunto."],
          ["Emotiva e conativa", "Emotiva evidencia a perspectiva do emissor; conativa ou apelativa dirige-se ao interlocutor para influenciar sua ação."],
          ["Fática", "Enfatiza o canal e verifica ou mantém o contato entre interlocutores."],
          ["Metalinguística", "Usa a linguagem para explicar ou discutir a própria linguagem."],
          ["Poética", "Destaca a organização da mensagem, seus sons, imagens, ritmos ou jogos de linguagem."]
        ], "Identifique a função predominante pelo efeito e pelo foco do texto, não por uma palavra isolada.")
    ]
  },
  literature: {
    name: "Literatura",
    icon: "🪶",
    parts: [
      curriculumPart("Escolas literárias", "Movimentos literários: da Idade Média ao Arcadismo",
        "Movimentos literários expressam convenções estéticas e debates de seu tempo. Períodos se sobrepõem, e obras individuais podem combinar características.",
        [
          ["Trovadorismo e Humanismo", "Cantigas medievais exploram amor, sátira e música; o Humanismo marca transições culturais e novas formas dramáticas."],
          ["Classicismo e Quinhentismo", "O Classicismo retoma modelos greco-romanos; o Quinhentismo registra textos de informação e catequese no contexto colonial."],
          ["Barroco", "Explora contrastes, conflitos espirituais e linguagem elaborada, em contexto de tensões religiosas e políticas."],
          ["Arcadismo", "Valoriza simplicidade, equilíbrio e natureza idealizada, em diálogo com referências clássicas e iluministas."]
        ], "Contextualize a obra sem presumir que todo autor de um período escreveu da mesma maneira."),
      curriculumPart("Escolas literárias", "Movimentos literários: Romantismo à contemporaneidade",
        "A literatura acompanha transformações estéticas e sociais. Uma leitura histórica observa tanto os movimentos quanto as escolhas particulares de cada autor.",
        [
          ["Romantismo", "Valoriza subjetividade, imaginação e sentimentos; suas expressões variam conforme país e contexto."],
          ["Realismo e Naturalismo", "Realismo observa criticamente relações sociais e personagens; Naturalismo enfatiza determinismos e condições materiais, segundo concepções históricas."],
          ["Parnasianismo e Simbolismo", "Parnasianismo valoriza elaboração formal; Simbolismo explora musicalidade, sugestão e imagens."],
          ["Pré-Modernismo e Modernismo", "Pré-Modernismo reúne obras diversas que expõem tensões brasileiras; o Modernismo rompe convenções e se transforma em diferentes fases."],
          ["Literatura contemporânea", "Produção atual é plural em gêneros, vozes, suportes e relações com questões sociais."]
        ], "Movimentos literários são ferramentas de leitura, não caixas rígidas que definem todas as obras."),
      curriculumPart("Literatura brasileira", "Literatura brasileira e vozes plurais",
        "A literatura no Brasil se desenvolveu em contextos coloniais, pós-coloniais e contemporâneos, com disputas sobre identidade, memória e representação.",
        [
          ["Literatura colonial e de informação", "Textos coloniais incluem relatos de viagem, descrição e catequese; devem ser lidos considerando perspectivas e relações coloniais."],
          ["Romantismo, Realismo e Naturalismo", "Movimentos brasileiros reelaboraram modelos internacionais e trataram de identidade nacional, relações sociais e contradições escravistas."],
          ["Parnasianismo e Simbolismo brasileiros", "A poesia explorou tanto rigor formal quanto musicalidade e subjetividade."],
          ["Modernismo e 1922", "A Semana de Arte Moderna tornou-se marco de debates sobre renovação estética; fases posteriores ampliaram temas e formas."],
          ["Literatura contemporânea, indígena, afro-brasileira e regionalista", "Obras de múltiplas origens e regiões questionam apagamentos e representam experiências, línguas e memórias diversas."]
        ], "Inclua autoria e contexto ao interpretar quem fala e quais experiências ganham visibilidade."),
      curriculumPart("Elementos literários", "Narrativa, poesia e interpretação",
        "Elementos literários orientam a análise de como uma obra organiza voz, tempo, espaço, sons e imagens para produzir sentidos.",
        [
          ["Gêneros, poesia e prosa", "Gêneros literários incluem formas narrativas, líricas e dramáticas; poesia e prosa podem compartilhar recursos expressivos."],
          ["Narrador e personagens", "Narrador é a voz que narra, não necessariamente o autor. Personagens participam da ação e podem mudar ao longo da obra."],
          ["Tempo e espaço", "Tempo narrativo organiza acontecimentos; espaço situa ações e pode contribuir para atmosfera e significado."],
          ["Métrica, rima e figuras", "Métrica organiza sílabas poéticas; rima aproxima sons; figuras de linguagem criam efeitos expressivos."],
          ["Poemas e sociedade", "Interprete imagens, ritmo e voz poética e relacione a obra a contextos sociais sem reduzir um texto a uma única mensagem."]
        ], "A voz do eu lírico não deve ser confundida automaticamente com a pessoa biográfica do autor.")
    ]
  },
  english: {
    name: "Inglês",
    icon: "🇬🇧",
    note: "No ENEM, Inglês ou Espanhol é a língua estrangeira escolhida na inscrição.",
    parts: [
      curriculumPart("Leitura em Inglês", "Interpretação, vocabulário e intenção",
        "Questões de leitura em Inglês valorizam a compreensão global e contextual. Use título, imagens, cognatos e conectores como pistas, sem traduzir cada palavra.",
        [
          ["Interpretação e intenção do autor", "Identifique tema, público, opinião e propósito; charges, tirinhas e anúncios usam texto e imagem para criar efeitos."],
          ["Vocabulário e cognatos", "Use contexto para inferir palavras. Cognatos se parecem com palavras em português; falsos cognatos parecem familiares, mas têm outro sentido."],
          ["Pronomes e referências", "Pronomes substituem ou retomam nomes; localize seus referentes para acompanhar a coesão."],
          ["Adjetivos, advérbios e comparação", "Adjetivos qualificam nomes; advérbios modificam verbos ou qualificadores; comparativos e superlativos expressam relações de grau."],
          ["Formalidade e expressões", "Phrasal verbs e expressões idiomáticas nem sempre têm tradução literal. Registros formal e informal variam com público e situação."]
        ], "Procure evidências no texto antes de escolher uma interpretação."),
      curriculumPart("Leitura em Inglês", "Tempos verbais, modais e conectores",
        "Formas verbais ajudam a localizar ações no tempo, indicar duração e expressar possibilidade, obrigação ou intenção.",
        [
          ["Simple Present e Present Continuous", "Simple Present descreve hábitos, fatos ou estados; Present Continuous destaca ação em andamento ou situação temporária."],
          ["Simple Past e Simple Future", "Simple Past apresenta ações concluídas no passado; futuro pode ser expresso por will, be going to e outras construções."],
          ["Present Perfect", "Relaciona uma experiência ou situação iniciada no passado ao presente, sem necessariamente indicar um momento passado específico."],
          ["Modal verbs", "Can, could, may, might, must, should e outros modais expressam habilidade, possibilidade, permissão, obrigação ou conselho."],
          ["Preposições e conjunções", "Preposições expressam relações; conjunções ligam palavras e orações, sinalizando contraste, causa, condição ou adição."]
        ], "Interprete o tempo verbal junto ao contexto e aos marcadores temporais.")
    ]
  },
  spanish: {
    name: "Espanhol",
    icon: "🇪🇸",
    note: "No ENEM, Inglês ou Espanhol é a língua estrangeira escolhida na inscrição.",
    parts: [
      curriculumPart("Leitura em Espanhol", "Interpretação, vocabulário e variedades",
        "A leitura em Espanhol exige observar contexto, gênero e variedades regionais. Semelhanças com o português ajudam, mas também podem induzir a erros.",
        [
          ["Interpretação e intenção", "Identifique tema, público e propósito; charges e tirinhas articulam elementos visuais e verbais."],
          ["Vocabulário e falsos cognatos", "Cognatos ajudam na compreensão; falsos cognatos como embarazada (grávida) exigem atenção ao contexto."],
          ["Variações regionais", "Vocabulário, pronúncia e usos variam entre países e comunidades hispanofalantes."],
          ["Expressões idiomáticas", "Expressões fixas podem ter sentido diferente da soma literal das palavras; interprete-as na situação."],
          ["Conjunções e advérbios", "Conjunções conectam ideias; advérbios acrescentam informações de tempo, modo, lugar ou intensidade."]
        ], "Não trate o espanhol como uniforme: considere país, comunidade e situação comunicativa."),
      curriculumPart("Leitura em Espanhol", "Gramática em contexto",
        "Reconhecer classes de palavras e formas verbais ajuda a acompanhar o sentido do texto sem transformar a leitura em tradução palavra por palavra.",
        [
          ["Pronomes, artigos e preposições", "Pronomes retomam referentes; artigos acompanham nomes; preposições relacionam termos e variam em expressões."],
          ["Substantivos e adjetivos", "Nomes e adjetivos podem variar em gênero e número; a concordância dá pistas de referência."],
          ["Verbos e conjugação", "As terminações verbais indicam pessoa, número, tempo e modo; verbos irregulares alteram formas de maneira própria."],
          ["Presente, passado e futuro", "Tempos verbais situam ações; use marcadores temporais e o gênero textual para compreender a referência."],
          ["Comunicação e registro", "Formalidade, expressões e escolha linguística dependem de interlocutores e da intenção comunicativa."]
        ], "Use a forma verbal e o contexto juntos para inferir quem age e quando.")
    ]
  },
  arts: {
    name: "Artes",
    icon: "🎨",
    parts: [
      curriculumPart("História da arte", "Arte da Pré-História ao Barroco",
        "A História da Arte estuda obras e práticas em seus contextos. Formas artísticas mudam conforme materiais, crenças, instituições e públicos.",
        [
          ["Pré-História e Antiguidade", "Pinturas rupestres, esculturas e arquiteturas antigas expressam práticas e sociedades diversas; não devem ser tratadas como uma única tradição."],
          ["Arte medieval", "Manifestações medievais incluíram mosaicos, ícones, manuscritos, arquitetura religiosa e tradições de diferentes culturas."],
          ["Renascimento", "Artistas retomaram referências clássicas, exploraram perspectiva e anatomia e trabalharam com diferentes formas de patrocínio."],
          ["Barroco e Neoclassicismo", "Barroco usa contrastes e movimento; Neoclassicismo retoma ideais de equilíbrio clássico em outro contexto histórico."],
          ["Romantismo e Realismo", "Romantismo enfatiza subjetividade e imaginação; Realismo observa relações sociais e cotidiano."]
        ], "Obras de arte podem ser interpretadas por forma, contexto, autoria e circulação."),
      curriculumPart("História da arte", "Arte moderna e contemporânea",
        "Movimentos modernos e contemporâneos questionaram convenções de representação, materiais, autoria e relação entre arte e sociedade.",
        [
          ["Impressionismo e Expressionismo", "Impressionismo investiga luz e percepção; Expressionismo enfatiza deformação e intensidade subjetiva."],
          ["Cubismo e Surrealismo", "Cubismo apresenta múltiplas perspectivas e formas fragmentadas; Surrealismo explora imagens associadas ao sonho e ao inconsciente."],
          ["Dadaísmo e arte moderna", "Dadaísmo questionou instituições e convenções; a arte moderna reúne experiências diversas que não cabem em um único estilo."],
          ["Arte contemporânea", "Pode combinar conceitos, participação, instalações, performances e tecnologias, expandindo definições tradicionais de obra."],
          ["Arte brasileira e Semana de 1922", "A Semana de Arte Moderna tornou-se referência de debates sobre modernização artística no Brasil, em diálogo com contextos e críticas posteriores."]
        ], "Movimentos artísticos se sobrepõem e são interpretados de maneiras diversas."),
      curriculumPart("Arte e cultura", "Arte indígena, africana, popular e patrimônio",
        "Produções artísticas incluem práticas coletivas e individuais em muitos suportes. Reconhecer autoria e contexto evita tratar culturas diversas como homogêneas.",
        [
          ["Arte indígena e africana", "Povos indígenas e africanos produzem tradições artísticas diversas, ligadas a histórias, territórios, cosmologias e práticas vivas."],
          ["Arte popular e patrimônio", "Arte popular comunica conhecimentos e experiências comunitárias; patrimônio cultural pode ser material ou imaterial."],
          ["Música e história da música", "Ritmo, timbre, melodia e contexto social ajudam a compreender tradições musicais e suas transformações."],
          ["Teatro e dança", "Artes cênicas articulam corpo, espaço, tempo, movimento, texto e relação com o público."],
          ["Fotografia, cinema, grafite e arte urbana", "Imagem e audiovisual organizam enquadramento, montagem e narrativa; grafite e arte urbana dialogam com o espaço público."]
        ], "Valorize autoria e contexto e evite generalizações sobre povos ou tradições.")
    ]
  },
  physicalEducation: {
    name: "Educação Física",
    icon: "🏃",
    parts: [
      curriculumPart("Cultura corporal", "Esportes, jogos e práticas corporais",
        "A Educação Física estuda práticas corporais como manifestações culturais e formas de participação, expressão e convivência.",
        [
          ["Cultura corporal", "Inclui práticas e saberes sobre movimento construídos em contextos históricos e culturais."],
          ["Esportes coletivos e individuais", "Modalidades variam em regras, estratégias, habilidades e formas de cooperação ou competição."],
          ["Jogos e brincadeiras", "Práticas lúdicas têm regras flexíveis e significados que podem variar entre comunidades e gerações."],
          ["Danças e lutas", "Expressam tradições, identidades e técnicas corporais; seu ensino deve respeitar origens e diversidade."],
          ["Ginástica e inclusão", "Práticas ginásticas desenvolvem diferentes habilidades; adaptação de regras e ambientes amplia a participação."]
        ], "Atividades corporais não são universais: considere contexto cultural, acesso e inclusão."),
      curriculumPart("Corpo e sociedade", "Saúde, mídia e participação",
        "Corpo, saúde e atividade física são influenciados por condições sociais, acesso a espaços, mídia e oportunidades ao longo da vida.",
        [
          ["Corpo e saúde", "Saúde envolve dimensões físicas, mentais e sociais; prática corporal pode contribuir para o bem-estar conforme contexto e segurança."],
          ["Sedentarismo e qualidade de vida", "Reduzir longos períodos sedentários e buscar movimento adequado pode beneficiar a saúde; recomendações dependem de idade e condição individual."],
          ["Esporte e sociedade", "Esportes refletem identidades, economia, relações de poder, profissionalização e participação comunitária."],
          ["Padrões de beleza e mídia", "Representações midiáticas influenciam percepções corporais e podem reforçar padrões excludentes."],
          ["Direito ao esporte", "Acesso, acessibilidade, respeito e segurança são importantes para inclusão de diferentes corpos e habilidades."]
        ], "Prática física deve respeitar condições individuais; busque orientação de profissionais de saúde quando necessário.")
    ]
  },
  communication: {
    name: "Tecnologia e comunicação",
    icon: "💻",
    parts: [
      curriculumPart("Cultura digital", "Tecnologias e meios de comunicação",
        "Tecnologias da informação e comunicação transformam produção, circulação e acesso a mensagens, articulando meios tradicionais e digitais.",
        [
          ["TIC e comunicação digital", "Tecnologias da informação e comunicação conectam pessoas e serviços por redes e dispositivos; acesso e habilidades são desiguais."],
          ["Meios e linguagem digital", "Cada meio oferece formatos, limites e recursos próprios; textos digitais podem combinar escrita, som, imagem e interação."],
          ["Redes sociais e cultura digital", "Plataformas organizam circulação de conteúdo por regras, interfaces e sistemas de recomendação."],
          ["Publicidade e mídia", "Mensagens publicitárias buscam influenciar escolhas; analise público-alvo, evidências, interesses e estratégias."]
        ], "Considere quem produz, financia e distribui uma mensagem e quais dados ela apresenta."),
      curriculumPart("Cultura digital", "Desinformação e impacto social",
        "A comunicação digital amplia possibilidades de participação e também a circulação de boatos e conteúdos manipulados.",
        [
          ["Fake news e desinformação", "Verifique autoria, data, fontes independentes, evidências e contexto antes de compartilhar uma informação."],
          ["Verificação de conteúdo", "Imagens podem estar fora de contexto ou ser alteradas; busque a publicação original e confirmações confiáveis."],
          ["Impactos sociais da tecnologia", "Tecnologias afetam trabalho, privacidade, acesso a serviços, relações sociais e participação política de maneiras desiguais."],
          ["Comunicação e sociedade", "A comunicação produz sentidos e influencia debates; públicos também interpretam, contestam e transformam mensagens."]
        ], "Antes de compartilhar, interrompa a circulação e confirme a informação em fontes confiáveis.")
    ]
  },
  essay: {
    name: "Redação",
    icon: "✍️",
    priority: "Prioridade muito alta",
    parts: [
      curriculumPart("Estrutura do texto", "Dissertação-argumentativa e planejamento",
        "A redação do ENEM é um texto dissertativo-argumentativo que apresenta uma tese, desenvolve argumentos e propõe uma intervenção relacionada ao tema.",
        [
          ["Introdução e tese", "Apresente o tema, delimite o problema e indique com clareza a posição que será defendida."],
          ["Desenvolvimento 1 e 2", "Cada parágrafo deve sustentar uma parte do raciocínio com explicação, evidências ou repertório pertinente."],
          ["Argumentação e repertório", "Use repertório sociocultural relevante, explicado e conectado ao tema; uma citação isolada não substitui análise."],
          ["Conclusão e intervenção", "Retome o encaminhamento do texto e apresente uma proposta de intervenção viável, detalhada e ligada ao problema."],
          ["Projeto de texto", "Planeje a sequência de ideias, evite tangenciar ou fugir do tema e reserve tempo para revisar."]
        ], "A proposta deve decorrer dos argumentos apresentados, não surgir desconectada na conclusão."),
      curriculumPart("Competências do ENEM", "As cinco competências da redação",
        "A avaliação da redação considera domínio da escrita formal, compreensão do tema, organização argumentativa, coesão e proposta de intervenção.",
        [
          ["Competência 1", "Demonstrar domínio da modalidade escrita formal da Língua Portuguesa."],
          ["Competência 2", "Compreender a proposta e desenvolver o tema dentro dos limites estruturais do texto dissertativo-argumentativo."],
          ["Competência 3", "Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista."],
          ["Competência 4", "Demonstrar conhecimento dos mecanismos linguísticos necessários para construir a argumentação e a coesão."],
          ["Competência 5", "Elaborar proposta de intervenção relacionada ao problema e respeitosa aos direitos humanos."]
        ], "As competências se relacionam; uma boa redação precisa integrar conteúdo, organização e linguagem."),
      curriculumPart("Técnicas de escrita", "Argumentação, coesão e revisão",
        "Escrever bem exige desenvolver ideias e conectar evidências ao argumento central. Revisões ajudam a corrigir problemas de clareza, estrutura e convenções.",
        [
          ["Dados, citações e repertório", "Apresente fontes e explique a relação de dados, citações ou conhecimentos históricos e culturais com a tese."],
          ["Conectivos e parágrafos", "Conectivos expressam causa, contraste e conclusão; cada parágrafo precisa ter uma função e se ligar logicamente aos demais."],
          ["Proposta de intervenção", "Indique agente, ação, meio ou modo, finalidade ou efeito e detalhamento, respeitando os direitos humanos."],
          ["Fuga e tangenciamento", "Mantenha o foco no recorte temático e responda ao problema proposto em todos os parágrafos."],
          ["Revisão e tempo", "Reserve tempo para verificar concordância, regência, pontuação, legibilidade e se a conclusão completa a proposta."]
        ], "A intervenção deve ser específica e viável, sem violar direitos humanos."),
      curriculumPart("Temas para treinar", "Repertório para temas sociais",
        "Praticar temas variados ajuda a desenvolver repertório e a planejar argumentos. Pesquise fontes confiáveis e considere perspectivas de grupos afetados.",
        [
          ["Educação, saúde e desigualdade", "Treine temas sobre educação no Brasil, saúde pública, desigualdade social, racismo, violência e segurança pública."],
          ["Ambiente e tecnologia", "Discuta meio ambiente, mudanças climáticas, tecnologia e inteligência artificial, redes sociais e desinformação."],
          ["Direitos e grupos sociais", "Estude saúde mental, inclusão de pessoas com deficiência, direitos de idosos, crianças e adolescentes e desafios das populações indígenas."],
          ["Trabalho e cidade", "Explore desigualdade de gênero, trabalho e desemprego e mobilidade urbana com dados e contexto."],
          ["Cultura e história", "Analise cultura e preservação histórica, memória e acesso a bens culturais."]
        ], "Construa repertório com fontes verificáveis e use-o para explicar o tema, não apenas para ornamentar o texto.")
    ]
  }
});

const preservedCurriculumSubjects = Object.fromEntries(
  ["philosophy", "sociology", "portuguese", "literature", "english", "spanish", "arts", "physicalEducation", "communication", "essay"]
    .map(id => [id, starterLibrary[id]])
);

Object.assign(starterLibrary, {
  philosophy: {
    parts: [
      curriculumPart("Lógica e conhecimento", "Argumentação, lógica e falácias",
        "Questões de Filosofia podem exigir que você identifique uma tese, examine suas razões e reconheça erros de raciocínio. Separar validade lógica de verdade factual ajuda a avaliar argumentos.",
        [
          ["Tese e premissas", "A tese é a conclusão defendida; premissas são razões ou evidências que sustentam a conclusão. Explicitar cada uma torna o argumento mais fácil de avaliar."],
          ["Dedução e indução", "Um argumento dedutivo pretende que a conclusão decorra necessariamente das premissas; uma indução amplia observações e sustenta uma conclusão provável, não garantida."],
          ["Validade e solidez", "Validade depende da forma lógica: se as premissas fossem verdadeiras, a conclusão teria de ser verdadeira. Solidez exige, além disso, premissas verdadeiras."],
          ["Falácias", "Ataques pessoais, falsas causas, generalizações apressadas e falsos dilemas podem parecer persuasivos, mas não fornecem boas razões."],
          ["Leitura de argumentos", "Identifique conectivos como portanto, porque e contudo; eles sinalizam conclusão, justificativa e contraposição."]
        ], "Uma conclusão verdadeira pode estar apoiada por um argumento inválido; avalie conteúdo e estrutura separadamente."),
      curriculumPart("Ética e filosofia política", "Ética, moral e dilemas contemporâneos",
        "A ética investiga razões para agir e conviver. Em provas, dilemas concretos ajudam a comparar princípios, consequências e responsabilidades.",
        [
          ["Ética e moral", "Moral reúne normas e costumes de grupos e épocas; ética examina criticamente os valores e as justificativas dessas normas."],
          ["Dever e consequências", "Teorias de dever avaliam princípios e obrigações; perspectivas consequencialistas consideram efeitos das ações sobre os envolvidos."],
          ["Virtude e caráter", "A tradição da virtude destaca hábitos, prudência e formação do caráter, em vez de reduzir decisões a regras ou resultados isolados."],
          ["Justiça e direitos", "Debates sobre justiça tratam de igualdade, liberdade, distribuição de recursos e reconhecimento de direitos."],
          ["Tecnologia, ambiente e responsabilidade", "Decisões sobre dados, inteligência artificial e crise ambiental envolvem consequências coletivas, autonomia, transparência e responsabilidade."]
        ], "Ao analisar um dilema, identifique quem é afetado, quais princípios estão em conflito e que evidências faltam.")
    ]
  },
  sociology: {
    parts: [
      curriculumPart("Métodos e pensamento social", "Pesquisa social, dados e interpretação",
        "A Sociologia utiliza métodos para investigar padrões e experiências sociais. Ler dados exige atenção à pergunta, à amostra, à fonte e ao contexto.",
        [
          ["Pergunta de pesquisa", "Uma pergunta clara delimita população, período e fenômeno e evita confundir opinião pessoal com investigação."],
          ["Métodos quantitativos e qualitativos", "Questionários e indicadores permitem comparar padrões; entrevistas, observação e documentos ajudam a compreender sentidos e experiências."],
          ["Amostra e representatividade", "Uma amostra precisa refletir adequadamente a população estudada. Amostras pequenas ou enviesadas não autorizam generalizações amplas."],
          ["Correlação e causalidade", "Duas variáveis podem variar juntas sem que uma cause a outra; fatores adicionais e mecanismos precisam ser examinados."],
          ["Indicadores sociais", "Taxas e médias resumem fenômenos, mas podem esconder diferenças por renda, gênero, raça, território ou faixa etária."]
        ], "Pergunte quem produziu os dados, como foram coletados e quais grupos ou informações ficaram de fora."),
      curriculumPart("Cidadania e movimentos sociais", "Movimentos sociais, direitos e participação",
        "Movimentos sociais organizam demandas coletivas e podem alterar políticas, instituições e ideias de cidadania. Seus repertórios e objetivos variam historicamente.",
        [
          ["Ação coletiva", "Mobilizações podem reunir pessoas afetadas por uma causa e construir identidade, redes e formas de reivindicação."],
          ["Direitos civis, políticos e sociais", "Direitos civis protegem liberdades; políticos incluem participação no poder; sociais relacionam-se a condições dignas de vida."],
          ["Movimentos no Brasil", "Movimentos negros, indígenas, feministas, trabalhistas, estudantis e por moradia atuam em contextos e pautas diversos."],
          ["Instituições e participação", "Voto, conselhos, associações, protestos, consultas públicas e organizações comunitárias são formas distintas de participação."],
          ["Conflito e mudança", "Conquistas legais não encerram necessariamente desigualdades; implementação, acesso e disputas por direitos também importam."]
        ], "Não trate grupos sociais como homogêneos: considere diferenças internas e as vozes dos próprios participantes."),
      curriculumPart("Cultura e sociedade", "Mídia, consumo e indústria cultural",
        "A Sociologia analisa como meios de comunicação, mercados e plataformas participam da produção de cultura e da formação de hábitos e identidades.",
        [
          ["Cultura de massa", "Produtos culturais circulam em larga escala, mas públicos os interpretam de maneiras variadas e podem contestar seus sentidos."],
          ["Consumo e identidade", "Bens e marcas podem comunicar pertencimento e status; escolhas também dependem de renda, publicidade e contexto social."],
          ["Plataformas e algoritmos", "Sistemas de recomendação selecionam conteúdos a partir de dados e objetivos comerciais, afetando visibilidade e circulação."],
          ["Representação e poder", "A mídia pode reproduzir ou desafiar estereótipos; analise quem aparece, quem fala e quais perspectivas são ausentes."],
          ["Globalização cultural", "Circulam referências globais e locais, que podem ser apropriadas, transformadas e disputadas por diferentes grupos."]
        ], "Diferencie a mensagem de uma mídia, os interesses de sua produção e as interpretações do público.")
    ]
  },
  portuguese: {
    parts: [
      curriculumPart("Leitura e interpretação", "Intertextualidade, implícitos e ironia",
        "Compreender textos exige relacionar informações explícitas, contexto e conhecimentos prévios. Ironia e implícitos dependem de pistas linguísticas e da situação de comunicação.",
        [
          ["Inferência", "Inferir é concluir algo que não está declarado diretamente, combinando pistas do texto sem ultrapassar o que elas permitem afirmar."],
          ["Pressupostos e subentendidos", "Algumas expressões pressupõem informações; outras sugerem sentidos dependentes do contexto e da intenção do interlocutor."],
          ["Ironia e humor", "Ironia pode criar distância entre o sentido literal e a intenção. Observe contraste, exagero, pontuação, imagem e contexto."],
          ["Intertextualidade", "Um texto pode citar, parodiar ou transformar outro. Reconhecer a referência ajuda a perceber crítica e novos sentidos."],
          ["Questões de leitura", "Localize o trecho relevante, formule a ideia central e confira se a alternativa respeita o texto inteiro, não apenas uma palavra."]
        ], "Use evidências textuais para justificar uma interpretação; não confunda opinião pessoal com sentido sustentado pelo texto."),
      curriculumPart("Gramática em uso", "Pontuação, ortografia e acentuação",
        "Convenções da escrita contribuem para a clareza e podem alterar relações sintáticas e sentidos. Em provas, a pontuação costuma ser cobrada em contexto.",
        [
          ["Vírgula e estrutura", "A vírgula separa itens e termos deslocados ou explicativos, mas não deve separar sujeito e verbo nem verbo e complemento sem motivo sintático."],
          ["Dois-pontos e travessão", "Dois-pontos podem introduzir explicação, enumeração ou fala; travessões podem marcar diálogo ou inserir comentário."],
          ["Acentuação", "A posição da sílaba tônica e terminações ajudam a aplicar regras de oxítonas, paroxítonas e proparoxítonas; hiatos têm regras próprias."],
          ["Ortografia e hífen", "A grafia padrão depende de convenções e da formação das palavras; consulte regras e dicionários quando houver dúvida."],
          ["Efeito de sentido", "Mudar a pontuação pode alterar foco, ritmo e interpretação. Compare versões antes de decidir se uma construção é adequada."]
        ], "Leia a frase completa e identifique sua estrutura antes de inserir ou avaliar uma vírgula."),
      curriculumPart("Sintaxe", "Orações, período composto e relações de sentido",
        "Períodos compostos articulam orações por coordenação ou subordinação. As conjunções expressam relações lógicas importantes para a interpretação.",
        [
          ["Coordenação", "Orações coordenadas podem ser independentes sintaticamente e relacionadas por adição, oposição, conclusão, explicação ou alternância."],
          ["Subordinação", "Orações subordinadas exercem função em relação a outra oração e podem ter valor substantivo, adjetivo ou adverbial."],
          ["Conjunções e sentido", "Embora, porque, portanto e quando indicam relações diferentes; trocar o conectivo pode mudar causa, concessão, conclusão ou tempo."],
          ["Referência pronominal", "Pronomes retomam ou antecipam termos. Identifique o referente para evitar ambiguidades e acompanhar a coesão."],
          ["Análise em contexto", "Em vez de classificar isoladamente, pergunte que função a oração exerce e que relação de sentido ela estabelece."]
        ], "A classificação gramatical ajuda a explicar o sentido, mas deve partir do contexto da frase."),
      curriculumPart("Linguagem e variação", "Variação linguística, preconceito e adequação",
        "A língua varia com região, situação, grupo e época. A norma-padrão é uma variedade importante em contextos formais, mas não torna as demais formas inferiores.",
        [
          ["Variação regional e social", "Pronúncia, vocabulário e construções variam entre regiões e grupos; diversidade linguística é parte da cultura."],
          ["Registro formal e informal", "Escolhas linguísticas dependem do interlocutor, objetivo, gênero e contexto. Adequação não significa que exista uma única forma legítima de falar."],
          ["Mudança histórica", "A língua se transforma ao longo do tempo; palavras e regras podem mudar de uso e significado."],
          ["Preconceito linguístico", "Desvalorizar falantes por sua variedade reforça desigualdades e confunde diferença linguística com falta de inteligência."],
          ["Norma-padrão", "Convenções formais são exigidas em certos gêneros e avaliações; aprender essas convenções amplia repertório sem apagar outras variedades."]
        ], "Identifique quem fala, para quem, com qual objetivo e em que contexto antes de avaliar a adequação de uma forma.")
    ]
  },
  literature: {
    parts: [
      curriculumPart("Escolas literárias", "Barroco e Arcadismo",
        "Barroco e Arcadismo expressam visões distintas de mundo e de linguagem. Contexto histórico, imagens e escolhas formais ajudam a interpretar cada obra.",
        [
          ["Barroco", "Associado a tensões religiosas e culturais, explora contrastes, antíteses, paradoxos e linguagem elaborada."],
          ["Cultismo e conceptismo", "Cultismo enfatiza jogos de linguagem e imagens; conceptismo organiza raciocínios e argumentos persuasivos."],
          ["Arcadismo", "Valoriza equilíbrio, simplicidade idealizada e referências clássicas, em diálogo com o Iluminismo e a vida urbana."],
          ["Poesia árcade no Brasil", "Autores coloniais trataram de natureza, convenções pastorais e tensões políticas do período."],
          ["Leitura comparativa", "Compare forma, tema e contexto em vez de identificar uma escola apenas por uma palavra ou característica."]
        ], "Movimentos não são caixas rígidas: autores podem combinar convenções e responder a seus contextos de modo singular."),
      curriculumPart("Escolas literárias", "Realismo, Naturalismo e Parnasianismo",
        "Na segunda metade do século XIX, diferentes correntes questionaram idealizações românticas e exploraram sociedade, subjetividade e forma poética.",
        [
          ["Realismo", "Observa relações sociais e conflitos psicológicos, muitas vezes com ironia e crítica às convenções de seu tempo."],
          ["Machado de Assis", "Narradores, ambiguidade e análise psicológica convidam o leitor a desconfiar de versões e interesses apresentados."],
          ["Naturalismo", "Destaca condicionamentos sociais e ambientais, mas suas ideias devem ser lidas criticamente em seu contexto histórico."],
          ["Parnasianismo", "Valoriza composição formal e elaboração do verso, sem que a forma elimine temas e escolhas de perspectiva."],
          ["Comparação de estilos", "Observe narrador, foco, vocabulário e estrutura para explicar diferenças entre obras, não só memorizar rótulos."]
        ], "O narrador pode ser parcial ou não confiável; separe o que ele afirma do que a obra sugere."),
      curriculumPart("Escolas literárias", "Simbolismo e Pré-Modernismo",
        "O fim do século XIX e o início do XX apresentam respostas diversas à modernização, à desigualdade e às convenções literárias.",
        [
          ["Simbolismo", "Explora musicalidade, imagens sugestivas, subjetividade e sentidos que não se esgotam em explicações literais."],
          ["Sinestesia e símbolo", "A sinestesia combina sensações; o símbolo evoca sentidos associados que dependem do conjunto da obra."],
          ["Pré-Modernismo", "Reúne autores e estilos diferentes que expõem conflitos sociais e regiões pouco representadas no discurso oficial."],
          ["Brasil e desigualdade", "Obras do período podem abordar pobreza, racismo, conflitos rurais e exclusão, sem formar uma escola homogênea."],
          ["Leitura histórica", "Relacione escolhas formais a problemas sociais e ao momento histórico, evitando reduzir a obra a documento."]
        ], "Pré-Modernismo é uma denominação didática para um período heterogêneo, não um movimento com regras únicas."),
      curriculumPart("Literatura brasileira", "Modernismo no Brasil: fases e ruptura",
        "O Modernismo brasileiro questionou modelos acadêmicos e experimentou linguagem, forma e temas nacionais em um processo com várias fases.",
        [
          ["Semana de Arte Moderna", "Em 1922, artistas e escritores promoveram debates e experiências de ruptura; o evento não representa sozinho toda a diversidade modernista."],
          ["Primeira fase", "Explora experimentação, humor, linguagem coloquial e revisão crítica de modelos culturais importados."],
          ["Segunda fase", "A poesia e a prosa abordam conflitos sociais, regionalismo, trabalho e transformações políticas com diferentes estilos."],
          ["Terceira fase e contemporaneidade", "Autores ampliam formas narrativas e poéticas e discutem memória, identidade, cidade e subjetividade."],
          ["Leitura de poemas", "Observe ritmo, imagens, voz, quebra de formas e relação entre linguagem e tema antes de interpretar uma ruptura."]
        ], "Modernismo não é sinônimo de ausência de forma; a experimentação também é construída com escolhas precisas."),
      curriculumPart("Leitura literária", "Gêneros, narrador, eu lírico e recursos expressivos",
        "A leitura literária considera como a forma constrói sentidos. Gênero, voz, tempo, espaço e figuras de linguagem orientam a interpretação.",
        [
          ["Narrativa", "Enredo, personagens, narrador, tempo e espaço organizam uma história; narrador não é automaticamente o autor."],
          ["Poesia e eu lírico", "O eu lírico é a voz do poema e pode ser distinto da pessoa biográfica do autor."],
          ["Figuras de linguagem", "Metáfora, metonímia, antítese, hipérbole e ironia produzem efeitos que dependem do contexto."],
          ["Interpretação de forma", "Ritmo, repetição, escolha lexical, ponto de vista e estrutura podem reforçar, complicar ou contradizer o tema."],
          ["Leitura comparada", "Compare textos observando época, gênero, voz e recursos, sustentando conclusões com elementos da própria obra."]
        ], "Nomear uma figura de linguagem é apenas o primeiro passo: explique o efeito que ela produz no trecho.")
    ]
  },
  english: {
    parts: [
      curriculumPart("Leitura em Inglês", "Cognatos, falsos cognatos e formação de palavras",
        "No ENEM, a leitura estratégica ajuda a compreender textos em inglês mesmo sem conhecer todas as palavras. A forma das palavras oferece pistas, mas também pode enganar.",
        [
          ["Cognatos", "Palavras como information, culture e important se parecem com palavras em português e frequentemente têm sentido próximo."],
          ["Falsos cognatos", "Actually significa geralmente na verdade; parents são pais; pretend é fingir. Confirme pelo contexto antes de traduzir."],
          ["Prefixos e sufixos", "Prefixos como un-, re- e dis- e sufixos como -less, -ful e -er ajudam a inferir negação, repetição ou classe gramatical."],
          ["Famílias de palavras", "Recognize, recognition e recognizable compartilham um radical; identificar a classe gramatical ajuda a entender a frase."],
          ["Estratégia de leitura", "Leia título e fonte, localize cognatos e palavras repetidas e só então use o dicionário mental ou inferências."]
        ], "Uma palavra parecida pode ter sentido diferente; use sintaxe e contexto para testar a hipótese."),
      curriculumPart("Leitura em Inglês", "Pronomes, artigos e referências no texto",
        "Pronomes e artigos ajudam a acompanhar quem ou o que está sendo mencionado. Resolver referências evita perder a continuidade de um texto.",
        [
          ["Pronomes pessoais", "I, you, he, she, it, we e they indicam participantes; a forma de objeto inclui me, him, her, us e them."],
          ["Possessivos e demonstrativos", "My, their, this e those conectam objetos ou pessoas a participantes e à distância discursiva."],
          ["Artigos", "A/an introduzem um substantivo contável singular de modo não específico; the costuma indicar referência identificável ou já conhecida."],
          ["Referência pronominal", "Procure o antecedente compatível em número e sentido; ele pode estar na frase anterior ou ser recuperado pelo contexto."],
          ["Leitura de parágrafo", "Substitua mentalmente o pronome pelo possível referente e confira se a frase continua coerente."]
        ], "Não escolha o antecedente apenas por proximidade: confira concordância e sentido."),
      curriculumPart("Gramática em contexto", "Tempos verbais, passado e present perfect",
        "O tempo verbal situa ações e experiências e contribui para a organização do texto. A interpretação deve considerar marcadores temporais e o contexto.",
        [
          ["Simple present", "Expressa hábitos, fatos gerais e situações atuais; na terceira pessoa singular, o verbo frequentemente recebe -s."],
          ["Simple past", "Descreve ações concluídas no passado; verbos regulares usam -ed, enquanto verbos irregulares têm formas próprias."],
          ["Present continuous", "Be + verbo com -ing costuma apresentar uma ação em andamento ou uma situação temporária."],
          ["Present perfect", "Have/has + particípio relaciona uma experiência ou ação passada ao presente; não costuma especificar um passado encerrado com data."],
          ["Marcadores temporais", "Yesterday e last year frequentemente acompanham passado simples; since e for podem acompanhar present perfect."]
        ], "Compare a forma verbal com expressões de tempo e com a relação entre passado e presente."),
      curriculumPart("Gramática em contexto", "Voz passiva, comparativos e modais",
        "Estruturas gramaticais ajudam a destacar participantes e relações. Em textos informativos, a voz passiva e os verbos modais aparecem com frequência.",
        [
          ["Voz passiva", "Be + particípio destaca quem ou o que recebe uma ação; o agente pode ser omitido quando não é relevante ou conhecido."],
          ["Comparativos e superlativos", "Adjetivos curtos frequentemente usam -er/-est; formas longas usam more/most, com algumas exceções."],
          ["Can e could", "Podem expressar habilidade, possibilidade ou pedido, dependendo da situação."],
          ["Must, should e might", "Must indica obrigação ou forte dedução; should sugere recomendação; might indica possibilidade."],
          ["Interpretação", "Identifique quem pratica e quem recebe a ação e avalie a força de certeza ou obrigação expressa pelo modal."]
        ], "A tradução de um modal muda com o contexto; interprete o enunciado inteiro."),
      curriculumPart("Leitura em Inglês", "Conectores, causa e argumentação",
        "Conectores mostram como ideias se relacionam e ajudam a identificar a organização argumentativa de artigos, campanhas e textos de opinião.",
        [
          ["Adição e contraste", "And e moreover adicionam ideias; but, however e although indicam oposição ou concessão."],
          ["Causa e consequência", "Because e since podem introduzir causa; so e therefore podem indicar consequência ou conclusão."],
          ["Exemplificação e conclusão", "For example apresenta exemplo; in conclusion sinaliza fechamento, mas confira o argumento que o texto realmente conclui."],
          ["Marcadores de opinião", "May, likely e apparently expressam graus de possibilidade, não a mesma certeza de must ou always."],
          ["Mapa do texto", "Marque tese, evidências, contraponto e conclusão; conectores orientam essa leitura sem substituí-la."]
        ], "Não confunda um conectivo com a relação efetivamente construída: confira a lógica das duas ideias ligadas."),
      curriculumPart("Leitura em Inglês", "Textos multimodais, campanhas e gráficos",
        "Textos de prova podem combinar escrita, imagem, dados, manchetes e recursos gráficos. A resposta depende de integrar essas linguagens.",
        [
          ["Fonte e público", "Observe autor, veículo, data e público-alvo para entender propósito e contexto da mensagem."],
          ["Imagem e legenda", "Cores, enquadramento e legenda podem complementar ou contradizer o texto verbal."],
          ["Gráficos e infográficos", "Leia título, eixos, unidades, legenda e período; depois compare tendências sem extrapolar os dados."],
          ["Campanhas", "Identifique problema, público, chamada para ação e recursos persuasivos; diferencie informação de apelo."],
          ["Questões de múltipla escolha", "Volte à evidência textual ou visual que sustenta a alternativa e descarte opções que extrapolam ou contradizem a fonte."]
        ], "Integre palavra e imagem: muitas questões dependem da relação entre os dois modos.")
    ]
  },
  spanish: {
    parts: [
      curriculumPart("Leitura em Espanhol", "Cognatos, heterossemânticos e formação de palavras",
        "A leitura em espanhol pode aproveitar semelhanças com o português, mas há palavras parecidas com sentidos diferentes e diferenças de uso.",
        [
          ["Cognatos", "Palavras como cultura, problema e importante frequentemente se parecem e compartilham sentidos próximos."],
          ["Heterossemânticos", "Embarazada significa grávida; apellido é sobrenome; vaso é copo. O contexto ajuda a evitar traduções enganosas."],
          ["Falsos amigos em contexto", "Uma forma semelhante não garante significado igual. Leia a frase e verifique se a tradução faz sentido."],
          ["Prefixos e sufixos", "Des-, re-, -ción e -mente oferecem pistas de negação, repetição, substantivos e advérbios."],
          ["Inferência lexical", "Combine cognatos, classe gramatical, repetição e tema para inferir palavras desconhecidas."]
        ], "O parentesco entre línguas ajuda na leitura, mas não elimina falsos cognatos e diferenças de uso."),
      curriculumPart("Gramática em contexto", "Artigos, pronomes e contrações",
        "Artigos e pronomes organizam referências no texto. Algumas formas espanholas diferem do português e podem alterar a interpretação.",
        [
          ["Artigos definidos", "El, la, los e las concordam em gênero e número com o substantivo."],
          ["Artigos indefinidos", "Un, una, unos e unas introduzem referências não específicas; uno pode mudar para un diante de substantivo masculino singular."],
          ["Pronomes pessoais", "Yo, tú, él/ella, nosotros e ellos indicam participantes; formas de tratamento variam entre regiões."],
          ["Contrações", "A preposição a + el forma al; de + el forma del. As contrações não se aplicam a nomes próprios iniciados por El."],
          ["Referência no texto", "Acompanhe gênero, número e sentido para descobrir a qual pessoa ou ideia cada pronome se refere."]
        ], "Variedades regionais podem preferir formas diferentes de tratamento sem que uma única forma represente todo o espanhol."),
      curriculumPart("Gramática em contexto", "Presente, pretéritos e futuro",
        "As formas verbais situam ações e ajudam a construir sequência temporal. Marcadores e contexto distinguem hábitos, fatos concluídos e continuidade.",
        [
          ["Presente", "Verbos regulares terminam em -ar, -er ou -ir; as terminações variam conforme a pessoa e o grupo verbal."],
          ["Pretérito indefinido", "Apresenta ações concluídas em um período passado, como ayer estudié."],
          ["Pretérito imperfecto", "Pode expressar hábito, descrição ou ação em curso no passado, como cuando era niño."],
          ["Futuro e ir a", "O futuro pode ser formado por terminações próprias ou por ir + a + infinitivo para planos e previsões."],
          ["Marcadores de tempo", "Ayer, antes, mientras, siempre e mañana ajudam a interpretar a relação temporal, mas não determinam sozinhos o sentido."]
        ], "Compare indefinido e imperfecto observando se a ação é apresentada como concluída, habitual ou descritiva."),
      curriculumPart("Gramática em contexto", "Ser, estar, haber e verbos pronominais",
        "Verbos de alta frequência em espanhol têm usos que não correspondem exatamente ao português. A função na frase orienta a escolha.",
        [
          ["Ser", "É comum para identidade, características, origem, profissão e hora, mas o contexto é determinante."],
          ["Estar", "É comum para localização e estados ou condições; não equivale sempre a algo temporário."],
          ["Hay e está", "Hay apresenta existência ou quantidade; está localiza ou identifica algo específico."],
          ["Verbos pronominais", "Pronome reflexivo acompanha verbos como levantarse e pode fazer parte do verbo ou indicar ação sobre si."],
          ["Concordância", "Verifique pessoa e número do sujeito e reconheça sujeitos omitidos, frequentes em espanhol."]
        ], "Compare hay libros (existem livros) com el libro está aquí (o livro está aqui)."),
      curriculumPart("Leitura em Espanhol", "Conectores, opinião e argumentação",
        "Conectores organizam textos e sinalizam causa, oposição, concessão e conclusão. Reconhecê-los ajuda a reconstruir a tese.",
        [
          ["Adição e contraste", "Además acrescenta informação; pero e sin embargo introduzem contraste."],
          ["Causa e consequência", "Porque e ya que podem introduzir causa; por eso e por lo tanto podem indicar consequência."],
          ["Concessão e condição", "Aunque introduz concessão; si pode apresentar condição. Leia o modo verbal e a relação entre as orações."],
          ["Opinião e evidência", "Diferencie afirmações do autor, dados citados e posições atribuídas a outras pessoas."],
          ["Estratégia de leitura", "Localize a tese, os conectores, exemplos e conclusão e confirme a interpretação com evidências do texto."]
        ], "Conectores semelhantes podem ter usos distintos; confirme a relação lógica no trecho."),
      curriculumPart("Leitura em Espanhol", "Variedades, gêneros e textos multimodais",
        "O espanhol é falado em muitos países e apresenta variações lexicais, fonéticas e gramaticais. Textos de prova podem integrar imagem, gráfico e linguagem verbal.",
        [
          ["Diversidade linguística", "Léxico e pronúncia variam entre países e regiões; nenhuma variedade isolada representa todo o idioma."],
          ["Gêneros e propósito", "Notícia, campanha, crônica, poema e postagem têm objetivos e convenções diferentes."],
          ["Fonte e contexto", "Identifique autoria, local, data, público e situação antes de atribuir uma intenção ao texto."],
          ["Elementos visuais", "Imagens, infográficos e legendas podem reforçar, limitar ou ironizar a mensagem escrita."],
          ["Leitura crítica", "Observe quem fala, qual problema apresenta, quais evidências usa e que resposta espera do público."]
        ], "Use pistas regionais para compreender contexto, sem tratar diferenças como erros.")
    ]
  },
  arts: {
    parts: [
      curriculumPart("Linguagens artísticas", "Elementos visuais e leitura de imagens",
        "Interpretar artes visuais envolve observar como elementos formais e contexto produzem sentidos. Não existe uma única leitura automática da imagem.",
        [
          ["Ponto, linha e forma", "Linhas e formas organizam o espaço, criam direção e podem sugerir movimento, estabilidade ou tensão."],
          ["Cor, luz e contraste", "Paleta, luminosidade e contraste destacam elementos e influenciam a atmosfera da composição."],
          ["Composição e perspectiva", "Enquadramento, escala, equilíbrio e perspectiva orientam o olhar e constroem relações entre figuras."],
          ["Material e técnica", "Pintura, fotografia, colagem, escultura e meios digitais oferecem possibilidades e limites específicos."],
          ["Interpretação", "Relacione escolhas visuais ao contexto, ao tema e às condições de produção, citando elementos observáveis."]
        ], "Descreva o que vê antes de inferir intenção ou significado."),
      curriculumPart("Linguagens artísticas", "Música: ritmo, timbre e contexto",
        "A música organiza sons no tempo e pode ser analisada por características sonoras, formas de produção e contextos culturais.",
        [
          ["Ritmo e pulso", "Pulso é uma referência regular de tempo; ritmo organiza durações e acentos de maneiras variadas."],
          ["Melodia e harmonia", "Melodia organiza sucessões de alturas; harmonia relaciona sons simultâneos e pode apoiar ou tensionar a melodia."],
          ["Timbre e dinâmica", "Timbre diferencia fontes sonoras; dinâmica indica variações de intensidade."],
          ["Gêneros e culturas", "Gêneros musicais se formam em contextos históricos e sociais, atravessando influências, tecnologias e deslocamentos."],
          ["Escuta crítica", "Observe instrumentos, voz, repetição, letra e circulação para explicar como a obra produz efeitos."]
        ], "Não confunda volume com altura: volume é intensidade; altura distingue sons graves e agudos."),
      curriculumPart("Linguagens artísticas", "Teatro, dança e performance",
        "Teatro, dança e performance articulam corpo, espaço, tempo e presença. A leitura considera tanto a composição quanto a relação com o público.",
        [
          ["Corpo e gesto", "Postura, movimento e gesto podem comunicar relações e sentidos sem depender de fala."],
          ["Espaço cênico", "Palco, rua, arena e outros espaços influenciam a proximidade e a participação do público."],
          ["Elementos teatrais", "Atuação, texto, cenário, figurino, luz e som podem colaborar ou entrar em tensão."],
          ["Dança e composição", "Movimento, ritmo, níveis e ocupação espacial formam sequências e estilos diversos."],
          ["Performance", "A performance pode questionar fronteiras entre arte e vida, usando presença e contexto como parte da obra."]
        ], "Analise a relação entre corpo, espaço e espectador, não apenas o tema declarado."),
      curriculumPart("Arte e cultura", "Arte brasileira, modernismo e cultura popular",
        "A arte no Brasil se desenvolve por encontros, conflitos e trocas entre tradições indígenas, africanas, europeias e muitas outras.",
        [
          ["Modernismo brasileiro", "Artistas modernistas experimentaram linguagens e discutiram criticamente representações do Brasil."],
          ["Arte popular e cotidiana", "Práticas artesanais, festas, design e produção comunitária possuem repertórios e técnicas próprios."],
          ["Matrizes africanas e indígenas", "Produções diversas articulam memória, cosmologia, território e resistência; não são tradições uniformes ou apenas históricas."],
          ["Hibridismo cultural", "Linguagens artísticas podem combinar referências locais e globais, transformando materiais e repertórios."],
          ["Leitura crítica", "Questione quem define o que é arte, quais instituições legitimam obras e quais produções ficam invisibilizadas."]
        ], "Evite tratar culturas inteiras como homogêneas; reconheça autoria e contextos específicos."),
      curriculumPart("Arte e sociedade", "Patrimônio, museus e políticas culturais",
        "Patrimônio cultural inclui bens materiais e imateriais escolhidos e preservados por comunidades e instituições. A preservação envolve disputas e responsabilidades.",
        [
          ["Patrimônio material", "Edificações, objetos, sítios e paisagens podem ser reconhecidos por seus valores históricos, artísticos ou sociais."],
          ["Patrimônio imaterial", "Saberes, celebrações, práticas e formas de expressão são transmitidos e transformados por comunidades."],
          ["Memória e seleção", "Toda política de patrimônio seleciona narrativas; inclusão de diferentes grupos altera a compreensão do passado."],
          ["Museus e acervos", "Exposição, legenda, proveniência e restituição influenciam como objetos e histórias são apresentados."],
          ["Acesso à cultura", "Financiamento, educação, acessibilidade e participação comunitária afetam quem pode criar e fruir cultura."]
        ], "Preservar não é congelar: comunidades mantêm e transformam práticas culturais.")
    ]
  },
  physicalEducation: {
    parts: [
      curriculumPart("Corpo e saúde", "Exercício físico, treinamento e capacidades corporais",
        "Atividade física envolve movimentos diversos; exercício é planejado com objetivos. Frequência, intensidade, duração e tipo precisam considerar condições individuais.",
        [
          ["Capacidades físicas", "Resistência, força, flexibilidade, velocidade e coordenação são capacidades diferentes e desenvolvidas por práticas variadas."],
          ["Princípios do treinamento", "Regularidade, progressão, especificidade e recuperação ajudam a organizar treino sem tratar corpos como iguais."],
          ["Frequência e intensidade", "A carga adequada depende de saúde, experiência, objetivo e resposta individual; progressão gradual reduz riscos."],
          ["Aquecimento e recuperação", "Aquecimento prepara para a atividade; descanso, sono e hidratação participam da recuperação."],
          ["Segurança e orientação", "Dor intensa, sintomas ou condição de saúde exigem interrupção e avaliação profissional, não a insistência no exercício."]
        ], "Recomendações gerais não substituem orientação individualizada de profissionais de saúde e educação física."),
      curriculumPart("Corpo e saúde", "Fisiologia do exercício e sistemas do corpo",
        "Durante o exercício, sistemas respiratório, circulatório, muscular e nervoso atuam de forma integrada para fornecer energia e controlar o movimento.",
        [
          ["Sistema cardiovascular", "Coração e vasos transportam sangue, oxigênio, nutrientes e produtos do metabolismo."],
          ["Sistema respiratório", "Ventilação e trocas gasosas contribuem para disponibilizar oxigênio e eliminar dióxido de carbono."],
          ["Músculos e energia", "Contração muscular utiliza energia química; esforços variam na contribuição relativa de vias metabólicas."],
          ["Adaptação e recuperação", "Adaptações dependem de estímulo, descanso, alimentação, condições de saúde e continuidade."],
          ["Sinais do corpo", "Fadiga é esperada em algum grau, mas mal-estar intenso, dor aguda ou falta de ar incomum requerem atenção."]
        ], "O desempenho não depende de um único sistema; corpo e ambiente interagem durante a prática."),
      curriculumPart("Práticas corporais", "Esportes, regras, tática e cooperação",
        "Esportes são práticas culturais com regras e objetivos variados. A análise pode considerar habilidades, estratégias, inclusão e relações sociais.",
        [
          ["Esportes de invasão", "Equipes avançam em espaço compartilhado para criar oportunidades de pontuação e defender sua meta."],
          ["Esportes de rede e parede", "Jogadores enviam objetos ao campo adversário ou contra uma parede, com regras próprias de alternância."],
          ["Esportes de marca e precisão", "O desempenho pode ser comparado por tempo, distância, altura ou proximidade de um alvo."],
          ["Tática e tomada de decisão", "Leitura do espaço, antecipação, cooperação e escolha de ações podem ser mais importantes que força isolada."],
          ["Regras e inclusão", "Regras podem ser adaptadas para ampliar participação sem apagar a lógica e os objetivos da prática."]
        ], "Diferencie técnica individual, estratégia coletiva e condições de acesso à modalidade."),
      curriculumPart("Práticas corporais", "Ginásticas, lutas, jogos e brincadeiras",
        "Práticas corporais incluem modalidades com histórias e sentidos diversos. Contextualizar suas origens ajuda a evitar estereótipos.",
        [
          ["Ginásticas", "Ginásticas podem envolver condicionamento, apresentação, competição, consciência corporal ou participação para todos."],
          ["Lutas", "Lutas possuem técnicas, regras, filosofias e contextos culturais próprios; não são sinônimo de violência descontrolada."],
          ["Jogos e brincadeiras", "Regras podem ser negociadas e transformadas; jogos desenvolvem interação, estratégia e repertórios culturais."],
          ["Capoeira", "A capoeira articula luta, jogo, música e memória afro-brasileira, com histórias de resistência e transformação."],
          ["Respeito e segurança", "Práticas devem considerar consentimento, regras, espaço, materiais e diferenças entre participantes."]
        ], "Reconheça a origem cultural e os sentidos próprios de cada prática, em vez de reduzi-la a exercício."),
      curriculumPart("Corpo e sociedade", "Corpo, identidade, gênero e padrões estéticos",
        "Os sentidos atribuídos ao corpo são construídos socialmente e variam com cultura, mídia, época e relações de poder.",
        [
          ["Padrões corporais", "Publicidade e redes difundem padrões que podem ser restritos e pouco representativos da diversidade real."],
          ["Identidade e expressão", "Experiências corporais relacionam-se a gênero, raça, idade, deficiência, classe e pertencimento cultural."],
          ["Estigma e discriminação", "Deboche e exclusão por aparência ou habilidade afetam participação, autoestima e acesso a práticas."],
          ["Mídia e consumo", "Imagens editadas e publicidade podem vincular produtos a ideais corporais; analise interesses e efeitos."],
          ["Participação e respeito", "Ambientes inclusivos oferecem adaptações e combatem discriminação sem pressupor uma experiência corporal universal."]
        ], "Questione quem ganha com um padrão de corpo e quem é excluído por ele."),
      curriculumPart("Saúde e sociedade", "Saúde pública, lazer e qualidade de vida",
        "Saúde e atividade física dependem de condições individuais e coletivas, como tempo, segurança, renda, transporte, espaços públicos e acesso a serviços.",
        [
          ["Conceito ampliado de saúde", "Saúde envolve dimensões físicas, mentais e sociais, não apenas ausência de doença."],
          ["Lazer como direito", "O acesso a espaços, tempo livre e práticas culturais e corporais é influenciado por desigualdades sociais."],
          ["Políticas públicas", "Equipamentos comunitários, transporte, segurança e programas locais podem apoiar práticas acessíveis."],
          ["Sedentarismo e contexto", "Comportamentos são influenciados por trabalho, mobilidade, ambiente construído e oportunidades, não só por escolhas individuais."],
          ["Leitura de indicadores", "Ao interpretar dados de saúde, confira população, período, definição usada e desigualdades entre grupos."]
        ], "Evite culpabilizar indivíduos por barreiras sociais e ambientais que limitam escolhas.")
    ]
  },
  communication: {
    parts: [
      curriculumPart("Cultura digital", "Privacidade, dados pessoais e segurança digital",
        "Serviços digitais coletam e processam dados em diferentes etapas. Compreender consentimento, finalidade e riscos ajuda a avaliar práticas de plataformas.",
        [
          ["Dados pessoais", "Informações que identificam ou podem identificar alguém merecem proteção e uso compatível com uma finalidade legítima."],
          ["Rastros digitais", "Buscas, localização, cliques e cadastros podem gerar perfis, inclusive quando dados são combinados."],
          ["Consentimento e transparência", "Avisos devem explicar que dados são coletados, para quê, por quanto tempo e com quem são compartilhados."],
          ["Segurança e golpes", "Senhas únicas, autenticação em dois fatores e verificação de links reduzem alguns riscos, mas não eliminam todo abuso."],
          ["Direitos e responsabilidade", "Privacidade, acesso, correção e proteção de dados envolvem direitos, deveres e regras legais."]
        ], "Antes de fornecer dados, pergunte se são necessários e qual uso foi informado."),
      curriculumPart("Cultura digital", "Algoritmos, inteligência artificial e vieses",
        "Algoritmos processam dados segundo regras; sistemas de inteligência artificial aprendem padrões de conjuntos de dados e podem reproduzir limitações desses dados.",
        [
          ["Algoritmos", "Um algoritmo define etapas para processar entradas e produzir resultados; diferentes escolhas de projeto afetam o que é priorizado."],
          ["Dados de treinamento", "Dados incompletos ou enviesados podem levar sistemas a errar mais para determinados grupos ou situações."],
          ["Recomendação e bolhas", "Sistemas de recomendação podem ampliar conteúdos semelhantes, mas seus efeitos variam conforme projeto e uso."],
          ["IA generativa", "Sistemas podem produzir textos e imagens plausíveis sem garantir que sejam verdadeiros; verificação continua necessária."],
          ["Avaliação crítica", "Considere finalidade, dados, erros, impactos, transparência e possibilidade de contestar decisões automatizadas."]
        ], "Uma resposta bem formulada por um sistema não é, por si só, evidência de que seja correta."),
      curriculumPart("Tecnologia e sociedade", "Exclusão digital e acessibilidade",
        "Acesso à tecnologia envolve conectividade, dispositivos, habilidades, acessibilidade e condições para usar serviços de modo significativo.",
        [
          ["Acesso e conectividade", "Cobertura de internet e qualidade da conexão variam por região, renda e infraestrutura."],
          ["Letramento digital", "Usar tecnologia inclui pesquisar, avaliar fontes, proteger dados e produzir conteúdo, não apenas operar dispositivos."],
          ["Acessibilidade", "Legendas, leitores de tela, navegação por teclado, contraste e linguagem clara podem ampliar participação."],
          ["Serviços essenciais", "Quando serviços migram para o digital, alternativas de atendimento e suporte são importantes para não excluir usuários."],
          ["Políticas de inclusão", "Infraestrutura, formação, desenho universal e participação das comunidades contribuem para reduzir barreiras."]
        ], "Disponibilizar um aplicativo não significa que todas as pessoas consigam ou possam utilizá-lo."),
      curriculumPart("Tecnologia e trabalho", "Automação, trabalho e economia de plataformas",
        "Tecnologias alteram tarefas, ocupações e formas de contratação. Seus efeitos dependem de escolhas empresariais, políticas públicas e direitos trabalhistas.",
        [
          ["Automação de tarefas", "Sistemas podem substituir algumas tarefas, complementar outras e criar novas demandas de qualificação."],
          ["Plataformas de trabalho", "Aplicativos conectam clientes e trabalhadores, mas regras de remuneração, avaliação e proteção variam."],
          ["Vigilância e gestão", "Métricas digitais podem acompanhar produtividade e distribuir tarefas, afetando autonomia e privacidade."],
          ["Desigualdade e formação", "A transição tecnológica distribui custos e oportunidades de modo desigual entre setores e grupos."],
          ["Análise de impactos", "Compare produtividade, qualidade do emprego, remuneração, segurança, acesso e distribuição dos ganhos."]
        ], "Tecnologia não determina sozinha o resultado social; instituições e decisões coletivas também importam."),
      curriculumPart("Comunicação e mídia", "Publicidade, persuasão e economia da atenção",
        "Mensagens persuasivas combinam linguagem, imagem, dados e estratégias de circulação para captar atenção e influenciar decisões.",
        [
          ["Público-alvo", "Anúncios adaptam linguagem e canais a públicos definidos, às vezes usando dados comportamentais."],
          ["Apelos persuasivos", "Autoridade, emoção, urgência, humor e prova social são recursos que precisam ser avaliados criticamente."],
          ["Conteúdo patrocinado", "Publicidade nativa pode parecer conteúdo editorial; identificação e transparência ajudam a reconhecer o interesse comercial."],
          ["Economia da atenção", "Plataformas podem competir pelo tempo do usuário e favorecer conteúdos capazes de gerar interação."],
          ["Leitura crítica", "Diferencie informação verificável, opinião, publicidade e chamada para ação."]
        ], "Pergunte quem financia a mensagem e que ação espera de quem a recebe."),
      curriculumPart("Comunicação e cidadania", "Desinformação, checagem e circulação de conteúdo",
        "Verificar uma informação exige examinar origem, evidências, contexto e confirmação independente antes de compartilhar.",
        [
          ["Origem e autoria", "Localize a publicação original e identifique quem produziu o conteúdo e com que experiência ou interesse."],
          ["Data e contexto", "Conteúdo antigo ou verdadeiro pode ser apresentado fora de contexto para sustentar uma afirmação enganosa."],
          ["Evidência e fonte", "Abra links, procure documentos e dados originais e compare com fontes independentes e confiáveis."],
          ["Imagens e vídeos", "Buscas reversas e quadros-chave podem ajudar a encontrar a origem, mas resultados precisam ser conferidos."],
          ["Compartilhamento responsável", "Se não for possível confirmar, não amplifique; corrija com evidências sem repetir desnecessariamente o boato."]
        ], "Verifique a afirmação original, não apenas manchetes, capturas de tela ou comentários sobre ela.")
    ]
  },
  essay: {
    parts: [
      curriculumPart("Estrutura do texto", "Leitura do tema, recorte e planejamento da redação",
        "Antes de escrever, identifique o tema e o problema específico solicitado. Um plano breve ajuda a manter foco e construir uma progressão argumentativa.",
        [
          ["Tema e recorte", "Tema é o assunto amplo; recorte delimita o aspecto que a proposta pede para discutir."],
          ["Palavras de comando", "Analise verbos e expressões do enunciado para identificar o problema e os limites da abordagem."],
          ["Tese", "A tese responde ao recorte com uma posição clara que possa ser desenvolvida por razões."],
          ["Projeto de texto", "Organize introdução, argumentos e conclusão antes de redigir; cada parágrafo deve cumprir uma função."],
          ["Checagem de foco", "Ao revisar, confira se todos os parágrafos respondem ao tema e se a conclusão decorre da discussão."]
        ], "Uma introdução bem escrita não compensa uma redação que discute outro recorte."),
      curriculumPart("Argumentação", "Tese, evidências e desenvolvimento de argumentos",
        "Um argumento eficaz combina afirmação, justificativa e evidência pertinente. Dados ou citações precisam ser interpretados e conectados à tese.",
        [
          ["Afirmação", "Apresente a ideia central do parágrafo e mostre como ela contribui para responder ao tema."],
          ["Justificativa", "Explique mecanismos, causas ou consequências; não deixe a relação entre ideia e tese implícita."],
          ["Evidências", "Exemplos históricos, dados e repertório podem sustentar o raciocínio quando são confiáveis e relevantes."],
          ["Contra-argumento", "Reconhecer uma objeção pertinente pode fortalecer a análise se ela for respondida com razões."],
          ["Progressão", "Cada parágrafo deve acrescentar uma etapa do raciocínio, evitando repetição ou afirmações sem apoio."]
        ], "Não use um dado apenas como decoração: explique o que ele demonstra e quais são seus limites."),
      curriculumPart("Competências do ENEM", "Proposta de intervenção completa e direitos humanos",
        "A intervenção deve responder ao problema discutido e indicar elementos concretos de execução, respeitando os direitos humanos.",
        [
          ["Agente", "Identifique quem pode agir, como poder público, escola, comunidade ou organização, de acordo com sua competência."],
          ["Ação e meio", "Diga o que será feito e como será executado, evitando verbos vagos sem mecanismo."],
          ["Finalidade", "Explique qual resultado a proposta busca e como se relaciona à causa ou consequência debatida."],
          ["Detalhamento", "Acrescente informação concreta sobre público, etapas, recursos ou acompanhamento, quando pertinente."],
          ["Direitos humanos", "A proposta não pode defender violência, discriminação ou supressão de direitos; avalie efeitos sobre grupos afetados."]
        ], "A intervenção deve ser viável, específica e coerente com a argumentação desenvolvida."),
      curriculumPart("Prática de redação", "Revisão por competências e gestão do tempo",
        "Revisar de modo sistemático ajuda a identificar problemas de tema, argumento, coesão e convenções da escrita dentro do tempo disponível.",
        [
          ["Leitura do comando", "Reserve tempo inicial para delimitar tema, recorte e gênero, registrando uma tese e dois eixos argumentativos."],
          ["Revisão de conteúdo", "Confira se há tese, progressão, evidências explicadas e conclusão ligada ao problema."],
          ["Revisão linguística", "Verifique períodos longos, concordância, regência, pontuação, repetição e legibilidade."],
          ["Revisão da intervenção", "Cheque agente, ação, meio, finalidade, detalhamento e respeito aos direitos humanos."],
          ["Autoavaliação", "Use a matriz oficial e critérios publicados para localizar pontos de melhoria; estimativas pessoais não equivalem à nota oficial."]
        ], "Treine com tempo e critérios explícitos, mas consulte sempre as regras e a matriz da edição vigente.")
    ]
  }
});

for (const [id, original] of Object.entries(preservedCurriculumSubjects)) {
  const additions = starterLibrary[id];
  starterLibrary[id] = {
    ...original,
    ...additions,
    parts: [...original.parts, ...additions.parts]
  };
}
