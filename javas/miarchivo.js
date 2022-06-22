const saludoForm = document.getElementById("formularioNombre");
const saludoInicial = document.getElementById("ask-name");
let nombre;

saludoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombreFormulario = e.target.children[0].value;
  const apellidoFormulario = e.target.children[1].value;

  if (
    typeof nombreFormulario !== "string" ||
    nombreFormulario === "" ||
    nombreFormulario === " "
  ) {
    return alert("Ingrese un Nombre Correcto");
  } else if (
    typeof apellidoFormulario !== "string" ||
    apellidoFormulario === "" ||
    apellidoFormulario === " "
  ) {
    return alert("Ingrese un Apellido Correcto");
  } else {
    saludoInicial.innerHTML = `¡Hola! ${nombreFormulario} ${apellidoFormulario} Bienvenido. vamos a jugar piedra, papel o tijeras.`;
  }
});

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
let jugamos = 1;
let eleccion;
console.log(eleccion);

///////////////FUNCIONES
const suma = (m) => {
  return (m = m + 1);
};

const contar = () => {
  const empecemos = document.getElementById("grito-inicio");
  empecemos.innerHTML = `Okey aqui vamos.`;

  const gritos = document.getElementById("grito-de-juego");
  gritos.innerHTML = `Piedra, Papel o tijeras!`;

  for (h = 1; h <= 3; h++) {
    // Aqui esto me imprime el 3 de una vez y no el conteo como con el alert. Me tocaria reemplazar esto por un array que recorra y se muestre?
    const gritos = document.getElementById("grito-de-conteo");
    gritos.innerHTML = h++;
  }
};
const azarCompu = () => {
  const elecciones = ["piedra", "papel", "tijeras"];

  const random = Math.round(Math.random() * 2);

  let eleccionCompu = elecciones[random];
  return eleccionCompu;
};

////////////////EMPEZAR BUCLE

const formJugadaSeleccionada = document.getElementById("f2");
while ((jugamos = 0)) {
  formJugadaSeleccionada.onsubmit = (e) => {
    e.preventDefault();
    const radioEleccion = e.target.eleccion;

    radioEleccion.forEach((element) => {
      if (element.checked) {
        eleccion = element.value;

        formJugadaSeleccionada.innerHTML = `Seleccionaste ${eleccion}`;
      }
    });

    ////////////////JUEGO
    ////////CON USUARIO ELLECION PIEDRA
    const gritoResultado = document.getElementById("resultadoJuego");
    if (eleccion === "piedra") {
      if (azarCompu() === "papel") {
        contar();
        perdida = suma(perdida);
        gritoResultado.innerHTML =
          "Tu elegiste Piedra y yo elegi Papel ! Perdiste!";
        S;
      } else if (azarCompu() === "tijeras") {
        contar();
        ganada = suma(ganada);
        gritoResultado.innerHTML =
          "Tu elegiste Piedra y yo elegi Tijeras ! Ganaste!";
      } else {
        contar();
        empatada = suma(empatada);
        gritoResultado.innerHTML =
          "Tu elegiste Piedra y yo elegi Piedra ! Empate!";
      }
    }
    ////////CON USUARIO ELLECION PAPEL
    else if (eleccion === "papel") {
      if (azarCompu() === "papel") {
        contar();
        empatada = suma(empatada);
        console.log(empatada);
        gritoResultado.innerHTML =
          "Tu elegiste Papel y yo elegi Papel ! Empate!";
      } else if (azarCompu() === "tijeras") {
        contar();
        perdida = suma(perdida);
        console.log(perdida);
        gritoResultado.innerHTML =
          "Tu elegiste Papel y yo elegi Tijeras ! Perdiste!";
      } else {
        contar();
        ganada = suma(ganada);
        console.log(ganada);
        gritoResultado.innerHTML =
          "Tu elegiste Papel y yo elegi Piedra ! Ganaste!";
      }
    }
    ////////CON USUARIO ELLECION TIJERAS
    else if (eleccion === "tijeras") {
      if (azarCompu() === "papel") {
        contar();
        ganada = suma(ganada);
        gritoResultado.innerHTML =
          "Tu elegiste Tijeras y yo elegi Papel ! Ganaste!";
      } else if (azarCompu() === "tijeras") {
        contar();
        empatada = suma(empatada);
        gritoResultado.innerHTML =
          "Tu elegiste Tijeras y yo elegi Tijeras ! Empate!";
      } else {
        contar();
        perdida = suma(perdida);
        gritoResultado.innerHTML =
          "Tu elegiste Tijeras y yo elegi Piedra ! Perdiste!";
      }
    }
    ////////CON USUARIO ELECCION VER RANKING
    else if (eleccion === "Ranking") {
      gritoResultado.innerHTML = `Los jugadores mas ganadores son: ${jugadoresPremiados[0].nombre}, ${jugadoresPremiados[1].nombre}, ${jugadoresPremiados[2].nombre}, ${jugadoresPremiados[3].nombre}. Juega y únete a ellos!`;
    }
    ////////CON USUARIO ELLECION SALIR
    else if (eleccion === "salir") {
      const saludoForm = document.getElementById("formularioNombre");

      const nombreFormulario = saludoForm[0].value;
      const apellidoFormulario = saludoForm[1].value;

      gritoResultado.innerHTML = `Entiendo ${nombreFormulario} ${apellidoFormulario}, será en otro momento. Adios!`;

      jugamos = 0;
      console.log(jugamos);

      ///////////////CONSTRUCTOR DE PARTIDAS

      class Usuario {
        constructor(nombre, ganada, perdida, empatada) {
          this.nombre = nombre;
          this.ganadas = ganada;
          this.perdida = perdida;
          this.empatada = empatada;
        }

        mostrar() {
          const resultado = document.createElement("h3");
          resultado.innerHTML = `${nombreFormulario} ${apellidoFormulario} tu resultado final fue: Partidas ganadas: ${ganada}, Partidas perdidas: ${perdida}, Partidas empatadas: ${empatada}. 
        
        Mejora tu puntuacion y juega de nuevo!`;
          const resultadosFinales =
            document.getElementById("secondary-section");
          resultadosFinales.append(resultado);
        }
      }

      const usuarioNuevo = new Usuario(nombre, ganada, perdida, empatada);

      const historialPartidas = [];

      historialPartidas.push(usuarioNuevo);

      console.log(historialPartidas[0]);

      usuarioNuevo.mostrar();
    }
  };
}
