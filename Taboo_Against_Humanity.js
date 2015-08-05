/* TabooCards is the global variable, cards is the name of the collection */

TabooCards = new Mongo.Collection('cards');

console.log("Hello world");

/* the if statement 'isClient' is there to tell the code to only run on the client */


if(Meteor.isClient){

/*  Template keyword searches through our code's templates, 
'cardItem' refers to the 'cardItem' template in the HTML file, 'card' is the actual 
template helper function. */
  
  Template.cardItem.helpers ({
    card: function(){
      return TabooCards.find()
  	},
});
} 

if(Meteor.isServer){
  
} 