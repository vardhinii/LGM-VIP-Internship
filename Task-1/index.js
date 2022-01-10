const links = document.querySelectorAll(".menu ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");

  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function (event) {
  var acc = document.getElementsByClassName("accordion");
  var panel = document.getElementsByClassName("panel");

  for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      var setClasses = !this.classList.contains("active");
      setClass(acc, "active", "remove");
      setClass(panel, "show", "remove");

      if (setClasses) {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      }
    };
  }

  function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}
