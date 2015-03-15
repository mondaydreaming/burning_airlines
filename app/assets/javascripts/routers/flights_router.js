var BurningAirlines = BurningAirlines || {};

// class BurningAirlines.Routers.Flights extends Backbone.Router
// app.AppRouter = Backbone.Router.extend({

BurningAirlines.Routers.Flights = Backbone.Router.extend({
  routes: {
    '': 'index',
    'flights/:id': 'viewFlight'
    // 'airplanes/:id': 'viewAirplane'
  },
  // index: function () {
  //   console.log('backbone index');
  // },

  viewFlight: function (id) {
    $("#main").empty();
    $("#seats").show();
    BurningAirlines.Collections.flights.fetch().done(function () {
      var currentFlight = BurningAirlines.Collections.flights.get(id);
      var individualFlightHTML = $("#individualFlightView-template").html();
      var individualFlightHTMLTemplate = _.template(individualFlightHTML);
      $("#main").append(individualFlightHTMLTemplate( currentFlight.attributes ));
      // BurningAirlines.Collections.flights.fetch({  data: { origin: "Sydney", destination: "Melbourne"  }  })
    });

    BurningAirlines.Collections.airplanes.fetch().done(function () {
      var currentAirplane = BurningAirlines.Collections.airplanes.get(id);
      var individualAirplaneHTML = $("#individualAirplaneView-template").html();
      var individualAirplaneHTMLTemplate = _.template(individualAirplaneHTML);
      $("#main").append(individualAirplaneHTMLTemplate( currentAirplane.attributes ));
      
      // ERROR: Handlebars not displaying #seats
      // var airplaneSeatsViewHTML = $("#airplaneSeatsView-template").html();
      // var airplaneSeatsViewHTMLTemplate = _.template(airplaneSeatsViewHTML);
      // $("#main").append(airplaneSeatsViewHTMLTemplate());
      // BurningAirlines.Collections.airplanes.fetch({  data: { origin: "Sydney", destination: "Melbourne"  }  })
    });


  }

});

// airplane name being added to the flight model is to be worked out
// var associatedPlaneId = BurningAirlines.Collections.flights.pluck('airplane_id');
// var currentAssociatedPlane = BurningAirlines.Collections.airplanes.pluck('name')[associatedPlaneId -1];