var getTheBest = getTheBest || new Marionette.Application();
getTheBest.views = getTheBest.views || {};
getTheBest.routers = getTheBest.routers || {};
getTheBest.controllers = getTheBest.controllers || {};
getTheBest.models = getTheBest.models || {};

(function(){
  "use strict";

  getTheBest.controllers.mainController = {
    renderHome:function(){
      getTheBest.views.homeLayout = new getTheBest.views.HomeLayout();
      getTheBest.models.audioManager = new getTheBest.models.AudioManager();
    },
    renderTracks:function(artist){
      //this looks identical to the searchArtist method in the Search view
      getTheBest.views.homeLayout = new getTheBest.views.HomeLayout();
      getTheBest.models.audioManager = new getTheBest.models.AudioManager();

      var formattedArtist = getTheBest.formatArtist(artist);
      var tracks = new getTheBest.collections.Tracks();

      getTheBest.getTracks(formattedArtist).then(function(topTracks){
        topTracks.tracks.forEach(function(topTrack){
          tracks.add({
            name:topTrack.name,
            album:topTrack.album.name,
            previewUrl:topTrack.preview_url
          })
        });

        getTheBest.vent.trigger("receivedTracks",tracks);
      })
    }
  };
})();
