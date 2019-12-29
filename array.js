//1. Give all elem in array 
let products = [];
products[0] = 'Toyota Tundra';
products[1] = 'Mitsubishi Pajero';
products[2] = 'Tesla Cybertruck';
products[10] = 'Volkswagen Tiguan';
for (let i = 0; i < products.length; i++) {
    console.log(products[i])
};

//2. Sort all elem top down
for (let i = products.length - 1; i >=0; i--) {
    console.log(products[i]);
};

//3. Method forEach
products.forEach(printElement);
function printElement(element) {
    console.log(element);
};

//4. Add all nums in array
const nums = [1, 5, 20, 42, 4, 6, 10];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
}
console.log(sum);


//5. Takes each elem to str  
let animals = ["lion", "flamingo", "bear", "snake"];
for (let i = 0; i < animals.length; i++) {
 console.log("In this zoo are " + animals[i] + ".");
}
/*return In this zoo are lion.
In this zoo are flamingo.
In this zoo are bear.
In this zoo are snake.*/

