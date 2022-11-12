import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
	gallery: document.querySelector(".gallery"),
};

const makeGalleryMarkup = items =>
	items
		.map(({ original, preview, description }) => {
			return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        data-source="${original}"
                        src="${preview}"
                        alt="${description}"
                        class="gallery__image"
                    />
                </a>
            </div>
            `;
		})
		.join("");
const galleryMarkup = makeGalleryMarkup(galleryItems);
refs.gallery.insertAdjacentHTML("beforeend", galleryMarkup);

const onGallertItemClick = e => {
	if (e.target === e.currentTarget) return;
	e.preventDefault();
	console.log(e.target.dataset.source);
	const instance = basicLightbox.create(`
<img width="1400" height="900" src="${e.target.dataset.source}">
`);

	instance.show();
};

refs.gallery.addEventListener("click", onGallertItemClick);
