//
// VARIABLES AND CONSTANTS
//

const inputName = '<input type="checkbox" name="inputCheck"><input type="text" name="inputName" placeholder="To-Do Item"></input>';
const inputDesc = '<textarea type="text" name="inputDesc" placeholder="To-Do Description"></textarea>';
const btnSave = '<button class="btnSave" type="button" value="save">Save</button>';

// Contains buttons for Up/Down/Delete as a single div/entity:
const btnTriplet = '<div class="btnTriplet"><button class="up" type="button" value="up">Up</button><button class="down" type="button" value="down">Down</button><button class="delete" type="button" value="delete">Delete</button></div>';

//
// FUNCTIONS
//

function postBlank() {
    $('.list ul').append('<li/>');
    $('ul li:last-child').addClass('inputItem');
    $('.list ul').find('li:last-child').html('<div class="listPair">'+inputName+'<br>'+inputDesc+'</div>'+'<div class="save">'+btnSave+'</div>');
};

//
// WORKSPACE
//

$(document).ready(function(){
    postBlank();
});
//Clicking save:
    //Changes button to triplet
        //Check if more than saved pair, generate up/down/delete triplet
    //generates new blank pairs
$('ul').click(function(){
    if ( event.target.className == 'btnSave') {
        $('.btnSave').parent().remove();
        $('.inputItem:last-child').append(btnTriplet);
        postBlank();
    }
});


//Clicking Up moves selected list entry up:
$('ul').click(function(){
    if(event.target.className == 'up') {
        var upShift = $(event.target).parent().parent();
        upShift.insertBefore(upShift.prev());
        //Marks up button disabled if it reaches the top:
        if(upShift.index() == 0) {
            $(event.target).attr('disabled','disabled');
        };

        //Reverses down status:
        if(event.target.nextElementSibling.getAttribute('disabled') == 'disabled') {
            $(event.target).next().removeAttr('disabled');
        };
    };
});

//Clicking Down moves selected list entry down:
$('ul').on('click', function(){
    if(event.target.className == 'down') {
        const downShift = $(event.target).parent().parent();
        downShift.insertAfter(downShift.next());
        
        //Reverses up status:
        if(event.target.previousElementSibling.getAttribute('disabled') == 'disabled') {
            $(event.target).prev().removeAttr('disabled');
        };

        //Marks down button disabled if it reaches the bottom: >>>>>><<<<<<
        $('li:last-child').prev().on('mouseover', function() {
            if(downShift.next().index() == $('li:last-child').index()) {
                if($('.down')) {
                    $(event.target).attr('disabled','disabled');
                };
            };
        });
    };
});

//Clicking Delete removes selected list entry:

$('ul').click(function(){
    if(event.target.className == 'delete') {
        $(event.target).parent().parent().remove();
    }
});

//>>><<< Place everything underneath a document. listener, with 'if' statements matching event className for all behaviors

//Right side of page has text entry field
//Print button at bottom prints entire list/notepad
