const perguntas = [
{
        nivel: "Difícil",
        pergunta: "Qual jogador detém o recorde de mais gols marcados em uma única edição de Copa do Mundo?",
        respostas: ["Just Fontaine", "Sandor Kocsis", "Gerd Müller", "Ademir de Menezes"],
        correta: 0
    },

    {
        nivel: "Difícil",
        pergunta: "Quem é o único jogador a marcar gols em duas finais de Copa do Mundo por seleções diferentes?",
        respostas: ["Zinedine Zidane", "Pelé", "Luis Monti", "Juan Alberto Schiaffino"],
        correta: 2
    },

    {
        nivel: "Difícil",
        pergunta: "Qual dessas seleções jogou três finais de Copa do Mundo e perdeu todas?",
        respostas: ["Hungria", "Holanda", "Argentina", "Tchecoslováquia"],
        correta: 1
    },

    {
        nivel: "Difícil",
        pergunta: "Em qual Copa do Mundo a numeração nas camisas dos jogadores foi utilizada pela primeira vez?",
        respostas: ["1930 (Uruguai)", "1934 (Itália)", "1938 (França)", "1950 (Brasil)"],
        correta: 3
    },

    {
        nivel: "Difícil",
        pergunta: "Quem foi o primeiro jogador a ser expulso em uma final de Copa do Mundo?",
        respostas: ["Zinedine Zidane", "Pedro Monzón", "Marcel Desailly", "John Heitinga"],
        correta: 1
    },

    {
        nivel: "Difícil",
        pergunta: "Qual país detém o recorde de mais cartões vermelhos recebidos na história das Copas?",
        respostas: ["Brasil", "Argentina", "Uruguai", "Itália"],
        correta: 0
    },

    {
        nivel: "Difícil",
        pergunta: "Quem marcou o gol do título da Alemanha na prorrogação da final da Copa de 2014?",
        respostas: ["Miroslav Klose", "Thomas Müller", "Mario Götze", "André Schürrle"],
        correta: 2
    },

    {
        nivel: "Difícil",
        pergunta: "Além de Zagallo e Didier Deschamps, quem mais ganhou a Copa do Mundo como jogador e como treinador?",
        respostas: ["Franz Beckenbauer", "Johan Cruyff", "Diego Maradona", "Vittorio Pozzo"],
        correta: 0
    },

    {
        nivel: "Difícil",
        pergunta: "Qual foi a única edição da Copa do Mundo que não teve uma partida de finalíssima única, mas sim um quadrangular final?",
        respostas: ["1934", "1938", "1950", "1954"],
        correta: 2
    },

    {
        nivel: "Difícil",
        pergunta: "Qual jogador detém o recorde de partida mais jovem a marcar um gol em uma Copa do Mundo?",
        respostas: ["Pelé", "Michael Owen", "Gavi", "Manuel Rosas"],
        correta: 0
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

const botoesResposta = [asw1, asw2, asw3, asw4];

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
        btn.disabled = false;
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
        btn.style.background = "";
        btn.style.color = "";
    });

    asw1.textContent = "Voltar";
    asw1.addEventListener("click", () => {
        document.location.href = "index.html"; 
    });

    asw2.textContent = "Jogar novamente";
    asw2.addEventListener("click", () => {
        indiceAtual = 0;
        pontos = 0;
        carregarPergunta();
    });

    asw3.textContent = "Médio";
    asw3.addEventListener("click", () => {
        document.location.href = "medio.html"; 
    });

    asw4.textContent = "Difícil";
    asw4.addEventListener("click", () => {
        document.location.href = "dificil.html"; 
    });
}

botoesResposta.forEach((btn, i) => {
    btn.addEventListener("click", () => responder(i));
});

carregarPergunta();