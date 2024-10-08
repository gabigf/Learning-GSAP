let greenFred = gsap.to('.green', {
  duration: 2,
  x: 600,
  repeat: 1,
});
// Setting repeat to -1 will make the animation run infinitely

let pinkFred = gsap.to('.pink', { duration: 2, x: 600, delay: 2 });

document.querySelector('.restart-button').onclick = () => {
  greenFred.restart();
  pinkFred.restart();
};

document.querySelector('.reverse-button').onclick = () => {
  greenFred.reverse();
  pinkFred.reverse();
};
