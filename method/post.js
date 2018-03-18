Post= new Mongo.Collection('post');
Meteor.methods({
  addPost: function(content){

    var date= new Date(),
    h=(date.getHours()<10?'0':'')+date.getHours(),
    m=(date.getMinutes()<10?'0':'')+date.getMinutes();
    var time=h+':'+m;

    Post.insert({
      content:content,
      created:date,
      time:time
    });
  }
})
