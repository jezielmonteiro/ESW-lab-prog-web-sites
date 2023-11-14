document.getElementById('texto').addEventListener('input', function() {
    var contador = document.getElementById('contador');
    var texto = this.value;
    var numeroCaracteres = texto.length;
    contador.textContent = numeroCaracteres;
});