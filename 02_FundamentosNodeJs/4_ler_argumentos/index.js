console.log(process.argv)

const args = process.argv.slice(2) //Slice copia uma parte de um array e retorna como um novo array. Isso não modifica o original.

//console.log(args)

const nome = args[0].split('=')[1]
    //console.log(nome)

const idade = args[1].split('=')[1]
    //console.log(idade)