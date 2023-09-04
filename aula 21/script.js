let clientes = [];
countclientes = 0;

function addCliente(nome) {
    clientes[countclientes++] = nome;
}


function printClientes() {
    console.log(clientes);
}