import { createDom, createElement, render } from "./react";

const vdom = createElement('p', {},
    createElement('h1', {}, '리액트 만들기'),
    createElement('ul', {},
        createElement('li', { style: 'color: red' }, '첫번째 아이템'),
        createElement('li', { style: 'color: blue' }, '두번째 아이템'),
        createElement('li', { style: 'color: green' }, '세번째 아이템'),
    ),
);

console.log(vdom);

render(vdom, document.querySelector('#root'));
