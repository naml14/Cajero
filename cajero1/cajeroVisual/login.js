import {
  $logout,
  $menu,
  $modal,
  $modalCrearUsuario,
  $mostrar,
  $pass,
  $usuario,
  d,
} from "./cajero.js";
import { search } from "./crearData.js";
import { cargarVisual, ingresarMonto } from "./funciones/cargar.js";
import { consultarSaldo } from "./funciones/consultarSaldo.js";
import { retirarMonto, retirarVisual } from "./funciones/retirar.js";
import { crearUsuario } from "../cuentas.js";

export const login = () => {
  d.addEventListener("click", (e) => {
    const cuenta = crearUsuario.usuarios.filter((name) => name.nombre === search);

    if(e.target.matches("#create")){
      $modalCrearUsuario.classList.add("mostrar")
    }
    

    if (e.target.matches(".hiden")) {
      $mostrar.classList.remove("mostrar");
      $modalCrearUsuario.classList.remove("mostrar")
    }

    if (e.target.matches(".boton")) {
      console.log(e.target);
      if ($pass.value === cuenta[0].password) {
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
        ).textContent = `Bienvenido ${cuenta[0].nombre}`;
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

    if (e.target.matches("#saldo")) {
    //  consultarSaldo(cuenta[0]);
      crearUsuario.consultarSaldo(cuenta[0]);  
    }
    if (e.target.matches("#ingresarMonto")) {
      cargarVisual();
    }
    if (e.target.matches("#cargar")) {
      const $valor = d.getElementById("monto");
      ingresarMonto(cuenta[0], $valor);
    }
    if (e.target.matches("#retirarMonto")) {
      retirarVisual();
    }
    if (e.target.matches("#retirar")) {
      const $valor = d.getElementById("monto");
      retirarMonto(cuenta[0], $valor);
    } 
  });
};