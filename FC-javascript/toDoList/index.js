const addButtonEl = document.querySelector('#add-button');
const inputEl = document.querySelector('#todo-input');
const listEl = document.querySelector('.todo-list');

addButtonEl.addEventListener('click', e => {
    const itemEl = document.createElement('div');
    itemEl.textContent = inputEl.value;

    listEl.appendChild(itemEl);
    inputEl.value = '';

    itemEl.addEventListener('click', e => {
        if (itemEl.classList.contains('complete')) {
            itemEl.classList.remove('complete');
        } else {
            itemEl.classList.add('complete');
        }
    });

    const removeBtnEl = document.createElement('div');
    itemEl.appendChild(removeBtnEl);
    removeBtnEl.textContent = 'X'

    removeBtnEl.addEventListener('click', e => {
        listEl.removeChild(itemEl);
    })
})
