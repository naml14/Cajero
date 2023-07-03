import {
  $button,
  $funciones,
  $ingresarMonto,
  $saldo,
  $span,
  $span2,
  $cuentas,
  cuentas,
  d,
} from "../cajero.js";

export const moverSaldo = (cuenta, monto, cuentaDestino) => {
  const nombre = cuentas.filter((name) => name.nombre === cuenta.nombre);
  const nombreDestino = cuentas.filter((name) => name.nombre === cuentaDestino.value);

  if (monto.value.length > 0 && monto.value > 0) {
    let movimiento = nombre[0].saldo - monto.value;
    if (movimiento > 0) {
      if (nombreDestino[0].nombre != "") {
        if (nombre[0].nombre !== nombreDestino[0].nombre) {
          nombre[0].saldo -= parseInt(monto.value);
          nombreDestino[0].saldo += parseInt(monto.value);
          $funciones.appendChild($saldo).textContent = `Su nuevo saldo es ${nombre[0].saldo} y se ha movido ${monto.value} a la cuenta de ${nombreDestino[0].nombre}`;
          $saldo.classList.add("exito");
          $saldo.classList.remove("error");
          monto.value = "";
        } else {
          $funciones.appendChild($saldo).textContent = `No puede mover dinero hacia la misma cuenta`;
          $saldo.classList.add("error");
          $saldo.classList.remove("exito");
          monto.value = "";
        }
      } else {
        $funciones.appendChild($saldo).textContent = `Debe seleccionar una cuenta`;
        $saldo.classList.add("error");
        $saldo.classList.remove("exito");
        monto.value = "";
      }

    } else {
      $funciones.appendChild($saldo).textContent = `su saldo es ${nombre[0].saldo} y esta intentando mover ${monto.value}`;
      $saldo.classList.add("error");
      $saldo.classList.remove("exito");
      monto.value = "";
    }
  } else {
    $funciones.appendChild(
      $saldo
    ).textContent = `Debe ingresar valores mayores a 0$`;
    $saldo.classList.add("error");
    $saldo.classList.remove("exito");
    monto.value = "";
  }
};

export const moverVisual = () => {
  while ($funciones.firstChild) {
    $funciones.removeChild($funciones.firstChild);
  }
  $button.innerText = "Mover";
  $button.classList.add("btn");
  $button.setAttribute("id", "mover");
  $span.innerText = "Ingrese el monto a Mover";
  $ingresarMonto.setAttribute("type", "number");
  $ingresarMonto.setAttribute("id", "monto");
  $span2.innerText = "Seleccione la cuenta";
  $funciones.appendChild($span);
  $funciones.appendChild($ingresarMonto);
  $funciones.appendChild($span2);
  $funciones.appendChild($cuentas);
  $funciones.appendChild($button);
};