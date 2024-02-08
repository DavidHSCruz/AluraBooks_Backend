const { getTodosFavoritos, insereFavorito, removeFavoritoPorId } = require("../servicos/favoritos")


function getFavoritos(req, res) {
    try {
        const Favoritos = getTodosFavoritos()
        res.send(Favoritos)
    } catch ( error ) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id

        if (livroNovo.nome) {
            insereFavorito(id)
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

function deleteFavorito(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            removeFavoritoPorId(id)
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
    getFavoritos,
    postFavorito,
    deleteFavorito
}