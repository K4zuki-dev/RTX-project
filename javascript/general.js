const objects = document.querySelectorAll('*');


function checkScroll() {
  const triggerBottom = window.innerHeight / 1; // 80% from the top

  objects.forEach(object => {
    const objectTop = object.getBoundingClientRect().top;

    if (objectTop < triggerBottom) {
        object.classList.add('active');
    } else {
        object.classList.remove('active'); // For if you want to hide them again when out of view
    }
  });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});