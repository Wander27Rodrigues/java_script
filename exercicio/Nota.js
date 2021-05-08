/*
    Esse algoritmo vai transforma as notas em numeros para caracteres A B C


    DE 90 para cima - A
    entre 80 - 89 - B
    entre 70 - 79 - C
    entre 60 - 69 - D
    menor que 60 - F

*/


function gerScore (score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score >= 60 && score >=  0

    let scoreFinal;

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota Inválida"
    }

    return scoreFinal
}

console.log(gerScore(101))
console.log(gerScore(-1))
console.log(gerScore(0))
console.log(gerScore(1))
console.log(gerScore(45))
console.log(gerScore(60))
console.log(gerScore(61))
console.log(gerScore(75))
console.log(gerScore(85))
console.log(gerScore(95))