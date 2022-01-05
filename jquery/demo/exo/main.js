$(document).ready(function() {
  $('.mot').addClass('color');
  $('.mot').mouseover(function() {
    $(this).toggleClass('color');
  });
});