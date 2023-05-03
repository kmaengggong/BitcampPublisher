let x = 30;
let y = 40;
let z = '' + x + y;
let z2 = String(x) + y.toString();
console.log(typeof z);
console.log(typeof z2);
console.log(typeof String(x));
console.log(typeof y.toString());

let num = Number("Hello");
console.log(typeof num);

let num2 = parseInt("12345");
console.log(typeof num2);
