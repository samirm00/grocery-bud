const updateSlide = (slideData) => {
    const img = document.getElementById('slideImg');
    img.src = slideData.src;
    img.alt = slideData.alt;

    const name = document.getElementById('name');
    if (name) {
        name.innerText = slideData.name;
    }

    const number = document.getElementById('slideNumber');
    number.innerText = slideData.id;
};

export default updateSlide;
