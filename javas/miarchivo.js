// VARIABLES PARA BLOQUEAR ALGUNAS JUGADAS
let bloquearFraseInicial = true;
let bloquearFraseFinal = true;
let bloquearJugada = true;
let bloquearImpresionRanking = true;
///////VARIABLES DE LOCAL STORAGE Y FORMULARIO
let nombreUsuario = localStorage.getItem("nombreUsuario");
let apellidoUsuario = localStorage.getItem("apellidoUsuario");
const inputNombreFormulario = document.querySelector("#inputNombreFormulario");
const inputApellidoFormulario = document.querySelector(
  "#inputApellidoFormulario"
);
const datosPartida = JSON.parse(localStorage.getItem("jugadorExistente"));
const saludoForm = document.getElementById("formularioNombre");
const userSection = document.getElementById("userSection");

//FUNCION REMOVER PANTALLA DE INICIO
const removerPantallaInicio = () => {
  const fatherBody = document.querySelector(".father-body");
  const elementosDeJuego = document.getElementById("elementosDeJuego");

  const SaludoInicial = document.createElement("h2");
  SaludoInicial.className = "centrarElemento";
  SaludoInicial.innerHTML = `CARGANDO TU JUEGO...`;
  userSection.append(SaludoInicial);

  setTimeout(() => {
    elementosDeJuego.classList.remove("oculto");
    fatherBody.classList.remove("paginaInicial");
    SaludoInicial.remove();
  }, 2000);
};

//FUNCION RECORDAR JUGADOR
const contenedorFormulario = document.querySelector("#contenedorFormulario");
const recordarUser = document.querySelector("#recordarUser");
const ocultarForm = () => {
  if (bloquearFraseInicial && nombreUsuario !== "" && apellidoUsuario !== "") {
    contenedorFormulario.style.display = "none";
    recordarUser.innerHTML = `<h3> Bienvenido! ${nombreUsuario} ${apellidoUsuario}. Vamos a jugar piedra, papel o tijeras. <h3>`;
    removerPantallaInicio();
    const recomendarElegir = document.createElement("h3");
    recomendarElegir.innerHTML = `Elige uno para comenzar a jugar!`;
    recomendarElegir.className = "centrarElemento";
    elementosDeJuego.prepend(recomendarElegir);

    bloquearFraseInicial = false;
  }
};
//EVENTO ENVIAR DE FORMULARIO
saludoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  nombreUsuario = inputNombreFormulario.value;
  apellidoUsuario = inputApellidoFormulario.value;
  localStorage.setItem("nombreUsuario", inputNombreFormulario.value);
  localStorage.setItem("apellidoUsuario", inputApellidoFormulario.value);
  ocultarForm();

  const nombreFormulario = e.target.children[0].value;
  const apellidoFormulario = e.target.children[1].value;

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
      removerPantallaInicio();
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

//BASE DE DATOS INICIAL DE JUGADORES

let todos = [];
const jugadoresExcepcionales = [
  { nombre: "Luis", ganadas: 20, perdidas: 3, empates: 1 },
  { nombre: "Julian", ganadas: 18, perdidas: 2, empates: 1 },
  { nombre: "Pedro", ganadas: 15, perdidas: 0, empates: 7 },
];
const baseDatosHistorial = "/json/jugadores.json";

//VARIABLES GLOBALES NECESARIAS PARA INTERFAZ

let ganada = 0;
let perdida = 0;
let empatada = 0;
let jugamos = 1;
let eleccion;
let CPU;
let eleccionCompu;
let UsuarioElige;
let usarBoton = true;

//FUNCIONES PARA LA INTERFAZ DE JUEGO
const suma = (m) => {
  return (m += 1);
};

borrarHisotorial = () => {
  const historial = document.querySelector(".historial");
  historial.innerHTML = "";
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
  const resultadoJuego = document.getElementById("resultadoJuego");
  resultadoJuego.innerHTML = "";
  const empecemos = document.getElementById("grito-inicio");
  empecemos.innerHTML = "";
  const gritos = document.getElementById("grito-de-juego");
  gritos.innerHTML = "";
  const gritosNumeros = document.getElementById("grito-de-conteo");
  gritosNumeros.innerHTML = "";
};

//SI USUARIO JUEGA PIEDRA
const juegoPiedra = () => {
  borrarPuntuacionComienzoJuego();

  const resultadoJuego = document.getElementById("resultadoJuego");

  if (eleccionCompu === "papel") {
    perdida = suma(perdida);
    resultadoJuego.innerHTML =
      'Tu elegiste Piedra y yo elegi Papel ! Perdiste!  <audio src="../audio/perder.mp3" autoplay> </audio>';

    Swal.fire("PERDISTE!", "Tu elegiste Piedra y yo elegi Papel!", "error");
    bloquearJugada = false;
  } else if (eleccionCompu === "tijeras") {
    ganada = suma(ganada);
    resultadoJuego.innerHTML =
      'Tu elegiste Piedra y yo elegi Tijeras ! Ganaste!  <audio src="../audio/ganar.mp3" autoplay> </audio>';
    Swal.fire("GANASTE!", "Tu elegiste Piedra y yo elegi Tijeras!", "success");
    bloquearJugada = false;
  } else {
    empatada = suma(empatada);
    resultadoJuego.innerHTML =
      'Tu elegiste Piedra y yo elegi Piedra ! Empate! <audio src="../audio/empatar.mp3" autoplay> </audio>';

    Swal.fire("EMPATE!", "Tu elegiste Piedra y yo elegi Piedra!", "warning");
    bloquearJugada = false;
  }
};
//SI USUARIO JUEGA PAPEL

const juegoPapel = () => {
  borrarPuntuacionComienzoJuego();

  const resultadoJuego = document.getElementById("resultadoJuego");
  if (eleccionCompu === "papel") {
    empatada = suma(empatada);

    resultadoJuego.innerHTML =
      'Tu elegiste Papel y yo elegi Papel ! Empate! <audio src="audio/empatar.mp3" autoplay> </audio>';
    Swal.fire("EMPATE!", "Tu elegiste Papel y yo elegi Papel!", "warning");
    bloquearJugada = false;
  } else if (eleccionCompu === "tijeras") {
    perdida = suma(perdida);

    resultadoJuego.innerHTML =
      'Tu elegiste Papel y yo elegi Tijeras ! Perdiste! <audio src="audio/perder.mp3" autoplay>';
    Swal.fire("PERDISTE!", "Tu elegiste Papel y yo elegi Tijeras!", "error");
    bloquearJugada = false;
  } else {
    ganada = suma(ganada);

    resultadoJuego.innerHTML =
      'Tu elegiste Papel y yo elegi Piedra ! Ganaste! <audio src="audio/ganar.mp3" autoplay> </audio>';
    Swal.fire("GANASTE!", "Tu elegiste Papel y yo elegi Piedra!", "success");
    bloquearJugada = false;
  }
};

///SI USUARIO JUEGA TIJERAS

const juegoTijeras = () => {
  borrarPuntuacionComienzoJuego();

  const resultadoJuego = document.getElementById("resultadoJuego");
  if (eleccionCompu === "papel") {
    ganada = suma(ganada);
    resultadoJuego.innerHTML =
      'Tu elegiste Tijeras y yo elegi Papel ! Ganaste! <audio src="../audio/ganar.mp3" autoplay> </audio>';
    Swal.fire("GANASTE!", "Tu elegiste Tijeras y yo elegi Papel!", "success");
    bloquearJugada = false;
  } else if (eleccionCompu === "tijeras") {
    empatada = suma(empatada);
    resultadoJuego.innerHTML =
      'Tu elegiste Tijeras y yo elegi Tijeras ! Empate! <audio src="../audio/empatar.mp3" autoplay> </audio>';
    Swal.fire("EMPATE!", "Tu elegiste Tijeras y yo elegi Tijeras!", "warning");
    bloquearJugada = false;
  } else {
    perdida = suma(perdida);
    resultadoJuego.innerHTML =
      'Tu elegiste Tijeras y yo elegi Piedra ! Perdiste! <audio src="../audio/perder.mp3" autoplay>';
    Swal.fire("PERDISTE!", "Tu elegiste Tijeras y yo elegi Piedra!", "error");
    bloquearJugada = false;
  }
};

//BOTON VER RANKING CON FETCH

const rankeo = document.getElementById("rankeo");

rankeo.addEventListener("click", () => {
  fetch(baseDatosHistorial)
    .then((response) => {
      return response.json();
    })
    .then((pokeball) => {
      todos = jugadoresExcepcionales.concat(pokeball);

      const jugadoresMasGanadores = todos.filter(
        (player) => player.ganadas > 12
      );

      const jugadoresPremiados = jugadoresMasGanadores.map((premios) => ({
        ...premios,
        medalla: "Oro",
      }));

      const resultadoJuego = document.getElementById("resultadoJuego");
      resultadoJuego.innerHTML = `Los jugadores mas ganadores son: </br>
    1. ${jugadoresPremiados[0].nombre} con ${jugadoresPremiados[0].ganadas} partidas ganadas, </br>
    2. ${jugadoresPremiados[1].nombre} con ${jugadoresPremiados[1].ganadas} partidas ganadas,</br>
    3. ${jugadoresPremiados[2].nombre} con ${jugadoresPremiados[2].ganadas} partidas ganadas. </br>
    `;

      if (!!datosPartida && !!todos && bloquearImpresionRanking) {
        todos.push(datosPartida);
        const historial = document.querySelector(".historial");

        const tituloRankeo = document.createElement("h3");
        tituloRankeo.innerHTML = `Todo el historial:`;
        historial.append(tituloRankeo);

        for (const jugador of todos) {
          const rankingTotal = document.createElement("h4");
          rankingTotal.innerHTML = `
          ${jugador.nombre}  ganadas: ${jugador.ganadas}`;
          historial.append(rankingTotal);
        }

        bloquearImpresionRanking = false;
      } else if (bloquearImpresionRanking) {
        const historial = document.querySelector(".historial");

        const tituloRankeo = document.createElement("h3");
        tituloRankeo.innerHTML = `Todo el historial:`;
        historial.append(tituloRankeo);

        for (const jugador of todos) {
          const rankingTotal = document.createElement("h4");
          rankingTotal.innerHTML = `
          ${jugador.nombre}  ganadas: ${jugador.ganadas}`;
          historial.append(rankingTotal);
        }
        bloquearImpresionRanking = false;
      }
    });
});

//INTERFAZ DE JUEGO//

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

//FUNCIONES PARA RESETEO DE ELECCION USUARIO
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

//BOTONES PARA REINICIA JUEGO SEGUN ELECCION USUARIO

const botonResetearPiedra = () => {
  const reiniciarJuego = document.getElementById("nuevoJuego");

  reiniciarJuego.classList.remove("oculto");
  reiniciarJuego.onclick = () => {
    if ((CPU = 1)) {
      reiniciarPiedraUsuario();
      resetearEleccionCPU();
      reiniciarGritoDeResultado();
      borrarHisotorial();
      usarBoton = true;
      bloquearJugada = true;
      bloquearImpresionRanking = true;
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
      borrarHisotorial();
      usarBoton = true;
      bloquearJugada = true;
      bloquearImpresionRanking = true;
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
      borrarHisotorial();
      usarBoton = true;
      bloquearJugada = true;
      bloquearImpresionRanking = true;
    }
  };
};

//MANIPULANDO EN EL DOM EL ELEMENTO ELEGIDO

eleccionPiedra.addEventListener("click", () => {
  if (usarBoton) {
    soloMostrarPiedra();
    botonResetearPiedra();
    azarCompu();
    ocultarJugamos();
    juegoPiedra(eleccionCompu);
  }
});

eleccionPapel.addEventListener("click", () => {
  if (usarBoton) {
    soloMostrarPapel();
    botonResetearPapel();
    azarCompu();
    ocultarJugamos();
    juegoPapel(eleccionCompu);
  }
});

eleccionTijeras.addEventListener("click", () => {
  if (usarBoton) {
    soloMostrarTijeras();
    botonResetearTijeras();
    azarCompu();
    ocultarJugamos();
    juegoTijeras(eleccionCompu);
  }
});

//FUNCION REINICIAR PAGINA LUEGO DE SALIR

reiniciarLuegoDeSalir = () => {
  const reiniciarJuego = document.getElementById("nuevoJuego");
  reiniciarJuego.classList.remove("oculto");
  reiniciarJuego.onclick = () => {
    bloquearImpresionRanking = true;
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
    borrarHisotorial();
    usarBoton = true;
    bloquearFraseFinal = true;
    bloquearJugada = true;
  };
};

///USUARIO ELECION SALIR
const terminarJuego = document.getElementById("terminarJuego");

terminarJuego.addEventListener("click", () => {
  bloquearImpresionRanking = true;
  const saludoForm = document.getElementById("formularioNombre");
  ocultarJugamos();
  const nombreFormulario = saludoForm[0].value;
  const apellidoFormulario = saludoForm[1].value;
  const resultadoJuego = document.getElementById("resultadoJuego");
  const historial = document.querySelector(".historial");
  historial.innerHTML = "";
  !!nombreUsuario && !!apellidoUsuario
    ? (resultadoJuego.innerHTML = `Entiendo ${nombreUsuario} ${apellidoUsuario}, será en otro momento. Adios!`)
    : (resultadoJuego.innerHTML = `Entiendo ${nombreFormulario} ${apellidoFormulario}, será en otro momento. Adios!`);

  reiniciarLuegoDeSalir();
  if (bloquearFraseFinal) {
    ////CONSTRUCTOR DE PARTIDAS

    class Usuario {
      constructor(nombre, apellido, ganada, perdida, empatada) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.ganadas = ganada;
        this.perdida = perdida;
        this.empatada = empatada;
      }

      mostrar() {
        const resultado = document.getElementById("Resultados");
        resultado.classList.remove("oculto");
        resultado.innerHTML = `${nombreUsuario} ${apellidoUsuario} tu resultado final de hoy fue: Partidas ganadas: ${ganada}, Partidas perdidas: ${perdida}, Partidas empatadas: ${empatada}. 
          
                ¡Juega de nuevo y mejora tu puntuacion!`;
      }
    }

    const usuarioNuevo = new Usuario(
      nombreUsuario,
      apellidoUsuario,
      ganada,
      perdida,
      empatada
    );

    localStorage.setItem("jugadorExistente", JSON.stringify(usuarioNuevo));

    usuarioNuevo.mostrar();

    bloquearFraseFinal = false;
  }
});
