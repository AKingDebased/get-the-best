var getTheBest = getTheBest || {};
getTheBest.views = getTheBest.views || {};
getTheBest.routers = getTheBest.routers || {};
getTheBest.controllers = getTheBest.controllers || {};

(function(){
  "use strict";

  getTheBest.routers.mainRouter = new getTheBest.routers.MainRouter();
  Backbone.history.start();

  getTheBest.views.homeLayout = new getTheBest.views.HomeLayout();
})();
