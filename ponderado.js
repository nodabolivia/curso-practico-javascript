//Definir el conjunto de números junto al peso de cada elemento
const manager = (() => {
    let notes = [
        {
            course: "Educación Física",
            note: 100,
            credit: 2,
        },
        {
            course: "Programación",
            note: 80,
            credit: 5,
        },
        {
            course: "Finanzas personales",
            note: 70,
            credit: 5,
        },

    ];

    function invalidCredito() {
        const credito = document.getElementById("credito");
        const invalidCredito = document.getElementById("invalidCredito");
        console.log({
            "credito": credito.value,
            invalidCredito
        })
        if (credito.value == null || nota.value.toString().length == 0 || nota.value <= 1) {
            invalidCredito.hidden = false;
            return false;
        }
        invalidCredito.hidden = true;
        return true;
    }

    function invalidCurso() {
        const curso = document.getElementById("curso");
        const invalidCurso = document.getElementById("invalidCurso");
        if (curso.value == null || curso.value.length == 0) {
            invalidCurso.hidden = false;
            return false;
        }
        invalidCurso.hidden = true;
        return true;
    }
    function invalidNota() {
        const nota = document.getElementById("nota");
        const invalidNota = document.getElementById("invalidNota");
        if (nota.value == null || nota.value == NaN || nota.value.toString().length == 0 || nota.value < 0 || nota.value > 100) {
            invalidNota.hidden = false;
            return false;
        }
        invalidNota.hidden = true;
        return true;
    }

    function notesWithCredit() {
        const notesWithCredit = notes.map(
            function (noteObject) {
                return noteObject.note * noteObject.credit;
            });
        return notesWithCredit;
    }

    function totalNotasConCredito() {
        const sumOfNotesWithCredit = notesWithCredit().reduce(
            function (sum = 0, newVal) {
                return sum + newVal;
            }
        );
        return sumOfNotesWithCredit;
    }

    function creditosList() {
        const credits = notes.map(
            function (noteObject) {
                return noteObject.credit;
            });
        return credits;
    }
    function totalCreditos() {
        const sumOfCredits = creditosList().reduce(
            function (sum = 0, newVal) {
                return sum + newVal;
            })
            ;
        return sumOfCredits;
    }

    function calcularPromedioPonderadoDeLasNotas() {
        const promedioPonderadoNotasConCreditos =
            totalNotasConCredito() / totalCreditos();
        return promedioPonderadoNotasConCreditos;
    }


    function cleanInputs() {
        const curso = document.getElementById("curso");
        const nota = document.getElementById("nota");
        const credito = document.getElementById("credito");
        curso.value = null;
        nota.value = null;
        credito.value = null;
    }
    function printList() {
        const listP = document.getElementById("lista");
        const listaString = notes.map(
            function (notas) {
                return `\n(Materia : ${notas.course}, creditos :${notas.credit}) = Nota : ${notas.note}`;
            }
        );
        if (notes.length == 0) {
            listP.innerText = "[]"
            return;
        }
        listP.innerText = "[" + listaString + " \n]";

    }


    return {
        addMateria:
            function agregarMateria() {
                if (!invalidCredito() || !invalidCurso() || !invalidNota()) {
                    cleanInputs();
                    return;
                }
                const curso = document.getElementById("curso");
                const nota = document.getElementById("nota");
                const credito = document.getElementById("credito");
                const currentMateria = {
                    "course": curso.value,
                    "note": nota.value,
                    "credit": credito.value,
                }
                notes.push(currentMateria);
                cleanInputs();
                printList();
            }
        ,
        resetList: function clearList() {
            const listP = document.getElementById("lista");
            notes = [];
            listP.innerText = "[]";
        },
        deleteLast: function eliminarUltimo() {
            notes.pop();
            printList();
        },
        calcularPromedioPonderado:
            function calcularPromedioPonderadoHTML() {
                const resultP = document.getElementById("resultadoP");
                resultP.innerText =
                    "El promedio ponderado de las notas es:" +
                    calcularPromedioPonderadoDeLasNotas();
            }
        ,


    }
})();
















