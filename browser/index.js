function $slider(el) {
  let slideIndex = 1;

  // all elements
  const slides = $selectorAll(el);
  const dots = $selectorAll('.dot');

  const currentSlide = slide => showSlider((slideIndex = slide));

  const showSlider = n => {
    if (n > slides.length) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(slide => (slide.style.display = 'none'));

    dots.forEach((dot, i) => {
      dots[i].classList.remove('active');
      dot.addEventListener('click', () => currentSlide(i + 1))
    });

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
  };

  $selector('.prev').addEventListener('click', () => {
    showSlider((slideIndex -= 1))
  });
  $selector('.next').addEventListener('click', () => {
    showSlider((slideIndex += 1))
  });

  return { showSlider };
}
