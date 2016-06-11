var getTheBest = getTheBest || new Marionette.Application();
getTheBest.views = getTheBest.views || {};
getTheBest.routers = getTheBest.routers || {};
getTheBest.controllers = getTheBest.controllers || {};


(function(){
  "use strict";

  getTheBest.views.Track = Marionette.ItemView.extend({
    initialize:function(){
      this.audio = getTheBest.models.audioManager;

      this.listenTo(this.model,"change",this.playPause);
    },
    template:"#track",
    ui:{
      control:".control",
      anim:".play-anim"
    },
    playPause:function(trackModel){
      if(trackModel.get("playing")){
        this.ui.anim.css("display","inline-block");
      } else {
        this.ui.anim.css("display","none");
      }
    },
    events:{
      "click .control":function(){
        getTheBest.vent.trigger("handleAudio",this.model);
      }
    }
  });
})();
