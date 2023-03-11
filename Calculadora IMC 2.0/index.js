//array de alunos

var alunos = [ 

{nome: "Gabriel", idade: 15, peso: 60.00, altura: 1.65, imc: undefined, status: undefined},

{nome: "Roberta", idade: 21, peso: 50, altura: 1.58, imc: undefined, status: undefined},

{nome: "Rogério", idade: 51, peso: 80, altura: 1.85, imc: undefined, status: undefined},

{nome: "Karen", idade: 17, peso: 70, altura: 1.65, imc: undefined, status: undefined},

{nome: "João", idade: 15, peso: 98, altura: 1.60, imc: undefined, status: undefined},
  
{nome: "Carla", idade: 19,peso: 69, altura: 1.60, imc: undefined, status: undefined},

{nome: "Jorge", idade: 15, peso: 75, altura: 1.80, imc: undefined, status: undefined},

{nome: "Samantha", idade: 20, peso: 68, altura: 1.50, imc: undefined, status: undefined},

{nome: "Priscila", idade: 15, peso: 48, altura: 1.60, imc: undefined, status: undefined},

{nome: "Pedro", idade: 12, peso: 58, altura: 1.40, imc: undefined, status: undefined},

{nome: "Henrique", idade: 15, peso: 88, altura: 1.90, imc: undefined, status: undefined},

{nome: "Paulo", idade: 65, peso: 98, altura: 1.90, imc: undefined, status: undefined},

{nome: "Joana", idade: 15, peso: 55, altura: 1.60, imc: undefined, status: undefined},
 
{nome: "Bruna", idade: 19, peso: 78, altura: 1.50, imc: undefined, status: undefined},

{nome: "Patrick", idade: 5, peso: 28, altura: 1.20, imc: undefined, status: undefined},

{nome: "Duda", idade: 15, peso: 68, altura: 1.70, imc: undefined, status: undefined},

{nome: "Helena", idade: 18, peso: 58, altura: 1.65, imc: undefined, status: undefined},

{nome: "Fernanda", idade: 17, peso: 58, altura: 1.40, imc: undefined, status: undefined},

{nome: "Augusto", idade: 15, peso: 70, altura: 1.80, imc: undefined, status: undefined},

{nome: "Sérgio", idade: 45, peso: 78, altura: 1.70, imc: undefined, status: undefined},

]

//cálculo imc

alunos.forEach(function calcularIMC(obj){
    obj.imc = (obj.peso / (obj.altura * obj.altura)).toFixed(1)
  });

//classificação

alunos.forEach(function verificarIMC(obj) {
    if (obj.imc < 18,5) {
        obj.status = ("Baixo peso")
    } 
    if (obj.imc >= 18.6 && obj.imc <= 24.9){
        obj.status = ("Peso normal")
    }
    if (obj.imc >= 25 && obj.imc <= 29.9){
        obj.status = ("Sobrepeso")
    } 
    if (obj.imc >= 30 && obj.imc <= 34.9){
        obj.status = ("Obesidade grau I")
    }
    if (obj.imc >= 35 && obj.imc <= 39.9){
        obj.status = ("Obesidade grau II")
    } 
    if (obj.imc >= 40) {
        obj.status = ("Obesidade grau III")
    }
    console.log(obj.nome + " | " + " IMC: " + obj.imc + " | " + obj.status);
  });

    console.log("")

//contagem de cada categoria

let cont = 0;
    for (const obj of alunos) {
        if (obj.status == "Baixo peso") cont++;
    }
console.log("Alunos com baixo peso: " + cont)

let cont2 = 0;
    for (const obj of alunos) {
        if (obj.status == "Peso normal") cont2++;
    }
console.log("Alunos com Peso normal: " + cont2)

let cont3 = 0;
    for (const obj of alunos) {
         if (obj.status == "Sobrepeso") cont3++;
    }
console.log("Alunos com Peso normal: " + cont3)

let cont4 = 0;
    for (const obj of alunos) {
        if (obj.status == "Obesidade grau I") cont4++;
    }
console.log("Alunos com Obesidade grau I: " + cont4)

let cont5 = 0;
    for (const obj of alunos) {
        if (obj.status == "Obesidade grau II") cont5++;
    }
console.log("Alunos com Obesidade grau II: " + cont5)

let cont6 = 0;
    for (const obj of alunos) {
        if (obj.status == "Obesidade grau III") cont6++;
    }
console.log("Alunos com Obesidade grau III: " + cont6)

    








