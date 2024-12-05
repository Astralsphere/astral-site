/* Loading*/
document.addEventListener("DOMContentLoaded", function() {
  const loading = document.getElementById('loading');
  const progressBar = document.getElementById('progress-bar');
  const content = document.getElementById('content');
  let progress = 0;
  document.body.classList.add("no-scroll");

    const startTime = performance.now();
    for (let i = 0; i < 1e6; i++) {}
    const executionTime = performance.now() - startTime;

    const intervalSpeed = Math.max(50, Math.min(500, executionTime * 5));

    const loadingInterval = setInterval(() => {
        if (progress < 100) {
            progress += Math.min(2 + 100 / intervalSpeed, 10);
            progressBar.style.width = Math.min(progress, 100) + "%";
        } else {
            clearInterval(loadingInterval);
            progressBar.classList.add("pulse");
            loading.style.transition = "opacity 1s ease";
            loading.style.opacity = "0";
            setTimeout(() => {
                loading.style.display = "none";
                content.classList.add("visible");
                document.body.classList.remove("no-scroll");
            }, 1000);
        }
    }, intervalSpeed);

  /* Botões */
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

$(document).ready(function () {
  $("a").on("animationiteration", function () {
    $(this).removeClass("animated");
  });
  $("a").hover(function () {
    $(this).addClass("animated"); 
  });
});

/* Ajustes do Select*/
function changeFlag() {
  var select = document.getElementById("ddlLanguage");
  var img = document.getElementById("languageFlag");
  if (select.value === "en") {
      img.src = "imgs/Dictionary/usa.png";
  } else if (select.value === "pt-br") {
      img.src = "imgs/Dictionary/brasil.png";
  }
}

/* Trailer começa pausado */
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