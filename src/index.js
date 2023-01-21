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
    
    //const texto = textoCodifica.value;
    //console.log(texto);
    console.log(textoCodifica.value);

    if ( textoCodifica == "" || deslocamento == "" || opcaoCodificar == "" || opcaoDecodificar == ""){
        alert("Por favor, preencha todos os campos!");  
    
    }
    else if (opcaoCodificar.checked) {
        //textoResultado.value = codificar(Number(deslocamento.value),textoCodifica);
        //console.log(textoResultado);
        //console.log(textoResultado);
        //textoResultado.value = cipher.encode(deslocamento.value, textoCodifica.value)
        //textoResultado.textContent = codificar(deslocamento, textoCodifica); nao rodou, erro
        //document.querySelector(resultado).innerHTML = textoResultado;
        //document.querySelector('.classeResultado').className;
        //console.log(textoCodifica.value);
        textoResultado.value = cipher.encode(deslocamento, textoCodifica); 
        console.log(textoResultado.value);      

    } else {
        console.log("Opção DECODIFICAR selecionada");
        textoResultado.innerHTML = cipher.decode(deslocamento, textoCodifica);
        //document.querySelector(resultado).innerHTML = textoResultado;
    }
    
}
