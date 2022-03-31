$("#currentDay.lead").text(moment(moment(), "M-D-YYYY").format("ddd MMM Do"));

var time = moment().format("hh");
time = parseInt(time);
var dayorNight = moment().format("a");
let hour = $(".hour");

// function checkPresent() {
//   hour = $(".hour").text();
//   if (hour != time) {
//     hour.attr("class", "present");
//   }
// }

// checkPresent();

// var format = "hh";
// if (time < "9") {
//   var afterTen = moment("09", format);
//   if (afterTen) {
//     $("#9").css("class", "present");
//   }
// }
