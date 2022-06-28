let bloquearFraseInicial = true;
let bloquearFraseFinal = true;
let bloquearJugada = true;

const saludoForm = document.getElementById("formularioNombre");
const saludoInicial = document.getElementById("ask-name");
let nombre;
const userSection = document.getElementById("userSection");
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
    saludoInicial.innerHTML = `¡Hola! ${nombreFormulario} ${apellidoFormulario} Bienvenido. Vamos a jugar piedra, papel o tijeras.`;
    if (bloquearFraseInicial) {
      const recomendarElegir = document.createElement("h3");
      recomendarElegir.innerHTML = `Haz tu elección abajo:`;
      userSection.append(recomendarElegir);
      bloquearFraseInicial = false;
    }
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

  if (eleccionCompu === "piedra") {
    const cajitaCPU = document.getElementById("cajitaCPU");

    cajitaCPU.classList.toggle("eleccionPiedra");

    return eleccionCompu;
  } else if (eleccionCompu === "papel") {
    const cajitaCPU = document.getElementById("cajitaCPU");
    cajitaCPU.classList.toggle("eleccionPapel");

    return eleccionCompu;
  } else if (eleccionCompu === "tijeras") {
    const cajitaCPU = document.getElementById("cajitaCPU");
    cajitaCPU.classList.toggle("eleccionTijeras");

    return eleccionCompu;
  }
};

//iniciar x y apagar el blanco y y/z luego con el reset encender y/z apagar x

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

  if (bloquearJugada) {
    ////////CON USUARIO ELLECION PIEDRA
    const gritoResultado = document.getElementById("resultadoJuego");
    if (eleccion === "piedra") {
      if (azarCompu() === "papel") {
        contar();
        perdida = suma(perdida);
        gritoResultado.innerHTML =
          "Tu elegiste Piedra y yo elegi Papel ! Perdiste!";
        bloquearJugada = false;
      } else if (azarCompu() === "tijeras") {
        contar();
        ganada = suma(ganada);
        gritoResultado.innerHTML =
          "Tu elegiste Piedra y yo elegi Tijeras ! Ganaste!";
        bloquearJugada = false;
      } else {
        contar();
        empatada = suma(empatada);
        gritoResultado.innerHTML =
          "Tu elegiste Piedra y yo elegi Piedra ! Empate!";
        bloquearJugada = false;
      }
    }
    ////////CON USUARIO ELLECION PAPEL
    else if (eleccion === "papel") {
      if (azarCompu() === "papel") {
        contar();
        empatada = suma(empatada);

        gritoResultado.innerHTML =
          "Tu elegiste Papel y yo elegi Papel ! Empate!";
        bloquearJugada = false;
      } else if (azarCompu() === "tijeras") {
        contar();
        perdida = suma(perdida);

        gritoResultado.innerHTML =
          "Tu elegiste Papel y yo elegi Tijeras ! Perdiste!";
        bloquearJugada = false;
      } else {
        contar();
        ganada = suma(ganada);
        console.log(ganada);
        gritoResultado.innerHTML =
          "Tu elegiste Papel y yo elegi Piedra ! Ganaste!";
        bloquearJugada = false;
      }
    }
    ////////CON USUARIO ELLECION TIJERAS
    else if (eleccion === "tijeras") {
      if (azarCompu() === "papel") {
        contar();
        ganada = suma(ganada);
        gritoResultado.innerHTML =
          "Tu elegiste Tijeras y yo elegi Papel ! Ganaste!";
        bloquearJugada = false;
      } else if (azarCompu() === "tijeras") {
        contar();
        empatada = suma(empatada);
        gritoResultado.innerHTML =
          "Tu elegiste Tijeras y yo elegi Tijeras ! Empate!";
        bloquearJugada = false;
      } else {
        contar();
        perdida = suma(perdida);
        gritoResultado.innerHTML =
          "Tu elegiste Tijeras y yo elegi Piedra ! Perdiste!";
        bloquearJugada = false;
      }
    }
    ////////CON USUARIO ELECCION VER RANKING
    else if (eleccion === "Ranking") {
      gritoResultado.innerHTML = `Los jugadores mas ganadores son: ${jugadoresPremiados[0].nombre}, ${jugadoresPremiados[1].nombre}, ${jugadoresPremiados[2].nombre}. Juega y únete a ellos!`;
    }

    ////////CON USUARIO ELLECION SALIR
    const terminarJuego = document.getElementById("terminarJuego");
    terminarJuego.addEventListener("click", () => {
      const saludoForm = document.getElementById("formularioNombre");

      const nombreFormulario = saludoForm[0].value;
      const apellidoFormulario = saludoForm[1].value;

      gritoResultado.innerHTML = `Entiendo ${nombreFormulario} ${apellidoFormulario}, será en otro momento. Adios!`;

      if (bloquearFraseFinal) {
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
            //No funciona si reemplazo el primer formulario de los nombres. Probar con getItem de la clase storage.
          }
        }

        const usuarioNuevo = new Usuario(nombre, ganada, perdida, empatada);

        usuarioNuevo.mostrar();
        bloquearFraseFinal = false;
      }
    });
  }
};
//INTERFAZ DE JUEGO
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let usarBoton = true;
const eleccionPiedra = document.querySelector(".eleccionPiedra");
const eleccionPapel = document.querySelector(".eleccionPapel");
const eleccionTijeras = document.querySelector(".eleccionTijeras");

///FUNCION RESETEARELECCIONCOMPU

///FUNCIONES DE OCULTAR ELECCIONES
const soloMostrarPiedra = () => {
  eleccionPiedra.classList.toggle("agrandar");
  eleccionPapel.classList.toggle("oculto");
  eleccionTijeras.classList.toggle("oculto");
  usarBoton = false;
};

const soloMostrarPapel = () => {
  eleccionPapel.classList.toggle("agrandar");
  eleccionPiedra.classList.toggle("oculto");
  eleccionTijeras.classList.toggle("oculto");
  usarBoton = false;
};
const soloMostrarTijeras = () => {
  eleccionTijeras.classList.toggle("agrandar");
  eleccionPapel.classList.toggle("oculto");
  eleccionPiedra.classList.toggle("oculto");
  usarBoton = false;
};
//BOTONES DE RESETEO DE JUEGO
const botonResetearPiedra = () => {
  const reiniciarJuego = document.getElementById("nuevoJuego");
  reiniciarJuego.classList.toggle("oculto");
  reiniciarJuego.onclick = () => {
    eleccionPiedra.classList.toggle("agrandar");
    eleccionPapel.classList.toggle("oculto");
    eleccionTijeras.classList.toggle("oculto");
    reiniciarJuego.classList.toggle("oculto");

    usarBoton = true;
    bloquearJugada = true;
  };
};

const botonResetearPapel = () => {
  const reiniciarJuego = document.getElementById("nuevoJuego");
  reiniciarJuego.classList.toggle("oculto");
  reiniciarJuego.onclick = () => {
    eleccionPapel.classList.toggle("agrandar");
    eleccionPiedra.classList.toggle("oculto");
    eleccionTijeras.classList.toggle("oculto");
    reiniciarJuego.classList.toggle("oculto");

    usarBoton = true;
    bloquearJugada = true;
  };
};

const botonResetearTijeras = () => {
  const reiniciarJuego = document.getElementById("nuevoJuego");
  reiniciarJuego.classList.toggle("oculto");
  reiniciarJuego.onclick = () => {
    eleccionTijeras.classList.toggle("agrandar");
    eleccionPapel.classList.toggle("oculto");
    eleccionPiedra.classList.toggle("oculto");
    reiniciarJuego.classList.toggle("oculto");

    usarBoton = true;
    bloquearJugada = true;
  };
};

//MANIPULANDO EN EL DOM EL ELEMENTO ELEGIDO
eleccionPiedra.addEventListener("click", () => {
  if (usarBoton) {
    soloMostrarPiedra();

    botonResetearPiedra();
    azarCompu();
  }
});

eleccionPapel.addEventListener("click", () => {
  if (usarBoton) {
    soloMostrarPapel();
    botonResetearPapel();
    azarCompu();
  }
});

eleccionTijeras.addEventListener("click", () => {
  if (usarBoton) {
    soloMostrarTijeras();

    botonResetearTijeras();
    azarCompu();
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//KEVIN, LO QUE TIENES QUE HACER ES USAR EL CODIGO DENTRO DEL FORMULARIO DE LOS RADIO BOTONES, USAR ESE CODIGO DENTRO DE CADA ELECCION QUE CREASTE
//PARA EL USUARIO. DIGAMOS METER LAS OPCIONES DE RESPUESTA DE LA COMPUTADORA PARA CASO PERDER GANAR O EMPATAR TODAS, DENTRO DE POR EJEMPLO DE
//LA OPCION DE USUARIO DE PIEDRA ES DECIR EL BOTON ELECCIONPIEDRA.ADD LISTENER Y LUEGO CREAR DOS BOTONES MAS UNO PARA SALIR Y RESULTADOS Y OTRO PARA VER HISTORIAL JUGADORES
