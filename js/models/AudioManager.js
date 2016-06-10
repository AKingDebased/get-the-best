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
        // getTheBest.vent.trigger();
        console.log("playing");
      })

      this.player.addEventListener("pause",function(){
        console.log("paused")
      })

      this.listenTo(getTheBest.vent,"handleAudio",this.handleAudio)
    },
    handleAudio:function(track){
      //click on track that is not currently playing
      if(!track.get("currentTrack")){
        if(this.currentTrack){
          this.currentTrack.set("currentTrack",false);
        }
        this.currentTrack = track;
        this.currentTrack.set("currentTrack",true);
        this.player.src = this.currentTrack.get("previewUrl");
        this.player.play();
      } else {
        if(!this.player.paused){
          this.player.pause();
        } else {
          this.player.play();
        }
      }
    }
  });
})();
