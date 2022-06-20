/////Ivan, tengo mis dudas en las siguientes lineas, por si me puedes ayudar con eso! Gracias!
////// Lineas: 21, 111, 129

// Este codigo de abajo es el desafio complementario!
const saludoForm = document.getElementById("ask-name");
const nombreformulario = document.getElementById("nombreFormulario");
const apellidoformulario = document.getElementById("apellidoFormulario");

formularioNombre.onsubmit = (e) => {
  e.preventDefault();
  saludoForm.innerHTML = `¡Hola! ${nombreformulario.value} ${apellidoformulario.value} Bienvenido. vamos a jugar piedra, papel o tijeras.`;
};

const comienzoJuego = () => {
  if (nombre != "string" || nombre == " " || nombre == "") {
    alert("No ingresaste un nombre valido. Intenta de nuevo.");
  }
};

let nombre = document.getElementById("nombreFormulario").value;
//intento capturar el valor de este formulario para, cuando el usuario lo complete, guardarlo en la variable nombre y que sirva para completar el objeto en la linea
//220, pero no se porque no funciona!

//comienzoJuego();
///////ARRAYS DE OBJETOS

const historialJugadores = [
  { nombre: "Maria", ganadas: 12, perdidas: 20, empates: 4 },
  { nombre: "Julian", ganadas: 8, perdidas: 4, empates: 2 },
  { nombre: "Kevin", ganadas: 10, perdidas: 6, empates: 7 },
  { nombre: "Ana", ganadas: 7, perdidas: 3, empates: 5 },
];

const jugadoresExcepcionales = [
  { nombre: "Luis", ganadas: 20, perdidas: 3, empates: 1 },
  { nombre: "Julian", ganadas: 18, perdidas: 2, empates: 1 },
  { nombre: "Kevin", ganadas: 15, perdidas: 0, empates: 7 },
];

//////////METODO DE ARRAY 1
historialJugadores.pop();
console.log(historialJugadores);

/////////////METODO DE ARRAY 2

todosLosJugadores = jugadoresExcepcionales.concat(historialJugadores);

console.log(todosLosJugadores);

//////////////// CLASE Y OBJETOS CONSTRUIDOS CON CLASE
class Jugador {
  constructor(nombre, ganadas, perdidas, empates) {
    this.nombre = nombre;
    this.ganadas = ganadas;
    this.perdidas = perdidas;
    this.empates = empates;
  }
}

const jugador1 = new Jugador("Jose", 10, 4, 2);
const jugador2 = new Jugador("Frank", 9, 2, 1);
const jugador3 = new Jugador("Julio", 24, 3, 6);

const arrayObjetosClase = [jugador1, jugador2, jugador3];
console.log(arrayObjetosClase);

todoHistorialJugadores = todosLosJugadores.concat(arrayObjetosClase);

console.log(todoHistorialJugadores);

///////////////METODOS BUSQUEDA Y TRANSFORMACION

//////////////METODO 1 FILTER
const jugadoresMasGanadores = todoHistorialJugadores.filter(
  (player) => player.ganadas > 12
);

console.log(jugadoresMasGanadores);

/////////////METODO 2 MAP

const jugadoresPremiados = jugadoresMasGanadores.map((premios) => ({
  ...premios,
  medalla: "Oro",
}));
console.log(jugadoresPremiados);

//////////////////VARIABLES GLOBALES NECESARIAS

let ganada = 0;
let perdida = 0;
let empatada = 0;

const suma = (m) => {
  return (m = m + 1);
};

let jugamos = true;

while (jugamos) {
  function contar() {
    alert("Okey aqui vamos.");
    alert("Piedra, Papel o tijeras!");

    const empecemos = document.getElementById("grito-inicio");
    empecemos.innerHTML = `Okey aqui vamos.`;

    const gritos = document.getElementById("grito-de-juego");
    gritos.innerHTML = `Piedra, Papel o tijeras!`;

    for (h = 1; h <= 3; h++) {
      // Aqui esto me imprime el 3 de una vez y no el conteo como con el alert. Me tocaria reemplazar esto por un array que recorra y se muestre?
      const gritos = document.getElementById("grito-de-conteo");
      gritos.innerHTML = h;
    }
  }
  const azarCompu = () => {
    const elecciones = ["piedra", "papel", "tijeras"];

    const random = Math.round(Math.random() * 2);

    let eleccionCompu = elecciones[random];
    return eleccionCompu;
  };
  let opciones = 0;
  opciones = document.querySelector('input[name="eleccion"]:checked').value;
  console.log(opciones);

  // Tengo duda de como capturar el valor de los radio buttons para capturar digamos el 1,2,3,4 o 5 y que me sirva para mis casos de switch. le asigne valores a cada boton
  //pero no he logrado decifrarlo (he investigado por mi cuenta pero aun no lo logro)

  /*
  let opciones = Number(
    prompt(`Haz tu eleccion: 
    1.Piedra 
    2.Papel 
    3.Tijeras 
    4.Ver Jugadores mas ganadores
    5.No jugar`)
  );
  */

  switch (true) {
    ////////CON USUARIO ELLECION PIEDRA
    case opciones === 1 && azarCompu() === "papel":
      contar();

      alert(`Tu elegiste piedra y yo elegi papel jaja..Suerte la proxima.`);
      perdida = suma(perdida);
      break;

    case opciones === 1 && azarCompu() === "piedra":
      contar();

      alert(`Tu elegiste piedra y yo elegi piedra jaja..Empate.`);
      empatada = suma(empatada);
      break;

    case opciones === 1 && azarCompu() === "tijera":
      contar();

      alert(`Tu elegiste piedra y yo elegi tijera, me ganaste :(`);
      ganada = suma(ganada);
      break;

    /////////CON USUARIO ELECCION PAPEL
    case opciones === 2 && azarCompu() === "papel":
      contar();
      alert(`Tu elegiste papel y yo elegi papel jaja..Empate.`);
      empatada = suma(empatada);
      break;

    case opciones === 2 && azarCompu() === "piedra":
      contar();
      alert(`Tu elegiste papel y yo elegi piedra, me ganaste :( `);
      ganada = suma(ganada);
      break;

    case opciones === 2 && azarCompu() === "tijera":
      contar();

      alert(`Tu elegiste papel y yo elegi tijera jaja..Suerte la proxima.`);
      perdida = suma(perdida);
      break;

    ///////////////CON USUARIO ELECCION TIJERA
    case opciones === 3 && azarCompu() === "papel":
      contar();
      alert(`Tu elegiste tijeras y yo elegi papel, me ganaste :( `);
      ganada = suma(ganada);
      break;
    case opciones === 3 && azarCompu() === "piedra":
      contar();
      alert(`Tu elegiste tijeras y yo elegi piedra jaja..Suerte la proxima. `);
      perdida = suma(perdida);
      break;

    case opciones === 3 && azarCompu() === "tijera":
      contar();
      alert(`Tu elegiste tijeras y yo elegi tijeras Empate `);
      empatada = suma(empatada);
      break;

    ///////////////CON USUARIO ELECCION DE VER PUNTUACIONES
    case opciones === 4:
      alert(
        `Los jugadores mas ganadores son: ${jugadoresPremiados[0].nombre}, ${jugadoresPremiados[1].nombre}, ${jugadoresPremiados[2].nombre}, ${jugadoresPremiados[3].nombre}. Juega y únete a ellos!`
      );
      break;
    ////////////////CON USUARIO QUERIENDO DEJAR EL JUEGO
    case opciones === 5:
      alert(`Entiendo ${nombre} , será en otro momento. Adios!`);
      jugamos = false;
      break;
    ///////////////CON USUARIO ELECCION INCORRECTA
    default:
      //console.log("No elegiste un numero correcto, intenta de nuevo");
      break;
  }
}

///////////////TRABAJO EN PROGRESO

const verResultado = () => {
  class Usuario {
    constructor(nombre, ganada, perdida, empatada) {
      this.nombre = nombre;
      this.ganadas = ganada;
      this.perdida = perdida;
      this.empatada = empatada;
    }

    mostrar() {
      const resultado = document.createElement("h3");
      resultado.innerHTML = `${nombre} tu resultado final fue: Partidas ganadas: ${ganada}, Partidas perdidas: ${perdida}, Partidas empatadas: ${empatada}. 
        
        Mejora tu puntuacion y juega de nuevo!`;
      const resultadosFinales = document.getElementById("secondary-section");
      resultadosFinales.append(resultado);
    }
  }

  const usuarioNuevo = new Usuario(nombre, ganada, perdida, empatada);

  const historialPartidas = [];

  historialPartidas.push(usuarioNuevo);

  console.log(historialPartidas[0]);

  usuarioNuevo.mostrar();
};
verResultado();

/////////////////EVENTOS INPUTS
