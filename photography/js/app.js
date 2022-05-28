const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const selectedIndex = null;
for (let i = 1; i <= 4; i++) {
    const image = document.createElement('img');
    image.src = 'images/' + i + '.jpg';
    image.alt = 'Image ' + i;
    image.classList.add('galleryImg');
    image.addEventListener('click', () => {
        popup.style.transform = 'translateY(0)';
        selectedImage.src = 'images/' + i + '.jpg';
    });
    gallery.appendChild(image);
};
popup.addEventListener('click', () => {
    popup.style.transform = 'translateY(-100%)';
    selectedImage.src = '';
    selectedImage.alt = '';
})