const Produto = require('./Produto/produto');

test('Deve criar um produto com atributos corretos', () => {
  const produto = new Produto('Produto A', 50, 'Descrição do Produto', '123', 'Fabricante XYZ');

  expect(produto.nome).toBe('Produto A');
  expect(produto.precoMinimo).toBe(50);

});


