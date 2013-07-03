	var chain = function(that, cb1, cb2) {
		return function() {
			if (cb1) { cb1(that); }
			if (cb2) { cb2(that); } 
		}
	}


function Loader(panPlayer) {
	var that = this;


	this.next = function(player) {
		var nextIndex = panPlayer.currentPlayerIndex+1 % panPlayer.players.length;

		for(var i = 0; i < panPlayer.players.length; i++) {
			var index = (nextIndex+i) % panPlayer.players.length;
			console.log("index is " + index);
			console.log("length is " + panPlayer.players.length);
			console.log(panPlayer.players[index]);
			if (!panPlayer.players[index].isLoaded) {
				return panPlayer.players[index];
			}
		}
		return null;
	}

	this.loaded = function(player) {
		console.log("Loader finished loading " + player.videoId);
		var nextPlayer = this.next(player);
		console.log("nextPlayer")
		console.log(nextPlayer);
		if (nextPlayer != null) {
			nextPlayer.load();
		}
	};

	this.currentVid = function(index) {
		this.nextToLoad = panPlayer.currentPlayerIndex+1 % panPlayer.players.length;
	}

	panPlayer.players.forEach(function(player) {
		player.onLoaded(function() { that.loaded(player); })
	});

}


function VideoJSPlayer(info) {
	var that = this;
	this.isReady = false;
	this.isVideo = true;
	this.isLoaded = false;
	this.video = videos[info.videoId];
	this.videoId = info.videoId;
	this.volumeLevel = this.video.volume();
	this.cachedDuration = info.duration;
	this.video.volume(0);
	this.preloading = false;
	this.video.on("ended", function() {
		console.log("VideoJSPlayer.ended");
		if (that.endedCallback) {
			console.log("calling endedCallback");
			that.endedCallback.call(that);
		}
	});
	this.video.on("timeupdate", function() {
		console.log('timeupdate for ' + that.videoId);
		if (that.preloading) {return;}
		if (that.paused()) {return;}
		console.log(that.videoId + 'is paused?' + that.paused());
		console.log(that.videoId + 'is not preloading');
		if (that.timeUpdateCallback) {
			that.timeUpdateCallback.call(that);
		}
		$('#dragButton').hide();
		$('#dragPath').hide();
		console.log('drag path is hidden by ' + that.videoId);
		$('#clickForMore').hide();
		$('.clickForMore').hide();
		$('.extendedTextBackground').hide();
		$('.secondLevelContent').hide();
	});

	this.video.on("progress", function() {
		if (that.preloading && that.bufferedTime() > 1) {
			that.preloading = false;
			that.video.pause();
			console.log(that.videoId + 'paused by preloader');
		}
		if (that.progressCallback) {
			that.progressCallback.call(that);
			// that.video.pause();
		}
		if (that.isReady && (that.duration() - that.bufferedTime() < 2.0)) {
			that.isLoaded = true;
			if (that.loadedCallback) {
				that.loadedCallback.call(that);
				that.video.off('progress');
				// that.video.pause();
			}
		}
	});

	this.video.on("loadedmetadata", function() {
		that.cachedDuration = that.video.duration();
		that.ready();
	});


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

	this.bufferedTime = function() {
		var b = this.video.buffered();
		return b.end(0) - b.start(0);
	}

	this.bufferStats = function() {
		return '<'+this.videoId+": "+this.bufferedTime()+" of "+this.duration()+">";
	}


	this.play = function() {
		this.preloading = false;
		this.video.play();
	}

	this.load = function() {
		if (this.isLoaded) {
			if (this.loadedCallback) {
				this.loadedCallback.call(this);
			}
		}
		else if (!this.preloading && this.paused()) {
			this.video.volume(0);
			this.preloading = true;
			this.video.play();
		}
	}

	this.volume = function(level) {
		this.volumeLevel = level;
		this.video.volume(level);
	}

	this.currentTime = function() {
		return this.video.currentTime.apply(this.video, arguments);
	}

	this.duration = function() {
		return this.cachedDuration;
	}

	this.onEnded = function(cb) {
		this.endedCallback = chain(this, cb, this.endedCallback);
	}

	this.onTimeUpdate = function(cb) {
		this.timeUpdateCallback = chain(this, cb, this.timeUpdateCallback);
	}

	this.onProgress = function(cb) {
		this.progressCallback = chain(this, cb, this.progressCallback);
	}

	this.onLoaded = function(cb) {
		this.loadedCallback = chain(this, cb, this.loadedCallback);
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
	this.isVideo = false;
	this.isLoaded = true;
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
			var that = this;
        	// each one.. fadesOut 'i-1' then fades in 'i+1'
	        this.fadeSentenceOut(sentenceIndex);
        	if (sentenceIndex < info.transitionText.length-1) {
        		setTimeout(function() {
        			that.fadeSentenceIn(sentenceIndex+1);
        		},1500);
        	} else {
        		setTimeout(function() {
        			that.ended();
        		},1500);
        	}

	}

	this.fadeSentenceOut = function(sentenceIndex) {
		var d = this.info.transitionText[sentenceIndex];
        $('#'+d.id+'Button'+(sentenceIndex+1)).fadeOut(1000);
        $('#'+d.id+'Sentence'+(sentenceIndex+1)).fadeOut(1000);
	}

	this.fadeSentenceIn = function(sentenceIndex) {
		var d = this.info.transitionText[sentenceIndex];
        $('#'+d.id+'Button'+(sentenceIndex+1)).fadeIn(1000);
        $('#'+d.id+'Sentence'+(sentenceIndex+1)).fadeIn(1000);
	}

	this.load = function() {
		if (this.loadedCallback) {
			this.loadedCallback.call(this);
		}
	}

	this.hide = function() {
		$('#'+this.info.loopId).hide();
	}

	this.show = function() {
		$('#'+this.info.loopId).fadeIn(1000);
		var d = this.info.transitionText[0];
		$('#'+d.id+'Button1').fadeIn(1000);
        $('#'+d.id+'Sentence1').fadeIn(1000);
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

	this.bufferedTime = function() {
		return 0.0;
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

	this.onProgress = function(cb) {

	}

	this.onLoaded = function(cb) {
		this.loadedCallback = chain(this, cb, this.loadedCallback);
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
	this.isVideo = false;
	this.isLoaded = true;

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
        .attr('id', 'powellText')
        .html(String);
    videoLoopContainer.selectAll('.textOverlay').data([info.id])
        .append('img')
	        .attr('src','./img/clickForMore.png')
	        .attr('class','clickForMore')
	        .attr('id', function(d){ return info.loopId+'Button';});



	this.hide = function() {
		$('#'+this.info.loopId).hide();
		$('.focusWords').css('opacity','0');
		$('.showLast').css('opacity','0');
	}

	this.show = function() {
		var that = this;
		$('.secondLevelContent').hide();
		$('#'+this.info.loopId).show();
		setTimeout(function() {
			$('#showFirst').animate({
				opacity: 1
			}, 1000);
		}, 100);
		setTimeout(function() {
			$('#showSecond').animate({
				opacity: 1
			}, 1000);
		}, 433);
		setTimeout(function() {
			$('#showThird').animate({
				opacity: 1
			}, 1000);
		}, 2433);
		setTimeout(function() {
			$('#showFourth').animate({
				opacity: 1
			}, 1000);
		}, 2766);
		setTimeout(function() {
			$('#showFifth').animate({
				opacity: 1
			}, 1000);
		}, 3766);
		setTimeout(function() {
			$('#showSixth').animate({
				opacity: 1
			}, 1000);
		}, 3100);
		setTimeout(function() {
			$('.showLast').animate({
				opacity: 0.6
			}, 1500);
		}, 6600);
		console.log('show PowellPlayer');
        setTimeout(function(){
        	that.timerEnded();
        },12000);
    }

	this.pause = function() {
	}

	this.paused = function() {
		return false;
	}

	this.play = function() {
	}

	this.load = function() {
		if (this.loadedCallback) {
			this.loadedCallback.call(this);
		}
	}

	this.volume = function(level) {
	}

	this.bufferedTime = function() {
		return 0.0;
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
		$('#powellLoopButton').fadeIn(500);
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

	this.onProgress = function(cb) {

	}
	this.onLoaded = function(cb) {
		this.loadedCallback = chain(this, cb, this.loadedCallback);
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


function ConclusionPlayer(info) {
	var that = this;
	this.isReady = true;
	this.isVideo = false;
	this.info = info;
	this.isLoaded = true;


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
        .html(String);        


	this.hide = function() {
		$('#'+this.info.loopId).hide();
		$('.focusWords').css('opacity','0');
		$('.showConclusionLast').css('opacity','0');
	}

	this.show = function() {
		var that = this;
		$('.secondLevelContent').hide();
		$('#'+this.info.loopId).show();
		setTimeout(function() {
			$('#showConclusionFirst').animate({
				opacity: 1
			}, 1000);
		}, 100);
		setTimeout(function() {
			$('#showConclusionSecond').animate({
				opacity: 1
			}, 1000);
		}, 433);
		setTimeout(function() {
			$('#showConclusionThird').animate({
				opacity: 1
			}, 1000);
		}, 2433);
		setTimeout(function() {
			$('#showConclusionFourth').animate({
				opacity: 1
			}, 1000);
		}, 2766);
		setTimeout(function() {
			$('#showConclusionFifth').animate({
				opacity: 1
			}, 1000);
		}, 3766);
		setTimeout(function() {
			$('#showConclusionSixth').animate({
				opacity: 1
			}, 1000);
		}, 4100);
		setTimeout(function() {
			$('.showConclusionLast').animate({
				opacity: 0.6
			}, 1500);
		}, 6600);
		console.log('show PowellPlayer');
        setTimeout(function(){
        	that.timerEnded();
        },12000);
    }

	this.pause = function() {
	}

	this.paused = function() {
		return false;
	}

	this.play = function() {
	}

	this.load = function() {
		if (this.loadedCallback) {
			this.loadedCallback.call(this);
		}
	}

	this.volume = function(level) {
	}

	this.bufferedTime = function() {
		return 0.0;
	}

	this.currentTime = function() {
		return 0.0;
	}

	this.duration = function() {
		return 0.0;
	}

	this.timerEnded = function() {
		// console.log('timer started');
		// var that = this;
		// var handler = function() {
		// 	console.log(name)
		// 	delete registry.dragHandler;
		// 	that.ended();
		// }
		// registry.dragHandler = handler;
		// console.log(registry);
		// $('#dragButton').fadeIn(500);
		// $('#dragPath').fadeIn(500);
		// $('#clickForMore').fadeIn(500);
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

	this.onProgress = function(cb) {

	}
	this.onLoaded = function(cb) {
		this.loadedCallback = chain(this, cb, this.loadedCallback);
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
	this.isVideo = true;
	this.info = info;
	this.isLoaded = false;
	this.video = videos[info.videoId];
	this.videoId = info.videoId;
	this.cachedDuration = info.duration;
	this.volumeLevel = this.video.volume();
	this.video.volume(0);
	this.preloading = false;
	this.video.on('ended',function() {
		if (that.endedCallback) {
			console.log("calling endedCallback");
			that.endedCallback.call(that);
		}
	});
	this.video.on("timeupdate", function() {
		if (that.preloading) {return;}
		if (that.paused()) {return;}
		var timeRemaining = that.duration()-that.currentTime();
		$('.extendedTextBackground').hide();
		$('.secondLevelContent').hide();
		if (that.timeUpdateCallback) {
			that.timeUpdateCallback.call(that);
		}
		if (timeRemaining<1) {
			$('#dragButton').fadeOut(500);
			$('#dragPath').fadeOut(500);
			$('#'+info.buttonId).fadeOut(500);
		}
		else if (timeRemaining<=25) {
			console.log('Buttons Revealed');
			that.revealButtons();
		}
		else {
			$('#dragButton').hide();
			$('#dragPath').hide();
			$('#'+info.buttonId).hide();
		}
	});

	this.video.on("progress", function() {
		if (that.preloading && that.bufferedTime() > 1.0) {
			that.preloading = false;
			that.video.pause();
		}
		if (that.progressCallback) {
			that.progressCallback.call(that);
			// that.video.pause();
		}
		if (that.isReady && (that.duration() - that.bufferedTime() < 2.0)) {
			that.isLoaded = true; 
			if (that.loadedCallback) {
				that.loadedCallback.call(that);
				// that.video.pause();
				that.video.off('progress');
			}
		}
	});

	this.video.on("loadedmetadata", function() {
		that.cachedDuration = that.video.duration();
		that.ready();
	});

	this.hide = function() {
		this.video.hide();
	}

	this.show = function() {
		this.video.show();
	}

	this.pause = function() {
		this.video.pause();
	}

	this.load = function() {
		if (this.isLoaded) {
			if (this.loadedCallback) {
				this.loadedCallback.call(this);
			}
		}
		else if (!this.preloading && this.paused()) {
			this.preloading = true;
			this.video.volume(0);
			this.video.play();
		}
	}

	this.paused = function() {
		return this.video.paused();
	}

	this.play = function() {
		this.preloading = false;
		this.video.play();
	}

	this.volume = function(level) {
		this.volumeLevel = level;
		this.video.volume(level);
	}

	this.bufferedTime = function() {
		var b = this.video.buffered();
		return b.end(0) - b.start(0);
	}

	this.bufferStats = function() {
		return '<'+this.videoId+": "+this.bufferedTime()+" of "+this.duration()+">";
	}

	this.currentTime = function() {
		return this.video.currentTime.apply(this.video, arguments);
	}

	this.duration = function() {
		return this.cachedDuration;
	}

	this.revealButtons = function() {
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
		$('#'+info.buttonId).fadeIn(500);
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

	this.onProgress = function(cb) {
		this.progressCallback = chain(this, cb, this.progressCallback);
	}
	this.onLoaded = function(cb) {
		this.loadedCallback = chain(this, cb, this.loadedCallback);
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

	this.isReady = false;
	this.sequence = sequence;
	this.currentPlayerIndex = 0;
	this.volumeLevel = 1;

	var timeUpdateCallbackCaller = function(index) {
		return function() {
			if (that.timeUpdateCallback && that.currentPlayerIndex == index) {
				that.timeUpdateCallback(that);
			}
		}
	}

	var progressCallbackCaller = function(index) {
		return function() {
			if (that.progressCallback) {
				that.progressCallback(that);
			}
		}
	}

	var transitioner = function(index) {
		return function() {
			console.log("Transition from player " + index);
			that.currentVid(index+1);
			that.play();
		}
	}

	var preloader = function(index) {
		return function() {
			console.log("Finished loading " + index)
			var nextVid = that.vidAt(index+1);
			if (nextVid) {
				console.log("Loading "+ nextVid);
				nextVid.load(preloader(index+1));
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
		console.log("setting up end event handler");
		for(var i = 0; i < that.players.length; i++) {
			var player = that.players[i];
			player.onEnded(transitioner(i));
			player.onTimeUpdate(timeUpdateCallbackCaller(i));
			player.onProgress(progressCallbackCaller(i));
		}
	}


	this.loader = new Loader(this);

	this.players[0].load();

	this.players[0].ready(function() {
		that.ready();
	});

	// this.players.forEach(function(player) {
	// 	console.log("calling ready for " + player);
	// 	player.ready(function() {
	// 		console.log("player " + player + " is ready");
	// 		loading.splice(loading.indexOf(player), 1);
	// 		console.log(loading);
	// 		if (loading.length == 0) {
	// 			that.ready();
	// 		}
	// 	});
	// });

	// this.players[0].volume(0);
	// this.players[0].play();

	
	//this.players[this.currentPlayerIndex].play();

	this.currentVid = function() {
		if (arguments.length > 0) {
			var index = arguments[0];
			if (index != this.currentPlayerIndex && index < this.players.length) {
				var paused = this.players[this.currentPlayerIndex].paused();
				this.players[this.currentPlayerIndex].pause();
				this.players[this.currentPlayerIndex].hide();
				this.players[this.currentPlayerIndex].volume(0);
				this.players[this.currentPlayerIndex].currentTime(0);
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

	this.findNextVideo = function(index) {
		console.log('calling findNextVideo' + this.players.length);
		console.log(index);
		for(var i = index+1; i < this.players.length; i++) {
			console.log('next video function loaded');
			if (this.players[i].isVideo) {
				console.log('this player is a video');
				return this.players[i];
			}
		}
		return null;
	}

	this.pause = function() {
		for(var i = 0; i < this.players.length; i++) {
			this.players[i].pause();
		}
		console.log("pausing");
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

	this.bufferedTime = function() {
		var time = 0.0;
		for(var i = 0; i < this.players.length; i++) {
			var player = this.players[i];
			if (player.isReady) {
				time += this.players[i].bufferedTime();
			}
		}
		return time;
	}

    this.bufferStats = function() {
    	var results = "[\n";
    	var first = true;
    	for(var i = 0; i < this.players.length; i++) {
    		var player = this.players[i];
    		if (!player.hasOwnProperty('bufferStats')) continue;
    		if (!first) {
    			results += ",\n"
    		} else {
    			first = false;
    		}
    		results += this.players[i].bufferStats();
    	}
    	results += "\n]";
    	return results;
    }

	this.duration = function() {
 		var time = 0.0;
		for(var i = 0; i < this.players.length; i++) {
			time += this.players[i].duration();
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

	this.onProgress = function(callback) {
		this.progressCallback = callback;
	}

	this.ready = function() {
		var that = this;
		if (arguments.length > 0) {
			cb = arguments[0];
			this.readyCallback = chain(this, this.readyCallback, cb);
		} else {
			this.isReady = true;
			this.players[this.currentPlayerIndex].show();
			this.players[this.currentPlayerIndex].volume(that.volumeLevel);
			if (this.readyCallback) {
				this.readyCallback(this);
			}
		}
	}
}

