const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    header.classList.add('scrolled');
    nav.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    nav.classList.remove('scrolled');
  }
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('slide');
});

const destinations = [
  {
    nama: 'Tanah Lot',
    class: 'lot'
  },
  {
    nama: 'Bukit Asah',
    class: 'asah'
  },
  {
    nama: 'Panglipuran',
    class: 'panglipuran'
  },
  {
    nama: 'Danau Buyan',
    class: 'buyan'
  },
  {
    nama: 'Uluwatu Temple',
    class: 'uluwatu'
  },
  {
    nama: 'Tegenungan',
    class: 'tegenungan'
  },
  {
    nama: 'Pura Besakih',
    class: 'besakih'
  },
  {
    nama: 'Campuhan',
    class: 'campuhan'
  },
  {
    nama: 'GWK',
    class: 'gwk'
  },
  {
    nama: 'Monkey Forest',
    class: 'monkey'
  },
];  

for (let i = 0; i < destinations.length; i++) {
  const conCards = document.querySelector('.container-cards');
  const card = document.createElement('section');
  card.classList.add('card');
  card.classList.add(destinations[i].class);

  conCards.appendChild(card);
  
  const cards = document.querySelectorAll('.card');
  const text = document.createElement('p');
  text.innerHTML = destinations[i].nama;
  for (const c of cards) {
    c.appendChild(text);
  }
}

const overlay = document.querySelector('.overlay');
const description = document.querySelectorAll('.description');
const boxes = document.querySelectorAll('.box');
const closes = document.querySelectorAll('.closeIcon');

const ngaben = document.querySelector('#ngaben');
ngaben.addEventListener('click', () => {
  overlay.classList.add('descPop');
  description[0].classList.add('ngaben');
});

const nyepi = document.querySelector('#nyepi');
nyepi.addEventListener('click', () => {
  overlay.classList.add('descPop');
  description[1].classList.add('nyepi');
});

const ogoh = document.querySelector('#ogoh');
ogoh.addEventListener('click', () => {
  overlay.classList.add('descPop');
  description[2].classList.add('ogoh');
});

const calonarang = document.querySelector('#calonarang');
calonarang.addEventListener('click', () => {
  overlay.classList.add('descPop');
  description[3].classList.add('calonarang');
});

closes.forEach((close) => {
  close.addEventListener('click', () => {
    description.forEach((desc) => {
      desc.classList.remove('ngaben');
      desc.classList.remove('nyepi');
      desc.classList.remove('ogoh');
      desc.classList.remove('calonarang');
      overlay.classList.remove('descPop');
    });
  });
});