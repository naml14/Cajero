var cuentas = [
    { nombre: "Mali", saldo: 200, pass: "Malinali2211"},
    { nombre: "Gera", saldo: 290, pass: "gerardO034"},
    { nombre: "Maui", saldo: 67, pass: "Mau1-2"}
  ];
const user = document.getElementById("user");
const pass = document.getElementById("pass");

function ValidarPass(UserPass, User) {
    if (UserPass===User.pass) {
        return 1 //Contraseña correcta
    } else {
        return 0 //Contraseña erronea
    }
}

let ingreso=(user.value, pass.value, cuentas)=>{
    let userOk;
    let passOk;
    userOk=BuscarUsuario(user.value, cuentas);
    if(userOk!=0){
        passOk=ValidarPass(pass.value, userOk);
    } else{
        return 0;
    }
    if(passOk==1){
        return 1;
    } else{
        return 0;
    }
}

function retirarSaldo(nombreSeleccionado, saldoARetirar) {

    for (var i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre === nombreSeleccionado) {

            if (cuentas[i].saldo < saldoARetirar) {
                return false;
            }
            else {
                cuentas[i].saldo = cuentas[i].saldo - saldoARetirar;
                return true;
            }
        }
    }
    

}

function BuscarUsuario(usuarioIngresado, ArrayUsers){
    let validador=0;
    for(let i=0;i<ArrayUsers.length;i++){
        if(usuarioIngresado===ArrayUsers[i].nombre){
            validador=ArrayUsers[i];
        } else{
            validador=0;
        }
    }
    return validador
}

if(ingreso){
    alert("Acceso Correcto");
    //actualización de la página a las operaciones a realizar
} else{
    alert("Usuario o contraseña incorrectos");
}
