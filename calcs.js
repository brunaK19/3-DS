import {Categoria} from "./categoria.js"

export class alunos {

    constructor(nome, idade, peso, altura) {

        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.imc = this.calcImc()
        this.status = this.stats()

    }

    calcImc() {
        return (this.peso / (this.altura * this.altura )).toFixed(1)
    }

    
    stats() {

        if(this.imc <= 18.5) 
        {Categoria.abaixoDoPeso++; return "Abaixo do Peso"}

        else if (this.imc >= 18.5 && this.imc < 25) 
        {Categoria.pesoNormal++; return "Peso Normal"}

        else if (this.imc >= 25 && this.imc < 30) 
        {Categoria.sobrepeso++; return "Sobrepeso"}

        else if (this.imc >= 30 && this.imc < 35) 
        {Categoria.obesidadeI++; return "Obesidade Grau I"}

        else if (this.imc >= 35 && this.imc < 40) 
        {Categoria.obesidadeII++; return "Obesidade Grau II"}

        else {Categoria.obesidadeIII++; return "Obesidade Grau III"}

    }

} 

    