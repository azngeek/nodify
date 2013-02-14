// Filename: views/projects/list
define([
    'jquery',
    'underscore',
    'backbone',
    // Pull in the Collection module from above,
    'text!templates/profile/user.html'

], function($, _, Backbone, userTemplate){
    var ProfileUser = Backbone.View.extend({
        el: $("#profile"),

        render: function(){

            var data = {};
            var template = _.template( userTemplate, {} );
            $("#profile").html( template );
        }
    });
    return ProfileUser;
});