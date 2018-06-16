//evento click boton de offset y despues se borra
const botonn = document.getElementById("offset");
botonn.addEventListener("click",()=>{
    let intervals = document.getElementById("intervals").value;
    document.getElementById("intervals").value=" ";
})

//evento click codificadora y despues se borra 
const boton = document.getElementById("coder");
boton.addEventListener("click", ()=> {
    let message = document.getElementById("message").value;
    document.getElementById("message").value = " ";
    document.getElementById("answer").innerHTML ="answer";

})
// evento click descodificadora y despues se borra 
const boton2 = document.getElementById("decoder");
boton2.addEventListener("click", ()=> {
    let message = document.getElementById("message").value;
    document.getElementById("message").value 
})
