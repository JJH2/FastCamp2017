const addButtonEl = document.querySelector('#add-button');
const inputEl = document.querySelector('#todo-input');
const listEl = document.querySelector('.todo-list');

addButtonEl.addEventListener('click', e => {
    const itemEl = document.createElement('div');
    itemEl.textContent = inputEl.value;
    listEl.appendChild(itemEl);
    inputEl.value = '';
})