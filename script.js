window.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('darkModeToggle');
  const hero = document.getElementById('hero');
  const heroContent = document.querySelector('.hero-content');

  // Enable dark mode by default
  document.body.classList.add('bg-black', 'text-white');
  hero.classList.add('hero-dark');
  heroContent.classList.add('text-white');
  heroContent.classList.remove('text-dark');
  toggle.checked = true;

  toggle.addEventListener('change', function () {
    if (this.checked) {
      // DARK MODE
      document.body.classList.add('bg-black', 'text-white');
      document.body.classList.remove('bg-light', 'text-dark');
      hero.classList.add('hero-dark');
      hero.classList.remove('hero-light');
      heroContent.classList.add('text-white');
      heroContent.classList.remove('text-dark');
    } else {
      // LIGHT MODE
      document.body.classList.add('bg-light', 'text-dark');
      document.body.classList.remove('bg-black', 'text-white');
      hero.classList.add('hero-light');
      hero.classList.remove('hero-dark');
      heroContent.classList.add('text-dark');
      heroContent.classList.remove('text-white');
    }
  });
});

// Scroll to top button functionality

const btn = document.getElementById('scrollToTop');
window.addEventListener('scroll', function () {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  
  if (scrollY > 400) {
  btn.classList.remove("d-none");
  btn.classList.add("d-block");    // or d-inline-block
} else {
  btn.classList.add("d-none");
  btn.classList.remove("d-block");
}

});
btn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


const mainLinks = document.querySelectorAll('.navbar-nav li a');
const indicator = document.querySelector('.indicator');

function moveIndicator(target) {
  const parentRect = target.closest('.navbar-nav').getBoundingClientRect();
  const rect = target.getBoundingClientRect();

  const ulMarginLeft = parseFloat(getComputedStyle(target.closest('.navbar-nav')).marginLeft);

  indicator.style.width = `${rect.width}px`;
  indicator.style.left = `${rect.left - parentRect.left + ulMarginLeft}px`;
}

mainLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    mainLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    moveIndicator(link);

    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) moveIndicator(activeLink);
  }, 100);
});

window.addEventListener('resize', () => {
  const activeLink = document.querySelector('.nav-link.active');
  if (activeLink) moveIndicator(activeLink);
});

const buttons = document.querySelectorAll('.btn-outline-light');
const cols = document.querySelectorAll('.col-md-4');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter').toLowerCase();

    cols.forEach(col => {
      const card = col.querySelector('.card');
      let categories = [];
      if (card) {
        categories = card.getAttribute('data-category')?.toLowerCase().split(' ') || [];
      }

      if (filter === 'all' || categories.includes(filter)) {
        col.classList.remove('d-none');
      } else {
        col.classList.add('d-none');
      }
    });
  });
});





