// Exercícío 01

let x = 40;
let y = 10;
let pct = calcPct(x, y)
console.log(`${pct}% de ${x} é ${y}`);


function calcPct(x, y) {
    return (y / x) * 100;
}


// Exercícío 02


function calcularImovel(mt, qt){
    let m2 = 3000;
    let preco = 0;
    switch(qt) {
        case 1:
        default:
            preco = mt * m2;
            break;
        case 2:
            preco = mt * (m2 * 1.2);
            break;
        case 3:
            preco = mt * (m2 * 1.5);
            break;
    }
    return preco;
}


let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`)


// Exercícío 03

function validar(usuario, senha){
    if(usuario === 'pedro' && senha === '123')
        return true;
    else
        return false;
}

let usuario = 'douglas';
let senha = '1234';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log("Acesso concedido");
} else{
    console.log("Acesso NEGADO!");
}


// Exercício 04

let carros = [ 'BMW', 'Ferrari', 'Mercedes'];
console.log('1. ' + carros[1])

console.log('2. Lista com Audi');
let carros2 = carros;
carros2[1] = 'Audi'
console.log(carros2)

console.log('3. Lista com Volvo');
carros2.push('Volvo');
console.log(carros2);

console.log('4. Itens no array: ' + carros2.length);


//Exercicio 05

let fruits = ['Maça', 'Uva', 'Banana'];
for (let x in fruits){
    console.log(fruits[x]);
}

// Exercício 06

let n = 1;
while(n <= 100){
    console.log(n);
    n++;
}


