alert("Hola, Extraño.. Soy el Osito cariñoso!");

let nombre = prompt("Dime tu nombre");

let abrazos = Number(
  prompt(
    "Dime cuantos abrazos quieres y te los daré:) (No mas de 3 porque no termino nunca D: ) "
  )
);

if (abrazos !== 0) {
  for (let abrasitos = 1; abrasitos <= abrazos; abrasitos++) {
    alert(`${nombre} toma ${abrasitos} abrazitos`);
  }
} else {
  alert("QUE MAL EDUCADO");
}

alert("Mision cumplida! Hasta luego!");
