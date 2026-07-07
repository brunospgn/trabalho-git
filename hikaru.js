const perguntas = [
    {
        nivel: "Fácil",
        pergunta: "Quantos países participaram da Copa do Mundo de 2026?",
        respostas: ["32", "48", "30", "24"],
        correta: 1
    },

    {
        nivel: "Fácil",
        pergunta: "Quantas Copas do Mundo o Brasil tem?",
        respostas: ["5", "6", "7", "8"],
        correta: 0
    },

    {
        nivel: "Fácil",
        pergunta: "Com qual seleção o Brasil jogou primeiro?",
        respostas: ["Egito", "Escócia", "Marrocos", "Haiti"],
        correta: 2
    },

    {
        nivel: "Fácil",
        pergunta: "Quem é o camisa 10 do Brasil?",
        respostas: ["Neymar Jr", "Endrick", "Vini Jr", "Acellotti"],
        correta: 0
    },

    {
        nivel: "Fácil",
        pergunta: "De quantos em quantos anos acontece a Copa do Mundo?",
        respostas: ["2 anos", "4 anos", "5 anos", "6 anos"],
        correta: 1
    },

    {
        nivel: "Fácil",
        pergunta: "Qual país venceu a Copa do Mundo de 2022 no Catar?",
        respostas: ["França", "Brasil", "Argentina", "Croácia"],
        correta: 2
    },

    {
        nivel: "Fácil",
        pergunta: "Qual é o prêmio dado ao artilheiro de uma Copa do Mundo?",
        respostas: ["Luva de Ouro", "Chuteira de Ouro", "Bola de Ouro", "Troféu Fair Play"],
        correta: 1
    },

    {

        nivel: "Fácil",
        pergunta: "Qual é o país conhecido como o país do futebol?",
        respostas: ["Argentina", "Brasil", "Itália", "Alemanha"],
        correta: 1
    },

    {
        nivel: "Fácil",
        pergunta: "Qual é o objeto principal usado para jogar futebol?",
        respostas: ["Raquete", "Bastão", "Bola", "Puck"],
        correta: 2
    },

    {
        nivel: "Fácil",
        pergunta: "O que ganha a seleção que vence a final da Copa do Mundo?",
        respostas: ["Uma medalha de prata", "Um troféu", "Um cinturão", "Uma coroa"],
        correta: 1
    }

];
 

let indiceAtual = 0;
let pontos = 0;
let respondida = false;

const elNivel = document.getElementById("quiz-nivel");
const elProgresso = document.getElementById("progresso");
const elPergunta = document.getElementById("pergunta");
const asw1 = document.getElementById("asw-1");
const asw2 = document.getElementById("asw-2");
const asw3 = document.getElementById("asw-3");
const asw4 = document.getElementById("asw-4");

const botoesResposta = [
    asw1, asw2, asw3, asw4
];

function carregarPergunta() {
    respondida = false;
    const dados = perguntas[indiceAtual];

    elNivel.textContent = dados.nivel;
    elProgresso.textContent = `${indiceAtual + 1}/${perguntas.length}`;
    elPergunta.textContent = dados.pergunta;

    botoesResposta.forEach((btn, i) => {
        btn.textContent = dados.respostas[i];
        btn.style.background = "";
        btn.style.color = "";
    });
}

function responder(indiceEscolhido) {
    if (respondida) return;
    respondida = true;

    const dados = perguntas[indiceAtual];

    botoesResposta.forEach((btn, i) => {
        if (i === dados.correta) {
            btn.style.background = "#4ade80";
            btn.style.color = "white";
        } else if (i === indiceEscolhido) {
            btn.style.background = "#f87171";
            btn.style.color = "white";
        }
    });

    if (indiceEscolhido === dados.correta) {
        pontos++;
    }

    setTimeout(avancar, 1000);
}

function avancar() {
    if (indiceAtual === perguntas.length - 1) {
        finalizarQuiz();
        return;
    }

    indiceAtual++;
    carregarPergunta();
}

function finalizarQuiz() {
    elNivel.textContent = "Resultado";
    elProgresso.textContent = `${perguntas.length}/${perguntas.length}`;
    elPergunta.textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;

    botoesResposta.forEach((btn) => {
        btn.textContent = "Voltar";
        btn.style.background = "";
        btn.style.color = "";
        btn.disabled = true;
    });

    asw1.textContent = "Voltar";
    asw1.style.background = "";
    asw1.style.color = "";

    asw1.addEventListener("click", () => {
        document.location.href
    });

    asw2.textContent = "Jogar novamente";
    asw2.style.background = "";
    asw2.style.color = "";

    asw2.addEventListener("click", () => {
        document.location.href
    });

    asw3.textContent = "Médio";
    asw3.style.background = "";
    asw3.style.color = "";

    asw3.addEventListener("click", () => {
        document.location.href
    });

    asw4.textContent = "Díficil";
    asw4.style.background = "";
    asw4.style.color = "";

    asw4.addEventListener("click", () => {
        document.location.href
    });
}

botoesResposta.forEach((btn, i) => {
    btn.addEventListener("click", () => responder(i));
});

carregarPergunta();