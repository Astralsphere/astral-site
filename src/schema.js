const schemaData = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Astral Adventure",
  "description": "Astral Adventure é um jogo indie brasileiro em desenvolvimento, que mistura SHMUP (ou jogos de nave) com elementos de jogos de plataforma.",
  "image": "imgs\astral.ico", 
  "url": "astraladventure.com",
  "genre": "SHMUP, Plataforma",
  "publisher": {
    "@type": "Organization",
    "name": "Astral Sphere"
  },
  "platform": "Mobile"
};
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(schemaData);
document.head.appendChild(script);