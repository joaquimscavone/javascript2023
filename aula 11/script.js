//condições logicas

const usuario = prompt("digite seu usuário:")
const userpadrao = 'Joaquim';
const senha = prompt('digite sua senha');
const senhapadrao = '123456';

let msg = 'Usuário não encontrado';
//se
if (usuario == userpadrao) {
    if (senha == senhapadrao) {
        msg = 'Usuário Logado!'
    } else {
        msg = 'Senha Inválida'
    }
} else {
    msg = 'Usuário Inválido'
}
alert(msg);