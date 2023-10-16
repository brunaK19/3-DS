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

  expect(media).toBe(123.33); 
});

const Usuario = require('./usuario');
const Leiloeiro = require('./leiloeiro');

test('Deve adicionar usuários ao leilão', () => {
  const leilao = new Leilao();
  const usuario1 = new Usuario('User1');
  const usuario2 = new Usuario('User2');

  leilao.adicionarUsuario(usuario1);
  leilao.adicionarUsuario(usuario2);

  expect(leilao.usuarios.length).toBe(2);
});
