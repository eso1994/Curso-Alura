const chalk = require('chalk')
const validaURL = require('./http-validacao')
const pegaArquivo = require('./index')

const caminho = process.argv

async function processaTexto(caminhoDeArquivo) {
    const result = await pegaArquivo(caminhoDeArquivo[2])
    if(caminhoDeArquivo[3] === 'validar'){
        console.log(chalk.yellow('links validados'), await validaURL(result))
    }else{
        console.log(chalk.yellow('Lista de links'), result)
    }
    
}

processaTexto(caminho)