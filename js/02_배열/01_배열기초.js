let a = 10;
let b = a;

a = 15;
console.log(`a:${a}, b:${b}`);

let arr1 = [1, 2, 3, 4];
let arr2 = arr1;
arr1[1] = 999;
arr2[0] = 777;

console.log(arr1);
console.log(arr2);

let fruits = ["망고", "망고스틴", "포도"];
let notlist = {
    0: "딸기",
    1: "바나나",
    2: "사과"
};

console.log(typeof fruits);
console.log(typeof notlist);

console.log(fruits.length);

fruits[1] = "파인애플";
console.log(fruits);

fruits[4] = "복숭아";
console.log(fruits);