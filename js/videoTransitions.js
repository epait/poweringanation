Popcorn.player( "baseplayer" );

function Player(sequence) {
	var that = this;
	this.pop = Popcorn.baseplayer("#basePlayer");
	this.pop.duration(1110);
	this.pop.play(0);

	this.sequence = sequence;
	this.currentVideo = 0;
	this.volumeLevel = 1;

	var timeUpdateCallbackCaller = function(index) {
		return function() {
			if (that.timeUpdateCallback && that.currentVideo == index) {
				that.timeUpdateCallback(this);
			}
		}
	}

	var transitioner = function(index) {
		return function() {
			var curVid = that.vidAt(index);
			curVid.hide();
			curVid.volume(0);

			$('#'+sequence[index].transitionLoop).fadeIn(1000);







			// var nextVid = that.vidAt(index+1);
			// if (nextVid) {
			// 	that.currentVideo = index+1;
			// 	nextVid.currentTime(0);
			// 	nextVid.volume(that.volumeLevel);
			// 	nextVid.show();
			// 	nextVid.play();
			// }
		}
	}




	this.videos = [];
	for(var i = 0; i < sequence.length; i++) {
		var video = videojs(sequence[i].videoId);
		video.hide();
		video.volume(0);
		this.videos.push(video);
	}

	this.readyCallback = function() {
		console.log("setting up end event handler")
		for(var i = 0; i < that.videos.length; i++) {
			var video = that.videos[i];
			video.on("ended", transitioner(i));
			video.on("timeupdate", timeUpdateCallbackCaller(i));
		}
	}

	var loading = this.videos.slice();

	this.videos.forEach(function(element) {

		// var bufferFunc = function () {
//   var bufferLimit = 30;
//   var bufferTime = myPlayer.buffered().end(0);
//   var bufferPercent = parseFloat((bufferTime/bufferLimit)*100).toFixed(0);
//   console.log('Current Time: ' + myPlayer.currentTime());
//   console.log('Buffered Until: ' + bufferTime);
//   $('#preloadScreen').text('The video is ' + bufferPercent + '% buffered.');
//   if (bufferTime >= bufferLimit) {
//     myPlayer.currentTime(0);
//     myPlayer.volume(1);
//     $('#preloadScreen').hide();
//     $('.pageWrapper').fadeIn(500);
//     myPlayer.off('progress');
//     myPlayer.play();
//   }
//   else if (bufferTime < 1) {
//     myPlayer.play();
//   }
//   else {
//     myPlayer.pause();
//   }
// }


		element.on("progress", function() {
			var bufferedTime = element.buffered().end(0);
			console.log(element);
			console.log("bufferedTime is " + bufferedTime);
			if (bufferedTime > 1) {
				element.pause();
				element.volume(that.volumeLevel);
				element.currentTime(0);
			}

			if (bufferedTime > 20) {

				element.off("progress");
				loading.splice(loading.indexOf(element), 1);
				console.log(loading);
				console.log(that.videos);
				if (loading.length == 0) {
					that.ready();
				}
			}  
		});
		element.play();

	});

	

	this.videos[this.currentVideo].show();
	this.videos[this.currentVideo].volume(that.volumeLevel);
	//this.videos[this.currentVideo].play();

	this.currentVid = function() {
		if (arguments.length > 0) {
			var index = arguments[0];
			if (index != this.currentVideo) {
				var paused = this.videos[this.currentVideo].paused();
				this.videos[this.currentVideo].pause();
				this.videos[this.currentVideo].hide();
				this.videos[this.currentVideo].volume(0);
				this.currentVideo = index;
				this.videos[this.currentVideo].show();
				this.videos[this.currentVideo].volume(this.volumeLevel);
				if (!paused) {
					this.videos[this.currentVideo].play();
				}
			}

		} else {
			return this.videos[this.currentVideo];
		}
	}

	this.vidAt = function(index) {
		return this.videos[index];
	}

	this.pause = function() {
		console.log("pausing");
		for(var i = 0; i < this.videos.length; i++) {
			this.videos[i].pause();
		}
	}

	this.paused = function() {
		return this.currentVid().paused();
	}

	this.play = function() {
		console.log("playing");
		this.currentVid().play();
	}

	this.currentTime = function() {

		if (arguments.length > 0) {
			var time = arguments[0];
			var lastEnd = 0.0;
			for(var i = 0; i < this.videos.length; i++) {
				var nextEnd = lastEnd + this.videos[i].duration();
				if (lastEnd <= time && time < nextEnd) {
					this.currentVid(i);
					this.currentVid().currentTime(time-lastEnd);
					return;
				}
				lastEnd = nextEnd;
			}

		} else {
			var time = 0.0;
			for(var i = 0; i < this.currentVideo; i++) {
				time += this.videos[i].duration();
			}
			time += this.currentVid().currentTime();
			return time;
		}
	}
	this.duration = function() {
		var time = 0.0;
		for(var i = 0; i < this.videos.length; i++) {
			time += this.videos[i].duration();
		}
		return time;
	}
	this.volume = function(level) {
		this.volumeLevel = level;
		this.currentVid().volume(level);
	}
	this.onTimeUpdate = function(callback) {
		this.timeUpdateCallback = callback;
	}

	var chain = function(that, cb1, cb2) {
		return function() {
			if (cb1) { cb1(that); }
			if (cb2) { cb2(that); } 
		}
	}
	this.ready = function() {
		var that = this;
		if (arguments.length > 0) {
			cb = arguments[0];
			this.readyCallback = chain(this, this.readyCallback, cb);
		} else {
			if (this.readyCallback) {
				this.readyCallback(this);
			}
		}
	}
}

