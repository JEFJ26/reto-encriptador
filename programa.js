
function asignarTexto(texto){

    //asigno de una vez el elemendo donde va a estar el resultado de lo encriptado o desencriptado
   let elementoHtml = document.getElementById('respuestaUsuario');

   elementoHtml.innerHTML = texto;

   return;
}


function vaciarCaja(){
   let caja = document.getElementById('textoUsuario');
   caja.value = '';
   return;
}

function ocultar(){
    document.querySelector('.muneco').classList.add('oculto');
    document.querySelector('.esperandoTexto').classList.add('oculto');
    document.querySelector('#copiar').classList.remove('oculto');
    document.querySelector('#respuestaUsuario').classList.remove('oculto');
    return;
}

function encritar(texto){

    // asigno el parametro de una vez para poderlo utilizar dentro de otra funcion
    texto = document.getElementById('textoUsuario').value;

    //defino el remplazo de las vocales
    //esto es un objeto
    const remplazo = {
        'a':'ai',
        'e':'enter',
        'i':'imes',
        'o':'ober',
        'u':'ufat'
    };

    //creo una variable que a su ves es una funcion
    //
    let resultado = texto.split('').map(caracter => {
        

        return remplazo[caracter.toLowerCase()] || caracter;


    }).join('');

    vaciarCaja();
    
    return resultado;

}


function desencriptar(texto){

    texto = document.getElementById('textoUsuario').value;

// Diccionario de reemplazos
const reemplazos = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
}

// Reemplazar cada clave por su valor correspondiente
    for (let clave in reemplazos) {
    texto = texto.split(clave).join(reemplazos[clave]);
}

    vaciarCaja();
    return texto

}

function copiarTexto(){
     // Selecciona el texto del elemento <p>
     let texto = document.getElementById("respuestaUsuario").value;

     // Usa la API del portapapeles para copiar el texto
     navigator.clipboard.writeText(texto);
}

// funcion para unir al boton no es nesesaria, pero me parece mas comodo que escribir todo en el html
// y puedo incluir varias funciones
function botonEncriptar(){
    asignarTexto(encritar());
    ocultar();
    return;
}

function botonDesencriptar(){
    asignarTexto(desencriptar());
    ocultar();
    return;
}