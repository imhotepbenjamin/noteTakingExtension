export function pastNotesModalFunctions() {
    const newNoteButton = document.querySelector(".new-note");
    const notesTextArea = document.querySelector("#notes-text");
    const pastNotesBoxesContainer = document.querySelector('.past-notes-boxes');
    const pastNotesPreviewBox = document.querySelector('.past-notes-preview-box');
    const pastNotesPreviewOpen = document.querySelector('.past-open');
    const pastNotesPreviewDelete = document.querySelector('.past-notes-preview-delete');
    const pastNotesPreviewFriction = document.querySelector('.past-notes-preview-friction');
    const askIfSureContainer = document.querySelector('.ask-if-sure-container');
    const askIfSure = document.querySelector('.ask-if-sure');
    const deleteFrictionButtons = document.querySelectorAll('.delete-friction-button');
    const deleteFrictionYes = document.querySelector('.yes');
    const deleteFrictionNo = document.querySelector('.no');
    const pastNotesSpaceContainer = document.querySelector('#past-notes-space-container');
    const pastNotesTrashContainer = document.querySelector('.past-notes-trash-container');
    const pastNotesTrashButton = document.querySelector('.past-notes-trash-button');
    const pastNotesTrash = document.querySelector('.past-notes-trash');
    const pastNotesTrashBoxes = document.querySelectorAll('.past-notes-trash-box');

    // past-notes-preview-delete functionality
  pastNotesPreviewDelete.addEventListener('click', function () {
    pastNotesPreviewFriction.style.display = 'flex';
  });

  deleteFrictionNo.addEventListener('click', function () {
    pastNotesPreviewFriction.style.display = 'none';
  });

  newNoteButton.addEventListener('click', function () {
    const notesTextValue = notesTextArea.value.trim();
    if (notesTextValue !== '') {
      createNewPastNotesBox(notesTextValue);
    }
  });

  pastNotesPreviewOpen.addEventListener('click', function () {
    notesTextArea.value = pastNotesPreviewBox.textContent;
  });

  deleteFrictionYes.addEventListener('click', function () {
    deleteSelectedPastNotesBox();
  });
  function togglePastNotesTrash() {
    if (pastNotesTrash.style.display === 'none') {
      pastNotesTrash.style.display = 'flex';
      pastNotesBoxesContainer.style.overflowY = 'hidden';
    } else {
      pastNotesTrash.style.display = 'none';
      pastNotesBoxesContainer.style.overflowY = 'auto';
    }
  }

  pastNotesTrashButton.addEventListener('click', function () {
    togglePastNotesTrash();
  });

}