import loadListener from './listeners/loadListener.js';
import addTodoListener from './listeners/addTodoListener.js';
import deleteTodosListener from './listeners/deleteTodosListener.js';
import removeErrorListener from './listeners/removeErrorListener.js';

loadListener();
addTodoListener();
deleteTodosListener();
removeErrorListener();
