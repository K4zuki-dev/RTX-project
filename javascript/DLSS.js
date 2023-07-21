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