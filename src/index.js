//evento click codificadora y despues se borra 
const empty = document.getElementById('coder').addEventListener('click',() =>{
    let num = document.getElementById('intervals').value;
    let str = document.getElementById('textCesar').value;
    let wordCesar= window.cipher.encode(str,num);
    document.getElementById('answer').innerHTML = wordCesar;

})

const word = document.getElementById('decoder').addEventListener('click',() =>{
    let nuMoS = document.getElementById('intervals').value;
    let strT =document.getElementById('textCesar').value;
    let wordCesar= window.cipher.decode(strT,nuMoS);
    document.getElementById('answer').innerHTML = wordCesar;
})