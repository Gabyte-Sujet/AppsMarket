$(document).ready(function(){
  $('.slider').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      autoplay: true,
  });
});

var toggleButton = document.querySelector('.burger-menu');
var nav = document.querySelector('#nav-bar');
// var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	toggleButton.classList.toggle('toggle');
  nav.classList.toggle('toggle');
});

nav.addEventListener('click', function(){
  nav.classList.toggle('toggle');
  toggleButton.classList.toggle('toggle');
})