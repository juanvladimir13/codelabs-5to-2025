let sueldo = 3200;
let hacenTareas = true;

if (!(sueldo > 3200)) {
  console.log("SI");
}

function solicitarPedidoComida(
  nombreProducto: string,
  precio: number,
  cantidad: number,
  ubicacion: string,
  trasladoPagado: boolean,
  precioTraslado: number,
): number {
  let montoTotal = precio * cantidad;
  if (trasladoPagado) {
    montoTotal = montoTotal + precioTraslado;
  }
  return montoTotal;
}
const res1 = solicitarPedidoComida("Torta", 120, 2, "BTH", false, 7);
const res2 = solicitarPedidoComida("Pizza", 80, 4, "BTH", true, 7);
console.log(res1);
console.log(res2);
