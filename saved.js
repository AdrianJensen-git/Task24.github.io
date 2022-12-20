//Task:                index.html
//Assigned to:         Admin
//Date assigned:       8 December 2022
//Due date:            8 December 2022
//Task complete?       Yes
//Task description:    Create an html file called index.html

function display() {
    let value1 = localStorage.getItem("save");

    let tag = document.createElement("div");
    let a = document.createTextNode(value1);
    tag.appendChild(a);
    document.getElementById("paste").appendChild(tag);

    //-----------------------------------------//
    let value2 = localStorage.getItem("save2");

    let tag2 = document.createElement("div");
    let b = document.createTextNode(value2);
    tag2.appendChild(b);
    document.getElementById("paste").appendChild(tag2);

    //-----------------------------------------//
    let value3 = localStorage.getItem("save3");

    let tag3 = document.createElement("div");
    let c = document.createTextNode(value3);
    tag3.appendChild(c);
    document.getElementById("paste").appendChild(tag3);

    //-----------------------------------------//
    let value4 = localStorage.getItem("save4");

    let tag4 = document.createElement("div");
    let d = document.createTextNode(value4);
    tag4.appendChild(d);
    document.getElementById("paste").appendChild(tag4);

    //-----------------------------------------//
    let value5 = localStorage.getItem("save5");

    let tag5 = document.createElement("div");
    let e = document.createTextNode(value5);
    tag5.appendChild(e);
    document.getElementById("paste").appendChild(tag5);

    //-----------------------------------------//
    let value6 = localStorage.getItem("save6");

    let tag6 = document.createElement("div");
    let f = document.createTextNode(value6);
    tag6.appendChild(f);
    document.getElementById("paste").appendChild(tag6);
}