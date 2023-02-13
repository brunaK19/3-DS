//Obejtos

var aluno1 = 
{
    nome: "Gabriel",
    idade: 15,
    peso: 60.00,
    altura: 1.65,
    imc: undefined
}

var aluno2 = 
{
    nome: "Roberta",
    idade: 21,
    peso: 50,
    altura: 1.58,
    imc: undefined
}

var aluno3 = 
{
    nome: "Rogério",
    idade: 51,
    peso: 80,
    altura: 1.85,
    imc: undefined
}

var aluno4 = 
{
    nome: "Karen",
    idade: 17,
    peso: 70,
    altura: 1.65,
    imc: undefined
}

var aluno5 = 
{
    nome: "João",
    idade: 15,
    peso: 68,
    altura: 1.60,
    imc: undefined
}
 
//Função calcular

function calcularIMC(obj) {
    obj.imc = (obj.peso / (obj.altura * obj.altura));
  }

calcularIMC(aluno1)
calcularIMC(aluno2)
calcularIMC(aluno3)
calcularIMC(aluno4)
calcularIMC(aluno5)


function Results(obj) {
    var{nome, imc} = obj
    console.log("Nome: " + nome + " | " + "IMC: " +imc)
}

Results(aluno1)
Results(aluno2)
Results(aluno3)
Results(aluno4)
Results(aluno5)