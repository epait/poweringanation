//registry = {};

var slider = function(cb) {

	$(function() {
		$("#dragButton").draggable({
			axis: 'x',
			drag: function(event, ui) {
				$('#dragClick').attr('transform','translate('+ui.position.left+',13) scale(0.65)');
				$('#dragArrow').attr('transform','translate('+ui.position.left+',13) scale(0.65)');
				$('#resumeVideo').attr('transform','translate('+ui.position.left+',13) scale(0.65)');
				if (ui.position.left > dragButtonStart()+285) {
					$('#dragWrapper').hide();
					cb();
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

}

var introSlider = function(cb) {

	$(function() {
		$("#dragButton2").draggable({
			axis: 'x',
			drag: function(event, ui) {
				$('#dragClick2').attr('transform','translate('+ui.position.left+',13) scale(0.65)');
				$('#dragArrow2').attr('transform','translate('+ui.position.left+',13) scale(0.65)');
				$('#resumeVideo2').attr('transform','translate('+ui.position.left+',13) scale(0.65)');
				if (ui.position.left > dragButtonStart()+285) {
					$('#dragWrapper2').hide();
					cb();
					$('#resumeVideo2').attr('transform',dragButtonPositioning);
	  				$('#dragArrow2').attr('transform',dragButtonPositioning);
	  				$('#dragClick2').attr('transform',dragButtonPositioning);
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
}


var showIntroSlider = function() {
	$('#dragWrapper2').fadeIn(1000);
}

var showSlider = function() {
	console.log('showSlider');
	$('#dragWrapper').fadeIn(1000);
}