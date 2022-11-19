import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
	gallery: document.querySelector(".gallery"),
};

refs.gallery.insertAdjacentHTML("beforeend", makeGalleryMarkup(galleryItems));

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

	const modal = basicLightbox.create(
		`
	<img src="${e.target.dataset.source}">
	`,
		{
			onShow: modal => window.addEventListener("keydown", onEscKeyPress),
			onClose: modal => window.removeEventListener("keydown", onEscKeyPress),
		},
	);
	modal.show();

	function onEscKeyPress({ code }) {
		if (code !== "Escape") return;
		modal.close();
	}

	// function onEscKeyPress(e) {
	// 	if (e.code === "Escape") {
	// 		modal.close();
	// 	}
	// }
}
