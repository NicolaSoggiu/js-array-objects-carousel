// FUNCTION TO CREATE CELL
function printCell(images, cell) {
  let html = "";
  images.forEach((el) => {
    html += renderCard(el);
  });
  cell.innerHTML = html;
}

// FUNCTION TO ADD IMG
function renderCard(el) {
  return `<img src="${el.image}">`;
}
