//
// VARIABLES
//

//
// FUNCTIONS
//

function inputPair(li) {
    let input = document.createElement('INPUT');
    let textarea = document.createElement('TEXTAREA');
    input.classList.add('itemInput');
    input.setAttribute('placeholder', 'To-Do');
    textarea.classList.add('itemDesc');
    textarea.setAttribute('placeholder', 'Details');
    li.appendChild(input);
    li.appendChild(textarea);
};

function buttonUp(li) {
    let buttonup = document.createElement('BUTTON');
    buttonup.classList.add('btnUp');
    buttonup.textContent = 'Up';
    li.appendChild(buttonup);
};

function buttonDown(li) {
    let buttondown = document.createElement('BUTTON');
    buttondown.classList.add('btnDown');
    buttondown.textContent = 'Down';
    li.appendChild(buttondown);
};

function buttonRemove(li) {
    let buttonremove = document.createElement('BUTTON');
    buttonremove.classList.add('btnRemove');
    buttonremove.textContent = 'Remove';
    li.appendChild(buttonremove);
};

//Creates new input pair with up/down/remove triplet appended
function newInput() {
    let li = document.createElement('LI');
    document.querySelector('.saved-items').appendChild(li);
    inputPair(li);
    buttonUp(li);
    buttonDown(li);
    buttonRemove(li);
};

//Function to copy content

function copyContent() {
    let copyName = document.querySelector('.itemInputPrime');
    let copyDesc = document.querySelector('.itemDescPrime');
    let destName = document.querySelector('ul.saved-items li:last-child .itemInput');
    let destDesc = document.querySelector('ul.saved-items li:last-child .itemDesc');
    destName.value = copyName.value;
    destDesc.value = copyDesc.value;
}

//Calls newInput() when 'Save' button is clicked & copies content

document.querySelector('.save').addEventListener('click', () => {
    newInput();
    copyContent();
    document.querySelector('.itemInputPrime').value = '';
    document.querySelector('.itemDescPrime').value = '';
});