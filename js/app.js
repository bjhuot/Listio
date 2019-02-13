//
// GLOBAL VARIABLES
//

//
// FUNCTIONS
//

function inputPair(li) {
    let checkbox = document.createElement('INPUT');
    let input = document.createElement('INPUT');
    let textarea = document.createElement('TEXTAREA');
    checkbox.setAttribute('type', 'checkbox');
    input.classList.add('itemInput');
    input.setAttribute('placeholder', 'To-Do');
    textarea.classList.add('itemDesc');
    textarea.setAttribute('placeholder', 'Details');
    li.appendChild(checkbox);
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
};

//Disables Up button at top of list and Down bottom at top of list ((Unless there is only one item))
function disableCheck() {
    for(let i=0; i<document.querySelectorAll('.saved-items li').length; i+= 1) {
        if (i == 0) {
            document.getElementsByClassName('btnUp')[0].setAttribute('disabled','');
        } else if (i == document.querySelectorAll('.saved-items li').length-1) {
            document.getElementsByClassName('btnDown')[i].setAttribute('disabled','');
        }
    }
};

//Enables Up button/Down button once they are moved away from the top/bottom of list
function enableCheck() {
    for(let i=0; i<document.querySelectorAll('.saved-items li').length; i+= 1) {
        if (i == 1 && document.getElementsByClassName('btnUp')[1].disabled == true) {
            document.getElementsByClassName('btnUp')[1].disabled=false;
        } else if (i == document.querySelectorAll('.saved-items li').length-2 && document.getElementsByClassName('btnDown')[i].disabled == true) {
            document.getElementsByClassName('btnDown')[i].disabled=false;
        }
    }
};

//
// SELECTORS
//

//Calls newInput() when 'Save' button is clicked & copies content

document.querySelector('.save').addEventListener('click', () => {
    newInput();
    copyContent();
    document.querySelector('.itemInputPrime').value = '';
    document.querySelector('.itemDescPrime').value = '';
    disableCheck();
    enableCheck();
});

//Moves item up list when Up button is clicked and checks to disable up/down buttons
document.querySelector('.saved-items').addEventListener('click', () => {
    if(event.target.classList == 'btnUp') {
        let liPrev = event.target.parentElement.previousElementSibling;
        let liCur = event.target.parentElement;
        let ul = liCur.parentElement;
        ul.insertBefore(liCur, liPrev);
    };
    disableCheck();
    enableCheck();
});

//Moves item down list when Down button is clicked and checks to disable up/down buttons
document.querySelector('.saved-items').addEventListener('click', () => {
    if(event.target.classList == 'btnDown') {
        let liNext = event.target.parentElement.nextElementSibling.nextElementSibling;
        let liCur = event.target.parentElement;
        let ul = liCur.parentElement;
        ul.insertBefore(liCur, liNext);
    };
    disableCheck();
    enableCheck();
});

//Removes item from list when Remove button is clicked and checks to disable up/down buttons
document.querySelector('.saved-items').addEventListener('click', () => {
    if(event.target.classList == 'btnRemove') {
        let liCur = event.target.parentElement;
        liCur.remove();
    };
    disableCheck();
    enableCheck();
});