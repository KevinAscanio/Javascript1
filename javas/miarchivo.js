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
  if (bloquearFraseInicial && nombreUsuario !== "" && apellidoUsuario !== "") {
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
    return Swal.fire("Ingrese un Nombre correcto");
  } else if (
    typeof apellidoFormulario !== "string" ||
    apellidoFormulario === "" ||
    apellidoFormulario === " "
  ) {
    return Swal.fire("Ingrese un Apellido correcto");
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

///////ARRAYS DE OBJETOS BASE DE DATOS INICIAL DE JUGADORES

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

///AQUI PODRIA USAR DESESTRUCTURACION DE ARRAYS O DE OBJETOS PARA IMPRIMIR EL RANKING

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
  return (m += 1);
};

const borrarPuntuacionComienzoJuego = () => {
  const recordarUser = document.querySelector("#recordarUser");
  recordarUser.innerHTML = `<h3> ${nombreUsuario} ${apellidoUsuario}.
    Sigue jugando y mejora tu puntuacion! <h3>`;
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
  borrarPuntuacionComienzoJuego();

  const gritoResultado = document.getElementById("resultadoJuego");

  if (eleccionCompu === "papel") {
    perdida = suma(perdida);
    gritoResultado.innerHTML =
      "Tu elegiste Piedra y yo elegi Papel ! Perdiste!";

    Swal.fire("PERDISTE!", "Tu elegiste Piedra y yo elegi Papel!", "error");
    bloquearJugada = false;
  } else if (eleccionCompu === "tijeras") {
    ganada = suma(ganada);
    gritoResultado.innerHTML =
      "Tu elegiste Piedra y yo elegi Tijeras ! Ganaste!";
    Swal.fire("GANASTE!", "Tu elegiste Piedra y yo elegi Tijeras!", "success");
    bloquearJugada = false;
  } else {
    empatada = suma(empatada);
    gritoResultado.innerHTML = "Tu elegiste Piedra y yo elegi Piedra ! Empate!";

    Swal.fire("EMPATE!", "Tu elegiste Piedra y yo elegi Piedra!", "warning");
    bloquearJugada = false;
  }
};
////////SI USUARIO JUEGA PAPEL

const juegoPapel = () => {
  borrarPuntuacionComienzoJuego();

  const gritoResultado = document.getElementById("resultadoJuego");
  if (eleccionCompu === "papel") {
    empatada = suma(empatada);

    gritoResultado.innerHTML = "Tu elegiste Papel y yo elegi Papel ! Empate!";
    Swal.fire("EMPATE!", "Tu elegiste Papel y yo elegi Papel!", "warning");
    bloquearJugada = false;
  } else if (eleccionCompu === "tijeras") {
    perdida = suma(perdida);

    gritoResultado.innerHTML =
      "Tu elegiste Papel y yo elegi Tijeras ! Perdiste!";
    Swal.fire("PERDISTE!", "Tu elegiste Papel y yo elegi Tijeras!", "error");
    bloquearJugada = false;
  } else {
    ganada = suma(ganada);

    gritoResultado.innerHTML = "Tu elegiste Papel y yo elegi Piedra ! Ganaste!";
    Swal.fire("GANASTE!", "Tu elegiste Papel y yo elegi Piedra!", "success");
    bloquearJugada = false;
  }
};

////////////////SI USUARIO JUEGA TIJERAS

const juegoTijeras = () => {
  borrarPuntuacionComienzoJuego();

  const gritoResultado = document.getElementById("resultadoJuego");
  if (eleccionCompu === "papel") {
    ganada = suma(ganada);
    gritoResultado.innerHTML =
      "Tu elegiste Tijeras y yo elegi Papel ! Ganaste!";
    Swal.fire("GANASTE!", "Tu elegiste Tijeras y yo elegi Papel!", "success");
    bloquearJugada = false;
  } else if (eleccionCompu === "tijeras") {
    empatada = suma(empatada);
    gritoResultado.innerHTML =
      "Tu elegiste Tijeras y yo elegi Tijeras ! Empate!";
    Swal.fire("EMPATE!", "Tu elegiste Tijeras y yo elegi Tijeras!", "warning");
    bloquearJugada = false;
  } else {
    perdida = suma(perdida);
    gritoResultado.innerHTML =
      "Tu elegiste Tijeras y yo elegi Piedra ! Perdiste!";
    Swal.fire("PERDISTE!", "Tu elegiste Tijeras y yo elegi Piedra!", "error");
    bloquearJugada = false;
  }
};

//////// USUARIO BOTON VER RANKING

const rankeo = document.getElementById("rankeo");
rankeo.addEventListener("click", () => {
  const gritoResultado = document.getElementById("resultadoJuego");
  gritoResultado.innerHTML = `Los jugadores mas ganadores son: ${jugadoresPremiados[0].nombre}, ${jugadoresPremiados[1].nombre}, ${jugadoresPremiados[2].nombre}. Juega y únete a ellos!`;
});

//INTERFAZ DE JUEGO/////////////////////////////////////////////

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

const ocultarJugamos = () => {
  const invitacionJugar = document.getElementById("invitacionJugar");
  invitacionJugar.classList.add("oculto");
};

const mostrarJugamos = () => {
  const invitacionJugar = document.getElementById("invitacionJugar");
  invitacionJugar.classList.remove("oculto");
};

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
  mostrarJugamos();
};

const reiniciarPapelUsuario = () => {
  const reiniciarJuego = document.getElementById("nuevoJuego");
  eleccionPapel.classList.remove("agrandar");
  eleccionPiedra.classList.remove("oculto");
  eleccionTijeras.classList.remove("oculto");
  reiniciarJuego.classList.add("oculto");
  mostrarJugamos();
};

const reiniciarTijerasUsuario = () => {
  const reiniciarJuego = document.getElementById("nuevoJuego");
  eleccionTijeras.classList.remove("agrandar");
  eleccionPapel.classList.remove("oculto");
  eleccionPiedra.classList.remove("oculto");
  reiniciarJuego.classList.add("oculto");
  mostrarJugamos();
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
      ocultarJugamos();
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
      ocultarJugamos();
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
      ocultarJugamos();
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
      ocultarJugamos();
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
      ocultarJugamos();
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
      ocultarJugamos();
      juegoTijeras(eleccionCompu);
    }
  }
});

//////////////////////////////////////////
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
    mostrarJugamos();
    usarBoton = true;
    bloquearFraseFinal = true;
    bloquearJugada = true;
  };
};

////////CON USUARIO ELECION SALIR
const terminarJuego = document.getElementById("terminarJuego");

terminarJuego.addEventListener("click", () => {
  const saludoForm = document.getElementById("formularioNombre");
  ocultarJugamos();
  const nombreFormulario = saludoForm[0].value;
  const apellidoFormulario = saludoForm[1].value;
  const gritoResultado = document.getElementById("resultadoJuego");
  !!nombreUsuario && !!apellidoUsuario
    ? (gritoResultado.innerHTML = `Entiendo ${nombreUsuario} ${apellidoUsuario}, será en otro momento. Adios!`)
    : (gritoResultado.innerHTML = `Entiendo ${nombreFormulario} ${apellidoFormulario}, será en otro momento. Adios!`);

  reiniciarLuegoDeSalir();
  if (bloquearFraseFinal) {
    ////////CONSTRUCTOR DE PARTIDAS

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
