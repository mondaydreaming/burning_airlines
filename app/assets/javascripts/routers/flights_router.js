var BurningAirlines = BurningAirlines || {};

// class BurningAirlines.Routers.Flights extends Backbone.Router
// app.AppRouter = Backbone.Router.extend({

BurningAirlines.Routers.Flights = Backbone.Router.extend({
  routes: {
    // '': 'index',
    'flights/:id': 'viewFlight'
  },
  // index: function () {
  //   console.log('backbone index');
  // },

  viewFlight: function () {
    console.log('viewFlight');
  }

});