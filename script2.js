let logOutBtn = document.querySelector(".log-btn");
logOutBtn.addEventListener("click", function () {
  let url = window.location.href;
  url = url.replace("main", "index");
  window.location.href = url;
});

let inicio = document.querySelector(".inicio");
inicio.addEventListener("click", function () {
  window.location.href = "https://www.instagram.com/david.freeskater/";
});
