var cuentas = [
    { nombre: "Mali", saldo: 200, pass: "Malinali2211"}
    { nombre: "Gera", saldo: 290, pass: "gerardO034"}
    { nombre: "Maui", saldo: 67, pass: "Mau1-2"}
  ];

function ValidarPass(UserPass, SavePass) {
    if (UserPass===SavePass) {
        return 1
    } else {
        return 0
    }
}