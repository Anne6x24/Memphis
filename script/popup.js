const modalReview = document.querySelector("#modal-singleview");
const openModalReview = document.querySelector(".open-button-singleview");
const closeModalReview = document.querySelector(".close-button-singleview");

// singleview modal
openModalReview.addEventListener("click", () => {
  modalReview.showModal();
});

closeModalReview.addEventListener("click", () => {
  modalReview.close();
});
