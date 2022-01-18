// console.log("Hello World");
// Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es " + perimetroCuadrado + "cm");
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es " + areaCuadrado + "cm'2");
console.groupEnd();
//Codigo del triangulo
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const baseTriangulo = 4;
const alturaTriangulo = 4;
console.group("Triangulo");
console.log("Los lados del  triangulo miden " + ladoTriangulo1 + "cm," + ladoTriangulo2 + "cm," + baseTriangulo + "cm");
console.log("Altura de triangulo " + alturaTriangulo);
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del  triangulo es " + perimetroTriangulo + "cm");
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del  triangulo es " + areaTriangulo + "cm'2");
console.groupEnd();
//Codigo Circulo
console.group("Circulos");
//Radio,Diametro,PI,circunferencia y Area
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("Circulo radio es " + radioCirculo + "cm");

console.log("Circulo diametro es " + diametroCirculo + "cm");
console.log("Circulo PI es " + PI + "cm");
console.log("Circulo perimetro es " + perimetroCirculo + "cm");
console.log("Circulo area es " + areaCirculo + "cm'2");
console.groupEnd();