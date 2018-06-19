window.cipher ={
  //cifrar mensaje usando function arrow
encode: (str, numOs) => {
  //variable vacia para interar en un for
  let empty= '';
  for (let i=0; i<str.length; i++) {
    //obtener posicion de las letras 
    let position = str.charCodeAt(i);
    //espacio
    if (position===32){
      empty += ' '; 
    }
    //mayuscula//
    if((position >= 65) && (position <= 90)){
      let encrypt = (((position-65 +parseInt(numOs)) %26) +65);
      empty += String.fromCharCode(encrypt);}
    
    if ((position >= 97) && (position <= 122)){
    let encrypt = (((position-97+parseInt(numOs)) % 26) +97);
    empty += String.fromCharCode(encrypt);}
}

return empty;
},
decode:(strT, nuMoS) => {
  let word='';
  for (let j=0; j<strT.length; j++){
    let place = strT.charCodeAt(j);
    if (place===32){
      word += ' ';
    }
    if ((place>= 65)&&(place <=90)){
    let decrypt = (((place -90- parseInt(nuMoS)) % 26) +90);
    word += String.fromCharCode(decrypt);}

    if ((place >= 97)&& (place<=122)){
      let desencrypt = (((place-122-parseInt(nuMoS)) %26)+122);
      word +=String.fromCharCode(desencrypt);}
    }  
    return word;  
  },
}