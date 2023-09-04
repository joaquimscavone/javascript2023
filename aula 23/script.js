//precorrer

let frutas = ['maça', 'pera', 'banana', 'morango'];
// console.log(frutas);

for (let indice = 0; indice < frutas.length; indice++){
    console.log(`A Fruta Nº ${indice+1} é ${frutas[indice]}`);
}

// frutas.forEach((item,index,lista) => {
//     console.log(`A Fruta Nº ${index + 1} é ${item}`);
//     if (item == 'maça') {
//         lista[index] = 'uva';
//     }
// });


frutas.forEach(changeMaca)


function changeMaca(item, index, lista) {
    console.log(`---A Fruta Nº ${index + 1} é ${item}--`);
    if (item == 'maça') {
        lista[index] = 'uva';
    }
}

console.log(frutas);
