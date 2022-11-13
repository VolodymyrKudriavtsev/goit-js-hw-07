import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
	gallery: document.querySelector(".gallery"),
};

refs.gallery.insertAdjacentHTML("beforeend", makeGalleryMarkup(galleryItems));

let modal = basicLightbox.create(``);

refs.gallery.addEventListener("click", onOpenModal);

function makeGalleryMarkup(items) {
	return items
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
}

function onOpenModal(e) {
	if (e.target === e.currentTarget) return;
	e.preventDefault();

	modal = basicLightbox.create(
		`
	<img src="${e.target.dataset.source}">
	`,
	);
	modal.show();
	window.addEventListener("keydown", onEscKeyPress);
}

function onEscKeyPress(e) {
	if (e.code !== "Escape") return;
	modal.close();
	window.removeEventListener("keydown", onEscKeyPress);
}
