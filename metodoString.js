let nome = "Douglas Anderson de Campos"
// console.log(nome.length);

//let resultado = nome.length;
//console.log(resultado);

//let resultado = nome.indexOf("Campos");
//console.log(resultado);

//let result = nome.slice(5, 10);
//let result = nome.slice(-10);
//let result = nome.substring(5, 10);
//let result = nome.substr(5, 10);
let result = nome.substr(-4, 10);
console.log(result);

let nome2 = 'Fulano da silva sousa';
let busca = nome2.slice(-5);
console.log(busca)

//let resultado = nome.replace('Campos', 'Souza');
//let resultado = nome.toUpperCase();
let resultado = nome.toLowerCase();
console.log(resultado);


let idadesFakes = [90, 46, 150, 66]; 
let idadeReais = idadesFakes.map((item) => { return item / 2; }); 

//console.log(idadeReais);


let m = new Date('2021, 9');
//console.log(m);


let n = new Date();
n.setDate(n.getDate() + 100);
let aumentarData = n;
//console.log(aumentarData);



// nota do filme
let nota = Math.round(3.6)
console.log(nota)


//template Strings
//Um recurso muito utilizado no JavaScript para concatenar textos e variáveis é o template string. Verifique as duas opções de código abaixo e marque a resposta correta.

const saudacao = 'Boa tarde';
const opcao1 = saudacao + ' João, tudo bem?';
//console.log(opcao1)

const saudacao2 = 'Boa tarde';
const opcao2 = `${saudacao2} João, tudo bem?`
console.log(opcao2)


//Qual o resultado do código abaixo no console?

let nome3 = 'Lucas';
let compra = 'Arroz';

let frase = console.log(`Meu nome é ${nome3} e eu comprei ${compra}`);


//Qual será o resultado da desconstrução de objetos abaixo, exibida no console?

var a = [100, 200, 300, 400, 500];
var [b, c] = a;
console.log(b); 


//Há várias maneiras de declarar uma função no JavaScript, verifique o código abaixo e marque a opção correspondente.
let aviso = (dia) => console.log(`Hoje é ${dia}`)
console.log(aviso('Sexta-feira'))



//Analise o trecho de código a seguir e marque a opção correta.

let carro = {
 modelo: 'Hilux',
 cor: 'Vermelha',
 ano: 2021,
 valor: {
 avista: '200 mil',
 prazo: '300 mil'
 }
}

console.log(Object.values(Object.keys(carro.valor)))



//Qual será o resultado do código abaixo no console?

let agente = "7";
agente = agente.padStart(4,0);
console.log(agente);


//JSON
let d = JSON.parse('true'); 
console.log(d);