const cipher = {
  
  encode: function (deslocamento, textoCodifica){    
    console.log(textoCodifica.value);
    let resultado = "";
    
    let varTeste = textoCodifica.value;
    let offset = Number(deslocamento.value);
    
    varTeste = varTeste.toUpperCase();

    for (let i = 0; i < varTeste.length; i++ ){
      
      let posicao = varTeste.charCodeAt(i);

      if(posicao >= 65 && posicao <= 90){
        
        let resultadoCod = (posicao - 65 + offset) % 26 + 65;
        
        resultado = resultado + String.fromCharCode(resultadoCod); 
        console.log( posicao , "+" , offset , "=" , resultadoCod , "=>" , String.fromCharCode(resultadoCod) );

      }
      else if ((posicao >= 32 && posicao <= 64) || (posicao >= 91 && posicao <= 126)) { //caracteres e espaço da tabela ASC
        resultado += varTeste.charAt(i);  
      }
      
    }
    return resultado;
  },

  decode: function (deslocamento, textoCodifica){
    console.log(textoCodifica.value);
    let resultado2 = "";
    
    let varTeste = textoCodifica.value;
    let offset = Number(deslocamento.value);
    
    varTeste = varTeste.toUpperCase();

    for (let i = 0; i < varTeste.length; i++ ){
      
      let posicao = varTeste.charCodeAt(i);

      if(posicao >= 65 && posicao <= 90){
        
        let resultadoCod = (posicao + 65 - offset) % 26 + 65;
        
        resultado2 = resultado2 + String.fromCharCode(resultadoCod); 
        console.log( posicao , "+" , offset , "=" , resultadoCod , "=>" , String.fromCharCode(resultadoCod) );

      }
      else if ((posicao >= 32 && posicao <= 64) || (posicao >= 91 && posicao <= 126)) { //caracteres e espaço da tabela ASC
        resultado2 += varTeste.charAt(i);  
      } 
    }
    return resultado2;
  }
}
export default cipher;



