import { crearData, search } from "./crearData.js";
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
  $span2 = d.createElement("span"),
  $form = d.querySelector("form"),
  $modal = d.querySelector(".usuario");

export var cuentas = [
  { nombre: "Mali", saldo: 200, password: "123" },
  { nombre: "Gera", saldo: 290, password: "123" },
  { nombre: "Maui", saldo: 67, password: "123" },
];

cuentas.forEach((element) => {
  const $option = document.createElement("option");

  $cuentas.appendChild($option).innerHTML = `${element.nombre}`;
  $option.value = element.nombre;
});

d.addEventListener("DOMContentLoaded", () => {
  crearData($form);
  login();
  logout($logout);
});
