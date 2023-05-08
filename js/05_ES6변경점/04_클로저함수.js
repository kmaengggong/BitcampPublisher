function calculator(n1, n2){
    function add(){
        return n1 + n2;
    }
    return add;
}

const closure = calculator(5, 10);
console.log(typeof closure);

console.log(closure());
console.log(closure(6, 12));

(() => {
    console.log("즉시실행 구문");
})();

const start = (() => {
    console.log("asdf");
})();
start();