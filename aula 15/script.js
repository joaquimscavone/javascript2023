//equanto while()
let resposta = true;
let senha = 0;
while (resposta && senha < 4) { // true
    //0//1//2//3//4
    alert(`Senha Nº ${++senha}`);
    resposta = confirm("Quer chamar a próxima senha?")
}