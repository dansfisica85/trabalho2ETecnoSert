export const questions = [
    {
        id: 1,
        question: "Uma esfera metálica condutora de raio R = 0,2 m está uniformemente carregada em sua superfície com uma carga Q = 4,0 μC. Qual a intensidade do campo elétrico em um ponto P localizado a uma distância d = 0,1 m do centro da esfera? (Considere a esfera no vácuo, com k = 9,0 × 10⁹ N⋅m²/C²)",
        options: [
            "0 N/C",
            "9,0 × 10⁵ N/C",
            "1,8 × 10⁶ N/C",
            "3,6 × 10⁵ N/C",
            "1,8 × 10⁵ N/C"
        ],
        correct: 0 // O campo elétrico dentro de um condutor em equilíbrio é nulo.
    },
    {
        id: 2,
        question: "Duas cargas elétricas puntiformes de +3,0 μC e -2,0 μC estão separadas por uma distância de 30 cm no vácuo. Calcule a força elétrica entre elas. (k = 9,0 × 10⁹ N⋅m²/C²)",
        options: [
            "0,6 N (atrativa)",
            "0,6 N (repulsiva)",
            "1,8 N (atrativa)",
            "1,8 N (repulsiva)",
            "0,3 N (atrativa)"
        ],
        correct: 0
    },
    {
        id: 3,
        question: "Entre duas placas paralelas, existe um campo elétrico uniforme de intensidade E = 2,0 × 10⁴ N/C. Uma carga de prova q = +5,0 μC é colocada nesse campo. Qual a intensidade, direção e sentido da força elétrica que atua sobre a carga de prova?",
        options: [
            "0,1 N, mesma direção e sentido do campo.",
            "0,1 N, direção e sentido opostos ao campo.",
            "1,0 N, mesma direção e sentido do campo.",
            "1,0 N, direção e sentido opostos ao campo.",
            "0,5 N, perpendicular ao campo."
        ],
        correct: 0
    },
    {
        id: 4,
        question: "Qual das seguintes afirmações sobre as linhas de força de um campo elétrico está INCORRETA?",
        options: [
            "Elas se cruzam em pontos onde o campo elétrico é mais intenso.",
            "Elas nunca se cruzam.",
            "Elas saem das cargas positivas e chegam às cargas negativas.",
            "A densidade de linhas em uma região é proporcional à intensidade do campo nessa região.",
            "São tangentes ao vetor campo elétrico em cada ponto."
        ],
        correct: 0
    },
    {
        id: 5,
        question: "Três cargas elétricas puntiformes de mesmo valor q = +2,0 μC estão dispostas nos vértices de um triângulo equilátero de lado 0,3 m. Determine a força elétrica resultante sobre uma das cargas. (k = 9,0 × 10⁹ N⋅m²/C², √3 ≈ 1,73)",
        options: [
            "0,69 N",
            "0,40 N",
            "0,80 N",
            "1,20 N",
            "0,23 N"
        ],
        correct: 0 // F = (k*q^2/L^2)*sqrt(3). F = (9e9 * (2e-6)^2 / 0.3^2) * 1.73 = (0.4) * 1.73 = 0.692 N
    },
    {
        id: 6,
        question: "Uma carga puntiforme Q = -5,0 nC está no vácuo (k = 9,0 × 10⁹ N⋅m²/C²). Qual é o módulo do campo elétrico criado por essa carga em um ponto P situado a 30 cm dela?",
        options: [
            "500 N/C",
            "150 N/C",
            "300 N/C",
            "450 N/C",
            "50 N/C"
        ],
        correct: 0 // E = k*|Q|/d^2 = 9e9 * 5e-9 / (0.3)^2 = 45 / 0.09 = 500 N/C
    },
    {
        id: 7,
        question: "Uma esfera condutora de raio 0,15 m está em equilíbrio eletrostático com uma carga total de 6,0 nC. Determine o campo elétrico na superfície da esfera. (k = 9,0 × 10⁹ N⋅m²/C²)",
        options: [
            "2400 N/C",
            "3600 N/C",
            "4800 N/C",
            "1200 N/C",
            "0 N/C"
        ],
        correct: 0 // E = k*Q/R^2 = 9e9 * 6e-9 / (0.15)^2 = 54 / 0.0225 = 2400 N/C
    },
    {
        id: 8,
        question: "Duas cargas elétricas puntiformes de +4,0 μC e +9,0 μC estão separadas por 60 cm. Em que ponto da reta que une as cargas o campo elétrico resultante é nulo?",
        options: [
            "A 24 cm da carga de +4,0 μC",
            "A 30 cm da carga de +4,0 μC",
            "A 36 cm da carga de +4,0 μC",
            "A 40 cm da carga de +4,0 μC",
            "A 20 cm da carga de +9,0 μC"
        ],
        correct: 0
    },
    {
        id: 9,
        question: "Duas cargas puntiformes, Q1 = +2 µC e Q2 = +8 µC, estão fixas e separadas por uma distância de 30 cm. Uma terceira carga, q = -1 µC, é colocada sobre a reta que une Q1 e Q2. Para que a força resultante sobre a carga q seja nula, onde ela deve ser posicionada?",
        options: [
            "A 10 cm de Q1",
            "A 20 cm de Q1",
            "A 15 cm de Q1",
            "A 10 cm de Q2",
            "A posição de q não afeta a força resultante."
        ],
        correct: 0 // k*Q1/x^2 = k*Q2/(d-x)^2 -> 2/x^2 = 8/(0.3-x)^2 -> 1/x = 2/(0.3-x) -> 0.3-x = 2x -> 3x=0.3 -> x=0.1m = 10cm
    },
    {
        id: 10,
        question: "A Lei de Coulomb afirma que a força elétrica entre duas cargas puntiformes é diretamente proporcional ao produto das cargas e inversamente proporcional ao quadrado da distância entre elas. Se a distância entre duas cargas for triplicada, a força elétrica entre elas:",
        options: [
            "Será dividida por 9.",
            "Será dividida por 3.",
            "Será multiplicada por 3.",
            "Será multiplicada por 9.",
            "Permanecerá a mesma."
        ],
        correct: 0
    },
    {
        id: 11,
        question: "Um campo elétrico é criado por uma carga puntiforme positiva. As linhas de força deste campo são:",
        options: [
            "Radiais, se afastando da carga.",
            "Radiais, apontando para a carga.",
            "Circulares e concêntricas com a carga.",
            "Paralelas e igualmente espaçadas.",
            "Espirais, se afastando da carga."
        ],
        correct: 0
    },
    {
        id: 12,
        question: "Uma partícula com carga q = -3,0 x 10⁻⁶ C é colocada em uma região onde há um campo elétrico uniforme E, orientado para a direita, com intensidade de 5,0 x 10⁵ N/C. Qual é o módulo, a direção e o sentido da força elétrica que atua na partícula?",
        options: [
            "1,5 N, para a esquerda.",
            "1,5 N, para a direita.",
            "0,6 N, para a esquerda.",
            "0,6 N, para a direita.",
            "0 N, pois a partícula está em equilíbrio."
        ],
        correct: 0 // F = |q|E = 3e-6 * 5e5 = 1.5 N. Como a carga é negativa, a força é oposta ao campo.
    },
    {
        id: 13,
        question: "O que acontece com a intensidade do campo elétrico em um ponto P se a carga fonte que o gera for duplicada e a distância de P até a carga for reduzida à metade?",
        options: [
            "Aumenta 8 vezes.",
            "Aumenta 4 vezes.",
            "Permanece a mesma.",
            "Diminui para a metade.",
            "Aumenta 2 vezes."
        ],
        correct: 0 // E' = k*(2Q)/(d/2)^2 = k*2Q/(d^2/4) = 8 * (k*Q/d^2) = 8E
    },
    {
        id: 14,
        question: "Duas cargas elétricas, Q e -4Q, estão separadas por uma distância d. Qual a intensidade da força que a carga Q exerce sobre a carga -4Q?",
        options: [
            "4kQ²/d²",
            "kQ²/d²",
            "2kQ²/d²",
            "16kQ²/d²",
            "zero"
        ],
        correct: 0 // Pela Lei de Coulomb, F = k*|Q1*Q2|/d^2 = k*|Q*(-4Q)|/d^2 = 4kQ^2/d^2
    },
    {
        id: 15,
        question: "O conceito de campo elétrico foi introduzido por qual cientista?",
        options: [
            "Michael Faraday",
            "Charles Coulomb",
            "Isaac Newton",
            "Galileu Galilei",
            "James Clerk Maxwell"
        ],
        correct: 0
    }
];