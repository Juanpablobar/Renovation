$.fn.jQuerySimpleCounter = function( options ) {
      var settings = $.extend({
          start:  0,
          end:    100,
          easing: 'swing',
          duration: 400,
          complete: ''
      }, options );

      var thisElement = $(this);

      $({count: settings.start}).animate({count: settings.end}, {
      duration: settings.duration,
      easing: settings.easing,
      step: function() {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete
    });
  };
  var seEjecuto = 0;
 $(window).scroll(function() {
 if ($(this).scrollTop() >= $("#counter").position().top && seEjecuto === 0) {
 	seEjecuto = 1;
  $('#number1').jQuerySimpleCounter({start: 0,end: 499,duration: 7000});
  $('#number2').jQuerySimpleCounter({start: 0,end: 9598,duration: 7000});
  $('#number3').jQuerySimpleCounter({start: 0,end: 1999,duration: 7000});
  $('#number4').jQuerySimpleCounter({start: 0,end: 199,duration: 7000});
}
});