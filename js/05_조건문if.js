let age = Math.floor(Math.random()*100)+1;

console.log(`당신의 나이는 ${age}입니다.`);

if(age > 19) console.log("성인입니다.");
else if(age >= 17) console.log("고등학생입니다.");
else if(age >= 14) console.log("중학생입니다.");
else if(age >= 8) console.log("초등학생입니다.");
else console.log("미취학아동입니다.");