let login = document.getElementById('login');
let senha = document.querySelector('input[name="senha"]');
let h1 = document.getElementsByTagName('h1')[0];



function createAlert(msg, tipo = 'sucesso') {
    const h3 = document.createElement('h3');
    h3.classList.add('msg');
    const img = document.createElement('img');
    img.src = 'success.png';
    const text = document.createElement('div');
    text.textContent = msg;
    if (tipo == 'erro') {
        img.src = 'error.png';
        h3.classList.add('error');
    }
    const close = document.createElement('span');
    close.classList.add('close');
    close.textContent = 'X';
    close.setAttribute('onclick', 'this.parentElement.remove()');
    h3.appendChild(img);
    h3.appendChild(text);//adiciona dentro do elemento
    // h1.insertAdjacentElement('beforebegin',h3); //adiciona antes do elemento
    h3.appendChild(close);
    h1.insertAdjacentElement('afterend', h3);//adiciona após o elemento
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

function mudarCor(elemento, cor = 'red') {
    if (elemento.getAttribute('cor') == cor){
        elemento.style.backgroundColor = '';
        elemento.setAttribute('cor','');
    } else {
        elemento.style.backgroundColor = cor;
        elemento.setAttribute('cor',cor);
    }
}