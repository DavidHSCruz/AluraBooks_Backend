const { getTodosDestaques, insereDestaque, removeDestaquePorId } = require("../servicos/destaques")


function getDestaques(req, res) {
    try {
        const destaques = getTodosDestaques()
        res.send(destaques)
    } catch ( error ) {
        res.status(500)
        res.send(error.message)
    }
}

function postDestaque(req, res) {
    try {
        const id = req.params.id

        if (livroNovo.nome) {
            insereDestaque(id)
            res.status(201)
            res.send('Livro inserido com sucesso')
        } else {
            res.status(422)
            res.send('Precisa passar o nome do livro')
        }
        
    } catch ( error ) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteDestaque(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            removeDestaquePorId(id)
            res.status(201)
            res.send('Livro deletado com sucesso')
        } else {
            res.status(422)
            res.send('Id inválido')
        }
        
    } catch ( error ) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getDestaques,
    postDestaque,
    deleteDestaque
}