function mudarCor(element, cor = ''){
    element.style.backgroundColor = cor;
}

function block(block = true) {
    const cx = document.getElementsByClassName('block')[0];
    cx.style.display = (block) ? 'block' : 'none';
}


function mover(event) {
    const cord = document.getElementById('cord');
    cord.textContent = `${event.x},${event.y}`;
    const bola = document.querySelector('.bola');
    bola.style.top = (event.y-100)+'px';
    bola.style.left = (event.x-100)+'px';
}