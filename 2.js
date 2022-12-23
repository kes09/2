// use script

let navigation = document.getElementById('navBar');
let navUl = document.getElementById('ul-item');

burgerBar.addEventListener('click',function() {
  navigation.classList.toggle('activeNav');
  burgerBar.classList.toggle('activeBugerBar');
  navUl.classList.toggle('toggleNavigation');
})


let accordionContainer = document.querySelectorAll(".container");
accordionContainer.forEach(function (element) {
  element.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});