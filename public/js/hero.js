const videoContainer = document.querySelector('.video-container');
const videos = document.querySelectorAll('.video-bg');

let currentVideoIndex = 0;

function playNextVideo() {
  videos[currentVideoIndex].style.opacity = 0;
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  videos[currentVideoIndex].style.opacity = 0.3;
}

setInterval(playNextVideo, 10000);
