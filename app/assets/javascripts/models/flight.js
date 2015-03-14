var BurningAirlines = BurningAirlines || {};

// class BurningAirlines.Models.Flight extends Backbone.Model

BurningAirlines.Models.Flight = Backbone.Model.extend({
    url: function () {
      return '/flights/' + this.get('flight_id');
      console.log('url');
    },
    defaults: {
      flight_number: '',
      origin: '',
      destination: '',
      date: '',
      airplane_id: ''
    }
});

