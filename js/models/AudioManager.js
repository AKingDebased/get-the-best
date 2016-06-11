var getTheBest = getTheBest || new Marionette.Application();
getTheBest.views = getTheBest.views || {};
getTheBest.models = getTheBest.models || {};

(function(){
  "use strict";

  getTheBest.models.AudioManager = Backbone.Model.extend({
    initialize:function(){
      //the audio element is being used for playback control,
      //not UI, hence its presence here

      //routing causes multiple audio tags to be created
      //kludge fix to handle that

      if($("audio")){
        console.log("there was an audio tag");
        $("audio").remove();
      }

      this.player = $("<audio>").appendTo("body")[0];

      //listener to catch a preview playing fully
      var self = this;
      this.player.addEventListener("ended",function(){
        self.currentTrack.set("playing",false);
      })

      this.listenTo(getTheBest.vent,"handleAudio",this.handleAudio)
    },
    handleAudio:function(track){
      console.log(track);
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
