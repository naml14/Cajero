import {
  $modalCrearUsuario,
  $mostrar,
  d,
} from "./cajero.js";
import { search } from "./crearData.js";
import { cargarVisual, ingresarMonto } from "./funciones/cargar.js";
import { consultarSaldo } from "./funciones/consultarSaldo.js";
import { retirarMonto, retirarVisual } from "./funciones/retirar.js";
import { crearUsuario } from "../cuentas.js";
import { clean } from "./cuentas.js";
import { movimientoEntreCuentas, tranferirVisual } from "./funciones/transferir.js";
import { verificaUsuario } from "./verificarUsuario.js";

export const login = () => {
  d.addEventListener("click", (e) => {
    const cuenta = crearUsuario.usuarios.filter((name) => name.nombre === search);

    if(e.target.matches("#create")){
      $modalCrearUsuario.classList.add("mostrar")
    }   
    if (e.target.matches(".hiden")) {
      $mostrar.classList.remove("mostrar");
      $modalCrearUsuario.classList.remove("mostrar")
      clean()
    }
    if (e.target.matches(".boton")) {
      verificaUsuario(cuenta[0], e)
    }
    if (e.target.matches("#saldo")) {
      consultarSaldo(cuenta[0]);
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
    if(e.target.matches("#transferirDinero")){
      tranferirVisual(cuenta[0]);
    } 
    if (e.target.matches("#transferir")){
      const $cuentaTransferir = d.getElementById("nombre").value,
      $valor = d.getElementById("monto")
      movimientoEntreCuentas($cuentaTransferir, $valor, cuenta[0])
    }

  });
};
