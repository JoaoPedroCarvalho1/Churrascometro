let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

// capturar inputs

function calcular(){

    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let bebidas = bebidasPP(duracao);

    let qdTotalCarne = carne * adultos + (carne /2 * criancas);
    let qdTotalcerveja = cerveja * adultos;
    let qdTotalbebidas = bebidas * adultos + (bebidas /2 * criancas);


    resultado.innerHTML  =  `<p>${qdTotalCarne/1000}kg de Carne </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdTotalcerveja/350)} Latas de Cerveja (latas de 350ml) </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdTotalbebidas/2000)} Pet's 2L de Bebidas(Aguá,Suco,Refrigerantes e etc.)<p/v>`
    // calculo do projeto e respondendo no HTML
    // (usar assento ao invés de aspas)
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }
    else{
        return 400;
    }
    // captura duração e transforma em quantidade de carne
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
    // captura duração e transforma em quantidade de cerveja
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }
    else{
        return 1000;
    }
    // captura duração e transforma em quantidade de bebida (aguá,refri...)
}