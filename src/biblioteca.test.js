const bibliotecaService = require('./biblioteca.service');

test('verificar se o nome do livro é obrigatório', () => {
    const resultado = bibliotecaService.criarLivro('', 'isaque', 2023,'FICÇÃO');
    expect(resultado).toBe('Erro: Nome é obrigatório!');
});

test('verificar se o nome do autor é obrigatório', () => {
    const resultado = bibliotecaService.criarLivro('O senhor dos anéis', '', 2023,'FICÇÃO');
    expect(resultado).toBe('Erro: Autor é obrigatório!');
});
test('verificar se o ano de publicação é obrigatório', () => {
    const resultado = bibliotecaService.criarLivro('O senhor dos anéis', 'isaque', '','FICÇÃO');
    expect(resultado).toBe('Erro: Ano de publicação é obrigatório!');
});
test('Verificar se o autor do livro está vazio', () => {
    const resultado = bibliotecaService.criarLivro('O senhor dos anéis', '', 2023,'FICÇÃO');
    expect(resultado).toBe('Erro: Autor é obrigatório!');
});
test('Verificar se o ano de publicação do livro está vazio', () => {
    const resultado = bibliotecaService.criarLivro('O senhor dos anéis', 'isaque', '','FICÇÃO');
    expect(resultado).toBe('Erro: Ano de publicação é obrigatório!');
});
test('Verificar se o livro está sendo criado com sucesso', () => {
    const resultado = bibliotecaService.criarLivro('O senhor dos anéis', 'isaque', 2023,'FICÇÃO');
    expect(resultado).toHaveProperty('id');
    expect(resultado).toHaveProperty('nome', 'O senhor dos anéis');
    expect(resultado).toHaveProperty('autor', 'isaque');
    expect(resultado).toHaveProperty('ano_publicacao', 2023);
    expect(resultado).toHaveProperty('categoria', 'FICÇÃO');
});
test('Verificar se o livro está sendo criado com sucesso sem categoria', () => {
    const resultado = bibliotecaService.criarLivro('O senhor dos anéis', 'isaque', 2023);
    expect(resultado).toHaveProperty('id');
    expect(resultado).toHaveProperty('nome', 'O senhor dos anéis');
    expect(resultado).toHaveProperty('autor', 'isaque');
    expect(resultado).toHaveProperty('ano_publicacao', 2023);
    expect(resultado).toHaveProperty('categoria', 'GERAL');
});
test('Verificar se o título é obrigatório para busca', () => {
    const resultado = bibliotecaService.buscarLivroPorNome('');
    expect(resultado).toBe('Erro: Título é obrigatório para busca');
});
test('Verificar se a categoria é obrigatória para busca', () => {
    const resultado = bibliotecaService.buscarLivroPorCategoria('');
    expect(resultado).toBe('Erro: Categoria é obrigatória para busca');
});
test('Verificar se o livro está sendo buscado por nome', () => {
    bibliotecaService.criarLivro('O senhor dos anéis', 'isaque', 2023,'FICÇÃO');
    const resultado = bibliotecaService.buscarLivroPorNome('O senhor dos anéis');
    expect(resultado).toHaveProperty('id');
    expect(resultado).toHaveProperty('nome', 'O senhor dos anéis');
    expect(resultado).toHaveProperty('autor', 'isaque');
    expect(resultado).toHaveProperty('ano_publicacao', 2023);
    expect(resultado).toHaveProperty('categoria', 'FICÇÃO');
});