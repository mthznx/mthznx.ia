const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a principal causa das mudanças climáticas e como podemos mitigá-las?",
        alternativas: [
            {
                texto: "A principal causa é o aumento das emissões de gases de efeito estufa. Podemos mitigá-las reduzindo essas emissões através da transição para fontes de energia renováveis e melhorando a eficiência energética.",
                afirmacao: "Você compreendeu que a mitigação das mudanças climáticas envolve mudanças significativas em como usamos e gerenciamos nossos recursos."
            },
            {
                texto: "A principal causa é o aumento do consumo de água. Podemos mitigá-las reduzindo o consumo e promovendo a conservação da água.",
                afirmacao: "Você percebeu que a questão das mudanças climáticas envolve uma ampla gama de fatores, não se limitando apenas ao consumo de água."
            }
        ]
    },
    {
        enunciado: "Como a poluição do ar afeta a saúde humana e o que pode ser feito para reduzir suas emissões?",
        alternativas: [
            {
                texto: "A poluição do ar pode causar doenças respiratórias e cardiovasculares. Para reduzir as emissões, é importante implementar normas rigorosas e promover o uso de transporte sustentável.",
                afirmacao: "Você entendeu que reduzir a poluição do ar é essencial para proteger a saúde humana e que várias medidas podem ser tomadas para alcançar isso."
            },
            {
                texto: "A poluição do ar não tem grandes impactos na saúde humana. Podemos reduzir a poluição através de práticas de reciclagem.",
                afirmacao: "Você percebeu que a poluição do ar tem efeitos significativos na saúde e que as soluções são mais complexas do que apenas reciclagem."
            }
        ]
    },
    {
        enunciado: "Quais são as principais consequências do desmatamento e como ele pode ser combatido?",
        alternativas: [
            {
                texto: "O desmatamento causa perda de biodiversidade e aumento das emissões de CO₂. Pode ser combatido com práticas de manejo sustentável e recuperação de áreas degradadas.",
                afirmacao: "Você compreendeu que o desmatamento tem consequências graves e que há várias estratégias para combatê-lo."
            },
            {
                texto: "O desmatamento não tem grandes consequências. Pode ser combatido com o aumento da produção de alimentos.",
                afirmacao: "Você percebeu que o desmatamento é um problema significativo e que soluções eficazes vão além da produção de alimentos."
            }
        ]
    },
    {
        enunciado: "Como a agricultura sustentável pode ajudar a proteger a biodiversidade e melhorar a segurança alimentar?",
        alternativas: [
            {
                texto: "A agricultura sustentável adota práticas que preservam habitats e promovem a biodiversidade, além de melhorar a produtividade e a resiliência das culturas.",
                afirmacao: "Você entendeu que a agricultura sustentável é fundamental para equilibrar a produção de alimentos e a proteção ambiental."
            },
            {
                texto: "A agricultura sustentável não tem impacto na biodiversidade e só melhora a produtividade.",
                afirmacao: "Você percebeu que a agricultura sustentável tem um papel importante na preservação da biodiversidade além de melhorar a produtividade."
            }
        ]
    },
    {
        enunciado: "O que são energias renováveis e quais são seus benefícios em comparação com fontes de energia não renováveis?",
        alternativas: [
            {
                texto: "Energias renováveis são fontes que se regeneram naturalmente, como solar e eólica. Seus benefícios incluem menor impacto ambiental e sustentabilidade a longo prazo.",
                afirmacao: "Você aprendeu que as energias renováveis são mais sustentáveis e têm um impacto ambiental significativamente menor."
            },
            {
                texto: "Energias renováveis são apenas uma alternativa temporária. As fontes não renováveis ainda são mais eficazes e baratas.",
                afirmacao: "Você percebeu que, apesar de serem mais caras no início, as energias renováveis oferecem benefícios a longo prazo que justificam seu investimento."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
