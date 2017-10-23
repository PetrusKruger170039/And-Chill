$(function () {
  $(".ham_menu").on("click", function () {
      if ($(this).parent(".menu").find(".dropdown").css("width") === "0px") {
          $(this).parent(".menu").find(".dropdown").animate({"width": "100%"});
      } else {
          $(this).parent(".menu").find(".dropdown").animate({"width": "0"});
      }
    
});
  });

function hamMenu(x) {
    x.classList.toggle("change");
    
    document.getElementById("dropdown").classList.toggle("show");
};

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");//and here is the problem
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}