const cipher = {


  encode: function (deslocamento, textoCodifica){    

    if (textoCodifica.value === "" || deslocamento === "" || textoCodifica === null || textoCodifica === [] || deslocamento === null || deslocamento === []){
      throw new TypeError ("Algum campo está vazio, verifique.");
    }


    let resultado = "";
    const offset = Number(deslocamento);
    
    for (let i = 0; i < textoCodifica.length; i++ ){

      const posicao = textoCodifica.charCodeAt(i);
      
      if(posicao >= 65 && posicao <= 90){
        const resultadoCod = (posicao - 65 + offset) % 26 + 65;
        resultado += String.fromCharCode(resultadoCod); 
        //console.log( posicao , "+" , offset , "=" , resultadoCod , "=>" , String.fromCharCode(resultadoCod) );
      }
      else if ((posicao >= 32 && posicao <= 64) || (posicao >= 91 && posicao <= 126)) { //caracteres especiais e espaço da tabela ASC
        resultado += textoCodifica.charAt(i);  
      } 
    }
    return resultado;
  },


  decode: function (deslocamento, textoCodifica){

    if (textoCodifica === "" || deslocamento === ""){
      throw new TypeError ("Algum campo está vazio, verifique."); 
    }
    
    let resultado2 = "";
    const offset = Number(deslocamento);

    for (let i = 0; i < textoCodifica.length; i++ ){
      
      const posicao = textoCodifica.charCodeAt(i);
      if(posicao >= 65 && posicao <= 90){
        const resultadoCod = (posicao + 65 - offset) % 26 + 65;
        resultado2 = resultado2 + String.fromCharCode(resultadoCod); 
        //console.log( posicao , "+" , offset , "=" , resultadoCod , "=>" , String.fromCharCode(resultadoCod) );
      }
      else if ((posicao >= 32 && posicao <= 64) || (posicao >= 91 && posicao <= 126)) { //caracteres e espaço da tabela ASC
        resultado2 += textoCodifica.charAt(i);  
      } 
    }
    return resultado2;
  }
}

export default cipher;
