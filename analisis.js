////// HELPERS / UTILS
function esPar(numero) {
    // if (numero % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }
    return (numero % 2 === 0);
}

function calcularMedianaArimetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoValor) {
            return valorAcumulado + nuevoValor;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
///////////MEDIANA GENERAL/////////////////
const salariosColombia = colombia.map(
    function (persona) {
        return persona.salary;
    }
);
const salariosColombiaSorted =
    salariosColombia.sort(
        function (salaryA, salaryB) {
            //salarioA es mayor devuelve 1
            //salarioB es mayor devuelve -1
            //son iguales devuelve 0
            return salaryA - salaryB;
        }
    );

function medianaSalarios(listaSalarios) {
    const mitad = parseInt(listaSalarios.length / 2);
    if (esPar(listaSalarios.length)) {
        const personitaMitad1 = listaSalarios[mitad - 1];
        const personitaMitad2 = listaSalarios[mitad];
        const mediana = calcularMedianaArimetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }
    else {
        const personitaMitad = listaSalarios[mitad];
        return personitaMitad;
    }
}

const medianaGeneralCol = medianaSalarios(salariosColombiaSorted);

function calcularSalariosColHTML() {
    const promedio = document.getElementById("promedioSalarios");
    promedio.innerText = "El promedio de los salarios de Colombia es " + medianaGeneralCol;
}

////////////// MEDIANA DEL TOP 10%

//splice recibe 2 parametros, 1ero desde queremos hacer el corte y el 2do la cantidad de elementos que queremos sacar, luego saca esos elementos que coincidieron con el corte
//metafora cuchillo y tajadas
//Utilizar metodo splice para sacar un pedaso del array
const spliceStart = (salariosColombiaSorted.length * (100 - 10)) / 100;
const spliceCount = salariosColombiaSorted.length - spliceStart;
const salariosColTop10 = salariosColombiaSorted.splice(spliceStart,spliceCount,)
const medianaTop10Col = medianaSalarios(salariosColTop10);



function calcularTop10SalariosColHTML() {
    const promedio = document.getElementById("promedioTop10Salarios");
    promedio.innerText = "El promedio de los 10% mas rico es " + medianaTop10Col;
}


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});













