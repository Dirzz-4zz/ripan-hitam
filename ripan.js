// script.js
const description = document.getElementById("description");

function changeMood() {
  const moods = [
    "Ripan tampak tenang seperti malam yang hening.",
    "Ripan marah, matanya bersinar tajam.",
    "Ripan tersenyum, meskipun dalam kegelapan.",
    "Ripan sedang merenung tentang masa lalu kelamnya."
  ];
  const randomIndex = Math.floor(Math.random() * moods.length);
  description.textContent = moods[randomIndex];
}