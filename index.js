var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');
var avCanvas = document.getElementById('avCanvas');
var audio = new Audio('audio/fineshrine.mp3');

// Analyser variables


// Set canvas size
avCanvas.width = 1200;
avCanvas.height = 400;
ctx = avCanvas.getContext("2d");










playButton.addEventListener('click', function() {
  audio.play();
});

pauseButton.addEventListener('click', function() {
  audio.pause();
});
