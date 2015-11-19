
var video = document.getElementById("mainvideo");
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
    mainvideo.pause();
  }else{
    isPlaying
  }
};
function playVideo(){
  isPlaying=true;
  playButton.innerHTML="Pause";
  mainvideo.play();
}
function playVideo(){
  isPlaying=false;
  playButton.innerHTML="Play";
  mainvideo.pause();
}
loopButton.onclick=function(){
  isLooped = !isLooped;
  mainvideo.loop = isLooped;
  loopButton.innerHTML=isLooped ? "Loop:on" :"Loop:off";
};
