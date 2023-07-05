export const data = {
    items: [
        {
            id: 1,
            text: 'buy some vegetables',
        },
        {
            id: 2,
            text: 'buy bread',
        },
        {
            id: 3,
            text: 'buy salad',
        },
        {
            id: 4,
            text: 'buy some chocolate',
        },
        {
            id: 5,
            text: 'buy something else',
        },
    ],
    id: 6,
};

export const dom = {
    submitBtn: document.querySelector('.submit-btn'),
    input: document.getElementById('grocery'),
    error: document.querySelector('.error'),
    clearBtn: document.querySelector('.clear-btn'),
    itemsList: document.querySelector('.grocery-list'),
};
