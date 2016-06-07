var getTheBest = getTheBest || {};
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
      console.log("i'm up");
      this.showChildView("search",new getTheBest.views.Search());
    }
  });
})();
