const manager = (() => {
    let lista = [];
    

    function cleanInput() {
        const inputNumber = document.getElementById("inputNum");
        inputNumber.value = null;
    }
    function cleanResult() {
        const resultado = document.getElementById("resultado");
        resultado.innerText = "";
    }
    function printList() {
        const listP = document.getElementById("lista");
        let listaString = "[";
        for (let i = 0; i < lista.length; i++) {
            if (i === 0) {
                listaString += `${lista[i]}`;
            } else {
                listaString += ` ,${lista[i]}`;
            }
        }
        listaString += "]";
        listP.innerText = listaString;
    }


    return {
        addNumber:
            function agregarNumero() {
                const inputNumber = document.getElementById("inputNum");
                lista.push(parseInt(inputNumber.value));
                console.log({
                    lista
                })
                cleanResult();
                cleanInput();
                printList();
            },
        reset:
            function resetearLista() {
                cleanResult();
                lista = [];
                printList();
            },
        deleteLast:
            function eliminarUltimoElemento() {
                cleanResult();
                lista.pop();
                printList();
            },
        media:
            function calcularMediaHTML() {
                const promedio = calcularMediaArimetica(lista);
                const resultP = document.getElementById("resultado");
                resultP.innerText = "La media arimética de la lista es: " + (promedio);
            },
        moda:
            function cacularModaHTML() {
                const moda = calcularModa(lista);
                const resultP = document.getElementById("resultado");
                resultP.innerText = "La moda de la lista numérica es " + moda[0] + " y se repite " + moda[1] + " veces";
            },
            mediana: 
            function calcularMedianaHTML() {
                const mediana = calcularMediana(lista);
                const resultP = document.getElementById("resultado");
                resultP.innerText = "La mediana de la lista es " + mediana;
            }

    }
})();