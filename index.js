//Task:                index.html
//Assigned to:         Admin
//Date assigned:       8 December 2022
//Due date:            8 December 2022
//Task complete?       Yes
//Task description:    Create an html file called index.html


// Below is the function to create a chained effect.
$(document).ready(function() {
    $("#chainedEffect").click(function() {
        $("*").slideDown(4000).animate({fontSize: "30px"}).slideUp(3000);
    });
});


// Below is my function to save.
function save() {
    let value1 = document.getElementById("hello").value;
    localStorage.setItem("save", value1);

    // Below is the count function.
    // I used w3 schools to help with this function.
    // https://www.w3schools.com/jsref/prop_win_localstorage.asp
    if (localStorage.count) {
        let a = localStorage.count = Number(localStorage.count) + 1;
        alert(a + " items are in your save for later page.");
    } else {
        localStorage.count = 1;
    }
}

function save2() {
    let value2 = document.getElementById("image1");
    localStorage.setItem("save2", value2);

    if (localStorage.count) {
        let a = localStorage.count = Number(localStorage.count) + 1;
        alert(a + " items are in your save for later page.");
    } else {
        localStorage.count = 1;
    }
}