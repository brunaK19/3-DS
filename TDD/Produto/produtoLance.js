class ProdutoLance {
  constructor() {
    this.lances = [];
  }

  registrarLance(valor) {
    this.lances.push(valor);
    this.lances.sort((a, b) => b - a);
  }

  obterTresMaioresLances() {
    return this.lances.slice(0, 3);
  }
}

module.exports = ProdutoLance;
