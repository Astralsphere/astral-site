const schemaData = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Astral Adventure",
  "description": "Astral Adventure é um jogo indie brasileiro em desenvolvimento, que mistura SHMUP (ou jogos de nave) com elementos de jogos de plataforma.",
  "image": "imgs\astral.ico", 
  "url": "https://astralsphere.github.io/astral-site/",
  "genre": ["SHMUP", "Plataforma", "Aventura", "Indie", "Brasileiro", "Jogo de nave"],
  "gameMode": "SinglePlayer",
  "publisher": {
    "@type": "Organization",
    "name": "Astral Sphere"
  },
  "developer": {
  "@type": "Organization",
  "name": "Astral Sphere"
  },
  "trailer": {
  "@type": "VideoObject",
  "name": "Trailer de Astral Adventure",
  "embedUrl": "https://youtu.be/8UI-t1i_kHE"
},
  "platform": "Mobile"
};
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schemaData);
document.head.appendChild(script);