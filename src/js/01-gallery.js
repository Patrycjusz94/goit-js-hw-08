// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const gallery = document.querySelector('.gallery');

const items = [];

console.log(galleryItems);

galleryItems.forEach(element => {
    const link = document.createElement('a');
    link.className = 'gallery__link';
    link.href = element.original;
    const image = document.createElement('img');
    image.className = 'gallery__image';
    image.src = element.preview;
    image.setAttribute('title', element.description);
    image.alt = element.description;
    link.append(image);
    items.push(link)

})

gallery.append(...items)

new SimpleLightbox('gallery a', {
    captionDelay: 250,
})