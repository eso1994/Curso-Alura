const chalk = require('chalk')


console.log(chalk.blue('Vamos começar!'))

const paragrafo = 'Texto retornado via function'

function texto(string){
    return string
}

console.log(texto(paragrafo))