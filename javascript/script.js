const $ = document;
const bgContainer = $.querySelector("#background");
const mediaCover = $.querySelector("#cover");
const mediaTitle = $.querySelector("#title");
const mediaArtist = $.querySelector("#artist");
const mediaAudio = $.querySelector("audio");

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


