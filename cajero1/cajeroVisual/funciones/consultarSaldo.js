import { $funciones, $saldo } from "../cajero.js";

export const consultarSaldo = (saldo) => {
  while ($funciones.firstChild) {
    $funciones.removeChild($funciones.firstChild);
  }

  $saldo.classList.remove("error");
  $saldo.classList.add("exito");
  $funciones.appendChild($saldo).textContent = `Su saldo es ${saldo}`;
};
