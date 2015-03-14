var BurningAirlines = BurningAirlines || {};

// class BurningAirlines.Collections.Flights extends Backbone.Collection

//   model: BurningAirlines.Models.Flight

BurningAirlines.Collections.Flights = Backbone.Collection.extend({
  url: '/flights',
  model: BurningAirlines.Models.Flight
});