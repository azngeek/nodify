define([
    'underscore',
    'backbone'
], function(_, Backbone) {

    // http://backbonetutorials.com/what-is-a-model/
    var UserModels = Backbone.Model.extend({
        urlRoot: '/dusers'
    });

    return UserModels;
});