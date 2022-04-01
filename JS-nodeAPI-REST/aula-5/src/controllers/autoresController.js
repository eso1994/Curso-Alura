import autores from "../models/Autor.js";

class AutorController {

    static buscarAutor = (req, res) => {
        const { id } = req.params;

        autores.findById(id, (err, autor) => {
            if(!err){
                res.status(200).send(autor)
            } else {
                res.status(400).send(err)
            }
        })
    }

    static listarAutores = (req, res) => {
        autores.find((_, autor) => {
            res.status(200).json(autor)
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body)

        autor.save((err) => {
            if(err){
                res.status(500).send({message: ` ${err.message} Falha ao cadastrar autor`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })

    }

    static atualizarAutor = (req, res) => {
        const { id } = req.params;

        autores.findByIdAndUpdate(id, {$set: req.body}, err => {
            if(!err) {
                res.status(200).send({message: 'Autor atualizado com sucesso'})
            } else {
                res.status(500).send({message: `${err.message} Erro de atualização`})
            }
        })
    }

    static deletarAutor = (req, res) => {
        const { id } = req.params

        autores.findByIdAndDelete(id, err => {
            if(err) {
                res.status(500).send(err.message)
            } else {
                res.status(200).send({message: 'Autor excluido com sucesso'})
            }
        })
    }

}

export default AutorController;