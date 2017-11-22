var auth;
var vids = [];
var videoLink = "https://www.youtube.com/watch?v=";

$(document).ready(function () {
    $.getScript("functions/connectivity.js",function()
    {
       auth =  getAuth("youtube");
       auth = auth.responseJSON;
       console.log(auth.key);
    });
    
});

function getChannelForUser(user) {
    var user = [];
    gapi.client.setApiKey(auth.key);
    gapi.client.load('youtube', 'v3', function () {
        var request = gapi.client.youtube.channels.list({
            forUsername: user,
            part: id,
            maxResults: 1
        });
        request.execute(function (response) {
            var channel = response.results.items;
            $.each(channel, function (index, item) {
                user.push(item.id);
            })
        })
    });
    return user[0];
}

function keyWordsearch() {
    gapi.client.setApiKey(auth.key);
    gapi.client.load('youtube', 'v3', function () {
        makeRequest();
    });
}

function makeRequest() {
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
        q: q,
        part: 'snippet',
        maxResults: 50
    });
    request.execute(function (response) {
        $('#results').empty()
        var srchItems = response.items;
        $.each(srchItems, function (index, item) {
            vidId = item.id.videoId;
            if (typeof vidId != 'undefined') {
                vids.push(videoLink + vidId);
                console.log(videoLink + vidId);
            }
            
        })
    })
}