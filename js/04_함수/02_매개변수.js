function calcRangeTotal(begin, end){
    let total = 0;
    for(let i=begin; i<=end; i++) total += i;
    return total;
}

console.log(calcRangeTotal(1, 10));


console.log(`중첩 표현식 예시 : ${ calcRangeTotal(1, calcRangeTotal(1, 10)) }`);