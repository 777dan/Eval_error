// try {
// function printTable(from, to, step, func) {
//     if (func === undefined) {
//         return;
//     }
//     from = from;
//     to = to;
//     step = step || 1;
//     document.write("<table border='1'>");
//     for (var x = from; x <= to; x += step) {
//         document.write("<tr>");
//         document.write("<td>" + x + "</td>");
//         document.write("<td>" + func(x) + "</td>");
//         document.write("</tr>");
//     }
//     document.write("</table>");
// }

// function quadratic(x) {
//     return x * x;
// }

// function cube(x) {
//     return x * x * x;
// }
// let expr = prompt("input expression for function");



try {

    function printTable(from, to, step, func) {
        if (func === undefined) {
            return;
        }
        from = from;
        to = to;
        step = step || 1;
        document.write("<table border='1'>");
        for (var x = from; x <= to; x += step) {
            document.write("<tr>");
            document.write("<td>" + x + "</td>");
            document.write("<td>" + func(x) + "</td>");
            document.write("</tr>");
        }
        document.write("</table>");
    }

    function quadratic(x) {
        return x * x;
    }

    function cube(x) {
        return x * x * x;
    }
    let expr = prompt("input expression for function");


    if (isNaN(expr)) throw "Не числовое выражение!";
    if (expr == undefined) throw "Неизвестное выражение!";


    let strF = "f = function (x) {return " + expr + ";}";
    eval(strF);
    printTable(-4, 4, 1, f);
}

catch (e) {
    alert(e);
}


// let strF = "f = function (x) {return " + expr + ";}";
// eval(strF);
// printTable(-4, 4, 1, f);
