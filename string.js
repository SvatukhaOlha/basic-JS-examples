//1. toUpperCase, toLowerCase - edit str (Hey, how are you?)
badString =  "hEY, hOw aRe yOu?";
lowLetter = "EY, hOw aRe yOu?".toLowerCase();
firstLetter = 'h'.toUpperCase();
newString = firstLetter + lowLetter;
console.log(newString);

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
