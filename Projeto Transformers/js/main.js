const controle = document.querySelectorAll("[data-controle]")

const estatistica = document.querySelectorAll("[data-estatisticas]")
//console.log(estatistica)

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -13,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 78,
        "energia": 0,
        "velocidade": 5
    },
    "nucleos": {
        "forca": 76,
        "poder": -21,
        "energia": 32,
        "velocidade": 9
    },
    "pernas": {
        "forca": 65,
        "poder": 67,
        "energia": -11,
        "velocidade": -2
    },
    "foguetes": {
        "forca": 42,
        "poder": -4,
        "energia": 24,
        "velocidade": 1
    }

}

controle.forEach ((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })   
})



function manipulaDados(operadores, controle) {
    const peca = controle.querySelector("[data-contador]")  

    if(operadores === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {

    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + 
        pecas[peca] [elemento.dataset.estatisticas]
    })
}
