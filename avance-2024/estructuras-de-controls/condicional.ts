/* calcular la edad de un estudiante del BTH
preguntar el año de nacimiento al estudiante */

const anioNacimiento = 1975;

// Verificar que el año de nacimiento sea un dato valido
if (anioNacimiento >= 1999 && anioNacimiento < 2011) {
  // Obtener la año actual
  const anioActual = 2024;
  // Realizar la resta entre la año actual y el año de nacimiento del estudiante
  const edad = anioActual - anioNacimiento;
  console.log(edad);
} else {
  console.log("ERROR :-( ");
}
