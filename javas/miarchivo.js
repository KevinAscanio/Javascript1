let nombre = prompt("Hola, Como te llamas?");

if (typeof nombre != "string" || nombre == " " || nombre == "") {
  nombre = prompt("No ingresaste un nombre valido. Intenta de nuevo.");
}

alert(`Hola ${nombre} vamos a jugar piedra, papel o tijeras.`);

let jugamos = true;

function contar() {
  alert("Okey aqui vamos.");
  alert("Piedra...");
  alert("Papel...");
  alert("O tijeras.");
  for (h = 1; h <= 3; h++) {
    alert(h);
  }
}

while (jugamos) {
  let opciones = Number(
    prompt(`Haz tu eleccion: 
    1.Piedra 
    2.Papel 
    3.Tijeras 
    4.No jugar`)
  );

  switch (opciones) {
    case 1:
      contar();
      alert(`Tu elegiste piedra y yo elegi papel jaja..Suerte la proxima.`);
      break;
    case 2:
      contar();
      alert(`Tu elegiste papel y yo elegi papel jaja..Empate.`);
      break;
    case 3:
      contar();
      alert(`Tu elegiste tijeras y yo elegi papel me ganaste :( `);
      break;
    case 4:
      alert(`Entiendo ${nombre}, será en otro momento. Adios!`);
      jugamos = false;
      break;
    default:
      alert("No elegiste un numero correcto, intenta de nuevo");
      break;
  }
}
