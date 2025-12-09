const btn = document.getElementById("toggle-theme");
const icon = document.querySelector(".switch-ball .icon");


const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
  document.body.classList.add("dark-theme");
  icon.textContent = "☀️";
}


btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const dark = document.body.classList.contains("dark-theme");


  document.body.classList.add("fade-transition");
  setTimeout(() => document.body.classList.remove("fade-transition"), 400);


  icon.style.opacity = "0";
  setTimeout(() => {
    icon.textContent = dark ? "☀️" : "🌙";
    icon.style.opacity = "1";
  }, 200);


  localStorage.setItem("tema", dark ? "escuro" : "claro");
});


const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbar-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});
