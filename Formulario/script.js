function calcularValorNeto() {

    var valorAPagar = parseFloat(document.getElementById("valorAPagar").value);

    var valorNeto = valorAPagar / 1.19;

    document.getElementById("valorNeto").value = valorNeto.toFixed(2);
}