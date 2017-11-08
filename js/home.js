$(function () {
  $(".ham_menu").on("click", function () {
      if ($(this).parent(".menu").find(".dropmenu").css("width") === "0px") {
          $(this).parent(".menu").find(".dropmenu").animate({"width": "100%"});
      } else {
          $(this).parent(".menu").find(".dropmenu").animate({"width": "0"});
      }
    
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
}

function move() {
    for (i = 0; i < image.length; i++) {
        alert("here");
        document.getElementsByClassName("slider")[0].setAttribute("src", image[i]);
        x = i + 1;
        document.getElementById("title").innerHTML = "Slider " + x + "!";
    }
    
    
    //console.log(x);
    //var y = document.getElementById("title").innerHTML = "Slide 2";
    
    //x.setAttribute("src", "secondimage.png");
}

