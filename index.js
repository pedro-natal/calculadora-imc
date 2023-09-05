function calculoIMC() {
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value / 100;
  var imc = peso / altura ** 2;
  if (imc < 18.5) {
    resultado(imc, "purple", "abaixo do peso");
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado(imc, "green", "no peso normal");
  } else if (imc >= 25 && imc <= 29.9) {
    resultado(imc, "orange", "com excesso de peso");
  } else {
    resultado(imc, "red", "com obesidade");
  }
}

function resultado(imc, color, status) {
  var alerta = document.getElementById("alerta");
  alerta.style.backgroundColor = color;
  alerta.innerHTML =
    Math.round(imc * 100) / 100 + " - Você está " + status + "!";
}
