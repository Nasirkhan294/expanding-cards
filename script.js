const slats = document.querySelectorAll('.slat');

slats.forEach(slat => {
    slat.addEventListener('click', () => {
        removeActiveClasses();
        slat.classList.add('active');
    })
});

const removeActiveClasses = () => {
    slats.forEach(slat => {
        slat.classList.remove('active');
    })
}