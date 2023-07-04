export const data = {
    items: [
        {
            id: 1,
            text: 'buy some vegtables',
        },
        {
            id: 2,
            text: 'buy a bread',
        },
        {
            id: 3,
            text: 'buy a salad',
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
