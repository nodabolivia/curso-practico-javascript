
const manager = (() => {
    function calcularMediaArimetica(lista) {
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
            }
        );

        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }
    return {
        calcularPromedio: function calcularPromedioHtml() {
            const inputLista = document.getElementById("lista");
            const valueListaString = inputLista.value;
            const valueLista = valueListaString.split(',');
            let valueListaNum = [];
            valueLista.forEach(element => {
                valueListaNum.push(parseInt(element));
            });
            const promedio = calcularMediaArimetica(valueListaNum);
            const resultP = document.getElementById("resultado");
            resultP.innerText = "La media arimética de la lista es: " + (promedio);
        },
        reset:
            function resetResultHTML() {
                const inputLista = document.getElementById("lista");
                const result = document.getElementById("resultadoP");
                inputLista.value = null;
                result.innerText = "";
            }
    }
})();
