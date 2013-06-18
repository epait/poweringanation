//var pop = Popcorn("#basePlayer");
// var myPlayer = videojs("videoAct1");


function createPausePoint(selection) {
    var videoLoopContainer = selection
    .append('div')
    .attr('class', 'videoLoopContainer')
    .attr('id', function (d) {
        return d.transitionLoop;
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
                return d.transitionLoop;
        })
        .each(function (d) {
            var that = this;
                d3.select(this).selectAll('source').data([{s: 'mp4',t: 'mp4'}, {s: 'webm',t: 'webm'}, {s: 'ogv',t: 'ogg'}]).enter()
                    .append('source')
                    .attr('src', function (t) { return './vid/' + d.transitionLoop + '.' + t.s; })
                    .attr('type', function (t) { return 'video/' + t.t; });
            videoLoopContainer.selectAll('.textOverlay').data(function(d) { return  d.transitionText; }).enter()
                .append('div')
                .attr('class', 'textOverlay')
                .attr('id', function(d, i) { return "sentence"+(i+1);})
                .style('display', function(d, i) { return i == 0 ? 'block' : 'none'})
                .text(String)
                .append('button')
                    .attr('class','advanceSlide')
                    .attr('id',function(d, i) { return "button"+(i+1);})
                    .text('Next!');
        });

}

var selection = d3.select('.overlayWrapper').selectAll('.videoLoopContainer').data(sequence).enter();
createPausePoint(selection);

        $('#button1').on('click',function(){
            console.log('Click!');
            $('#button1').fadeOut(500);
            $('#sentence1').fadeOut(500);
            $('#sentence2').fadeIn(1000);
            $('#button2').fadeIn(1000);
        });
        $('#button2').on('click',function(d){
            $('#button2').fadeOut(500);
            $('#sentence2').fadeOut(500);
            $('.videoLoopContainer').fadeOut(1000);
            $('#button1').show();
            console.log('Click2!');
        });


