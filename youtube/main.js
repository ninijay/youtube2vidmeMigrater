var auth;
var vids = [];
var videoLink = "https://www.youtube.com/watch?v=";

function getAuth() {
    $.ajaxSetup({
        beforeSend: function (xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });
    $.ajaxSetup({ "async": false });
    $.getJSON("youtube/auth.json", function (data) {
        auth = data;
    }).fail(function (d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: " + error)
    });
}

$(document).ready(function () {
    getAuth();
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
            var channel = respone.results.items;
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
        maxResults: 100
    });
    request.execute(function (response) {
        $('#results').empty()
        var srchItems = response.result.items;
        $.each(srchItems, function (index, item) {
            vidId = item.id.videoId;
            if (typeof vidId != 'undefined') {
                vids.push(videoLink + vidId);
            }
            console.log(videoLink + vidId);
        })
    })
}