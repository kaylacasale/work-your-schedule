var currentDayEl = document.getElementById("currentDay");
currentDayEl.textContent = today;
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

var time = dayjs().format('h:mm A');
var timeEl = document.createElement("p");
timeEl.textContent = time;
currentDayEl.append(timeEl);

var hour = dayjs().format('h');
var hourEl = document.createElement("p");
hourEl.textContent = hour;
console.log(hour);

var hourNow = dayjs().hour(12).format('hh A');
console.log(hourNow);

headerDiv = document.querySelector("header");
containerDiv = document.getElementById("addRows")



if (hour = hour + 1) {
    for (i = 0; i < 12; i++) {
        var hourDiv = document.createElement("div");
        hourDiv.setAttribute("data-hour", i)
        hourDiv.setAttribute("class", "row")
        //hourDiv.textContent = i;
        containerDiv.appendChild(hourDiv)
        //hourDiv == rowDiv
        var divInHourDiv = document.createElement("div");
        divInHourDiv.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
        //divInHourDiv.textContent = i;
        //set text 
        divInHourDiv.textContent = dayjs().hour(i).format('hh A');
        hourDiv.appendChild(divInHourDiv);

        var textAreaNew = document.createElement("textarea");
        textAreaNew.setAttribute("class", "col-8 col-md-10 description")
        textAreaNew.setAttribute("rows", "3");
        hourDiv.appendChild(textAreaNew);



    }
}
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

var rows = $(".row");
console.log(rows)
rows.each(function () {
    var rowHour = $(this).attr("data-hour")
    console.log(rowHour)
    if (rowHour < hourNow) {
        $(this).addClass("row past")
    } else if (rowHour === hourNow) {
        $(this).addClass("row present")
    } else { //if rowHour > 10
        $(this).addClass("row future")
    }
})

//* when day changes, create a new row div

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var saveBtns = document.querySelectorAll(".btn saveBtn col-2 col-md-1");
saveBtns.addEventListener('click', saveTextArea)


console.log(saveBtns);
saveBtns.addEventListener('click', function () {
    saveTextArea();

})

//* create variables to grab textArea
var textAreaEl = document.querySelectorAll("textarea");

//var textAreaSaved = localStorage.getItem("textAreaSaved");
//textAreaEl.textContent = textAreaSaved;


function saveTextArea() {
    preventDefault();
    localStorage.setItem("textAreaSaved", JSON.stringify(textAreaEl));
    renderSavedTextArea();

}

function renderSavedTextArea() {
    var textAreaSaved = localStorage.getItem("textAreaSaved");
    if (textAreaSaved !== null) {
        var textAreaDisplayed = document.createElement("p");
        textAreaDisplayed.textContent = "Event " + textAreaSaved;
        textAreaEl.append(textAreaDisplayed);
    }
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
