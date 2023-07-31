import loadListener from './event/loadListener.js';
import addTodoListener from './event/addTodoListener.js';
import deleteTodoListener from './event/deleteTodosListener.js';
import removeErrorListener from './event/removeErrorListener.js';

loadListener();
addTodoListener();
deleteTodoListener();
removeErrorListener();
