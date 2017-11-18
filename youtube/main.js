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
});


function keyWordsearch(){
    gapi.client.setApiKey(auth.key);
    gapi.client.load('youtube', 'v3', function() {
            makeRequest();
    });
      }

  function makeRequest() {
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
            q: q,
            part: 'snippet', 
            maxResults: 10
    });
    request.execute(function(response)  {                                                                                    
            $('#results').empty()
            var srchItems = response.result.items;                      
            $.each(srchItems, function(index, item) {
            vidTitle = item.snippet.title;  

            $('#results').append('<pre>' + vidTitle + '</pre>');                      
    })  
})  
}