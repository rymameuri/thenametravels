(function () {
  var car = document.getElementById("car");
  function step(dir) {
    var card = car.querySelector(".card");
    var w = card ? card.getBoundingClientRect().width + 18 : 300;
    car.scrollBy({ left: dir * w, behavior: "smooth" });
  }
  document.getElementById("prev").addEventListener("click", function () { step(-1); });
  document.getElementById("next").addEventListener("click", function () { step(1); });
  car.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
  });
})();
