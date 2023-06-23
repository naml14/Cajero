/*
Movimiento entre cuentas.

1 - Funcion debe recibir el nombre de la cuenta a la que se va a realizar el movimiento,
    la cantidad a mover y el saldo actual de usuario.

2 - Funcion debe verificar si el monto a mover puede efectuarse según el saldo.

3 - Funcion debe verificar si existe la cuenta a la que se va a mover el monto.

4 - función debe devolver:
    a - Sí tuvo éxito al mover el monto y el nuevo saldo del usuario.
	b - Si no se pudo hacer el movimiento de dinero debido a la falta de saldo.
	c - si no se pudo hacer el movimiento de dinero debido a que no existe la cuenta de destino.
*/



//                    Movimiento entre cuentas.                    //
// ----------------------------------------------------------------//
let cuentaDestino;
let cantidad;
let saldoActual;

// cuentaDestino, cantidad, saldoActual
function movimientoEntreCuentas(cuentaDestino, cantidad, saldoActual) {
  // Cuentas existentes
  let nombreCuentas = ["cuenta1", "cuenta2", "cuenta3"];

  // Verificar si el monto a mover puede efectuarse según el saldo
  if (cantidad <= saldoActual) {
    // Verificar si la cuenta de destino existe
    if (nombreCuentas.includes(cuentaDestino)) {
      let nuevoSaldo = saldoActual - cantidad;

      // Éxito al mover el monto. Devolver nuevo saldo
      return (
        "Se realizó el movimiento exitosamente. Nuevo saldo: " + nuevoSaldo
      );
    } else {
      // No se pudo hacer el movimiento debido a la falta de saldo
      return "No se pudo realizar el movimiento. Saldo insuficiente. ";
    }
  } else {
    // No se pudo hacer el movimiento debido a que no existe la cuenta de destino
    return "No se pudo realizar el movimiento. La cuenta de destino no existe.";
  }
}

// -----------------------------//----------------------------------//