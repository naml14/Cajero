var cuentas = [
    { nombre: "Mali", saldo: 200, pass: "Malinali2211"},
    { nombre: "Gera", saldo: 290, pass: "gerardO034"},
    { nombre: "Maui", saldo: 67, pass: "Mau1-2"}
  ];

//Prueba de la función ValidarPass

let pass=prompt("Favor ingrese la contraseña")

let access=ValidarPass(pass,cuentas[0].pass)

if (access) {
    alert("Contraseña correcta")
} else {
    alert("Contraseña errada")
}
//Fin de prueba

function ValidarPass(UserPass, SavePass) {
    if (UserPass===SavePass) {
        return 1
    } else {
        return 0
    }
}
