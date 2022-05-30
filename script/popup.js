const modalReview = document.querySelector("#modal-singleview");
const openModalReview = document.querySelector(".open-button-singleview");
const closeModalReview = document.querySelector(".close-button-singleview");

const modalEmail = document.querySelector("#modal-email");
const openModalEmail = document.querySelector(".open-button-email");
const closeModalEmail = document.querySelector(".close-button-email");

// singleview modal
openModalReview.addEventListener("click", () => {
  modalReview.showModal();
});

closeModalReview.addEventListener("click", () => {
  modalReview.close();
});

// email modal
openModalEmail.addEventListener("click", () => {
  modalEmail.showModal();
});

closeModalEmail.addEventListener("click", () => {
  modalEmail.close();
});
