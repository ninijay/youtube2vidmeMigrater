var auth;
$(document).ready(function () {
    $.getScript("functions/connectivity.js",function()
    {
       auth =  getAuth("youtube");
       auth = auth.responseJSON;
       console.log(auth.key);
    });
    
});
