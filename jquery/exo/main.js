function AnimationRouge (){
  $("#div3").animate({left: '500px'}, 3000)
  $("#div3").animate({top: '500px'}, 3000)
  $("#div3").animate({left: '50px'}, 3000)
  $("#div3").animate({top: '50px'}, 3000)
}

function AnimationBleu (){
  $("#div4").animate({left: '50px'}, 3000)
  $("#div4").animate({top: '50px'}, 3000)
  $("#div4").animate({left: '500px'}, 3000)
  $("#div4").animate({top: '500px'}, 3000)
}

$("body").on('animationRougeEvent', AnimationRouge)
$("body").on('animationBleuEvent', AnimationBleu)

$(document).ready(function(){

  $("#btn1").click(function() {
    $(this).trigger('animationRougeEvent')
    $(this).trigger('animationBleuEvent')
  })

  $("#btn2").click(function(){
    $("#div3").stop(true,true)
    $("#div4").stop(true,true)
  })
})