// routing based on http://backbonetutorials.com/what-is-a-router/#/route/action
// https://github.com/grifotv/grifotv-portfolio/tree/master/bin <- Killer portfolio
// http://www.azngeek.de:3000/backbone#/postasdfa/asfda22

var AppRouter = Backbone.Router.extend(
    {
        routes: {
            "user/:id": "getUser",
            "*actions": "defaultRoute" // matches http://example.com/#anything-here
        }
    }
);
app_router = new AppRouter;

app_router.on('route:defaultRoute', function(actions) {
   // alert(actions);
});

app_router.on('route:getUser', function(id) {
    console.log('id was: ' + id);
});

Backbone.history.start();