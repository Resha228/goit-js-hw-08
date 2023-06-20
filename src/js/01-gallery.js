// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryList = document.querySelector('.gallery');
const li = document.querySelectorAll('li')
createImageItems();

function createImageItems() {
  const importImageOnScreen = createImageElements(galleryItems);
  galleryList.innerHTML = importImageOnScreen.join('');
}

function createImageElements(items) {
  return items.map(item => `<a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/></a>`);
}
let gallery = new SimpleLightbox('.gallery a');
// Change code below this line

console.log(galleryItems);
