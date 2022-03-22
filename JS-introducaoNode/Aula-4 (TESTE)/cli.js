const chalk = require('chalk')
const pegaArquivo = require('./index')

const caminho = process.argv

async function processaTexto(caminhoDeArquivo) {
    const result = await pegaArquivo(caminhoDeArquivo[2])
    console.log('arquivos', result)
}

processaTexto(caminho)