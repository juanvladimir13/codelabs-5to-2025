function hayConvivencia(): void {
  const seComportanBien = true;
  const lleganTemprano = true;
  const tienenBuenasCalificaciones = false;

  if (
    seComportanBien &&
    (lleganTemprano && tienenBuenasCalificaciones)
  ) {
    console.log("hay churrasco ...");

    console.log("hay juegos ...");
  }
}

hayConvivencia();
