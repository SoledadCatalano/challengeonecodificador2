/*
"e"  "enter"
"i"  "imes"
"a"  "ai"
"o"  "ober"
"u"  "ufat"
*/




function encriptar(){
    var texto = document.getElementById("texto_encriptar").value.toLowerCase();/*para pasar todo a minuscula*/
    
    var texto2 = texto.replace(/e/gm,"enter");
    var texto2 = texto2.replace(/o/gm,"ober");
    var texto2 = texto2.replace(/i/gm,"imes");
    var texto2 = texto2.replace(/a/gm,"ai");
    var texto2 = texto2.replace(/u/gm,"ufat");


    document.getElementById("img_muneco").style.display= "none";
    document.getElementById("h2_ningun").style.display= "none";
    document.getElementById("ingrese-texto").style.display="none";
    document.getElementById("resultado").innerHTML = texto2;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
    }

    function desencriptar(){
        var texto = document.getElementById("texto_encriptar").value.toLowerCase();/*para pasar todo a minuscula*/
        
        var texto2 = texto.replace(/enter/gm,"e");
        var texto2 = texto2.replace(/ober/gm,"o");
        var texto2 = texto2.replace(/imes/gm,"i");
        var texto2 = texto2.replace(/ai/gm,"a");
        var texto2 = texto2.replace(/ufat/gm,"u");
    
    
        document.getElementById("img_muneco").style.display= "none";
        document.getElementById("h2_ningun").style.display= "none";
        document.getElementById("ingrese-texto").style.display="none";
        document.getElementById("resultado").innerHTML = texto2;
        document.getElementById("copiar").style.display="show";
        document.getElementById("copiar").style.display="inherit";
        }
    
        
       function copiar(){
        var contenido = document.getElementById('resultado').innerHTML;
    
        navigator.clipboard.writeText(contenido);
            
     
    }



    
    
    

