var getTheBest = getTheBest || new Marionette.Application();
getTheBest.views = getTheBest.views || {};
getTheBest.routers = getTheBest.routers || {};
getTheBest.controllers = getTheBest.controllers || {};

(function(){
  "use strict";

  getTheBest.on("start",function(){
    getTheBest.routers.mainRouter = new getTheBest.routers.MainRouter();
    Backbone.history.start();

    getTheBest.views.homeLayout = new getTheBest.views.HomeLayout();
    getTheBest.models.audioManager = new getTheBest.models.AudioManager();
  });

  getTheBest.start();
})();
