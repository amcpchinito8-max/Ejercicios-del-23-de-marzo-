
function ejercicio1() {
    var sueldo = parseFloat(prompt("Sueldo base:"));
    var v1 = parseFloat(prompt("Venta 1:"));
    var v2 = parseFloat(prompt("Venta 2:"));
    var v3 = parseFloat(prompt("Venta 3:"));
    
    var comi = (v1 + v2 + v3) * 0.10;
    var total = sueldo + comi;
    
    mostrar("Comisiones: " + comi.toFixed(2) + " | Total: " + total.toFixed(2));
}

function ejercicio2() {
    var p1 = parseFloat(prompt("Parcial 1:"));
    var p2 = parseFloat(prompt("Parcial 2:"));
    var p3 = parseFloat(prompt("Parcial 3:"));
    var examen = parseFloat(prompt("Examen Final:"));
    var trabajo = parseFloat(prompt("Trabajo Final:"));
    
    var promedio = (p1 + p2 + p3) / 3;
    var nota_f = (promedio * 0.55) + (examen * 0.30) + (trabajo * 0.15);
    
    mostrar("Nota Final: " + nota_f.toFixed(2));
}

function ejercicio3() {
    var h = parseInt(prompt("Hora salida:"));
    var m = parseInt(prompt("Minutos salida:"));
    var s = parseInt(prompt("Segundos salida:"));
    var t = parseInt(prompt("Tiempo viaje (seg):"));

    var total_s = (h * 3600) + (m * 60) + s + t;

    var hor = Math.floor(total_s / 3600) % 24;
    var min = Math.floor((total_s % 3600) / 60);
    var seg = total_s % 60;

    mostrar("Llegada: " + hor + ":" + min + ":" + seg);
}
function ejercicio4() {
    var c = parseInt(prompt("Cant. respuestas correctas:"));
    var i = parseInt(prompt("Cant. respuestas incorrectas:"));
    var b = parseInt(prompt("Cant. respuestas en blanco:"));
    var nota = (c * 5) + (i * -1) + (b * 0);
    
    mostrar("La nota definitiva es: " + nota + " puntos.");
}
function ejercicio5() {
    var h = parseFloat(prompt("Horas por dia:"));
    var pago = parseFloat(prompt("Pago por hora:"));
    var sueldo_mes = (h * pago) * 30;
    mostrar("Gana en 30 dias: " + sueldo_mes);
}
function ejercicio6() {
    var km = parseFloat(prompt("Kilometros:"));
    var hm = km * 10;
    var dam = km * 100;
    var m = km * 1000;
    var dm = km * 10000;
    var cm = km * 100000;
    var mm = km * 1000000;  
    mostrar(km + "km son: " + m + " metros, " + cm + " cm y " + mm + " mm.");
}
function ejercicio7() {
    var r = parseFloat(prompt("Radio:"));
    var h = parseFloat(prompt("Altura:"));
    var vol = 3.14 * (r * r) * h;
    mostrar("Volumen: " + vol.toFixed(2));
}
function ejercicio8() {
    var hom = parseInt(prompt("Num hombres:"));
    var muj = parseInt(prompt("Num mujeres:"));
    var total = hom + muj;
    var ph = (hom / total) * 100;
    var pm = (muj / total) * 100;
    mostrar("Hombres: " + ph.toFixed(1) + "% | Mujeres: " + pm.toFixed(1) + "%");
}
function ejercicio9() {
    var b = parseFloat(prompt("Base:"));
    var h = parseFloat(prompt("Altura:"));
    var area = b * h;
    var peri = 2 * (b + h);
    mostrar("Area: " + area + " | Perimetro: " + peri);
}
function ejercicio10() {
    var p1 = parseFloat(prompt("Precio del Azúcar:"));
    var c1 = parseInt(prompt("Cantidad de Azúcar:"));
    var p2 = parseFloat(prompt("Precio del Café:"));
    var c2 = parseInt(prompt("Cantidad de Café:"));
    var p3 = parseFloat(prompt("Precio de la Leche:"));
    var c3 = parseInt(prompt("Cantidad de Leche:"));
    var total = (p1 * c1) + (p2 * c2) + (p3 * c3);
    mostrar("Resumen de compra: <br> Azúcar: " + (p1*c1) + "<br> Café: " + (p2*c2) + "<br> Leche: " + (p3*c3) + "<br><b>Total a pagar: " + total + "</b>");
}
function ejercicio11() {
    var x = parseFloat(prompt("Valor X:"));
    var y = parseFloat(prompt("Valor Y:"));
    var res = (3 * (x*x*x*x)) - (5 * (x*x*x)) + (2 * x * y) - 7;
    mostrar("Resultado: " + res);
}
function mostrar(texto) {
    document.getElementById('resultado').innerHTML = "<h3>" + texto + "</h3>";
}