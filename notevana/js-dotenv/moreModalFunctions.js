export function moreModalFunctions() {
    const notesContainer = document.querySelector('#notes-container');
    const modalSelections = document.querySelectorAll('.modal-selection');
    const themesButton = document.querySelector('#themes-button');
    const themeBoxes = document.querySelectorAll('.theme-box');
    const moreThemesContainer = document.querySelector('#more-themes-container');
    const SettingsButton = document.querySelector('#settings-button');
    const moreSettingsContainer = document.querySelector('#more-settings-container');
    const helpButton = document.querySelector('#help-button');
    const moreHelpContainer = document.querySelector('#more-help-container');
    const aboutMeButton = document.querySelector('#about-me-button');
    const moreAboutMeContainer = document.querySelector('#more-about-me-container');
    const helpSections = document.querySelectorAll('.help-section');
    const pastNotesSpaceContainer = document.querySelector('#past-notes-space-container');

  // MODAL SELECTIONS
  // Select all elements with the class 'modalSelections' and iterate over each one
  for (let selection of modalSelections) {
    // Add a click event listener to each 'modalSelections' element
    selection.addEventListener('click', () => {
      // 1. Remove the 'active-selection' class from all 'modalSelections' elements
      for (let allSelections of modalSelections) {
        allSelections.classList.remove('active-selection');
      };
      // 2. Add the 'active-selection' class to the clicked 'modalSelections' element
      selection.classList.add('active-selection');
    });
  };

  themesButton.addEventListener('click', () => toggleContainers(moreThemesContainer));
  SettingsButton.addEventListener('click', () => toggleContainers(moreSettingsContainer));
  helpButton.addEventListener('click', () => toggleContainers(moreHelpContainer));
  aboutMeButton.addEventListener('click', () => toggleContainers(moreAboutMeContainer));

  // makes corresponding section of moreModal show its button is clicked
  function toggleContainers(activeContainer) {
    const containers = [moreThemesContainer, moreSettingsContainer, moreHelpContainer, moreAboutMeContainer];
    // if container is active, show it, if not, hide it
    for (let container of containers) {
        container.style.display = container === activeContainer ? 'flex' : 'none';
      }
    }
  
  // HELP SECTION ACCORDIAN
  // makes help section accordian open and close
  // selects all help section elements
  helpSections.forEach(section => {
    // selects help-section-label element
    const label = section.querySelector('.help-section-label');
    // selects help-section-content element
    const content = section.querySelector('.help-section-content');
    // adds click event listener for specific section
    label.addEventListener('click', () => {
      // when clicked,if content is flex, close it, if not, open it
      if (content.style.display === 'flex') {
        content.style.display = 'none';
      }
      else {
        content.style.display = 'flex';
      }
    });
  });
// THEME CHANGES
// selected theme-box changes notes-container theme
for (let theme of themeBoxes) {
  theme.addEventListener('click', () => {
    // selects the theme which is the second class of the clicked theme box
    const selectedThemeClass = theme.classList[1];
    // removes all classes from the notes-container and past-notes-space. The only classes are for the theme
    notesContainer.classList = [];
    pastNotesSpaceContainer.classList = [];
    // add the clicked themebox to the notes container and past notes space
    notesContainer.classList.add(selectedThemeClass);
    pastNotesSpaceContainer.classList.add(selectedThemeClass);
  });
};
}