var getTheBest = getTheBest || new Marionette.Application();
getTheBest.views = getTheBest.views || {};
getTheBest.routers = getTheBest.routers || {};
getTheBest.controllers = getTheBest.controllers || {};

(function(){
  "use strict";

  getTheBest.views.Track = Marionette.ItemView.extend({
    template:"#track",
    audio:document.querySelector("audio"),
    ui:{
      control:".control"
    },
    events:{
      "click .control":"playPause"
    },
    playPause:function(){
      if(this.audio.paused){
        if(!this.audio.src){
          this.audio.src = this.model.get("previewUrl");
        }
        this.audio.play();
      } else {
        this.audio.pause();
      }
    }
  });
})();
