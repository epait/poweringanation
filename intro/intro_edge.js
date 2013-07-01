/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['Helvetica']='@font-face {				font-family: Interstate-Thin;				src:	url(\"../fonts/Interstate-Thin.otf\"),						url(\"../fonts/Interstate-Thin.ttf\");			}			@font-face {				font-family: Interstate-ThinCondensed;				src:	url(\"../fonts/Interstate-ThinCondensed.otf\"),						url(\"../fonts/Interstate-Thin.ttf\");			}			@font-face {				font-family: Interstate-Light;				src:url(\"../fonts/Interstate-Light.otf\"),					url(\"../fonts/Interstate-Light.ttf\");			}			@font-face {				font-family: Interstate-Bold;				src:url(\"../fonts/Interstate-Bold.otf\"),					url(\"../fonts/Interstate-Bold.ttf\");			}			@font-face {				font-family: Interstate-Regular;				src:url(\"../fonts/Interstate-Regular.otf\"),					url(\"../fonts/Interstate-Regular.ttf\");			}			@font-face {				font-family: Interstate-RegularCondensed;				src:url(\"../fonts/Interstate-RegularCondensed.otf\"),					url(\"../fonts/Interstate-Regular.ttf\");			}			@font-face {				font-family: Interstate-ExtraLight;				src:url(\"../fonts/Interstate-ExtraLight.otf\"),					url(\"../fonts/Interstate-ExtraLight.ttf\");			}			@font-face {				font-family: Interstate-Lightitalic;				src:url(\"../fonts/Interstate-Lightitalic.otf\"),					url(\"../fonts/Interstate-Lightitalic.ttf\");			}';
   fonts['Interstate-Thin']='<link rel=\"stylesheet\" href=\"app.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />';
   fonts['Interstate-Regular']='<link rel=\"stylesheet\" href=\"app.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />';
   fonts['Interstate-ThinCondensed']='<link rel=\"stylesheet\" href=\"app.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />';
   fonts['Interstate-Light']='<link rel=\"stylesheet\" href=\"app.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />';
   fonts['Interstate-ExtraLight']='<link rel=\"stylesheet\" href=\"app.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.0",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.0.250",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'OWUF_logo',
            display:'none',
            type:'image',
            rect:['47px','-10px','1381px','777px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"OWUF_logo.svg",'0px','0px']
         },
         {
            id:'Text',
            display:'none',
            type:'text',
            rect:['47px','59px','612px','auto','auto','auto'],
            text:"This is a story about the Colorado River",
            font:['Interstate-Light',47,"rgba(255,255,255,1.00)","normal","none",""]
         },
         {
            id:'Text2',
            display:'none',
            type:'text',
            rect:['47px','143px','auto','auto','auto','auto'],
            clip:['rect(0px 548px 55px 0px)'],
            text:"How we changed the river",
            align:"left",
            font:['Interstate-Light',47,"rgba(255,255,255,1)","normal","none","normal"],
            transform:[]
         },
         {
            id:'Text3',
            display:'none',
            type:'text',
            rect:['47px','236px','auto','auto','auto','auto'],
            clip:['rect(-7px 626px 57px 0px)'],
            opacity:1,
            text:"And how the river changes us",
            align:"left",
            font:['Interstate-Light',47,"rgba(255,255,255,1)","normal","none","normal"]
         },
         {
            id:'underfire-01',
            type:'image',
            rect:['-266px','-128px','1920px','1080px','auto','auto'],
            fill:["rgba(0,0,0,0)",'underfire-01.svg','0px','0px'],
            transform:[[],[],[],['0.72','0.72']]
         },
         {
            id:'circle',
            type:'image',
            rect:['-214px','-152px','1920px','1080px','auto','auto'],
            fill:["rgba(0,0,0,0)",'circle.svg','0px','0px'],
            transform:[[],[],[],['0.72','0.72']]
         },
         {
            id:'lines',
            type:'image',
            rect:['-307px','-187px','1920px','1080px','auto','auto'],
            clip:['rect(0px 1920pxpx 1080pxpx 0px)'],
            fill:["rgba(0,0,0,0)",'lines.svg','0px','0px'],
            transform:[[],[],[],['0.72','0.72']]
         },
         {
            id:'overwater-01',
            type:'image',
            rect:['-307px','-187px','1920px','1080px','auto','auto'],
            fill:["rgba(0,0,0,0)",'overwater-01.svg','0px','0px'],
            transform:[[],[],[],['0.72','0.72']]
         },
         {
            id:'short-bar-01',
            type:'image',
            rect:['-508px','-224px','1920px','1080px','auto','auto'],
            fill:["rgba(0,0,0,0)",'short-bar-01.svg','0px','0px'],
            transform:[[],[],[],['0.72','0.72']]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '236px'],
            ["style", "clip", [-7,626,57,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '47px'],
            ["style", "font-size", '47px']
         ],
         "${_Text2}": [
            ["style", "top", '147px'],
            ["style", "clip", [0,548,55,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "scaleY", '1'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["style", "left", '47px'],
            ["style", "font-size", '47px']
         ],
         "${_short-bar-01}": [
            ["style", "top", '-224px'],
            ["transform", "scaleY", '0.72'],
            ["transform", "scaleX", '0.72'],
            ["style", "opacity", '0'],
            ["style", "left", '-1422px'],
            ["style", "display", 'block']
         ],
         "${_lines}": [
            ["style", "top", '-187px'],
            ["transform", "scaleY", '0.72'],
            ["style", "left", '-307px'],
            ["style", "display", 'block'],
            ["style", "opacity", '0'],
            ["style", "clip", [1052,1920,1052,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "scaleX", '0.72']
         ],
         "${_overwater-01}": [
            ["style", "top", '-187px'],
            ["transform", "scaleY", '0.72'],
            ["transform", "scaleX", '0.72'],
            ["style", "opacity", '0'],
            ["style", "left", '-1244px'],
            ["style", "display", 'block']
         ],
         "${_Text}": [
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '1'],
            ["style", "left", '47px'],
            ["style", "font-size", '47px'],
            ["style", "top", '59px'],
            ["style", "font-family", 'Interstate-Light'],
            ["style", "overflow", 'visible'],
            ["style", "display", 'none'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "clip", [-8,852,49,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "width", '852px']
         ],
         "${_underfire-01}": [
            ["style", "top", '-128px'],
            ["transform", "scaleY", '0.72'],
            ["transform", "scaleX", '0.72'],
            ["style", "opacity", '0'],
            ["style", "left", '658px'],
            ["style", "display", 'block']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '100%'],
            ["style", "height", '100%'],
            ["style", "overflow", 'hidden']
         ],
         "${_OWUF_logo}": [
            ["style", "top", '-10px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '777px'],
            ["style", "display", 'none'],
            ["style", "left", '47px'],
            ["style", "width", '1381px']
         ],
         "${_circle}": [
            ["style", "top", '-152px'],
            ["transform", "scaleY", '0.39'],
            ["transform", "scaleX", '0.39'],
            ["style", "opacity", '0'],
            ["style", "left", '-214px'],
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 19000,
         autoPlay: true,
         timeline: [
            { id: "eid71", tween: [ "style", "${_Text2}", "clip", [0,548,55,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,548,55,0]}], position: 0, duration: 0 },
            { id: "eid114", tween: [ "style", "${_underfire-01}", "left", '-266px', { fromValue: '658px'}], position: 17000, duration: 2000, easing: "easeInQuad" },
            { id: "eid60", tween: [ "style", "${_OWUF_logo}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid108", tween: [ "style", "${_OWUF_logo}", "display", 'block', { fromValue: 'none'}], position: 19000, duration: 0 },
            { id: "eid150", tween: [ "style", "${_lines}", "clip", [0,1920,1080,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [1052,1920,1052,0]}], position: 17000, duration: 2000, easing: "easeInQuad" },
            { id: "eid159", tween: [ "style", "${_Text2}", "top", '147px', { fromValue: '147px'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid125", tween: [ "transform", "${_circle}", "scaleX", '0.72', { fromValue: '0.39'}], position: 17000, duration: 2000, easing: "easeInQuad" },
            { id: "eid157", tween: [ "style", "${_underfire-01}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0, easing: "easeInQuad" },
            { id: "eid153", tween: [ "style", "${_short-bar-01}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0, easing: "easeInQuad" },
            { id: "eid154", tween: [ "style", "${_overwater-01}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0, easing: "easeInQuad" },
            { id: "eid105", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '1'}], position: 1000, duration: 0 },
            { id: "eid126", tween: [ "transform", "${_circle}", "scaleY", '0.72', { fromValue: '0.39'}], position: 17000, duration: 2000, easing: "easeInQuad" },
            { id: "eid117", tween: [ "style", "${_short-bar-01}", "left", '-508px', { fromValue: '-1422px'}], position: 17000, duration: 2000, easing: "easeInQuad" },
            { id: "eid73", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid75", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
            { id: "eid161", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0, easing: "easeInQuad" },
            { id: "eid122", tween: [ "style", "${_circle}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 2000, easing: "easeInQuad" },
            { id: "eid84", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid83", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 10000, duration: 0 },
            { id: "eid160", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0, easing: "easeInQuad" },
            { id: "eid133", tween: [ "style", "${_lines}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 2000, easing: "easeInQuad" },
            { id: "eid155", tween: [ "style", "${_lines}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0, easing: "easeInQuad" },
            { id: "eid132", tween: [ "style", "${_overwater-01}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 2000, easing: "easeInQuad" },
            { id: "eid112", tween: [ "style", "${_overwater-01}", "left", '-307px', { fromValue: '-1244px'}], position: 17000, duration: 2000, easing: "easeInQuad" },
            { id: "eid134", tween: [ "style", "${_underfire-01}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 2000, easing: "easeInQuad" },
            { id: "eid107", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '1'}], position: 10000, duration: 0 },
            { id: "eid131", tween: [ "style", "${_short-bar-01}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 2000, easing: "easeInQuad" },
            { id: "eid70", tween: [ "style", "${_Text3}", "clip", [-7,626,57,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-7,626,57,0]}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '1'}], position: 6000, duration: 0 },
            { id: "eid163", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
            { id: "eid74", tween: [ "style", "${_Text}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid162", tween: [ "style", "${_Text}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0, easing: "easeInQuad" },
            { id: "eid69", tween: [ "style", "${_Text}", "clip", [-8,852,49,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [-8,852,49,0]}], position: 0, duration: 0 },
            { id: "eid156", tween: [ "style", "${_circle}", "display", 'none', { fromValue: 'block'}], position: 19000, duration: 0, easing: "easeInQuad" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-297780045");
