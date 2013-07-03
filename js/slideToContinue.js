//registry = {};

var dragHandler = function() {
	console.log("looking for dragHandlers")
	console.log(registry);
	if (registry.dragHandler) {
		registry.dragHandler();
	}
}

$(function() {
	$("#dragButton").draggable({
		axis: 'x',
		drag: function(event, ui) {
			$('#dragClick').attr('transform','translate('+ui.position.left+',13) scale(0.65)');
			$('#dragArrow').attr('transform','translate('+ui.position.left+',13) scale(0.65)');
			$('#resumeVideo').attr('transform','translate('+ui.position.left+',13) scale(0.65)');
			if (ui.position.left > dragButtonStart()+285) {
				$('#dragButton').hide();
				$('#dragPath').hide();
				$('#clickForMore').hide();
				$('.clickForMore').hide();
				$('.secondLevelContent').hide();
				$('.extendedTextBackground').hide();
				$('#powellText').show();
				$('#powellLoopButton').show();
				dragHandler();
				$('#resumeVideo').attr('transform',dragButtonPositioning);
  				$('#dragArrow').attr('transform',dragButtonPositioning);
  				$('#dragClick').attr('transform',dragButtonPositioning);
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < dragButtonStart()+284) {
				d3.select('#resumeVideo').transition().ease('linear').duration(500).attr('transform',dragButtonPositioning);
  				d3.select('#dragArrow').transition().ease('linear').duration(500).attr('transform',dragButtonPositioning);
  				d3.select('#dragClick').transition().ease('linear').duration(500).attr('transform',dragButtonPositioning);
			}
		}
	});
});


$(function() {
	$("#dragButton2").draggable({
		axis: 'x',
		drag: function(event, ui) {
			$('#dragClick2').attr('transform','translate('+ui.position.left+',13) scale(0.65)');
			$('#dragArrow2').attr('transform','translate('+ui.position.left+',13) scale(0.65)');
			$('#resumeVideo2').attr('transform','translate('+ui.position.left+',13) scale(0.65)');
			if (ui.position.left > dragButtonStart()+285) {
				$('#dragButton2').hide();
				$('#dragPath2').hide();
				$('#resumeVideo2').attr('transform',dragButtonPositioning);
  				$('#dragArrow2').attr('transform',dragButtonPositioning);
  				$('#dragClick2').attr('transform',dragButtonPositioning);
  				$('#loadingWrapper').hide();
  				$('#pageWrapper').show();
  				document.getElementById('natSoundAct5A').pause();
  				document.getElementById('natSoundAct5B').pause();
  				introVideo.pause();
  				panPlayer.currentTime(0);
  				panPlayer.volume(1);
  				panPlayer.play();
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < dragButtonStart()+284) {
				d3.select('#resumeVideo2').transition().ease('linear').duration(500).attr('transform',dragButtonPositioning);
  				d3.select('#dragArrow2').transition().ease('linear').duration(500).attr('transform',dragButtonPositioning);
  				d3.select('#dragClick2').transition().ease('linear').duration(500).attr('transform',dragButtonPositioning);
			}
		}
	});
});


