import { $button, $funciones, $ingresarMonto, $option, $saldo, $select, $span, $texto, d } from "../cajero.js";
import { clean, crearUsuario } from "../cuentas.js";




export const movimientoEntreCuentas = (cuentaDestino, cantidad, saldoActual) => {

    const cuentaTranferir = crearUsuario.consultar().filter(({nombre}) => nombre === cuentaDestino)
    const resta = saldoActual.saldo - parseInt(cantidad.value) 

 
    
     if(parseInt(cantidad.value)  > saldoActual.saldo || resta < 10){
      $funciones.appendChild(
        $saldo
      ).textContent = `Saldo insuficiente, recuerde que debe dejar como minimo 10$, su saldo actual es ${saldoActual.saldo}`;
      $saldo.classList.add("error");
      $saldo.classList.remove("exito");

    } else {
        cuentaTranferir[0].saldo += parseInt(cantidad.value)
        saldoActual.saldo = resta
        clean()
        $funciones.appendChild(
          $saldo
        ).textContent = `Transferencia exitosa su nuevo saldo es ${saldoActual.saldo}`;
        $saldo.classList.add("exito");
        $saldo.classList.remove("error");
    }     
}


export const tranferirVisual = (cuenta) => {
    while ($funciones.firstChild) {
        $funciones.removeChild($funciones.firstChild);
      }

    while ($select.firstChild){
        $select.removeChild($select.firstChild)
    }
    
      $option.setAttribute("value", "")
      $option.setAttribute("disabled", false)
      $option.setAttribute("selected", false)      
      $select.setAttribute("id", "nombre")
      $select.setAttribute("name", "nombre")
      $button.innerText = "Transferir";
      $button.classList.add("btn");
      $button.setAttribute("id", "transferir");
      $span.innerText = "Ingrese el monto a trasnferir";
      $texto.innerText = "Selecione la cuenta a trasnferir"
      $ingresarMonto.setAttribute("type", "number");
      $ingresarMonto.setAttribute("id", "monto");
      $funciones.appendChild($span);
      $funciones.appendChild($ingresarMonto);
      $funciones.appendChild($texto);
      $funciones.appendChild($select)
      $funciones.appendChild($button);
      $select.appendChild($option)
        


      crearUsuario.consultar().forEach((element) => {

        const $option = document.createElement("option");
        $option.setAttribute("id", element.nombre)             
        $select.appendChild($option).innerHTML = `${element.nombre}`;
        $option.value = element.nombre;
      })
        
        const nombre = d.getElementById(`${cuenta.nombre}`)
        $select.removeChild(nombre)
}