var natSoundIntroA = $('#natSoundIntroA');
var natSoundIntroB = $('#natSoundIntroB');
var natSoundAct1A = $('#natSoundAct1A');
var natSoundAct1B = $('#natSoundAct1B');
var natSoundAct2A = $('#natSoundAct2A');
var natSoundAct2B = $('#natSoundAct2B');
var natSoundAct3A = $('#natSoundAct3A');
var natSoundAct3B = $('#natSoundAct3B');
var natSoundAct4A = $('#natSoundAct4A');
var natSoundAct4B = $('#natSoundAct4B');
var natSoundAct5A = $('#natSoundAct5A');
var natSoundAct5B = $('#natSoundAct5B');



var popAct1 = Popcorn('#videoAct1');
var popAct2 = Popcorn('#videoAct2');
var popAct3 = Popcorn('#videoAct3');
var popAct4 = Popcorn('#videoAct4');
var popAct5 = Popcorn('#videoAct5');
var popMotionDams = Popcorn('#motionDams');
var popMotionPopulation = Popcorn('#motionPopulation');
var popMotionDeltaMead = Popcorn('#motionDeltaMead');



var videos = {
	videoAct1:videojs('videoAct1'), 
	videoAct2:videojs('videoAct2'),
	motionDams:videojs('motionDams'), 
	motionHooverVid:videojs('motionHooverVid'),
	videoAct3:videojs('videoAct3'),
	motionPopulation:videojs('motionPopulation'),
	motionImperialVid:videojs('motionImperialVid'),
	videoAct4:videojs('videoAct4'),
	motionDeltaMead:videojs('motionDeltaMead'),
	motionIntakeVid:videojs('motionIntakeVid'),
	videoAct5:videojs('videoAct5')
}

function showVidStats(key, vid) {
	console.log('<'+key+': '+vid.buffered().end(0)+" of "+vid.duration()+'>');
}

function showLoadingStats() {
	console.log("[");
	for(var key in videos) {
		showVidStats(key, videos[key]);
	}
	console.log("]");
}

// window.setInterval(showLoadingStats, 1000);


var videoAct1 = videos['videoAct1'];
var videoAct2 = videos['videoAct2'];
var videoAct3 = videos['videoAct3'];
var videoAct4 = videos['videoAct4'];
var videoAct5 = videos['videoAct5'];
var motionDams = videos['motionDams'];
var motionPopulation = videos['motionPopulation'];
var motionDeltaMead = videos['motionDeltaMead'];




// Start Audio Loop 1
popAct1.code({
	start: 1,
	end: 125,
	onStart: function() {
		natSoundAct2A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct2B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct3A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct3B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct4A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct4B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct5A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct5B.animate({volume: 0},1000,function(){this.pause()});
	}
});
popAct1.code({
	start:1,
	end: 91.3,
	onStart: function() {
		natSoundAct1A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct1B.animate({volume: 0},1000,function(){this.pause()});
	}
});
popAct1.code({
	start: 92.3,
	end: 126,
	onStart: function() {
		console.log('Play Audio Track A');
		document.getElementById('natSoundAct1A').currentTime=0;
		natSoundAct1A.animate({volume: 0.3},1000);
    	document.getElementById('natSoundAct1A').play();
	}
});
natSoundAct1A.on('timeupdate',function() {
	if (this.currentTime>this.duration-1) {
		console.log('Play Audio Track B');
		document.getElementById('natSoundAct1B').currentTime=0;
		document.getElementById('natSoundAct1B').volume=0.3;
		document.getElementById('natSoundAct1B').play();
		this.pause();
		this.currentTime=0;
	}
});
natSoundAct1B.on('timeupdate',function() {
	if (this.currentTime>this.duration-1) {
		console.log('Play Audio Track A');
		document.getElementById('natSoundAct1A').currentTime=0;
		document.getElementById('natSoundAct1A').volume=0.3;
		document.getElementById('natSoundAct1A').play();
		this.pause();
		this.currentTime=0;
	}
});
// End Audio Loop 1
popAct2.code({
	start: 1,
	end: 184,
	onStart: function() {
		natSoundAct1A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct1B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct3A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct3B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct4A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct4B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct5A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct5B.animate({volume: 0},1000,function(){this.pause()});
	}
});
// Start Audio Loop 2
popAct2.code({
	start: 1,
	end: 117.15,
	onStart: function() {
		natSoundAct2A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct2B.animate({volume: 0},1000,function(){this.pause()});
	}
});
popAct2.code({
	start: 118.15,
	end: 185,
	onStart: function() {
		document.getElementById('natSoundAct2A').currentTime=0;
		natSoundAct2A.animate({volume: 0.6},2000);
    	document.getElementById('natSoundAct2A').play();
    	console.log('Play Audio Track A');
	}
});
natSoundAct2A.on('timeupdate',function() {
	if (this.currentTime>this.duration-1) {
		document.getElementById('natSoundAct2B').currentTime=0;
		document.getElementById('natSoundAct2B').volume=0.6;
		document.getElementById('natSoundAct2B').play();
		console.log('Play Audio Track B');
		this.pause();
		this.currentTime=0;
	}
});
natSoundAct2B.on('timeupdate',function() {
	if (this.currentTime>this.duration-1) {
		document.getElementById('natSoundAct2A').currentTime=0;
		document.getElementById('natSoundAct2A').volume=0.6;
		document.getElementById('natSoundAct2A').play();
		this.pause();
		this.currentTime=0;
	}
});
// End Audio Loop 2
popMotionDams.code({
	start: 1,
	end: 105,
	onStart: function() {
		natSoundAct1A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct1B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct2A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct2B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct3A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct3B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct4A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct4B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct5A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct5B.animate({volume: 0},1000,function(){this.pause()});
	}
});
// Start Audio Loop 3
popAct3.code({
	start: 1,
	end: 243,
	onStart: function() {
		natSoundAct1A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct1B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct2A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct2B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct4A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct4B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct5A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct5B.animate({volume: 0},1000,function(){this.pause()});
	}
});
popAct3.code({
	start:1,
	end:193,
	onStart: function() {
		natSoundAct3A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct3B.animate({volume: 0},1000,function(){this.pause()});
	}
});
popAct3.code({
	start: 194,
	end: 244,
	onStart: function() {
		console.log('Play Audio Track A');
		document.getElementById('natSoundAct3A').currentTime=0;
		natSoundAct3A.animate({volume: 0.5},1000);
    	document.getElementById('natSoundAct3A').play();
	}
});
natSoundAct3A.on('timeupdate',function() {
	if (this.currentTime>this.duration-1) {
		console.log('Play Audio Track B');
		document.getElementById('natSoundAct3B').currentTime=0;
		document.getElementById('natSoundAct3B').volume=0.5;
		document.getElementById('natSoundAct3B').play();
		this.pause();
		this.currentTime=0;
	}
});
natSoundAct3B.on('timeupdate',function() {
	if (this.currentTime>this.duration-1) {
		console.log('Play Audio Track A');
		document.getElementById('natSoundAct3A').currentTime=0;
		document.getElementById('natSoundAct3A').volume=0.5;
		document.getElementById('natSoundAct3A').play();
		this.pause();
		this.currentTime=0;
	}
});
// End Audio Loop 3
popMotionPopulation.code({
	start: 1, 
	end: 75,
	onStart: function() {
		natSoundAct1A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct1B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct2A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct2B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct3A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct3B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct4A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct4B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct5A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct5B.animate({volume: 0},1000,function(){this.pause()});
	}
});
// Start Audio Loop 4
popAct4.code({
	start: 1,
	end: 82,
	onStart: function() {
		natSoundAct1A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct1B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct2A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct2B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct3A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct3B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct5A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct5B.animate({volume: 0},1000,function(){this.pause()});
	}
});
popAct4.code({
	start: 1,
	end: 24.25,
	onStart: function() {
		natSoundAct4A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct4B.animate({volume: 0},1000,function(){this.pause()});
	}
});
popAct4.code({
	start: 25.25,
	end: 83,
	onStart: function() {
		console.log('Play Audio Track A');
		document.getElementById('natSoundAct4A').currentTime=0;
		natSoundAct4A.animate({volume: 0.3},1000);
    	document.getElementById('natSoundAct4A').play();
	}
});
natSoundAct4A.on('timeupdate',function() {
	if (this.currentTime>this.duration-1) {
		console.log('Play Audio Track B');
		document.getElementById('natSoundAct4B').currentTime=0;
		document.getElementById('natSoundAct4B').volume=0.3;
		document.getElementById('natSoundAct4B').play();
		this.pause();
		this.currentTime=0;
	}
});
natSoundAct4B.on('timeupdate',function() {
	if (this.currentTime>this.duration-1) {
		console.log('Play Audio Track A');
		document.getElementById('natSoundAct4A').currentTime=0;
		document.getElementById('natSoundAct4A').volume=0.3;
		document.getElementById('natSoundAct4A').play();
		this.pause();
		this.currentTime=0;
	}
});
// End Audio Loop 4
popMotionDeltaMead.code({
	start: 1,
	end: 97,
	onStart: function() {
		natSoundAct1A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct1B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct2A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct2B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct3A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct3B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct4A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct4B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct5A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct5B.animate({volume: 0},1000,function(){this.pause()});
	}
});
// Start Audio Loop 5
popAct5.code({
	start: 1,
	end: 70,
	onStart: function() {
		natSoundAct1A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct1B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct2A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct2B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct3A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct3B.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct4A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct4B.animate({volume: 0},1000,function(){this.pause()});
	}
});
popAct5.code({
	start:1,
	end:62.6,
	onStart: function() {
		natSoundAct5A.animate({volume: 0},1000,function(){this.pause()});
		natSoundAct5B.animate({volume: 0},1000,function(){this.pause()});
	}
});
popAct5.code({
	start: 63.6,
	end: 71,
	onStart: function() {
		console.log('Play Audio Track A');
		videoAct1.pause();
		videoAct2.pause();
		videoAct3.pause();
		videoAct4.pause();
		motionDams.pause();
		motionPopulation.pause();
		motionDeltaMead.pause();
		document.getElementById('natSoundAct5A').currentTime=0;
		$('#natSoundAct5A').animate({volume: 0.5},1000);
    	document.getElementById('natSoundAct5A').play();
    	console.log('natSoundAct5A volume is: ' + document.getElementById('natSoundAct5A').volume)
	}
});
$('#natSoundAct5A').on('timeupdate',function() {
	if (this.currentTime>this.duration-1) {
		console.log('Play Audio Track B');
		document.getElementById('natSoundAct5B').currentTime=0;
		document.getElementById('natSoundAct5B').volume=0.5;
		document.getElementById('natSoundAct5B').play();
		this.pause();
		this.currentTime=0;
	}
});
$('#natSoundAct5B').on('timeupdate',function() {
	if (this.currentTime>this.duration-1) {
		console.log('Play Audio Track A');
		document.getElementById('natSoundAct5A').currentTime=0;
		document.getElementById('natSoundAct5A').volume=0.5;
		document.getElementById('natSoundAct5A').play();
		this.pause();
		this.currentTime=0;
	}
});
// End Audio Loop 5