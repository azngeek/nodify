// routing based on http://backbonetutorials.com/what-is-a-router/#/route/action
// https://github.com/grifotv/grifotv-portfolio/tree/master/bin <- Killer portfolio
// http://www.azngeek.de:3000/backbone#/postasdfa/asfda22

// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
    paths:{
        jquery:'lib/jquery-1.9.1.min',
        underscore:'lib/underscore-min',
        backbone:'lib/backbone-min',
        text:'lib/text'
    }

});

require([

    // Load our app module and pass it to our definition function
    'app'
], function (App) {
    // The "app" dependency is passed in as "App"
    App.initialize();
});

