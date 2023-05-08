function showEvenNumber(n) {
    for(let i=1; i<=n; i++){
        if(i%2 === 0) console.log(i);
    }
}

function showOddNumber(n) {
    for(let i=1; i<=n; i++){
        if(i%2 === 1) console.log(i);
    }
}

showEvenNumber(10);
showOddNumber(10);

function showOddOrEvenNumber(n, delimeter){
    for(let i=1; i<=n; i++){
        if(i%2 === delimeter) console.log(i);
    }
}

showOddOrEvenNumber(10, 1);

function showMNumbers(n, m){
    for(let i=1; i<=n; i++){
        if(i%m === 0) console.log(i);
    }
}
showMNumbers(10, 5);

function showCallbackNumber(n, callback){
    for(let i=1; i<=n; i++){
        if(callback(i)) console.log(i);
    }
}

showCallbackNumber(10, n => {console.log("wtf"); return n === 1 || n === 10});