export const data = {
    items: [
        {
            id: 1,
            text: 'go to doctor',
        },
        {
            id: 2,
            text: 'feed the cat',
        },
        {
            id: 3,
            text: 'call mom',
        },
    ],
    id: 4,
};

export const dom = {
    submitBtn: document.querySelector('.submit-btn'),
    input: document.getElementById('grocery'),
    error: document.querySelector('.error'),
    clearBtn: document.querySelector('.clear-btn'),
    itemsList: document.querySelector('.grocery-list'),
};
