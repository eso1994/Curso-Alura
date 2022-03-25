const pegaArquivo = require('../index')

const arrayResult = [
    {
        pao_de_queijo: 'https://www.panelinha.com.br/receita/Pao-de-queijo'
    }
]

describe('pegaArquivo::', () => {
    it('deve ser uma função',() => {
        expect(typeof pegaArquivo).toBe('function')
    })
    it('deve retornar array com resultados',async () => {
        const result = await pegaArquivo('/home/eso1994/Documentos/GitHub/Curso-Alura/JS-introducaoNode/Aula-6/teste/arquivos/texto1.md')
        expect(result).toEqual(arrayResult)
    })
    it('deve retornar mensagem "não há links"',async () => {
        const result = await pegaArquivo('/home/eso1994/Documentos/GitHub/Curso-Alura/JS-introducaoNode/Aula-6/teste/arquivos/texto1_semLinks.md')
        expect(result).toBe('não há links')
    })
})
