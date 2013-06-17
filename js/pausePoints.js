// Universal Variables
Popcorn.player( "baseplayer" );
var pop = Popcorn.baseplayer( "#basePlayer" );
var videoAct1 = videojs("videoAct1");
var videoAct2 = videojs("videoAct2");
var motionDams = videojs("motionDams");
var videoAct3 = videojs("videoAct3");
var motionPopulation = videojs("motionPopulation");
var videoAct4 = videojs("videoAct4");
var motionDeltaMead = videojs("motionDeltaMead");
var videoAct5 = videojs("videoAct5");
var windowHeight = $(window).height();
var windowWidth = $(window).width();
var windowAspectRatio = parseFloat(windowWidth/windowHeight).toFixed(2);
var widthAspectRatio = 1.77;
var heightAspectRatio = 0.5625;


var pausePoints = [
    {
        start: 123,
        end: 123.5,
        delay: 10000,
        loop: 'loopRiver',
        text1: 'John Powell only has one harm. How can he paddle down the Colorado with only one arm?',
        text2: 'John Powell is a super hero. He traveled the Colorado with only one arm, thanks to that pesky canon, but that did not stop him'
    },
    {
        start: 485,
        end: 485.5,
        delay: 10000,
        loop: 'loopCanyon',
        text1: 'John Powell only has one harm. How can he paddle down the Colorado with only one arm?',
        text2: 'John Powell is a super hero. He traveled the Colorado with only one arm, thanks to that pesky canon, but that did not stop him'
    },
    {
        start: 875,
        end: 875.5,
        delay: 10000,
        loop: 'loopFire',
        text1: 'John Powell only has one harm. How can he paddle down the Colorado with only one arm?',
        text2: 'John Powell is a super hero. He traveled the Colorado with only one arm, thanks to that pesky canon, but that did not stop him'
    },
    {
        start: 1236.75,
        end: 1237,
        delay: 10000,
        loop: 'loopWripple',
        text1: 'John Powell only has one harm. How can he paddle down the Colorado with only one arm?',
        text2: 'John Powell is a super hero. He traveled the Colorado with only one arm, thanks to that pesky canon, but that did not stop him'
    },
    {
        start: 1370,
        end: 1370.5,
        delay: 10000,
        loop: 'loopClouds',
        text1: 'John Powell only has one harm. How can he paddle down the Colorado with only one arm?',
        text2: 'John Powell is a super hero. He traveled the Colorado with only one arm, thanks to that pesky canon, but that did not stop him'
    }
];

var diamondPoints = [
    {
        start: 123.5
    },
    {
        start: 485.5
    },
    {
        start: 875.5
    },
    {
        start: 1237
    }
];

// var secondLevel = [
//     {
//         start: ,
//         end: ,
//         delay: ,
//         loop:
//     }
// ];