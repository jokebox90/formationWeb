$(document).ready(function() {
  $('.question').click(function() {
    $(this).children().toggleClass('collapse');
    $(this).next().fadeToggle();
  });

  $('.answer').click(function() {
    $(this).prev().children().toggleClass('collapse');
    $(this).fadeToggle();
  });
})