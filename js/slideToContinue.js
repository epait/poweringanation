$(function() {
	$("#dragButton").draggable({
		axis: 'x',
		drag: function(event, ui) {
			$('#dragClick').attr('transform','translate('+ui.position.left+',13) scale(0.85)');
			$('#dragArrow').attr('transform','translate('+ui.position.left+',13) scale(0.85)');
			$('#resumeVideo').attr('transform','translate('+ui.position.left+',13) scale(0.85)');
			if (ui.position.left > dragButtonStart()+365) {
				$('#dragButton').hide();
				$('#dragPath').hide();
				pop.play();
				$('#resumeVideo').attr('transform',dragButtonPositioning);
  				$('#dragArrow').attr('transform',dragButtonPositioning);
  				$('#dragClick').attr('transform',dragButtonPositioning);
			}
		},
		stop: function(event, ui) {
			if (ui.position.left < dragButtonStart()+364) {
				d3.select('#resumeVideo').transition().ease('linear').duration(500).attr('transform',dragButtonPositioning);
  				d3.select('#dragArrow').transition().ease('linear').duration(500).attr('transform',dragButtonPositioning);
  				d3.select('#dragClick').transition().ease('linear').duration(500).attr('transform',dragButtonPositioning);
			}
		}
	});
});