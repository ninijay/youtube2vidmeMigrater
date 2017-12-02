# youtube2vidmeMigrater
A tool to migrate all videos from youtube to vidme. It's not very secure atm, but it's not meant for production or web plattforms.

This project will be discontinued because vidme is shutting down.

After I manage to implement the rest- calls, I'll try to make them as secure as possible.

Just enter your YouTube Channel Name in the textbox and it will look for the first 50 videos of your channel [and list them in the console].

# Codebase
## functions
Contains global functions to reduce code-duplication.

## youtube
This folder has a main.js file, which pulls 50 videos from the given username from youtube. I'll try to increase this number, once the tool is finished.
### auth.json
You need to generate an YouTube API Application and create an auth.json file with the following contents in `youtube/auth.json`:
```json
{
    "key" : "Your Application Key"
}
```

## vidme
This folder has a main.js file, which will push the obtained videos via url to vidme.com
### auth.json
You need to generate an VidMe API Application and create an auth.json file with the following contents in `vidme/auth.json`:
```json
{
    "key":"Your Application Key",
    "secret":"Your Secret Key",
    "client":"Your Client Key"
}
```
