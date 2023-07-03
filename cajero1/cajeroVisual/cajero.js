import { crearData} from "./crearData.js";
import { crearUsuario, createUser } from "./cuentas.js";
import { login } from "./login.js";
import { logout } from "./logout.js";

export const d = document,
  $mostrar = d.querySelector(".hiden"),
  $menu = d.getElementById("menu"),
  $usuario = d.getElementById("usuario"),
  $cuentas = d.getElementById("cuentas"),
  $logout = d.querySelector(".logout"),
  $pass = d.getElementById("password"),
  $saldo = d.createElement("span"),
  $ingresarMonto = d.createElement("input"),
  $funciones = d.getElementById("funciones"),
  $button = d.createElement("button"),
  $span = d.createElement("span"),
  $form = d.getElementById("usuarios"),
  $modal = d.querySelector(".usuario"),
  $crearUsuario = d.getElementById("formCrearUsuario"),
  $modalCrearUsuario = d.getElementById("newUser"),
  $select = d.createElement("select"),
  $texto = d.createElement("span"),
  $option = d.createElement("option")


  crearUsuario.consultar().forEach((element) => {
  const $option = document.createElement("option");

  $cuentas.appendChild($option).innerHTML = `${element.nombre}`;
  $option.value = element.nombre;
});



d.addEventListener("DOMContentLoaded", () => {
  crearData($form);
  login();
  logout($logout);
  createUser($crearUsuario)
});
