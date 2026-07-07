const perguntas = [
{
        nivel: "Médio",
        pergunta: "Quem é o maior artilheiro da história das Copas do Mundo?",
        respostas: ["Marta", "Ronaldo Fenômeno", "Miroslav Klose", "Pelé"],
        correta: 2
    },

    {
        nivel: "Médio",
        pergunta: "Qual país sediou a Copa do Mundo de 1994, vencida pelo Brasil?",
        respostas: ["Estados Unidos", "França", "Itália", "Japão"],
        correta: 0
    },

    {
        nivel: "Médio",
        pergunta: "Qual dessas seleções europeias nunca venceu uma Copa do Mundo?",
        respostas: ["Inglaterra", "Espanha", "Holanda", "França"],
        correta: 2
    },

    {
        nivel: "Médio",
        pergunta: "Em qual Copa do Mundo o sistema de cartões (amarelo e vermelho) foi usado pela primeira vez?",
        respostas: ["1966 (Inglaterra)", "1970 (México)", "1974 (Alemanha)", "1982 (Espanha)"],
        correta: 1
    },

    {
        nivel: "Médio",
        pergunta: "Quem era o treinador da Seleção Brasileira na conquista do pentacampeonato em 2002?",
        respostas: ["Zagallo", "Carlos Alberto Parreira", "Luiz Felipe Scolari", "Dunga"],
        correta: 2
    },

    {
        nivel: "Médio",
        pergunta: "Qual jogador marcou o famoso gol conhecido como 'A Mão de Deus' na Copa de 1986?",
        respostas: ["Diego Maradona", "Pelé", "Zinedine Zidane", "Lionel Messi"],
        correta: 0
    },

    {
        nivel: "Médio",
        pergunta: "Quantas seleções africanas já chegaram a uma semifinal de Copa do Mundo até hoje?",
        respostas: ["Nenhuma", "Uma", "Duas", "Três"],
        correta: 1
    },

    {
        nivel: "Médio",
        pergunta: "Qual país foi a zebra ao eliminar a Itália e chegar à semifinal da Copa de 2002?",
        respostas: ["Turquia", "Senegal", "Coreia do Sul", "Japão"],
        correta: 2
    },

    {
        nivel: "Médio",
        pergunta: "Qual jogador detém o recorde de ter vencido três Copas do Mundo como atleta?",
        respostas: ["Cafu", "Pelé", "Maradona", "Garrincha"],
        correta: 1
    },

    {
        nivel: "Médio",
        pergunta: "Qual país sediou a primeira edição da Copa do Mundo em 1930?",
        respostas: ["Brasil", "Uruguai", "Itália", "França"],
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