var BurningAirlines = BurningAirlines || {};

BurningAirlines.Models.Airplane = Backbone.Model.extend({
  urlRoot: '/airplanes',
  defaults: {
    name: '',
    rows: '',
    aisles: ''
  }
});