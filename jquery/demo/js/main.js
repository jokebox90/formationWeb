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

function setBackgroundColor(event) {
  $(event.target).css('background-color', getRandomColor());

  let overlay = $('div');
  overlay.toggleClass('overlay');
  $(event.target).append(overlay);
}

$(document).ready(function(){
  const cols = $(".col");

  // Défini l'événement qui permet de changer la couleur
  $(document).on('maCouleurChangeEvent', setBackgroundColor);

  setInterval(function() {
    cols.trigger('maCouleurChangeEvent')
  }, 4500);
});
