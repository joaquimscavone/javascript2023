// function soma(x, y) {
//     console.log(x+y)
// }

//Função Anonima

// const soma = function (x, y) {
//     console.log(x+ y);
// }


// soma =  (x, y) => console.log(x ** 2 + y);

//arrow function
soma = (x, y) => {
    x++;
    console.log(x ** 2 + y);
}

soma(5,2);