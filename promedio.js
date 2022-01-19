// 1 mediana

function calcularMediaArimetica(lista) {
    // const sumaLista = lista.reduce(
    //     function (valorAcumulado = 0, nuevoElemento) {
    //         return valorAcumulado + nuevoElemento;
    //     }
    // );
    const sumaLista = () => {
        let valorAcumulado = 0;
        lista.forEach(element => {
            valorAcumulado += element;
        });
        return valorAcumulado;
    }
    const promedioLista = sumaLista() / lista.length;
    return promedioLista;
}
function calcularPromedio() {
    const inputLista = document.getElementById("lista");
    const valueListaString = inputLista.value;
    const valueLista = valueListaString.split(' ');
    const promedio = calcularMediaArimetica(valueLista);
    console.log({
        valueListaString,
        valueLista,
        promedio
    })
    const resultP = document.getElementById("resultado");
    resultP.innerText = "La media arimetica, promedio de la lista es: " + (promedio);
}