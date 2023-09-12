
//selecionar pela tag
// let img = document.getElementsByTagName('img')[0];

//selecionar pela classe
//let img = document.getElementsByClassName('loading')[0];

// selecionar elemento pelo ID
let img = document.getElementById('img_load');

//selecionar por query
// let img = document.querySelector('img[src="load.png"]');
//selecionar por query
// let img = document.querySelectorAll('img[src="load.png"]');

let grau = 0;
function girar() {
    grau++;
    if (grau >= 360) {
        grau = 0;
    }
    img.style.transform = `rotate(${grau}deg)`;
    setTimeout(girar,10)
}
console.log(img);