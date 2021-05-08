// Estrutura de repetição
// for..in

let person = {
    name: 'wander',
    age: 23,
    weight: 1.86
}

for (let property in person ) {
    console.log(property)
    console.log(person[property])
}

// looping em cima das propriedades do objeto