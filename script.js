// Calculadora Sustentável
function calcular() {

    let agua = Number(document.getElementById("agua").value);
    let resultado = document.getElementById("resultado");

    if (agua <= 0 || isNaN(agua)) {
        resultado.innerHTML = "Digite uma quantidade válida.";
        resultado.style.color = "red";
        return;
    }

    let economiaMes = agua * 30;
    let economiaAno = agua * 365;

    resultado.style.color = "#2e7d32";
    resultado.innerHTML =
        `Você economiza aproximadamente <strong>${economiaMes} litros</strong> por mês e <strong>${economiaAno} litros</strong> por ano. 🌱`;
}

// Quiz
let respondeu = false;

function respostaCorreta() {

    if (respondeu) return;

    respondeu = true;

    document.getElementById("quizResultado").style.color = "green";
    document.getElementById("quizResultado").innerHTML =
        "✅ Parabéns! A irrigação inteligente reduz o desperdício de água.";
}

function respostaErrada() {

    if (respondeu) return;

    respondeu = true;

    document.getElementById("quizResultado").style.color = "red";
    document.getElementById("quizResultado").innerHTML =
        "❌ Resposta incorreta. A irrigação inteligente é a alternativa sustentável.";
}

// Contador de Árvores
let arvores = 0;

function plantar() {

    arvores++;

    document.getElementById("contador").innerHTML = arvores;

    if (arvores == 10) {
        alert("🌳 Parabéns! Você plantou 10 árvores virtuais!");
    }

    if (arvores == 50) {
        alert("🌎 Excelente! Pequenas atitudes fazem um grande futuro sustentável.");
    }
}

// Mensagem de boas-vindas
window.onload = function () {

    alert("🌱 Bem-vindo ao AgroConsciente!\n\nDescubra como a tecnologia pode ajudar a construir um futuro sustentável.");
};