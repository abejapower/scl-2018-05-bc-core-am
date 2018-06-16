window.cipher = {
  encoder: ((str,num) => {
    let answer='';
    // for para interinar cada palabra
    for (let i = 0; i< str.length; i++);

    // obtener la ubicacion de las letras
    let posStr = str.charCodeAt(i);

    // para las palabras en mayuscula
    if ((posStr >= 65) && (posStr <= 90)){
    
    // codificar
    let codeWrd = (((posStr -65 + intervals)%26)+65);
    answer += String.fromCharCode(codeWrd);
    // para las palabras en minuscula
  }if ((posStr >=97) && (posStr <= 122)){ 
    let codeWrd = ((posStr- 65 + intervals)%26 +65);
    answer += String.fromCharCode(codeWrd);
    // para cuando hay espacios 
  }if (posStr ===32){
    answer += '';
  }
  return answer
}),

  decoder : (str,num) => {
    let answerD='';
    for (let i = 0; i< str.length; i++);
    let posStr = str.charCodeAt(i);
  
  if((posStr >= 65)&& (posStr<= 90)){
    let decodeWrd = (((posStr - 90)-intervals)%26 + 90);
    answerD += Sting.fromCharCode(decodeWrd);

  }if((posStr>97)&&(posStr<=122)){
    let decodeWrd = (((posStr-122)-intervals)&26 +122);
     answer +=String.fromCharCode(decodeWrd);

  }if (posStr ===32){
    answerD +='';
  }
return answerD
  },
}