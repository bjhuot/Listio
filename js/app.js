//
// VARIABLES AND CONSTANTS
//

var inputName = '<input type="text" name="inputName" placeholder="To-Do Item"></input>';
var inputDesc = '<input type="text" name="inputDesc" placeholder="To-Do Description"></input>';
const btnSave = '<button class="btnSave" type="button" value="save">Save</button>';

// Contains buttons for Up/Down/Delete as a single div/entity:
const btnTriplet = '<div class="btnTriplet"><button class="up" type="button" value="up">Up</button><button class="Down" type="button" value="down">Down</button><button class="delete" type="button" value="delete">Delete</button></div>';

//Page starts with one blank list entry pair, and save button (plus checkbox)
    //add variable for index to reference each item?

//
// FUNCTIONS
//

function postBlank() {
    $('.list ul').append('<li/>');
    $('ul li:last-child').addClass('inputItem');
    $('.list ul').find('li:last-child').html('<div>'+inputName+'<br>'+inputDesc+'</div>'+'<div>'+btnSave+'</div>');
};

function deleteLine() {
    $(this).remove();
};

//
// WORKSPACE
//

$(document).ready(function(){
    postBlank();
});

//Clicking save:
$('ul').click(function(){
    if ( event.target.className == 'btnSave') {
        $('.btnSave').parent().remove();
        $('.inputItem:last-child').append(btnTriplet);
        postBlank();
    }
});
    //Changes button to triplet
        //Check if more than saved pair, generate up/down/delete triplet
        //if no pairs remaining after clicking delete, button must generate new blank pair
    //generates new blank pairs

//Clicking Up moves selected list entry up:

//Clicking Down moves selected list entry down:

//Clicking Delete removes selected list entry:

$('ul').click(function(){
    if(event.target.className == 'delete') {
        $(this).parent().parent().remove();
        //vs
        //deleteLine();
    }
});

//Right side of page has text entry field
//Print button at bottom prints entire list/notepad
