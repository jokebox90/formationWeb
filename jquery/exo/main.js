function Animation(){
  $("#div4").animate({left: '50px'}, 3000)
  $("#div4").animate({top: '50px'}, 3000)
  $("#div4").animate({left: '500px'}, 3000)
  $("#div4").animate({top: '500px'}, 3000)

  $("#div3").animate({left: '500px'}, 3000)
  $("#div3").animate({top: '500px'}, 3000)
  $("#div3").animate({left: '50px'}, 3000)
  $("#div3").animate({top: '50px'}, 3000)

  Animation()
}

$(document).on('animationEvent', Animation)

$(document).ready(function(){

  $("#btn1").click(function() {
    Animation()
  })

  $("#btn2").click(function(){
    $("#div3").stop(true,false)
    $("#div4").stop(true,false)
  })
})