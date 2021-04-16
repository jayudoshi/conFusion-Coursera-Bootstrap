$(document).ready(function(){
    // Carousel
    console.log("Working");
    $("#carousel").carousel( { interval : 2000 } );
    $("#carouselButton").click(function(){
      if($("#carouselButton").children('span').hasClass("fa-pause")){
        $("#carousel").carousel('pause');
        $("#carouselButton").children('span').removeClass("fa-pause");
        $("#carouselButton").children('span').addClass("fa-play");
      }else{
        $("#carousel").carousel('cycle');
        $("#carouselButton").children('span').removeClass("fa-play");
        $("#carouselButton").children('span').addClass("fa-pause");
      } 
    });

    $("#reserveTableButton").click(function(){
      $("#reserveModal").modal('toggle')
    });

    $("#loginButton").click(function(){
      $("#loginModal").modal('toggle')
    })

  });