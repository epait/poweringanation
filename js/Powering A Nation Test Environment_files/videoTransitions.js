	var chain = function(that, cb1, cb2) {
		return function() {
			if (cb1) { cb1(that); }
			if (cb2) { cb2(that); } 
		}
	}



function VideoJSPlayer(info) {
	var that = this;
	this.isReady = false;
	this.video = videojs(info.videoId);
	this.volumeLevel = this.video.volume();
	this.video.volume(0);
	this.video.on("ended", function() {
		console.log("VideoJSPlayer.ended");
		if (that.endedCallback) {
			console.log("calling endedCallback");
			that.endedCallback.call(that);
		}
	});
	this.video.on("timeupdate", function() {
		if (that.timeUpdateCallback) {
			that.timeUpdateCallback.call(that);
		}
	});

	this.video.on("progress", function() {
		var bufferedTime = that.video.buffered().end(0);
		console.log(that.video);
		console.log("bufferedTime is " + bufferedTime);
		if (bufferedTime > 1) {
			that.video.pause();
			that.video.volume(that.volumeLevel);
			that.video.currentTime(0);
		}

		if (bufferedTime > 20) {
			that.video.off("progress");
			that.ready();
			
		}  
	});
	this.video.play();

	this.hide = function() {
		this.video.hide();
	}

	this.show = function() {
		this.video.show();
	}

	this.pause = function() {
		this.video.pause();
	}

	this.paused = function() {
		return this.video.paused();
	}

	this.play = function() {
		this.video.play();
	}

	this.volume = function(level) {
		this.volumeLevel = level;
		this.video.volume(level);
	}

	this.currentTime = function() {
		return this.video.currentTime.apply(this.video, arguments);
	}

	this.duration = function() {
		return this.video.duration();
	}

	this.onEnded = function(cb) {
		this.endedCallback = chain(this, cb, this.endedCallback);
	}

	this.onTimeUpdate = function(cb) {
		this.timeUpdateCallback = chain(this, cb, this.timeUpdateCallback);
	}

	this.ready = function() {
		console.log("calling ready");
		console.log(this);
		var that = this;
		if (arguments.length > 0) {
			cb = arguments[0];
			this.readyCallback = chain(this, this.readyCallback, cb);
			if (this.isReady) {
				this.readyCallback(this);
			}
		} else {
			this.isReady = true;
			if (this.readyCallback) {
				this.readyCallback(this);
			}
		}
	}	


}

function TransitionTextPlayer(info) {
	var that = this;
	this.isReady = true;
	this.info = info;
	this.currentSentenceIndex = 0;

	var videoLoopContainer = d3.select('.overlayWrapper')
		.append('div')
    	.attr('class', 'videoLoopContainer')
    	.attr('id', info.loopId)
   		.style('display', 'none');


	var video = videoLoopContainer
        .append('video')
        .attr('class', 'videoLoop')
        .attr('preload', 'auto')
        .attr('autoplay', 'true')
        .attr('loop', 'loop')
        .attr('muted', 'muted')
        .attr('volume', 0)
        .attr('id', info.loopId+'Video');

    video.selectAll('source').data([{s: 'mp4',t: 'mp4'}, {s: 'webm',t: 'webm'}, {s: 'ogv',t: 'ogg'}]).enter()
        .append('source')
        .attr('src', function (d) { return './vid/' + info.transitionLoop + '.' + d.s; })
        .attr('type', function (d) { return 'video/' + d.t; });


    videoLoopContainer.selectAll('.textOverlay').data(info.transitionText).enter()
		.append('div')
        .attr('class', 'textOverlay')
        .attr('id', function(d, i) { return d.id+"Sentence"+(i+1);})
        .style('display', function(d, i) { return i == 0 ? 'block' : 'none'})
        .text(function(d){ return d.content ;})
        .append('image')
        .attr('src','./img/clickToContinue.png')
        .attr('class','advanceSlide')
        .attr('id',function(d, i) { return d.id+"Button"+(i+1);})
        .on('click',function(d, i){ that.sentenceEnded(i); });

	this.sentenceEnded = function(sentenceIndex) {
        	// each one.. fadesOut 'i-1' then fades in 'i+1'
	        this.fadeSentenceOut(sentenceIndex);
        	if (sentenceIndex < info.transitionText.length-1) {
        		this.fadeSentenceIn(sentenceIndex+1);
        	} else {

        		this.ended();
        	}

	}

	this.fadeSentenceOut = function(sentenceIndex) {
		var d = this.info.transitionText[sentenceIndex];
        $('#'+d.id+'Button'+(sentenceIndex+1)).fadeOut(500);
        $('#'+d.id+'Sentence'+(sentenceIndex+1)).fadeOut(500);
	}

	this.fadeSentenceIn = function(sentenceIndex) {
		var d = this.info.transitionText[sentenceIndex];
        $('#'+d.id+'Button'+(sentenceIndex+1)).fadeIn(500);
        $('#'+d.id+'Sentence'+(sentenceIndex+1)).fadeIn(500);
	}



	this.hide = function() {
		$('#'+this.info.loopId).hide();
	}

	this.show = function() {
		$('#'+this.info.loopId).show();
		var d = this.info.transitionText[0];
		$('#'+d.id+'Button1').show();
        $('#'+d.id+'Sentence1').show();
    }

	this.pause = function() {
	}

	this.paused = function() {
		return false;
	}

	this.play = function() {
	}

	this.volume = function(level) {
	}

	this.currentTime = function() {
		return 0.0;
	}

	this.duration = function() {
		return 0.0;
	}

	this.ended = function() {
		console.log("TransitionTextPlayer.ended");
		if (this.endedCallback) {
			this.endedCallback.call(this);
		}
	}

	this.onEnded = function(cb) {
		this.endedCallback = chain(this, cb, this.endedCallback);
	}

	this.onTimeUpdate = function(cb) {
	}

	this.ready = function() {
		var that = this;
		if (arguments.length > 0) {
			cb = arguments[0];
			this.readyCallback = chain(this, this.readyCallback, cb);
			if (this.isReady) {
				this.readyCallback(this);
			}
		} else {
			this.isReady = true;
			if (this.readyCallback) {
				this.readyCallback(this);
			}
		}
	}	


}

function PowellPlayer(info) {
	var that = this;
	this.isReady = true;
	this.info = info;


	var videoLoopContainer = d3.select('.overlayWrapper')
		.append('div')
    	.attr('class', 'videoLoopContainer')
    	.attr('id', info.loopId)
   		.style('display', 'none');


	var video = videoLoopContainer
        .append('video')
        .attr('class', 'videoLoop')
        .attr('preload', 'auto')
        .attr('autoplay', 'true')
        .attr('loop', 'loop')
        .attr('muted', 'muted')
        .attr('volume', 0)
        .attr('id', info.loopId+'Video');

    video.selectAll('source').data([{s: 'mp4',t: 'mp4'}, {s: 'webm',t: 'webm'}, {s: 'ogv',t: 'ogg'}]).enter()
        .append('source')
        .attr('src', function (d) { return './vid/' + info.transitionLoop + '.' + d.s; })
        .attr('type', function (d) { return 'video/' + d.t; });


    videoLoopContainer.selectAll('.textOverlay').data([info.content]).enter()
		.append('div')
        .attr('class', 'textOverlay')
        .text(String);



	this.hide = function() {
		$('#'+this.info.loopId).hide();
	}

	this.show = function() {
		var that = this;
		$('#'+this.info.loopId).show();
		console.log('show PowellPlayer');
        setTimeout(function(){
        	that.timerEnded();
        },10000);
    }

	this.pause = function() {
	}

	this.paused = function() {
		return false;
	}

	this.play = function() {
	}

	this.volume = function(level) {
	}

	this.currentTime = function() {
		return 0.0;
	}

	this.duration = function() {
		return 0.0;
	}

	this.timerEnded = function() {
		console.log('timer started');
		var that = this;
		var handler = function() {
			console.log(name)
			delete registry.dragHandler;
			that.ended();
		}
		registry.dragHandler = handler;
		console.log(registry);
		$('#dragButton').fadeIn(500);
		$('#dragPath').fadeIn(500);
		$('#clickForMore').fadeIn(500);
	}


	this.ended = function() {
		console.log("PowellPlayer.ended");
		if (this.endedCallback) {
			this.endedCallback.call(this);
		}
	}

	this.onEnded = function(cb) {
		this.endedCallback = chain(this, cb, this.endedCallback);
	}

	this.onTimeUpdate = function(cb) {
	}

	this.ready = function() {
		console.log("calling ready");
		console.log(this);
		var that = this;
		if (arguments.length > 0) {
			cb = arguments[0];
			this.readyCallback = chain(this, this.readyCallback, cb);
			if (this.isReady) {
				this.readyCallback(this);
			}
		} else {
			this.isReady = true;
			if (this.readyCallback) {
				this.readyCallback(this);
			}
		}
	}	


}

function MotionGraphicPlayer(info) {
	var that = this;
	this.isReady = false;
	this.info = info;
	this.video = videojs(info.videoId);
	this.volumeLevel = this.video.volume();
	this.video.volume(0);
	this.video.on("ended", function() {
		console.log("MotionGraphicPlayer.videoEnded");
		that.videoEnded();
	});
	this.video.on("timeupdate", function() {
		if (that.timeUpdateCallback) {
			that.timeUpdateCallback.call(that);
		}
	});

	this.video.on("progress", function() {
		var bufferedTime = that.video.buffered().end(0);
		console.log(that.video);
		console.log("bufferedTime is " + bufferedTime);
		if (bufferedTime > 1) {
			that.video.pause();
			that.video.volume(that.volumeLevel);
			that.video.currentTime(0);
		}

		if (bufferedTime > 20) {
			that.video.off("progress");
			that.ready();
			
		}  
	});
	this.video.play();

	this.hide = function() {
		this.video.hide();
	}

	this.show = function() {
		this.video.show();
	}

	this.pause = function() {
		this.video.pause();
	}

	this.paused = function() {
		return this.video.paused();
	}

	this.play = function() {
		this.video.play();
	}

	this.volume = function(level) {
		this.volumeLevel = level;
		this.video.volume(level);
	}

	this.currentTime = function() {
		return this.video.currentTime.apply(this.video, arguments);
	}

	this.duration = function() {
		return this.video.duration();
	}

	this.videoEnded = function() {
		var that = this;
		var handler = function() {
			console.log(name)
			delete registry.dragHandler;
			that.ended();
		}
		registry.dragHandler = handler;
		console.log(registry);
		$('#dragButton').fadeIn(500);
		$('#dragPath').fadeIn(500);
		$('#clickForMore').fadeIn(500);
	}


	this.ended = function() {
		console.log("MotionGraphicPlayer.ended");
		if (this.endedCallback) {
			this.endedCallback.call(this);
		}
	}

	this.onEnded = function(cb) {
		this.endedCallback = chain(this, cb, this.endedCallback);
	}

	this.onTimeUpdate = function(cb) {
		this.timeUpdateCallback = chain(this, cb, this.timeUpdateCallback);
	}

	this.ready = function() {
		console.log("calling ready");
		console.log(this);
		var that = this;
		if (arguments.length > 0) {
			cb = arguments[0];
			this.readyCallback = chain(this, this.readyCallback, cb);
			if (this.isReady) {
				this.readyCallback(this);
			}
		} else {
			this.isReady = true;
			if (this.readyCallback) {
				this.readyCallback(this);
			}
		}
	}	


}

function Player(sequence) {
	var that = this;

	this.sequence = sequence;
	this.currentPlayerIndex = 0;
	this.volumeLevel = 1;

	var timeUpdateCallbackCaller = function(index) {
		return function() {
			if (that.timeUpdateCallback && that.currentPlayerIndex == index) {
				that.timeUpdateCallback(this);
			}
		}
	}

	var transitioner = function(index) {
		return function() {
			console.log("Transition from player " + index);
			var curVid = that.vidAt(index);
			curVid.hide();
			curVid.volume(0);
			var nextVid = that.vidAt(index+1);
			console.log(nextVid);
			if (nextVid) {
				that.currentPlayerIndex = index+1;
				nextVid.currentTime(0);
				nextVid.volume(that.volumeLevel);
				nextVid.show();	
				nextVid.play();	
			}
		}
	}

	var playerFactory = {
		'video': function(seqElement) { return new VideoJSPlayer(seqElement); },
		'transitionText' : function(seqElement)  { return new TransitionTextPlayer(seqElement); },
		'motionGraphic' : function(seqElement) { return new MotionGraphicPlayer(seqElement); },
		'powell' : function(seqElement) { return new PowellPlayer(seqElement); },
		'conclusion' : function(seqElement) { return new ConclusionPlayer(seqElement); }
	}

	var createPlayer = function(seqElement) {
		var factoryFunction = playerFactory[seqElement.type];
		return factoryFunction(seqElement);
	} 




	this.players = [];
	for(var i = 0; i < sequence.length; i++) {
		var player = createPlayer(sequence[i]);
		player.hide();
		player.volume(0);
		this.players.push(player);
	}

	this.readyCallback = function() {
		console.log("setting up end event handler")
		for(var i = 0; i < that.players.length; i++) {
			var player = that.players[i];
			player.onEnded(transitioner(i));
			player.onTimeUpdate(timeUpdateCallbackCaller(i));
		}
	}

	var loading = this.players.slice();

	this.players.forEach(function(player) {
		console.log("calling ready for " + player);
		player.ready(function() {
			console.log("player " + player + " is ready");
			loading.splice(loading.indexOf(player), 1);
			console.log(loading);
			if (loading.length == 0) {
				that.ready();
			}
		});
	});

	

	this.players[this.currentPlayerIndex].show();
	this.players[this.currentPlayerIndex].volume(that.volumeLevel);
	//this.players[this.currentPlayerIndex].play();

	this.currentVid = function() {
		if (arguments.length > 0) {
			var index = arguments[0];
			if (index != this.currentPlayerIndex) {
				var paused = this.players[this.currentPlayerIndex].paused();
				this.players[this.currentPlayerIndex].pause();
				this.players[this.currentPlayerIndex].hide();
				this.players[this.currentPlayerIndex].volume(0);
				this.currentPlayerIndex = index;
				this.players[this.currentPlayerIndex].show();
				this.players[this.currentPlayerIndex].volume(this.volumeLevel);
				if (!paused) {
					this.players[this.currentPlayerIndex].play();
				}
			}

		} else {
			return this.players[this.currentPlayerIndex];
		}
	}

	this.vidAt = function(index) {
		return this.players[index];
	}

	this.pause = function() {
		console.log("pausing");
		for(var i = 0; i < this.players.length; i++) {
			this.players[i].pause();
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
			for(var i = 0; i < this.players.length; i++) {
				var nextEnd = lastEnd + this.players[i].duration();
				if (lastEnd <= time && time < nextEnd) {
					this.currentVid(i);
					this.currentVid().currentTime(time-lastEnd);
					return;
				}
				lastEnd = nextEnd;
			}

		} else {
			var time = 0.0;
			for(var i = 0; i < this.currentPlayerIndex; i++) {
				var dur = this.players[i].duration();
				time += this.players[i].duration();
			}
			time += this.currentVid().currentTime();
			//console.log("currentTime is " + time);
			return time;
		}
	}
	this.duration = function() {
		var time = 0.0;
		for(var i = 0; i < this.players.length; i++) {
			time += this.players[i].duration();
		}
		//console.log("returning duration " + time);
		return time;
	}
	this.volume = function(level) {
		this.volumeLevel = level;
		this.currentVid().volume(level);
	}
	this.onTimeUpdate = function(callback) {
		this.timeUpdateCallback = callback;
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

