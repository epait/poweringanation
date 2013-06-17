function hideMenu () {
		var timer;
		var down = true;
	    $(document).mousemove(function() {
	        if (timer) {
	            window.clearTimeout(timer);            
	            timer = 0;
	        } 
	        if(down) { 
	            $('.videoControls').animate({bottom:'10px'},'fast');  
	           down = false;
	        }
	        timer = setTimeout(function() {
	           $('.videoControls').animate({bottom:'-40px'},'fast');
	           down = true;
	        }, 5000);

	    });
	};
hideMenu();


var progressBarWidth = function() { return $('#progressBar').width() - 195; }
var timeAsPercent = function(time) { return time/ pop.duration(); }
var timePosition = function(time) { return timeAsPercent(time)*progressBarWidth() + 45; }
var progressPosition = function() { return timePosition(pop.currentTime()); }
var secondsPerPixel = function() { return pop.duration()/progressBarWidth(); }
var timeToPausePoint = function (pauseTime) { return pauseTime - pop.currentTime(); }
var pausePointVisible = function(d) { return timeToPausePoint(d.start) < 10*secondsPerPixel() ? 1 : 0; }
var pageWrapperOffset = function() {return $('#pageWrapper').offset(); }
var eventTime = function (position) {return (position/progressBarWidth())*pop.duration(); }
var progressCirclePosition = function (id) {return d3.select(id).attr('cx') - 45; }

$('#progressClickOverlay').click(function(e) {
	var clickLocation = e.pageX - (pageWrapperOffset().left + 45);
	pop.currentTime(eventTime(clickLocation));
});


var drag = d3.behavior.drag()
        .on("drag", function() {
        	pop.pause();
        	myPlayer.pause();
            d3.select(this).attr("cx", d3.event.x);
        })
        .on("dragend", function() {
        	pop.currentTime(eventTime(progressCirclePosition('#drag')));
        	pop.play();
        	myPlayer.play();
        });


var progressFunc = function () {
		var sliderWidthInSeconds = 10*secondsPerPixel();

		var pauseDiamonds = d3.select('.diamonds').selectAll('.pauseDiamond').data(diamondPoints);
		var diamondTransform = function(d) {return 'translate(' + (timePosition(d.start)) + ',16) rotate(-45)'};

		pauseDiamonds.enter().append('g').attr('transform',diamondTransform).attr('class','pauseDiamond').append('rect').attr('x',-4).attr('y',-4).attr('width',8).attr('height',8);
		d3.select('#drag').transition().ease('linear').duration(250).attr('cx',progressPosition());
		pauseDiamonds.attr('transform', diamondTransform);
		pauseDiamonds.select('rect').transition().duration(1000).style('opacity', pausePointVisible);
		pauseDiamonds.on('click',function(d){pop.currentTime(d.start);});
		var now = pop.currentTime();
		var end = pop.duration();
		if (now>=end) {
			pop.pause();
			myPlayer.pause();
		}
}





videoAct1.ready(function() {
	d3.select('#drag').call(drag);
	pop.on("timeupdate", progressFunc);
});


$(window).resize(function() {
	progressFunc();
});
