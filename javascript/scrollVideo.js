const video = document.getElementById("video")
const videoContainer = document.getElementById("VideoContainer")

const body = document.body

const header = document.querySelector("header")
const header_height = header.offsetHeight 


document.addEventListener("DOMContentLoaded", () => {
    console.log("Test")

        const vid_duration = video.duration
        const videoContainer_height = vid_duration*document.documentElement.scrollHeight/3
        videoContainer.style.height = `${videoContainer_height}px`

    console.log("Test")


        video.style.top = header_height + "px"
    
        const scroll_part = vid_duration/videoContainer_height
    
    
        document.addEventListener("scroll", (e) => {
            let video_rect = video.getBoundingClientRect()
            let height = video_rect.top-header_height
    
            async function updateVideo() {
                if (height>=0) {
                    video.currentTime = scroll_part*(window.scrollY)
                }
            }
    
            window.requestAnimationFrame(updateVideo)
        })
})