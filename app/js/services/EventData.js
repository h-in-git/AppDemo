eventsApp.factory('eventData',function(){
	return{
		event:{
            name: 'Angular Boot Camp',
            date: '1/1/2016',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: 'app/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of direction!',
                    upVoteCount: 0
                },
                {
                    name: 'Scope for fun and profit',
                    creatorName: 'John Doe',
                    duration: 2,
                    level: 'Introductory',
                    abstract: 'This session take a closer look at scopes',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'John Doe',
                    duration: 4,
                    level: 'Intermediate',
                    abstract: 'Controllers are the beginning of everything!',
                    upVoteCount: 0
                }
            ]
        }
	};
});