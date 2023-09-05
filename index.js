function calculoIMC() {
  var peso = document.getElementById("peso").value / 1;
  var altura = document.getElementById("altura").value / 100;
  var imc = peso / altura ** 2;
  validação(peso, altura);
  if (imc < 18.5) {
    resultado(imc, "#26abe3", "abaixo do peso", "./images/img1.png");
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado(imc, "#6b7f36", "no peso normal", "./images/img2.png");
  } else if (imc >= 25 && imc <= 29.9) {
    resultado(imc, "#f0a91d", "com excesso de peso", "./images/img3.png");
  } else if (imc >= 30 && imc <= 39.9) {
    resultado(imc, "#e9752c", "com obesidade grau 1", "./images/img4.png");
  } else {
    resultado(imc, "#d92026", "com obesidade grau 2", "./images/img5.png");
  }
}

function validação(peso, altura) {
  if (peso == "0" || peso == null || altura == "0" || altura == null) {
    alert("Digite valores válidos!");
    location.reload();
  }
}

function resultado(imc, color, status, img) {
  var resultado = document.getElementById("resultado");
  resultado.style.backgroundColor = color;
  resultado.innerHTML =
    Math.round(imc * 100) / 100 + " - Você está " + status + "!";
  document.getElementById("resultado-img").src = img;
}

const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});
