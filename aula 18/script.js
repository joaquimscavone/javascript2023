//escopo let vs var

let x;


function escopo() {
    if (true) {
        let x = 8;
        if (true) {
            x = 7;
            console.log(x); //7
        }
        console.log(x); //8
    }
    console.log(x); // 9
}

escopo();

console.log(x); //undefined