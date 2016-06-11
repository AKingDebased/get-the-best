var getTheBest = getTheBest || new Marionette.Application();
getTheBest.views = getTheBest.views || {};
getTheBest.models = getTheBest.models || {};

(function(){
  "use strict";

  getTheBest.models.AudioManager = Backbone.Model.extend({
    initialize:function(){
      //the audio element is being used for playback control,
      //not UI, hence its presence here
      this.player = $("<audio>").appendTo("body")[0];

      this.player.addEventListener("play",function(){
        getTheBest.vent.trigger("playing");
      })

      this.player.addEventListener("pause",function(){
        getTheBest.vent.trigger("paused");
      })

      this.player.addEventListener("ended",function(){
        getTheBest.vent.trigger("ended");
      })

      this.listenTo(getTheBest.vent,"handleAudio",this.handleAudio)
    },
    handleAudio:function(track){
      if(!track.get("playing")){
        if(this.currentTrack){
          this.currentTrack.set("playing",false);
        }
        this.currentTrack = track;
        this.currentTrack.set("playing",true);
        this.player.src = this.currentTrack.get("previewUrl");
        this.player.play();
      } else {
        if(!this.player.paused){
          this.currentTrack.set("playing",false);
          this.player.pause();
        } else {
          this.currentTrack.set("playing",true);
          this.player.play();
        }
      }
    }
  });
})();
