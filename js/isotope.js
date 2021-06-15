$(document).ready(function(){
    $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-item'
  }
})
// filter items on button click
$('.projects-filter').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// filter items on button click
$('.projects-filter').on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active');
});

var $grid = $('.grid').imagesLoaded( function() {
  // init Isotope after all images have loaded
  $grid.isotope({
    // options...
  });
});




})