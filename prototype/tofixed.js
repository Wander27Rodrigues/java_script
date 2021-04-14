// manipulando Strings e Numeros

//  transformar um number quebrado com 2 casas decimais e trocar ponto e virgula

let number = 3213434342.43423
// um objeto do tipo numero pode ter um metodo tofixed
// o retorno dele é uma string e posso incluir varios metodos
console.log(number.toFixed(2).replace(".", ","))