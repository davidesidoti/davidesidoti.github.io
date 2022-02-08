$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20)
            $(".navbar").addClass("sticky");
        else
            $(".navbar").removeClass("sticky");

        if (this.scrollY > 610) {
            $("#progress-bar").addClass("progress-bar-fixed");
            $(".content-index").addClass("index-active");
        } else {
            $("#progress-bar").removeClass("progress-bar-fixed");
            $(".content-index").removeClass("index-active");
        }

    });

    $(".menu-toggler").click(function () {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    $(".nav-link").click(function () {
        $(".menu-toggler").toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });
});