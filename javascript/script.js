const $ = document;
const bgContainer = $.querySelector("#background");
const mediaCover = $.querySelector("#cover");
const mediaTitle = $.querySelector("#title");
const mediaArtist = $.querySelector("#artist");
const mediaAudio = $.querySelector("audio");
const playBtn = $.querySelector("#play")

const musicData = [
  {
    path: "./Media/Erfan Tahmasbi - To.mp3",
    displayName: "To",
    artist: "Erfan Tahmasbi",
    cover:
      "./Images/Erfan-Tahmasbi-To.jpg",
  },
  {
    path: "./Media/Kimia - Hame On Rooza 128.mp3",
    displayName: "Hame On Rooza",
    artist: "Kimia",
    cover:
      "./Images/Hame-On-Roza.jpg",
  },
  {
    path: "./Media/Hamid Hiraad - Zibaye Man.mp3",
    displayName: "Zibaye Man",
    artist: "Hamid Hiraad",
    cover:
      "./Images/Zibay-Man.jpg",
  },
];

let isPlaying = false 

function playMusic () {
  isPlaying = true
  playBtn.classList.replace("fa-play", "fa-pause")
  playBtn.setAttribute("title", "pause")
  mediaAudio.play()
}
 

function songLoad (musicData) {
  mediaTitle.textContent = musicData.displayName
  mediaArtist.textContent = musicData.artist
  mediaAudio.src = musicData.path
  changeCover(musicData.cover)
  console.log(mediaAudio.src)
}

function changeCover (cover) {

  mediaCover.classList.remove("active")
  setTimeout(function () {
    mediaCover.src = cover
    mediaCover.classList.add("active")
  }, 100)
  bgContainer.src = cover
}
songLoad(musicData[0])

playBtn.addEventListener("click", playMusic)