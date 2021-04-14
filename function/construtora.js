/*
    Function()  constructor
    * new expression
    *creat new object
    * this keybord

*/

function Person(name) {
    // this faz referencia ao name, cria varios objetos com propriedades
    this.name = name
    this.walk = function(){
        return this.name + "andando"
    }
}
const wander = new Person("wander")
const wander = new Person("souza")

console.log(souza.walk())
console.log(wander.walk())
