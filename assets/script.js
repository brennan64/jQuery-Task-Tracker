$("#currentDay.lead").text(moment(moment(), "M-D-YYYY").format("ddd MMM Do"));
var time = moment().format("hh");
time = parseInt(time);
var dayorNight = moment().format("a");
let hour = $(".hour");
let hr1Slot = $(".hr1 textArea");
let hr2Slot = $(".hr2 textArea");
let hr3Slot = $(".hr3 textArea");
let hr4Slot = $(".hr4 textArea");
let hr5Slot = $(".hr5 textArea");
let hr6Slot = $(".hr6 textArea");
let hr7Slot = $(".hr7 textArea");
let hr8Slot = $(".hr8 textArea");
var currentTime = moment().hours();
let txtArea = $("textArea");

function checkPast() {
  if (dayorNight == "pm") {
    hr1Slot.addClass("past");
    hr2Slot.addClass("past");
    hr3Slot.addClass("past");
  }

  if (dayorNight == "pm" && time >= 1) {
    hr4Slot.addClass("past");
  }
  if (dayorNight == "pm" && time >= 2) {
    hr5Slot.addClass("past");
  }
  if (dayorNight == "pm" && time >= 3) {
    hr6Slot.addClass("past");
  }
  if (dayorNight == "pm" && time >= 4) {
    hr7Slot.addClass("past");
  }
  if (dayorNight == "pm" && time >= 5) {
    hr8Slot.addClass("past");
  }

  if (dayorNight == "am" && time >= 10) {
    hr1Slot.addClass("past");
  }
  if (dayorNight == "am" && time >= 11) {
    hr2Slot.addClass("past");
  }
}

function checkFuture() {
  if (dayorNight == "am") {
    hr5Slot.addClass("future");
    hr6Slot.addClass("future");
    hr7Slot.addClass("future");
    hr8Slot.addClass("future");
  }

  if (dayorNight == "pm" && time < 4) {
    hr8Slot.addClass("future");
  }

  if (dayorNight == "pm" && time < 3) {
    hr7Slot.addClass("future");
  }

  if (dayorNight == "pm" && time < 2) {
    hr6Slot.addClass("future");
  }
  if (dayorNight == "pm" && time < 1) {
    hr5Slot.addClass("future");
  }

  if (dayorNight == "am" && time < 10) {
    hr2Slot.addClass("future");
  }
  if (dayorNight == "am" && time < 11) {
    hr3Slot.addClass("future");
  }

  if (dayorNight == "am" && time < 12) {
    hr4Slot.addClass("future");
  }
}

function checkPresent() {
  if (time == 4) {
    hr8Slot.addClass("present");
  } else if (time == 3) {
    hr7Slot.addClass("present");
  } else if (time == 2) {
    hr6Slot.addClass("present");
  } else if (time == 1) {
    hr5Slot.addClass("present");
  } else if (time == 12) {
    hr4Slot.addClass("present");
  } else if (time == 11) {
    hr3Slot.addClass("present");
  } else if (time == 10) {
    hr2Slot.addClass("present");
  } else if (time == 9) {
    hr1Slot.addClass("present");
  }
}

checkPast();
checkFuture();
checkPresent();
