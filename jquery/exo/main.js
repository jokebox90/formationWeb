$(document).ready(function() {
  $('.mot').click(function() {
    $(this).next().toggleClass('cache');
  });

  $('.mot').mouseover(function() {
    $(this).toggleClass('color');
  });
});