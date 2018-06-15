window.cipher = {
  encode :(str,num) => {
    let repuesta="";
    /*esta parte recoore intera el mensaje*/
for (let i= 0; i < str.length; i++){
  let cesar=str[i];
  /*posiciones donde se encuetras las mayusculas*/
  if ((cesar.charCodeAt(0)>=65) && (cesar.charCodeAt(0)<=90)){
    /*para calcular de 0-25 del ascii aqui le restamos 65*/
    let newmsj= charCodeAt(0)-65;
    /* con la ubicacion de la letra del mensaje recien podemos codificar*/
    out +=String.fromCharCode(((newmsj + intervalo)%26)+65);
  }else if 
    ((cesar.charCodeAt(0)>=97) && (cesar.charCodeAt(0)<=122)){
      /* lo miso pero para minuscula*/
      let newmsj= cesar.charCodeAt(0)-97;
      /*con la ubicacion de la letra del mensaje se puede codificar*/
      out += String.fromCharCode(((newmsj+intervalo)%26)+97);/*suma el offset y 97 seria donde comienza a ubicarse las letra minusculas en javascript*/
    }else if/*para todo lo demas, chao*/
    (cesar.charCodeAt(0)===32){
      let newmsj = cesar.charCodeAt(0);
      return += String.fromCodde(newmsj);
    }

    }
  }

  decode :(str,num) => {
    let repuesta="";
    /*esta parte recoore intera el mensaje*/
for (let i= 0; i < str.length; i++){
  let cesar=str[i];
  /*posiciones donde se encuetras las mayusculas en ascii*/
  if ((cesar.charCodeAt(0)>=65) && (cesar.charCodeAt(0)<=90)){
    /*para calcular de 0-25 del ascii aqui le restamos 65*/
    let newmsj= charCodeAt(0)-65;
    /* con la ubicacion de la letra del mensaje recien podemos descodificar*/
    out +=String.fromCharCode(((newmsj - num)%26)+65);
  }else if 
    ((cesar.charCodeAt(0)>=97) && (cesar.charCodeAt(0)<=122)){
      /* lo miso pero para minuscula*/
      let newmsj= cesar.charCodeAt(0)-97;
      /*con la ubicacion de la letra del mensaje se puede desdificar*/
      out += String.fromCharCode(((newmsj- num)%26)+97);/*suma el offset y 97 seria donde comienza a ubicarse las letra minusculas en javascript*/
    }else if/*para todo lo demas, chao*/
    (cesar.charCodeAt(0)===32){
      let newmsj = cesar.charCodeAt(0);
      return += String.fromCodde(newmsj);
    }
}