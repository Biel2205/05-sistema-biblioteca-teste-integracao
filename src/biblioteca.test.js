const bibliotecaService = require('./biblioteca.service');

test('verificar se o nome do livro é obrigatório', () => {
    const resultado = bibliotecaService.criarLivro('', 'isaque', 2023,'FICÇÃO');
    expect(resultado).toBe('error: O nome do livro é obrigatório.');
});

test('verificar se o nome do autor é obrigatório', () => {
    const resultado = bibliotecaService.criarLivro('O senhor dos anéis', '', 2023,'FICÇÃO');
    expect(resultado).toBe('error: O nome do autor é obrigatório.');
});