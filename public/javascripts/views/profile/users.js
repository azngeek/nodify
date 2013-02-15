// Filename: views/projects/list
define([
    'jquery',
    'underscore',
    'backbone',
    // Pull in the Collection module from above,
    'models/UsersModel',
    'text!templates/profile/users.html'

], function($, _, Backbone, UsersModel, usersTemplate){


    var ProfileUsers = Backbone.View.extend({

        model: null,
        data: null,
        el: $("#profile"),

        initialize: function(){
            // http://stackoverflow.com/questions/9220092/backbone-js-view-renders-before-model-fetch
        },
        render: function(){

            this.model = new UsersModel();
            result = this.model.fetch({
                success: function (user) {
                    console.log('Retreiving data: ');
                    this.data = user.toJSON();
                    console.log(user.toJSON());

                    console.log('Rendering with data: ');
                    console.log(this.data);
                    var template = _.template( usersTemplate, {users: this.data} );
                    $("#profile").html( template );
                }
            })
        }
    });
    return ProfileUsers;
});