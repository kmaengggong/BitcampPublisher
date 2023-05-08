function makeFood(sause){
    console.log(`면을 삶습니다.`)
    console.log(`${sause} 소스를 넣고 면수와 볶습니다.`)
    console.log(`${sause} 스파게티 완성.`);
}

makeFood(`토마토`);

const PI = 3.141592;
function calcCircle(f){
    return PI * Math.pow(f, 2);
}

let circleHalfLength = 10;
let circleSize = calcCircle(10);
console.log(`반지름 ${circleHalfLength}의 원 넓이는 ${circleSize}입니다.`);