// BOTÃO DE ENTRADA

const botaoEntrar = document.getElementById("botaoEntrar");

botaoEntrar.addEventListener("click", function () {

    document.body.classList.add("entrou");

});


// BOTÃO PARA EXPLORAR O ESPECTRO

const botaoExplorar = document.getElementById("botaoExplorar");

botaoExplorar.addEventListener("click", function () {

    document.getElementById("informacoes").scrollIntoView({
        behavior: "smooth"
    });

});