import data from '../data.js';
import dom from '../dom.js';
import createTodo from '../components/createTodo.js';

const addTodoHandler = (value) => {
    if (dom.submitBtn.innerText === 'Edit') {
        // update UI
        const editedItem = document.querySelector('.selected');
        editedItem.querySelector('.title').innerText = value;
        // Update data
        const id = Number(editedItem.id);
        const itemData = data.items.find((item) => item.id === id);
        itemData.text = value;

        editedItem.classList.remove('selected');
        dom.submitBtn.innerText = 'Submit';
        dom.input.value = '';
    } else {
        // check if value exists
        if (value === '') {
            dom.error.innerText = 'the text can not be empty';
            dom.error.classList.add('error1');
            return;
        }

        const newItem = {
            id: data.id++,
            text: value,
        };
        data.items.push(newItem);

        const newItemDom = createTodo(newItem);
        dom.itemsList.prepend(newItemDom);
        dom.input.value = '';
    }
};

export default addTodoHandler;
