const sliderImage = document.querySelector(".img-slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;
const images = ["image/1.jpg", "image/2.png", "image/3.jpg", "image/4.jpg"];

function nextImage() {
  index++;
  if (index > images.length - 1) {
    index = 0;
  }
  sliderImage.setAttribute("src", images[index]);
}

function prevImage() {
    index--
    if (index < 0) {
        index = images.length - 1
    }
    sliderImage.setAttribute("src", images[index]);
}

setInterval(nextImage, 5000);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage)