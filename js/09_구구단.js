// 2~9단 중첩반복문을 통해 구구단
// 출력: a * b = (a * b)
const start = 2;
const end = 9;
for(let i=start; i<=end; i++){
    for(let j=start-1; j<=end; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
    console.log();
}