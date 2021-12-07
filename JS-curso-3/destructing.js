//caprichando na gambiarra

const num1 = 1;
const num2 = 2;
console.log(num1, num2)

//orrrrrrr

let [numer1, numer2] = [1, 2]

console.log(numer1, numer2)

//se eu quiser mais valores e atribui-los a uma unica variante

let [numero1, numero2, ...numero3] = [1, 2, 3, 4, 5]

console.log(numero1, numero2, numero3)


//Valor padrão

const [numeroPadrao = 10] = [20];

console.log(numeroPadrao)

//orrrrr

const [numeroPadraoo = 10] = [];

console.log(numeroPadraoo)


//Facilitando a vida


const pessoa = {
    nome: "zé",
    idade: "63"
}

let idades = pessoa.idade;

console.log(idades)

//orrrr 

let {idade} = pessoa;

console.log(idade)



// melhorando as funcoes

function imprimeDados(valor){
    console.log(valor)
}

imprimeDados(pessoa)

//desconstruindo a estrutura object mostrando apenas os dados

function imprimeDado(dados){
    const{nome, idade} = dados
    console.log(nome, idade)
}

imprimeDado(pessoa)

//Sofisticando a estrutura

function imprimeOsDados({nome, idade}){
    console.log(nome, idade)
}

imprimeOsDados(pessoa)