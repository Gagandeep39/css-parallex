let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_front = document.getElementById('mountains_front');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let btn = document.querySelector('.btn');
let header = document.querySelector('header');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  // Shift stars to right on scroll
  stars.style.left = `${value * 0.25}px`;
  // Shift Moon below
  moon.style.top = `${value * 1.05}px`;
  // Shift Back Mountain below
  mountains_behind.style.top = `${value * 0.5}px`;
  // Default scroll behavior
  mountains_front.style.top = `${value * 0}px`;
  // Moves title text from left to right
  text.style.marginRight = `${value * 4}px`;
  // Moves title in a slanted manner
  text.style.marginTop = `${value * 1.5}px`;
  // Moves Explroe button down
  btn.style.marginTop = `${value * 1.5}px`;
  // Scroll navigation slowly
  header.style.top = `${value * 0.5}px`;
});
