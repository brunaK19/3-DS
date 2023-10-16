
class Leilao {
  constructor() {
    this.lances = [];
  }

  darLance(valor) {
    this.lances.push(valor);
    this.lances.sort((a, b) => b - a);
  }

  getTopThreeBids() {
    return this.lances.slice(0, 3);
  }
}

module.exports = Leilao;
