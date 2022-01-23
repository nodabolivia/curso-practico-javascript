const manager = (() => {
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
    return {
        calcularModa: function calcularModaHTML() {
            const inputModa = document.getElementById("inputModa");
            const valorListaInput = inputModa.value;
            const valorListaString = valorListaInput.split(',');

            let valueListaNumeric = [];
            valorListaString.forEach(
                element => {
                    valueListaNumeric.push(parseInt(element))
                });
            const resultadoModa = calcularModa(
                valueListaNumeric
            );
            const resultadoP = document.getElementById("resultadoP");
            resultadoP.innerText = "La moda de la lista numérica es " + resultadoModa[0] + " y se repite " + resultadoModa[1] + " veces";
            console.log({
                valorListaInput,
                valorListaString
            });

        },
        reset:
            function resetResultHTML() {
                const inputLista = document.getElementById("inputModa");
                const result = document.getElementById("resultado");
                inputLista.value = null;
                result.innerText = "";
            }
    }
})();











