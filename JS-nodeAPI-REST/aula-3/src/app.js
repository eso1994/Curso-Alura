import express from 'express'

const app = express()

app.use(express.json())

const livros = [
    {
        id: 1, 
        title: 'Lord of the rings'
    },
    {
        id: 2, 
        title: 'Hobbit'
    }
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de NodeJS')
})

app.get('/livros', (req, res) => {
    res.json(livros)
})

app.get('/livros/:id', (req, res) => {
    let index = searchBooks(req.params.id)
    res.json(livros[index].title)
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).json(livros)
})

app.put('/livros/:id', (req, res) => {
    let index = searchBooks(req.params.id)
    livros[index].title = req.body.title
    res.json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params
    let index = searchBooks(id)
    livros.splice(index, 1)
    res.send(`Livro ${id} removido com sucesso`)
})

function searchBooks(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app