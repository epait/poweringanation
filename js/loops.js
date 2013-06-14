var pop = Popcorn("#mainTrack");
var myPlayer = videojs("mainTrack");


	// Dynamically Create Video Loops		
	// d3.select('.overlayWrapper').selectAll('.videoLoopContainer').data(pausePoints).enter()
	// 	.append('div')
	// 		.attr('class','videoLoopContainer')
	// 		.attr('id',function(d){return d.loop;})
	// 		.style('display','none')
	// 	.append('video')
	// 		.attr('class','videoLoop')
	// 		.attr('preload','auto')
	// 		.attr('autoplay','true')
	// 		.attr('loop','loop')
	// 		.attr('muted','muted')
	// 		.attr('volume',0)
	// 		.attr('id',function(d){return d.loop;})
	// 		.each(function(d){
	// 			d3.select(this).selectAll('source').data([{s:'mp4',t:'mp4'},{s:'webm',t:'webm'},{s:'ogv',t:'ogg'}]).enter()
	// 				.append('source')
	// 					.attr('src',function(t) {return './vid/' + d.loop + '.' + t.s;})
	// 					.attr('type', function(t) { return 'video/'+t.t;})
	// 		})
	// 	.append('div')
	// 		.attr('class','textOverlay')
	// 		.attr('id','firstSentence')
	// 		.text(function(d){return d.text1;});


function createPausePoint(selection) {
    var videoLoopContainer = selection
    .append('div')
    .attr('class', 'videoLoopContainer')
    .attr('id', function (d) {
                    return d.loop;
    })
   .style('display', 'none');
    
    videoLoopContainer
        .append('video')
        .attr('class', 'videoLoop')
        .attr('preload', 'auto')
        .attr('autoplay', 'true')
        .attr('loop', 'loop')
        .attr('muted', 'muted')
        .attr('volume', 0)
        .attr('id', function (d) {
                return d.loop;
        })
        .each(function (d) {
                d3.select(this).selectAll('source').data([{s: 'mp4',t: 'mp4'}, {s: 'webm',t: 'webm'}, {s: 'ogv',t: 'ogg'}]).enter()
                    .append('source')
                    .attr('src', function (t) { return './vid/' + d.loop + '.' + t.s; })
                    .attr('type', function (t) { return 'video/' + t.t; });
        });
    
    videoLoopContainer   
        .append('div')
        .attr('class', 'textOverlay')
        .attr('id', 'firstSentence')
        .text(function (d) {
            return d.text1;
        });
    videoLoopContainer   
        .append('div')
        .attr('class', 'textOverlay')
        .attr('id', 'secondSentence')
        .text(function (d) {
            return d.text2;
        });
}

var selection = d3.select('.overlayWrapper').selectAll('.videoLoopContainer').data(pausePoints).enter();
createPausePoint(selection);

	
	// Create Video Overlays
	// d3.select('.overlayWrapper').selectAll('.videoLoopContainer').data(secondLevel).enter()
	// 	.append('div')
	// 		.attr('class','videoLoopContainer')
	// 		.attr('id',function(d){return d.loop;})
	// 		.style('display','none')
	// 	.append('video')
	// 		.attr('class','videoLoop')
	// 		.attr('preload','auto')
	// 		.attr('autoplay','true')
	// 		.attr('id',function(d){return d.loop;})
	// 		.each(function(d){
	// 			d3.select(this).selectAll('source').data([{s:'mp4',t:'mp4'},{s:'webm',t:'webm'},{s:'ogv',t:'ogg'}]).enter()
	// 				.append('source')
	// 					.attr('src',function(t) {return './vid/' + d.loop + '.' + t.s;})
	// 					.attr('type', function(t) { return 'video/'+t.t;})
	// 		});



	// Create Popcorn Code Plugin for Each Pause Point
	function popcornPlugin (pausePoint) {
		return {
			start: pausePoint.start,
			end: pausePoint.end,
			onStart: function() {
				$('#'+pausePoint.loop).fadeIn(1000);
				myPlayer.pause();
				myPlayer.currentTime(pausePoint.start);
				setTimeout(function() {
					$('#dragButton').fadeIn(500);
					$('#dragPath').fadeIn(500);
				}, pausePoint.delay);
			},
			onEnd: function() {
				$('#'+pausePoint.loop).fadeOut(500);
				$('#dragButton').hide();
				$('#dragPath').hide();
			}
		};
	};
	for (var i=0; i<pausePoints.length; i++) {
		var pausePoint=pausePoints[i];
		var plugin = popcornPlugin(pausePoint);
		pop.code(plugin);
	};
