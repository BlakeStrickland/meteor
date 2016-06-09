PlayersList = new Mongo.Collection('players');

Template.leaderboard.helpers({
  'player': function(){
    return PlayersList.find()
  },
  'otherHelperFunction': function(){
    return "Some other function"
  }
});

if(Meteor.isClient){
  Template.leaderboard.events({
    'click .player': function(){
      console.log("You clicked an li element");
    }
  });
}
