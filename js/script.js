// ADD ARREY OF OBJECT
const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

const containerHighlighted = document.querySelector(".highlighted");
const containerThumbs = document.querySelector(".thumbs");

for (let i = 0; i < images.length; i++) {
  containerHighlighted.innerHTML += `<img src="${
    images[i].image
  }" alt="" class="${i == 0 ? "active" : ""} ">
  <h3> Marvel's Spider-Man Miles Morales</h3>
  <p>Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man</p>`;
  containerThumbs.innerHTML += `<img src="${images[i].image}" alt="" class="${
    i == 0 ? "active" : ""
  } ">`;
}

// SELECT IMG IN HTML
const listHighlighted = document.querySelectorAll(".highlighted img");

// SELECT THE MINIATURES
const listThumbs = document.querySelectorAll(".thumbs img");

// SELECT THE BUTTON
const btnPrev = document.querySelector(".btn-up");
const btnNext = document.querySelector(".btn-down");

let activeIndex = 0;
