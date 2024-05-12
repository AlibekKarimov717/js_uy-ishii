let a = 100384432314;
let sum = 0;
let r;
for (let i = 0; i < a; i++) {
    r = a%10;
    s = Math.floor(r);
    sum < s ? sum = s : '' ;
    a = a/10;
}
console.log(sum);