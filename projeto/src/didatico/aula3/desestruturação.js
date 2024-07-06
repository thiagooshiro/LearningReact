const obejeto = {
    nome: 'Thiago',
    idade: 42,
    profissao: 'professor'
}


console.log(obejeto.nome)
console.log(obejeto['nome'])

const { nome, idade, profissao } = obejeto

console.log(nome, idade, profissao)