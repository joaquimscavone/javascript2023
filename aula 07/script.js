//operadores lógicos

const login = false; // >0 true || 0 - false;
const permissao = true;
const expirado = false;
const facebook = true;
const google = false;


//negado - not - inverte o valor do boolean
let logico = !login;

//e - and - conjunção (^) - && -
//retorna verdadeiro se todos forem verdadeiros

logico = login && permissao && !expirado;


// ou - or - disjunção (v) - ||
// retorna verdadeiro quando pelo menos uma for verdadeira;
logico = login || facebook || google

// misturar as duas coisas

logico = login || facebook || google && permissao && !expirado
// F ou V ou F e F e !F
// F ou V ou F e F e V
// F ou V ou F
// V ou F
// V


logico = (login || facebook || google) && permissao && !expirado
// (F ou V ou F) e V e !F
// V e V e V
// F

console.log(logico);