function executeClick() {
  $(question).children().toggleClass('collapse');
  $(reponse).fadeToggle();
}

function enregistreClick(question, reponse) {
  $(question).click(executeClick)
  $(reponse).click(executeClick)
}

$(document).ready(function(){
  enregistreClick('#q1', '#a1');
  enregistreClick('#q2', '#a2');
  enregistreClick('#q3', '#a3');
})