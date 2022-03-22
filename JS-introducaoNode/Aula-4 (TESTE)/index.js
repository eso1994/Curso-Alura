const chalk = require('chalk')
const { text } = require('express')
const fs = require('fs')
const path = require('path')

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

async function pegaArquivo(caminho){
    const caminhoAbsoluto = path.join("__dirname",'..',caminho)
    const encoding = 'utf-8'
    try{
    const arquivos = await fs.promises.readdir(caminhoAbsoluto,{ encoding })
    const result = await Promise.all(arquivos.map(async (arquivos) => {
        const localArquivo = `${caminhoAbsoluto}/${arquivos}`
        const texto = await fs.promises.readFile(localArquivo, encoding)
        return extraiLinks(texto)
    }))
    return result
    }catch(erro){
        trataErro(erro)
    }
}

module.exports = pegaArquivo