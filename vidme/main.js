var auth;
var headers;
var channelId;
var token_;
var async_ = false;
$(document).ready(function () {
    $.getScript("functions/connectivity.js",function()
    {
       auth =  getAuth("vidme");
       auth = auth.responseJSON;
       console.log(auth.key);
    });
    
});

function getToken()
{

}

function getChannelId(channelName)
{
    return false;
}

function uploadVideo(sourceUrl, vidTitle, vidDescription)
{
    isPrivate = false;
    callLink = "https://api.vid.me/video/upload";
}