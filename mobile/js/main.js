
$(document).ready(function(){
	$('#scrollbar1').tinyscrollbar();
	var x = window.innerWidth;
	var y = window.innerHeight;
		$('.storyBox').height(y-300);
		$('#frame1').width(x).height(y+130);
		$('#scrollbg').width(x).height(y);
	
	//iphone landscape iframe sizing fix
	if (y>200 && x<760){
		//$('#frame1').width(x).height(y+60);
		$('#embed1').empty().append('<iframe src="http://player.vimeo.com/video/69633971?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="258" height="145" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');		//$('#embed3').empty().append('<iframe src="http://player.vimeo.com/video/68171890?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="200" height="113" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
	};
	//general ipad sizing
	if (x>=760){
		//$('#frame1').width(x).height(y+60);
		$('#embed1').empty().append('<iframe src="http://player.vimeo.com/video/69484562?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="704" height="395" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
	};
});

$('#toTop').click(function(){
	var y = $('#frame1').height();
	$('body').animate({scrollTop:y},500,'swing');
});