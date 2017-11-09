$(function () {    
    $(".input").children(".password").children(".glyphicon").on("click", function () {
        if ($(this).attr("class") === "glyphicon glyphicon-eye-close") {
            $(this).attr("class", "glyphicon glyphicon-eye-open");
            $(this).parent().find("input").removeClass();
        } else {
            $(this).attr("class", "glyphicon glyphicon-eye-close");
            $(this).parent().find("input").addClass("dots");
        }
        
    });
    
    $(".input").children(".username").children(".glyphicon").on("click", function () {
        $(this).parent().children("input[type=text], textarea").val("");
    });
});