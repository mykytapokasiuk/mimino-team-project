
      (() => {
  const refs = {
    openModalBtn3: document.querySelector('[data-modal-open-three]'),
   
    closeModalBtn3: document.querySelector("[data-modal-close-three]"),
    
    modal3: document.querySelector('[book-room-modal-window-price]'),
    
  };
 
  refs.openModalBtn3.addEventListener("click", toggleModal3);
  refs.closeModalBtn3.addEventListener("click", toggleModal3);
 
  
    
  function toggleModal3() {
    refs.modal3.classList.toggle("is-hidden");
    document.body.classList.toggle('modal-open');
  }
})();
