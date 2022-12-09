var currentDayEl = document.getElementById("currentDay");
currentDayEl.textContent = today;
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

var time = dayjs().format('h:mm A');
var timeEl = document.createElement("p");
timeEl.textContent = time;
currentDayEl.append(timeEl);

var hour = dayjs().format('H');
var hourEl = document.createElement("p");
hourEl.textContent = hour;
console.log(hour);

// var hour2 = dayjs().hour().format('h')
// console.log(hour2)

var hourNow = dayjs().hour(24).format('hh A');
console.log(hourNow);

headerDiv = document.querySelector("header");
containerDiv = document.getElementById("addRows")



//if (hour === hour + 1) {
for (i = 9; i < 17; i++) {
    var hourDiv = document.createElement("div");
    rowHourAttr = dayjs().hour(i).format('H')
    hourDiv.setAttribute("data-hour", rowHourAttr)
    hourDiv.setAttribute("class", "row")
    //hourDiv.textContent = i;
    containerDiv.appendChild(hourDiv)
    //hourDiv == rowDiv
    var divInHourDiv = document.createElement("div");
    divInHourDiv.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
    //divInHourDiv.textContent = i;
    //set text 
    divInHourDiv.textContent = dayjs().hour(i).format('h A');
    hourDiv.appendChild(divInHourDiv);

    var textAreaNew = document.createElement("textarea");
    textAreaNew.setAttribute("class", "col-8 col-md-10 description")
    textAreaNew.setAttribute("rows", "3");
    textAreaNew.setAttribute("data-index", i);
    hourDiv.appendChild(textAreaNew);

    var buttonSave = document.createElement("button");
    buttonSave.setAttribute("class", "btn saveBtn col-2 col-md-1");
    buttonSave.setAttribute("aria-label", "save");
    buttonSave.setAttribute("data-index", i)

    var iClass = document.createElement("i");
    iClass.setAttribute("class", "fas fa-save");
    iClass.setAttribute("aria-hidden", "true");
    buttonSave.appendChild(iClass);
    hourDiv.appendChild(buttonSave);
    //buttonSave.append(hourDiv)






    var rows = $(".row");
    console.log(rows)
    rows.each(function () {
        var rowHour = parseInt($(this).attr("data-hour"))
        console.log(rowHour)
        console.log(hour);
        if (rowHour < hour) {
            $(this).addClass("past")
        }
        if (rowHour == hour) {
            $(this).addClass("present")
        }
        if (rowHour > hour) { //if rowHour > 10
            $(this).addClass("future")
        }
    })

}

// var rows = $(".row");
// console.log(rows)
// rows.each(function () {
//     var rowHour = $(this).attr("data-hour")
//     console.log(rowHour)
//     if (rowHour < hour) {
//         $(this).addClass("row past")
//     } else if (rowHour === hour) {
//         $(this).addClass("row present")
//     } else { //if rowHour > 10
//         $(this).addClass("row future")
//     }
// })
// dayjs().hour()
// var hour = dayjs().hour(12);
// var hourEl = document.createElement("p")
// hourEl.textContent = hour;
// currentDayEl.append(hourEl);

//find current time 
// use this as a variable to compare to below instead of 9, 10, 11

//get current time
// if day = current, display present (red)


// var dayWeek = $('<p>');
// dayWeek.text = today.format('[Today is] dddd');
// //dayWeek.text(dayWeek);
// currentDayEl.append(dayWeek);

//if divinhour.includes("AM") . {}
// var rows = $(".row");
// console.log(rows)
// rows.each(function () {
//     var rowHour = $(this).attr("data-hour")
//     console.log(rowHour)
//     if (rowHour < hourNow) {
//         $(this).addClass("row past")
//     } else if (rowHour === hourNow) {
//         $(this).addClass("row present")
//     } else { //if rowHour > 10
//         $(this).addClass("row future")
//     }
// })

//* when day changes, create a new row div

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtns = document.querySelector(".saveBtn")
// saveBtns.addEventListener('click', saveTextArea)


console.log(saveBtns);

var textAreaEl = document.querySelector("textarea");
for (i = 9; i < 17; i++) {
    saveBtns.addEventListener('click', function () {

        //saveTextArea();
        // var textAreas = textAreaEl;
        var textAreas = textAreaEl.value;
        console.log(textAreas)

        localStorage.setItem("textAreas", JSON.stringify(textAreas));

        //renderSavedTextArea();



    })

}
//* create variables to grab textArea


//var textAreaSaved = localStorage.getItem("textAreaSaved");
//textAreaEl.textContent = textAreaSaved;

// var textAreas = [];
// function saveTextArea() {
//     // preventDefault();
//     var textAreas = textAreaEl;
//     localStorage.setItem("textAreas", JSON.stringify(textAreas));
//     // localStorage.setItem("textAreaSaved", JSON.stringify(textAreaEl));
//     renderSavedTextArea();



function renderSavedTextArea() {
    // var textAreaSaved = localStorage.getItem("textAreaSaved");

    var textAreas = JSON.parse(localStorage.getItem("textAreas"));
    if (textAreas !== null) {
        displayTextArea(textAreas);


        // var textAreaDisplayed = document.createElement("p");
        // textAreaDisplayed.textContent = "Event Added: " + textAreaSaved;
        // textAreaEl.append(textAreaDisplayed);
    }
}

function displayTextArea(area) {
    textAreaEl.textContent = area;

}
//* init function displaying saved text

function init() {
    renderSavedTextArea();
    displayTextArea();
}

$(function () {
    // TODO: Add a listener for click events on the save button. This code should


    //* add listener event to saveBtn
    //* - call localStorage for textarea el in click event saveBtn by querySelectorAll
    //* create function localStoragetextarea to save text associated with each btn
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
});


init();