let foodList = ["라멘", "해장국", "햄버거", "국밥", "김밥"];
let count = 0;
let target = "짜장면";

console.log(foodList.indexOf(target));
console.log(foodList.includes(target));

foodList.push(target);
console.log(foodList.indexOf(target));

console.log(foodList);
console.log(foodList.splice(0, 2));
console.log(foodList);

console.log(foodList.slice(0, 1));

console.log(foodList.concat(["피자", "치킨"]));

console.log(foodList.join(", "));
