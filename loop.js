//1. geive number from 0-10
for (let i = 0; i <= 10; i++) {
    console.log(i);
};

let i = 0;
while (i <= 10) {
console.log(i);
i++;
};

//2.give even number from 100 to 2
for (let i = 100; i >= 2; i-=2) {
    console.log(i);
};

for (let i = 100; i >= 2; i--) {
    if (i % 2 === 0) console.log(i);
};

for (let i = 50; i >= 1; i--) {
    console.log(i * 2);
};

let i = 100;
while (i >= 2) {
    if (i % 2 === 0) console.log(i);
    i--;
}

let i = 100;
while (i >= 2) {
    console.log(i);
    i = i - 2;
};

//2.1 give even number from 10-2
for (let i = 10; i > 0; i-=2) {
  console.log(i);
}

//2.2 give odd number from 9-1
for (let i = 9; i > 0; i-=2) {
  console.log(i);
}

//3.Ask enter your age
let age = NaN;
while (isNaN(age) || age === 0) {
    age = Number(prompt("Enter tour age"));
}
console.log('Your age is ' + age);

//4.Sum nums in array
const nums = [1, 5, 20, 42, 4, 6, 10];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
}
console.log(sum);

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

//5. Give all numbers > 10 in array
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}
greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

//5. Give all number divided 3 from 10 000
for (let x = 3; x < 10000; x = x*3) {
  console.log(x);
};

//6. Give several times needed elem (give 5 times 'Hello')
let timesToSayHello = 5;
for (let i = 0; i < timesToSayHello; i++) {
 console.log("Hello!");
}

//7. key of object //return (key, secondKey, thirdKey)
let obj = {key: 1, secondKey: 2, thirdKey: 3};
for (let k in obj) {
    console.log(k)
}
