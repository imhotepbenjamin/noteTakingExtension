export function modalVisibilityFunctions() {
  const pastNotesButton = document.querySelector('.past-notes');
  const moreButton = document.querySelector('#more-notes');
  const moreModalContentCenter = document.querySelector('.more-modal-content-center');
  const pastNotesModalContentCenter = document.querySelector('.past-notes-modal-content-center');
  const modal = document.querySelector('#modal');
  const exitModal = document.querySelector('.modal-exit, .exit-container');

    // Function to show past notes modal
    function showPastNotesModal() {
      modal.style.display = 'flex';
      pastNotesModalContentCenter.style.display = 'flex';
    }

    pastNotesButton.addEventListener('click', showPastNotesModal);
  
    // Function to show more modal
    function showMoreModal() {
      modal.style.display = 'flex';
      moreModalContentCenter.style.display = 'flex';
    }

    moreButton.addEventListener('click', showMoreModal);
  
    // Function to hide modal
    function hideModal() {
      modal.style.display = 'none';
      moreModalContentCenter.style.display = 'none';
      pastNotesModalContentCenter.style.display = 'none';
    }

    exitModal.addEventListener('click', hideModal);
  }
  