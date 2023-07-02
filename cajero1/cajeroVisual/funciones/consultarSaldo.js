import { $funciones, $saldo} from "../cajero.js";

export const consultarSaldo = (cuenta) => {
  while ($funciones.firstChild) {
    $funciones.removeChild($funciones.firstChild);
  }

  $saldo.classList.remove("error");
  $saldo.classList.add("exito");
  $funciones.appendChild($saldo).textContent = `Su saldo es ${cuenta.saldo}`;
  
};
