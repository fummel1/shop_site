$("header .menu .menu-right").on("click", function () {
   if($("header .menu-mobile").is(":visible"))
      $(this).html('<i class="fas fa-bars"></i>');
   else
      $(this).html('<i class="fas fa-times"></i>');
   $("header .menu-mobile").slideToggle();
});

$("#show-menu").on("click", function () {
   $("#hidden-menu").animate({
      "right": 0
   }, 500);
});

$("#hidden-menu .close").on("click", function () {
   $("#hidden-menu").animate({
      "right": "-370px"
   }, 300);
});


