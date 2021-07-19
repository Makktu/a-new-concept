"use strict";

let nameThing = "John Tester"; // ! for testing only

let toggle = 0;

// * define all the DOM areas
const nameSpace = document.querySelector(".name");
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const newTaskBtn = document.querySelector(".new-task");
const formSheet = document.querySelector(".form");

// * add all the Event Listeners *****

openBtn.addEventListener("click", function () {
    console.log("open btn");
});

closeBtn.addEventListener("click", function () {
    console.log("close btn");
});

newTaskBtn.addEventListener("click", () => {
    if (toggle === 0) {
        formSheet.style.cssText = "opacity: 1; transition: 1s ease-in;";
        toggle = 1;
    } else {
        formSheet.style.cssText = "opacity: 0; transition: 0.5s ease-in;";
        toggle = 0;
    }
});

// ***********************************

nameSpace.textContent = nameThing;
