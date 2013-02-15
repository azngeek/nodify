// Filename: views/projects/list
define([
    'jquery',
    'underscore',
    'backbone',
    // Pull in the Collection module from above,
    'models/UserModel',
    'text!templates/profile/user.html'

], function($, _, Backbone, UserModel, userTemplate){
    var ProfileUser = Backbone.View.extend({
        el: $("#profile"),
        data: null,
        render: function(id){

            this.model = new UserModel({id: id});
            result = this.model.fetch({
                success: function (user) {
                    console.log('Retreiving data: ');
                    this.data = user.toJSON();
                    console.log(user.toJSON());

                    console.log('Rendering with data: ');
                    console.log(this.data);
                    var template = _.template( userTemplate, {user: this.data} );
                    $("#profile").html( template );
                }
            })
        }
    });
    return ProfileUser;
});