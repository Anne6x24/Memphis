const modalKontakt = document.querySelector("#modal-kontakt");
const openModalKontakt = document.querySelector(".open-button-kontakt");
const closeModalKontakt = document.querySelector(".close-button-kontakt");

// kontakt modal
openModalKontakt.addEventListener("click", () => {
  modalKontakt.showModal();
});

closeModalKontakt.addEventListener("click", () => {
  modalKontakt.close();
});
