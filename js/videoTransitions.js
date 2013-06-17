Popcorn.player( "baseplayer" );
var pop = Popcorn.baseplayer( "#basePlayer" );
// Start Baseplayer
pop.duration(1110);
pop.play(0);
videoAct1.play();	

// Initialize Additional Videos
$('#videoAct2').hide();
$('#videoAct3').hide();
$('#videoAct4').hide();
$('#videoAct5').hide();
$('#motionDams').hide();
$('#motionPopulation').hide();
$('#motionDeltaMead').hide();
var videoArray = [videoAct2, videoAct3, videoAct4, videoAct5, motionDams, motionPopulation, motionDeltaMead];
// for (var i=0; i<videoArray.length; i=i+1) {}
function bufferElement (element) {
	element.play();
	var bufferLimit = 30;
	function bufferTime(){return element.buffered().end(0)};
	element.on('progress',bufferTime);
	if (bufferTime < bufferLimit) {
	    element.play();
	}
	else {
	    element.pause();
	    element.off('progress')
	}
}
videoArray.forEach(bufferElement);


videoAct2.volume(0);
videoAct3.volume(0);
videoAct4.volume(0);
videoAct5.volume(0);
motionDams.volume(0);
motionPopulation.volume(0);
motionDeltaMead.volume(0);


// Set Baseplayer Duration
var durationFunc = function() {
	pop.duration(
		videoAct1.duration() +
		videoAct2.duration() +
		videoAct3.duration() +
		videoAct4.duration() +
		videoAct5.duration() +
		motionDams.duration() +
		motionPopulation.duration() +
		motionDeltaMead.duration() 
	);
	console.log('Baseplayer Duration: ' + pop.duration());
};
// videoAct5.on('timeupdate',durationFunc);


// Switch Out Videos
var loadVideo2 = function() {
	videoAct2.currentTime(0);
	videoAct1.volume(0);
	videoAct2.volume(1);
	videoAct2.play();
	var myPlayer = videoAct2;
	$('#videoAct2').show();
	$('#videoAct1').hide();
	videoAct1.off('ended');
}
var loadMotionDams = function() {
	motionDams.currentTime(0);
	videoAct2.volume(0);
	motionDams.volume(1);
	motionDams.play();
	$('#motionDams').show();
	$('#videoAct2').hide();
	videoAct1.off('ended');
}
var loadVideo3 = function() {
	videoAct3.currentTime(0);
	motionDams.volume(0);
	videoAct3.volume(1);
	videoAct3.play();
	$('#videoAct3').show();
	$('#motionDams').hide();
	videoAct1.off('ended');
}
var loadMotionPopulation = function() {
	motionPopulation.currentTime(0);
	videoAct3.volume(0);
	motionPopulation.volume(1);
	motionPopulation.play();
	$('#motionPopulation').show();
	$('#videoAct3').hide();
	videoAct1.off('ended');
}
var loadVideo4 = function() {
	videoAct4.currentTime(0);
	motionPopulation.volume(0);
	videoAct4.volume(1);
	videoAct4.play();
	$('#videoAct4').show();
	$('#motionPopulation').hide();
	videoAct1.off('ended');
}
var loadMotionDeltaMead = function() {
	motionDeltaMead.currentTime(0);
	videoAct4.volume(0);
	motionDeltaMead.volume(1);
	motionDeltaMead.play();
	$('#motionDeltaMead').show();
	$('#videoAct4').hide();
	videoAct1.off('ended');
}
var loadVideo5 = function() {
	videoAct4.currentTime(0);
	motionDeltaMead.volume(0);
	videoAct4.volume(1);
	videoAct4.play();
	$('#videoAct4').show();
	$('#motionDeltaMead').hide();
	videoAct1.off('ended');
}
videoAct1.on('ended',loadVideo2);
videoAct2.on('ended',loadMotionDams);
motionDams.on('ended',loadVideo3);
videoAct3.on('ended',loadMotionPopulation);
motionPopulation.on('ended',loadVideo4);
videoAct4.on('ended',loadMotionDeltaMead);
motionDeltaMead.on('ended',loadVideo5);

function setPlayer () {
	var video1Class = $('#videoAct1').attr('class');
	var video2Class = $('#videoAct2').attr('class');
	var video3Class = $('#videoAct3').attr('class');
	var video4Class = $('#videoAct4').attr('class');
	var video5Class = $('#videoAct5').attr('class');
	var motionDamsClass = $('#motionDams').attr('class');
	var motionPopulationClass = $('#motionPopulation').attr('class');
	var motionDeltaMeadClass = $('#motionDeltaMead').attr('class');
	if (video1Class='video-js vjs-playing') {
		myPlayer = videoAct1;
	}
	else if (video2Class='video-js vjs-playing') {
		myPlayer = videoAct2;
	}
	else if (video3Class='video-js vjs-playing') {
		myPlayer = videoAct3;
	}
	else if (video4Class='video-js vjs-playing') {
		myPlayer = videoAct4;
	}
	else if (video5Class='video-js vjs-playing') {
		myPlayer = videoAct5;
	}
	else if (motionDamsClass='video-js vjs-playing') {
		myPlayer = motionDams;
	}
	else if (motionPopulationClass='video-js vjs-playing') {
		myPlayer = motionPopulation;
	}
	else {
		myPlayer = motionDeltaMead;
	}
}
pop.on('timeupdate',setPlayer);
// Play/Pause wrapper
$('#playToggle').click(function() {
	var isPaused = pop.paused();
	var isPlaying = !pop.paused();
	if (isPaused) {
    pop.play();
    myPlayer.play();
    console.log('Play!');
	}
	else {
    pop.pause();
    myPlayer.pause();
    console.log('Pause!');
	}
});


// Toggle Audio Mute
$('#soundOn').click(function() {
  myPlayer.volume(0);
  $(this).hide();
  $('#soundOff').show();
})
$('#soundOff').click(function() {
  myPlayer.volume(1);
  $(this).hide();
  $('#soundOn').show();
})

