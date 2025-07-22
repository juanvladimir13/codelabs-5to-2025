// function para sumar, restar, multiplicar, dividir
// los numeros sean mayor > 0
// si no son los numeros mayor a 0
// retornar el valor de -1

function sumar(numX: number, numY: number): number {
  if (numX > 0 && numY > 0) {
    //return numX + numY;
    const res = numX + numY;
    return res;
  }
  return -1;
}

const resSuma = sumar(8, 9);
console.log(resSuma);
