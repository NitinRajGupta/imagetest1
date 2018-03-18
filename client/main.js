import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


if(Meteor.isClient) {
  Template.imagePickerBasic.helpers({
    opts: function() {
      var opts ={
        // classes: {
        //   btns: '',
        //   btn: 'lm-image-picker-btn-style',
        //   image: '',
        //   imageConverted: '',
        //   imageCont: '',
        //   saveBtn: ''
        // },
        // types: {
        //   upload: true,
        //   camera: true,
        //   byUrl: true
        // },
        // JcropOpts: {
        //   aspectRatio: 1,
        //   minSize: [ 100, 100 ]
        // },
        // resizeMax: {
        //   width: 800,
        //   height: 800
        // },
        // fileDir: '',
        // quality: '75',
        // displayMax: {
        //   height: '75%'
        // }
        onImageSaved: function(err, base64Data) {
          console.log(err, base64Data);
          Meteor.call('addPost',base64Data);
        }
      };
      return opts;
    }
  });
}


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});


Template.preview.helpers({
  lmain: function(){
    return Post.find({},{sort:{created:-1}});

  }

});
