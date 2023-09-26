<?php
namespace tests;



use PHPUnit\Framework\TestCase;
use app\libraries\usuario;


class ImpostoTest extends TestCase
{
    public function testAliquotaZero()
    {
        $usuario = new usuario("Alice", "12345678901", 10000);
        $this->assertEquals(0, $usuario->getAliquota());
    }

 

    public function testAliquotaSetePontoCinco()
    {
        $usuario = new usuario("Bob", "98765432101", 30000);
        $this->assertEquals(7.5, $usuario->getAliquota());
    }

 

    public function testAliquotaQuinze()
    {
        $usuario = new usuario("Carol", "56789012345", 40000);
        $this->assertEquals(15, $usuario->getAliquota());
    }

 

    public function testAliquotaVinteEDoisPontoCinco()
    {
        $usuario = new usuario("David", "34567890123", 55000);
        $this->assertEquals(22.5, $usuario->getAliquota());
    }

 

    public function testAliquotaVinteESetePontoCinco()
    {
        $usuario = new usuario("Eve", "78901234567", 70000);
        $this->assertEquals(27.5, $usuario->getAliquota());
    }

 

    public function testImpostoCalculado()
    {
        $usuario = new usuario("Frank", "23456789012", 45000);
        $this->assertEquals(6750, $usuario->getImposto());
    }
}