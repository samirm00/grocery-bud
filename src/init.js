import { data, dom } from './data.js';
import createItem from './components/createItem.js';

// default show some items
data.items.forEach((itemData) => {
    const item = createItem(itemData);
    dom.itemsList.append(item);
});

import './listeners/addItemListener.js';
import './listeners/submitItemListener.js';
import './listeners/deleteItemsListener.js';
