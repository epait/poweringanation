var sequence = [
	{ 
		type: 'video',
		videoId: "videoAct1",
		duration: 125
	}, 
	// {
	// 	type: "transitionText",
	// 	transitionLoop: "loopFire",
	// 	loopId: "videoAct1Loop", 
	// 	transitionText: [
	// 		{ id: 'videoAct1Text',  content: 'John Powell only has one arm. How can he paddle down the Colorado with only one arm?' },
	// 		{ id: 'videoAct1Text', content: 'John Powell is a super hero. He traveled the Colorado with only one arm, thanks to that pesky canon, but that did not stop him' }
	// 	] 
	// }, 
	{
		type: 'powell',
		transitionLoop: 'loopRiver',
		loopId: "powellLoop",
		content: '<span class="showLast">The Colorado is young, walled at the bottom of a </span><span class="focusWords" id="showThird">canyon</span><span class="showLast"> of its own making. It is temperamental &mdash; </span><span class="focusWords" id="showFifth">dangerous</span><span class="showLast"> as a borrowed warhorse. Rapid water across </span><span class="focusWords" id="showFirst">fallen</span><span class="showLast"> boulders creates a </span><span class="focusWords" id="showSecond">force</span><span class="showLast">, a concussion, a </span><span class="focusWords" id="showSixth">fate</span><span class="showLast">. Nations have boomed along its shore only to collapse beside it. Fortunate explorers have staggered away from its cliffs. Yet, humans found ways to harness its power and tame its floods. In the past century, damming, quarreling and consuming have </span><span class="focusWords" id="showFourth">transformed</span><span class="showLast"> this living river beyond recognition.</span>'
	},
	{ 
		type: 'video',
		videoId: "videoAct2",
		duration: 184
	},
	{
		type: "transitionText",
		transitionLoop: "loopFire",
		loopId: "videoAct2Loop", 
		transitionText: [
			{ id: 'videoAct2Text',  content: 'Ever since the crash, its effects have been time-released, staggering and persistent.' },
			{ id: 'videoAct2Text', content: 'An event is incited suddenly; the aftermath can be more complicated.' }
		] 
	}, 
	
	{ 
		type: "motionGraphic",
		videoId: "motionDams",
		buttonId: "motionDamsButton",
		duration: 105
	},
	{ 
		type: 'video',
		videoId: "videoAct3",
		duration: 243
	},
	{
		type: "transitionText",
		transitionLoop: "loopUnderwater",
		loopId: "videoAct3Loop", 
		transitionText: [
			{ id: 'videoAct3Text',  content: 'Underwater or at war, situations can get out of control. ' },
			{ id: 'videoAct3Text', content: 'Once something ignites, it\'s hard to predict how far it will spread.' }
		] 
	},
	{ 
		type: "motionGraphic",
		videoId: "motionPopulation",
		buttonId: "motionPopulationButton",
		duration: 75
	},
	{ 
		type: 'video',
		videoId: "videoAct4",
		duration: 82
	},
	{
		type: "transitionText",
		transitionLoop: "loopSandstone",
		loopId: "videoAct4Loop", 
		transitionText: [
			{ id: 'videoAct4Text',  content: 'Trying a new course means accepting the unknown.' },
			{ id: 'videoAct4Text', content: 'Sometimes you can no longer ignore the warning signs.' }
		] 
	},
	{ 
		type: "motionGraphic",
		videoId: "motionDeltaMead",
		buttonId: "motionDeltaMeadButton",
		duration: 97
	},
	{ 
		type: 'video',
		videoId:  "videoAct5",
		duration: 70
	},
	// {
	// 	type: "transitionText",
	// 	transitionLoop: "loopFire",
	// 	loopId: "videoAct5Loop", 
	// 	transitionText: [
	// 		{ id: 'videoAct4Text',  content: 'John Powell only has one arm. How can he paddle down the Colorado with only one arm?' },
	// 		{ id: 'videoAct4Text', content: 'John Powell is a super hero. He traveled the Colorado with only one arm, thanks to that pesky canon, but that did not stop him' }
	// 	] 
	// },
	{
		type: 'conclusion',
		transitionLoop: 'loopRock',
		loopId: "conclusionLoop",
		content: '<span class="showConclusionLast">The Colorado is generous. The river baptized our </span><span class="focusWords" id="showConclusionThird">nation</span><span class="showConclusionLast"> in its infancy. Dusty outposts flourished into cities. We have plowed the desert, </span><span class="focusWords" id="showConclusionFirst">forced</span><span class="showConclusionLast"> the river into fields, and exported crops across continents. Our faith in the river\'s power leaves us vulnerable and dependent. When we flooded a natural cathedral, we irreversibly </span><span class="focusWords" id="showConclusionFourth">transformed</span><span class="showConclusionLast"> the landscape. Now a new consciousness demands exploration for </span><span class="focusWords" id="showConclusionSecond">change</span><span class="showConclusionLast">. Our decisions have shaped a fluid </span><span class="focusWords" id="showConclusionFifth">fate</span><span class="showConclusionLast">. The river graces us with opportunities to be </span><span class="focusWords" id="showConclusionSixth">remade</span><span class="showConclusionLast">.</span>'
	}
];


var diamondPoints = [
	{
		start: 124.4,
		pointTitle: 'Powell'
	},
    {
        start: 309.75,
        pointTitle: 'Dams'
    },
    {
        start: 657.5,
        pointTitle: 'Population'
    },
    {
        start: 814.5,
        pointTitle: 'River Delta and Lake Mead'
    }
];

