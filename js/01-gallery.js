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

let modal = basicLightbox.create(``);

const onEscKeyPress = e => {
	if (e.code !== "Escape") return;
	modal.close();
	window.removeEventListener("keydown", onEscKeyPress);
};

const onOpenModal = e => {
	if (e.target === e.currentTarget) return;
	e.preventDefault();

	modal = basicLightbox.create(
		`
	<img src="${e.target.dataset.source}">
	`,
	);
	modal.show();
	window.addEventListener("keydown", onEscKeyPress);
};

refs.gallery.addEventListener("click", onOpenModal);
