var getTheBest = getTheBest || {};
getTheBest.views = getTheBest.views || {};
getTheBest.routers = getTheBest.routers || {};
getTheBest.controllers = getTheBest.controllers || {};

(function(){
  "use strict";

  getTheBest.views.Results = Marionette.CompositeView.extend({
    template:"#results",
    childView:getTheBest.views.Track,
    childViewContainer:".tracks"
  });
})();
