function enregistreClick(question, reponse) {
  $(question).click(function() {
    $(reponse).fadeToggle();
  })
}

$(document).ready(function(){
  enregistreClick('#q1', '#a1')
  enregistreClick('#q2', '#a2')
  enregistreClick('#q3', '#a3')
})