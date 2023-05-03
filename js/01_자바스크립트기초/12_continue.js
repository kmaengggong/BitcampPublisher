// 1~100 까지 3의 배수 총합 continue 사용해서 완성
let total = 0;

for(let i=1; i<=100; i++){
    if(i%3 != 0) continue;
    total += i;
}

console.log(`1~100까지 3의 배수의 총합: ${total}`);