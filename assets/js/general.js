//for commits
//git add . && git commit -m "MESSAGE" && git push

// queryselectors for all

let dateEl = $("#date"); //assigns id date to dateEl
let timeEl = $("#time"); //assigns id time to timeEl

// define initial variables

// convenience variables

let currentDay = dayjs(); //using day js library to set current day with funciton

// functions

function setDateAndTime() {
    //sets date and time
    dateEl.text("The day is: " + currentDay.format("dddd, MMMM D, YYYY") + "."); //formats date
    timeEl.text("Here's the time: " + currentDay.format("h:mm A")  + "."); //formats time
  }

// click events

// local storage

// page process

setDateAndTime();

