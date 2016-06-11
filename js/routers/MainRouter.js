var getTheBest = getTheBest || new Marionette.Application();
getTheBest.views = getTheBest.views || {};
getTheBest.routers = getTheBest.routers || {};
getTheBest.controllers = getTheBest.controllers || {};

(function(){
  "use strict";

  getTheBest.routers.MainRouter = Marionette.AppRouter.extend({
    controller:getTheBest.controllers.mainController,
    appRoutes: {
      "": "renderHome",
      ":artist":"renderTracks"
    }
  });
})();
