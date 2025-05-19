///start music player
const range = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardBtn = document.querySelector(".controls button.forward");
const backwardBtn = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1")
const artistName = document.querySelector(".music-player p")
const songs = [
  {
    title: "Gole Yakh",
    name: "koroush yaghmaei",
    source: "music/1Kourosh Yaghmaei Gole Yakh.mp3",
  },
  {
    title: "Asire Shab",
    name: "farhad mehrad ",
    source: "music/2Farhad Asire Shab.mp3",
  },
  {
    title: "Pol",
    name: "Googoosh",
    source: "music/3Googoosh Pol.mp3",
  },
  {
    title: "Pichak",
    name: "Ebi",
    source: "music/4Ebi Pichak.mp3",
  },
  {
    title: "Bohemian-Rhapsody",
    name: "Queen",
    source: "music/5Queen-Bohemian-Rhapsody-Official-Video_15973.mp3",
  },

  {
    title: "Taghdir",
    name: "Shadmehr",
    source: "music/6Shadmehr Aghili Taghdir.mp3",
  },
  {
    title: "Pooste Shir",
    name: "Ebi",
    source: "music/7Ebi Pooste Shir.mp3",
  },
];
let currentSongIndex = 3;
function updateSongInfo(){
 songName.textContent = songs[currentSongIndex].title
 artistName.textContent = songs[currentSongIndex].name
 song.src = songs[currentSongIndex].source;
}
song.addEventListener('canplay', ()=>{
    range.max = song.duration
})
song.addEventListener('timeupdate', ()=>{
    range.value = song.currentTime;
})

function pauseSong(){
    song.pause();
    controlIcon.classList.remove('fa-pause')
    controlIcon.classList.add('fa-play')
}

function playSong(){
    song.play();
    controlIcon.classList.remove('fa-play')
    controlIcon.classList.add('fa-pause')
}

function playPause(){
    if(song.paused){
        playSong()
    }else{
        pauseSong()
    }
}
playPauseButton.addEventListener('click', playPause)

range.addEventListener('input', ()=>{
song.currentTime = range.value
})

forwardBtn.addEventListener('click', ()=>{
    currentSongIndex++
    if(currentSongIndex > songs.length -1){
        currentSongIndex = 0
    }
    updateSongInfo();
    playPause();
})

backwardBtn.addEventListener('click', ()=>{
    currentSongIndex--
    if(currentSongIndex < 0){
        currentSongIndex = 0
    }
    updateSongInfo();
    playPause();
})
updateSongInfo()




//swwiper

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 70,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
//end swiper

