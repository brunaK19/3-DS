<?php


use PHPUnit\Framework\TestCase;
use app\libraries\CalculadoraIMC;



class CalculadoraIMCTest extends TestCase
{
    public function testCalcularIMC()
    {
        $calculadora = new CalculadoraIMC(70, 1.75);
        $imc = $calculadora->calcularIMC();
        $this->assertEquals(22.86, $imc, '', 0.01); 
    }



    public function testInterpretarResultadoAbaixoDoPeso()
    {
        $calculadora = new CalculadoraIMC(50, 1.75);
        $resultado = $calculadora->interpretarResultado();
        $this->assertEquals("Abaixo do peso", $resultado);
    }

 

    public function testInterpretarResultadoPesoNormal()
    {
        $calculadora = new CalculadoraIMC(70, 1.75);
        $resultado = $calculadora->interpretarResultado();
        $this->assertEquals("Peso normal", $resultado);
    }

 

    public function testInterpretarResultadoSobrepeso()
    {
        $calculadora = new CalculadoraIMC(85, 1.75);
        $resultado = $calculadora->interpretarResultado();
        $this->assertEquals("Sobrepeso", $resultado);
    }

 

    public function testInterpretarResultadoObesidadeGrauI()
    {
        $calculadora = new CalculadoraIMC(100, 1.75);
        $resultado = $calculadora->interpretarResultado();
        $this->assertEquals("Obesidade Grau I", $resultado);
    }

 

    public function testInterpretarResultadoObesidadeGrauII()
    {
        $calculadora = new CalculadoraIMC(120, 1.75);
        $resultado = $calculadora->interpretarResultado();
        $this->assertEquals("Obesidade Grau II", $resultado);
    }

 

    public function testInterpretarResultadoObesidadeGrauIII()
    {
        $calculadora = new CalculadoraIMC(150, 1.75);
        $resultado = $calculadora->interpretarResultado();
        $this->assertEquals("Obesidade Grau III", $resultado);
    }

 

    public function testAlturaInvalida()
    {
        $calculadora = new CalculadoraIMC(70, 0);
        $resultado = $calculadora->interpretarResultado();
        $this->assertEquals("Altura inválida.", $resultado);
    }
}

?>