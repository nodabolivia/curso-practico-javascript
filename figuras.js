const manager = (() => {
    // Código del cuadrado
    function perimetroCuadrado(lado) {
        return lado * 4;
    }
    function areaCuadrado(lado) {
        return lado * lado;
    }
    function printResultadoCuadrado(calculoTypo, resultado,unidadM) {
        const resultadoP = document.getElementById("resultadoCuadrado");
        resultadoP.innerText = `El ${calculoTypo} del cuadrado es ${resultado} ${unidadM}`;
    }
    //Código del triángulo
    function perimetroTriangulo(lado1 = 0, lado2 = 0, base = 0) {
        return lado1 + lado2 + base;
    }
    function areaTriangulo(base, altura) {
        return (base * altura) / 2;
    }
    function areaTrianguloHeron(lado1 = 0, lado2 = 0, base = 0) {
        const semiperimetro = (lado1 + lado2 + base) / 2;
        const aux = semiperimetro * (semiperimetro - lado1) * (semiperimetro - lado2) * (semiperimetro - base);
        const area = Math.sqrt(aux);
        console.log({ semiperimetro, aux, area });
        return area;
    }

    function printResultadoTriangulo(calculoTypo, resultado,unidadM) {
        const resultadoP = document.getElementById("resultadoTriangulo");
        resultadoP.innerText = `El ${calculoTypo} del tríangulo es ${resultado} ${unidadM}`;
    }
    //Código Círculo
    function diametroCirculo(radio) {
        return radio * 2;
    }

    function perimetroCirculo(radio) {
        const diametro = diametroCirculo(radio)
        return diametro * Math.PI;
    }
    function areaCirculo(radio) {
        return (radio * radio) * Math.PI;
    }
    function printResultadoCirculo(calculoTypo, resultado,unidadM) {
        const resultadoP = document.getElementById("resultadoCirculo");
        resultadoP.innerText = `El ${calculoTypo} del círculo es ${resultado} ${unidadM}`;
    }
    // Código del rectángulo
    function perimetroRectangulo(base, altura) {
        return base * 2 + altura * 2;
    }
    function areaRectangulo(base, altura) {
        return base * altura;
    }
    function printResultadoRectangulo(calculoTypo, resultado,unidadM) {
        const resultadoP = document.getElementById("resultadoRectangulo");
        resultadoP.innerText = `El ${calculoTypo} del rectángulo es ${resultado} ${unidadM}`;
    }




    /*TALLER RETO
    En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.
    
    La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
    La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
    La función debe retornar la altura del triángulo.
    */
    function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
        if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
            console.error("Los lados a y b no son iguales");
        } else {
            const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
            const trianguloPequenoLadoBase = trianguloGrandeLadoA;

            const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
            const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

            const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

            const trianguloGrandeAltura = trianguloPequenoLadoA;
            return trianguloGrandeAltura;
        }
    }

    return {
        //HTML cuadrado
        cuadradoPerimetro:
            function calcularPerimetroCuadradoHTML() {
                const input = document.getElementById("inputCuadrado");
                const value = input.value;
                const perimetro = perimetroCuadrado(value);
                printResultadoCuadrado("perímetro", perimetro , "cm");
            },
        cuadradoArea:
            function calcularAreaCuadradoHTML() {
                const input = document.getElementById("inputCuadrado");
                const value = input.value;
                const area = areaCuadrado(value);
                printResultadoCuadrado("área", area, "cm'2");
            },

        cuadradoClean:
            function clearDataCuadrado() {
                const input = document.getElementById("inputCuadrado");
                const resultadoP = document.getElementById("resultadoCuadrado");
                input.value = null;
                resultadoP.innerText = "";
            },
        // HTML triangulo
        trianguloPerimetro:
            function calcularPerimetroTrianguloHTML() {
                const input1 = document.getElementById("inputTriangulo1");
                const input2 = document.getElementById("inputTriangulo2");
                const input3 = document.getElementById("inputTriangulo3");
                const value1 = input1.value;
                const value2 = input2.value;
                const value3 = input3.value;
                const perimetro = perimetroTriangulo(value1, value2, value3);
                printResultadoTriangulo("perímetro", perimetro, "cm");
            },
        trianguloArea:
            function calcularAreaTrianguloHTML() {
                const input3 = document.getElementById("inputTriangulo3");
                const input4 = document.getElementById("inputTriangulo4");
                const value1 = input3.value;
                const value2 = input4.value;
                const area = areaTriangulo(value1, value2);
                printResultadoTriangulo("área", area, "cm'2");
            },//9 5 10
        trianguloAreaHeron:
            function calcularAreaHeronTrianguloHTML() {
                const input1 = document.getElementById("inputTriangulo1");
                const input2 = document.getElementById("inputTriangulo2");
                const input3 = document.getElementById("inputTriangulo3");
                const value1 = parseInt(input1.value);
                const value2 = parseInt(input2.value);
                const value3 = parseInt(input3.value);
                const area = areaTrianguloHeron(value1, value2, value3);
                printResultadoTriangulo("área", area, "cm'2");
            },
        trianguloClean:
            function clearDataTriangulo() {
                const input1 = document.getElementById("inputTriangulo1");
                const input2 = document.getElementById("inputTriangulo2");
                const input3 = document.getElementById("inputTriangulo3");
                const input4 = document.getElementById("inputTriangulo4");
                const resultadoP = document.getElementById("resultadoTriangulo");
                input1.value = null;
                input2.value = null;
                input3.value = null;
                input4.value = null;
                resultadoP.innerText = "";
            }
        ,
        //HTML circulo
        circuloPerimetro: function calcularPerimetroCirculoHTML() {
            const input = document.getElementById("inputCirculo");
            const value = input.value;
            const perimetro = perimetroCirculo(value);
            printResultadoCirculo("perímetro", perimetro, "cm");
        },
        circuloArea: function calcularAreaCirculoHTML() {
            const input = document.getElementById("inputCirculo");
            const value = input.value;
            const area = areaCirculo(value);
            printResultadoCirculo("área", area, "cm'2");
        },
        circuloClean:
            function clearDataRectangulo() {
                const input = document.getElementById("inputCirculo");
                const resultadoP = document.getElementById("resultadoCirculo");
                input.value = null;
                resultadoP.innerText = "";
            }
        ,
        //HTML Rectangulo
        rectanguloPerimetro:
            function calcularPerimetroRectanguloHTML() {
                const inputBase = document.getElementById("inputBaseRectangulo");
                const inputAltura = document.getElementById("inputAlturaRectangulo");
                const valueBase = inputBase.value;
                const valueAltura = inputAltura.value;
                const perimetro = perimetroRectangulo(valueBase, valueAltura);
                printResultadoRectangulo("perímetro", perimetro, "cm");
            },
        rectanguloArea:
            function calcularAreaRectanguloHTML() {
                const inputBase = document.getElementById("inputBaseRectangulo");
                const inputAltura = document.getElementById("inputAlturaRectangulo");
                const valueBase = inputBase.value;
                const valueAltura = inputAltura.value;
                const area = areaRectangulo(valueBase, valueAltura);
                printResultadoRectangulo("área", area, "cm'2");
            },
        rectanguloClean:
            function clearDataRectangulo() {
                const resultadoP = document.getElementById("resultadoRectangulo");
                const inputBase = document.getElementById("inputBaseRectangulo");
                const inputAltura = document.getElementById("inputAlturaRectangulo");
                resultadoP.innerText = "";
                inputBase.value = null;
                inputAltura.value = null;
            }


    }
}
)();