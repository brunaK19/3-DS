class Leilao {
  constructor(produto) {
    this.produto = produto;
    this.lance = new ProdutoLance();
  }

  getInfoProduto() {
    return this.produto;
  }
}

module.exports = Leilao;
