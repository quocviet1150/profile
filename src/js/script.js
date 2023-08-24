// sticky
window.onscroll = () => {
  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.screenY > 100);
};
 