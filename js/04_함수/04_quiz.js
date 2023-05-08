// n의 약수 개수
// 함수 내에서 n 약수 출력하고 약수 개수 리턴
function calcDivisor(n){
    let divisors = [1];
    let len = n/2
    for(let i=2; i<=len; i++){
        if(n%i == 0) divisors.push(i);
    }

    console.log(divisors);
    return divisors.length;
}

console.log(calcDivisor(10));