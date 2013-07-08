// Global Functions
var fullscreenOn = function() {
  var wrapperWidth = $('#pageWrapper').width();
  return 'translate(' + (wrapperWidth - 70) + ',0)'
};
var fullscreenOff = function() {
  var wrapperWidth = $('#pageWrapper').width();
  return 'translate(' + (wrapperWidth - 115) + ',0)'
};
var soundOn = function() {
  var wrapperWidth = $('#pageWrapper').width();
  return 'translate(' + (wrapperWidth - 118) + ',0)'
};
var soundOff = function() {
  var wrapperWidth = $('#pageWrapper').width();
  return 'translate(' + (wrapperWidth - 118) + ',0)'
};
var pageWrapperMin = function() {
  $('#pageWrapper').width(960);
  $('#pageWrapper').height(540);
};
var playerControlsPositioning = function () {
  var wrapperWidth = $('#pageWrapper').width();
  d3.select('#circleRight').attr('cx',wrapperWidth-150);
  d3.select('#progressClickOverlay').attr('width',wrapperWidth-165);
  d3.select('#fullscreenOn').attr('transform',fullscreenOn).attr('onclick','goFullscreen("pageWrapper"); return false');
  d3.select('#fullscreenOff').attr('transform',fullscreenOff).attr('onclick','cancelFullscreen("pageWrapper")');
  d3.select('#soundOn').attr('transform',soundOn);
  d3.select('#soundOff').attr('transform',soundOff);

};
var dragButtonStart = function() {
  var wrapperWidth = $('#pageWrapper').width()/2;
  return wrapperWidth - 355;
}
var dragButtonPositioning = function() {
  var wrapperWidth = $('#pageWrapper').width()/2;
  return 'translate('+ dragButtonStart() +',13) scale(0.55)';
};
var dragPathPositioning = function () {
  var wrapperWidth = $('#pageWrapper').width()/2;
  return 'translate('+(wrapperWidth - 270)+',0) scale(0.7)';
};
var dragToResumePositioning = function () {
  d3.select('#svgPath').attr('transform',dragPathPositioning);
  d3.select('#resumeVideo').attr('transform',dragButtonPositioning);
  d3.select('#dragArrow').attr('transform',dragButtonPositioning);
  d3.select('#dragClick').attr('transform',dragButtonPositioning);
};
var dragToEnterPositioning = function () {
  d3.select('#svgPath2').attr('transform',dragPathPositioning);
  d3.select('#resumeVideo2').attr('transform',dragButtonPositioning);
  d3.select('#dragArrow2').attr('transform',dragButtonPositioning);
  d3.select('#dragClick2').attr('transform',dragButtonPositioning);
  d3.select('#dragPath2').attr('width',function() {
    return $('#pageWrapper').width();
  });
};
var grayBoxRightPositioning = function() {
  d3.select('#grayBoxRight').attr('x',function(){
    var wrapperWidth = $('#pageWrapper').width();
    return wrapperWidth - 100;
  });
};
var progressLineWidth = function() {
  d3.select('#progressLine').attr('width',function(){
    var wrapperWidth = $('#pageWrapper').width();
    return wrapperWidth - 40;
  });
  d3.select('#progressIndicator').attr('width',function(){
    var wrapperWidth = $('#pageWrapper').width();
    return wrapperWidth - 40;
  });
}
var additionalContentBackgroundResize = function() {
  var wrapperWidth = $('#pageWrapper').width();
  var wrapperHeight = $('#pageWrapper').height();
  d3.select('#additionalContentBackground')
    .style('height',function(){
      return wrapperHeight + 'px';
    })
    .style('width',function(){
      return wrapperWidth + 'px';
    });
}
var  playPausePositioning = function() {
  var wrapperWidth = $('#pageWrapper').width();
  var wrapperHeight = $('#pageWrapper').height();
  d3.select('#playImage')
    .style('top',function(){
      return wrapperHeight/2 - 75 + 'px';
    })
    .style('left',function(){
      return wrapperWidth/2 - 75 + 'px';
    });
  d3.select('#pauseImage')
    .style('top',function(){
      return wrapperHeight/2 - 75 + 'px';
    })
    .style('left',function(){
      return wrapperWidth/2 - 75 + 'px';
    });
}
var portraitWrapperSize = function() {
  var wrapperWidth = $('#pageWrapper').width();
  d3.select('#portraitWrapper')
    .style('width', function() {
      return wrapperWidth*0.62 + 'px';
    });
}
var fellowPortraitSize = function() {
  var portraitWrapperWidth = $('#portraitWrapper').width();
  d3.selectAll('.fellowPortrait')
    .style('width',function() {
      return portraitWrapperWidth/5 - 25 + 'px';
    });
}
var editorialDividerPosition = function() {
  var portraitWrapperWidth = $('#portraitWrapper').width();
  var wrapperHeight = $('#pageWrapper').height();
  d3.select('#editorialDivider')
    .attr('x1',function() {
      return portraitWrapperWidth + 65 + 'px';
    })
    .attr('x2',function() {
      return portraitWrapperWidth + 65 + 'px';
    })
    .attr('y2',function() {
      return wrapperHeight -100 + 'px';
    });
}
var quoteWrapperPosition = function() {
  var wrapperWidth = $('#pageWrapper').width();
  var portraitWrapperWidth = $('#portraitWrapper').width();
  d3.select('#quoteWrapper')
    .style('width',function() {
      return wrapperWidth - portraitWrapperWidth - 175 + 'px';
    })
    .style('left',function() {
      return portraitWrapperWidth + 125 + 'px';
    })
}
var logoPosition = function() {
  var wrapperWidth = $('#pageWrapper').width();
  var wrapperHeight = $('#pageWrapper').height();
  var logoX = (wrapperWidth - 465);
  var logoY = (wrapperHeight - 465);
  var canvasX = (wrapperWidth - 290)/2;
  var canvasY = (wrapperHeight - 296)/2;
  d3.select('.introBackground').style('width',wrapperWidth);
  d3.select('#logoWrapper').attr('transform','scale(0.5) translate('+logoX+','+logoY+')');
  $('.circleDraw').css('top',canvasY);
  $('.circleDraw').css('left',canvasX);
}
var conclusionSharePosition = function() {
  var wrapperWidth = $('#pageWrapper').width();
  var wrapperHeight = $('#pageWrapper').height();
  var conclusionShareX = (wrapperWidth - 390)/2;
  var conclusionShareY = (wrapperHeight - 200)/2;
  $('#shareTheExperience').css('top',conclusionShareY);
  $('#shareTheExperience').css('left',conclusionShareX);
}
var resizePageElements = function() {
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var windowAspectRatio = parseFloat(windowWidth/windowHeight).toFixed(2);
  if (windowWidth <= 960) {
    pageWrapperMin();
    playerControlsPositioning();
    dragToResumePositioning();
    dragToEnterPositioning();
    grayBoxRightPositioning();
    progressLineWidth();
    additionalContentBackgroundResize();
    playPausePositioning();
    portraitWrapperSize();
    fellowPortraitSize();
    editorialDividerPosition();
    quoteWrapperPosition();
    logoPosition();
    conclusionSharePosition();
  }
  else if (windowHeight <= 540) {
    pageWrapperMin();
    playerControlsPositioning();
    dragToResumePositioning();
    dragToEnterPositioning();
    grayBoxRightPositioning();
    progressLineWidth();
    additionalContentBackgroundResize();
    playPausePositioning();
    portraitWrapperSize();
    fellowPortraitSize();
    editorialDividerPosition();
    quoteWrapperPosition();
    logoPosition();
    conclusionSharePosition();
  }
    else if (windowAspectRatio < widthAspectRatio){
    $('#pageWrapper').width(windowWidth);
    var wrapperWidth = $('#pageWrapper').width();
    $('#pageWrapper').height(wrapperWidth*heightAspectRatio);
    var wrapperHeight = $('#pageWrapper').height();
    var windowMargin = windowHeight - wrapperHeight;
    var wrapperMargin = windowMargin/2;
    $('#pageWrapper').css('margin-top',wrapperMargin);
    playerControlsPositioning();
    dragToResumePositioning();
    dragToEnterPositioning();
    grayBoxRightPositioning();
    progressLineWidth();
    additionalContentBackgroundResize();
    playPausePositioning();
    portraitWrapperSize();
    fellowPortraitSize();
    editorialDividerPosition();
    quoteWrapperPosition();
    logoPosition();
    conclusionSharePosition();
  }
  else if (windowAspectRatio > widthAspectRatio) {
    $('#pageWrapper').height(windowHeight);
    var wrapperHeight = $('#pageWrapper').height();
    $('#pageWrapper').width(wrapperHeight*widthAspectRatio);
    $('#pageWrapper').css('margin-top',0);
    playerControlsPositioning();
    dragToResumePositioning();
    dragToEnterPositioning();
    grayBoxRightPositioning();
    progressLineWidth();
    additionalContentBackgroundResize();
    playPausePositioning();
    portraitWrapperSize();
    fellowPortraitSize();
    editorialDividerPosition();
    quoteWrapperPosition();
    logoPosition();
    conclusionSharePosition();
  }
  else {
    $('#pageWrapper').width(windowWidth);
    $('#pageWrapper').height(windowHeight);
    playerControlsPositioning();
    dragToResumePositioning();
    dragToEnterPositioning();
    grayBoxRightPositioning();
    progressLineWidth();
    additionalContentBackgroundResize();
    playPausePositioning();
    portraitWrapperSize();
    fellowPortraitSize();
    editorialDividerPosition();
    quoteWrapperPosition();
    logoPosition();
    conclusionSharePosition();
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
$(document).ready(function() {
  console.log('initial page sizing');
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
    console.log('cancelling fullscreen');
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
// $('#videoLoop1').hide();
// $('#videoLoop2').hide();
// $('#videoLoop3').hide();


// Hide Drag Paths
// $('#dragButton').hide();
// $('#dragPath').hide();
$('#dragArrow').hide();
// $('#dragArrow2').hide();
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
$('#dragClick2').hover(
    function() {
      $('#resumeVideo2').hide();
      $('#dragArrow2').show(); 
    },
    function() {
      $('#resumeVideo2').show();
      $('#dragArrow2').hide();  
    }
  );

