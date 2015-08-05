// server only code

Meteor.startup(function() {
	if (TabooCards.find().count() === 0) {
		var names = [
			['Man Date', 'Guys', 'Bros', 'Hang out', 'Sports', 'Gay'],
			['Booty Call', 'Drunk', 'Late', 'Sex', 'Hookup', 'Friend with benefits'],
			['Masturbate', 'Jerk off', 'Penis', 'Horny', 'Cum', 'Porn']
		];

		_.each(names, function(name){
			TabooCards.insert({
				answer: name[0],
				taboo_word_1: name[1],
				taboo_word_2: name[2],
				taboo_word_3: name[3],
				taboo_word_4: name[4],
				taboo_word_5: name[5]
			});
		});
	}
});


