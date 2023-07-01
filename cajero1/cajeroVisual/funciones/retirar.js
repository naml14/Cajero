import {
  $button,
  $funciones,
  $ingresarMonto,
  $saldo,
  $span,
  cuentas,
  d,
} from "../cajero.js";

export const retirarMonto = (cuenta, monto) => {
  const nombre = cuentas.filter((name) => name.nombre === cuenta.nombre);

  if (monto.value.length > 0 && monto.value > 0) {
    const resta = nombre[0].saldo - parseInt(monto.value);

    if (resta >= 10) {
      nombre[0].saldo -= parseInt(monto.value);
      monto.value = "";
      $funciones.appendChild(
        $saldo
      ).textContent = `Su nuevo saldo es ${nombre[0].saldo}`;
      $saldo.classList.add("exito");
      $saldo.classList.remove("error");
    } else {
      $funciones.appendChild(
        $saldo
      ).textContent = `Su cuenta no debe tener menos de 10$, su saldo es ${nombre[0].saldo} y esta intentando retirar ${monto.value}`;
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

export const retirarVisual = () => {
  while ($funciones.firstChild) {
    $funciones.removeChild($funciones.firstChild);
  }

  $button.innerText = "Retirar";
  $button.classList.add("btn");
  $button.setAttribute("id", "retirar");
  $span.innerText = "Ingrese el monto a retirar";
  $ingresarMonto.setAttribute("type", "number");
  $ingresarMonto.setAttribute("id", "monto");
  $funciones.appendChild($span);
  $funciones.appendChild($ingresarMonto);
  $funciones.appendChild($button);
};
