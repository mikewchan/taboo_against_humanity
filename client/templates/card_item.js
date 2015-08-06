Template.cardItem.rendered  = function(){
}

/*  "Template" keyword searches through our code's templates, 
'cardItem' refers to the 'cardItem' template, 'card' is the actual 
template helper function. */

Template.cardItem.helpers ({
 	Card: function(){
    	return Session.get("nextCard");
  	}
}); 

//store some local state here for your iteration

var currentIndex = 0;
var myCards;

Template.cardItem.events({
	'click #iterateCards' : function(){
		currentIndex++;
			// only load the data once
		if(!myCards){
			myCards = TabooCards.find({}).fetch();
		}
		if(currentIndex===myCards.length){
			currentIndex = 0;
		}
		var currentCard = myCards[currentIndex];
		Session.set("nextCard",currentCard);
	}
});


 


