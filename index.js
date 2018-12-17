var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');
var avCanvas = document.getElementById('avCanvas');

// New instance of an audio object
var audio = new Audio();
audio.src = 'fineshrine.mp3';

// Set canvas size and generate ctx
avCanvas.width = 1200;
avCanvas.height = 400;

// Analyser variables
var ctx, source, context, analyser, frequency_array, bars, bar_x, bar_width, bar_height;
bars = 250;

function initializeMP3() {
  context = new AudioContext();
  analyser = context.createAnalyser();
  ctx = avCanvas.getContext("2d");
  source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);
  frameLooper();
}

function frameLooper() {
  window.requestAnimationFrame(frameLooper);
  frequency_array = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(frequency_array);
  ctx.clearRect(0, 0, avCanvas.width, avCanvas.height);
  ctx.fillStyle = '#00CCFF';

  for(let i = 0; i < bars; i++) {
    bar_x = i * 5;
    bar_width = 2;
    bar_height = -(frequency_array[i] / 2);
    ctx.fillRect(bar_x, avCanvas.height, bar_width, bar_height);
  }
}

playButton.addEventListener('click', function() {
  audio.play();
  initializeMP3();
});

pauseButton.addEventListener('click', function() {
  audio.pause();
});
