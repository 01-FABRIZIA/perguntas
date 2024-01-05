// var elementos = document.querySelectorAll(".duvidas");

// elementos.forEach(function (duvida, index) {
//   var toggleBtn = duvida.querySelector(".toggle-btn");
//   var imgMais = toggleBtn.querySelector(".img-mais");
//   var imgMinimus = toggleBtn.querySelector(".img-minimus");

//   toggleBtn.addEventListener("click", function (event) {
//     // Impede a propagação do evento para evitar que o clique no botão se propague até o h2
//     event.stopPropagation();

//     duvida.classList.toggle("ativas");

//     // Alterna entre as imagens
//     imgMais.classList.toggle("escondida");
//     imgMinimus.classList.toggle("escondida");
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var faqDiv = document.getElementById("faq");
  var elementos = document.querySelectorAll(".duvidas");

  elementos.forEach(function (duvida) {
    var toggleBtn = duvida.querySelector(".toggle-btn");
    var imgMais = toggleBtn.querySelector(".img-mais");
    var imgMinimus = toggleBtn.querySelector(".img-minimus");
    var duvidasP = duvida.querySelector(".duvidas-p");

    toggleBtn.addEventListener("click", function () {
      duvida.classList.toggle("ativas");

      // Alterna entre as imagens
      imgMais.classList.toggle("escondida");
      imgMinimus.classList.toggle("escondida");

      // Ajusta a altura da div principal (faq)
      if (faqDiv.classList.contains("ativas")) {
        faqDiv.style.height =
          faqDiv.offsetHeight + duvidasP.offsetHeight + "px";
      } else {
        faqDiv.style.height = "auto";
      }
    });
  });
});
