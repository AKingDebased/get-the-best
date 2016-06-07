var getTheBest = getTheBest || {};
getTheBest.views = getTheBest.views || {};
getTheBest.routers = getTheBest.routers || {};
getTheBest.controllers = getTheBest.controllers || {};

(function(){
  "use strict";

  console.log(getTheBest.controllers.mainController)

  getTheBest.routers.MainRouter = Marionette.AppRouter.extend({
    controller:getTheBest.controllers.mainController,
    appRoutes: {
      "": "renderHome"
    }
  });
})();
