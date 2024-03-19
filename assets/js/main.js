// swiper js
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
});


// set counter
var counted = 0;
$(window).scroll(function () {

  var oTop = $('#number1').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $.fn.jQuerySimpleCounter = function (options) {
      var settings = $.extend({
          start: 0,
          end: 100,
          easing: "swing",
          duration: 400,
          complete: "",
        },
        options
      );

      var thisElement = $(this);

      $({
        count: settings.start,
      }).animate({
        count: settings.end,
      }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
          var mathCount = Math.ceil(this.count);
          thisElement.text(mathCount);
        },
        complete: settings.complete,
      });
    };

    $("#number1").jQuerySimpleCounter({
      end: 300,
      duration: 3000,
    });
    $("#number2").jQuerySimpleCounter({
      end: 98,
      duration: 3000,
    });
    $("#number3").jQuerySimpleCounter({
      end: 15,
      duration: 2000,
    });
    counted = 1;
  }

});



// isotops

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function (itemElem) {
      var weight = $(itemElem).find('.weight').text();
      return parseFloat(weight.replace(/[\(\)]/g, ''));
    }
  }

});


// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function () {
    var number = $(this).find('.number').text();
    return parseInt(number, 10) > 50;
  },
  // show if name ends with -ium
  ium: function () {
    var name = $(this).find('.name').text();
    return name.match(/ium$/);
  }
};

// bind filter button click
$('#filters').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[filterValue] || filterValue;
  $grid.isotope({
    filter: filterValue
  });
});
