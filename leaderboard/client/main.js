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
console.log("Hello client");
}
