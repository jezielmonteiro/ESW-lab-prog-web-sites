function converterCelsius() {
    var temperatura = document.getElementById("temperatura").value;
    
    var celsius = (temperatura - 32) * 5 / 9;

    document.getElementById("resultado").innerText = "Sua temperatura em Celsius é de: " + celsius.toFixed(2);
}

function converterFahrenheit() {
    var temperatura = document.getElementById("temperatura").value;
    
    var fahrenheit = (temperatura * 9 / 5) + 32;

    document.getElementById("resultado").innerText = "Sua temperatura em Fahrenheit é de: " + fahrenheit.toFixed(2);
}