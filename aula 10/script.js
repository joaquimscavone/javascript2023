//condições logicas

const usuario = prompt("digite seu usuário:")
const userpadrao = 'Joaquim';
const senha = prompt('digite sua senha');
const senhapadrao = '123456';

let msg = 'Usuário não encontrado';
//se
if (usuario == 'root' && senha == 'root') { 
    msg = `Usuário "${usuario}" logado!`
} 
else if (usuario != userpadrao) {
    msg = `Usuário "${usuario}" inválido!`
} else if(senha != senhapadrao){ // se não se
    msg = `Senha inválida`;
}
else { //se não
     msg = `Usuário "${usuario}" logado!`
}




alert(msg);