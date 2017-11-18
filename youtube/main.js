var auth;

function getAuth(){
    $.ajaxSetup({beforeSend: function(xhr){
        if (xhr.overrideMimeType)
        {
          xhr.overrideMimeType("application/json");
        }
      }
      });
      $.ajaxSetup( { "async": false } );
   $.getJSON( "youtube/auth.json", function(data) {
       auth = data;
    }).fail(function(d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: "+error)
    });
}

function fetchVideos(creator){
    var vids = [];
    // fetchvideos from creator
    return vids;
}

$(document).ready(function (){
    getAuth();
    console.log(auth.key);
});
