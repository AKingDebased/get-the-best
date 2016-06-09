var getTheBest = getTheBest || new Marionette.Application();
getTheBest.collections = getTheBest.collections || {};
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
      var searchedArtist = event.target.value;
      if(event.keyCode === 13){
        //acquire artist id, then search top tracks using id
        $.ajax({
          method:"GET",
          url:"https://api.spotify.com/v1/search",
          data:{
            q:searchedArtist,
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
            //create new tracks collection
            //ensure models only have required data
            var tracks = new getTheBest.collections.Tracks();

            topTracks.tracks.forEach(function(topTrack){
              tracks.add({
                name:topTrack.name,
                album:topTrack.album.name,
                previewUrl:topTrack.preview_url
              })
            });

            getTheBest.vent.trigger("receivedTracks",tracks);
            getTheBest.routers.mainRouter.navigate(searchedArtist,{trigger:false});
          },function(err){
            console.log("error with artist id",err);
          });
        },function(err){
          console.log("error with artist",err);
        });
        this.ui.input.val("");
      }
    }
  });
})();
