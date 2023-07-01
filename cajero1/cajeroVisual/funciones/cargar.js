import {
  $button,
  $funciones,
  $ingresarMonto,
  $saldo,
  $span,
  cuentas,
} from "../cajero.js";

export const ingresarMonto = (cuenta, monto) => {
  const nombre = cuentas.filter((name) => name.nombre === cuenta.nombre);

  if (monto.value.length > 0 && monto.value > 0) {
    const suma = nombre[0].saldo + parseInt(monto.value);
    console.log(suma);

    if (suma <= 990) {
      nombre[0].saldo += parseInt(monto.value);
      monto.value = "";
      $funciones.appendChild(
        $saldo
      ).textContent = `Su nuevo saldo es ${nombre[0].saldo}`;
      $saldo.classList.add("exito");
      $saldo.classList.remove("error");
    } else {
      $funciones.appendChild(
        $saldo
      ).textContent = `Su cuenta no debe tener mas de 990$, su saldo es ${nombre[0].saldo} y esta intentando cargar ${monto.value}`;
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

export const cargarVisual = () => {
  while ($funciones.firstChild) {
    $funciones.removeChild($funciones.firstChild);
  }
  console.log("visuall");

  $button.innerText = "Cargar";
  $button.classList.add("btn");
  $button.setAttribute("id", "cargar");
  $span.innerText = "Ingrese el monto a Cargar";
  $ingresarMonto.setAttribute("type", "number");
  $ingresarMonto.setAttribute("id", "monto");
  $funciones.appendChild($span);
  $funciones.appendChild($ingresarMonto);
  $funciones.appendChild($button);
};
