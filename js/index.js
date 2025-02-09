document.addEventListener('scroll', () => {
    const images = document.querySelectorAll('.nm1');
    images.forEach((img, index) => {
        const imgTop = img.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;

        if (imgTop < triggerPoint) {
            img.classList.add('visible');
        } else {
            img.classList.remove('visible');
        }
    });
});