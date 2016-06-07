var getTheBest = getTheBest || {};
getTheBest.views = getTheBest.views || {};
getTheBest.routers = getTheBest.routers || {};
getTheBest.controllers = getTheBest.controllers || {};

(function(){
  "use strict";

  getTheBest.views.Search = Marionette.ItemView.extend({
    template: _.template('<h1 class="main-title">only the best<small>the best, the best, the best of tunes</small></h1><input type="text" class="form-control artist-input" placeholder="enter an artist\'s name...">'),
    ui:{
      "input":".artist-input"
    },
    events:{
      "keydown @ui.input":"searchArtist"
    },
    searchArtist:function(event){
      if(event.keyCode === 13){
        $.ajax({
          method:"GET",
          url:"https://api.spotify.com/v1/search",
          data:{
            q:event.target.value,
            type:"artist"
          }
        }).then(function(artistData){
          //assuming first result is the searched artist
          $.ajax({
            method:"GET",
            url:"https://api.spotify.com/v1/artists/" + artistData.artists.items[0].id + "/top-tracks",
            data:{
              //defaults to top US tracks
              country:"US"
            }
          }).then(function(topTracks){
            console.log(topTracks);
          },function(err){
            console.log("error with artist id",err);
          });
        },function(err){
          console.log("error with artist",err);
        });
      }
    }
  });
})();
