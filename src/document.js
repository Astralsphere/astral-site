$(document).ready(function () {
  $("a").on("animationiteration", function () {
    $(this).removeClass("animated");
  });

  $("a").hover(function () {
    $(this).addClass("animated");
  });
});