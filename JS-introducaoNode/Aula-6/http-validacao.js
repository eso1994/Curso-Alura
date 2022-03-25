const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function errorHandler(erro){
    throw new Error(erro.message)
}

async function checaStatus(arrayURLs){
    try{
    const arrayStatus = await Promise
        .all(arrayURLs
            .map(async url => {
                const res = await fetch(url)
                return `${res.status} - ${res.statusText}`
    }))
    return arrayStatus
} catch(erro) {
    errorHandler(erro)
}
}

function geraArraysURL(arrayLinks){
    return arrayLinks.map(objetoLinks => Object.values(objetoLinks).join())
}

async function validaURL(arrayLinks){
    const links =  geraArraysURL(arrayLinks)
    const statusLink = await checaStatus(links)
    const result = arrayLinks.map((objeto, indice) => ({
        ...objeto, status: statusLink[indice] 
    }))
    return result
}

module.exports= validaURL