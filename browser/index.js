function $slider(el) {
    const slider = $id(el);
    const buttonLeft = $id('button-left');
    const buttonRight = $id('button-right');
    const sliderElements = $selectorAll('.slider__element');
    const rootStyles = $root.style;
    let slideCounter = 0;
    let isInTransition = false;
    const DIRECTION = {
        RIGHT: 'RIGHT',
        LEFT: 'LEFT'
    };
    const getTransformValue = () => Number(rootStyles.getPropertyValue('--slide-transform').replace('px', ''));
    const reorderSlide = () => {
        const transformValue = getTransformValue();
        rootStyles.setProperty('--transition', 'none');
        if (slideCounter === sliderElements.length - 1) {
            slider.appendChild(slider.firstElementChild);
            rootStyles.setProperty('--slide-transform', `${transformValue + sliderElements[slideCounter].scrollWidth}px`);
            slideCounter--;
        }
        else if (slideCounter === 0) {
            slider.prepend(slider.lastElementChild);
            rootStyles.setProperty('--slide-transform', `${transformValue - sliderElements[slideCounter].scrollWidth}px`);
            slideCounter++;
        }
        isInTransition = false;
    };
    const moveSlide = (direction) => {
        if (isInTransition)
            return;
        const transformValue = getTransformValue();
        rootStyles.setProperty('--transition', 'transform 1s');
        isInTransition = true;
        if (direction === DIRECTION.LEFT) {
            rootStyles.setProperty('--slide-transform', `${transformValue + sliderElements[slideCounter].scrollWidth}px`);
            slideCounter--;
        }
        else if (direction === DIRECTION.RIGHT) {
            rootStyles.setProperty('--slide-transform', `${transformValue - sliderElements[slideCounter].scrollWidth}px`);
            slideCounter++;
        }
    };
    buttonRight.addEventListener('click', () => moveSlide(DIRECTION.RIGHT));
    buttonLeft.addEventListener('click', () => moveSlide(DIRECTION.LEFT));
    slider.addEventListener('transitionend', reorderSlide);
    reorderSlide();
}
