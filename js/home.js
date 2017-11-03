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