let login = document.getElementById('login');
let senha = document.querySelector('input[name="senha"]');
let h1 = document.getElementsByTagName('h1')[0];



function createAlert(msg, tipo = 'sucesso') {
    let h3 = document.createElement('h3');
    h3.classList.add('msg');
    let img = document.createElement('img');
    img.src = 'success.png';
    let text = document.createElement('div');
    text.textContent = msg;
    if (tipo == 'erro') {
        img.src = 'error.png';
        h3.classList.add('error');
    }

    h3.appendChild(img);
    h3.appendChild(text);//adiciona dentro do elemento
    // h1.insertAdjacentElement('beforebegin',h3); //adiciona antes do elemento
    h1.insertAdjacentElement('afterend', h3);//adiciona após o elemento

    setTimeout(function () {
        h3.remove();
    }, 5000);
    return h3;
}



function alertSucesso(text) {
    return createAlert(text)
}

function alertError(text) {
    return createAlert(text, 'erro')
}

function bloquearLogin(bloquear = true) {
    login.disabled = bloquear;
    senha.disabled = bloquear;
}


function logar() {

    login.style.borderColor = '';
    senha.style.borderColor = '';
    if (login.value == "") {
        login.style.borderColor = 'red';
    }
    if (senha.value == "") {
        senha.style.borderColor = 'red';
    }

    if (login.value == 'joaquim' && senha.value == '123456') {
        alertSucesso('Bem vindo Joaquim!');
    } else {
        alertError('Login Inválido');
    }

}