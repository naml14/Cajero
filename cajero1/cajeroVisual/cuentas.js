import { $cuentas, d } from "./cajero.js"
import { consultarSaldo } from "./funciones/consultarSaldo.js"

class Cuentas{
    constructor(){
      this.usuarios = [ { nombre: "Mali", saldo: 200, password: "123" },
      { nombre: "Gera", saldo: 290, password: "123" },
      { nombre: "Maui", saldo: 67, password: "123" }]
    }
    agregarUsuario(nombre, saldo, password){
      this.usuarios.push({nombre, saldo, password})
    }
    consultar(){
      return this.usuarios
    }
    consultarSaldo(cuenta){
      consultarSaldo(cuenta)
    }
  }
  
  export const crearUsuario = new Cuentas  


 export const clean = () => {
    const $inputs = d.querySelectorAll("input")
    $inputs.forEach(element => {
      if(element.type === "text" || element.type === "password" || element.type === "number"){
        element.value = ""
      }
    })
  }
  

 export  const createUser = (form) =>{
    form.addEventListener("submit", (e) =>{
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target));

        const nombre = crearUsuario.consultar().filter(({nombre}) => nombre.toLocaleLowerCase() === data.nombre.toLocaleLowerCase())

        console.log(nombre.length);
        console.log(data.nombre);

        if(nombre.length === 0){
          crearUsuario.agregarUsuario(data.nombre, parseInt(data.saldo), data.password)
          clean()
        }else{
          console.log("existe en base");
        }

console.log(crearUsuario.consultar());
        
        while ($cuentas.firstChild) {
            $cuentas.removeChild($cuentas.firstChild);
          }

          const $option = document.createElement("option");
          $option.value = ""
          $cuentas.appendChild($option);

        crearUsuario.consultar().forEach((element) => {
            const $option = document.createElement("option");
          
            $cuentas.appendChild($option).innerHTML = `${element.nombre}`;
            $option.value = element.nombre;
          });
       
    })
  }