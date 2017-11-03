$(function () {
    $(".aheader").on("click", function () {
        if ($(this).parent(".accordion").children(".acontent").css("height") == "0px") {
           $(this).parent(".accordion").children(".acontent").css({"height":"auto"}); 
        } else {
            $(this).parent(".accordion").children(".acontent").css({"height":"0px"}); 
        }
    });
});