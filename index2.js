//Task:                index.html
//Assigned to:         Admin
//Date assigned:       8 December 2022
//Due date:            8 December 2022
//Task complete?       Yes
//Task description:    Create an html file called index.html


// Below is the function which creates a drop down menu
$("#dropDownMenu > li > div").click(function() {

    if (false == $(this).next().is(':visible')) {
        $('#dropDownMenu ul').slideDown(500);
    }
    $(this).next().slideToggle(500);
});


// Below is my function to hide the image
$(document).ready(function() {
    $("#button1").click(function() {
        $("#michael").fadeOut();
    });
    $("#button1").click(function() {
        $("#button1").fadeOut();
    });
    $("#button2").click(function() {
        $("#michael").fadeIn();
        $("#button1").fadeIn();
    });
});

