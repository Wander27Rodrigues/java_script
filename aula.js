//  1 . declare uma variavel de nome weight?
let weight
// 2 . que tipo de dado é variavel acima?
console.log(typeof weight)
// 3. declare uma variavel e atribua valores para cada dado:
    /*
        name: string
        age: number - integer
        stars: number - float
        isSubscribed: Boolean
    */

        let name = "nome"
        let age = 23
        let stars = 4.8
        let isSubscribed= false


/*

    4. a variavel student abaixo é de que tipo de dados?

    4.1 atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2 mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg.


*/

let student = {
   name = "nome",
   age = 23,
   weight = 4.8,
   isSubscribed= true,
};



console.log(`${student.name} de idade ${student.age}
pesa ${student.weight} kg.`);


/*
    5 declare uma variavel do tipo array, de nome de
    students e deixei ela vazia.
*/
let students = [];

/*
    6 reatribua valor para a variavel acima, colocando
    dentro dela um objeto student da questão 4.

*/

students = [
    student
]

console.log(students)