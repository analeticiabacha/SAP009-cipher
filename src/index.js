import cipher from './cipher.js';

console.log(cipher);


const botaoResultado = document.getElementById("BotaoResultado");
const opcaoCodificar = document.getElementById("OpcaoCodificar");
const opcaoDecodificar = document.getElementById("OpcaoDecodificar");
const textoCodifica = document.getElementById("CodificaArea");

botaoResultado.addEventListener("click" , acaoDoBotao);

function acaoDoBotao(){
    //console.log("função funcionando");
    if (opcaoCodificar.checked) {
        console.log("Opção CODIFICAR selecionada");

    } else {
        console.log("Opção DECODIFICAR selecionada");
    }
}