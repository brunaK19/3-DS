import {dadosAluno} from "./alunos.js";
import { Categoria } from "./categoria.js";



function printObj() {

    for(let i = 0; i < dadosAluno.length; i++) {

        var {nome, imc, status} = dadosAluno[i]
        console.log("Nome: "+nome+"\nImc: "+imc+"\nCategoria: "+status)

    }

    console.log("\nQuantidade de alunos por categoria:\n" + "\nAbaixo do Peso: " + Categoria.abaixoDoPeso + "\nPeso Normal: " + Categoria.pesoNormal + "\nSobrepeso: " + Categoria.sobrepeso + "\nObesidade Grau I: " + Categoria.obesidadeI + "\nObesidade Grau II: " + Categoria.obesidadeII + "\nObesidade Grau III: " + Categoria.obesidadeIII)

}

printObj()