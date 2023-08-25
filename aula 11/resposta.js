const usuario = prompt("digite seu usuário:")
const userpadrao = 'Joaquim';
const senha = prompt('digite sua senha');
const senhapadrao = '123456';

let msg = "";
let flag = '';

if (usuario != userpadrao) {
    msg = 'Usuário inválido'
    flag = ' e ';
}

if (senha != senhapadrao) {
    msg += flag + "senha inválida";
    flag = ' e '
}


if (flag == '') {
    msg = "Usuário Logado!"
}

alert(msg);