//para for

const base = parseInt(prompt("Digite a base"));
const potencia = parseInt(prompt("Digite a potência"));
//3^2
let resultado = 1;

for (let cont = 1; cont <=potencia; cont++){
    resultado *= base;
}

console.log(`A potenciação de ${base} elevado a ${potencia} é igual a ${resultado}.`);