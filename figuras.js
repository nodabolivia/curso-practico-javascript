// console.log("Hello World");
// Codigo del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado(lado) {
    return lado * lado;
}


//Codigo del triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//Codigo Circulo

//Radio,Diametro,PI,circunferencia y Area

function diametroCirculo(radio) {
    return radio * 2;
}
const PI = Math.PI;
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}
function areaCirculo(radio) {
    return (radio * radio) * PI;
}


//HTML cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
// HTML triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input3 = document.getElementById("inputTriangulo3");
    const input4 = document.getElementById("inputTriangulo4");
    const value1 = input3.value;
    const value2 = input4.value;

    const area = areaTriangulo(value1, value2);
    alert(area);
}
//HTML circulo

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}