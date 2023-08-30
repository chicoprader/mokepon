let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'none';
    let botonMascotaJugador = document.getElementById( 'boton-mascota' );
    botonMascotaJugador.addEventListener( 'click', seleccionarMascotaJugador );
    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'none';

    let botonFuego = document.getElementById( 'boton-fuego' );
    botonFuego.addEventListener( 'click', ataqueFuego );
    let botonAgua = document.getElementById('boton-agua' );
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra' );
    botonTierra.addEventListener( 'click', ataqueTierra);
    let botonReiniciar = document.getElementById('reiniciar')
    botonReiniciar.addEventListener( 'click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let comezar = false;
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display = 'none';

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'flex';

    let inputHipodoge = document.getElementById( 'hipodoge' );
    let inputCapipepo = document.getElementById( 'capipepo' );
    let inputRatigueya = document.getElementById( 'ratigueya' );
    let spanMascotaJugador = document.getElementById('mascota-jugador' );

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge';
        comezar = true;
    }   else if ( inputCapipepo.checked ) {
        spanMascotaJugador.innerHTML = 'Capipepo';
        comezar = true;
    }   else if ( inputRatigueya.checked ) {
        spanMascotaJugador.innerHTML = 'Ratigueya';
        comezar = true;
    }   else {
        alert( "selecciona una mascosta" );

    }

    seleccionarMascotaEnemigo();
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO';
    ataqueAleatorioEnemigo();
}
function ataqueAgua() {
    ataqueJugador = 'AGUA';
    ataqueAleatorioEnemigo();
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA';
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio( 1, 3 );

    if ( ataqueAleatorio == 1 ) {
        ataqueEnemigo = 'FUEGO';
    } else if ( ataqueEnemigo == 2 ) {
        ataqueEnemigo = 'AGUA';
    } else {
        ataqueEnemigo = 'TIERRA';
    }
    combate();
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador' );
    let spanVidasEnemigo = document.getElementById('vidas-enemigo' );

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE" );
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' ) {
        crearMensaje("GANASTE" );
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' ) {
        crearMensaje("GANASTE" );
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA' ) {
        crearMensaje("GANASTE" );
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        crearMensaje("PERDISTE" );
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }

    revisarVidas()
}

function revisarVidas() {
    if ( vidasEnemigo == 0 ) {
    crearMensajFinal("Ganaste")
    }else if ( vidasJugador == 0 ) {
    crearMensajFinal("Perdiste")
    }
}

function crearMensaje( resultado ) {
    let sectionMensajes = document.getElementById('resultado' );
    let ataquesDelJugador = document.getElementById('ataques-del-jugador' );
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo' );

    let nuevoAtaqueDelJugador=document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajFinal(resultadoFinal) {
    let sectionMensaje = document.getElementById('resultado' );
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultadoFinal
    sectionMensaje.appendChild( parrafo )

    let botonFuego = document.getElementById( 'boton-fuego' );
    botonFuego.disabled = true;
    let botonAgua = document.getElementById('boton-agua' );
    botonAgua.disabled = true;
    let botonTierra = document.getElementById('boton-tierra' );
    botonTierra.disabled = true;
    let botonReiniciar = document.getElementById('reiniciar')
    botonReiniciar.enabled = true;
    let sectionReiniciar = document.getElementById('reiniciar');
    sectionReiniciar.style.display = 'block';
}


function seleccionarMascotaEnemigo () {
    let mascotaAleatoria = aleatorio( 1, 3 );
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo' );

    if ( mascotaAleatoria == 1 ) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if ( mascotaAleatoria == 2 ) {
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio ( min, max ) {
    return Math.floor(Math.random() * ( max - min + 1 ) + min );
}



window.addEventListener( 'load', iniciarJuego );