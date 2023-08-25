//switch case

//'t'

const codigo = prompt('Digite o codigo do cargo:')
let cargo = '';
let nome = 'Joaquim';
switch (codigo) {
    case 'p':
        nome = 'Prof. ' + nome;
    case 'd':
        cargo = 'Professor';
        break;
    case 's':
       cargo = 'Servidor';
        break;
    case 'a':
        cargo = 'Aluno';
        break;
    case 'v':
        cargo = 'Vigilante';
        break;
    case 'm':
        cargo = 'Motorista';
        break;
    default: 
        cargo = 'Convidado';
        break;
}


alert(`Olá ${nome}, você é um ${cargo}`);