// manipulando Strings e array

//  Separe um texto que contem espaços, em um novo array onde cade texto é uma posição de array. Depois disso, tranforme o array em um texto e onde eram espaços, coloque _

let phrase = 'Eu quero viver o amor'
let mayArray = phrase.split(" ") 
let phraseWithUnderscore = mayArray.join('_')
console.log(phraseWithUnderscore.toLocaleLowerCase())

