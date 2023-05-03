let n1 = 10;
let n2 = '20';

console.log(n1+n2);  // 숫자 + 문자 = 문자
console.log(n2-n1);  // 문자 - 숫자 = 숫자
console.log(typeof (n1+''));  // 숫자+'' = 문자
console.log(+n2);  // +문자 = 숫자
console.log(n2*n1);  // 문자 * 숫자 = 숫자
console.log(n1*n2);

if(undefined) console.log("undifined");
if(null) console.log("null");
if(0) console.log("0");
if("") console.log('""!');
if(NaN) console.log("NaN");

if(1) console.log('0이 아닌 숫자');
if(-100.234) console.log("음수");
if("     ") console.log("공백 문자");
if("hello") console.log("문자열");
if([]) console.log("빈 리스트");