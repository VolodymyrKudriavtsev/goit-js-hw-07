import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
    gallery: document.querySelector('.gallery'),
};

const makeGalleryItemMarkup = ({ original, preview, description }) =>
	`<div class="gallery__item">
        <a class="gallery__link" href='${original}'>
            <img
                class="gallery__image"
                src='${preview}'
                data-source='${original}'
                alt='${description}'
            />
        </a>
    </div>`;

const galleryMarkup = galleryItems.map(galleryItem => makeGalleryItemMarkup(galleryItem));

console.log(galleryMarkup);

refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup.join(""));

// {/* <div class="gallery__item">
// 	<a class="gallery__link" href="large-image.jpg">
// 		<img class="gallery__image" src="small-image.jpg" data-source="large-image.jpg" alt="Image description" />
// 	</a>
// </div>; */}
