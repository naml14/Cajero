import { $logout, $menu, $modal, $mostrar, $pass, $usuario, d } from "./cajero.js";

export const verificaUsuario = (cuenta, e) => {

    if ($pass.value === cuenta.password) {
        $modal.appendChild(
          d.createElement("span")
        ).textContent = `Contraseña Correcta`;
        e.target.disabled = true;

        const modal = setInterval(() => {
          var nodoHijo = $modal.lastChild;
          $modal.removeChild(nodoHijo);
          $mostrar.classList.remove("mostrar");
          $menu.classList.add("ocultar");
          $usuario.classList.add("mostrar");
          $usuario.classList.remove("ocultar");
          $pass.value = "";
          e.target.disabled = false;
          clearInterval(modal);
        }, 1000);

        $logout.classList.add("mostrar");
        d.getElementById(
          "names"
        ).textContent = `Bienvenid@ ${cuenta.nombre}`;
      } else if ($pass.value.length <= 0) {
        $modal.appendChild(
          d.createElement("span")
        ).textContent = `La contraseña no debe estar vacia`;
        e.target.disabled = true;
        const id = setInterval(() => {
          var nodoHijo = $modal.lastChild;
          console.log(nodoHijo);
          $modal.removeChild(nodoHijo);
          e.target.disabled = false;
          clearInterval(id);
        }, 1000);
      } else {
        $modal.appendChild(
          d.createElement("span")
        ).textContent = `Contraseña Incorrecta`;
        e.target.disabled = true;

        const id = setInterval(() => {
          var nodoHijo = $modal.lastChild;
          $modal.removeChild(nodoHijo);
          clearInterval(id);
          $mostrar.classList.remove("mostrar");
          $pass.value = "";
          e.target.disabled = false;
        }, 1000);
      }
}