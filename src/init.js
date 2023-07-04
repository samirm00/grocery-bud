import data from './data.js';
import createSlide from './components/createSlide.js';
import './listeners/showNextListener.js';
import './listeners/showPreviousListener.js';

// by default show the first slide
const sliders = document.querySelector('.slider-container');
const firstSlideData = data.slides[data.counter];
const slideDom = createSlide(firstSlideData);
sliders.append(slideDom);
