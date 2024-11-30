$(document).ready(function () {
  $("a").on("animationiteration", function () {
    $(this).removeClass("animated");
  });

  $("a").hover(function () {
    $(this).addClass("animated"); 
  });
});

function changeFlag() {
  var select = document.getElementById("ddlLanguage");
  var img = document.getElementById("languageFlag");
  
  if (select.value === "en") {
      img.src = "imgs/Dictionary/usa.png";
  } else if (select.value === "pt-br") {
      img.src = "imgs/Dictionary/brasil.png";
  }
}

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

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.pauseVideo();
}