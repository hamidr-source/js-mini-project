const $ = document;
const bgContainer = $.querySelector("#background");
const mediaCover = $.querySelector("#cover");
const mediaTitle = $.querySelector("#title");
const mediaArtist = $.querySelector("#artist");
const mediaAudio = $.querySelector("audio");
const playBtn = $.querySelector("#play");
const nextBtn = $.querySelector("#next");
const prevBtn = $.querySelector("#prev");
const progressContainer = $.querySelector("#progress-container");
const progress = $.querySelector("#progress");
const currentTimeElem = $.querySelector("#current-time");
const durationElem = $.querySelector("#duration");

const musicData = [
  {
    path: "./Media/Erfan Tahmasbi - To.mp3",
    displayName: "To",
    artist: "Erfan Tahmasbi",
    cover: "./Images/Erfan-Tahmasbi-To.jpg",
  },
  {
    path: "./Media/Kimia - Hame On Rooza 128.mp3",
    displayName: "Hame On Rooza",
    artist: "Kimia",
    cover: "./Images/Hame-On-Roza.jpg",
  },
  {
    path: "./Media/Hamid Hiraad - Zibaye Man.mp3",
    displayName: "Zibaye Man",
    artist: "Hamid Hiraad",
    cover: "./Images/Zibay-Man.jpg",
  },
];
let musicIndex = 1;
let isPlaying = false;

function playMusic() {
  isPlaying = true;
  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "pause");
  mediaAudio.play();
}

function pauseMusic() {
  isPlaying = false;
  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "play");
  mediaAudio.pause();
}

function songLoad(musicData) {
  mediaTitle.textContent = musicData.displayName;
  mediaArtist.textContent = musicData.artist;
  mediaAudio.src = musicData.path;
  changeCover(musicData.cover);
  console.log(mediaAudio.src);
}

function changeCover(cover) {
  mediaCover.classList.remove("active");
  setTimeout(function () {
    mediaCover.src = cover;
    mediaCover.classList.add("active");
  }, 100);
  bgContainer.src = cover;
}
songLoad(musicData[musicIndex]);

function nextMusic() {
  musicIndex++;
  console.log(mediaAudio.src);
  if (musicIndex > musicData.length - 1) {
    musicIndex = 0;
  }
  songLoad(musicData[musicIndex]);
  playMusic();
}

function prevMusic() {
  musicIndex--;
  console.log(mediaAudio.src);
  if (musicIndex < 0) {
    musicIndex = musicData.length - 1;
  }
  songLoad(musicData[musicIndex]);
  playMusic();
}

function updateProgressBar (event) {
  const duration = event.srcElement.duration
  const currentTime = event.srcElement.currentTime
  const progressPercent = (currentTime / duration) * 100
  progress.style.width = progressPercent + "%";
  const durationMinutes = Math.floor(duration / 60)
  let durationSeconds = Math.floor(duration % 60)
  if (durationSeconds < 10) {
    durationSeconds = "0" + durationSeconds;
  }
  if (durationSeconds) {
    durationElem.textContent = durationMinutes + ":" + durationSeconds;
  }
  const currentMinutes = Math.floor(currentTime / 60);
  let currentSeconds = Math.floor(currentTime % 60);
  if (currentSeconds < 10) {
    currentSeconds = "0" + currentSeconds;
  }
  currentTimeElem.textContent = currentMinutes + ":" + currentSeconds;
}

function setProgressBar(event) {
  const width = this.clientWidth
  const clickX = event.offsetX
  console.log(clickX)
  const musicDuration = mediaAudio.duration
  mediaAudio.currentTime = (clickX / width) * musicDuration
}

playBtn.addEventListener("click", function () {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});
nextBtn.addEventListener("click", nextMusic);
prevBtn.addEventListener("click", prevMusic);
mediaAudio.addEventListener("ended", nextMusic);
mediaAudio.addEventListener("timeupdate", updateProgressBar)
progressContainer.addEventListener("click", setProgressBar)
