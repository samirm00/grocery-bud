/**
 * @jest-environment jsdom
 */

import createTodo from './createTodo.js';

describe('Test todos component', () => {
    describe('Test todo component', () => {
        const actual = createTodo({
            id: 1,
            text: 'buy some vegetables',
        });

        const firstChild = actual.children[0];
        const secondChild = actual.children[1];

        test('expect nodeName -> DIV', () => {
            expect(actual.nodeName).toEqual('DIV');
        });

        test('expect children count -> 2', () => {
            expect(actual.childElementCount).toEqual(2);
        });

        test('expect className -> grocery-item', () => {
            expect(actual.className).toEqual('grocery-item');
        });

        test('expect id -> 1', () => {
            expect(actual.id).toEqual('1');
        });

        test('expect firstChild ->  p', () => {
            expect(firstChild.nodeName).toEqual('P');
        });

        test('expect firstChild innerTex ->  "buy some vegetables"', () => {
            expect(firstChild.innerText).toEqual('buy some vegetables');
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
