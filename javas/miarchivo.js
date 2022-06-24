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

/////////////METODO DE ARRAY 2

todosLosJugadores = jugadoresExcepcionales.concat(historialJugadores);

///////////////METODOS BUSQUEDA Y TRANSFORMACION

//////////////METODO 1 FILTER
const jugadoresMasGanadores = todosLosJugadores.filter(
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
    // Aqui esto me imprime el 3 de una vez y no el conteo como con el alert.
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

const formJugadaSeleccionada = document.getElementById("f2");

formJugadaSeleccionada.onsubmit = (e) => {
  e.preventDefault();
  const radioEleccion = e.target.eleccion;

  radioEleccion.forEach((element) => {
    if (element.checked) {
      eleccion = element.value;
      let eleccionUsuario = document.getElementById("eleccionUsuario");
      eleccionUsuario.innerHTML = `Seleccionaste ${eleccion}`;
      e.preventDefault();
      formJugadaSeleccionada.reset(formJugadaSeleccionada);
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

      gritoResultado.innerHTML = "Tu elegiste Papel y yo elegi Papel ! Empate!";
    } else if (azarCompu() === "tijeras") {
      contar();
      perdida = suma(perdida);

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
    gritoResultado.innerHTML = `Los jugadores mas ganadores son: ${jugadoresPremiados[0].nombre}, ${jugadoresPremiados[1].nombre}, ${jugadoresPremiados[2].nombre}. Juega y únete a ellos!`;
  }
  ////////CON USUARIO ELLECION SALIR
  else if (eleccion === "salir") {
    const saludoForm = document.getElementById("formularioNombre");

    const nombreFormulario = saludoForm[0].value;
    const apellidoFormulario = saludoForm[1].value;

    gritoResultado.innerHTML = `Entiendo ${nombreFormulario} ${apellidoFormulario}, será en otro momento. Adios!`;

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
        const resultadosFinales = document.getElementById("secondary-section");
        resultadosFinales.append(resultado);
        //No funciona si reemplazo el primer formulario de los nombres. Probar con getItem de la clase storage.
      }
    }

    const usuarioNuevo = new Usuario(nombre, ganada, perdida, empatada);

    usuarioNuevo.mostrar();
  } else {
    gritoResultado.innerHTML = "Elige una Opcion Valida!";
  }
};
