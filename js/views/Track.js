var getTheBest = getTheBest || new Marionette.Application();
getTheBest.views = getTheBest.views || {};
getTheBest.routers = getTheBest.routers || {};
getTheBest.controllers = getTheBest.controllers || {};


(function(){
  "use strict";

  getTheBest.views.Track = Marionette.ItemView.extend({
    initialize:function(){
      this.audio = getTheBest.models.audioManager;

      this.listenTo(getTheBest.vent,"pause");
      this.listenTo(getTheBest.vent,"done");
    },
    template:"#track",
    ui:{
      control:".control"
    },
    events:{
      "click .control":function(){
        getTheBest.vent.trigger("handleAudio",this.model);
      }
    }
  });
})();
