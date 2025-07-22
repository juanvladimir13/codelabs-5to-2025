function obtenerCantidadEstudiantesEspecialidad(especialidad: string): number {
  if (especialidad == "sistemas") {
    return 0;
  }

  if (especialidad == "gastronomia") {
    return 10;
  }

  return 0;
}

// proceso de inscripcion al BTH
function registrarEstudianteAEspecialidad(
  libretaTercero: boolean,
  documentosTutor: boolean,
  carrera: string,
): boolean {
  if (libretaTercero && documentosTutor) {
    // cantidad de cupos especialidad
    const cupos: number = obtenerCantidadEstudiantesEspecialidad(carrera);
    if (cupos > 0) {
      // registrar inscripcion
      return true;
    } else {
      // elige otra especialidad
      return false;
    }
  }
  return false;
  // firma compromiso
}

const inscrito = registrarEstudianteAEspecialidad(true, true, "sistemas");
console.log(inscrito);

// centro medico
// registrarPaciente
function registrarIngresoDePaciente(
  nombres: string,
  edad: number,
  carnet: string,
  tutor: string,
): string {
  if (carnet == "") {
    return "No puedes registrarte :-(";
  }

  if (edad < 18) {
    console.log("Tiene que tener un tutor");
    if (tutor == "") {
      console.log("Si o si con tutor");
      return "Error";
    } else {
      return "Paciente registrado";
    }
  } else {
    return "Paciente registrado sin tutor";
  }
}

const mensaje: string = registrarIngresoDePaciente("Ana", 18, "", "");
console.log(mensaje);
