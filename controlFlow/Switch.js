// Switch

/*switch(expression) {
    case 'a':
        // codigo
        break
    case 'b':
        // codigo para expression b
        break
    default:
        break
}
*/

let expression = 'a'

switch(expression) {
    case 'a':
        // codigo
        console.log('a')
        break
    case 'b':
        // codigo para expression b
        console.log('b')
        break
    default:
        console.log('default')
        break
}

//calculadora

function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('não implementado')
            break;
    }

    return result
}

console.log(calculate (3, '-', 9))