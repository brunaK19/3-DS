
class Leilao {
  constructor() {
    this.lances = [];
    this.usuarios = [];
  }

  darLance(valor) {
    this.lances.push(valor);
    this.lances.sort((a, b) => b - a);
  }

  obterTresMaioresLances() {
    return this.lances.slice(0, 3);
  }

  calcularMediaDosLances() {
    const soma = this.lances.reduce((acc, lance) => acc + lance, 0);
    return soma / this.lances.length || 0;
}
  adicionarUsuario(usuario) {
    this.usuarios.push(usuario);
  }
}
module.exports = Leilao;
