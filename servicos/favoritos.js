const fs = require('fs')

function getTodosFavoritos() {
    return JSON.parse(fs.readFileSync('favoritos.json'))
}

function insereFavorito(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const livroPorId = livros.filter( livro => livro.id === id )
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))

    const novaListaDeFavoritos = [ ...favoritos, livroPorId ]

    fs.writeFileSync('favoritos.json', JSON.stringify(novaListaDeFavoritos))
}

function removeFavoritoPorId(id) {
    const favoritos = JSON.parse(fs.readFileSync('favoritos.json'))
    const favoritosFiltrados = favoritos.filter( livro => livro.id !== id )

    fs.writeFileSync('favoritos.json', JSON.stringify(favoritosFiltrados))
}

module.exports = {
    getTodosFavoritos,
    insereFavorito,
    removeFavoritoPorId
}

