

function ProgressBar(elementId, clickOverlayId, offsetContainerId, containerId, dragElementId, player) {
	this.elementId = elementId;
	this.offsetContainerId = offsetContainerId;
	this.containerId = containerId;
	this.dragElementId = dragElementId;
	this.clickOverlayId = clickOverlayId;
	this.player = player;
	var that = this;

	this.element = function () { return $('#'+this.elementId);}
	this.offsetContainer = function() { return $('#'+this.offsetContainerId); }
	this.container = function() { return $('#'+this.containerId);}
	this.dragElement = function() { return document.getElementById(this.dragElementId);}
	this.clickOverlay = function() { return $('#'+this.clickOverlayId); }

	function hideMenu () {
			var timer;
			var down = true;
		    $(document).mousemove(function() {
		        if (timer) {
		            window.clearTimeout(timer);            
		            timer = 0;
		        } 
		        if(down) { 
		            that.container().animate({bottom:'10px'},'fast');  
		           down = false;
		        }
		        timer = setTimeout(function() {
		           that.container().animate({bottom:'-40px'},'fast');
		           down = true;
		        }, 5000);

		    });
		};
	hideMenu();


	var progressBarWidth = function() { return that.element().width() - 195; }
	var timeAsPercent = function(time) { return time/ that.player.duration(); }
	var timePosition = function(time) { return timeAsPercent(time)*progressBarWidth() + 45; }
	var progressPosition = function() { return timePosition(that.player.currentTime()); }
	var secondsPerPixel = function() { return that.player.duration()/progressBarWidth(); }
	var timeToPausePoint = function (pauseTime) { return pauseTime - that.player.currentTime(); }
	var pausePointVisible = function(d) { return timeToPausePoint(d.start) < 10*secondsPerPixel() ? 1 : 0; }
	var pageWrapperOffset = function() {return that.offsetContainer().offset(); }
	var eventTime = function (position) {return (position/progressBarWidth())*that.player.duration(); }
	var progressCirclePosition = function () {return d3.select(that.dragElement()).attr('cx') - 45; }

	that.clickOverlay().click(function(e) {
		var clickLocation = e.pageX - (pageWrapperOffset().left + 45);
		that.player.currentTime(eventTime(clickLocation));
	});


	var drag = d3.behavior.drag()
	        .on("drag", function() {
	        	that.player.pause();
	            d3.select(this).attr("cx", d3.event.x);
	        })
	        .on("dragend", function() {
	        	that.player.currentTime(eventTime(progressCirclePosition()));
	        	that.player.play();
	        });


	var progressFunc = function () {
			var sliderWidthInSeconds = 10*secondsPerPixel();

			var pauseDiamonds = d3.select('.diamonds').selectAll('.pauseDiamond').data(diamondPoints);
			var diamondTransform = function(d) {return 'translate(' + (timePosition(d.start)) + ',16) rotate(-45)'};

			pauseDiamonds.enter().append('g').attr('transform',diamondTransform).attr('class','pauseDiamond').append('rect').attr('x',-4).attr('y',-4).attr('width',8).attr('height',8);
			d3.select(that.dragElement()).transition().ease('linear').duration(250).attr('cx',progressPosition());
			pauseDiamonds.attr('transform', diamondTransform);
			pauseDiamonds.select('rect').transition().duration(1000).style('opacity', pausePointVisible);
			pauseDiamonds.on('click',function(d){that.player.currentTime(d.start);});
			var now = that.player.currentTime();
			var end = that.player.duration();
			if (now>=end) {
				that.player.pause();
			}
	}


	that.player.ready(function() {
		console.log("pb ready");
		d3.select(that.dragElement()).call(drag);
		that.player.onTimeUpdate(progressFunc);
	});

	$(window).resize(function() {
		progressFunc();
	});


}



