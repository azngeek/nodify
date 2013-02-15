// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'views/profile/user',
    'views/profile/users'
], function($, _, Backbone, ProfileUser, ProfileUsers, Session){
    var AppRouter = Backbone.Router.extend({
        routes: {
            "user/:id": "user",
            "users": "users",
            "*actions": "defaultRoute" // Backbone will try match the route above first
        }
    });

    var initialize = function(){

        var app_router = new AppRouter;
        app_router.on('route:user', function (id) {
            // Note the variable in the route definition being passed in here
            console.log( "Get post number " + id );
            var profileUser = new ProfileUser();
            profileUser.render();
        });
        app_router.on('route:users', function (id) {
            // Note the variable in the route definition being passed in here
            console.log( 'router.js: Rendering View: ProfileUsers');
            var profileUsers = new ProfileUsers();
            profileUsers.render();
        });
        app_router.on('route:defaultRoute', function (actions) {
            console.log( actions );
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});