//fila o primeiro elemento a entrar na lista
// será o primeiro a sair

var fila = [];

//adicionar um novo item a minha fila
function filaAdd(nome) {
    fila.push(nome);
}

function filaProx() {
    return fila.shift();
}


//pilha o primeiro elemento a entrar será o último a sair
// ou seja o último a entrar será o primeiro a sair

var pilha = [];

//adicionar um novo item a minha pilha
function pilhaAdd(nome) {
    pilha.push(nome);
}

function pilhaProx() {
    return pilha.pop();
}

