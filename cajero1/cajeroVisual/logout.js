import { $funciones, $menu, $usuario } from "./cajero.js";

export const logout = ($logout) => {
  $logout.addEventListener("click", () => {
    while ($funciones.firstChild) {
      $funciones.removeChild($funciones.firstChild);
    }

    $menu.classList.remove("ocultar");
    $usuario.classList.add("ocultar");
    $usuario.classList.remove("mostrar");
    $logout.classList.remove("mostrar");
  });
};
