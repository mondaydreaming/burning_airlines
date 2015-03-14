var BurningAirlines = BurningAirlines || {};

// class BurningAirlines.Routers.Flights extends Backbone.Router
// app.AppRouter = Backbone.Router.extend({

BurningAirlines.Routers.Flights = Backbone.Router.extend({
  routes: {
    '': 'index',
    'flights/:id': 'viewFlight'
  },
  // index: function () {
  //   console.log('backbone index');
  // },

  viewFlight: function (id) {
    $("#main").empty();
    console.log('viewFlight');
    BurningAirlines.Collections.flights.fetch().done(function () {
      var currentFlight = BurningAirlines.Collections.flights.get(id);
      var individualFlightHTML = $("#individualFlightView-template").html();
      var individualFlightHTMLTemplate = _.template(individualFlightHTML);

      $("#main").append(individualFlightHTMLTemplate( currentFlight.attributes ));
      // BurningAirlines.Collections.flights.fetch({  data: { origin: "Sydney", destination: "Melbourne"  }  })
    });
  }

});