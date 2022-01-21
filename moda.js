/*
objetos en JS
var myCar = new Object();
myCar.make = 'Ford';
o tambien
var myCar = {
make: 'Ford',
};
extraccion de propiedades de objetos 
myCar['year']  = 1969;      
*/
const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];
//SACARA NRO DE REPETICIONES DE LA LISTA, ALMACENARLA EN UN OBJETO LISTA
const lista1Count = {};
//El map nos permite crear un array de otro array, para poder manejar y trabajar los elementos
lista1.map(
    function (element) {
        //existe el elemento/propiedad del objeto lista1Count?
        if (lista1Count[element]) {
            lista1Count[element] += 1;
        } else {
            //como no existe, declaramos y damos valor a un nuevo elemento/propiedad en el objeto lista1Count
            // ex.Declaramos propiedad/elemento '1' con el valor 1
            // lista1Count['1']=1
            // ex2.Declaramos propiedad/elemento '896' con valor 1
            // lista1Count['896']=1
            lista1Count[element] = 1;
        }
    }
);

//ORDENAR LA LISTA, PREVIAMENTE CONVERTIR EL OBJETO LISTA A LISTA
//entries() le enviamos el objeto que queremos convertir en Array
const list1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
        //Si valorAcumulado(elementoA) es mayor devolvera un Nro positivo
        //si nuevoValor(elementoB) es mayor devolera un Nro negativo
        //si son iguales devuelve cero
        /*
        array.sort(
        function(elementoA,elementoB){
        if(elementoA>elementoB)return 1;
        if(elementoA==elementoB)return 0;
        if(elementoA<elementoB)return -1;
        });
        */
        return elementoA[1] - elementoB[1];
    }
);
const moda = list1Array[list1Array.length - 1];

function calcularModa(lista) {
    const listCount = {};
    // Contar las repeticiones 
    lista.map((element) => {
        if (listCount[element]) {
            listCount[element] += 1;
        } else {
            listCount[element] = 1;
        }
    });
    // Convertir objeto lista a array
    //ordenar lista array. sort() muta la lista
    const listaArray = Object.entries(listCount)
        .sort(
            (valorAcumulado, nuevoValor) => {
                return valorAcumulado[1] - nuevoValor[1];
            }
        );
    const modaResult = listaArray[listaArray.length - 1];
    return modaResult;
}

function calcularModaHTML() {
    const inputModa = document.getElementById("inputModa");
    const valorListaInput = inputModa.value;
    const valorListaString = valorListaInput.split(';');

    let valueListaNumeric = [];
    valorListaString.forEach(
        element => {
            valueListaNumeric.push(parseInt(element))
        });
    const resultadoModa = calcularModa(
        valueListaNumeric
    );
    const resultadoP = document.getElementById("resultadoP");
    resultadoP.innerText = "La moda de la lista numerica es " + resultadoModa[0] + " , se repite " + resultadoModa[1] + " veces";
    console.log({
        valorListaInput,
        valorListaString
    });
    //1;2;3;1;2;3;4;2;2;2;1
}








