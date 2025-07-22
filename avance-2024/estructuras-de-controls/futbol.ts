/*
Verificar si se cumple las condiciones para que haya partido de futbol
- Hay buen clima
- Hay suficientes jugadores del equipo visitante
- Hay árbitros suficientes
- La cancha está en condiciones

Si se cumplen todas las condiciones, imprimir "hay partido", "hay fiesta" y "hay barra"
Si no se cumple la condición de la cancha, imprimir "no hay partido"
*/

const hayBuenClima: boolean = true;
const cantidadDeJugadoresVistante: number = 8;
const hayArbitrosSuficientes: boolean = true;
const canchaEnCondiciones: boolean = true;

function hayPartidoCanchaEnCondiciones(): void {
  if (canchaEnCondiciones) {
    console.log("hay partido");
  } else {
    console.log("no hay partido");
  }
}

function hayPartidoSiToEstaOk(): void {
  if (
    (hayBuenClima && hayArbitrosSuficientes) &&
    (cantidadDeJugadoresVistante >= 8)
  ) {
    console.log("hay partido");
    console.log("hay fiesta");
    console.log("hay barra");
  } else {
    console.log("no hay partido");
  }
}
