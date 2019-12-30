let products = [];
products[0] = 'Toyota Tundra';
products[1] = 'Mitsubishi Pajero';
products[2] = 'Tesla Cybertruck';
products[10] = 'Volkswagen Tiguan';

//1. Push - add elem
products.push('Skoda Kodiaq');

//2. Method forEach - give all exists an elem (without undefined) 
products.forEach(printElement);
function printElement(element) {
    console.log(element);
};

products.forEach(element => console.log(element));

//3. Sort elem - sort elem in the alphabet
products.sort();
console.log(products);

//4. Sort nums
const nums = [1, 5, 20, 42, 4, 6, 10];
nums.sort((a, b) => a - b);
console.log(nums);

//5. toUpperCase, toLowerCase
badString =  "hEY, hOw aRe yOu?";
lowLetter = "EY, hOw aRe yOu?".toLowerCase();
firstLetter = 'h'.toUpperCase();
newString = firstLetter + lowLetter;
console.log(newString);

//6. slice
badString =  "hEY, hOw aRe yOu?";
lowLetter = "hEY, hOw aRe yOu?".slice(1,17);
newString = 'h'.toUpperCase() + lowLetter.toLowerCase();
console.log(newString);

sillyString = "hEY, hOw aRe yOu?";
lowerString = sillyString.toLowerCase();
firstCharacter = lowerString[0];
firstCharacterUpper = firstCharacter.toUpperCase();
restOfString = lowerString.slice(1);
console.log(firstCharacterUpper + restOfString);

//7. delete - delete properties from objects
delete myObj.prop;

//8 .hasOwnProperty() - to check if the property of a given object exists or not
.hasOwnProperty(propname)
let myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false

//9.concat() method allows you to join arrays and create an entirely new array
let c1 = ["HTML", "CSS"];
let c2 = ["JS", "C++"];
let courses = c1.concat(c2); //[HTML, CSS, JS, C++]

//10. Math() -contains a number of methods that are used for calculations:
//10.1 Math.sqrt -calculate the square root of a number
let number = Math.sqrt(4); 
document.write(number);//Outputs 2
//10.2 Math.random() -To get a random number

//11. setInterval()-calls a function or evaluates an expression at specified intervals (in milliseconds)
function myAlert() {
   alert("Hi");
}
setInterval(myAlert, 3000);

//12. new Date()- create a new date object with the current date and time
//Fri Jan 02 1970 00:00:00
const d1 = new Date(86400000); 

//Fri Jan 02 2015 10:42:00
const d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
const d3 = new Date(88,5,11,11,42,0,0);

 //11.1 getHours()
const d = new Date();
const hours = d.getHours();//hours is equal to the current hour
