let frutas = ['abacaxi', 'pera', 'maça'];

//adicionar item no final da lista
frutas.push('abacate');
frutas.push('amora');
//remover um item do final da nossa lista;
// frutas.pop(); //retorna o elemento removido
//adiciona um elemento ao início da lista
frutas.unshift('pessego')
//remove um  elemento do início da lista
// let removido = frutas.shift();
//remove um elemento do meio da lista
// frutas.splice(2, 2)
console.log(frutas);
frutas.splice(2,0,'banana','uva')
//adiciona um elemento no meio da lista
console.log(frutas);