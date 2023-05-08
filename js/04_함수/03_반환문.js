function add(n1, n2){
    return n1 + n2;
}

let r1 = add(5, 7);
console.log(r1);

console.log(add(r1, add(3, 5)));

////////////////////

function showMulti(n1, n2){
    console.log(`${n1} * ${n2} = ${n1 * n2}`);
}

let result = showMulti(3, 5);
console.log(result);

////////////////////

function question(answer){
    if(answer !== 5050){
        console.log("틀렸습니다.");
        return;
    }
    console.log("정답입니다.");
}

question(50);
question("5050");
question(5050);