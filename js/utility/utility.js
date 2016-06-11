var getTheBest = getTheBest || new Marionette.Application();

(function(){
  getTheBest.formatArtist = function(artist){
    return artist.replace(/\s/g, '-');
  }

  //returns promise containing given artist's top 10 tracks
  getTheBest.getTracks = function(searchedArtist){
    return $.ajax({
      method:"GET",
      url:"https://api.spotify.com/v1/search",
      data:{
        q:searchedArtist,
        type:"artist"
      }
    }).then(function(artistData){
      //assuming first result is the searched artist
      return $.ajax({
        method:"GET",
        url:"https://api.spotify.com/v1/artists/" + artistData.artists.items[0].id + "/top-tracks",
        data:{
          //defaults to top US tracks
          country:"US"
        }
      });
    },function(err){
      console.log(err);
    })
  }
})();
