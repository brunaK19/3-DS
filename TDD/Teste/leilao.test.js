const Leilao = require('./Produto/leilao');

test('retornar os 3 maiores lances', () => {
  const leilao = new Leilao();
  leilao.darLance(100);
  leilao.darLance(150);
  leilao.darLance(120);
  leilao.darLance(200);
  leilao.darLance(180);

  const topThreeBids = leilao.getTopThreeBids();

  expect(topThreeBids).toEqual([200, 180, 150]);
});

test('calcular a média dos lances', () => {
  const leilao = new Leilao();
  leilao.darLance(100);
  leilao.darLance(150);
  leilao.darLance(120);

  const media = leilao.calcularMediaDosLances();

  expect(media).toBe(123.33); // Valor aproximado
});
