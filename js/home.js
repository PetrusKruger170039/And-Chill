$(document).ready(function () {
   $("#img-place").attr("src", "img/home/small_place/Blade_Runner_2049.jpeg");
    $("#img-place-1").attr("src", "img/home/small_place/American_Assassin.jpg");
    $("#img-place-2").attr("src", "img/home/small_place/GOTG_vol2.jpg");
    $("#img-place-3").attr("src", "img/home/small_place/kingsman__the_golden_circle.jpg");
    $("#img-place-4").attr("src", "img/home/small_place/Lego_ninjago.jpg");
    $("#img-place-5").attr("src", "img/home/small_place/Girls_trip.jpg");
});


$(function () {
  $(".ham_menu").on("click", function () {
      if ($(this).parent(".menu").find(".dropmenu").css("width") === "0px") {
          $(this).parent(".menu").find(".dropmenu").animate({"width": "100%"});
      } else {
          $(this).parent(".menu").find(".dropmenu").animate({"width": "0"});
      }
  });
    
    $(".overlay").on("mouseenter", function () {
        $(this).animate({"opacity" : "1"}, 250);
    });
    $(".overlay").on("mouseleave", function () {
        $(this).animate({"opacity" : "0"}, 800);
    });
    //More Info Div that Slides down
    $("#indiv").hide(); 
    $("#indiv-1").hide(); 
    $("#indiv-2").hide(); 
    $("#indiv-3").hide(); 
    $("#indiv-4").hide(); 
    $("#indiv-5").hide();
    $(".readmore").on("click", function () {
        $("#indiv").show(500);
    });
    $(".glyphicon-remove-circle").on("click", function () {
        $("#indiv").hide(500);
    });
    
    $(".readmore-1").on("click", function () {
        $("#indiv-1").show(500);
    });
    $(".glyphicon-remove-circle").on("click", function () {
        $("#indiv-1").hide(500);
    });
    
    $(".readmore-2").on("click", function () {
        $("#indiv-2").show(500);
    });
    $(".glyphicon-remove-circle").on("click", function () {
        $("#indiv-2").hide(500);
    });
    
    $(".readmore-3").on("click", function () {
        $("#indiv-3").show(500);
    });
    $(".glyphicon-remove-circle").on("click", function () {
        $("#indiv-3").hide(500);
    });
    
    $(".readmore-4").on("click", function () {
        $("#indiv-4").show(500);
    });
    $(".glyphicon-remove-circle").on("click", function () {
        $("#indiv-4").hide(500);
    });
    
    $(".readmore-5").on("click", function () {
        $("#indiv-5").show(500);
    });
    $(".glyphicon-remove-circle").on("click", function () {
        $("#indiv-5").hide(500);
    });
});

function hamMenu(x) {
    x.classList.toggle("change");
    document.getElementById("dropmenu").classList.toggle("show");
};

//functionality of the slider

var image = ["firstimage.PNG", "secondimage.png", "thirdimage.jpg"];
var i = 0;

function sliderfunction() {
    var whatever = setTimeout(move, 3000);
};

function move() {
    for (i = 0; i < image.length; i++) {
        alert("here");
        document.getElementsByClassName("slider")[0].setAttribute("src", image[i]);
        x = i + 1;
        document.getElementById("title").innerHTML = "Slider " + x + "!";
    };
    
    
    //console.log(x);
    //var y = document.getElementById("title").innerHTML = "Slide 2";
    
    //x.setAttribute("src", "secondimage.png");
};

