(() => {
  const refs = {
    openModalBtn: document.querySelector(
      '[data-modal-open-book-table-modal-window]'
    ),
    closeModalBtn: document.querySelector(
      '[data-modal-close-book-table-modal-window]'
    ),
    modal: document.querySelector('[data-modal-book-table-modal-window]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  window.onclick = function (e) {
    if (e.target == refs.modal) {
      toggleModal();
    }
  };
})();
