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
		content: '<span class="showLast">This river is different. The Colorado is </span><span class="showFirst">young</span><span class="showLast">, walled at the bottom of a canyon of its own making. It is </span><span class="showSecond">tempermental</span><span class="showLast"> -- dangerous as a borrowed </span><span class="showThird">warhorse</span><span class="showLast">. Water crossing fallen boulders is a </span><span class="showFourth">force</span><span class="showLast">, a concussion, a </span><span class="showFifth">fate</span><span class="showLast">. Nations </span><span class="showSixth">boomed</span><span class="showLast"> only to </span><span class="showSeventh">collapse</span><span class="showLast"> beside it, fortunate explorers staggered away from its rapids. Piled behind dams and </span><span class="showEighth">diversions</span><span class="showLast">, the Colorado continues to </span><span class="showNinth">power</span><span class="showLast">, fund, water and float millions of human dreams as we continue to underestimate its capacity for </span><span class="showTenth">impact</span><span class="showLast">.</span>'
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
			{ id: 'videoAct2Text',  content: 'Heroes are humans set apart when they decide to change the outcome of a situation and summon the strength to do so.' },
			{ id: 'videoAct2Text', content: 'Without thought to the later costs of their efforts, they are ordinary people with the audacity to decide they can change their circumstances.' }
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
			{ id: 'videoAct3Text',  content: 'Reliance makes us vulnerable to the unknown. ' },
			{ id: 'videoAct3Text', content: 'Unattended, our tolerances creep towards out of control.' }
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
		transitionLoop: "loopWood",
		loopId: "videoAct4Loop", 
		transitionText: [
			{ id: 'videoAct4Text',  content: 'It is hard to see things whole.' },
			{ id: 'videoAct4Text', content: 'In the midst of struggle, the strengths we use are often the same talents we must enlist in reaction to consequences of that fight. ' }
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
		transitionLoop: 'loopTree',
		loopId: "conclusionLoop",
		content: 'Conclusion Text will Go Here.'
	}
];


var diamondPoints = [
	{
		start: 125,
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

