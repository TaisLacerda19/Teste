const funcaoSubtracao = (parametro1, numero2) => {
	return
}

// const

const teste = {
	nome: 'Bruno',
	idade: 22,
}

console.log(teste)

teste.idade = 30
teste.dsadsa = 'teste'

console.log(teste)

console.log(Object.keys(teste))
console.log(Object.entries(teste))

delete teste.idade
delete teste.nome
delete teste.dsadsa

console.log(teste)

// let

let teste2 = {
	nome: 'Bruno',
	idade: 22,
}

console.log(teste2)

console.log(Object.keys(teste2))
console.log(Object.entries(teste2))

teste2 = 30

console.log(teste2)

teste2 = 'teste'

console.log(teste2)

// diferença var e let

var texto1 = 'teste 1'
const num1 = 2
if (num1 === 2) {
	var texto1 = `O número passado é ${num1}`
	console.log(texto1)
}
console.log(texto1)

let texto2 = 'teste 2'
const num2 = 2
if (num2 === 2) {
	let texto2 = `O número passado é ${num2}`
	console.log(texto2)
}
console.log(texto2)
