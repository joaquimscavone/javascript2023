//nativas
// console.log('oi');
// confirm('oi');

function echo(msg = 'Mensagem em branco!', tipo='log') {
    switch (tipo) {
        case 'alert': alert(msg);
            break;
        case 'confirm':
        case 'confirme':
            confirm(msg);
            break
        case 'prompt':
        case 'leia':
            prompt(msg);
            break;
        default:
            console.log(msg);
    }   
}

// echo('oi','leia');


function calc(n1, n2, operador = '+') {
    switch (operador) {
        case '+':
            return n1 + n2;
            break;
        case '-':
            return n1 - n2;
            break;
        case '*':
            return n1 * n2;
            break;
        case '/':
            return n1 / n2;
            break;
        default:
            console.log('Operação inválida');
            return undefined;
    }
}

console.log(calc(14, 7,'/'));