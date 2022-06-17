/////Ivan deje un comentario al final por su me uedes ayudar con eso! Gracias y buen finde!

let nombre = prompt("Hola, Como te llamas?");

const comienzoJuego = () => {
  if (typeof nombre != "string" || nombre == " " || nombre == "") {
    nombre = prompt("No ingresaste un nombre valido. Intenta de nuevo.");
  }

  alert(`Hola ${nombre} vamos a jugar piedra, papel o tijeras.`);
};

comienzoJuego();

///////////////ARRAYS DE OBJETOS

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

function suma(m) {
  return (m = m + 1);
}

let jugamos = true;

while (jugamos) {
  function contar() {
    alert("Okey aqui vamos.");
    alert("Piedra, Papel o tijeras!");
    for (h = 1; h <= 3; h++) {
      alert(h);
    }
  }
  const azarCompu = () => {
    const elecciones = ["piedra", "papel", "tijeras"];

    const random = Math.round(Math.random() * 2);

    let eleccionCompu = elecciones[random];
    return eleccionCompu;
  };

  let opciones = Number(
    prompt(`Haz tu eleccion: 
    1.Piedra 
    2.Papel 
    3.Tijeras 
    4.Ver Jugadores mas ganadores
    5.No jugar`)
  );
  switch (true) {
    ////////CON USUARIO ELLECION PIEDRA
    case opciones === 1 && azarCompu() === "papel":
      contar();

      alert(`Tu elegiste piedra y yo elegi papel jaja..Suerte la proxima.`);
      suma(perdida);
      console.log(suma);
      break;

    case opciones === 1 && azarCompu() === "piedra":
      contar();

      alert(`Tu elegiste piedra y yo elegi piedra jaja..Empate.`);
      break;

    case opciones === 1 && azarCompu() === "tijera":
      contar();

      alert(`Tu elegiste piedra y yo elegi tijera, me ganaste :(`);
      break;

    /////////CON USUARIO ELECCION PAPEL
    case opciones === 2 && azarCompu() === "papel":
      contar();
      alert(`Tu elegiste papel y yo elegi papel jaja..Empate.`);
      break;

    case opciones === 2 && azarCompu() === "piedra":
      contar();
      alert(`Tu elegiste papel y yo elegi piedra, me ganaste :( `);
      break;

    case opciones === 2 && azarCompu() === "tijera":
      contar();

      alert(`Tu elegiste papel y yo elegi tijera jaja..Suerte la proxima.`);
      break;

    ///////////////CON USUARIO ELECCION TIJERA
    case opciones === 3 && azarCompu() === "papel":
      contar();
      alert(`Tu elegiste tijeras y yo elegi papel, me ganaste :( `);
      break;
    case opciones === 3 && azarCompu() === "piedra":
      contar();
      alert(`Tu elegiste tijeras y yo elegi piedra jaja..Suerte la proxima. `);
      break;

    case opciones === 3 && azarCompu() === "tijera":
      contar();
      alert(`Tu elegiste tijeras y yo elegi tijeras Empate `);
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
      alert("No elegiste un numero correcto, intenta de nuevo");
      break;
  }
}

///////////////TRABAJO EN PROGRESO

class Usuario {
  constructor(nombre, ganada, perdida, empatada) {
    this.nombre = nombre;
    this.ganadas = ganada;
    this.perdida = perdida;
    this.empatada = empatada;
  }
}

const usuarioNuevo = new Usuario(nombre, ganada, perdida, empatada);

const historialPartidas = [];

historialPartidas.push(usuarioNuevo);

console.log(historialPartidas[0]);

/* 

Profe la verdad no me dio mucho tiempo desde el martes ahora para seguir trabajando el codigo. Corregi lo principal. Estoy intentando lograr hacer que cuando el jugador
termine su partida lo que haya hecho se guarde en un array pero no logre hasta ahora conectar la partida para que se sumen los resultados en el array. QUeria lograr que
a partir de los resultados del juego se cree un objeto y luego ese objeto se sumara a un array que al iniciar iba a estar vacio. 
Logre al menos que cuando el jugador termine el juego se guarde el nombre en el array final jaja me parece que hay algo en la funcion que hice que no estoy logrando
que se sume el resultado al usuario nuevo :/
Pero bueno aun estoy trabajandolo!
Quedo atento a cualquier consejo que me pueda ayudar! Gracias!


Posdata: Aun no entiendo porque a veces me sale valor inconrrecto con las opciones del switch cuando coloque uno de los numeros correctoD: no se si a usted al probar el 
programa le pasa tambien!

*/
