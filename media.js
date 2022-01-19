
function calcularMediaArimetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function esPar(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    return false;
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
//12;8;30;2
function calcularMedianaHTML() {
    const inputMediana = document.getElementById("inputMediana");
    const valueLista = inputMediana.value;
    console.log({
        valueLista
    })
    const valueListaString = valueLista.split(';');
    let valueListaNumeric = [];
    valueListaString.forEach(
        element => {
            valueListaNumeric.push(parseInt(element))
        });
    const mediana = calcularMediana(valueListaNumeric);
    const result = document.getElementById("resultado");
    result.innerText = "La mediana de la lista es = " + mediana;
}