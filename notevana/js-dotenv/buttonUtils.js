export function buttonHoverEffect() {
  const allButtons = document.querySelectorAll('.button');

  for (let button of allButtons) {
    button.addEventListener('mouseover', () => {
      button.style.background = '#0000006b';
    });
    button.addEventListener('mouseout', () => {
      button.style.background = '#0000009f';
    });
  }
}