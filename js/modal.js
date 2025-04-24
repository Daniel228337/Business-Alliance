const images = document.querySelectorAll('.review-image');

const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

images.forEach(image => {
  image.addEventListener('click', function () {
    modal.style.display = 'flex';
    modalImage.src = this.src;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
