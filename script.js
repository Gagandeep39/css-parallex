let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_front = document.getElementById('mountains_front');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.querySelector('.btn');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  // Shift stars to right on scroll
  stars.style.left = `${value}px`;
});
