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
      if(event.keyCode === 13){
        var searchedArtist = event.target.value;

        getTheBest.getTracks(searchedArtist).then(function(topTracks){
          console.log(topTracks)
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
          getTheBest.routers.mainRouter.navigate(getTheBest.formatArtist(searchedArtist),{trigger:false});
        });
        this.ui.input.val("");
      }
    }
  })
})();
