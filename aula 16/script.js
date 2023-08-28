// repita enquanto;
let login;
let senha;
let repetir = false;

do { 
    login = prompt("Digite seu login:");
    senha = prompt("Digite sua senha:");
    
    logado = login == 'Joaquim' && senha == '123456';
    if (!logado) {
        repetir = confirm('Login inválido, quer tentar novamente?')
    } else {
        alert('Logado!');
    }

} while (!logado && repetir);
