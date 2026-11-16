const difficultyNames = {
  basic: "Básico",
  intermediate: "Intermediário",
  advanced: "Avançado"
};
const difficultyDescriptions = {
  basic: "Aprenda conceitos essenciais e pré-requisitos.",
  intermediate: "Conecte ideias e aplique os métodos em situações novas.",
  advanced: "Integre conceitos, justifique escolhas e avalie limites."
};

function difficultyForIndex(index, total) {
  if (total <= 1) return "basic";
  if (total === 2) return index === 0 ? "basic" : "intermediate";
  const firstBoundary = Math.ceil(total / 3);
  const secondBoundary = Math.ceil(total * 2 / 3);
  if (index < firstBoundary) return "basic";
  if (index < secondBoundary) return "intermediate";
  return "advanced";
}

function studyChallenge(part) {
  const points = Array.isArray(part.points) ? part.points : [];
  const first = points[0]?.[0] ?? part.title;
  const second = points[Math.min(1, points.length - 1)]?.[0] ?? first;
  const last = points[points.length - 1]?.[0] ?? first;
  const level = part.difficulty ?? "basic";
  if (level === "advanced") {
    return `Analise uma situação concreta usando ${first}, ${second} e ${last}. Apresente evidências e explique uma limitação ou condição importante.`;
  }
  if (level === "intermediate") {
    return `Explique a relação entre ${first} e ${second}. Em seguida, aplique essa relação a um exemplo diferente do texto.`;
  }
  return `Explique ${first} com suas palavras e crie um exemplo simples. Confira se ele respeita as definições da teoria.`;
}

const workedExamples = {
  "Números e operações": {
    problem: "Calcule (−3)² + 12 ÷ (−4).",
    steps: ["Resolva primeiro a potência: (−3)² = 9.", "Faça a divisão: 12 ÷ (−4) = −3.", "Some os resultados: 9 + (−3) = 6."],
    result: "Resultado: 6. Os parênteses mostram que o −3 inteiro está elevado ao quadrado."
  },
  "Frações, divisibilidade, MMC e MDC": {
    problem: "Some 3/4 + 5/6.",
    steps: ["Encontre o MMC de 4 e 6: MMC = 12.", "Transforme as frações: 3/4 = 9/12 e 5/6 = 10/12.", "Some os numeradores e mantenha o denominador: 9/12 + 10/12 = 19/12."],
    result: "Resultado: 19/12 = 1 7/12. Só somamos numeradores depois de igualar os denominadores."
  },
  "Razões, proporções e regra de três": {
    problem: "Quatro cadernos custam R$ 30. Quanto custam 7 pelo mesmo preço unitário?",
    steps: ["Identifique a proporção direta: mais cadernos custam mais.", "Monte 4/7 = 30/x e multiplique cruzado: 4x = 210.", "Divida por 4: x = 52,5."],
    result: "Resultado: R$ 52,50. Confira a unidade e a hipótese de preço por caderno constante."
  },
  "Potências, raízes e notação científica": {
    problem: "Escreva 0,00072 em notação científica.",
    steps: ["Desloque a vírgula até obter um número entre 1 e 10: 7,2.", "A vírgula foi deslocada 4 casas para a direita.", "Deslocamento para a direita corresponde a expoente negativo."],
    result: "Resultado: 7,2 × 10⁻⁴."
  },
  "Expressões algébricas": {
    problem: "Calcule 2x + 3y − x para x = 4 e y = 2.",
    steps: ["Substitua as letras: 2(4) + 3(2) − 4.", "Faça multiplicações: 8 + 6 − 4.", "Resolva da esquerda para a direita: 10."],
    result: "Resultado: 10. A substituição deve ocorrer antes de simplificar numericamente."
  },
  "Matemática Financeira — conceitos básicos": {
    problem: "Um empréstimo de R$ 1.200 cobra juros simples de 2% ao mês por 5 meses. Determine juros e montante.",
    steps: ["Separe os dados: C = 1.200, i = 0,02 ao mês e n = 5 meses.", "Use J = C × i × n: J = 1.200 × 0,02 × 5 = 120.", "Some juros e capital: M = C + J = 1.200 + 120."],
    result: "Juros: R$ 120; montante: R$ 1.320. A taxa e o prazo precisam estar na mesma unidade de tempo."
  },
  "Porcentagem e variação percentual": {
    problem: "Um produto de R$ 240 recebe desconto de 15%. Qual é o preço final?",
    steps: ["Converta 15% em decimal: 15/100 = 0,15.", "Calcule o desconto: 240 × 0,15 = R$ 36.", "Subtraia do preço original: 240 − 36 = 204."],
    result: "Preço final: R$ 204. Atalho: 240 × (1 − 0,15) = 204."
  },
  "Juros simples e compostos": {
    problem: "Compare R$ 1.000 a 2% ao mês durante 3 meses.",
    steps: ["Simples: J = 1.000 × 0,02 × 3 = R$ 60; M = R$ 1.060.", "Compostos: M = 1.000 × (1,02)³ = R$ 1.061,208.", "Arredonde para centavos somente no final."],
    result: "Montante composto: R$ 1.061,21. Nos juros compostos, a cada mês os juros também passam a render."
  },
  "Inflação, lucro e decisões de compra": {
    problem: "Um item comprado por R$ 80 é vendido por R$ 100. Calcule o lucro percentual sobre o custo.",
    steps: ["Calcule o lucro: 100 − 80 = R$ 20.", "Use o custo como base: 20 ÷ 80 = 0,25.", "Converta para porcentagem: 0,25 × 100% = 25%."],
    result: "Lucro de R$ 20, equivalente a 25% do custo. Margem sobre o preço de venda seria outro cálculo: 20 ÷ 100 = 20%."
  },
  "Monômios, polinômios e produtos notáveis": {
    problem: "Desenvolva (x + 3)².",
    steps: ["Use (a + b)² = a² + 2ab + b².", "Substitua a = x e b = 3: x² + 2 × x × 3 + 3².", "Simplifique o termo do meio e a potência: x² + 6x + 9."],
    result: "Resultado: x² + 6x + 9. Não se pode omitir o termo 2ab."
  },
  "Fatoração": {
    problem: "Fatore 6x² + 9x.",
    steps: ["Encontre o maior fator comum dos termos: 3x.", "Divida cada termo por 3x: 6x²/(3x) = 2x e 9x/(3x) = 3.", "Coloque o fator comum em evidência."],
    result: "Resultado: 3x(2x + 3). Verifique distribuindo o 3x novamente."
  },
  "Equações, sistemas e inequações": {
    problem: "Resolva x² − 5x + 6 = 0.",
    steps: ["Identifique a = 1, b = −5 e c = 6.", "Calcule Δ = b² − 4ac = 25 − 24 = 1.", "Use x = (−b ± √Δ)/(2a): x = (5 ± 1)/2."],
    result: "Raízes: x = 3 e x = 2. Substituir cada valor na equação confirma as soluções."
  },
  "Conceito, domínio e gráficos": {
    problem: "Para f(x) = 2x + 1, calcule f(3) e encontre a raiz.",
    steps: ["Para f(3), substitua x por 3: 2 × 3 + 1 = 7.", "Para a raiz, faça f(x) = 0: 2x + 1 = 0.", "Isole x: 2x = −1, então x = −1/2."],
    result: "f(3) = 7 e a raiz é −0,5. No gráfico, a raiz é onde a reta cruza o eixo x."
  },
  "Função afim e função quadrática": {
    problem: "Encontre as raízes de f(x) = x² − 5x + 6.",
    steps: ["Fatore o trinômio: procure dois números cujo produto seja 6 e cuja soma seja −5.", "Esses números são −2 e −3: f(x) = (x − 2)(x − 3).", "Iguale cada fator a zero."],
    result: "Raízes x = 2 e x = 3. São os pontos em que a parábola intercepta o eixo x."
  },
  "Funções exponenciais e logarítmicas": {
    problem: "Resolva 2ˣ = 16 e calcule log₁₀(1.000).",
    steps: ["Escreva 16 como potência de 2: 16 = 2⁴; portanto x = 4.", "Para o logaritmo, pergunte: 10 elevado a qual expoente resulta em 1.000?", "Como 10³ = 1.000, o logaritmo é 3."],
    result: "x = 4 e log₁₀(1.000) = 3. Logaritmo responde qual expoente produz um número."
  },
  "Pontos, retas, ângulos e triângulos": {
    problem: "Um triângulo retângulo tem catetos 6 cm e 8 cm. Encontre a hipotenusa.",
    steps: ["Use Pitágoras: a² + b² = c², em que c é a hipotenusa.", "Substitua: 6² + 8² = c², então 36 + 64 = 100.", "Extraia a raiz positiva: c = √100 = 10."],
    result: "Hipotenusa: 10 cm. O resultado deve manter a unidade de comprimento."
  },
  "Quadriláteros, polígonos, perímetro e área": {
    problem: "Calcule a área de um trapézio com bases 10 cm e 6 cm e altura 4 cm.",
    steps: ["Use A = (B + b) × h ÷ 2.", "Some as bases e multiplique pela altura: (10 + 6) × 4 = 64.", "Divida por 2: 64 ÷ 2 = 32."],
    result: "Área: 32 cm². Área é expressa em unidades quadradas."
  },
  "Sólidos geométricos e planificação": {
    problem: "Um prisma retangular mede 3 cm × 4 cm × 5 cm. Calcule seu volume.",
    steps: ["Calcule a área da base: 3 × 4 = 12 cm².", "Multiplique pela altura: 12 × 5 = 60 cm³.", "Confira se as três dimensões foram usadas uma vez."],
    result: "Volume: 60 cm³."
  },
  "Áreas, volumes e capacidade": {
    problem: "Uma caixa tem volume de 2.500 cm³. Quantos litros ela comporta?",
    steps: ["Use a equivalência 1.000 cm³ = 1 L.", "Divida 2.500 por 1.000.", "Mantenha a unidade de capacidade no resultado."],
    result: "Capacidade: 2,5 L."
  },
  "Coordenadas, distância e ponto médio": {
    problem: "Encontre a distância entre A(1, 2) e B(4, 6).",
    steps: ["Calcule as diferenças: Δx = 4 − 1 = 3 e Δy = 6 − 2 = 4.", "Use d = √((Δx)² + (Δy)²).", "d = √(3² + 4²) = √25."],
    result: "Distância: 5 unidades."
  },
  "Equação e interpretação da reta": {
    problem: "Encontre a inclinação da reta que passa por (1, 2) e (4, 8).",
    steps: ["Use m = (y₂ − y₁)/(x₂ − x₁).", "Substitua: m = (8 − 2)/(4 − 1) = 6/3.", "Interprete a inclinação como variação vertical por unidade horizontal."],
    result: "Coeficiente angular m = 2."
  },
  "Razões trigonométricas no triângulo retângulo": {
    problem: "Em um triângulo retângulo, o cateto oposto mede 3 e a hipotenusa 5. Calcule o seno do ângulo.",
    steps: ["Identifique os lados em relação ao ângulo: oposto = 3 e hipotenusa = 5.", "Use sen(θ) = cateto oposto ÷ hipotenusa.", "Calcule 3 ÷ 5."],
    result: "sen(θ) = 0,6. Confira se a calculadora está no modo angular correto ao procurar o ângulo."
  },
  "Ciclo trigonométrico e leis dos senos e cossenos": {
    problem: "Dois lados de um triângulo medem 5 e 7, com ângulo entre eles de 60°. Encontre o terceiro lado.",
    steps: ["Use a lei dos cossenos: c² = a² + b² − 2ab cos(C).", "Substitua: c² = 25 + 49 − 70 × 0,5 = 39.", "Extraia a raiz positiva: c = √39."],
    result: "c ≈ 6,24 unidades. A lei dos cossenos generaliza Pitágoras para qualquer ângulo."
  },
  "Tabelas, gráficos e medidas de tendência central": {
    problem: "Calcule a média e a mediana de 2, 4, 4 e 10.",
    steps: ["Média: some os valores (2 + 4 + 4 + 10 = 20) e divida por 4.", "Ordene os dados: 2, 4, 4, 10.", "Com quantidade par, a mediana é a média dos dois valores centrais: (4 + 4)/2."],
    result: "Média = 5; mediana = 4. Um valor extremo pode alterar a média mais que a mediana."
  },
  "Variância e desvio padrão": {
    problem: "Para os dados 2, 4 e 6, calcule o desvio padrão populacional.",
    steps: ["Média: (2 + 4 + 6)/3 = 4.", "Desvios ao quadrado: (2−4)² = 4, (4−4)² = 0 e (6−4)² = 4.", "Variância populacional: (4 + 0 + 4)/3 = 8/3; tire a raiz quadrada."],
    result: "Desvio padrão = √(8/3) ≈ 1,63. Para amostras, a variância amostral usa n − 1 no denominador."
  },
  "Contagem, análise combinatória e probabilidade": {
    problem: "Qual é a probabilidade de tirar um número par ao lançar um dado honesto?",
    steps: ["Liste os resultados possíveis: {1, 2, 3, 4, 5, 6}, total de 6.", "Conte os casos favoráveis: {2, 4, 6}, total de 3.", "Use P = favoráveis/possíveis = 3/6."],
    result: "Probabilidade: 1/2 = 50%. Essa razão pressupõe resultados igualmente prováveis."
  },
  "Sequências e progressão aritmética (PA)": {
    problem: "Na PA 3, 7, 11, ..., encontre o 10º termo e a soma dos 10 primeiros.",
    steps: ["Identifique a₁ = 3 e a razão r = 7 − 3 = 4.", "Termo geral: aₙ = a₁ + (n − 1)r; a₁₀ = 3 + 9 × 4 = 39.", "Soma: Sₙ = n(a₁ + aₙ)/2 = 10(3 + 39)/2."],
    result: "10º termo = 39; soma dos 10 primeiros = 210."
  },
  "Progressão geométrica (PG)": {
    problem: "Na PG 2, 6, 18, ..., encontre o 5º termo.",
    steps: ["Identifique a₁ = 2 e a razão q = 6 ÷ 2 = 3.", "Use aₙ = a₁ × qⁿ⁻¹.", "a₅ = 2 × 3⁴ = 2 × 81."],
    result: "5º termo = 162. Em uma PG, divida termos consecutivos para conferir a razão."
  },
  "Grandezas, unidades e medidas": {
    problem: "Converta 72 km/h para m/s.",
    steps: ["Converta quilômetros para metros e horas para segundos: 1 km/h = 1.000/3.600 m/s.", "Simplifique o fator: 1.000/3.600 = 1/3,6.", "Divida 72 por 3,6."],
    result: "72 km/h = 20 m/s. A conversão inversa multiplica por 3,6."
  },
  "Movimento, referencial e velocidade": {
    problem: "Um ciclista percorre 150 m em 25 s no mesmo sentido. Calcule a rapidez média.",
    steps: ["Use rapidez média = distância total ÷ tempo.", "Substitua: 150 m ÷ 25 s.", "Escreva a unidade resultante como metros por segundo."],
    result: "Rapidez média = 6 m/s. Se houver retorno, deslocamento e distância total podem ser diferentes."
  },
  "Aceleração, MUV e queda livre": {
    problem: "Um carro passa de 4 m/s para 16 m/s em 6 s. Calcule a aceleração média.",
    steps: ["Calcule a variação de velocidade: Δv = 16 − 4 = 12 m/s.", "Use a = Δv/Δt: 12/6.", "A unidade é (m/s)/s = m/s²."],
    result: "Aceleração média = 2 m/s²."
  },
  "Lançamentos horizontal e oblíquo": {
    problem: "Um objeto é lançado horizontalmente a 10 m/s por 2 s, sem resistência do ar. Qual é seu deslocamento horizontal?",
    steps: ["Na horizontal, a velocidade permanece constante no modelo ideal.", "Use Δx = vₓt: 10 × 2.", "Analise a queda vertical separadamente; não some deslocamentos de eixos diferentes."],
    result: "Deslocamento horizontal = 20 m."
  },
  "Leis de Newton e forças": {
    problem: "Uma força resultante de 18 N atua em um corpo de 6 kg. Calcule a aceleração.",
    steps: ["Use a segunda lei de Newton: Fᵣ = ma.", "Isole a aceleração: a = Fᵣ/m.", "Substitua: 18 N ÷ 6 kg."],
    result: "Aceleração = 3 m/s². Newton dividido por quilograma equivale a m/s²."
  },
  "Plano inclinado e movimento circular": {
    problem: "Um corpo de 2 kg se move a 4 m/s em uma trajetória circular de raio 2 m. Calcule a força centrípeta.",
    steps: ["Use F꜀ = mv²/r.", "Substitua: 2 × 4² ÷ 2.", "Calcule a potência primeiro: 4² = 16; então F꜀ = 16 N."],
    result: "Força centrípeta = 16 N, dirigida para o centro da trajetória."
  },
  "Trabalho e formas de energia": {
    problem: "Uma força constante de 20 N desloca uma caixa 3 m na mesma direção. Calcule o trabalho.",
    steps: ["Use W = Fd cos(θ).", "Como força e deslocamento têm mesma direção, θ = 0° e cos(0°) = 1.", "W = 20 × 3 × 1."],
    result: "Trabalho = 60 J."
  },
  "Potência, rendimento e máquinas simples": {
    problem: "Uma máquina realiza 600 J de trabalho em 15 s. Calcule a potência média.",
    steps: ["Use P = W/Δt.", "Substitua: 600 J ÷ 15 s.", "Joule por segundo corresponde a watt."],
    result: "Potência média = 40 W."
  },
  "Densidade, pressão e empuxo": {
    problem: "Uma amostra tem massa de 540 g e volume de 200 cm³. Calcule a densidade.",
    steps: ["Use d = m/V.", "Substitua: 540 g ÷ 200 cm³.", "Mantenha as unidades de massa e volume na resposta."],
    result: "Densidade = 2,7 g/cm³."
  },
  "Temperatura, calor e dilatação": {
    problem: "Aqueça 0,5 kg de água em 10 °C. Use c = 4.200 J/(kg·°C).",
    steps: ["Use Q = mcΔT.", "Substitua: Q = 0,5 × 4.200 × 10.", "Multiplique mantendo as unidades compatíveis."],
    result: "Calor recebido: 21.000 J."
  },
  "Propagação de calor e termodinâmica": {
    problem: "Um sistema recebe 500 J de calor e realiza 200 J de trabalho. Determine a variação da energia interna.",
    steps: ["Use a primeira lei: ΔU = Q − W, quando W é o trabalho realizado pelo sistema.", "Substitua Q = 500 J e W = 200 J.", "Calcule 500 − 200."],
    result: "ΔU = 300 J. Declare sempre a convenção de sinais adotada."
  },
  "Ondas, frequência e propagação": {
    problem: "Uma onda tem frequência de 5 Hz e comprimento de onda de 2 m. Calcule sua velocidade.",
    steps: ["Use v = λf.", "Substitua: v = 2 × 5.", "A unidade m × s⁻¹ resulta em m/s."],
    result: "Velocidade da onda = 10 m/s."
  },
  "Cargas, corrente e leis de Ohm": {
    problem: "Um resistor de 6 Ω é ligado a 12 V. Calcule a corrente.",
    steps: ["Use a primeira lei de Ohm: U = Ri.", "Isole a corrente: i = U/R.", "Substitua: 12 V ÷ 6 Ω."],
    result: "Corrente = 2 A."
  },
  "Resistores, circuitos e segurança": {
    problem: "Dois resistores de 4 Ω e 6 Ω estão em série. Calcule a resistência equivalente.",
    steps: ["Em série, a corrente é a mesma e as resistências se somam.", "Rₑq = 4 Ω + 6 Ω.", "Confira que o resultado é maior que cada resistência individual."],
    result: "Resistência equivalente = 10 Ω."
  },
  "Matéria, energia e misturas": {
    problem: "Uma amostra tem massa de 54 g e volume de 20 cm³. Determine a densidade.",
    steps: ["Use d = m/V.", "Substitua: d = 54/20.", "Registre a unidade como g/cm³."],
    result: "Densidade = 2,7 g/cm³."
  },
  "Modelos atômicos, íons e isótopos": {
    problem: "Um átomo tem número atômico Z = 17 e número de massa A = 35. Quantos nêutrons possui?",
    steps: ["Lembre que A = prótons + nêutrons.", "O número de prótons é Z = 17.", "Subtraia: nêutrons = A − Z = 35 − 17."],
    result: "17 prótons e 18 nêutrons. Se neutro, também possui 17 elétrons."
  },
  "Equações, balanceamento e oxirredução": {
    problem: "Balanceie H₂ + O₂ → H₂O.",
    steps: ["Conte átomos em cada lado: há 2 oxigênios à esquerda e 1 à direita.", "Coloque 2 diante de H₂O: H₂ + O₂ → 2H₂O.", "Agora há 4 H à direita; coloque 2 diante de H₂."],
    result: "2H₂ + O₂ → 2H₂O. Ajuste coeficientes, nunca os índices dentro das fórmulas."
  },
  "Mol, massa molar e cálculos químicos": {
    problem: "Quantos mols existem em 36 g de água? Use M(H₂O) = 18 g/mol.",
    steps: ["Use n = m/M.", "Substitua: n = 36 g ÷ 18 g/mol.", "As unidades de grama se cancelam, restando mol."],
    result: "Quantidade de matéria = 2 mol."
  },
  "Solubilidade e concentração": {
    problem: "Dissolva 10 g de sal para obter 500 mL de solução. Calcule a concentração comum em g/L.",
    steps: ["Converta 500 mL para litros: 0,5 L.", "Use C = m/V: 10 g ÷ 0,5 L.", "Confira a unidade de concentração."],
    result: "Concentração = 20 g/L."
  },
  "Termoquímica e lei de Hess": {
    problem: "Uma reação libera 250 kJ de energia. Qual é o sinal de ΔH?",
    steps: ["Liberação de calor caracteriza processo exotérmico.", "Em processo exotérmico, a entalpia dos produtos é menor que a dos reagentes.", "Registre a variação com sinal negativo."],
    result: "ΔH = −250 kJ para a reação como escrita."
  },
  "Pilhas, eletrólise e corrosão": {
    problem: "Em uma pilha, a corrente é 0,5 A por 20 s. Qual carga elétrica passa pelo circuito?",
    steps: ["Use Q = i × Δt.", "Substitua: Q = 0,5 × 20.", "Ampere equivale a coulomb por segundo."],
    result: "Carga transferida = 10 C."
  }
};

for (const subject of Object.values(starterLibrary)) {
  subject.parts.forEach((part, index) => {
    part.difficulty ??= difficultyForIndex(index, subject.parts.length);
    part.workedExample ??= workedExamples[part.title];
  });
}

for (const subject of Object.values(starterLibrary)) {
  for (const part of subject.parts) {
    if (!Array.isArray(part.questions) || part.questions.length === 0) {
      part.questions = curriculumPart(
        part.category ?? "Outros",
        part.title,
        part.intro,
        part.points,
        part.note
      ).questions;
    }
  }
}

const storageKey = "studyplan95.v1";
const defaultSubjectOrder = [
  "biology", "math", "physics", "chemistry", "history", "geography",
  "philosophy", "sociology", "portuguese", "literature", "english",
  "spanish", "arts", "physicalEducation", "communication", "essay"
];
const examKnowledgeAreas = [
  {
    id: "languages",
    name: "Linguagens, códigos e suas tecnologias",
    subjectIds: ["portuguese", "literature", "english", "spanish", "arts", "physicalEducation", "communication"]
  },
  {
    id: "math",
    name: "Matemática e suas tecnologias",
    subjectIds: ["math"]
  },
  {
    id: "nature",
    name: "Ciências da natureza e suas tecnologias",
    subjectIds: ["biology", "physics", "chemistry"]
  },
  {
    id: "humanities",
    name: "Ciências humanas e suas tecnologias",
    subjectIds: ["history", "geography", "philosophy", "sociology"]
  },
  {
    id: "essay",
    name: "Redação",
    subjectIds: ["essay"]
  }
];
const defaultSubjects = defaultSubjectOrder.map(id => ({
  id,
  name: starterLibrary[id].name,
  icon: starterLibrary[id].icon,
  priority: starterLibrary[id].priority,
  note: starterLibrary[id].note,
  parts: starterLibrary[id].parts,
  completed: []
}));
let subjects = loadSubjects();
let activeSubjectId = subjects[0]?.id ?? null;
let activePartIndex = 0;
let activeDifficultyFilter = "all";
let activeCategoryFilter = null;
let activeView = "home";
let practiceSession = loadSavedPracticeSession();
let examTimer = null;
let essayTimer = null;
if (practiceSession) activeView = practiceSession.view;
let activeTipIndex = Math.floor(Math.random() * 8);
let tipRotationTimer = null;

const subjectList = document.getElementById("subjectList");
const studySearch = document.getElementById("studySearch");
const searchResults = document.getElementById("searchResults");
const mainContent = document.getElementById("mainContent");
const statusText = document.getElementById("statusText");
const subjectDialog = document.getElementById("subjectDialog");
const partDialog = document.getElementById("partDialog");

function subjectKey(name) {
  const normalized = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
  const aliases = ({
    biologia: "biology",
    biology: "biology",
    fisica: "physics",
    physics: "physics",
    matematica: "math",
    math: "math",
    quimica: "chemistry",
    chemistry: "chemistry",
    historia: "history",
    history: "history",
    filosofia: "philosophy",
    sociologia: "sociology",
    "lingua portuguesa": "portuguese",
    portugues: "portuguese",
    literatura: "literature",
    ingles: "english",
    espanhol: "spanish",
    artes: "arts",
    "educacao fisica": "physicalEducation",
    "tecnologia e comunicacao": "communication",
    redacao: "essay"
  })[normalized];
  return aliases ?? (starterLibrary[normalized] ? normalized : null);
}

function migrateSubject(subject) {
  const key = subjectKey(subject.name) ?? ({
    biology: "biology",
    math: "math",
    physics: "physics",
    chemistry: "chemistry",
    history: "history",
    geography: "geography",
    philosophy: "philosophy",
    sociology: "sociology",
    portuguese: "portuguese",
    literature: "literature",
    english: "english",
    spanish: "spanish",
    arts: "arts",
    physicalEducation: "physicalEducation",
    communication: "communication",
    essay: "essay"
  })[subject.id];
  if (!key || !starterLibrary[key]) return subject;

  const oldTitles = {
    biology: {
      "Cell structure": "Células, membranas e organelas",
      "Estrutura celular": "Células, membranas e organelas"
    },
    math: {
      "Fractions": "Frações, divisibilidade, MMC e MDC",
      "Frações": "Frações, divisibilidade, MMC e MDC",
      "Matemática Financeira — conceitos básicos": "Matemática Financeira — conceitos básicos",
      "Porcentagem e variação percentual": "Porcentagem e variação percentual",
      "Juros simples e compostos": "Juros simples e compostos"
    },
    chemistry: {
      "Atoms and elements": "Modelos atômicos, íons e isótopos",
      "Átomos e elementos": "Modelos atômicos, íons e isótopos"
    },
    physics: {},
    history: { "The Renaissance": "Renascimento" }
  }[key] ?? {};
  const parts = Array.isArray(subject.parts) ? subject.parts : [];
  const migratedParts = structuredClone(starterLibrary[key].parts);
  const oldIndexToNewIndex = parts.map((part, index) => {
    const starterIndex = migratedParts.findIndex(starter =>
      starter.title === part.title || starter.title === oldTitles[part.title]
    );
    if (starterIndex !== -1) return starterIndex;
    migratedParts.push(part);
    return migratedParts.length - 1;
  });
  migratedParts.forEach((part, index) => {
    part.difficulty ??= difficultyForIndex(index, migratedParts.length);
    part.workedExample ??= workedExamples[part.title];
  });

  return {
    ...subject,
    name: starterLibrary[key].name,
    icon: starterLibrary[key].icon,
    priority: starterLibrary[key].priority,
    note: starterLibrary[key].note,
    priority: starterLibrary[key].priority,
    parts: migratedParts,
    completed: (Array.isArray(subject.completed) ? subject.completed : [])
      .map(index => oldIndexToNewIndex[index])
      .filter(index => index !== undefined)
      .filter((index, position, all) => all.indexOf(index) === position)
  };
}

function loadSubjects() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return structuredClone(defaultSubjects);
  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) {
      const migratedSubjects = parsed.map(migrateSubject);
      for (const defaultSubject of defaultSubjects) {
        const key = subjectKey(defaultSubject.name);
        if (!migratedSubjects.some(subject => subjectKey(subject.name) === key)) {
          migratedSubjects.push(structuredClone(defaultSubject));
        }
      }
      return migratedSubjects;
    }
  } catch (error) {
    console.error("Não foi possível ler o plano de estudos salvo.", error);
  }
  return structuredClone(defaultSubjects);
}

function saveSubjects() {
  localStorage.setItem(storageKey, JSON.stringify(subjects));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function normalizeSearch(value) {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function renderSearchResults() {
  const query = normalizeSearch(studySearch.value);
  if (!query) {
    searchResults.innerHTML = "";
    return;
  }

  const matches = [];
  for (const subject of subjects) {
    if (normalizeSearch(subject.name).includes(query)) {
      matches.push({
        subject,
        partIndex: subject.parts.length ? 0 : -1,
        title: subject.name,
        detail: subject.parts.length ? "Matéria" : "Matéria sem partes"
      });
      continue;
    }
    subject.parts.forEach((part, partIndex) => {
      const searchable = normalizeSearch([
        part.title,
        part.category,
        part.intro,
        part.heading,
        ...(Array.isArray(part.points) ? part.points.flat() : [])
      ].filter(Boolean).join(" "));
      if (searchable.includes(query)) {
        matches.push({
          subject,
          partIndex,
          title: part.title,
          detail: `${part.category ?? "Outros"} · ${subject.name}`,
          titleMatch: normalizeSearch(part.title).includes(query)
        });
      }
    });
  }

  if (!matches.length) {
    searchResults.innerHTML = `<span class="search-result">Nenhum resultado encontrado.</span>`;
    return;
  }
  matches.sort((a, b) => Number(b.titleMatch) - Number(a.titleMatch));
  searchResults.innerHTML = matches.slice(0, 15).map(match =>
    `<button class="search-result" type="button" role="option" data-search-subject="${escapeHtml(match.subject.id)}" data-search-part="${match.partIndex}">
      ${escapeHtml(match.title)}<small>${escapeHtml(match.detail)}</small>
    </button>`
  ).join("");
}

function activeSubject() {
  return subjects.find(subject => subject.id === activeSubjectId) ?? null;
}

function render() {
  renderSubjects();
  document.querySelectorAll("[data-view]").forEach(button => {
    button.classList.toggle("active", button.dataset.view === activeView);
    button.setAttribute("aria-current", button.dataset.view === activeView ? "page" : "false");
  });
  if (tipRotationTimer !== null) {
    clearInterval(tipRotationTimer);
    tipRotationTimer = null;
  }
  if (examTimer !== null) {
    clearInterval(examTimer);
    examTimer = null;
  }
  if (essayTimer !== null) {
    clearInterval(essayTimer);
    essayTimer = null;
  }
  document.body.classList.toggle("focus-mode", activeView === "exams" && practiceSession?.focusMode === true);
  if (activeView === "home") renderHome();
  else if (activeView === "study") renderLesson();
  else if (activeView === "essay") renderEssayPractice();
  else if (activeView === "review" && practiceSession?.view === "review") renderPracticeSession();
  else if (activeView === "review") renderReviewDashboard();
  else renderPractice();
}

const studyTips = [
  { title: "Recupere antes de revisar", text: "Depois de estudar uma aula, feche a teoria e tente explicar os conceitos com suas próprias palavras. Em seguida, use o quiz para descobrir o que precisa revisar." },
  { title: "Estude em blocos curtos", text: "Escolha uma parte pequena, estude com foco e faça uma pausa breve. Uma meta clara ajuda a começar e a acompanhar o progresso." },
  { title: "Errou? Use o erro como pista", text: "Ao errar uma questão, identifique por que a alternativa correta faz sentido e qual ideia levou ao erro. Volte à teoria e tente novamente mais tarde." },
  { title: "Alterne teoria e prática", text: "Intercale leitura, resolução de questões e revisão. Praticar sem consultar a aula ajuda a perceber o que você realmente lembra." },
  { title: "Revise em dias diferentes", text: "Retome o conteúdo depois de um intervalo e novamente alguns dias depois. Revisões espaçadas ajudam a manter o conhecimento por mais tempo." },
  { title: "Matemática: mostre o caminho", text: "Anote dados, fórmula, substituição e unidades. Assim fica mais fácil localizar erros de cálculo e explicar cada etapa." },
  { title: "Faça leitura ativa", text: "Em textos, observe título, autoria, gênero e contexto. Depois procure evidências que sustentem sua interpretação." },
  { title: "Planeje a redação", text: "Antes de escrever, delimite o tema, formule uma tese e organize os argumentos. Reserve um tempo no fim para revisar." }
];

function renderHome() {
  const tip = studyTips[activeTipIndex];
  mainContent.innerHTML = `
    <div class="home-content">
      <div class="home-welcome">
        <h1>Bem-vindo ao Plano de Estudos 95!</h1>
        <p>Seu espaço de preparação para o ENEM e vestibulares: estude por matéria, avance por níveis de dificuldade e pratique no seu ritmo.</p>
        <div class="home-actions">
          <button class="win-button primary" type="button" data-view="study">📚 Começar a estudar</button>
          <button class="win-button" type="button" data-view="quizzes">✏️ Fazer um quiz</button>
          <button class="win-button" type="button" data-view="exams">📝 Praticar prova</button>
        </div>
      </div>
      <div class="home-cards">
        <article class="home-card"><h2>📖 Teoria por partes</h2><p>Encontre explicações, exemplos resolvidos e desafios organizados por matéria, área e dificuldade.</p></article>
        <article class="home-card"><h2>🎯 Quizzes de revisão</h2><p>Escolha uma matéria ou misture conteúdos para testar o que aprendeu e conferir as respostas.</p></article>
        <article class="home-card"><h2>🧠 Provas para praticar</h2><p>Monte uma prática mais longa com questões do plano e acompanhe seu resultado ao final.</p></article>
        <article class="home-card"><h2>💾 Seu progresso</h2><p>As partes concluídas e suas matérias personalizadas ficam salvas neste navegador.</p></article>
      </div>
      <section class="tip-carousel" aria-label="Dicas de estudo">
        <div class="tip-carousel-heading">
          <h2>💡 ${escapeHtml(tip.title)}</h2>
          <div class="tip-controls">
            <button class="win-button" type="button" data-tip-step="-1" aria-label="Dica anterior">◀</button>
            <span class="tip-count">${activeTipIndex + 1} / ${studyTips.length}</span>
            <button class="win-button" type="button" data-tip-step="1" aria-label="Próxima dica">▶</button>
          </div>
        </div>
        <p id="homeTipText" aria-live="polite">${escapeHtml(tip.text)}</p>
      </section>
      <p class="toolbar-note" style="margin-top:12px">O conteúdo oferece uma base ampla; confira também o edital e as leituras obrigatórias da instituição onde você pretende prestar vestibular.</p>
    </div>`;
  tipRotationTimer = setInterval(() => {
    if (activeView !== "home") return;
    activeTipIndex = (activeTipIndex + 1) % studyTips.length;
    const title = mainContent.querySelector(".tip-carousel h2");
    const text = mainContent.querySelector("#homeTipText");
    const count = mainContent.querySelector(".tip-count");
    if (title) title.textContent = `💡 ${studyTips[activeTipIndex].title}`;
    if (text) text.textContent = studyTips[activeTipIndex].text;
    if (count) count.textContent = `${activeTipIndex + 1} / ${studyTips.length}`;
  }, 10000);
}

document.querySelector(".menu-bar").addEventListener("click", event => {
  const button = event.target.closest("[data-view]");
  if (!button) return;
  activeView = button.dataset.view;
  render();
  statusText.textContent = activeView === "home"
    ? "Página inicial."
    : activeView === "study" ? "Plano de estudos."
      : activeView === "quizzes" ? "Área de quizzes."
        : activeView === "exams" ? "Área de provas."
          : activeView === "essay" ? "Prática de redação." : "Revisão e histórico.";
});

mainContent.addEventListener("click", event => {
  const step = event.target.closest("[data-tip-step]");
  if (!step || activeView !== "home") return;
  activeTipIndex = (activeTipIndex + Number(step.dataset.tipStep) + studyTips.length) % studyTips.length;
  renderHome();
});

mainContent.addEventListener("change", event => {
  if (event.target.matches("#practiceArea")) {
    const subjectSelect = mainContent.querySelector("#practiceSubject");
    if (subjectSelect) subjectSelect.value = "all";
    updatePracticeAvailability();
    return;
  }
  if (event.target.matches("#practiceSubject")) {
    const areaSelect = mainContent.querySelector("#practiceArea");
    if (areaSelect && event.target.value !== "all") {
      const subjectArea = examKnowledgeAreas.find(area => area.subjectIds.includes(event.target.value));
      if (subjectArea) areaSelect.value = `area:${subjectArea.id}`;
    }
    updatePracticeAvailability();
    return;
  }
  if (event.target.matches("#practiceDifficulty")) {
    updatePracticeAvailability();
    return;
  }
  if (event.target.matches("[data-essay-competency]")) {
    saveEssayDraft(readStoredJson(essayDraftStorageKey, {}));
    return;
  }
  const answer = event.target.closest('input[type="radio"][name^="practice-"]');
  if (!answer || !practiceSession || practiceSession.score !== null) return;
  const questionIndex = Number(answer.name.slice("practice-".length));
  practiceSession.answers[questionIndex] = Number(answer.value);
  saveActivePracticeSession();
  updateQuestionNavigator();
});

mainContent.addEventListener("input", event => {
  if (!event.target.matches("#essayText")) return;
  saveEssayDraft(readStoredJson(essayDraftStorageKey, {}));
  updateEssayCounts();
});

function renderSubjects() {
  const renderSubject = subject => {
    const done = subject.completed.length;
    const total = subject.parts.length;
    return `<button class="subject-button${subject.id === activeSubjectId ? " active" : ""}" data-subject="${escapeHtml(subject.id)}" aria-pressed="${subject.id === activeSubjectId}">
      <span class="subject-emoji" aria-hidden="true">${escapeHtml(subject.icon)}</span>
      <span class="subject-meta"><strong>${escapeHtml(subject.name)}</strong><small>${subject.priority ? `${escapeHtml(subject.priority)} · ` : ""}${done}/${total} partes estudadas</small></span>
    </button>`;
  };
  const groupedIds = new Set(examKnowledgeAreas.flatMap(area => area.subjectIds));
  subjectList.innerHTML = [
    ...examKnowledgeAreas.map(area => {
      const areaSubjects = subjects.filter(subject => area.subjectIds.includes(subject.id));
      if (!areaSubjects.length) return "";
      return `<section class="subject-group" aria-labelledby="subject-group-${area.id}">
        <h3 class="subject-group-title" id="subject-group-${area.id}">${escapeHtml(area.name)}</h3>
        ${areaSubjects.map(renderSubject).join("")}
      </section>`;
    }),
    ...(() => {
      const otherSubjects = subjects.filter(subject => !groupedIds.has(subject.id));
      return otherSubjects.length
        ? [`<section class="subject-group" aria-labelledby="subject-group-other">
            <h3 class="subject-group-title" id="subject-group-other">Outras matérias</h3>
            ${otherSubjects.map(renderSubject).join("")}
          </section>`]
        : [];
    })()
  ].join("");
}

function renderLesson() {
  const subject = activeSubject();
  if (!subject) {
    mainContent.innerHTML = `<div class="empty-state"><div style="font-size:36px">📚</div><h2>Sua mesa de estudos está pronta</h2><p>Adicione uma matéria para começar seu plano.</p><button class="win-button primary" data-action="add-subject">＋ Adicionar matéria</button></div>`;
    return;
  }
  if (!subject.parts.length) {
    mainContent.innerHTML = `<div class="crumb"><span>Meu plano de estudos</span><span>›</span><span class="crumb-current">${escapeHtml(subject.name)}</span></div>
      <div class="empty-state"><div style="font-size:36px">📝</div><h2>${escapeHtml(subject.name)} está pronta para a primeira aula</h2><p>Adicione uma parte com suas anotações e pratique com um quiz rápido.</p><button class="win-button primary" data-action="add-part">＋ Criar parte de estudo</button></div>`;
    return;
  }
  const categoryOf = item => item.category ?? "Outros";
  const difficultyOf = (item, index) => item.difficulty ?? difficultyForIndex(index, subject.parts.length);
  const difficultyMatches = (item, index) =>
    activeDifficultyFilter === "all" || difficultyOf(item, index) === activeDifficultyFilter;
  const categories = [...new Set(subject.parts
    .map((item, index) => ({ item, index }))
    .filter(({ item, index }) => difficultyMatches(item, index))
    .map(({ item }) => categoryOf(item)))];
  if (activeCategoryFilter !== null && !categories.includes(activeCategoryFilter)) {
    activeCategoryFilter = null;
  }
  const visibleParts = subject.parts
    .map((item, index) => ({ item, index }))
    .filter(({ item, index }) =>
      difficultyMatches(item, index) &&
      (activeCategoryFilter === null || categoryOf(item) === activeCategoryFilter)
    );
  const selectedPart = visibleParts.find(({ index }) => index === activePartIndex) ?? visibleParts[0];
  activePartIndex = selectedPart?.index ?? -1;
  const part = selectedPart?.item;
  const activeDifficulty = activeDifficultyFilter === "all"
    ? "all"
    : activeDifficultyFilter;
  const categoryPicker = categories.length > 1
    ? `<div class="category-picker" role="group" aria-label="Áreas de ${escapeHtml(subject.name.toLowerCase())}">
        <button class="category-tab${activeCategoryFilter === null ? " active" : ""}" aria-pressed="${activeCategoryFilter === null}" data-category="">Todas as áreas</button>
        ${categories.map(category => `<button class="category-tab${category === activeCategoryFilter ? " active" : ""}" aria-pressed="${category === activeCategoryFilter}" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>`).join("")}
      </div>`
    : "";
  const difficultyPicker = `<div class="difficulty-picker" role="group" aria-label="Nível de dificuldade">
      <span class="difficulty-label">Dificuldade:</span>
      ${[
        ["all", "Todas", subject.parts.length],
        ["basic", difficultyNames.basic, subject.parts.filter((item, index) => difficultyOf(item, index) === "basic").length],
        ["intermediate", difficultyNames.intermediate, subject.parts.filter((item, index) => difficultyOf(item, index) === "intermediate").length],
        ["advanced", difficultyNames.advanced, subject.parts.filter((item, index) => difficultyOf(item, index) === "advanced").length]
      ].map(([level, label, count]) =>
        `<button class="difficulty-tab${level === activeDifficultyFilter ? " active" : ""}" aria-pressed="${level === activeDifficultyFilter}" data-level="${level}">${label} (${count})</button>`
      ).join("")}
      <span class="difficulty-note">${activeDifficulty === "all" ? "Exibindo partes de todos os níveis." : difficultyDescriptions[activeDifficulty]}</span>
    </div>`;
  if (!part) {
    mainContent.innerHTML = `
      <div class="crumb"><span>Meu plano de estudos</span><span>›</span><span class="crumb-current">${escapeHtml(subject.name)}</span></div>
      <div class="lesson-heading"><div><h1>Guia de estudos: ${escapeHtml(subject.name)}</h1><p>${subject.note ? escapeHtml(subject.note) : "Uma parte de cada vez. Você consegue!"}</p></div></div>
      ${difficultyPicker}${categoryPicker}
      <div class="empty-state"><div style="font-size:36px">🔎</div><h2>Nenhuma parte neste filtro</h2><p>Escolha outra dificuldade ou área para ver as aulas disponíveis.</p></div>`;
    return;
  }
  const complete = subject.completed.includes(activePartIndex);
  mainContent.innerHTML = `
    <div class="crumb"><span>Meu plano de estudos</span><span>›</span><span class="crumb-current">${escapeHtml(subject.name)}</span></div>
    <div class="lesson-heading">
      <div><h1>Guia de estudos: ${escapeHtml(subject.name)}</h1><p>${subject.note ? escapeHtml(subject.note) : "Uma parte de cada vez. Você consegue!"}</p><span class="lesson-level">${activeDifficulty === "all" ? "Todos os níveis" : difficultyNames[activeDifficulty]} · ${visibleParts.length} ${visibleParts.length === 1 ? "parte" : "partes"} visíveis</span></div>
    </div>
    ${difficultyPicker}
    ${categoryPicker}
    <div class="part-picker" role="tablist" aria-label="Partes de estudo">
      ${visibleParts.map(({ item, index }) => `<button class="part-tab${index === activePartIndex ? " active" : ""}" role="tab" aria-selected="${index === activePartIndex}" data-part="${index}">${escapeHtml(item.title)}${subject.completed.includes(index) ? " ✓" : ""}</button>`).join("")}
      <button class="part-tab add-tab" data-action="add-part" aria-label="Adicionar parte de estudo">＋ Adicionar parte</button>
    </div>
    <div class="lesson-grid">
      <fieldset class="group-box">
        <legend>📖 &nbsp;Teoria</legend>
        <div class="theory-content">
          <p>${escapeHtml(part.intro)}</p>
          <h3>${escapeHtml(part.heading || "Ideias principais")}</h3>
          <ul>${part.points.map(point => `<li><strong>${escapeHtml(point[0])}:</strong> ${escapeHtml(point[1])}</li>`).join("")}</ul>
          <div class="study-challenge"><strong>Desafio para aprofundar:</strong> ${escapeHtml(studyChallenge(part))}</div>
          ${part.workedExample ? `<div class="worked-example"><h3>Exemplo resolvido: ${escapeHtml(part.workedExample.problem)}</h3><ol>${part.workedExample.steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol><p><strong>${escapeHtml(part.workedExample.result)}</strong></p></div>` : ""}
          ${part.note ? `<div class="key-idea"><strong>Para lembrar:</strong> ${escapeHtml(part.note)}</div>` : ""}
          ${part.source ? `<p class="source-note">Conteúdo adaptado para estudo de <a href="${escapeHtml(part.source.url)}" target="_blank" rel="noopener noreferrer">Matemática Financeira — ${escapeHtml(part.source.author)} (Toda Matéria)</a>. ${escapeHtml(part.source.role)}.</p>` : ""}
        </div>
      </fieldset>
      <fieldset class="group-box" id="quizBox">
        <legend>✏️ &nbsp;Quiz rápido</legend>
        <p class="quiz-intro">Escolha a melhor resposta para cada questão. Tente responder sem consultar a teoria!</p>
        ${part.questions.map((question, questionIndex) => `<div class="question" data-question="${questionIndex}">
          <p>${questionIndex + 1}. ${escapeHtml(question.text)}</p>
          <div class="answers">${question.choices.map((choice, choiceIndex) => `<label class="answer">
            <input type="radio" name="question-${questionIndex}" value="${choiceIndex}">
            <span>${escapeHtml(choice)}</span>
          </label>`).join("")}</div>
        </div>`).join("")}
        <div class="quiz-actions">
          <button class="win-button primary" data-action="check-quiz">Conferir respostas</button>
          <span class="quiz-feedback" id="quizFeedback" role="status"></span>
        </div>
      </fieldset>
    </div>
    <div class="progress-strip"><span>${complete ? "✓ Esta parte já foi estudada!" : "Progresso: experimente responder ao quiz."}</span><span>${subject.completed.length} de ${subject.parts.length} partes estudadas</span></div>`;
}

function addSubject(name) {
  const cleanName = name.trim();
  if (!cleanName) return;
  const match = subjectKey(cleanName);
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const template = match ? starterLibrary[match] : null;
  subjects.push({
    id,
    name: template?.name ?? cleanName,
    icon: template?.icon ?? "📘",
    priority: template?.priority,
    parts: template ? structuredClone(template.parts) : [],
    completed: []
  });
  activeSubjectId = id;
  activePartIndex = 0;
  saveSubjects();
  render();
  statusText.textContent = `${template?.name ?? cleanName} adicionada ao seu plano de estudos.`;
  if (!template) partDialog.showModal();
}

function createPart(title, notes) {
  const subject = activeSubject();
  if (!subject) return;
  const lines = notes.split(/\n+/).map(line => line.trim()).filter(Boolean);
  const points = lines.map((line, index) => {
    const separator = line.indexOf(":");
    return separator > 0
      ? [line.slice(0, separator).trim(), line.slice(separator + 1).trim()]
      : [`Ideia principal ${index + 1}`, line];
  });
  const questions = points.slice(0, 3).map((point, index) => ({
    text: `Qual afirmação corresponde melhor a "${point[0]}"?`,
    choices: [
      point[1],
      points.length > 1 ? points[(index + 1) % points.length][1] : "Essa ideia não aparece nas anotações",
      "Nenhuma dessas ideias"
    ],
    answer: 0
  }));
  subject.parts.push({
    ...(subject.id === "math" ? { category: "Outros" } : {}),
    title: title.trim(),
    difficulty: difficultyForIndex(subject.parts.length, subject.parts.length + 1),
    intro: `Esta parte aborda ${title.trim()}. Revise cada ideia principal e depois responda às questões para conferir o que aprendeu.`,
    heading: "Ideias principais",
    points,
    note: points[0]?.[1] ?? "",
    questions
  });
  activePartIndex = subject.parts.length - 1;
  saveSubjects();
  render();
  statusText.textContent = `Parte "${title.trim()}" criada.`;
}

studySearch.addEventListener("input", renderSearchResults);

searchResults.addEventListener("click", event => {
  const result = event.target.closest("[data-search-subject]");
  if (!result) return;
  const subject = subjects.find(item => item.id === result.dataset.searchSubject);
  if (!subject) return;
  activeView = "study";
  activeSubjectId = subject.id;
  activePartIndex = Number(result.dataset.searchPart);
  activeDifficultyFilter = "all";
  activeCategoryFilter = null;
  studySearch.value = "";
  renderSearchResults();
  render();
  statusText.textContent = `Resultado aberto: ${subject.name}.`;
});

subjectList.addEventListener("click", event => {
  const button = event.target.closest("[data-subject]");
  if (!button) return;
  activeSubjectId = button.dataset.subject;
  if (activeView === "quizzes" || activeView === "exams") {
    if (activeSubjectId === "essay") {
      practiceSession = null;
      localStorage.removeItem(activePracticeStorageKey);
      activeView = "essay";
      render();
      statusText.textContent = "Prática de redação selecionada.";
      return;
    }
    practiceSession = null;
    localStorage.removeItem(activePracticeStorageKey);
    render();
    const practiceSubject = mainContent.querySelector("#practiceSubject");
    if (practiceSubject) {
      practiceSubject.value = activeSubjectId;
      const practiceArea = mainContent.querySelector("#practiceArea");
      const subjectArea = examKnowledgeAreas.find(area => area.subjectIds.includes(activeSubjectId));
      if (practiceArea && subjectArea) practiceArea.value = `area:${subjectArea.id}`;
      updatePracticeAvailability();
    }
    statusText.textContent = `${activeSubject().name} selecionada para ${activeView === "quizzes" ? "quiz" : "prova"}.`;
    return;
  }
  activeView = "study";
  activePartIndex = 0;
  activeDifficultyFilter = "all";
  activeCategoryFilter = null;
  render();
  statusText.textContent = `${activeSubject().name} selecionada.`;
});

mainContent.addEventListener("click", event => {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    activeView = viewButton.dataset.view;
    render();
    return;
  }
  const action = event.target.closest("[data-action]")?.dataset.action;
  const questionNav = event.target.closest("[data-question-jump]");
  if (questionNav) {
    mainContent.querySelector(`[data-practice-question="${questionNav.dataset.questionJump}"]`)
      ?.scrollIntoView({ block: "center", behavior: "smooth" });
    return;
  }
  const questionFlag = event.target.closest("[data-flag-question]");
  if (questionFlag && practiceSession && practiceSession.score === null) {
    const index = Number(questionFlag.dataset.flagQuestion);
    if (practiceSession.flagged.includes(index)) {
      practiceSession.flagged = practiceSession.flagged.filter(item => item !== index);
    } else {
      practiceSession.flagged.push(index);
    }
    saveActivePracticeSession();
    renderPracticeSession();
    mainContent.querySelector(`[data-practice-question="${index}"]`)
      ?.scrollIntoView({ block: "center", behavior: "smooth" });
    return;
  }
  if (action === "start-errors") {
    startErrorReview();
    return;
  }
  if (action === "review-dashboard") {
    practiceSession = null;
    localStorage.removeItem(activePracticeStorageKey);
    renderReviewDashboard();
    return;
  }
  if (action === "review-lesson") {
    openLessonFromPractice(Number(event.target.closest("[data-action]").dataset.questionIndex));
    return;
  }
  if (action === "open-review-lesson") {
    const button = event.target.closest("[data-action]");
    openLessonReference(button.dataset.subjectId, button.dataset.partTitle);
    return;
  }
  if (action === "focus-mode" && practiceSession) {
    practiceSession.focusMode = !practiceSession.focusMode;
    saveActivePracticeSession();
    renderPracticeSession();
    return;
  }
  if (action === "start-essay-timer") {
    startEssayTimer();
    return;
  }
  if (action === "finish-essay") {
    finishEssayPractice();
    return;
  }
  if (action === "clear-essay") {
    if (!confirm("Apagar o rascunho salvo e começar outro?")) return;
    if (essayTimer !== null) {
      clearInterval(essayTimer);
      essayTimer = null;
    }
    localStorage.removeItem(essayDraftStorageKey);
    renderEssayPractice();
    return;
  }
  if (action === "print-practice") {
    window.print();
    return;
  }
  if (action === "start-practice") {
    startPractice();
    return;
  }
  if (action === "submit-practice") {
    submitPractice();
    return;
  }
  if (action === "new-practice") {
    practiceSession = null;
    localStorage.removeItem(activePracticeStorageKey);
    renderPractice();
    return;
  }
  if (action === "practice-home") {
    activeView = "study";
    document.body.classList.remove("focus-mode");
    practiceSession = null;
    render();
    return;
  }
  const levelTab = event.target.closest("[data-level]");
  if (levelTab) {
    const subject = activeSubject();
    activeDifficultyFilter = levelTab.dataset.level;
    if (activeDifficultyFilter === "all") activeCategoryFilter = null;
    const nextIndex = subject.parts.findIndex((part, index) =>
      (activeCategoryFilter === null || (part.category ?? "Outros") === activeCategoryFilter) &&
      (activeDifficultyFilter === "all" ||
        (part.difficulty ?? difficultyForIndex(index, subject.parts.length)) === activeDifficultyFilter)
    );
    if (nextIndex < 0 && activeCategoryFilter !== null) {
      activeCategoryFilter = null;
      activePartIndex = subject.parts.findIndex((part, index) =>
        activeDifficultyFilter === "all" ||
        (part.difficulty ?? difficultyForIndex(index, subject.parts.length)) === activeDifficultyFilter
      );
    } else {
      activePartIndex = nextIndex;
    }
    renderLesson();
    return;
  }
  const categoryTab = event.target.closest("[data-category]");
  if (categoryTab) {
    const subject = activeSubject();
    activeCategoryFilter = categoryTab.dataset.category || null;
    activePartIndex = subject.parts.findIndex((part, index) =>
      (activeCategoryFilter === null || (part.category ?? "Outros") === activeCategoryFilter) &&
      (activeDifficultyFilter === "all" ||
        (part.difficulty ?? difficultyForIndex(index, subject.parts.length)) === activeDifficultyFilter)
    );
    renderLesson();
    return;
  }
  const partTab = event.target.closest("[data-part]");
  if (partTab) {
    activePartIndex = Number(partTab.dataset.part);
    renderLesson();
    return;
  }
  if (action === "add-part") partDialog.showModal();
  if (action === "add-subject") subjectDialog.showModal();
  if (action === "check-quiz") checkQuiz();
});

function checkQuiz() {
  const subject = activeSubject();
  const part = subject?.parts[activePartIndex];
  if (!part) return;
  let score = 0;
  let unanswered = false;
  part.questions.forEach((question, index) => {
    const chosen = mainContent.querySelector(`input[name="question-${index}"]:checked`);
    const questionElement = mainContent.querySelector(`[data-question="${index}"]`);
    questionElement.querySelectorAll(".answer").forEach((label, choiceIndex) => {
      label.classList.toggle("correct", choiceIndex === question.answer);
      label.classList.toggle("incorrect", chosen && Number(chosen.value) === choiceIndex && choiceIndex !== question.answer);
    });
    if (!chosen) unanswered = true;
    else if (Number(chosen.value) === question.answer) score++;
  });
  const feedback = document.getElementById("quizFeedback");
  if (unanswered) {
    feedback.textContent = "Responda a todas as questões primeiro.";
    feedback.style.color = "#8b3c00";
    return;
  }
  feedback.textContent = `${score}/${part.questions.length} corretas${score === part.questions.length ? " — perfeito! ✨" : " — revise as respostas destacadas e tente novamente."}`;
  feedback.style.color = score === part.questions.length ? "#245b1b" : "#333";
  if (score === part.questions.length && !subject.completed.includes(activePartIndex)) {
    subject.completed.push(activePartIndex);
    saveSubjects();
    renderSubjects();
    const currentTab = mainContent.querySelector(`[data-part="${activePartIndex}"]`);
    if (currentTab) currentTab.textContent += " ✓";
    const strip = mainContent.querySelector(".progress-strip");
    strip.firstElementChild.textContent = "✓ Esta parte já foi estudada!";
    strip.lastElementChild.textContent = `${subject.completed.length} de ${subject.parts.length} partes estudadas`;
  }
  statusText.textContent = `Quiz conferido: ${score} de ${part.questions.length}.`;
}

document.getElementById("addSubjectTop").addEventListener("click", () => subjectDialog.showModal());
document.getElementById("addSubjectSide").addEventListener("click", () => subjectDialog.showModal());
document.querySelectorAll("[data-close]").forEach(button => button.addEventListener("click", () => button.closest("dialog").close()));
document.getElementById("subjectForm").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.getElementById("subjectName");
  addSubject(input.value);
  input.value = "";
  subjectDialog.close();
});
document.getElementById("partForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.partTheory.value.trim()) {
    form.partTheory.setCustomValidity("Adicione pelo menos uma ideia principal para criar esta parte de estudo.");
    form.reportValidity();
    return;
  }
  createPart(form.partTitle.value, form.partTheory.value);
  form.reset();
  partDialog.close();
});
document.getElementById("partTheory").addEventListener("input", event => event.currentTarget.setCustomValidity(""));

render();
