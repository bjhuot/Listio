//
// VARIABLES
//

const li = document.createElement('LI');
const input = document.createElement('INPUT');
const buttonup = document.createElement('BUTTON');
const buttondown = document.createElement('BUTTON');
const buttonremove = document.createElement('BUTTON');
const textarea = document.createElement('TEXTAREA');


//
// FUNCTIONS
//

function inputPair() {
    input.classList.add('itemInput');
    input.setAttribute('placeholder', 'To-Do');
    textarea.classList.add('itemDesc');
    textarea.setAttribute('placeholder', 'Details');
    li.appendChild(input);
    li.appendChild(textarea);
};

function buttonUp() {
    buttonup.classList.add('btnUp');
    buttonup.textContent = 'Up';
    li.appendChild(buttonup);
};

function buttonDown() {
    buttondown.classList.add('btnDown');
    buttondown.textContent = 'Down';
    li.appendChild(buttondown);
};

function buttonRemove() {
    buttonremove.classList.add('btnRemove');
    buttonremove.textContent = 'Remove';
    li.appendChild(buttonremove);
};

//Creates new input pair with up/down/remove triplet appended
function newInput() {
    document.querySelector('ul').appendChild(li);
    inputPair();
    buttonUp();
    buttonDown();
    buttonRemove();
};

//Calls newInput() when 'Save' button is clicked

document.querySelector('.save').addEventListener('click', () => {
    newInput();
});