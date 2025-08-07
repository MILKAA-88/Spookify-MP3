let audio = document.getElementById('one'); // ID correct : "one"
let spans = document.querySelectorAll('.actions span'); // sélectionne TOUS les <span> dans .actions

function startAudio() {
  audio.play();
  spans[0].classList.add("active");
  spans[1].classList.remove("active");
  spans[2].classList.remove("active");
}

function pauseAudio() {
  audio.pause();
  spans[0].classList.remove("active");
  spans[1].classList.add("active");
  spans[2].classList.remove("active");
}

function stopAudio() {
  audio.pause();
  audio.currentTime = 0; // CORRECTION ici
  spans[0].classList.remove("active");
  spans[1].classList.remove("active");
  spans[2].classList.add("active");
}

window.addEventListener("DOMContentLoaded", function() {
  let progressBar = document.getElementById('progress-bar'); // variable bien nommée
  audio.addEventListener("timeupdate", function() {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
  });
});