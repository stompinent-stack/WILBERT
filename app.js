// Simple confetti effect
const confettiColors = [
  '#ffd700', '#ffe066', '#ffb6d5', '#6ec6ff', '#fff2b2', '#e75480', '#f9e79f'
];

function createConfettiPiece() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti-piece';
  const size = Math.random() * 10 + 8;
  confetti.style.width = `${size}px`;
  confetti.style.height = `${size * 0.4}px`;
  confetti.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
  confetti.style.position = 'absolute';
  confetti.style.top = `${Math.random() * 100}%`;
  confetti.style.left = `${Math.random() * 100}%`;
  confetti.style.opacity = Math.random() * 0.7 + 0.3;
  confetti.style.borderRadius = `${Math.random() * 8 + 2}px`;
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
  confetti.style.zIndex = 11;
  confetti.style.transition = 'top 2.5s linear, left 2.5s linear, opacity 2.5s linear';
  return confetti;
}

function launchConfetti() {
  const confettiContainer = document.querySelector('.confetti');
  confettiContainer.innerHTML = '';
  for (let i = 0; i < 60; i++) {
    const piece = createConfettiPiece();
    confettiContainer.appendChild(piece);
    setTimeout(() => {
      piece.style.top = `${100 + Math.random() * 20}%`;
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.opacity = 0;
    }, 100);
    setTimeout(() => {
      if (piece.parentNode) piece.parentNode.removeChild(piece);
    }, 2700);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  launchConfetti();
  setInterval(launchConfetti, 3500);
});