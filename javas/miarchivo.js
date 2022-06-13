/////Profesor dejare mis dudas en comentarios si puede luego enviame mensaje para solucionarlas lo agradeceria!

let nombre = prompt("Hola, Como te llamas?");

const comienzoJuego = () => {
  if (typeof nombre != "string" || nombre == " " || nombre == "") {
    nombre = prompt("No ingresaste un nombre valido. Intenta de nuevo.");
  }

  alert(`Hola ${nombre} vamos a jugar piedra, papel o tijeras.`);
};

comienzoJuego();

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
    4.No jugar`)
  );
  switch (true) {
    ////////CON USUARIO ELLECION PIEDRA
    case opciones == 1 && azarCompu() == "papel":
      contar();

      alert(`Tu elegiste piedra y yo elegi papel jaja..Suerte la proxima.`);
      break;

    case opciones == 1 && azarCompu() == "piedra":
      contar();

      alert(`Tu elegiste piedra y yo elegi piedra jaja..Empate.`);
      break;

    case opciones == 1 && azarCompu() == "tijera":
      contar();

      alert(`Tu elegiste piedra y yo elegi tijera, me ganaste :(`);
      break;

    /////////CON USUARIO ELECCION PAPEL
    case opciones == 2 && azarCompu() == "papel":
      contar();
      alert(`Tu elegiste papel y yo elegi papel jaja..Empate.`);
      break;

    case opciones == 2 && azarCompu() == "piedra":
      contar();
      alert(`Tu elegiste papel y yo elegi piedra, me ganaste :( `);
      break;

    case opciones == 2 && azarCompu() == "tijera":
      contar();

      alert(`Tu elegiste papel y yo elegi tijera jaja..Suerte la proxima.`);
      break;

    ///////////////CON USUARIO ELECCION TIJERA
    case opciones == 3 && azarCompu() == "papel":
      contar();
      alert(`Tu elegiste tijeras y yo elegi papel, me ganaste :( `);
      break;
    case opciones == 3 && azarCompu() == "piedra":
      contar();
      alert(`Tu elegiste tijeras y yo elegi piedra jaja..Suerte la proxima. `);
      break;

    case opciones == 3 && azarCompu() == "tijera":
      contar();
      alert(`Tu elegiste tijeras y yo elegi tijeras Empate `);
      break;

    ////////////////CON USUARIO QUERIENDO DEJAR EL JUEGO
    case opciones == 4:
      alert(`Entiendo ${nombre} , será en otro momento. Adios!`);
      jugamos = false;
      break;

    ///////////////CON USUARIO ELECCION INCORRECTA

    case opciones != 1 || opciones != 2 || opciones != 3 || opciones != 4:
      alert("No elegiste un numero correcto, intenta de nuevo");
      break;
  }
}

/// PREGUNTA 1: Hay un bug que no logro resolver, algunas veces usando por primera vez la pagina coloco el numero 2 y me dice que es un numero incorrecto no entiendo de donde sale D:

/* PREGUNTA 2: Intente desarrollar un juego de cartas que tendria tres rondas donde el jugador tuviera que elegir un elemento en cada ronda para su "rey"
(el jugador alli elegiria un elemento para cada ronda entre tierra agua fuego y aire) luego dependiendo de su eleccion el jugador elegia tres
 poderes que queria usar (uno para cada ronda) ya que cada elemento tendria tres poderes.

Luego alli se lanzaban las cartas de la computadora y las del jugador. Los reyes recibian mas o menos daño basado en su elemento algunos elementos eran mas
debiles o mas fuertes ante ataques dependiendo de su elemento.


Los reyes serian una variable con 10 puntos de vida y luego dependiendo de la eleccion les restaria los puntos segun las cartass elegidas por el jugador.


Intente primero hacer objetos para todas las cartas y luego pense en hacer una funcion que dependiendo de la eleccion del jugador le restara vida a la variable rey
segun la propiedad de la carta que eligio el jugador. Tuve alli varios problemas.

No encontre la forma de hacer que el jugador primero eligiera un rey/elemento (osea pense con un prompt y numero poner que eligiera uno de cuatro opciones de elementos)
y luego alli salieran tres opciones. Y que el usuario eligiera la primera carta y luego alli se repetia el proceso, el usuario elegiria el rey para la segunda ronda 
y el poder a usar en la segunda ronda y luego la tercera. 


Pense que quizas con un while podria solucionar el problema y hacer que de alguna forma se fuera guardando en un array cada eleccion del jugador. Pero alli tuve un
segundo problema, no se me ocurrio como hacer que las cartas se lanzaran ronda a ronda y se restara la vida ronda a ronda segun la eleccion del jugador. Si restaba todo
el array de una no se jugaria ronda a ronda.



Bueno despues de mucho pensar decidi seguir trabajando en el piedra papel o tijeras a mi mayor capacidad o conocimiento jaja pero si me puede brindar alguna idea
con eso lo apreciaria ya que me gustaria en otro momento intentar desarrollar eso ya sea para practicar o poder pensarlo.

Agradecido de antemano por su correccion :)


*/

///////// PREGUNTA 3: Punto aparte de lo anterior y volviendo a mi juego de Piedra papel o tijeras....Me gustaria saber como podria conectar si el usuario gana,
// pierde o empata
/// para que se generen objetos automaticamente y se guarden la informacion de esa partida existe alguna forma de crear eso?

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
