let total = 0;
let n = 1;

while(n <= 100){
    if(n%2 == 1) total += n;
    n += 1;
}

console.log(`1~100까지 홀수의 총합 : ${total}`);