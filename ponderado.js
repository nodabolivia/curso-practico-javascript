//Definir el conjunto de números junto al peso de cada elemento
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
function validInputs() { }
function eliminarUltimo() {
    notes.pop();
    printList();
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

function clearList() {
    const listP = document.getElementById("lista");
    notes = [];
    listP.innerText = "[]";
}
//Multiplicar cada número de la lista por su peso
/*Crearemos un nuevo arreglo de solo números a 
partir de multiplicar cada nota con sus créditos.*/
function notesWithCredit(){
   const notesWithCredit = notes.map(
    function (noteObject) {
        return noteObject.note * noteObject.credit;
    });
 return notesWithCredit;
}

//Sumar todos los elementos del arreglo de elementos multiplicados por su peso
/**
 * Crearemos una nueva variable notesWithCredit
 * que tenga como resultado la suma de todos los
 * elementos del arreglo sumOfNotesWithCredit.
 * Recuerda que la función reduce recibe una
 * función con dos parámetros:
 * el valor acumulado (que para evitar errores debemos inicializar con 0)
 * y el nuevo elemento de los arrays.
 */
function totalNotasConCredito(){
    const sumOfNotesWithCredit = notesWithCredit().reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );
    return sumOfNotesWithCredit;
}



//Sumar todos los pesos (créditos)
/**
 * Sí, otra vez map y reduce. 
 * Vamos a crear un nuevo arreglo credits
 *  únicamente con los créditos de cada materia 
 */
function creditosList(){
    const credits = notes.map(
        function (noteObject) {
            return noteObject.credit;
        });
        return credits;
}

/**otra nueva variable sumOfCredits que recorra
 *  el arreglo credits y sume sus elementos. */





function totalCreditos(){
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
function calcularPromedioPonderadoHTML() {
    const resultP = document.getElementById("resultadoP");
    resultP.innerText =
        "El promedio ponderado de las notas es:" +
        calcularPromedioPonderadoDeLasNotas();
}













