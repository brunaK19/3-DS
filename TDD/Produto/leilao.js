
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

  calcularMediaDosLances() {
    const soma = this.lances.reduce((acc, lance) => acc + lance, 0);
    return soma / this.lances.length || 0;
}

module.exports = Leilao;
