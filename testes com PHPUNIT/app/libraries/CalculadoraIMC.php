<?php

namespace app\libraries;

class CalculadoraIMC {
    private $peso; 
    private $altura; 


    public function __construct($peso, $altura) {
        $this->peso = $peso;
        $this->altura = $altura;
    }

 
    public function calcularIMC() {
        if ($this->altura > 0) {
            $imc = $this->peso / ($this->altura * $this->altura);
            return round($imc, 2); 
        } else {
            return null; 
        }
    }

    public function interpretarResultado() {
        $imc = $this->calcularIMC();

        if ($imc === null) {
            return "Altura inválida.";
        } elseif ($imc < 18.5) {
            return "Abaixo do peso";
        } elseif ($imc >= 18.5 && $imc < 24.9) {
            return "Peso normal";
        } elseif ($imc >= 25 && $imc < 29.9) {
            return "Sobrepeso";
        } elseif ($imc >= 30 && $imc < 34.9) {
            return "Obesidade Grau I";
        } elseif ($imc >= 35 && $imc < 39.9) {
            return "Obesidade Grau II";
        } else {
            return "Obesidade Grau III";
        }
    }
}



$calculadora = new CalculadoraIMC(70, 1.75);
$imc = $calculadora->calcularIMC();
$resultado = $calculadora->interpretarResultado();

 

echo "Seu IMC é: " . $imc . "\n";
echo "Resultado: " . $resultado . "\n";
?>