const modalEmail = document.querySelector("#modal-email");
const openModalEmail = document.querySelector(".open-button-email");
const closeModalEmail = document.querySelector(".close-button-email");

// email modal
openModalEmail.addEventListener("click", () => {
  modalEmail.showModal();
});

closeModalEmail.addEventListener("click", () => {
  modalEmail.close();
});
