const habraClases: boolean = false;
const hayBuenClima: boolean = false;

const habraConvivencia = habraClases && hayBuenClima;
console.log("Convivencia = ", habraConvivencia);

const esResponsable: boolean = false;
const noMiente: boolean = true;

const res = (esResponsable || noMiente) && (habraClases && hayBuenClima);
console.log("Permiso = ", res);
