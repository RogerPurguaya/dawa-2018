function formatDate(dateValue, format) {

    var fmt = format.toUpperCase();
    var re = /^(M|MM|D|DD|YYYY)([-//]{1})(M|MM|D|DD|YYYY)([-//]{1})(M|MM|D|DD|YYYY)$/;
    
    if (!re.test(fmt)) { fmt = "MM/DD/YYYY"; }
    if (fmt.indexOf("M") == -1) { fmt = "MM/DD/YYYY"; }
    if (fmt.indexOf("D") == -1) { fmt = "MM/DD/YYYY"; }
    if (fmt.indexOf("YYYY") == -1) { fmt = "MM/DD/YYYY"; } 

    var M = "" + (dateValue.getMonth() + 1);
    var MM = "0" + M;
    MM = MM.substring(MM.length - 2, MM.length);
    var D = "" + (dateValue.getDate());
    var DD = "0" + D;
    DD = DD.substring(DD.length - 2, DD.length);
    var YYYY = "" + (dateValue.getFullYear()); 

    var sep = "/";
    if (fmt.indexOf("-") != -1) { sep = "-"; }
    var pieces = fmt.split(sep);
    var result = ""; 

    switch (pieces[0]) {
        case "M": result += M + sep; break;
        case "MM": result += MM + sep; break;
        case "D": result += D + sep; break;
        case "DD": result += DD + sep; break;
        case "YYYY": result += YYYY + sep; break;
    } 


    switch (pieces[1]) {
        case "M": result += M + sep; break;
        case "MM": result += MM + sep; break;
        case "D": result += D + sep; break;
        case "DD": result += DD + sep; break;
        case "YYYY": result += YYYY + sep; break;
    }
    switch (pieces[2]) {
        case "M": result += M; break;
        case "MM": result += MM; break;
        case "D": result += D; break;
        case "DD": result += DD; break;
        case "YYYY": result += YYYY; break;
    } 
    return result
}



function formatoHora(hora) {
    let horas = hora.getHours()
    let minutos = hora.getMinutes()
    let segundos = hora.getSeconds()

    let turno = 'AM'

    if (horas > 12) {
        turno = 'PM'
    }
    if (minutos < 10) {
        minutos = '0'+minutos
    }

    let hora_12 = horas % 12

    let formato_24 = horas + ':' + minutos + ':'+ segundos
    let formato_12 = hora_12 + ':' + minutos + ':' + segundos +' '+ turno

    return {
        formato_24: formato_24,
        formato_12: formato_12
    }
}

function difFechas(fecha) {
    nowDate = new Date()
    fecha = new Date(fecha)
    var diferencia = Math.abs(fecha.getTime() - nowDate.getTime());
    var dias = Math.ceil(diferencia / (1000 * 3600 * 24));
    return dias
}

module.exports = {
    formatoHora:formatoHora,
    difFechas:difFechas
}