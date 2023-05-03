let pets = ["멍멍이", "야옹이", "모린"];
console.log(pets);

pets.push("만두");  // 뒤에 추가

let deletes = pets.pop();  // 뒤에 제거
console.log(pets);

deletes = pets.shift();  // 앞을 제거
console.log(pets);

pets.unshift("호랑이", "사자");  // 앞에 추가
console.log(pets);

pets.unshift();
console.log(pets);