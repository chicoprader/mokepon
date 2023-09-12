const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const botonMascotaJugador = document.getElementById( 'boton-mascota' );
const sectionReiniciar = document.getElementById('reiniciar');
sectionReiniciar.style.display = 'none';

const botonReiniciar = document.getElementById('boton-reiniciar');

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');

const spanMascotaJugador = document.getElementById('mascota-jugador' );
const spanMascotaEnemigo = document.getElementById('mascota-enemigo' );
const spanVidasJugador = document.getElementById('vidas-jugador' );
const spanVidasEnemigo = document.getElementById('vidas-enemigo' );

const sectionMensajes = document.getElementById('resultado' );
const ataquesDelJugador = document.getElementById('ataques-del-jugador' );
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo' );

const sectionMensaje = document.getElementById('resultado' );

const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')


let mokepones = [];
let ataqueEnemigo =[];
let ataquesJugador = [];
let botones = [];
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let mascotaJugador
let ataqueJugador;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let botonFuego;
let botonAgua;
let botonTierra;
let victoriasJugador = 0;
let victoriasEnemigo = 0;

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre;
        this.foto = foto;
        this.vida = vida;
        this.ataques = [];
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5 );

let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5 );

let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5 );

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

mokepones.push(hipodoge, capipepo, ratigueya);


function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none';

    mokepones.forEach( ( mokepon ) => {
        opcionDeMokepones = `   
        <input type="radio" name="mascota" id='${mokepon.nombre}'/>
        <label class="tarjeta-de-mokepon" for='${mokepon.nombre}'>
        <p>${mokepon.nombre}</p>
        <img src='${mokepon.foto}' alt='${mokepon.nombre}'>
        </label>
        `;

        contenedorTarjetas.innerHTML += opcionDeMokepones;

            inputHipodoge = document.getElementById('Hipodoge' );
            inputCapipepo = document.getElementById( 'Capipepo' );
            inputRatigueya = document.getElementById('Ratigueya' );

    })

    botonMascotaJugador.addEventListener( 'click', seleccionarMascotaJugador );

    botonReiniciar.addEventListener( 'click', reiniciarJuego);

}

function seleccionarMascotaJugador() {



    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id;
        mascotaJugador = inputHipodoge.id;

    }   else if ( inputCapipepo.checked ) {
        spanMascotaJugador.innerHTML = inputCapipepo.id;
        mascotaJugador = inputCapipepo.id;

    }   else if ( inputRatigueya.checked ) {
        spanMascotaJugador.innerHTML = inputRatigueya.id;
        mascotaJugador = inputRatigueya.id;

    }   else {
        alert( "selecciona una mascosta" );
    }


    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo();
    sectionSeleccionarMascota.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'flex';
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre)  {
            ataques = mokepones[i].ataques;
        }
    }
    mostrarAtaques( ataques );

}

function mostrarAtaques( ataques ){
    ataques.forEach( ( ataque ) => {
        ataquesMokepon =`
        <button id='${ataque.id}' class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `;
        contenedorAtaques.innerHTML += ataquesMokepon;
    })

    botonFuego = document.getElementById( 'boton-fuego' );
    botonAgua = document.getElementById('boton-agua' );
    botonTierra = document.getElementById('boton-tierra' );
    botones = document.querySelectorAll('.BAtaque');


}

function secuenciaAtaque() {
    botones.forEach( ( boton ) => {
        boton.addEventListener('click', (e)  => {
            if ( e.target.textContent === '🔥' ) {
                ataquesJugador.push( 'FUEGO' );
                console.log( ataquesJugador )
                boton.style.background = '#112f58'
                boton.disabled = true;

            } else if ( e.target.textContent === '💧' ){
                ataquesJugador.push( 'AGUA' )
                console.log( ataquesJugador )
                boton.style.background = '#112f58';
                boton.disabled = true;
            } else {
                ataquesJugador.push( 'TIERRA' );
                console.log( ataquesJugador );
                boton.style.background = '#112f58';
                boton.disabled = true;
            }
            ataqueAleatorioEnemigo();
        })
    })

}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio( 0, mokepones.length -1 );

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques;
    secuenciaAtaque();

}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio( 0, ataquesMokeponEnemigo.length -1 );

    if ( ataqueAleatorio == 0 || ataqueAleatorio == 1 ) {
        ataqueEnemigo.push( 'FUEGO' );
    } else if ( ataqueAleatorio == 3  || ataqueAleatorio == 4) {
        ataqueEnemigo.push( 'AGUA' );
    } else {
        ataqueEnemigo.push( 'TIERRA' );
    }
    console.log(ataqueEnemigo)
    iniciarPelea();
}

function iniciarPelea() {
    if (ataquesJugador.length === 5 ) {
        combate();
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataquesJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {

    for (let i = 0; i < ataquesJugador.length; ++i) {
        if (ataquesJugador[i]=== ataqueEnemigo[i])  {
            indexAmbosOponentes( i, i );
            crearMensaje("EMPATE" );
        }else if (ataquesJugador[i] === 'FUEGO' && ataqueEnemigo[i] === 'TIERRA') {
            indexAmbosOponentes( i,i );
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        }else if(ataquesJugador[i] === 'AGUA' && ataqueEnemigo[i] === 'FUEGO') {
            indexAmbosOponentes( i, i );
            crearMensaje("GANASTE");
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        }else if (ataquesJugador[i] === 'TIERRA' && ataqueEnemigo[i] === 'AGUA' ) {
            indexAmbosOponentes(i, i);
            crearMensaje( "GANASTE" );
            victoriasJugador++;
            spanVidasJugador.innerHTML = victoriasJugador;
        }else {
            indexAmbosOponentes( i, i);
            crearMensaje( "PERDISTE");
            victoriasEnemigo++;
            spanVidasEnemigo.innerHTML = victoriasEnemigo;
        }

    }


    revisarVidas()
}

function revisarVidas() {
    if ( victoriasJugador === victoriasEnemigo ) {
    crearMensajFinal("EMPATE")
    }else if ( victoriasJugador > victoriasEnemigo ) {
    crearMensajFinal("GANASTE")
    }else {
        crearMensajFinal("PERDISTE")
    }
}

function crearMensaje( resultado ) {
    let nuevoAtaqueDelJugador=document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p');

    sectionMensajes.innerHTML = resultado;
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal;

    sectionReiniciar.style.display = 'block';
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio ( min, max ) {
    return Math.floor(Math.random() * ( max - min + 1 ) + min );
}

window.addEventListener( 'load', iniciarJuego );