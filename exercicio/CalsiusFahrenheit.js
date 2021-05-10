/*      ## Celsius em Fahrenheit

    Crie uma função que receva uma string em celsius ou fahrenheit e faça a transformação de uma para outra


    C = (F - 32) * 5/9

    F = C * 9/5 + 32

*/

// tranformDegree('50F')

function tranformDegree(degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não identificado')
    }

    // fluxo ideal F -> C
    let toUpperDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSing = 'C'

    // fluxo  C -> F
    if(celsiusExists){
         toUpperDegree = Number(degree.toUpperCase().replace("C", ""));
         formula = celsius => celsius * 9/5 + 32
         degreeSing = 'F'
    }


    return formula(toUpperDegree) + degreeSing

}

try {
    console.log(tranformDegree('10C'))
    console.log(tranformDegree('50F')) 
    tranformDegree('50Z')       
} catch (error){
    console.log(error)
    //console.log(error.message) mostra erro sem detalhes
}
