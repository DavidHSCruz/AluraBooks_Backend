const { getTodosLivros, getLivroPorId, insereLivro, atualizaLivro, removeLivroPorId } = require("../servicos/livro")


function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch ( error ) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        
        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send('Id inválido')
        }

    } catch ( error ) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body

        if (livroNovo.nome) {
            insereLivro(livroNovo)
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

function patchLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body
            atualizaLivro(id, body)
            res.status(201)
            res.send('Livro atualizado com sucesso minha gatinha')
        } else {
            res.status(422)
            res.send('Id inválido')
        }
        
    } catch ( error ) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            removeLivroPorId(id)
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
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}