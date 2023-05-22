//  ENCRIPTADOR DE TEXTO ALURA
// DICCIONARIO CON PALABRAS PARA REEMPLAZAR Y ENCRIPTAR
const encriptdictionary = {encript:{e:"enter",i:"imes",a:"ai",o:"ober",u:"ufat",},decript:{enter:"e",imes:"i",ai:"a",ober:"o",ufat:"u",},accents:{ á: "a",é: "e",í: "i",ó: "o",ú: "u",ä: "a",ë: "e",ï: "i",ö: "o",ü: "u"}}


// -- esconer alerta --
window.onload = function() {
    cerrarAlerta();
  };
  

function cerrarAlerta() {
    var alerta = document.getElementById("miAlerta");
    alerta.style.display = "none";
  }
  

// -- Funcion para limpiar texto de textarea --
function Limpiar(){
    document.getElementsByClassName("textArea")[0].value = " ";
    
}

function copyText(){      //codigo que permite copiar el texto con el boton copiar
    let copyText = document.getElementById("textchange").textContent;
    navigator.clipboard.writeText(copyText)
    var alerta = document.getElementById("miAlerta");
    alerta.style.display = "block";

    
}

function setText() {     //prepara el texto para ser encriptado: remueve los caracteres especiales y acentos
    let text = document.getElementsByClassName("textArea")[0].value.toLowerCase();
    if(text === ""){
        document.getElementById("hchange").textContent = "Ningun mensaje fue encontrado";
        document.getElementById("textchange").textContent = text;
        
    }else{
        document.getElementById("hchange").textContent = "";
        let accentKeys = Object.keys(encriptdictionary["accents"]);
    
        for(let ak = 0; ak < accentKeys.length; ak++){
            let letter = accentKeys[ak];
            if(text.includes(letter)){
                let textchange = encriptdictionary["accents"][letter];
                text = text.split(letter).join(textchange)
            }
        }
        text = text.replace(/[^a-zA-Z0-9ñ\s]/gi,"");
        return text;
    }

}

function encDecAlgorithm(action){   // funcion que encripta el texto despues de haber sido preparado
    text = setText(); 
   let encriptedKeys = Object.keys(encriptdictionary[action]);

   for(let x = 0 ; x < encriptedKeys.length; x++){
    let letter = encriptedKeys[x];
    if(text.includes(letter)){
        let textchange = encriptdictionary[action][letter];
        text = text.split(letter).join(textchange);
    }

   }

    document.getElementById("textchange").textContent = text;
}

//funciones que son llamadas al presionar encriptar/desencriptar
function Encriptacion(action){
    encDecAlgorithm(action);
}
function Desencriptacion(action){
    encDecAlgorithm(action);
}