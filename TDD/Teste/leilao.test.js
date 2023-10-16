const Leilao = require('./leilao');

test('Deve retornar os 3 maiores lances', () => {
  const leilao = new Leilao();
  leilao.darLance(100);
  leilao.darLance(150);
  leilao.darLance(120);
  leilao.darLance(200);
  leilao.darLance(180);

  const topThreeBids = leilao.getTopThreeBids();

  expect(topThreeBids).toEqual([200, 180, 150]);
});
