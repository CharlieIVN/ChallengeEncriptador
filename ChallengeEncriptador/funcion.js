const textseccion1 = document.querySelector(".text_seccion1")
const textseccio2 = document.querySelector(".text_seccio2")


//verifica si las letras e,a,i,o,u estan dentro de la frase
function encriptar (encriptacion){
 let codigos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  encriptacion = encriptacion.toLowerCase ();

  for(let i = 0; i < codigos.length; i++ ){
   //if para buscar si en la frase existen las letras a remplazar y las devuelva con el valor del indice 1
   //remplaza pocision [0] por [1] y retorna el nuevo valor
    if (encriptacion.includes(codigos[i][0])){
     encriptacion = encriptacion.replaceAll(codigos[i][0],codigos[i][1])
    }
}
       return encriptacion;   
}
//funcion encriptar
 textomsj = document.querySelector("h3");
 visibilityCopy = document.querySelector(".copybutton");
function btnencrip(){
    const textoencriptar = encriptar(textseccion1.value);
    textseccio2.value = textoencriptar;
    if (textseccion1.value === ""){
        alert("No a ingresado ningun texto");
    }
    else{
    textseccion1.value ="";
    textseccio2.style.backgroundImage ="none";
    textomsj.style.display = "none";
    visibilityCopy.style.display = "block"
    
    


}  
}
//funcion desencriptar 
function desencriptar (desencriptacion){
    let codigosDesencriptar = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
     desencriptacion = desencriptacion.toLowerCase ();
   
   for(let i = 0; i < codigosDesencriptar.length; i++ ){
       if (desencriptacion.includes(codigosDesencriptar[i][0])){
        desencriptacion = desencriptacion.replaceAll(codigosDesencriptar[i][0],codigosDesencriptar[i][1])
       }
   }
   return desencriptacion;   
   }
   function btndesencrip(){
    const textodesencriptar = desencriptar(textseccion1.value)
    textseccio2.value = textodesencriptar

    if (textseccion1.value === ""){
        alert("No a ingresado ningun texto")
    }
    else{
        textseccion1.value = "";
        textseccio2.style.backgroundImage ="none";
        textomsj.style.display = "none";
        visibilityCopy.style.display = "block"
    
}  
}


//funcion copiar
const copiar = document.querySelector("#text1")
  function btncopiar (){
    navigator.clipboard.writeText(copiar.value)
    copiar.value = "";
    textseccio2.style.backgroundImage ="";
    textomsj.style.display = "";
    visibilityCopy.style.display = "none"

}

