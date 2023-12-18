function calcularCostoTotal() {
    var producto = document.getElementById("producto").value;
    var monto = document.getElementById("monto").value;

    // Algoritmo condicional para calcular el costo total
    var costoTotal = 0;

    switch (producto) {
        case "producto1":
            costoTotal = monto * 1.1; // Ejemplo de aumento del 10%
            break;
        case "producto2":
            costoTotal = monto * 1.2; // Ejemplo de aumento del 20%
            break;
        
    }

    mostrarResultado("Costo Total: $" + costoTotal.toFixed(2));
}

function calcularPagosEnCuotas() {
    var monto = document.getElementById("monto").value;
    var cuotas = document.getElementById("cuotas").value;

    // Algoritmo condicional para calcular los pagos en cuotas
    var pagoMensual = monto / cuotas;

    mostrarResultado("Pagos Mensuales: $" + pagoMensual.toFixed(2));
}

function calcularValorFinal() {
    var monto = document.getElementById("monto").value;
    var impuestos = document.getElementById("impuestos").value;
    var descuentos = document.getElementById("descuentos").value;

    // Algoritmo condicional para calcular el valor final
    var valorFinal = monto * (1 + impuestos / 100) * (1 - descuentos / 100);

    mostrarResultado("Valor Final: $" + valorFinal.toFixed(2));
}


function mostrarResultado(resultado) {
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = resultado;
}
