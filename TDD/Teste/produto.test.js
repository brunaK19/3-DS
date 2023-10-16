const Produto = require('./Produto/produto');

test('Deve criar um produto com atributos corretos', () => {
  const produto = new Produto('Produto A', 50, 'Quadrado', '123', 'Fabricante XYZ');

  expect(produto.nome).toBe('Produto A');
  expect(produto.precoMinimo).toBe(50);
  expect(produto.descricao).toBe('Quadrado');
   expect(produto.fabricante).toBe('Fabricante XYZ');
});


