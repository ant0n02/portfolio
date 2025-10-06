// app.js
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDesc = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.project-tile').forEach(tile => {
  tile.addEventListener('click', () => {
    modalTitle.textContent = tile.dataset.title;
    modalImage.src = tile.dataset.img;
    modalDesc.textContent = tile.dataset.desc;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
