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

//4. sum all nums in array
const nums = [1, 5, 20, 42, 4, 6, 10];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
}
console.log(sum); //return 88

//4.1 sum all elem in multi-dimensional array
function sumAll(arr) {
  let product = 0;
  for(let i = 0; i<arr.length; i++) {
    for(let j =0; j < arr[i].length; j++) {
      product+=arr[i][j];
    }
  }
  return product;
}
console.log(sumAll([[1,1],[1,1],[1,1,1]])); //return 7


//5. Takes each elem to str  
let animals = ["lion", "flamingo", "bear", "snake"];
for (let i = 0; i < animals.length; i++) {
 console.log("In this zoo are " + animals[i] + ".");
}
/*return In this zoo are lion.
In this zoo are flamingo.
In this zoo are bear.
In this zoo are snake.*/

//6. rewrite str to array / [ 'W', 'o', 'r', 'l', 'd' ]
(function() {
	let greet = 'Hello World';
	let toGreet = [].filter.call(greet, function(element, index) {
		return index > 5;
	});
	console.log(toGreet);
}());

//7. Return smallest number in array 
function findSmallestElement(arr) {
  return arr.length !== 0 ? Math.min(...arr) : undefined;
}

