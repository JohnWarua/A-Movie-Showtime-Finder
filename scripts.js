$("document").ready(function(){
  $(".three").click(function(){
    $(".movie1").slideToggle();
    $(".three").slideToggle();
  });
  $(".crown").click(function(){
    $(".movie2").slideToggle();
    $(".crown").slideToggle();
  });

  $(".lucifer").click(function(){
    $(".movie3").slideToggle();
    $(".lucifer").slideToggle();
  });
  $(".ozak").click(function(){
    $(".movie4").slideToggle();
    $(".ozak").slideToggle();
  });

  $(".btn").click(function(){
    $(".down").show();
  });
  $(".down").click(function(){
    $(".down").hide();
  });
})
