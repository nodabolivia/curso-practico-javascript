const manager = (() => {
    Date.days2Weeks = function (days) {
        const weeks = days / 7;
        return weeks;
    }
    Date.days2Months = function (days) {
        const months = days / 30;
        return months;
    }
    Date.days2Time = function (d) {
        let timing = {};
        let months = 0, years = 0, days = 0, weeks = 0;
        while (d) {
            if (d >= 365) {
                years++;
                d -= 365;
            } else if (d >= 30) {
                months++;
                d -= 30.4;
            } else if (d >= 7) {
                weeks++;
                d -= 7;
            } else {
                days++;
                d--;
            }
        }
        return timing = { years, months, weeks, days }
    }
    Date.timeDaysMonth = function (d) {
        let time = {};
        let days = 0, month = 0;
        days = d % 30;
        month = d / 30;
        return time = { month, days };
    }
    Date.daysBetween = function (date1, date2) {
        const one_day = 1000 * 60 * 60 * 24;
        const date1_ms = date1.getTime();
        const date2_ms = date2.getTime();
        const difference_ms = date2_ms - date1_ms;
        return Math.round(difference_ms / one_day);
    }
    Date.weeksBetween = function (date1, date2) {
        const one_week = 1000 * 60 * 60 * 24 * 7;
        const date1_ms = date1.getTime();
        const date2_ms = date2.getTime();
        const difference_ms = date2_ms - date1_ms;
        return Math.round(difference_ms / one_week);
    }
    function printDays2Weeks(days, weeks) {
        const daysform2 = document.getElementById("daysform2");
        const weeksform2 = document.getElementById("weeksform2");
        weeksform2.value = weeks;
        daysform2.value = days;
    }
    function printDaysBetween(days, timing) {
        const tiempoTranscurrido = document.getElementById("tiempoTranscurrido");
        const diasTranscurrido = document.getElementById("diasTranscurrido");
        tiempoTranscurrido.innerText = `${timing.years} años, ${timing.months} meses, ${timing.weeks} semanas, ${timing.days} días.`
        diasTranscurrido.innerText = `${days} días.`
    }
    



    return {
        fechasEspecificas:
            function calcularEntreFechasEspecificas() {
                const dia1 = document.getElementById("primerDia");
                const mes1 = document.getElementById("primerMes");
                const anho1 = document.getElementById("primerAnho");
                const dia2 = document.getElementById("segundoDia");
                const mes2 = document.getElementById("segundoMes");
                const anho2 = document.getElementById("segundoAnho");
                const fecha1 = new Date(parseInt(anho1.value), parseInt(mes1.value), parseInt(dia1.value));
                const fecha2 = new Date(parseInt(anho2.value), parseInt(mes2.value), parseInt(dia2.value));
                const days = Date.daysBetween(fecha1, fecha2);
                const timing = Date.days2Time(days);
                printDaysBetween(days, timing);
            },
        dias2Semanas:
            function calcularSemanasDias() {
                const inputDaystoWeeks = document.getElementById("inputDaystoWeeks");
                const valor = parseInt(inputDaystoWeeks.value);
                const semanas = Date.days2Weeks(valor);
                printDays2Weeks(valor, semanas);
            },


    }
})();