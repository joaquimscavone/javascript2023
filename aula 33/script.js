let pause = true;

const bola = document.querySelector('.bola');
const coordelement = document.getElementById('cord');
let x = bola.offsetLeft;
let y = bola.offsetTop;
block();
coord(x,y);
function mudarCor(element, cor = '') {
    element.style.backgroundColor = cor;
}

function teclado(event) {
    console.log(event);
    if (event.keyCode == 66) {
        mudarCor(bola, 'blue');
    }else if (event.keyCode == 71) {
        mudarCor(bola, 'green');
    }else if (event.keyCode == 82) {
        mudarCor(bola, 'red');
    }else if (event.keyCode == 66) {
        mudarCor(bola, 'black');
    } else if (event.keyCode == 13) {
        pause = !pause
        block(pause);
    } else if (event.keyCode == 37) {
        //esquerda
        coord(x--, y);
    
    } else if (event.keyCode == 38) {
        //cima
        coord(x, y--);
    
    } else if (event.keyCode == 39) {
        //esquerda
        coord(x++, y);
    
    } else if (event.keyCode == 40) {
        //esquerda
        coord(x, y++);
    }
}


function coord(x, y) {
    bola.style.top = `${y}px`;
    bola.style.left = `${x}px`;
    coordelement.textContent = `${x},${y}`;
}





function block(block = true) {
    const cx = document.getElementsByClassName('block')[0];
    cx.style.display = (block) ? 'block' : 'none';
}


