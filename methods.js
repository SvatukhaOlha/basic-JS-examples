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
