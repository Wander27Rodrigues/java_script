// if....else

let temperature = 36.5

//one condicional
if(temperature >= 37) {
    console.log('Febre')

} else {
    console.log('Bem')
}

//----------------------//
//multiplas condicionais

let temperature = 36.9

if(temperature >= 37.5) {
    console.log('Febre alta')
} else if(temperature <37.5 && temperature >= 37){
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}
