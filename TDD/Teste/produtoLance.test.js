const ProdutoLance = require('../Produto/produtoLance');

test('deve retornar os três maiores lances', () => {
  const produtoLance = new ProdutoLance();

  produtoLance.registrarLance(100);
  produtoLance.registrarLance(150);
  produtoLance.registrarLance(120);
  produtoLance.registrarLance(200);
  produtoLance.registrarLance(180);

  const tresMaioresLances = produtoLance.obterTresMaioresLances();

  expect(tresMaioresLances).toEqual([200, 180, 150]);
});
