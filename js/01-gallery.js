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
console.log(makeGalleryMarkup(galleryItems));

// makeGalleryMarkup(galleryItems)

// const onGallertItemClick = e => {
// 	console.log("click");
// };

// refs.gallery.addEventListener("click", onGallertItemClick);
