const userNames = [`김철수`, `강감찬`, `박영희`];

const [kim, kang, park] = userNames;

console.log(kim, kang, park);

let first = 10;
let second = 20;
console.log(first, second);

[first, second] = [second, first];
console.log(first, second);

const numbers = [1, 3, 5, 7, 9, 11];
const [one, three, ...others] = numbers;

console.log(one, three, others);

const foods = [`돈까스`, `감자탕`, `내장탕`];

// 깊은 복사 하기 위해선 스프레드(...) 사용
const newFoods = [...foods, `초밥`];

console.log(newFoods);
foods[0] = `크로켓`;
console.log(foods);
console.log(newFoods);