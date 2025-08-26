const bibliotecaModel = require('./biblioteca.model');

function criarLivro(nome, autor, ano, anoPublicacao, categoria) {

if(!nome ){
    return  'error: O nome do livro é obrigatório.' ;
}

if(!autor ){
return  'error: O nome do autor é obrigatório.' ;    
} 
if(!anoPublicacao ){
    return  'error: O ano de publicação é obrigatório.' ;    
    }
    const novoLivro = bibliotecaModel.criarLivro(nome, autor, ano, anoPublicacao, categoria);
    return novoLivro;
}

module.exports = {
    criarLivro,     }