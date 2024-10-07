const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como evitar o racismo?",
        alternativas: [
            {
                texto: "Para evitar o racismo em ambientes de estudo, é essencial promover uma educação inclusiva e diversificada. Isso inclui treinar professores sobre viés inconsciente.",
                afirmacao: "Voce compreendeu que garantir que e acontecimentos tem que parar. ."
            },
            {
                texto: "A principal causa é o aumentode bullyng racial nas escolas.",
                afirmacao: "Você percebeu que a questão das pessoas fazerem racismo com pessoas negras é um crime gravissimo ."
            }
        ]
    },
    {
        enunciado: "Como evitar o racismo na escola?",
        alternativas: [
            {
                texto: " Também é importante fomentar um ambiente onde alunos se sintam seguros para expressar suas preocupações.",
                afirmacao: "Você entendeu."
            },
            {
                texto: ".",
                afirmacao: "Você percebeu que o racismo/preconceito com o proximo é um crime ."
            }
        ]
    },
    {
        enunciado: " O ultimate objetivo é construir um espaço seguro e igualitário para todos.?",
        alternativas: [
            {
                texto: "o racismo causa um forte descontrole mental na vitima.",
                afirmacao: "Você compreendeu que o racismo pode acabar até em suicidio."
            },
            {
                texto: "O racismo pode causar até depressão na vitima.",
                afirmacao: "Você compreendeu que o racismo pode acabar até em suicidio."
            }
        ]
    },Você compreendeu que o racismo pode acabar até em suicidioo racismo causa um forte descontrole mental na vitima.
    {
        enunciado: "Como evitar o racismo?",
        alternativas: [
            {rigoso e é um rime gravissim
                texto: "o racismo causa um forte descontrole mental na vitima.",
                afirmacao: "Você entendeu que o racismo e preconceito são um gatilho para a pessoa se suicidar."
            },
            {.
                texto: " o racismo pode causar um ipacto muito grande na vida da vitima.",
                afirmacao: "Você percebeu que praticar racismo é muito perigoso e é um rime gravissimo."
            }
        ]
    },
    {
        enunciado: "O que pode acontecer se praticar o racismo?",
        alternativas: [
            {
                texto: "o racismo causa um forte descontrole mental na vitima.",
                afirmacao: "Você percebeu que o racismo/preconceito com o proximo é um crime ."
            },
            {.
                texto: " o racismo pode causar um ipacto muito grande na vida da vitimas.",
                afirmacao: "Você percebeu que praticar racismo é muito perigoso e é um rime gravissimo."
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
        return; a agricultura sustentável pode ajudar a proteger a biodiversidade e melhorar a segurança alimentar
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button"); o racismo pode causar um ipacto muito grande na vida da vitima
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
