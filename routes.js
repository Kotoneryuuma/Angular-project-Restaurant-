//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./controller")

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){
    app.get('/restaurants', controller.index)
    app.get ( '/restaurants/:id' , controller.show );
    app.post ( '/restaurants' , controller.add );
    app.put( '/restaurants/:id' , controller.updt );
    app.delete( '/restaurants/:id' , controller.delete );
    app.put ( '/restaurants/:id/reviews' , controller.addreview );
    // app.get('/restaurants/:id/reviews', controller.getreview);
    app.all('*', controller.angular)
}