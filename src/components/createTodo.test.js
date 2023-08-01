/**
 * @jest-environment jsdom
 */

import createTodo from './createTodo.js';

describe('Test todos component', () => {
    describe('Test todo component', () => {
        const actual = createTodo({
            id: 1,
            text: 'call Jack',
        });

        const firstChild = actual.children[0];
        const secondChild = actual.children[1];

        test('expect nodeName -> DIV', () => {
            expect(actual.nodeName).toEqual('DIV');
        });

        test('expect children count -> 2', () => {
            expect(actual.childElementCount).toEqual(2);
        });

        test('expect className -> todo-item', () => {
            expect(actual.className).toEqual('todo-item');
        });

        test('expect id -> 1', () => {
            expect(actual.id).toEqual('1');
        });

        test('expect firstChild nodeName ->  p', () => {
            expect(firstChild.nodeName).toEqual('P');
        });

        test('expect firstChild innerTex ->  "call Jack"', () => {
            expect(firstChild.innerText).toEqual('call Jack');
        });

        test('expect firstChild className ->  title', () => {
            expect(firstChild.className).toEqual('title');
        });

        test('expect secondChild ->  div', () => {
            expect(secondChild.nodeName).toEqual('DIV');
        });

        test('expect secondChild className ->  btn-container', () => {
            expect(secondChild.className).toEqual('btn-container');
        });
    });
});
