// Objetos em JS:

pessoa = {
    Nome: 'José',
    Sobrenome: 'Dias',
    Brasileiro: true,
    filhos: ['Alan', 'Artur', 'Melissa']
}

// Desestruturação de objetos:
const { Nome, Sobrenome, Brasileiro, filho } = pessoa
console.log(Nome, Sobrenome)


// Estrutura Sintática de funções:

function myFunc(a, b) {
    return a + b
}

// Arrow functions funcionam da mesma forma que funções, mas a sintaxe é um pouco diferente;

const myOtherFunction = (parametro) => {
    return parametro
}


// Spread Operator - é uma forma de "diluir" um conjunto de valores em outro array
//Isso cria uma cópia do array que não afeta a variável original da lista.

minhaLista = ['Banana', 'Mamão', 'Maçã']
outraLista = [...minhaLista]


//Desestruturação de listas é uma técnica para decompor valores individuais de uma lista em variáveis específicas:
let banana, mamao;
[banana, mamao] = minhaLista
console.log(banana)
console.log(mamao)

// Métodos de array importantes:


//Metodo map, cria uma nova lista função que será executada para cada elemento da lista.

newList = minhaLista.map((element) => {
    return element.toLowerCase()
})

console.log(newList)

// Método filter: o método filter retorna um novo array filtrado pelas regras definidas na função executada:

function maiorDeIdade(idade){
    return idade >= 18
}

idades = [16, 42, 17, 15, 22, 44, 8, 53, 32]

let maioresDeIdade = idades.filter(maiorDeIdade)
console.log(maioresDeIdade)

//Outra forma de escrever o filter:

let acimaDeDezoito = idades.filter((element) => element >= 18) //faz exatamente a mesma coisa que a função anterior
console.log('Outro método', acimaDeDezoito)