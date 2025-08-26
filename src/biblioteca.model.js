const livros = []

function criarLivro(nome,autor,ano,anoPublicacao,categoria){
    const novoLivro ={
        id: Date.now(),
        nome: nome,
        autor:autor,
        ano_publicacao:anoPublicacao,
        categoria:categoria || 'GERAL'
    }
    livros.push(novoLivro)
    return 
}

function listarTodosLivros() {
    return livros
}

function buscarLivroPorNome(autor) {
    const filtrarLivro = livros.find((livro) => livro.nome === nome)

    return filtrarLivro
}


function buscarLivroPorCategoria(categoria) {
    const filtrarLivro = livros.find((livro) => livro.nome === nome)

    return filtrarLivro
}

module.exports = {
    criarLivro,
    listarTodosLivros,
    buscarLivroPorCategoria,
    buscarLivroPorNome,

}