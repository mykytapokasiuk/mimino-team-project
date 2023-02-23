(() => { 
  const refs = { 
    openModalBtn1: document.querySelector('[data-modal-open-room]'), 
    openModalBtn2: document.querySelector('[data-modal-open-table]'),
   
    closeModalBtn1: document.querySelector("[data-modal-close-one]"),
    closeModalBtn2: document.querySelector("[data-modal-close-two]"),

    modal1: document.querySelector('[book-room-modal-window]'), 
    modal2: document.querySelector('[book-table-modal-window]'),
    
  }; 
 
  refs.openModalBtn1.addEventListener("click", toggleModal1); 
  refs.closeModalBtn1.addEventListener("click", toggleModal1); 
 
  refs.openModalBtn2.addEventListener("click", toggleModal2);
  refs.closeModalBtn2.addEventListener("click", toggleModal2);

  function toggleModal1() { 
    refs.modal1.classList.toggle("is-hidden"); 
    document.body.classList.toggle('modal-open'); 
  } 
 
  function toggleModal2() { 
    refs.modal2.classList.toggle("is-hidden"); 
    document.body.classList.toggle('modal-open'); 
  } 
})();