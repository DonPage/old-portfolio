/**
 * Created by donpage on 10/10/14.
 */
var pageHeight = $(window).height();
var stopPoint = pageHeight - 8;
console.log(pageHeight);
$(window).scroll(function (e) {

    if ($("#back2top").hasClass("showing")) {
        if ($(this).scrollTop() < 80) {
            $("#back2top").css({bottom: "-4em"});
        } else {
            $("#back2top").css({bottom: "0"});
        }
    }
});

