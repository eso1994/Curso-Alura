import editora from "../models/Editora.js";

class EditoraController {

    static buscarEditora = (req, res) => {
        const { id } = req.params;

        editora.findById(id, (err, editora) => {
            if(!err){
                res.status(200).send(editora)
            } else {
                res.status(400).send(err)
            }
        })
    }

    static listarEditoras = (req, res) => {
        editora.find((_, editora) => {
            res.status(200).json(editora)
        })
    }

    static cadastrarEditora = (req, res) => {
        let editoras = new editora(req.body)

        editoras.save((err) => {
            if(err){
                res.status(500).send({message: ` ${err.message} Falha ao cadastrar editora`})
            } else {
                res.status(201).send(editoras.toJSON())
            }
        })

    }

    static atualizarEditora = (req, res) => {
        const { id } = req.params;

        editora.findByIdAndUpdate(id, {$set: req.body}, err => {
            if(!err) {
                res.status(200).send({message: 'editora atualizado com sucesso'})
            } else {
                res.status(500).send({message: `${err.message} Erro de atualização`})
            }
        })
    }

    static deletarEditora = (req, res) => {
        const { id } = req.params

        editora.findByIdAndDelete(id, err => {
            if(err) {
                res.status(500).send(err.message)
            } else {
                res.status(200).send({message: 'editora excluido com sucesso'})
            }
        })
    }

}

export default EditoraController;