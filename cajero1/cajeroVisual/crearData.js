import { $mostrar, $saldo, d} from "./cajero.js";

export let search = "";

export const crearData = ($form) => {
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    

    if (data.nombre.length === 0) {
      
      $form.appendChild(
        $saldo
      ).textContent = `Debe seleccionar un usuario`;
      $saldo.classList.add("error");
      $saldo.classList.remove("exito");
      $saldo.setAttribute("id", "error")
    } else {
      const $error = d.getElementById("error")
      $error && $form.removeChild($error)
      search = data.nombre;
      $mostrar.classList.add("mostrar");
      d.getElementById(
        "name"
      ).textContent = `Ingrese su password ${data.nombre}`;
    }
  });
};
