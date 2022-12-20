//Task:                index.html
//Assigned to:         Admin
//Date assigned:       8 December 2022
//Due date:            8 December 2022
//Task complete?       Yes
//Task description:    Create an html file called index.html

$(document).ready(function() {
    $("#Annimate").click(function() {
        $("*").css("background", "linear-gradient(to right, red, white");
    });
});


// Below is my function to save.
function save3() {
    let value4 = document.getElementById("first");
    localStorage.setItem("save3", value4);

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

function save4() {
    let value5 = document.getElementById("second");
    localStorage.setItem("save4", value5);

    if (localStorage.count) {
        let a = localStorage.count = Number(localStorage.count) + 1;
        alert(a + " items are in your save for later page.");
    } else {
        localStorage.count = 1;
    }
}

function save5() {
    let value6 = document.getElementById("third");
    localStorage.setItem("save5", value6);

    if (localStorage.count) {
        let a = localStorage.count = Number(localStorage.count) + 1;
        alert(a + " items are in your save for later page.");
    } else {
        localStorage.count = 1;
    }
}

function save6() {
    let value7 = document.getElementById("image2");
    localStorage.setItem("save6", value7);

    if (localStorage.count) {
        let a = localStorage.count = Number(localStorage.count) + 1;
        alert(a + " items are in your save for later page.");
    } else {
        localStorage.count = 1;
    }
}