/**
 * Created by donpage on 9/4/14.
 */

$(window).scroll(function (e) {
    if ($("#navBar").hasClass("open")) {
        if ($(this).scrollTop() < 80) {
//            $("#small-logo").removeClass("show").fadeOut('slow');
            $("#navBar").css({position: "absolute", top: 80});
        } else {
//            $("#small-logo").addClass("show").fadeIn('slow');
            $('#navBar').css({position: "fixed", top: 0});
        }
    }

});

