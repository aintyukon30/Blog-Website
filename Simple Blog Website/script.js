const images = [
  // Punk
  'img/Green Day.jpeg',
  'img/Blink-182.jpeg',
  'img/Sum 41.jpeg',

  // Nu-Metal
  'img/Linkin Park.jpeg',
  'img/Korn.jpeg',
  'img/Limp Bizkit.jpeg',

  // Heavy Metal
  'img/Metallica.jpeg',
  'img/Avenged Sevenfold.jpeg',
  'img/cannibal corpse.jpeg',

  // Grunge
  'img/Nirvana.jpeg',
  'img/Alice in Chains.jpeg',
  'img/NIN.jpeg'
];

const cards = document.querySelectorAll('.music-card');

cards.forEach((card, index) => {
  if (images[index]) {
    card.style.backgroundImage = `
      linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
      url("${images[index]}")
    `;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';
  }
});


// NAV BUTTON SCROLL
document.querySelectorAll('.genre-btn').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    const section = document.getElementById(targetId);

    if (!section) return;

    const navHeight = document.querySelector('nav').offsetHeight;

    const y =
      section.getBoundingClientRect().top +
      window.scrollY -
      navHeight;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  });
});
// READ MORE BUTTON SCROLL
const readMoreBtn = document.querySelector('.read-more-btn');

readMoreBtn.addEventListener('click', () => {
  const aboutSection = document.getElementById('about');
  const navHeight = document.querySelector('nav').offsetHeight;

  const y =
    aboutSection.getBoundingClientRect().top +
    window.scrollY -
    navHeight;

  window.scrollTo({
    top: y,
    behavior: 'smooth'
  });
});

