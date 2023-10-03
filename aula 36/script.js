//ECMAScrpit vs TypeScript

// pessoa | funcionario | cliente

function Pessoa(nome,cpf,nascimento) {
    this.nome = nome;
    this.cpf = cpf;
    this.nascimento = nascimento;
    this.idade = function () {
        const hoje = new Date(); 
        return hoje.getFullYear() - this.nascimento.getFullYear();
    }
}

function Cliente(nome, cpf, nascimento, limite) {
    Pessoa.call(this, nome, cpf, nascimento)
    this.limite = limite;
    this.saldo = 0;
    this.sacar = function (valor) {
        if (this.saldo + this.limite >= valor) {
            this.saldo -= valor;
            console.log('Retire seu dinheiro');
        } else {
            console.log('Saldo insuficiente!');
        }
    }
    this.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log('Deposito realizado com sucesso!');
            return;
        }
        console.log('Erro de processamento de deposito!');
    }

    this.extrato = () =>
        console.log(`O saldo ${this.nome} é de ${this.saldo}`);

}
function Funcionario(nome, cpf, nascimento, salario) {
    Cliente.call(this, nome, cpf, nascimento,3000)
    this.salario = salario;
    this.pagamento = function(){
        this.depositar(this.salario);
    }
}

let joaquim = new Funcionario('Joaquim', '111.111.111-11',
    new Date(1983,9,8), 5000
)
let lucas = new Cliente('Lucas', '111.111.111-33',
    new Date(1999,3,18), 1000
)
joaquim.nome = 'Joaquim M. Scavone'
// console.log(joaquim.nome, joaquim.idade(), joaquim.salario)
// console.log(lucas.nome, lucas.idade())
joaquim.extrato()

joaquim.pagamento();
joaquim.sacar(500);
joaquim.sacar(800);
joaquim.extrato()


