import cipher from './cipher.js';

console.log(cipher);

const botaoResultado = document.getElementById("BotaoResultado");
const opcaoCodificar = document.getElementById("OpcaoCodificar");
const opcaoDecodificar = document.getElementById("OpcaoDecodificar");
const textoCodifica = document.getElementById("CodificaArea");
const textoResultado = document.getElementById("ResultadoArea");
const deslocamento = document.getElementById("ChaveSecreta");

botaoResultado.addEventListener("click",acaoDoBotao);

function acaoDoBotao(){
    //console.log(textoCodifica.value);
    if (textoCodifica.value == "" || deslocamento == "" || opcaoCodificar == "" || opcaoDecodificar == ""){
        alert("Por favor, preencha todos os campos!");  
    
    }
    else if (opcaoCodificar.checked) {
        textoResultado.value = cipher.encode(deslocamento, textoCodifica); 
        console.log(textoResultado.value);      

    } else {
        //console.log("Opção DECODIFICAR selecionada");
        textoResultado.value = cipher.decode(deslocamento, textoCodifica); 
        console.log(textoResultado.value);
    } 
}
