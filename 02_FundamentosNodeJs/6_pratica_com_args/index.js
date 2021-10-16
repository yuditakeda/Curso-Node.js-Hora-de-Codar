const minimist = require('minimist')

// externo
//const args = minimist(process.argv.slice(2)) //Slice para remover os 2 primeiros indices do array [0] e [1]

// interno


const args = minimist(process.argv.slice(2))
const soma = require('./soma').soma
const a = parseInt(args["a"])
const b = parseInt(args["b"])

soma(a, b)
    //console.log(soma(a, b))