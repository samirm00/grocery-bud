import data from '../data.js';
import updateSlide from '../components/updateSlide.js';

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

const showPreviousHandler = () => {
    data.counter--;
    // show next button
    if (nextBtn.classList.contains('hidden')) {
        nextBtn.classList.remove('hidden');
    }
    if (data.counter < 0) {
        prevBtn.classList.add('hidden');
        return;
    }

    const previousSlideData = data.slides[data.counter];
    updateSlide(previousSlideData);
};

export default showPreviousHandler;
