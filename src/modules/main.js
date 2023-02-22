(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-book-room-modal-window]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal-book-room-modal-window]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle("modal-open")
  }

  window.onclick = function (e) {
    if (e.target == refs.modal) {
      toggleModal();
    }
  };
})();
