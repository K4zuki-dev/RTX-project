const videoPlayer = document.querySelector(".video-player")
const video = videoPlayer.querySelector("video")
const playButton = videoPlayer


video.addEventListener("mouseover", ()=> {

  if (!video.hasAttribute("controls")) {
    video.setAttribute("controls", true)
  }
})


video.addEventListener("mouseout", ()=> {

  if (video.hasAttribute("controls")) {
    video.removeAttribute("controls")
  }

})



// Das Bilder Karousel:

var carousel = document.querySelector('.carousel');
var images = Array.from(carousel.querySelectorAll('img'));
var currentIndex = 0;
var carouselInner = carousel.querySelector('.carousel-inner');
var carouselWidth = carousel.offsetWidth

function updateCarousel() {
  carouselInner.style.transform = 'translateX(' + (-currentIndex * carouselWidth) + 'px)';
}

carousel.querySelector('.arrow.left').addEventListener('click', function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

carousel.querySelector('.arrow.right').addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});


