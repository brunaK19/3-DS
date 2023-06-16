document.getElementById("IMC-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;

  const imc = peso / (altura * altura);
  const fix = imc.toFixed(2);

  let categoria;
  
  if (imc <= 18.5) {

    categoria = "Abaixo do peso";

  } else if (imc >= 18.5 && imc < 25) {

    categoria = "Peso normal";

  } else if (imc >= 25 && imc < 30) {

    categoria = "Sobrepeso";

  } else if (imc >= 30 && imc < 35) {

    categoria = "Obesidade Grau I";

  }else if (imc >= 35 && imc < 40) {

    categoria = "Obesidade Grau II"; 

  }else{

    categoria = "Obesidade Grau III";

  }

  const resultado = `${fix}<br>${categoria}`;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = resultado;
});


