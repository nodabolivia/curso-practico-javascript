function calcularMediaArimetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}
function calcularModa(lista) {
    const listCount = {};
    lista.map((element) => {
        if (listCount[element]) {
            listCount[element] += 1;
        } else {
            listCount[element] = 1;
        }
    });
    const listaArray = Object.entries(listCount)
        .sort(
            (valorAcumulado, nuevoValor) => {
                return valorAcumulado[1] - nuevoValor[1];
            }
        );
    
    const modaResult = listaArray[listaArray.length - 1];
    return modaResult;
}


function calcularMediana(lista) {
    const mitadLista = parseInt(lista.length / 2);
    //el valor por defecto de sort() es la ordena por la posicion del valor del strign de acuerdo a su valor UNICODE
    lista = lista.sort((a, b) => a - b);
    let mediana;
    console.log({
        lista
    })
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedioElemento1y2 = calcularMediaArimetica([
            elemento1, elemento2
        ]);
        mediana = promedioElemento1y2;
    } else {
        mediana = lista[mitadLista];
    }
    return mediana;
}

function esPar(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    return false;
}

