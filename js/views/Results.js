var getTheBest = getTheBest || new Marionette.Application();
getTheBest.views = getTheBest.views || {};
getTheBest.routers = getTheBest.routers || {};
getTheBest.controllers = getTheBest.controllers || {};

(function(){
  "use strict";

  getTheBest.views.Results = Marionette.CollectionView.extend({
    childView:getTheBest.views.Track,
    initialize:function(){
      var self = this;

      this.listenTo(getTheBest.vent,"receivedTracks",function(topTracks){
        self.collection = topTracks;
        self.render();
      });
    }
  });
})();
