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



console.log(medianaSalarios(salariosColombiaSorted));













