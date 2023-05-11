const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal()
{
    const endteredValue = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = endteredValue;
    listEl.appendChild(listItemEl);
    inputEl.value = '';
}
buttonEl.addEventListener('click', addGoal);