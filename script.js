let monthChange = document.getElementById("monthButton");
let dayChange = document.getElementById("dayButton");
let dayText = document.getElementById("day");
let monthText = document.getElementById("month");

let daysOfweek = [ "Monday", "Tuesday", "Wednesday", "Thursday",
"Friday", "Saturday", "Sunday" ] 
let namesOfmonths = [ "January", "February", "March", "April","May", "June", "July", "August","September", "October", "November", "December" ] ;

let dayIndex = 0; 
let monthIndex = 0 ;

dayChange.addEventListener("click", function () {
    dayText.innerHTML = daysOfweek[dayIndex];
    dayIndex = (dayIndex + 1) % 7;
    console.log(dayIndex)
});

monthChange.addEventListener("click", function () {
    monthText.innerHTML = namesOfmonths[monthIndex];
    monthIndex = (monthIndex + 1) % 12;
});