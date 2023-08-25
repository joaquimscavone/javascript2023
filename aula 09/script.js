//condições logicas

const usuario = prompt("digite seu usuário:")
const userpadrao = 'Joaquim';
const senha = prompt('digite sua senha');
const senhapadrao = '123456';

let msg = 'Usuário não encontrado';
//se 
if (usuario == userpadrao && senha == senhapadrao) {
    msg = `Bem vindo ${usuario}!`;
}


alert(msg);