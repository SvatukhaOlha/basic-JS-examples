//1. Next year will be:
const year = 2019;
alert(year);
const nextYear = year + 1;

message = 'Next Year will be:' + nextYear;
alert(message);

//2.Next age will be:
const age = parseFloat(prompt('Enter your age'));
const nextAge = addOne(age);
alert('In next year your age will be ' + nextAge);

if (age < 18) {
    alert('You are not adult!');
} else {
    alert('You are adult!');
}

function addOne(num) {
    const result = num + 1;
    return result; 
}

//3. How many seconds(and minutes) in an hour, day, year. How many seconds in your age
const secondsInAMinute = 60;
const minutesInAHour = 60;
secondsInAHour = secondsInAMinute * minutesInAHour;
console.log(secondsInAHour);

const hoursInADay = 24;
secondsInADay = secondsInAHour * hoursInADay;
console.log(secondsInADay);

minutesInADay = minutesInAHour * hoursInADay;
console.log(minutesInADay);

const daysInAYear = 365;
secondInAYear = daysInAYear * secondsInADay;
console.log(secondInAYear);

let age = 24;
ageSeconds = 24 * secondInAYear;

//4. Create clock
function printTime() {
  const clock = new Date();
  const hours = clock.getHours();
  const mins = clock.getMinutes();
  const secs = clock.getSeconds();
  document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);

//5. rewrite str to array / [ 'W', 'o', 'r', 'l', 'd' ]
(function() {
	let greet = 'Hello World';
	let toGreet = [].filter.call(greet, function(element, index) {
		return index > 5;
	});
	console.log(toGreet);
}());

//6. functiom editions 
function add(a, b) {
    let sum = a + b;
    console.log(sum);
}
add(25,25);

const add2 = (a, b) => {
    let sum2 = a + b;
    console.log(sum2);
}
add(25,25);

const greet = x => "Welcome " + x;

const x = () => console.log("Hi");
