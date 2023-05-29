let btn = document.querySelector(".sub-nav-btn");
let showBox = document.querySelector(".subnav");
btn.onclick = function () {
  showBox.classList.toggle("d-none");
};
