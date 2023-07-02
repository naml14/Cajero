import { $mostrar, d } from "./cajero.js";

export let search = "";

export const crearData = ($form) => {
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));

    if (data.nombre.length === 0) {
      console.log("Debe Seleccionar un usuario");
    } else {
      search = data.nombre;
      $mostrar.classList.add("mostrar");
      d.getElementById(
        "name"
      ).textContent = `Ingrese su password ${data.nombre}`;
    }
  });
};
