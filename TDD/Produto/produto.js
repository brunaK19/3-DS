class Produto {
  constructor(nome, precoMinimo, descricao, codigo, fabricante) {
    this.nome = nome;
    this.precoMinimo = precoMinimo;
    this.descricao = descricao;
    this.codigo = codigo;
    this.fabricante = fabricante;
  }
}

module.exports = Produto;
