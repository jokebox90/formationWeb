let tableauDesCouleurs = [
  '#2C3E50', // sombre
  '#ECF0F1', // clair
  '#7F8C8D', // gris
  '#8E44AD', // violet
  '#2980B9', // bleu
  '#27AE60', // vert
  '#F1C40F', // jaune
  '#E67E22', // orange
  '#C0392B', // rouge
]

function nombreAleatoire(nombreDeFin) {
  return Math.floor(Math.random() * nombreDeFin);
}

function couleurAleatoire() {
  let longueurDuTableau = tableauDesCouleurs.length;
  let numeroDeCouleur = nombreAleatoire(longueurDuTableau);
  return tableauDesCouleurs[numeroDeCouleur];
}

function changeArrierePlan() {
  $(this).css('background-color', couleurAleatoire());
}

function changementInfini() {
  // La fonction déclenche l'événement
  // et les fonctions qu'on a attaché
  $('.mot').trigger('changeArrierePlanEvent');

  // La fonction se rappelle elle-même toutes les 500ms
  setTimeout(changementInfini, 500);
}

$(document).ready(changementInfini);

$(document).ready(function() {
  $('.mot').click(function() {
    $(this).next().toggleClass('cache');
  });

  // Enregistre l'événement pour qu'il
  // puisse être déclenché plus tard.
  //
  // changeArrierePlan va recevoir
  // this qui correspond à $('.mot')
  $('.mot').on('changeArrierePlanEvent', changeArrierePlan);
});