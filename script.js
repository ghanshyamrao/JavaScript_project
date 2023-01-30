var monthChange = document.getElementById("monthButton");
var dayChange = document.getElementById("dayButton");
var dayText = document.getElementById("day");
var monthText = document.getElementById("month");

var daysOfweek = [ "Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday", "Sunday" ] 
var namesOfmonths = [ "January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December" ] ;

var dayIndex = 0; 
var monthIndex = 0 ;

dayChange.addEventListener("click", function () {
    dayText.innerHTML = daysOfweek[dayIndex];
    dayIndex = (dayIndex + 1) % 7;
});

monthChange.addEventListener("click", function () {
    monthText.innerHTML = namesOfmonths[monthIndex];
    monthIndex = (monthIndex + 1) % 12;
});