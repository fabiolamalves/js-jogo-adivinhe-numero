alert("Seja bem vindo(a)!");

let nomeJogador = prompt("Digite seu nome:");

let querJogar = confirm("Deseja jogar?");

//console.log(typeof querJogar)
//console.log(querJogar)

if(querJogar) {

    alert("Boa sorte, " + nomeJogador + "!");

    const numeroSecreto = 7;

    let numeroDigitado = prompt("Digite um número");

    if(numeroDigitado == numeroSecreto) {
        alert("Parabéns, você acertou!");
    }

    if(numeroSecreto < numeroDigitado) {
        alert("É menor!");
    }

    if(numeroSecreto > numeroDigitado) {
        alert("É maior!");
    }

} else {

    alert("Que pena! Até a próxima...");

}

//let nomeJogador = prompt;
//console.log(nomeJogador); <--- debug para entender como o código está se comportando

//alert("Boa sorte, " + nomeJogador + "!");

//ou

//let msg = "Boa sorte" + nomeJogador
//alert(msg);

