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
    return arrayResult
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(extraiLinks(texto))
    } catch(erro){
        trataErro(erro)
    }
}



// const pegaArquivo = (caminhoDoArquivo) => {
//     const encoding = 'utf-8'
//     fs.promises
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.yellow(texto)))
//         .catch((erro) => trataErro(erro))
// }




// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8'
//     fs.readFile(caminhoDoArquivo, encoding, (err, texto) => {
//         if(err){
//             trataErro(err)
//         } else {
//             console.log(chalk.green(texto))
//         }
//     })
//}

pegaArquivo('./LIB-MARKDOWN/arquivos/arquivos/texto1.md')