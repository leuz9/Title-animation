function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function reveal_vincent() {
  var reveal_vincents = document.querySelectorAll(".reveal_vincent");

  for (var i = 0; i < reveal_vincents.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveal_vincents[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveal_vincents[i].classList.add("active");
    } else {
      reveal_vincents[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal_vincent);