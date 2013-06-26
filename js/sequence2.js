var sequence = [
	{ 
		type: 'video',
		videoId: "videoAct1"
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
		transitionLoop: 'loopFire',
		loopId: "powellLoop",
		content: 'This river was different. Back before the war, when he still had both arms, the Major had rowed the length of the Mississippi, but this river held a different power than the coiled currents of that old, low waterway. The Colorado was temperamental and young, a greenbroke horse with a thousand pounds a second to play with if it bucked you off. The men he’d recruited were mountain men, and used to lonely frontier solitude. Many had recently witnessed unprecedented violence that had split the country, making the untrammeled lands in the west attractive to men spat out by war.'
	},
	{ 
		type: 'video',
		videoId: "videoAct2"
	},
	{
		type: "transitionText",
		transitionLoop: "loopFire",
		loopId: "videoAct2Loop", 
		transitionText: [
			{ id: 'videoAct2Text',  content: 'John Powell only has one arm. How can he paddle down the Colorado with only one arm?' },
			{ id: 'videoAct2Text', content: 'John Powell is a super hero. He traveled the Colorado with only one arm, thanks to that pesky canon, but that did not stop him' }
		] 
	}, 
	
	{ 
		type: "motionGraphic",
		videoId: "motionDams",
		buttonId: "motionDamsButton"
	},
	{ 
		type: 'video',
		videoId: "videoAct3",
	},
	{
		type: "transitionText",
		transitionLoop: "loopSky",
		loopId: "videoAct3Loop", 
		transitionText: [
			{ id: 'videoAct3Text',  content: 'John Powell only has one arm. How can he paddle down the Colorado with only one arm?' },
			{ id: 'videoAct3Text', content: 'John Powell is a super hero. He traveled the Colorado with only one arm, thanks to that pesky canon, but that did not stop him' }
		] 
	},
	{ 
		type: "motionGraphic",
		videoId: "motionPopulation",
		buttonId: "motionPopulationButton"
	},
	{ 
		type: 'video',
		videoId: "videoAct4"
	},
	{
		type: "transitionText",
		transitionLoop: "loopFire",
		loopId: "videoAct4Loop", 
		transitionText: [
			{ id: 'videoAct4Text',  content: 'John Powell only has one arm. How can he paddle down the Colorado with only one arm?' },
			{ id: 'videoAct4Text', content: 'John Powell is a super hero. He traveled the Colorado with only one arm, thanks to that pesky canon, but that did not stop him' }
		] 
	},
	{ 
		type: "motionGraphic",
		videoId: "motionDeltaMead",
		buttonId: "motionDeltaMeadButton"
	},
	{ 
		type: 'video',
		videoId:  "videoAct5"
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
		transitionLoop: 'loopFire',
		loopId: "conclusionLoop",
		content: 'Conclusion Text will Go Here.'
	}
];


var diamondPoints = [
	{
		start: 119.75,
		pointTitle: 'Powell'
	},
    {
        start: 280.75,
        pointTitle: 'Dams'
    },
    {
        start: 545.5,
        pointTitle: 'Population'
    },
    {
        start: 753.5,
        pointTitle: 'River Delta and Lake Mead'
    }
];

