const chalk = require('chalk')
const { text } = require('express')
const fs = require('fs')

const trataErro = (erro) => {
    throw new Error(chalk.red(erro.code))
}

function extraiLinks(textao){
    const regex = /\[([^\]]*)\] \(([^\s]*)\)/gm
    const arrayResult = []
    let temp
    while((temp = regex.exec(textao)) !== null) {
        arrayResult.push({ [temp[1]]: temp[2] })
    }
    return arrayResult.length === 0 ? 'não há links' : arrayResult
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto)
    } catch(erro){
        trataErro(erro)
    }
}

module.exports = pegaArquivo