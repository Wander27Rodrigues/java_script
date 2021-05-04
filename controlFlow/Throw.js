// throw - arremessar

    function sayMyName(name = '') {
        if (name === '') {
            throw 'Nome é obrigatorio'
            // OR throw new Error('Nome é obrigatorio')
        }

        console.log(name)
    }


//try...cath - tentar..pegar

try {
    sayMyName('Wander')

} catch(e) {
    console.log(e)
}
// E - PARAMENTO

//ajuda a encontra falhas na app