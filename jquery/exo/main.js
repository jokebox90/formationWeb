function executeClick(question, reponse) {
  $(question).children().toggleClass('collapse');
  $(reponse).fadeToggle();
}

function enregistreClick(question, reponse) {
  $(question).click(function() { executeClick(question, reponse) });
  $(reponse).click(function() { executeClick(question, reponse) });
}

$(document).ready(function(){
  enregistreClick('#q1', '#a1');
  enregistreClick('#q2', '#a2');
  enregistreClick('#q3', '#a3');
})