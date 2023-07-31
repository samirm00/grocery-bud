import loadListener from './listeners/loadListener.js';
import addTodoListener from './listeners/addTodoListener.js';
import deleteTodoListener from './listeners/deleteTodosListener.js';
import removeErrorListener from './listeners/removeErrorListener.js';

loadListener();
addTodoListener();
deleteTodoListener();
removeErrorListener();
