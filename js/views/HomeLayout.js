var getTheBest = getTheBest ||new Marionette.Application();
getTheBest.views = getTheBest.views || {};
getTheBest.routers = getTheBest.routers || {};
getTheBest.controllers = getTheBest.controllers || {};

(function(){
  "use strict";

  getTheBest.views.HomeLayout =  Marionette.LayoutView.extend({
    el:".get-the-best",
    template: "#home-layout",
    regions: {
      search: ".search",
      results: ".results"
    },
    initialize:function(){
      this.render();
      
      this.showChildView("search",new getTheBest.views.Search());
      this.showChildView("results",new getTheBest.views.Results());
    }
  });
})();
