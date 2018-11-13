var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Joshua Tree",
    image: "https://pixabay.com/get/ef3cb00b2af01c22d2524518b7444795ea76e5d004b014439cf4c17da5e9bd_340.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis. Et pharetra pharetra massa massa ultricies mi. Pulvinar mattis nunc sed blandit libero volutpat. Aenean vel elit scelerisque mauris pellentesque. Quis vel eros donec ac odio. Amet facilisis magna etiam tempor orci. Et magnis dis parturient montes. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet."
  },
  {
    name: "Yosemite",
    image: "https://pixabay.com/get/e83db7082af3043ed1584d05fb1d4e97e07ee3d21cac104497f9c579a3efb1b0_340.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis. Et pharetra pharetra massa massa ultricies mi. Pulvinar mattis nunc sed blandit libero volutpat. Aenean vel elit scelerisque mauris pellentesque. Quis vel eros donec ac odio. Amet facilisis magna etiam tempor orci. Et magnis dis parturient montes. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet."
  },
  {
    name: "Grand Canyon",
    image: "https://pixabay.com/get/e83db50929f0033ed1584d05fb1d4e97e07ee3d21cac104497f9c57ba1e8b5be_340.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis eu volutpat odio facilisis. Et pharetra pharetra massa massa ultricies mi. Pulvinar mattis nunc sed blandit libero volutpat. Aenean vel elit scelerisque mauris pellentesque. Quis vel eros donec ac odio. Amet facilisis magna etiam tempor orci. Et magnis dis parturient montes. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet."
  }
];

function seedDB(){
  //Remove all campgrounds
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    }
      console.log("removed campgrounds!");
      //add a few campgrounds
      data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
          if(err){
            console.log(err);
          } else {
            console.log("added a campground");
            //create a comment
            Comment.create(
              {
                text: "This campground is great, but I wish there was internet.",
                author: "Homer"
              }, function(err, comment){
                if(err) {
                  console.log(err);
                } else {
                  campground.comments.push(comment);
                  campground.save();
                  console.log("Created new comment");
                }
              });
          }
        });
      });
  });
}

module.exports = seedDB;
