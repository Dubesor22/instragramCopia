let myIndex = 0;
carousel();

function carousel() {
  let i;
  let img = document.getElementsByClassName("mySlides");
  for (i = 0; i < img.length; i++) {
    img[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > img.length) {
    myIndex = 1;
  }
  img[myIndex - 1].style.display = "block";
  setTimeout(carousel, 10000);
}
