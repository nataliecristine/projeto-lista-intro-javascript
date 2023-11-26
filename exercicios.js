// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {

const altura = prompt("Altura do Retangulo")
const largura = prompt("largura do Retangulo")
const area = altura * largura
  
console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {

const anoAtual = prompt("Ano Atual")
const anoNascimento = prompt("Digite o Ano do seu nascimento")
const idade = anoAtual - anoNascimento
console.log(idade)

}

// EXERCÍCIO 03

function calculaIMC(peso, altura) {

const imc = peso / (altura * peso)
return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {

const nome = prompt ("qual é o seu nome?")
const idade = prompt ("qual é a sua idade?")
const email = prompt  ("qual é o seu email?")
console.log( "Meu nome é ${nome}, tenho ${idade} anos, meu email é ${email}.")


}
// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {

const coresPreferidas = []
const cor1 = prompt("digite sua cor preferida")
const cor2 = prompt("digite sua cor preferida")
const cor3 = prompt("digite sua cor preferida")

const coresPreferidas = [cor1, cor2, cor3]

console.log(coresPreferidas)
}

// EXERCÍCIO 06
function retornaStringEmMaiúscula(string) {

const stringMaiúscula = string.toUpperCase()
return stringMaiúscula

}

// EXERCÍCIO 07
function calculaIngressosEspetáculo(custo, valorIngresso) {

const custoEspetáculo = custo
const valorIngresso = valorIngresso
const quantidadeNecessária = custo / valorIngresso
console.log(quantidadeNecessária) 

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {

const comparaTamanhoStrings = string1.length === string2.length
return comparaTamanhoStrings


}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {

const primeiroElemento = array [0]
return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
const ultimoElemento = array[array.length -1]
return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
const primeiroElemento = Array[0]
const ultimoElemento = Array[Array.length -1]
array[0] = ultimoElemento
array[Array.length -1]= primeiroElemento
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
const idade = prompt("voce tem mais de 18 anos? sim/nao") =="sim"
const escolaridade  = prompt("voce possui ensino medio completo? sim/nao") == "sim"
const disponibilidade = prompt("voce possui disponibilidade de horario durante os horarios do curso? sim/nao") =="sim"

console.log(maioridade && escolaridade && disponibilidade)

}