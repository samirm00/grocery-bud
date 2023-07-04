import data from '../data.js';
import updateSlide from '../components/updateSlide.js';

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const showNextHandler = () => {
    // show previous button
    prevBtn.classList.remove('hidden');
    data.counter++;
    if (data.counter > data.slides.length - 1) {
        nextBtn.classList.add('hidden');
        return;
    }

    if (data.counter === data.slides.length - 1) {
        nextBtn.classList.add('hidden');
    }
    const nextSlideData = data.slides[data.counter];
    updateSlide(nextSlideData);
};

export default showNextHandler;
