const fs = require('fs')

function getTodosDestaques() {
    return JSON.parse(fs.readFileSync('destaques.json'))
}

function insereDestaque(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const livroPorId = livros.filter( livro => livro.id === id )
    const destaques = JSON.parse(fs.readFileSync('destaques.json'))

    const novaListaDeDestaques = [ ...destaques, livroPorId ]

    fs.writeFileSync('destaques.json', JSON.stringify(novaListaDeDestaques))
}

function removeDestaquePorId(id) {
    const destaques = JSON.parse(fs.readFileSync('destaques.json'))
    const destaquesFiltrados = destaques.filter( livro => livro.id !== id )

    fs.writeFileSync('destaques.json', JSON.stringify(destaquesFiltrados))
}

module.exports = {
    getTodosDestaques,
    insereDestaque,
    removeDestaquePorId
}

