// FUNCTIONS

// FUNCTION TO SCROLL DOWN
btnNext.addEventListener("click", function () {
  // DALL'IMMAGINE ATTIVA TOLGO LA CLASSE ACTIVE
  listHighlighted[activeIndex].classList.remove("active");
  listThumbs[activeIndex].classList.remove("active");
  titleGame[activeIndex].classList.remove("h3-active");
  textInfo[activeIndex].classList.remove("p-active");
  // SETTIAMO IL NUOVO VALORE DI ACTIVE INDEX
  activeIndex++;
  if (activeIndex >= listHighlighted.length) {
    activeIndex = 0;
  }
  // ALLA NUOVA IMMAGINE ATTIVA AGGIUNGIAMO LA CLASSE ACTIVE
  listHighlighted[activeIndex].classList.add("active");
  listThumbs[activeIndex].classList.add("active");
  titleGame[activeIndex].classList.add("h3-active");
  textInfo[activeIndex].classList.add("p-active");
});

// FUNCTION TO SCROOL UP
btnPrev.addEventListener("click", function () {
  // DALL'IMMAGINE ATTIVA TOLGO LA CLASSE ACTIVE
  listHighlighted[activeIndex].classList.remove("active");
  listThumbs[activeIndex].classList.remove("active");
  titleGame[activeIndex].classList.remove("h3-active");
  textInfo[activeIndex].classList.remove("p-active");
  // SETTIAMO IL NUOVO VALORE DI ACTIVE INDEX
  activeIndex--;
  if (activeIndex < 0) {
    activeIndex = listHighlighted.length - 1;
  }
  // ALLA NUOVA IMMAGINE ATTIVA AGGIUNGIAMO LA CLASSE ACTIVE
  listHighlighted[activeIndex].classList.add("active");
  listThumbs[activeIndex].classList.add("active");
  titleGame[activeIndex].classList.add("h3-active");
  textInfo[activeIndex].classList.add("p-active");
});

// FUNCTION TO ADD EVENTLISTENER TO THE MINIATURES
for (let i = 0; i < listThumbs.length; i++) {
  listThumbs[i].addEventListener("click", function () {
    console.log("clicclata la miniatura in posizione" + i);
    listHighlighted[activeIndex].classList.remove("active");
    listThumbs[activeIndex].classList.remove("active");
    activeIndex = i;
    listHighlighted[activeIndex].classList.add("active");
    listThumbs[activeIndex].classList.add("active");
  });
}
