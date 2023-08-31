const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const botonMascotaJugador = document.getElementById( 'boton-mascota' );
const sectionReiniciar = document.getElementById('reiniciar');
sectionReiniciar.style.display = 'none';
const botonFuego = document.getElementById( 'boton-fuego' );
const botonAgua = document.getElementById('boton-agua' );
const botonTierra = document.getElementById('boton-tierra' );
const botonReiniciar = document.getElementById('reiniciar');

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const inputHipodoge = document.getElementById( 'hipodoge' );
const inputCapipepo = document.getElementById( 'capipepo' );
const inputRatigueya = document.getElementById( 'ratigueya' );
const spanMascotaJugador = document.getElementById('mascota-jugador' );

const spanVidasJugador = document.getElementById('vidas-jugador' );
const spanVidasEnemigo = document.getElementById('vidas-enemigo' );

const sectionMensajes = document.getElementById('resultado' );
const ataquesDelJugador = document.getElementById('ataques-del-jugador' );
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo' );

const sectionMensaje = document.getElementById('resultado' );

const spanMascotaEnemigo = document.getElementById('mascota-enemigo' );

let mokepones = []
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

let hipodoge = new Mokepon('Hipodoge', 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png', 5 );

let capipepo = new Mokepon('Capipepo', 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_hipodoge_attack.png', 5 );

let ratigueya = new Mokepon('Ratigueya', 'https://static.platzi.com/media/tmp/class-files/github/curso-programacion-basica/curso-programacion-basica-35-assets-mokepones/programar/mokepon/assets/mokepons_mokepon_capipepo_attack.png', 5 )

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

console.log(Mokepon)


function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none';
    botonMascotaJugador.addEventListener( 'click', seleccionarMascotaJugador );
    botonFuego.addEventListener( 'click', ataqueFuego );
    botonAgua.addEventListener('click', ataqueAgua);
    botonTierra.addEventListener( 'click', ataqueTierra);
    botonReiniciar.addEventListener( 'click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let comezar = false;
    sectionSeleccionarMascota.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'flex';

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
    let nuevoAtaqueDelJugador=document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajFinal(resultadoFinal) {

    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultadoFinal
    sectionMensaje.appendChild( parrafo )
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;
    botonReiniciar.enabled = true;
    sectionReiniciar.style.display = 'block';
}

function seleccionarMascotaEnemigo () {
    let mascotaAleatoria = aleatorio( 1, 3 );

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