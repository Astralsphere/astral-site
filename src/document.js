$(document).ready(function () {
  $("a").on("animationiteration", function () {
    $(this).removeClass("animated");
  });

  $("a").hover(function () {
    $(this).addClass("animated"); 
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.social img').forEach(function(img) {
    const originalSrc = img.src;

    img.addEventListener('mouseover', function() {
        img.src = originalSrc.replace('.png', ' hover.png');
    });

    img.addEventListener('mouseout', function() {
        img.src = originalSrc;
    });

    img.addEventListener('mousedown', function() {
        img.src = originalSrc.replace('.png', ' pressed.png');
    });

    img.addEventListener('mouseup', function() {
        img.src = originalSrc.replace('.png', ' hover.png');
    });
  });
});