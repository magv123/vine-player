function playVideo(){
  isPlaying=true;
  playButton.innerHTML="Pause";
  video.play();
}
function playVideo(){
  isPlaying=false;
  playButton.innerHTML="Play";
  video.pause();
}
loopButton.onclick=function(){
  isLooped = !isLooped;
  video.loop = isLooped;
  loopButton.innerHTML=isLooped ? "Loop:on" :"Loop:off";
};
