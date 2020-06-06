/* 
This works with video as well. Replace <audio> with:
 
  <video width="1280" height="720" >
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.ogg" type="video/ogg">
  </video> 
  
*/

// Grab ID of audio player
var podcastAudio = document.getElementById('podcast-audio');

// Grab ID of play button
var playBtn = document.getElementById('podcast-play');

// Grab ID of pause button
var pauseBtn = document.getElementById('podcast-pause');

// Play audio & show pause btn
var playShow = function() {
  podcastAudio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
};

// Pause audio & show play btn
var pauseShow = function() {
  podcastAudio.pause();
  playBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
};