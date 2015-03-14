// // How many aisles do you need?
// // How many rows do you want?

// var setPlane = function (aisles, rows) {
//   for ( var i = 1; i <= aisles; i++ ) {
//     var letter;
//     switch ( i ) {
//       case 1:
//         letter = "A";
//         break;
//       case 2:
//         letter = "B";
//         break;
//       case 3:
//         letter = "C";
//         break;
//       case 4:
//         letter = "D";
//         break;
//       case 5:
//         letter = "E";
//         break;
//       case 6:
//         letter = "F";
//         break;
//       case 7:
//         letter = "G";
//         break;
//       case 8:
//         letter = "H";
//         break;
//     }
//     for ( var x = 1; x <= rows; x++ ) {
//       $("#seats").append("<div data-aisle=\"" + letter + "\" data-row=\"" + x + "\">" + x + letter + "</div>");
//     }
//     if ( i % 2 == 0 ) {
//       $("#seats").append("<br /><br />")
//     } else {
//       $("#seats").append("<br />")
//     }


//   }

// }

// $(document).ready(function () {
//   setPlane(4, 10);

//   $("div#seats div").click(function () {
//     var aisle = $(this).data("aisle");
//     var row = $(this).data("row");
//     console.log("Seat: " + row + aisle);
//   });

// });
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var BurningAirlines = BurningAirlines || {};

  $(document).ready(function() {
    
    BurningAirlines.routers = new BurningAirlines.Routers.Flights();
    BurningAirlines.Collections.flights = new BurningAirlines.Collections.Flights();
    // debugger;
    Backbone.history.start({
      pushState: false
    });
  });