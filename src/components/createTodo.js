import editTodoHandler from '../handlers/editTodoHandler.js';
import deleteTodoHandler from '../handlers/deleteTodoHandler.js';

function createTodo(itemData) {
    // create div
    const container = document.createElement('div');
    container.classList.add('grocery-item');
    container.id = itemData.id;

    // create title
    const title = document.createElement('p');
    title.innerText = itemData.text;
    title.classList.add('title');

    // create buttons container
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    // create edit button
    const btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-btn');
    btnEdit.innerHTML = '<i class="fas fa-edit"></i>';

    // add event
    btnEdit.addEventListener('click', () => {
        container.classList.add('selected');
        editTodoHandler(itemData.id);
    });
    // create delete button
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('delete-btn');
    btnDelete.innerHTML = '<i class="fas fa-trash"></i>';
    // add event
    btnDelete.addEventListener('click', () => {
        deleteTodoHandler(itemData.id);
    });

    // append
    btnContainer.append(btnEdit, btnDelete);
    container.append(title, btnContainer);

    return container;
}

export default createTodo;
