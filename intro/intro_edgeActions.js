/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         yepnope(
         
         {
         
         nope:[
         'jquery.fittext.js',
         
         'jquery.lettering.js',
         
         'animate.css',
         
         'jquery.textillate.js'
         
         ],
         
         complete: init
         
         }
         
         );
         
         
         
         
         
         //when yepnope has loaded everything execute init();
         
         function init (){
         
         //initialise your variables and Edge comp here
         
         }

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.$('Text').textillate({
         	in: {
         		effect: 'fadeInLeft',
         		delayScale: 2,
         		delay: 50,
         		sync: false
         	},
         	out: {
         		effect: 'fadeOutLeft',
         		delayScale: 2,
         		delay: 50,
         		sync: true
         	},
         	loop: true,
         	minDisplayTime: 11235
         });
         
         
         
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5750, function(sym, e) {
         sym.$('Text2').textillate({
         	in: {
         		effect: 'fadeInLeft',
         		delayScale: 2,
         		delay: 50,
         		sync: false
         	},
         	out: {
         		effect: 'fadeOutLeft',
         		delayScale: 2,
         		delay: 50,
         		sync: true
         	},
         	loop: true,
         	minDisplayTime: 7510
         });

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9750, function(sym, e) {
         sym.$('Text3').textillate({
         	in: {
         		effect: 'fadeInLeft',
         		delayScale: 2,
         		delay: 50,
         		sync: false
         	},
         	out: {
         		effect: 'fadeOutLeft',
         		delayScale: 2,
         		delay: 50,
         		sync: true
         	},
         	loop: true,
         	minDisplayTime: 3200
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-297780045");