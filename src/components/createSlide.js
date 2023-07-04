const createSlide = (slideData) => {
    // create slide
    const slide = document.createElement('div');
    slide.className.padEnd('slide');

    // create img
    const img = document.createElement('img');
    img.src = slideData.src;
    img.alt = slideData.alt;
    img.id = 'slideImg';
    img.classList.add(slideData.imgClass);

    // name
    let name = null;
    if (slideData.name) {
        name = document.createElement('h4');
        name.id = 'name';
        name.innerText = slideData.name;
    }
    // create number
    const slideNumber = document.createElement('h2');
    slideNumber.id = 'slideNumber';
    slideNumber.innerText = slideData.id;

    // append
    slide.appendChild(img);
    if (name) {
        slide.append(name);
    }

    slide.append(slideNumber);

    return slide;
};

export default createSlide;
