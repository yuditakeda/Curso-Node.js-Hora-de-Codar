const minimist = require('minimist')

const args = minimist(process.argv.slice(2)) //Slice para remover os 2 primeiros indices do array [0] e [1]

console.log(args)

const nome = args['nome'];
const profissao = args['profissao'];

console.log(nome, profissao)

console.log(`O nome dele é ${nome} e a profissão dele é ${profissao}.`);