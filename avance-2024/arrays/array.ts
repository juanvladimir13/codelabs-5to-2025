// Ejercicio 1. Buscar un estudiante y mostrar si esta Aprobado o Reprobado
const notas: number[] = [51, 95, 100, 42, 36, 85];
const estudiantes: string[] = [
  "Erick",
  "Ruth",
  "Maria",
  "Ana",
  "Maria",
  "Pedro",
];

function buscarNotaEstudiante(nombre: string): string {
  let mensaje: string = "No encontrado";
  for (let index = 0; index < 6; index++) {
    if (estudiantes[index] == nombre) {
      mensaje = notas[index] < 51 ? "Reprobado: " : "Aprobado: ";
      mensaje += estudiantes[index];
    }
  }
  return mensaje;
}

const mensaje = buscarNotaEstudiante("Maria");
console.log(mensaje);

/* Ejercicio 2. Calcular el promedio de las notas trimestrales
y mostrar la sumatoria de las notas y el promedio de las notas trimestrales */
const notasTrimestrales: number[] = [45, 51, 70];
let sumatoria = 0;
for (let index: number = 0; index < 3; index++) {
  sumatoria = sumatoria + notasTrimestrales[index];
  console.log(index, notasTrimestrales[index]);
}

console.log("Sumatoria: " + sumatoria);
const promedio: number = sumatoria / 3;
console.log("Promedio: " + promedio);
