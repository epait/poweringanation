// Global Functions
var fullscreenOn = function() {
  var wrapperWidth = $('.pageWrapper').width();
  return 'translate(' + (wrapperWidth - 70) + ',0)'
};
var fullscreenOff = function() {
  var wrapperWidth = $('.pageWrapper').width();
  return 'translate(' + (wrapperWidth - 115) + ',0)'
};
var soundOn = function() {
  var wrapperWidth = $('.pageWrapper').width();
  return 'translate(' + (wrapperWidth - 118) + ',0)'
};
var soundOff = function() {
  var wrapperWidth = $('.pageWrapper').width();
  return 'translate(' + (wrapperWidth - 118) + ',0)'
};
var pageWrapperMin = function() {
  $('.pageWrapper').width(960);
  $('.pageWrapper').height(540);
};
var playerControlsPositioning = function () {
  var wrapperWidth = $('.pageWrapper').width();
  d3.select('#circleRight').attr('cx',wrapperWidth-150);
  d3.select('#progressLine').attr('x2',wrapperWidth-165);
  d3.select('#progressClickOverlay').attr('width',wrapperWidth-165);
  d3.select('#fullscreenOn').attr('transform',fullscreenOn).attr('onclick','goFullscreen("pageWrapper"); return false');
  d3.select('#fullscreenOff').attr('transform',fullscreenOff).attr('onclick','cancelFullscreen("pageWrapper")');
  d3.select('#soundOn').attr('transform',soundOn);
  d3.select('#soundOff').attr('transform',soundOff);
};
var dragButtonStart = function() {
  var wrapperWidth = $('.pageWrapper').width();
  return wrapperWidth - 550;
}
var dragButtonPositioning = function() {
  var wrapperWidth = $('.pageWrapper').width();
  return 'translate('+ dragButtonStart() +',13) scale(0.85)';
};
var dragPathPositioning = function () {
  var wrapperWidth = $('.pageWrapper').width();
  return 'translate('+(wrapperWidth - 418)+',0)';
};
var dragToResumePositioning = function () {
  d3.select('#svgPath').attr('transform',dragPathPositioning);
  d3.select('#resumeVideo').attr('transform',dragButtonPositioning);
  d3.select('#dragArrow').attr('transform',dragButtonPositioning);
  d3.select('#dragClick').attr('transform',dragButtonPositioning);
};
var grayBoxRightPositioning = function() {
  d3.select('#grayBoxRight').attr('x',function(){
    var wrapperWidth = $('.pageWrapper').width();
    return wrapperWidth - 100;
  });
};
var progressLineWidth = function() {
  d3.select('#progressLine').attr('width',function(){
    var wrapperWidth = $('.pageWrapper').width();
    return wrapperWidth - 40;
  });
}
var additionalContentBackgroundResize = function() {
  var wrapperWidth = $('.pageWrapper').width();
  var wrapperHeight = $('.pageWrapper').height();
  d3.select('#additionalContentBackground')
    .style('height',function(){
      return wrapperHeight + 'px';
    })
    .style('width',function(){
      return wrapperWidth + 'px';
    });
}
var resizePageElements = function() {
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var windowAspectRatio = parseFloat(windowWidth/windowHeight).toFixed(2);
  if (windowWidth <= 960) {
    pageWrapperMin();
    playerControlsPositioning();
    dragToResumePositioning();
    grayBoxRightPositioning();
    progressLineWidth();
    additionalContentBackgroundResize();
  }
  else if (windowHeight <= 540) {
    pageWrapperMin();
    playerControlsPositioning();
    dragToResumePositioning();
    grayBoxRightPositioning();
    progressLineWidth();
    additionalContentBackgroundResize();
  }
    else if (windowAspectRatio < widthAspectRatio){
    $('.pageWrapper').width(windowWidth);
    var wrapperWidth = $('.pageWrapper').width();
    $('.pageWrapper').height(wrapperWidth*heightAspectRatio);
    var wrapperHeight = $('.pageWrapper').height();
    var windowMargin = windowHeight - wrapperHeight;
    var wrapperMargin = windowMargin/2;
    $('.pageWrapper').css('margin-top',wrapperMargin);
    playerControlsPositioning();
    dragToResumePositioning();
    grayBoxRightPositioning();
    progressLineWidth();
    additionalContentBackgroundResize();
  }
  else if (windowAspectRatio > widthAspectRatio) {
    $('.pageWrapper').height(windowHeight);
    var wrapperHeight = $('.pageWrapper').height();
    $('.pageWrapper').width(wrapperHeight*widthAspectRatio);
    $('.pageWrapper').css('margin-top',0);
    playerControlsPositioning();
    dragToResumePositioning();
    grayBoxRightPositioning();
    progressLineWidth();
    additionalContentBackgroundResize();
  }
  else {
    // Do Nothing
  }
}


// Preload Video
// $('.pageWrapper').hide();
// myPlayer.volume(0);
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
// myPlayer.on('progress',bufferFunc);


// Size Page Wrapper On Load
$(window).load(function() {
  resizePageElements();
});


// Resize Page Wrapper With Window
$(window).resize(function() {
  resizePageElements();
});


// Enable Native Fullscreen
function goFullscreen(id) {
    // Get the element that we want to take into fullscreen mode
    var element = document.getElementById(id);
    
    // These function will not exist in the browsers that don't support fullscreen mode yet, 
    // so we'll have to check to see if they're available before calling them.
    
    if (element.webkitRequestFullScreen) {
      // This is how to go into fullscreen mode in Chrome and Safari
      // Both of those browsers are based on the Webkit project, hence the same prefix.
      element.webkitRequestFullScreen();
      $('#fullscreenOn').hide();
      $('#fullscreenOff').show();
    }

    else if (element.mozRequestFullScreen) {
      // This is how to go into fullscren mode in Firefox
      // Note the "moz" prefix, which is short for Mozilla.
      element.mozRequestFullScreen();
      $('#fullscreenOn').hide();
      $('#fullscreenOff').show();
    } 
   // Hooray, now we're in fullscreen mode!
}
function cancelFullscreen(id) {
    // Get the element that we want to take into fullscreen mode
    var element = document.getElementById(id);
    
    // These function will not exist in the browsers that don't support fullscreen mode yet, 
    // so we'll have to check to see if they're available before calling them.
    
    if (element.webkitRequestFullScreen) {
      // This is how to go into fullscreen mode in Chrome and Safari
      // Both of those browsers are based on the Webkit project, hence the same prefix.
      document.webkitCancelFullScreen();
      $('#fullscreenOn').show();
      $('#fullscreenOff').hide();

    }

    else if (element.mozRequestFullScreen) {
      // This is how to go into fullscren mode in Firefox
      // Note the "moz" prefix, which is short for Mozilla.
      document.mozCancelFullScreen();
      $('#fullscreenOn').show();
      $('#fullscreenOff').hide();

    } 
   // Hooray, now we're in fullscreen mode!
}


// Hide Video Loops
$('#videoLoop1').hide();
$('#videoLoop2').hide();
$('#videoLoop3').hide();


// Hide Drag Paths
$('#dragButton').hide();
$('#dragPath').hide();
$('#dragArrow').hide();
$('#clickForMore').hide();


// Hide Video Options
$('#fullscreenOff').hide();
$('#soundOff').hide();


// Change Drag Image On Hover
$('#dragClick').hover(
    function() {
      $('#resumeVideo').hide();
      $('#dragArrow').show(); 
    },
    function() {
      $('#resumeVideo').show();
      $('#dragArrow').hide();  
    }
  );

