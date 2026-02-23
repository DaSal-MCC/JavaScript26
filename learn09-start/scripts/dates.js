/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph
let newdate = new Date();
document.getElementById("basic").innerHTML = newdate;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
let ymd = new Date();
ymdFinal = ymd.getFullYear() + "-" + ymd.getMonth() + "-" + ymd.getDate();
document.getElementById("today").innerHTML = ymdFinal;

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
let birthday = new Date("2-26-2006");
document.getElementById("birthday").innerHTML = birthday;

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
let isodate = new Date();
document.getElementById("iso").innerHTML = isodate.toISOString();

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
let short = new Date("2026-01-01");
let long = new Date("2026 1 1");

document.getElementById("date1").innerHTML = isodate.toISOString();
document.getElementById("date2").innerHTML = short;
document.getElementById("date3").innerHTML = long;
//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
document.getElementById("get1").innerHTML = newdate.getFullYear();
document.getElementById("get2").innerHTML = newdate.getDate();
document.getElementById("get3").innerHTML = newdate.getMinutes();
document.getElementById("get4").innerHTML = newdate.getHours();
// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
newdate.setFullYear(2038);
document.getElementById("set1").innerHTML = newdate;

newdate.setDate(14);
document.getElementById("set2").innerHTML = newdate;

newdate.setSeconds(23);
document.getElementById("set3").innerHTML = newdate;

newdate.setMonth(3);
document.getElementById("set4").innerHTML = newdate;
