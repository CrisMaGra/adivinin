let vidas = 6;
let palabras = Array("CAMION", "COCINA", "LAVARROPAS", "PERROS", "GATOS", "MESA", "TELEVISOR", "HELADERA");
let palabras2 = Array("AVION", "SUPERMERCADO", "CAFETERA", "PUERTA");
let palabras3 = Array("ESTUFA", "SILLA", "BARCO", "LLUVIA");
let palabras4 = Array("CAMA", "LAMPARA", "TAZA", "CUADRO", "BICICLETA");
let palabras5 = Array("RECREO", "MOCHILA", "CARTUCHERA", "CARPETA", "REGLA");
let palabraOc = "";
let palabraAdi = "";
let bandera = 1;

(function atento() {
    document.getElementById("botonComprobar").addEventListener("click", comprobar);
    document.getElementById("letra").addEventListener("keydown", pressEnter);
})();

function pressEnter(event) {
    if (event.keyCode == 13) {
        document.getElementById("botonComprobar").focus();
    }

}

function pistas(pista) {
    switch (pista) {
        case "REGLA":
            document.getElementById("pista").innerHTML = "Mide lo que quieras, aunque pocos centímetros, para trazar líneas en tus hojas también sirve.";
            break;
        case "CARPETA":
            document.getElementById("pista").innerHTML = "Todas las materias están con carátula, sus ganchos sujetan tus hojas.";
            break;
        case "CARTUCHERA":
            document.getElementById("pista").innerHTML = "Guarda tus pinturitas, goma y lápiz dentro de ella o podrías perderlos.";
            break;
        case "MOCHILA":
            document.getElementById("pista").innerHTML = "En ella podes guardar tus útiles escolares, podés llevarla colgada o alguna tiene rueditas.";
            break;
        case "RECREO":
            document.getElementById("pista").innerHTML = "Suena suena el timbre en la escuela y todos salimos al patio, un descanso viene bien.";
            break;
        case "BICICLETA":
            document.getElementById("pista").innerHTML = "Tiene dos ruedas, ayuda a ejercitar, y una se llama Anacleta.";
            break;
        case "CUADRO":
            document.getElementById("pista").innerHTML = "Hay muchos que tienen fotos y otros dibujos, decoran tu pared.";
            break;
        case "TAZA":
            document.getElementById("pista").innerHTML = "Llego la hora de la merienda y una necesitas, podes llenarla de algo frío o caliente.";
            break;
        case "LAMPARA":
            document.getElementById("pista").innerHTML = "Se prende se apaga, ilumina de noche.";
            break;
        case "CAMA":
            document.getElementById("pista").innerHTML = "Una siesta en ella viene bien.";
            break;
        case "LLUVIA":
            document.getElementById("pista").innerHTML = "Cae del cielo, si usas paraguas no te mojas.";
            break;
        case "BARCO":
            document.getElementById("pista").innerHTML = "Hay muchos en el mar, lo usan los piratas para viajar.";
            break;
        case "ESTUFA":
            document.getElementById("pista").innerHTML = "En invierno ayuda a calentar la casa, pero solo los adultos podrán prenderla.";
            break;
        case "SILLA":
            document.getElementById("pista").innerHTML = "Sobre ella te sientas, algunas son cómodas y otras no.";
            break;
        case "CAFETERA":
            document.getElementById("pista").innerHTML = "Hace una infución negra que se toma por la mañana.";
            break;
        case "SUPERMERCADO":
            document.getElementById("pista").innerHTML = "Un lugar donde podes comprar comida.";
            break;
        case "AVION":
            document.getElementById("pista").innerHTML = "Grandes y chicos, se los ve en el cielo y tienen motores.";
            break;
        case "PUERTA":
            document.getElementById("pista").innerHTML = "Algunas se abren otras se cierran, y a veces tocan a su llamado.";
            break;
        case "CAMION":
            document.getElementById("pista").innerHTML = "Algunos tienen muchas ruedas, son grandes y viajan por muchas rutas.";
            break;
        case "COCINA":
            document.getElementById("pista").innerHTML = "Sobre ella se colocan ollas, sartenes. Lo que si hay que tener cuidado con el fuego, muy fuerte quema tu comida.";
            break;
        case "LAVARROPAS":
            document.getElementById("pista").innerHTML = "O lo cargas por arriba o por el frente, siempre con ropa. Y limpia saldrá.";
            break;
        case "PERROS":
            document.getElementById("pista").innerHTML = "Son muy buenos compañeros, fieles y con 4 patas. Algunos son traviesos y ladran mucho.";
            break;
        case "GATOS":
            document.getElementById("pista").innerHTML = "Trepan árboles, saltan alto y a veces arañan. Y existe uno con botas.";
            break;
        case "MESA":
            document.getElementById("pista").innerHTML = "Tiene 4 patas pero este no es animal. De madera o de vidrio puede ser.";
            break;
        case "TELEVISOR":
            document.getElementById("pista").innerHTML = "Hace mucho tiempo se le llamo la caja mágica, allí con ella tus dibus podes ver.";
            break;

        default://heladera
            document.getElementById("pista").innerHTML = "Alguna es alta, otra es baja, pero dentro podras enfriar bebidas y hacer hielo.";
            break;
    }
}

function comprobar() {
    document.getElementById("letra").focus();
    let letra = document.getElementById("letra").value.toUpperCase().trim();
    if (letra != "") {
        if (letra == palabraOc) {
            document.getElementById("frase").innerHTML = palabraOc;
            felicidades();
            siguienteBoton();
        } else {
            let nuevo = "";
            for (let i = 0; i < palabraOc.length; i++) {
                if (letra == palabraOc[i]) {
                    nuevo = nuevo + letra + " ";
                } else {
                    nuevo = nuevo + palabraAdi[i * 2] + " ";
                }
            }
            if (nuevo == palabraAdi) { //Resta vida y dibuja.
                vidas--;
                elimLife();
                document.getElementById("vida").innerHTML = "Vidas: " + vidas;
                dibujar();
                document.getElementById("letra").focus();
            }
    
            palabraAdi = nuevo;
            document.getElementById("frase").innerHTML = palabraAdi;
            if (vidas == 0) {
                document.getElementById("comprobador").innerHTML = "<h1>¡¡¡LO SIENTO, PERDISTE!!!</h1>";
                perdiste();
                document.getElementById("nuevo").focus();
            }
            if (palabraAdi.search("_") == -1) {
                felicidades();
                siguienteBoton();
            }
        }
    }
    document.getElementById("letra").value = "";
    document.getElementById("siguiente").focus();
}

function life() {
    for (let index = 0; index < vidas; index++) {
        corazon = document.createElement("img");
        corazon.setAttribute("id", "corazoncito" + [index]);
        corazon.src = "images/corazon.png";
        document.getElementById("lifes").appendChild(corazon);
    }
}

function elimLife() {
    document.getElementById("corazoncito" + [vidas]).remove();
}

function siguienteBoton() {
    let botonSiguiente = document.createElement("button");
    let textoBoton = document.createTextNode("SIGUIENTE");
    botonSiguiente.appendChild(textoBoton);
    botonSiguiente.setAttribute("id", "siguiente");
    botonSiguiente.setAttribute("onclick", "limpiar()");
    document.getElementById("divBotones").appendChild(botonSiguiente);
    bandera++;
    eliminoCanvas();
}

function limpiar() {
    eliminoCanvasImg()
    document.getElementById("siguiente").remove();
    document.getElementById("frase").innerHTML = "";
    document.getElementById("mensaje").innerHTML = "";
    palabraOc = "";
    palabraAdi = "";
    letra.value = "";
    if (bandera == 2) {
        lvl2(vidas = 6);
    } else if (bandera == 3) {
        lvl3(vidas = 6);
    } else if (bandera == 4) {
        lvl4(vidas = 6);
    } else if (bandera == 5) {
        lvl5(vidas = 6);
    }
    creoCanvas();
}

function felicidades() {
    let imageFelicidades = new Image();
    imageFelicidades.setAttribute("id", "imgFelicidades");
    imageFelicidades.src = "images/felicidades.png";
    document.getElementById("dibujo").appendChild(imageFelicidades);
}

function perdiste() {
    document.getElementById("boxComprobador").remove();
    document.getElementById("frase").remove();
    let botonNuevo = document.createElement("button");
    let textoNuevo = document.createTextNode("NUEVO JUEGO");
    botonNuevo.setAttribute("id", "nuevo");
    botonNuevo.appendChild(textoNuevo);
    document.getElementById("divBotones").appendChild(botonNuevo);
    botonNuevo.setAttribute("onclick", "location.href='Index.html'");
}

function iniciar() {
    document.getElementById("letra").focus();
    document.getElementById("vida").innerHTML = "Vidas: " + vidas;
    life();
    let indiceAleatorio = Math.floor(Math.random() * palabras.length)
    palabraOc = palabras[indiceAleatorio];
    for (let i = 0; i < palabraOc.length; i++) {
        palabraAdi = palabraAdi + "_ ";
    }
    document.getElementById("frase").innerHTML = palabraAdi;
    pistas(palabraOc);
}

function lvl2() {
    document.getElementById("letra").focus();
    document.getElementById("titulo").innerHTML = "ADIVININ NIVEL 2";
    document.getElementById("vida").innerHTML = "Vidas: " + vidas;
    let indiceAleatorio = Math.floor(Math.random() * palabras2.length)
    palabraOc = palabras2[indiceAleatorio];
    for (let i = 0; i < palabraOc.length; i++) {
        palabraAdi = palabraAdi + "_ ";
    }
    document.getElementById("frase").innerHTML = palabraAdi;
    pistas(palabraOc);
}

function lvl3() {
    document.getElementById("letra").focus();
    document.getElementById("titulo").innerHTML = "ADIVININ NIVEL 3";
    document.getElementById("vida").innerHTML = "Vidas: " + vidas;
    let indiceAleatorio = Math.floor(Math.random() * palabras3.length)
    palabraOc = palabras3[indiceAleatorio];
    for (let i = 0; i < palabraOc.length; i++) {
        palabraAdi = palabraAdi + "_ ";
    }
    document.getElementById("frase").innerHTML = palabraAdi;
    pistas(palabraOc);
}

function lvl4() {
    document.getElementById("letra").focus();
    document.getElementById("titulo").innerHTML = "ADIVININ NIVEL 4";
    document.getElementById("vida").innerHTML = "Vidas: " + vidas;
    let indiceAleatorio = Math.floor(Math.random() * palabras4.length)
    palabraOc = palabras4[indiceAleatorio];
    for (let i = 0; i < palabraOc.length; i++) {
        palabraAdi = palabraAdi + "_ ";
    }
    document.getElementById("frase").innerHTML = palabraAdi;
    pistas(palabraOc);
}

function lvl5() {
    document.getElementById("letra").focus();
    document.getElementById("titulo").innerHTML = "ADIVININ NIVEL 5";
    document.getElementById("vida").innerHTML = "Vidas: " + vidas;
    let indiceAleatorio = Math.floor(Math.random() * palabras5.length)
    palabraOc = palabras5[indiceAleatorio];
    for (let i = 0; i < palabraOc.length; i++) {
        palabraAdi = palabraAdi + "_ ";
    }
    document.getElementById("frase").innerHTML = palabraAdi;
    pistas(palabraOc);
}

function creoCanvas() {
    let _canvas = document.createElement("canvas");
    _canvas.setAttribute("id", "elCanvas");
    document.getElementById("dibujo").appendChild(_canvas);

}

function eliminoCanvasImg() {
    document.getElementById("imgFelicidades").remove();
}

function eliminoCanvas() {
    document.getElementById("elCanvas").remove();
}

function dibujar() {
    var canvas = document.getElementById("elCanvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        //Base
        if (vidas == 5) {
            ctx.beginPath();
            ctx.moveTo(30, 200);
            ctx.lineTo(30, 10);
            ctx.lineTo(150, 10);
            ctx.lineTo(150, 20);
            ctx.stroke();
        }
        if (vidas == 5) {
            //Cabeza
            ctx.beginPath();
            ctx.arc(150, 40, 20, 0, Math.PI * 2);
            ctx.stroke();
        }
        if (vidas == 4) {
            //Cuerpo
            ctx.beginPath();
            ctx.moveTo(150, 60);
            ctx.lineTo(150, 100);
            ctx.stroke();
        }
        if (vidas == 3) {
            //Brazo izquierdo
            ctx.beginPath();
            ctx.moveTo(150, 62);
            ctx.lineTo(120, 90);
            ctx.stroke();
        }
        if (vidas == 2) {
            //Brazo derecho
            ctx.beginPath();
            ctx.moveTo(150, 62);
            ctx.lineTo(180, 90);
            ctx.stroke();
        }
        if (vidas == 1) {
            //Pierna izquierda
            ctx.beginPath();
            ctx.moveTo(150, 100);
            ctx.lineTo(130, 130);
            ctx.stroke();
        }
        if (vidas == 0) {
            //Pierna derecha
            ctx.beginPath();
            ctx.moveTo(150, 100);
            ctx.lineTo(170, 130);
            ctx.stroke();
        }
    }
}