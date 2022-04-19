let indiceImg = 0;
carrusel();

function carrusel() {
  //esto hace un display none de todas las imagenes
  let img = document.getElementsByClassName("mySlides");
  for (let i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }

  indiceImg++;
  if (indiceImg > img.length) {
    indiceImg = 1;
  }
  img[indiceImg - 1].style.display = "block";
  setTimeout(carrusel, 10000); //funcion recursiva (se llama a si mismo)
}
