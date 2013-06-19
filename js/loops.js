//var pop = Popcorn("#basePlayer");
// var myPlayer = videojs("videoAct1");
function createTextTransitions(selection) {
     var that = this;
            selection
                .append('div')
                .attr('class', 'textOverlay')
                .attr('id', function(d, i) { return d.id+"Sentence"+(i+1);})
                .style('display', function(d, i) { return i == 0 ? 'block' : 'none'})
                .text(function(d){ return d.content ;})
                .append('image')
                    .attr('src','./img/clickToContinue.png')
                    .attr('class','advanceSlide')
                    .attr('id',function(d, i) { return d.id+"Button"+(i+1);})
                    .on('click',function(d, i){
                        var prefix = '#' + d.id;
                        console.log(prefix + i);
                        if (i==0) {
                            console.log('Click1');
                            $('#'+d.id+'Button1').fadeOut(500);
                            $('#'+d.id+'Sentence1').fadeOut(500);
                            $('#'+d.id+'Sentence2').fadeIn(1000);
                            $('#'+d.id+'Button2').fadeIn(1000);
                        }
                        else {
                            console.log('Click2');
                            $('#'+d.id+'Button2').fadeOut(500);
                            $('#'+d.id+'Sentence2').fadeOut(500);
                            $('.videoLoopContainer').fadeOut(1000, function(){
                                $('#'+d.id+'Button1').show(2500);
                                $('#'+d.id+'Sentence1').show(2500);
                            });
                            panPlayer.play();
                        }
                    });
}

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
            var selection = videoLoopContainer.selectAll('.textOverlay').data(function(d) { return  d.transitionText; }).enter();
            createTextTransitions(selection);
        });

}

var selection = d3.select('.overlayWrapper').selectAll('.videoLoopContainer').data(sequence).enter();
createPausePoint(selection);

