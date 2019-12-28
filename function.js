/*1. Next year will be:*/
const year = 2019;
alert(year);
const nextYear = year + 1;

message = 'Next Year will be:' + nextYear;
alert(message);

/* 2.Next age will be:*/
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
