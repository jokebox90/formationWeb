$(document).ready(function() {
  $('.mot').addClass('color');

  $('.mot').click(function() {
    $(this).next().toggleClass('cache');
  });

  $('.mot').mouseover(function() {
    $(this).toggleClass('color');
  });
});