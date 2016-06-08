var getTheBest = getTheBest || new Marionette.Application();
getTheBest.collections = getTheBest.collections || {};
getTheBest.models = getTheBest.models || {};

(function(){
  "use strict";

  getTheBest.collections.Tracks = Backbone.Collection.extend({
    model:getTheBest.models.Track
  });
})();
