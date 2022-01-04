// jquery/demo/js/main.js

// Créé une palette de couleurs basée ssur Flat UI: https://materialui.co/flatuicolors
const flatUiColors = [
  "#2C3E50", // sombre
  "#ECF0F1", // clair
  "#7F8C8D", // gris
  "#8E44AD", // violet
  "#2980B9", // bleu
  "#27AE60", // vert
  "#F1C40F", // jaune
  "#E67E22", // orange
  "#C0392B", // rouge
]

function getRandomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

function getRandomColor() {
  const maxLength = flatUiColors.length;
  const colorIndex = getRandomNumber(maxLength);
  return flatUiColors[colorIndex];
}

function setBackgroundColor() {
  $(this).css('background-color', getRandomColor());
  $('#login-state').attr('src', 'images/loggedin.png');
}

function triggerMaCouleurChange() {
  $(this).trigger('maCouleurChange');
}

$(document).ready(function(){
  const cols = $(".col");
  const colsImage = $(".col img");

  // Défini l'événement qui permet de changer la couleur
  cols.on('maCouleurChange', setBackgroundColor);

  colsImage.mouseenter('maCouleurChange', function() {
    $(this).parent().trigger('maCouleurChange')
  });

  colsImage.mouseleave('maCouleurChange', function() {
    $(this).parent().trigger('maCouleurChange')
  });
  // Change un première fois les couleurs au chargement de la page
  cols.each(triggerMaCouleurChange);

  // Déclenche l'événement grâce à des actions de la souris
  cols.mouseenter(triggerMaCouleurChange);
  cols.mouseleave(triggerMaCouleurChange);

  cols.mouseenter('maCouleurChange', function() {
    $(this).parent().children().trigger('maCouleurChange')
  });

  cols.mouseleave('maCouleurChange', function() {
    $(this).parent().children().trigger('maCouleurChange')
  });

  // Déclenche l'événement grâce à des actions de la souris
  $('body').keydown(triggerMaCouleurChange);
});
