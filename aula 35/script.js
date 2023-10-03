//ECMAScrpit vs TypeScript

let pessoa = {
    nome: 'Joaquim',
    cpf: '111.111.111-11',
    nascimento: new Date(1990, 12, 25),
    alterarNome: function (novonome) {
        this.nome = novonome;
    },
    idade: function () {
        const hoje = new Date();
        //junho e janeiro
        let anos = hoje.getFullYear() - this.nascimento.getFullYear();
        const mes = hoje.getMonth() - this.nascimento.getMonth();
        if (mes < 0 || (mes === 0 && hoje.getDate() < this.nascimento.getDate())) {
            anos--;
        }
        return anos;
    }
    
};
pessoa.cpf = '111.111.111-22'
pessoa.alterarNome(pessoa.nome+' Scavone')

console.log(pessoa.idade());
