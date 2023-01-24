import cipher from './cipher.js';

//console.log(cipher);

const botaoResultado = document.getElementById("BotaoResultado");
const opcaoCodificar = document.getElementById("OpcaoCodificar");
const opcaoDecodificar = document.getElementById("OpcaoDecodificar");
const textoCodifica = document.getElementById("CodificaArea");
const textoResultado = document.getElementById("ResultadoArea");
const deslocamento = document.getElementById("ChaveSecreta");



textoCodifica.addEventListener("keyup", letrasMaiusculas);
botaoResultado.addEventListener("click", acaoDoBotao);

function letrasMaiusculas(valorTextarea) {

  const letter = valorTextarea.target;
  letter.value = letter.value.toUpperCase();

}


function acaoDoBotao(){

  const msg = textoCodifica.value;
  const chave = deslocamento.value;

  if (msg === "" || chave === "" || opcaoCodificar === "" || opcaoDecodificar === ""){
    alert("Algum campo está em branco! Por favor, preencha-os!");
  }

  if (opcaoCodificar.checked) {
    textoResultado.value = cipher.encode(chave, msg); 
    //console.log(textoResultado.value);      

  }else {
    textoResultado.value = cipher.decode(chave, msg); 
    //console.log(textoResultado.value);
  } 
}



