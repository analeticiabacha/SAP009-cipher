const cipher = {
  
  encode: function (deslocamento, textoCodifica){ 
         
    console.log(textoCodifica.value); //deu certo, retornou as letras que entrou

    let resultado = "";
    //let sequencialetras = [];

    //parseFloat
    //console.log("chegou aqui 1");
    console.log(resultado);
    
    let varTeste = textoCodifica.value;
    let offset = deslocamento.value;
    
    varTeste = varTeste.toUpperCase(); //letra maiuscula

    console.log(varTeste);
    for (let i = 0; i < varTeste.length; i++ ){
      
      let posicao = varTeste.charCodeAt(i); //|| 69;  //charCodeAt retorna o valor do elemento naquele indice, e o String.fromCharCode retorna um valor do tipo string, cada elemento equivale a um codigo dado.
      console.log(posicao);
      //sequencialetras(i) = textoCodifica.charCodeAt(i);

      console.log(varTeste);
      console.log(posicao);
      //console.log("chegou aqui 2");

      if(posicao >= 65 && posicao <= 90){

        //console.log("chegou aqui 3");
        let resultadoCod = ((posicao - 65 + offset) % 26) + 65;
        resultado += String.fromCharCode(resultadoCod); 

  
        //((codigodaletraASC - COD1LETRA + deslocamento)% tamanhodoalfabeto)+ COD1LETRA

        console.log(resultado);
        

      } if ((posicao >= 32 && posicao <= 64)){ //||  (posicao >= 91 && posicao <= 96)  || (posicao >= 123 && posicao <= 126)) { //caracteres e espaço da tabela ASC
        resultado += textoCodifica.charAt(i); // ou resultado += textoCodifica.charAt(i);    
      }
    }
    //console.log(resultado);
    return resultado;
    
  },


  decode: function (deslocamento, textoCodifica){
    console.log("decode esta funcionando");   

    let resultado2 = "";
    //textoCodifica = textoCodifica.toLowerCase();

    for (let i=0; i <= textoCodifica.length; i++ ){
      let posicao = textoCodifica.charCodeAt(i);   //charCodeAt retorna o valor do elemento naquele indice, e o String.fromCharCode retorna um valor do tipo string, cada elemento equivale a um codigo dado.
      
      if(posicao >= 65 && posicao <= 90){
        resultado2 = String.fromCharCode(((posicao - 65 - deslocamento) %26) + 65);

        //formula da cifra de cesar: ((codigodaletraASC - COD1LETRA + deslocamento)% tamanhodoalfabeto)+ COD1LETRA
        //codigo ASC => codigo0a25 => desloco => giro = codigo ASC
      } else if ((posicao >= 32 && posicao <= 64)  ||  (posicao >= 91 && posicao <= 96)  || (posicao >= 123 && posicao <= 126)) { //caracteres e espaço da tabela ASC
        resultado2 =  resultado2 + textoCodifica.charAt(i); // ou resultado += textoCodifica.charAt(i);    
      }
    }

    return resultado2;

  },
 
};

export default cipher;



