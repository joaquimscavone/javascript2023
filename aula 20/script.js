// Crie um sistema de senhas para nosso consultório,
// ele deve ter três opções, Normal, Preferêcial
// e Retorno. Cada vez que o usuário chamar a função
// correspondete, ela deve adicionar uma novo número
//a senha chmada.
//Utilize seu conhecimento de Clousures para
//resolver o problema.
//

function senha(prefixo) {
    let cont = 0;
    let pre = prefixo;
    function increment() {
        return pre+(++cont)
    }

    return increment;
}

normal = senha('N');
preferencial = senha('P');
retorno = senha('R');