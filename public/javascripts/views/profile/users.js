// Filename: views/projects/list
define([
    'jquery',
    'underscore',
    'backbone',
    // Pull in the Collection module from above,
    'text!templates/profile/users.html'

], function($, _, Backbone, usersTemplate){
    var ProfileUsers = Backbone.View.extend({
        el: $("#profile"),

        render: function(){

            var data = {};
            var template = _.template( usersTemplate, {} );
            $("#profile").html( template );
        }
    });
    return ProfileUsers;
});