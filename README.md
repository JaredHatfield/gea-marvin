gea-marvin
==========

This application uses [Push to Speech for Android](https://pushtospeech.appspot.com/) to make appliances talk.

Configuration
-------------

For this application to work you must get the deviceid from the Push to Speech android application and specify it in the configuration file.  This will allow gea-maven to call the REST API to send push notifications that will read the text aloud.

    // config.js
    var config = {}
    config.push2speech = "DEVICE_ID_HERE"
    module.exports = config;
