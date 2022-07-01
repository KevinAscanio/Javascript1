// VARIABLES PARA BLOQUEAR ALGUNAS JUGADAS
let bloquearFraseInicial = true;
let bloquearFraseFinal = true;
let bloquearJugada = true;

///////VARIABLES DE LOCAL STORAGE Y FORMULARIO
let nombreUsuario = localStorage.getItem("nombreUsuario");
let apellidoUsuario = localStorage.getItem("apellidoUsuario");
const nombreRecordarUsuario = document.querySelector("#nombreFormulario");
const apellidoRecordarUsuario = document.querySelector("#apellidoFormulario");
///JSON
const datosPartida = JSON.parse(localStorage.getItem("jugadorExistente"));

//
const saludoForm = document.getElementById("formularioNombre");
const userSection = document.getElementById("userSection");

//FUNCION RECORDAR JUGADOR
const contenidoFormu = document.querySelector("#contenidoFormu");
const recordarUser = document.querySelector("#recordarUser");
const ocultarForm = () => {
  if (bloquearFraseInicial) {
    contenidoFormu.style.display = "none";
    recordarUser.innerHTML = `<h3> Bienvenido! ${nombreUsuario} ${apellidoUsuario}. Vamos a jugar piedra, papel o tijeras. <h3>`;
    const recomendarElegir = document.createElement("h3");
    recomendarElegir.innerHTML = `Elige uno para comenzar a jugar!`;
    userSection.append(recomendarElegir);
    bloquearFraseInicial = false;
  }
};
//EVENTO ENVIAR DE FORMULARIO
saludoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  nombreUsuario = nombreRecordarUsuario.value;
  apellidoUsuario = apellidoRecordarUsuario.value;
  localStorage.setItem("nombreUsuario", nombreRecordarUsuario.value);
  localStorage.setItem("apellidoUsuario", apellidoRecordarUsuario.value);
  ocultarForm();

  const nombreFormulario = e.target.children[0].value;
  const apellidoFormulario = e.target.children[1].value;

  //////BLOQUEO PARA QUE USUARIO INGRESE SU NOMBRE ANTES DE JUGAR
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
    if (bloquearFraseInicial) {
      const recomendarElegir = document.createElement("h3");
      recomendarElegir.innerHTML = `Elige uno para comenzar a jugar!`;
      userSection.append(recomendarElegir);

      bloquearFraseInicial = false;
    }
  }
});

if (!!nombreUsuario && !!apellidoUsuario) {
  ocultarForm();

  if (!!datosPartida) {
    recordarUser.innerHTML = `<h3> Bienvenido de vuelta! ${nombreUsuario} ${apellidoUsuario}. Tu record hasta ahora es:
    <br/>
    ${datosPartida.ganadas} Partidas ganadas,
    ${datosPartida.perdida} Partidas perdidas,
    ${datosPartida.empatada} Partidas empatadas.
    
    Sigue jugando y mejora tu puntuacion! <h3>`;
  }
}

///////ARRAYS DE OBJETOS BASE DE DATOS JUGADORES

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

/////////////METODO DE ARRAY

todosLosJugadores = jugadoresExcepcionales.concat(historialJugadores);

///////////////METODOS BUSQUEDA Y TRANSFORMACION

//////////////METODO 1 FILTER
const jugadoresMasGanadores = todosLosJugadores.filter(
  (player) => player.ganadas > 12
);

/////////////METODO 2 MAP

const jugadoresPremiados = jugadoresMasGanadores.map((premios) => ({
  ...premios,
  medalla: "Oro",
}));

//////////////////VARIABLES GLOBALES NECESARIAS

let ganada = 0;
let perdida = 0;
let empatada = 0;
let jugamos = 1;
let eleccion;
let CPU;
let eleccionCompu;
let UsuarioElige;
let usarBoton = true;
///////////////FUNCIONES PARA LA INTERFAZ DE JUEGO
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
    const gritosNumeros = document.getElementById("grito-de-conteo");
    gritosNumeros.innerHTML = h;
  }
};

const azarCompu = () => {
  const elecciones = ["piedra", "papel", "tijeras"];

  const random = Math.round(Math.random() * 2);

  eleccionCompu = elecciones[random];

  if (eleccionCompu === "piedra") {
    const cajitaCPU = document.getElementById("cajitaCPU");

    cajitaCPU.classList.add("eleccionPiedra");

    CPU = 1;
    return eleccionCompu;
  } else if (eleccionCompu === "papel") {
    const cajitaCPU = document.getElementById("cajitaCPU");
    cajitaCPU.classList.add("eleccionPapel");

    CPU = 1;
    return eleccionCompu;
  } else if (eleccionCompu === "tijeras") {
    const cajitaCPU = document.getElementById("cajitaCPU");
    cajitaCPU.classList.add("eleccionTijeras");

    CPU = 1;
    return eleccionCompu;
  }
};

const reiniciarGritoDeResultado = () => {
  const gritoResultado = document.getElementById("resultadoJuego");
  gritoResultado.innerHTML = "";
  const empecemos = document.getElementById("grito-inicio");
  empecemos.innerHTML = "";
  const gritos = document.getElementById("grito-de-juego");
  gritos.innerHTML = "";
  const gritosNumeros = document.getElementById("grito-de-conteo");
  gritosNumeros.innerHTML = "";
};
////////////////SI USUARIO JUEGA PIEDRA

const juegoPiedra = () => {
  if (bloquearJugada) {
    const gritoResultado = document.getElementById("resultadoJuego");

    if (eleccionCompu === "papel") {
      contar();
      perdida = suma(perdida);
      gritoResultado.innerHTML =
        "Tu elegiste Piedra y yo elegi Papel ! Perdiste!";
      bloquearJugada = false;
    } else if (eleccionCompu === "tijeras") {
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
};
////////SI USUARIO JUEGA PAPEL

const juegoPapel = () => {
  const gritoResultado = document.getElementById("resultadoJuego");
  if (eleccionCompu === "papel") {
    contar();
    empatada = suma(empatada);

    gritoResultado.innerHTML = "Tu elegiste Papel y yo elegi Papel ! Empate!";
    bloquearJugada = false;
  } else if (eleccionCompu === "tijeras") {
    contar();
    perdida = suma(perdida);

    gritoResultado.innerHTML =
      "Tu elegiste Papel y yo elegi Tijeras ! Perdiste!";
    bloquearJugada = false;
  } else {
    contar();
    ganada = suma(ganada);

    gritoResultado.innerHTML = "Tu elegiste Papel y yo elegi Piedra ! Ganaste!";
    bloquearJugada = false;
  }
};

////////////////SI USUARIO JUEGA TIJERAS

const juegoTijeras = () => {
  const gritoResultado = document.getElementById("resultadoJuego");
  if (eleccionCompu === "papel") {
    contar();
    ganada = suma(ganada);
    gritoResultado.innerHTML =
      "Tu elegiste Tijeras y yo elegi Papel ! Ganaste!";
    bloquearJugada = false;
  } else if (eleccionCompu === "tijeras") {
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
};

//////// USUARIO BOTON VER RANKING

const rankeo = document.getElementById("rankeo");
rankeo.addEventListener("click", () => {
  const gritoResultado = document.getElementById("resultadoJuego");
  gritoResultado.innerHTML = `Los jugadores mas ganadores son: ${jugadoresPremiados[0].nombre}, ${jugadoresPremiados[1].nombre}, ${jugadoresPremiados[2].nombre}. Juega y únete a ellos!`;
});

//INTERFAZ DE JUEGO///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const eleccionPiedra = document.querySelector(".eleccionPiedra");
const eleccionPapel = document.querySelector(".eleccionPapel");
const eleccionTijeras = document.querySelector(".eleccionTijeras");

///FUNCION RESETEARELECCIONCOMPU

const resetearEleccionCPU = () => {
  cajitaCPU.classList.remove("eleccionPiedra");
  cajitaCPU.classList.remove("eleccionPapel");
  cajitaCPU.classList.remove("eleccionTijeras");
};

///FUNCIONES DE OCULTAR ELECCIONES
const soloMostrarPiedra = () => {
  eleccionPiedra.classList.add("agrandar");
  eleccionPapel.classList.add("oculto");
  eleccionTijeras.classList.add("oculto");
  usarBoton = false;
};

const soloMostrarPapel = () => {
  eleccionPapel.classList.add("agrandar");
  eleccionPiedra.classList.add("oculto");
  eleccionTijeras.classList.add("oculto");
  usarBoton = false;
};
const soloMostrarTijeras = () => {
  eleccionTijeras.classList.add("agrandar");
  eleccionPapel.classList.add("oculto");
  eleccionPiedra.classList.add("oculto");
  usarBoton = false;
};

//FUNCIONES RESETEO ELECCION USUARIO
const reiniciarPiedraUsuario = () => {
  const reiniciarJuego = document.getElementById("nuevoJuego");
  eleccionPiedra.classList.remove("agrandar");
  eleccionPapel.classList.remove("oculto");
  eleccionTijeras.classList.remove("oculto");
  reiniciarJuego.classList.add("oculto");
};

const reiniciarPapelUsuario = () => {
  const reiniciarJuego = document.getElementById("nuevoJuego");
  eleccionPapel.classList.remove("agrandar");
  eleccionPiedra.classList.remove("oculto");
  eleccionTijeras.classList.remove("oculto");
  reiniciarJuego.classList.add("oculto");
};

const reiniciarTijerasUsuario = () => {
  const reiniciarJuego = document.getElementById("nuevoJuego");
  eleccionTijeras.classList.remove("agrandar");
  eleccionPapel.classList.remove("oculto");
  eleccionPiedra.classList.remove("oculto");
  reiniciarJuego.classList.add("oculto");
};

//BOTONES DE RESETEO DE ELECCION USUARIO

const botonResetearPiedra = () => {
  const reiniciarJuego = document.getElementById("nuevoJuego");

  reiniciarJuego.classList.remove("oculto");
  reiniciarJuego.onclick = () => {
    if ((CPU = 1)) {
      reiniciarPiedraUsuario();
      resetearEleccionCPU();
      reiniciarGritoDeResultado();
      usarBoton = true;
      bloquearJugada = true;
    }
  };
};

const botonResetearPapel = () => {
  const reiniciarJuego = document.getElementById("nuevoJuego");
  reiniciarJuego.classList.remove("oculto");
  reiniciarJuego.onclick = () => {
    if ((CPU = 1)) {
      reiniciarPapelUsuario();
      resetearEleccionCPU();
      reiniciarGritoDeResultado();
      usarBoton = true;
      bloquearJugada = true;
    }
  };
};

const botonResetearTijeras = () => {
  const reiniciarJuego = document.getElementById("nuevoJuego");
  reiniciarJuego.classList.remove("oculto");
  reiniciarJuego.onclick = () => {
    if ((CPU = 1)) {
      reiniciarTijerasUsuario();
      resetearEleccionCPU();
      reiniciarGritoDeResultado();
      usarBoton = true;
      bloquearJugada = true;
    }
  };
};

//MANIPULANDO EN EL DOM EL ELEMENTO ELEGIDO

eleccionPiedra.addEventListener("click", () => {
  const saludoForm = document.getElementById("formularioNombre");
  const nombreFormulario = saludoForm[0].value;
  const apellidoFormulario = saludoForm[1].value;
  if (!!nombreUsuario && !!apellidoUsuario) {
    if (usarBoton) {
      soloMostrarPiedra();
      botonResetearPiedra();
      azarCompu();
      juegoPiedra(eleccionCompu);
    }
  } else if (
    typeof nombreFormulario !== "string" ||
    nombreFormulario === "" ||
    nombreFormulario === " "
  ) {
    alert("Primero Ingresa tu nombre y apellido");
  } else if (
    typeof apellidoFormulario !== "string" ||
    apellidoFormulario === "" ||
    apellidoFormulario === " "
  ) {
    alert("Primero Ingresa tu nombre y apellido");
  } else {
    if (usarBoton) {
      soloMostrarPiedra();
      botonResetearPiedra();
      azarCompu();
      juegoPiedra(eleccionCompu);
    }
  }
});

eleccionPapel.addEventListener("click", () => {
  const saludoForm = document.getElementById("formularioNombre");
  const nombreFormulario = saludoForm[0].value;
  const apellidoFormulario = saludoForm[1].value;

  if (!!nombreUsuario && !!apellidoUsuario) {
    if (usarBoton) {
      soloMostrarPapel();
      botonResetearPapel();
      azarCompu();
      juegoPapel(eleccionCompu);
    }
  } else if (
    typeof nombreFormulario !== "string" ||
    nombreFormulario === "" ||
    nombreFormulario === " "
  ) {
    alert("Primero Ingresa tu nombre y apellido");
  } else if (
    typeof apellidoFormulario !== "string" ||
    apellidoFormulario === "" ||
    apellidoFormulario === " "
  ) {
    alert("Primero Ingresa tu nombre y apellido");
  } else {
    if (usarBoton) {
      soloMostrarPapel();
      botonResetearPapel();
      azarCompu();
      juegoPapel(eleccionCompu);
    }
  }
});

eleccionTijeras.addEventListener("click", () => {
  const saludoForm = document.getElementById("formularioNombre");
  const nombreFormulario = saludoForm[0].value;
  const apellidoFormulario = saludoForm[1].value;

  if (!!nombreUsuario && !!apellidoUsuario) {
    if (usarBoton) {
      soloMostrarTijeras();
      botonResetearTijeras();
      azarCompu();
      juegoTijeras(eleccionCompu);
    }
  } else if (
    typeof nombreFormulario !== "string" ||
    nombreFormulario === "" ||
    nombreFormulario === " "
  ) {
    alert("Primero Ingresa tu nombre y apellido");
  } else if (
    typeof apellidoFormulario !== "string" ||
    apellidoFormulario === "" ||
    apellidoFormulario === " "
  ) {
    alert("Primero Ingresa tu nombre y apellido");
  } else {
    if (usarBoton) {
      soloMostrarTijeras();
      botonResetearTijeras();
      azarCompu();
      juegoTijeras(eleccionCompu);
    }
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCION REINICIAR PAGINA LUEGO DE SALIR

reiniciarLuegoDeSalir = () => {
  const reiniciarJuego = document.getElementById("nuevoJuego");
  reiniciarJuego.classList.remove("oculto");
  reiniciarJuego.onclick = () => {
    eleccionPapel.classList.remove("agrandar");
    eleccionPiedra.classList.remove("agrandar");
    eleccionTijeras.classList.remove("agrandar");
    eleccionPiedra.classList.remove("oculto");
    eleccionPapel.classList.remove("oculto");
    eleccionTijeras.classList.remove("oculto");
    reiniciarJuego.classList.add("oculto");
    resetearEleccionCPU();
    const resultado = document.getElementById("Resultados");
    resultado.classList.add("oculto");
    reiniciarGritoDeResultado();
    usarBoton = true;
    bloquearFraseFinal = true;
    bloquearJugada = true;
  };
};

////////CON USUARIO ELLECION SALIR
const terminarJuego = document.getElementById("terminarJuego");

terminarJuego.addEventListener("click", () => {
  const saludoForm = document.getElementById("formularioNombre");

  const nombreFormulario = saludoForm[0].value;
  const apellidoFormulario = saludoForm[1].value;
  const gritoResultado = document.getElementById("resultadoJuego");
  if (!!nombreUsuario && !!apellidoUsuario) {
    gritoResultado.innerHTML = `Entiendo ${nombreUsuario} ${apellidoUsuario}, será en otro momento. Adios!`;
  } else {
    gritoResultado.innerHTML = `Entiendo ${nombreFormulario} ${apellidoFormulario}, será en otro momento. Adios!`;
  }
  reiniciarLuegoDeSalir();
  if (bloquearFraseFinal) {
    ///////////////CONSTRUCTOR DE PARTIDAS

    class Usuario {
      constructor(nombre, apellido, ganada, perdida, empatada) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.ganadas = ganada;
        this.perdida = perdida;
        this.empatada = empatada;
      }

      mostrar() {
        if (!!nombreUsuario && !!apellidoUsuario) {
          const resultado = document.getElementById("Resultados");
          resultado.classList.remove("oculto");
          resultado.innerHTML = `${nombreUsuario} ${apellidoUsuario} tu resultado final fue: Partidas ganadas: ${ganada}, Partidas perdidas: ${perdida}, Partidas empatadas: ${empatada}. 
          
                ¡Juega de nuevo y mejora tu puntuacion!`;
        } else {
          const resultado = document.getElementById("Resultados");
          resultado.classList.remove("oculto");
          resultado.innerHTML = `${nombreFormulario} ${apellidoFormulario} tu resultado final fue: Partidas ganadas: ${ganada}, Partidas perdidas: ${perdida}, Partidas empatadas: ${empatada}. 
        
              ¡Juega de nuevo y mejora tu puntuacion!`;
        }
        //No funciona si reemplazo el primer formulario de los nombres. Probar con getItem de la clase storage.
      }
    }

    if (!!nombreUsuario && !!apellidoUsuario) {
      const usuarioNuevo = new Usuario(
        nombreUsuario,
        apellidoUsuario,
        ganada,
        perdida,
        empatada
      );
      console.log(usuarioNuevo);

      localStorage.setItem("jugadorExistente", JSON.stringify(usuarioNuevo));

      usuarioNuevo.mostrar();

      bloquearFraseFinal = false;
    } else {
      const usuarioNuevo = new Usuario(
        nombreFormulario,
        apellidoFormulario,
        ganada,
        perdida,
        empatada
      );
      console.log(usuarioNuevo);

      localStorage.setItem("jugadorExistente", JSON.stringify(usuarioNuevo));
      usuarioNuevo.mostrar();

      bloquearFraseFinal = false;
    }
  }
});
