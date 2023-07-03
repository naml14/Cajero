import { $funciones, $menu, $usuario, $cuentas } from "./cajero.js";

export const logout = ($logout) => {
  $logout.addEventListener("click", () => {
    while ($funciones.firstChild) {
      $funciones.removeChild($funciones.firstChild);
    }
    $menu.classList.remove("ocultar");
    $usuario.classList.add("ocultar");
    $usuario.classList.remove("mostrar");
    $logout.classList.remove("mostrar");
    console.log(document.getElementsByTagName("label")[0].childNodes.length);
    if (document.getElementsByTagName("label")[0].childNodes.length===2) {
      document.getElementsByTagName("label")[0].appendChild($cuentas);
    }
  });
};
