// callback fuction
// callback - chamar de volta


function sayMayName (name) {
    console.log('antes de executar a callback')
    
    name()

    console.log('depois de executar a callback')
}

// sayMayName({name: 'wander'}) or

sayMayName(
    () => {
        console.log('estou em uma callback')
    }
)