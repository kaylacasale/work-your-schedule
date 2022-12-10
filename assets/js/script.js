//* grab header elements
//* set them equal to a variable
//* use dayjs format to get local date, time, and hour 
//* display local date, time, hour in header element (to let user know data is current and for later use in container)
var currentDayEl = document.getElementById('currentDay');
currentDayEl.textContent = today;
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

//** use dayjs format to get time in hour:minutes AM/PM format for display in header div */
var time = dayjs().format('h:mm A');
var timeEl = document.createElement('p');
timeEl.textContent = time;
currentDayEl.append(timeEl);

var hour = dayjs().format('H');
var hourEl = document.createElement('p');
hourEl.textContent = hour;

//** grab container div and set equal to variable (in order to append nested divs for each hour of the day pulled from for loop) */
containerDiv = document.getElementById('addRows');


//if (hour === hour + 1) {
for (i = 9; i < 17; i++) {
    var hourDiv = document.createElement('div');
    rowHourAttr = dayjs().hour(i).format('H');
    hourDiv.setAttribute('data-hour', rowHourAttr);
    hourDiv.setAttribute('class', 'row');
    //hourDiv.textContent = i;
    containerDiv.appendChild(hourDiv);
    //hourDiv == rowDiv
    var divInHourDiv = document.createElement('div');
    divInHourDiv.setAttribute('class', 'col-2 col-md-1 hour text-center py-3');
    //divInHourDiv.textContent = i;
    //set text
    divInHourDiv.textContent = dayjs().hour(i).format('h A');
    hourDiv.appendChild(divInHourDiv);

    var textAreaNew = document.createElement('textarea');
    textAreaNew.setAttribute('class', 'col-8 col-md-10 description');
    textAreaNew.setAttribute('rows', '3');
    textAreaNew.setAttribute('data-index', i);
    hourDiv.appendChild(textAreaNew);

    var buttonSave = document.createElement('button');
    buttonSave.setAttribute('class', 'btn saveBtn col-2 col-md-1');
    buttonSave.setAttribute('aria-label', 'save');
    buttonSave.setAttribute('data-index', i);

    var iClass = document.createElement('i');
    iClass.setAttribute('class', 'fas fa-save');
    iClass.setAttribute('aria-hidden', 'true');
    buttonSave.appendChild(iClass);
    hourDiv.appendChild(buttonSave);
    //buttonSave.append(hourDiv)

    var rows = $('.row');
    rows.each(function () {
        var rowHour = parseInt($(this).attr('data-hour'));
        if (rowHour < hour) {
            $(this).addClass('past');
        }
        if (rowHour == hour) {
            $(this).addClass('present');
        }
        if (rowHour > hour) {
            //if rowHour > 10
            $(this).addClass('future');
        }
    });
}

//* when day changes, create a new row div

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

function seeLocalValue() {
    let value = $(this).siblings('.description').val();
    let key = $(this).siblings('.description').data('index');
    localStorage.setItem(key, value);
}

//* create variables to grab textArea
let saveBtns = document.querySelectorAll('.saveBtn');
saveBtns.forEach(function (btn) {
    btn.addEventListener('click', seeLocalValue);
});

function renderSavedTextArea() {
    let n = 9;

    while (n < 17) {
        let value = localStorage.getItem(n);
        document.querySelector(`[data-hour="${n}"]`).children[1].textContent =
            value;
        n++;
    }
}

// //* init function displaying saved text

function init() {
    renderSavedTextArea();
}

init();