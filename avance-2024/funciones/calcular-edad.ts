function calcularEdadDeEstudianteDeSecundaria(
  anioNacimientoDeEstudiante: number,
  anioActual: number,
): number {
  if (
    anioNacimientoDeEstudiante >= 1999 &&
    anioNacimientoDeEstudiante < 2011
  ) {
    const edad = anioActual - anioNacimientoDeEstudiante;
    return edad;
  } else {
    return -1;
  }
}

const edad = calcularEdadDeEstudianteDeSecundaria(2007, 2024);
console.log(edad);
