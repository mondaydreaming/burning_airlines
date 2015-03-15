var BurningAirlines = BurningAirlines || {};

// class BurningAirlines.Collections.Flights extends Backbone.Collection

//   model: BurningAirlines.Models.Flight

BurningAirlines.Collections.Airplanes = Backbone.Collection.extend({
  url: '/airplanes',
  model: BurningAirlines.Models.Airplane
});