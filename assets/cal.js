
var button = document.getElementById("btm");
var moneyRate = document.getElementById("rate");
var dayRate = document.getElementById("hour");

var dayResult = document.getElementById("day");
var weekResult = document.getElementById("week");
var monthResult = document.getElementById("month");
var yearResult = document.getElementById("year");

button.addEventListener("click", CalculateSalary);



function CalculateSalary(){

var daySalary = parseInt(moneyRate.value) * parseInt(dayRate.value);
dayResult.textContent = daySalary;

var weekSalary = parseInt(moneyRate.value) *40;
weekResult.textContent = weekSalary;

var monthSalary = parseInt(moneyRate.value) * 173.375;
monthResult.textContent = monthSalary;

var yearSalary = parseInt(moneyRate.value) * 2080;
yearResult.textContent = yearSalary;

}