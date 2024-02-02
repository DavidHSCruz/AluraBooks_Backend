const fs = require('fs')

function getTodosLivros() {
    return JSON.parse(fs.readFileSync('livros.json'))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const livroFiltrado = livros.filter( livro => livro.id === id )

    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))

    const novaListaDeLivros = [ ...livros, livroNovo ]

    fs.writeFileSync('livros.json', JSON.stringify(novaListaDeLivros))
}

function atualizaLivro(id, atualizacao) {
    let livrosAtuais = JSON.parse(fs.readFileSync('livros.json'))
    const livroFiltrado = livrosAtuais.findIndex( livro => livro.id === id )

    const conteudoAtualizado = { ...livrosAtuais[livroFiltrado], ...atualizacao }
    livrosAtuais[livroFiltrado] = conteudoAtualizado

    fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais))
}

function removeLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync('livros.json'))
    const livrosFiltrados = livros.filter( livro => livro.id !== id )

    fs.writeFileSync('livros.json', JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    atualizaLivro,
    removeLivroPorId
}

