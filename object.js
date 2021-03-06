//1. delete - delete properties from objects
delete myObj.prop;

//2. add new properties to obj
myObj.prop = "this is new prop";

//3 .hasOwnProperty() - to check if the property of a given object exists or not
.hasOwnProperty(propname)
let myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false

//4. key of object //return (key, secondKey, thirdKey)
let obj = {key: 1, secondKey: 2, thirdKey: 3};
for (let k in obj) {
    console.log(k)
}
