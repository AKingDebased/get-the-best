var getTheBest = getTheBest || new Marionette.Application();
getTheBest.views = getTheBest.views || {};
getTheBest.routers = getTheBest.routers || {};
getTheBest.controllers = getTheBest.controllers || {};


(function(){
  "use strict";

  getTheBest.views.Track = Marionette.ItemView.extend({
    initialize:function(){
      this.audio = getTheBest.models.audioManager;

      this.listenTo(getTheBest.vent,"paused",this.showPause);
      this.listenTo(getTheBest.vent,"playing",this.showPlay);
    },
    template:"#track",
    ui:{
      control:".control",
      anim:".play-anim"
    },
    showPlay:function(){
      if(this.model.get("currentTrack")){
        this.ui.anim.css("display","inline-block");
      }
    },
    showPause:function(){
      if(this.model.get("currentTrack")){
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
