const players = document.querySelectorAll("i");
const audios = document.querySelectorAll("audio");

let musicName;

players.forEach(function (player) {
  player.addEventListener("click", function (event) {
    musicName = event.target.dataset.name;

    audios.forEach(function (audio) {
      if (audio.dataset.name === musicName) {
        audio.currentTime = 0;
        audio.play();
      } else {
        audio.pause();
      }
    });
  });
});
