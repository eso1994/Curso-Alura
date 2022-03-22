const chalk = require('chalk')
const pegaArquivo = require('./index')

const caminho = process.argv

async function processaTexto(caminhoDeArquivo) {
    const result = await pegaArquivo(caminhoDeArquivo[2])
    console.log(chalk.yellow('Lista de links'), result)
}

processaTexto(caminho)