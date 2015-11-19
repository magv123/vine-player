var video = document.getElementById("video");

var playButton = getElementById("playButton");
var playButton= getElementById("LoopButton");
var playButton = getElementById("FullscreenButton");

var isPlaying = false;
var is Looped = false;

video.onended = function(e) {
  if (!isLooped){
    pauseVideo();
  }
};
playButton.onclick = function () {
  if (isPlaying){
    isPlaying = false;
    playButton.innerHTML = "Play";
    video.pause();
  }else{
    isPlaying
  }
}
