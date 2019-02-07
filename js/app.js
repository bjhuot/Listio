var inputName = '<input type="text" name="inputName" placeholder="To-Do Item"></input>';
var inputDesc = '<input type="text" name="inputDesc" placeholder="To-Do Description"></input>';
const btnSave = '<div class="btnSave"><button class="save" type="button" value="save">Save</button></div>';

// Contains buttons for Up/Down/Delete as a single div/entity:
const btnTriplet = '<div class="btnTriplet"><button class="up" type="button" value="up">Up</button><button class="Down" type="button" value="down">Down</button><button class="delete" type="button" value="delete">Delete</button></div>';

//Page starts with one blank list entry pair, and save button (plus checkbox)
    $('.list ul').append('<li/>');
    $('ul li').addClass('inputItem');
    //add variable for index to reference each item?
    $('.inputItem').html('<div>'+inputName+'<br>'+inputDesc+'</div>'+btnSave);

    
//Clicking save:
    //Changes button to delete
        //Check if more than saved pair, generate up/down/delete triplet
        //if no pairs remaining after clicking delete, button must generate new blank pair
    //generates new blank pair

//Right side of page has text entry field
//Print button at bottom prints entire list/notepad