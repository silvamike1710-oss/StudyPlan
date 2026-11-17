const theoryExampleRules = {
  math: [
    [/^capital\b/i, "Um investimento de R$ 1.200 começa com capital C = R$ 1.200; esse é o valor inicial antes de calcular os rendimentos."],
    [/^juros\b/i, "Com capital de R$ 1.200, taxa de 2% ao mês e 5 meses, os juros simples são J = 1.200 × 0,02 × 5 = R$ 120."],
    [/^montante\b/i, "Se o capital é R$ 1.200 e os juros são R$ 120, o montante final é M = C + J = R$ 1.320."],
    [/^taxa de juros\b/i, "Uma taxa de 2% ao mês corresponde a 0,02 por mês; em um cálculo, use a forma decimal e combine o prazo na mesma unidade."],
    [/porcent|desconto|aumento|varia[cç][aã]o percentual/i, "Uma mochila de R$ 200 com 15% de desconto: 0,15 × 200 = R$ 30 de desconto; o preço final é R$ 170."],
    [/juros simples/i, "R$ 500 a 2% ao mês por 3 meses: J = 500 × 0,02 × 3 = R$ 30; o montante é R$ 530."],
    [/juros compostos/i, "R$ 1.000 a 10% ao ano por 2 anos: M = 1.000 × 1,1² = R$ 1.210. No segundo ano, os juros incidem também sobre os juros anteriores."],
    [/fra[cç][aã]o|numerador|denominador/i, "Para somar 1/3 + 1/4, use denominador comum 12: 4/12 + 3/12 = 7/12."],
    [/raz[aã]o|propor[cç][aã]o|regra de tr[eê]s/i, "Se 3 cadernos custam R$ 18, cada um custa R$ 6; 5 cadernos custam 5 × 6 = R$ 30."],
    [/equac|inc[oó]gnita|sistema de/i, "Em 2x + 3 = 11, subtraia 3 dos dois lados e divida por 2: x = 4."],
    [/inequa/i, "De 2x + 1 < 7, subtraia 1 e divida por 2: x < 3. As soluções são todos os números menores que 3."],
    [/fun[cç][aã]o afim|fun[cç][aã]o do primeiro grau/i, "Se uma corrida custa R$ 5 de taxa fixa mais R$ 2 por quilômetro, o preço é f(x) = 5 + 2x; em 4 km, f(4) = R$ 13."],
    [/fun[cç][aã]o quadr[aá]tica|par[aá]bola|segundo grau/i, "A altura de uma bola pode ser modelada por h(t) = −t² + 4t. O vértice ocorre em t = 2 e indica a altura máxima do modelo."],
    [/fun[cç][aã]o exponencial/i, "Uma população que dobra a cada período pode ser modelada por P(t) = 100 × 2ᵗ; após 3 períodos, são 800 indivíduos."],
    [/logar[ií]tm/i, "Se 2ˣ = 8, então x = log₂(8) = 3, pois 2³ = 8."],
    [/pit[aá]goras|tri[aâ]ngulo ret[aâ]ngulo/i, "Um triângulo retângulo com catetos 3 cm e 4 cm tem hipotenusa √(3² + 4²) = 5 cm."],
    [/per[ií]metro/i, "Um retângulo de 8 m por 3 m tem perímetro 2 × (8 + 3) = 22 m."],
    [/a[á]rea/i, "Um terreno retangular de 8 m por 3 m ocupa 8 × 3 = 24 m²."],
    [/volume|cilindro|prisma|cubo|esfera|cone|pir[aâ]mide/i, "Uma caixa de 2 m × 3 m × 4 m tem volume 2 × 3 × 4 = 24 m³."],
    [/seno|cosseno|tangente|trigonom/i, "Num triângulo retângulo, se o cateto oposto mede 3 e a hipotenusa 5, sen(θ) = 3/5."],
    [/m[eé]dia aritm[eé]tica/i, "As notas 6, 8 e 10 têm média (6 + 8 + 10) ÷ 3 = 8."],
    [/mediana/i, "Em 2, 4, 9, a mediana é 4, o valor central após ordenar os dados."],
    [/moda/i, "Em 2, 3, 3, 5, a moda é 3, o valor que mais se repete."],
    [/probabilidade/i, "Ao lançar um dado honesto, a chance de sair número par é 3/6 = 1/2 = 50%."],
    [/combina[cç][aã]o/i, "Escolher 2 representantes entre 5 estudantes sem considerar a ordem dá C(5,2) = 10 duplas."],
    [/permuta[cç][aã]o/i, "As letras A, B e C podem ser ordenadas de 3! = 6 maneiras diferentes."],
    [/progress[aã]o aritm[eé]tica|\bpa\b/i, "Na sequência 4, 7, 10, ... a razão é 3 e o próximo termo é 13."],
    [/progress[aã]o geom[eé]trica|\bpg\b/i, "Na sequência 2, 6, 18, ... cada termo é multiplicado por 3; o próximo é 54."],
    [/coordenad|plano cartesiano|ponto m[eé]dio|dist[aâ]ncia entre/i, "Entre A(1,2) e B(4,6), a distância é √[(4−1)² + (6−2)²] = 5 unidades."],
    [/m[óo]dulo|valor absoluto/i, "|−7| = 7: o módulo mede a distância até zero, portanto não é negativo."],
    [/pot[eê]ncia|expoente/i, "3⁴ = 3 × 3 × 3 × 3 = 81."],
    [/raiz|radicia/i, "√81 = 9 porque 9² = 81."],
    [/not[aã]ção cient[ií]fica/i, "A distância 150.000.000 km pode ser escrita como 1,5 × 10⁸ km."],
    [/gr[aá]fico|tabela|estat[ií]stica|dados/i, "Se as vendas foram 10, 15 e 20 unidades em três meses, um gráfico de linhas mostra a tendência de crescimento."],
    [/lucro|preju[ií]zo/i, "Uma loja compra um livro por R$ 30 e vende por R$ 42: o lucro é R$ 12, ou 40% sobre o custo."],
    [/infla[cç][aã]o/i, "Com inflação de 5%, um produto de R$ 100 passa a custar R$ 105, se o preço acompanhar integralmente o índice."],
    [/express[aã]o alg[eé]brica|termos semelhantes|mon[oô]mio|polin[oô]mio/i, "Em 3x + 2x − 4, some apenas os termos semelhantes: 5x − 4."],
    [/fatora[cç][aã]o/i, "x² + 5x pode ser fatorado colocando x em evidência: x(x + 5)."],
    [/sequ[eê]ncia|padr[aã]o/i, "Na sequência 2, 5, 8, 11, soma-se 3 a cada termo; o próximo é 14."]
  ],
  physics: [
    [/velocidade m[eé]dia/i, "Um ciclista percorre 12 km em 30 min (0,5 h): vₘ = 12 ÷ 0,5 = 24 km/h."],
    [/acelera[cç][aã]o/i, "Um carro passa de 0 a 20 m/s em 5 s: aₘ = (20 − 0) ÷ 5 = 4 m/s²."],
    [/movimento uniforme|\bmu\b/i, "Um ônibus a 10 m/s por 6 s percorre 60 m; com posição inicial 5 m, x = 5 + 10 × 6 = 65 m."],
    [/for[cç]a resultante|segunda lei|newton/i, "Uma força resultante de 12 N sobre uma massa de 3 kg produz a = F/m = 4 m/s²."],
    [/a[cç][aã]o e rea[cç][aã]o|terceira lei/i, "Ao empurrar uma parede, a pessoa exerce força nela e recebe uma força de mesma intensidade em sentido oposto."],
    [/densidade/i, "Um objeto de 200 g e 50 cm³ tem densidade d = 200 ÷ 50 = 4 g/cm³."],
    [/press[aã]o/i, "Uma força de 100 N distribuída em 2 m² produz pressão P = F/A = 50 Pa."],
    [/trabalho de uma for[cç]a|energia cin[eé]tica/i, "Uma força de 10 N desloca uma caixa 3 m na mesma direção: o trabalho é 10 × 3 = 30 J."],
    [/energia potencial gravitacional/i, "Com g ≈ 10 m/s², um objeto de 2 kg a 3 m de altura tem Eₚ = mgh = 60 J."],
    [/pot[eê]ncia/i, "Uma máquina realiza 600 J de trabalho em 3 s: P = 600 ÷ 3 = 200 W."],
    [/calor|temperatura|dilata/i, "Uma colher de metal esquenta ao ficar em contato com uma bebida quente porque há transferência de energia térmica."],
    [/frequ[eê]ncia|ondas/i, "Se uma onda completa 5 oscilações em 1 s, sua frequência é 5 Hz."],
    [/som|ac[uú]stica/i, "Uma corda vibrando mais rapidamente produz som de maior frequência, percebido como mais agudo."],
    [/reflex[aã]o/i, "Num espelho plano, o raio refletido sai com ângulo igual ao ângulo de incidência."],
    [/refra[cç][aã]o/i, "Um canudo parece mudar de posição dentro de um copo com água porque a luz muda de direção ao passar entre meios."],
    [/corrente|lei de ohm|resist[eê]ncia el[eé]trica/i, "Uma resistência de 6 Ω ligada a 12 V conduz i = U/R = 12/6 = 2 A."],
    [/circuito em s[eé]rie/i, "Resistores de 4 Ω e 6 Ω em série têm resistência equivalente de 10 Ω."],
    [/radioativ|meia-vida/i, "Uma amostra de 80 g com meia-vida de 10 anos fica com 40 g após 10 anos e 20 g após 20 anos."],
    [/escalares e vetores/i, "Dizer que alguém caminhou 3 km informa uma distância; dizer 3 km para leste também informa direção e sentido."],
    [/gr[aá]fico/i, "Num gráfico posição-tempo, uma reta mais inclinada representa maior velocidade constante."]
  ],
  chemistry: [
    [/densidade/i, "Uma amostra de 54 g que ocupa 20 cm³ tem densidade 54 ÷ 20 = 2,7 g/cm³."],
    [/[áa]tomo|n[uú]mero at[oô]mico|is[oó]topo/i, "No átomo de número de massa 23 e número atômico 11, há 11 prótons e 23 − 11 = 12 nêutrons."],
    [/liga[cç][aã]o covalente/i, "Na molécula de água, oxigênio e hidrogênios compartilham pares de elétrons em ligações covalentes."],
    [/liga[cç][aã]o i[oô]nica/i, "No NaCl, o sódio perde um elétron e o cloro o recebe; íons de cargas opostas se atraem."],
    [/pH|[áa]cido|base/i, "Suco de limão tem caráter ácido (pH abaixo de 7); uma solução de sabão costuma ser básica (pH acima de 7)."],
    [/balanceamento|oxirredu[cç][aã]o/i, "Na formação da água, 2H₂ + O₂ → 2H₂O conserva 4 átomos de H e 2 de O em cada lado."],
    [/mol|massa molar/i, "Como a massa molar da água é 18 g/mol, 36 g de água correspondem a 36 ÷ 18 = 2 mol."],
    [/concentra[cç][aã]o/i, "Dissolver 10 g de sal em 0,5 L de solução resulta em 10 ÷ 0,5 = 20 g/L."],
    [/termoqu[ií]mica|entalpia|lei de hess/i, "Se uma reação libera 250 kJ de calor, ela é exotérmica e ΔH = −250 kJ para a reação escrita."],
    [/cin[eé]tica|equil[ií]brio/i, "Aumentar a temperatura geralmente acelera uma reação porque mais partículas atingem energia suficiente para reagir."],
    [/pilha|eletr[oó]lise|corros[aã]o/i, "Numa pilha, uma reação espontânea de oxirredução transforma energia química em energia elétrica."],
    [/hidrocarboneto/i, "Metano (CH₄) é um hidrocarboneto: contém apenas carbono e hidrogênio."],
    [/pol[ií]mero|fun[cç][aã]o org[aâ]nica|[áa]lcool|[áa]cido carbox[ií]lico/i, "O etanol (CH₃CH₂OH) é um álcool: seu grupo característico é a hidroxila ligada a carbono."]
  ],
  biology: [
    [/membrana|organel|c[eé]lula/i, "Uma célula vegetal tem parede celular, cloroplastos e vacúolo; uma célula animal não possui cloroplastos."],
    [/fotoss[ií]ntese/i, "Uma planta iluminada usa água e gás carbônico para produzir glicose e liberar oxigênio durante a fotossíntese."],
    [/respira[cç][aã]o celular/i, "Células musculares usam glicose e oxigênio para liberar energia; o processo também produz gás carbônico e água."],
    [/mitose/i, "Uma célula da pele que se divide por mitose origina duas células-filhas com o mesmo número de cromossomos."],
    [/meiose/i, "Na formação de gametas, a meiose reduz à metade o número de cromossomos."],
    [/dna|gene|heran[cç]a|mendel/i, "Se um alelo A é dominante sobre a, um indivíduo Aa manifesta o caráter associado a A, embora também carregue a."],
    [/sele[cç][aã]o natural|evolu[cç][aã]o/i, "Em uma população de insetos, indivíduos resistentes a um pesticida sobrevivem e deixam mais descendentes; a resistência pode se tornar mais comum."],
    [/ecossistema|rela[cç][aã]o ecol[oó]gica|cadeia alimentar/i, "Numa cadeia capim → gafanhoto → sapo, a energia passa dos produtores aos consumidores."],
    [/bioma|biodiversidade/i, "Cactos e plantas resistentes à seca são adaptações comuns na Caatinga, onde a disponibilidade de água é limitada."],
    [/homeostase|sistema do corpo/i, "Ao correr, o corpo aumenta a frequência cardíaca para levar mais oxigênio aos músculos e ajudar a manter o equilíbrio interno."],
    [/vacina|micr[oó]bio|sa[uú]de p[uú]blica/i, "A vacinação treina o sistema imune para reconhecer um agente infeccioso e reduz a circulação da doença na comunidade."]
  ],
  geography: [
    [/escala cartogr[aá]fica/i, "Num mapa de escala 1:100.000, 1 cm representa 100.000 cm, ou 1 km, na realidade."],
    [/coordenad|latitude|longitude/i, "A latitude indica a posição ao norte ou ao sul do Equador; a longitude, a leste ou oeste de Greenwich."],
    [/gps|geotecnologia/i, "Um aplicativo de navegação combina coordenadas de GPS com uma rede viária para indicar uma rota."],
    [/clima|tempo atmosf[eé]rico/i, "Chuva observada hoje descreve o tempo; a média de chuvas de décadas caracteriza o clima de uma região."],
    [/urbaniza[cç][aã]o|metr[oó]pole/i, "O crescimento de bairros periféricos e o deslocamento diário para o centro são aspectos da expansão metropolitana."],
    [/popula[cç][aã]o|demogr[aá]f/i, "Uma pirâmide etária com base estreita pode indicar queda recente da natalidade e envelhecimento populacional."],
    [/agricultura|estrutura fundi[aá]ria|campo/i, "A comparação entre propriedades pequenas e grandes ajuda a analisar a concentração fundiária."],
    [/globaliza[cç][aã]o|ind[uú]stria/i, "Um celular pode ser projetado em um país, montado em outro e vendido globalmente, mostrando cadeias produtivas integradas."],
    [/bioma|conserva[cç][aã]o/i, "O desmatamento de uma área do Cerrado altera habitats, circulação da água e a biodiversidade local."]
  ],
  history: [
    [/renascimento/i, "Uma pintura renascentista que usa perspectiva para criar profundidade exemplifica o interesse pela observação e pelas proporções humanas."],
    [/feudal|medieval/i, "A relação entre senhor e camponês, marcada por obrigações e acesso à terra, ajuda a compreender a organização feudal."],
    [/reforma|absolutismo|expans[aã]o europeia/i, "A Reforma Protestante fragmentou a unidade religiosa da Europa ocidental e alterou relações entre poderes religiosos e monarquias."],
    [/revolu[cç][aã]o francesa/i, "A queda da Bastilha, em 1789, tornou-se símbolo da contestação à monarquia e aos privilégios na França."],
    [/industrializa[cç][aã]o|revolu[cç][aã]o industrial/i, "A substituição de oficinas por fábricas mecanizadas mudou a produção e ampliou o trabalho assalariado."],
    [/escravid[aã]o|aboli[cç][aã]o/i, "A Lei Áurea aboliu juridicamente a escravidão no Brasil em 1888, mas não garantiu por si só igualdade social e acesso à terra."],
    [/ditadura|regime militar/i, "A censura a jornais durante a ditadura militar brasileira é um exemplo de restrição à liberdade de expressão."],
    [/coloniza[cç][aã]o|povos origin[aá]rios/i, "A análise de relatos coloniais junto a narrativas indígenas permite comparar perspectivas sobre a ocupação do território."]
  ],
  philosophy: [
    [/mito|raz[aã]o|primeiros fil[oó]sofos/i, "Explicar um eclipse pela posição dos astros e por observações, em vez de atribuí-lo a uma narrativa sobrenatural, ilustra uma investigação racional."],
    [/plat[aã]o/i, "Na alegoria da caverna, pessoas que confundem sombras com realidade ilustram a diferença entre aparência e conhecimento."],
    [/arist[oó]teles/i, "Ao classificar animais observando características compartilhadas, aplica-se uma abordagem de organização e investigação associada a Aristóteles."],
    [/contratualismo|estado de natureza/i, "Uma turma cria regras comuns para evitar conflitos e proteger direitos: o acordo ilustra, de forma simples, a ideia de contrato social."],
    [/[ée]tica|moral|dilema/i, "Devolver uma carteira encontrada, mesmo sem ninguém observando, permite discutir dever moral, consequência e responsabilidade."],
    [/fal[aá]cia|argumenta[cç][aã]o/i, "“Todo mundo usa este produto, então ele é o melhor” apela à popularidade, não apresenta evidência de qualidade."]
  ],
  sociology: [
    [/socializa[cç][aã]o|institui[cç][aã]o/i, "Uma criança aprende regras de convivência em casa e na escola; família e escola participam da socialização."],
    [/marx/i, "Comparar quem possui uma fábrica e quem vende sua força de trabalho ajuda a discutir classes e relações de produção em Marx."],
    [/weber/i, "Estudar por que uma pessoa obedece a uma regra permite analisar os sentidos que ela atribui à ação social, tema associado a Weber."],
    [/durkheim/i, "A língua e as normas escolares já existem antes do indivíduo e influenciam seu comportamento, como fatos sociais analisados por Durkheim."],
    [/cultura|diversidade|patrim[oô]nio/i, "Uma festa tradicional transmitida entre gerações é uma prática cultural; sua valorização envolve reconhecer diferentes patrimônios."],
    [/desigualdade|discrimina[cç][aã]o|classe/i, "Comparar acesso a transporte, saúde e educação entre bairros evidencia como recursos e oportunidades são distribuídos de forma desigual."],
    [/pesquisa social|dados/i, "Uma pesquisa sobre transporte pode combinar questionários com dados de horários para identificar padrões, sem tratar correlação como causa."]
  ],
  portuguese: [
    [/met[aá]fora/i, "Em “a cidade acordou cedo”, a cidade não desperta literalmente; a frase atribui a ela uma ação humana."],
    [/concord[aâ]ncia verbal/i, "Em “as alunas chegaram”, o verbo “chegaram” concorda com o sujeito plural “as alunas”."],
    [/concord[aâ]ncia nominal/i, "Em “as duas casas antigas”, artigos, numeral e adjetivo concordam em gênero e número com “casas”."],
    [/reg[eê]ncia/i, "Em “gosto de música”, o verbo “gostar” exige a preposição “de”."],
    [/pontua[cç][aã]o|v[ií]rgula/i, "Em “Quando a aula terminou, os estudantes saíram”, a vírgula separa a oração adverbial deslocada."],
    [/coes[aã]o|pronome/i, "“Marina pegou o livro e o guardou”: o pronome “o” retoma “livro” e conecta as ideias."],
    [/ironia/i, "Dizer “Que pontualidade!” a alguém que chegou uma hora atrasado pode produzir ironia pelo contraste entre fala e situação."],
    [/fun[cç][aã]o da linguagem/i, "Num cartaz que diz “Doe sangue hoje”, predomina a intenção de mobilizar o leitor para uma ação."]
  ],
  literature: [
    [/romantismo/i, "Um poema que idealiza a pessoa amada e destaca sentimentos individuais apresenta traços associados ao Romantismo."],
    [/realismo/i, "Uma narrativa que expõe interesses, contradições e hipocrisias sociais sem idealizar os personagens aproxima-se do Realismo."],
    [/modernismo/i, "Um poema que usa linguagem cotidiana, versos livres e referências brasileiras exemplifica a ruptura modernista com modelos rígidos."],
    [/narrador/i, "Em “Eu vi a porta se abrir”, o narrador participa da cena; em “Ela viu a porta se abrir”, narra de fora."],
    [/met[aá]fora|figura de linguagem/i, "Em “meu coração é um deserto”, a metáfora associa sentimento de solidão a uma paisagem sem vida."]
  ],
  english: [
    [/false cognate|falso cognato/i, "“Actually” significa “na verdade”, não “atualmente”; confundir as palavras muda o sentido da frase."],
    [/cognat/i, "“Hospital” tem forma e significado semelhantes em inglês e português, sendo um cognato transparente."],
    [/passive voice|voz passiva/i, "Ativa: “The team built the bridge.” Passiva: “The bridge was built by the team.” O foco passa para a ponte."],
    [/past simple|simple past|passado/i, "“They visited the museum yesterday”: “visited” indica uma ação concluída no passado."],
    [/present perfect/i, "“She has lived here for five years” relaciona uma situação iniciada no passado ao presente."],
    [/modal/i, "“You should rest” usa “should” para dar um conselho, não para descrever uma obrigação legal."],
    [/conector|although|because|however/i, "“It was raining, but we went out”: “but” marca contraste entre as duas ideias."]
  ],
  spanish: [
    [/falso cognato|heterosem[aâ]ntico/i, "Em espanhol, “embarazada” significa grávida, não “embaraçada”; o contexto ajuda a evitar a tradução literal."],
    [/cognat/i, "“Importante” tem forma e sentido semelhantes em espanhol e português, sendo um cognato transparente."],
    [/pret[eé]rito|passado/i, "“Ayer estudié para el examen”: “estudié” indica uma ação concluída ontem."],
    [/ser e estar|ser, estar|estar/i, "“Ella es médica” identifica profissão; “ella está cansada” descreve um estado."],
    [/conector/i, "“Quería salir, pero llovía”: “pero” introduz contraste entre a vontade e a situação."]
  ],
  arts: [
    [/perspectiva/i, "Linhas de uma estrada desenhada que parecem se encontrar no horizonte criam profundidade por perspectiva."],
    [/ritmo/i, "Bater palmas regularmente a cada dois tempos cria um padrão rítmico que pode acompanhar uma música."],
    [/timbre/i, "A mesma nota tocada por flauta e violão soa diferente; essa qualidade que distingue as fontes é o timbre."],
    [/patrim[oô]nio/i, "Preservar uma construção histórica e registrar relatos da comunidade são formas diferentes de cuidar do patrimônio."]
  ],
  physicalEducation: [
    [/frequ[eê]ncia card[ií]aca|exerc[ií]cio/i, "Após uma corrida, a frequência cardíaca aumenta para levar mais oxigênio aos músculos ativos."],
    [/treinamento|capacidades/i, "Caminhadas progressivas podem desenvolver resistência cardiorrespiratória quando praticadas com regularidade e recuperação adequada."],
    [/coopera[cç][aã]o|t[aá]tica/i, "No basquete, passar a bola a uma pessoa desmarcada pode criar uma oportunidade melhor do que tentar arremessar sob marcação."],
    [/luta/i, "No judô, usar o equilíbrio e o movimento do oponente é parte da técnica; não se trata apenas de força física."]
  ],
  communication: [
    [/desinforma[cç][aã]o|checagem/i, "Antes de compartilhar uma notícia sobre saúde, confira a data, procure a fonte original e compare com instituições confiáveis."],
    [/privacidade|dados pessoais/i, "Um aplicativo que pede acesso à localização sem precisar dela para funcionar coleta um dado que merece ser questionado."],
    [/algoritmo|vi[eé]s/i, "Se um sistema de seleção é treinado com dados históricos que excluem certos grupos, pode repetir essa desigualdade nas recomendações."],
    [/publicidade|persuas[aã]o/i, "Um anúncio que usa contagem regressiva e “últimas unidades” tenta acelerar a compra por urgência."],
    [/acessibilidade/i, "Legendas em vídeos permitem que pessoas surdas acompanhem o conteúdo e também ajudam quem assiste sem áudio."]
  ],
  essay: [
    [/tese/i, "Tema: descarte de lixo eletrônico. Tese possível: a falta de pontos de coleta e de informação dificulta o descarte adequado no Brasil."],
    [/argumento|evid[eê]ncia/i, "Para defender a ampliação de bibliotecas, use um dado de acesso à leitura e explique como a proximidade facilita o empréstimo de livros."],
    [/proposta de interven[cç][aã]o/i, "O Ministério do Meio Ambiente (agente) pode ampliar pontos de coleta (ação), por campanhas e parcerias municipais (meio), para reduzir o descarte incorreto (finalidade), respeitando a participação comunitária."],
    [/coes[aã]o|conectivo/i, "“A coleta seletiva reduz resíduos. Além disso, permite reaproveitar materiais”: “Além disso” acrescenta um argumento relacionado."],
    [/repert[oó]rio/i, "Ao discutir acesso à educação, uma referência a um dado público sobre evasão escolar pode contextualizar o problema, desde que seja explicada e ligada à tese."]
  ]
};

const theoryExampleFallbacks = {
  physics: (part, point) => `Imagine uma situação de ${part.title.toLowerCase()}: ao observar ${point[0].toLowerCase()}, identifique no fenômeno qual grandeza ou interação está sendo descrita e compare com a definição acima.`,
  biology: (part, point) => `Exemplo de observação: ao estudar ${part.title.toLowerCase()}, procure um organismo ou processo real em que ${point[0].toLowerCase()} apareça e explique o papel que desempenha.`,
  chemistry: (part, point) => `Exemplo de análise: ao examinar uma substância ou transformação ligada a ${part.title.toLowerCase()}, use ${point[0].toLowerCase()} para descrever o que ocorre e justifique com a teoria.`,
  math: (part, point) => `Ao resolver um problema de ${part.title.toLowerCase()}, identifique os dados, escolha o procedimento ligado a ${point[0].toLowerCase()} e confira se a resposta faz sentido nas unidades e no contexto.`,
  history: (part, point) => `Exemplo de análise histórica: ao estudar ${part.title.toLowerCase()}, compare uma fonte da época com outra perspectiva e observe como ${point[0].toLowerCase()} ajuda a explicar o processo.`,
  geography: (part, point) => `Exemplo de aplicação: ao analisar uma paisagem ou mapa ligado a ${part.title.toLowerCase()}, use ${point[0].toLowerCase()} para relacionar o que observa com a organização do espaço.`,
  philosophy: (part, point) => `Exemplo de reflexão: diante de uma situação cotidiana relacionada a ${part.title.toLowerCase()}, formule uma pergunta e use ${point[0].toLowerCase()} para justificar uma resposta.`,
  sociology: (part, point) => `Exemplo de análise social: observe uma situação de convivência em uma escola ou comunidade e use ${point[0].toLowerCase()} para explicar as relações e regras envolvidas.`,
  portuguese: (part, point) => `Exemplo de leitura: em uma notícia ou conversa sobre ${part.title.toLowerCase()}, observe como ${point[0].toLowerCase()} contribui para o sentido produzido.`,
  literature: (part, point) => `Exemplo de leitura: em um poema ou narrativa de ${part.title.toLowerCase()}, observe como ${point[0].toLowerCase()} orienta a interpretação do texto.`,
  english: (part, point) => `Exemplo de leitura: em um texto em inglês sobre ${part.title.toLowerCase()}, use ${point[0].toLowerCase()} para inferir a ideia principal e confirme sua interpretação pelo contexto.`,
  spanish: (part, point) => `Exemplo de leitura: em um texto em espanhol sobre ${part.title.toLowerCase()}, use ${point[0].toLowerCase()} para inferir a ideia principal e confirme sua interpretação pelo contexto.`,
  arts: (part, point) => `Exemplo de apreciação: ao observar uma obra ou apresentação ligada a ${part.title.toLowerCase()}, use ${point[0].toLowerCase()} para descrever uma escolha artística e seu efeito.`,
  physicalEducation: (part, point) => `Exemplo de prática: durante uma atividade física relacionada a ${part.title.toLowerCase()}, observe ${point[0].toLowerCase()} e explique como ela influencia a participação ou o movimento.`,
  communication: (part, point) => `Exemplo de análise: ao receber uma mensagem digital relacionada a ${part.title.toLowerCase()}, use ${point[0].toLowerCase()} para avaliar como ela foi produzida e que efeito pode causar.`,
  essay: (part, point) => `Exemplo de escrita: em um texto sobre ${part.title.toLowerCase()}, aplique ${point[0].toLowerCase()} e confira se a ideia está ligada ao tema e sustentada por uma justificativa.`
};

function theoryExampleFor(subjectId, part, point) {
  if (typeof point[2] === "string" && point[2].trim()) return point[2].trim();

  const concept = `${point[0]} ${point[1]}`;
  const explicitExample = point[1].match(/(?:por exemplo|exemplos incluem|exemplo:)\s*[:,]?\s*([^.;]+[.;]?)/i)?.[1];
  if (explicitExample) return explicitExample.trim();

  const rule = theoryExampleRules[subjectId]?.find(([pattern]) => pattern.test(concept));
  if (rule) return rule[1];

  if (subjectId === "math" && part.workedExample) {
    const example = part.workedExample;
    return `${example.problem} ${example.steps.join(" ")} ${example.result}`;
  }

  const fallback = theoryExampleFallbacks[subjectId];
  return fallback
    ? fallback(part, point)
    : `Exemplo de aplicação: em uma situação relacionada a ${part.title.toLowerCase()}, use ${point[0].toLowerCase()} para explicar o que acontece.`;
}
