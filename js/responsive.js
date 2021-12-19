$(document).ready(function () {
   $(window).scroll(function () {
       if (this.scrollY > 20)
           $(".navbar").addClass("sticky");
       else
           $(".navbar").removeClass("sticky");
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