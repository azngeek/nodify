/**
 * Created with JetBrains PhpStorm.
 * User: donbosco
 * Date: 14.02.13
 * Time: 23:17
 * To change this template use File | Settings | File Templates.
 */
// Filename: app.js
define([
    'jquery',
    'underscore',
    'backbone',
    'router' // Request router.js
], function($, _, Backbone, Router){
    var initialize = function(){
        // Pass in our Router module and call it's initialize function
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});