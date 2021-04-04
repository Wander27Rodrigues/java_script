# Scope

* Escopo determian a visibilidade d alguma variável no JS

# Block statement

``` js
vamos iniciar um bloco

{
    aqui dentro é um bloco e coloco qualquer coisa
}

```



# Var
<!-- var é global e poderá funcionar fora de um escopo de bloco -->

console.log('>existe x antes do bloco?' , x)

{
    var x = 0

}

console.log('>existe x depois do bloco?', x)


# let e const

<!-- const e let são locais e só funcionarm no escopo
onde foi criada -->

console.log('> existe y antes do bloco?, y)

{
    let y = 0
}
console.log('>existe x depois do bloco?', y)