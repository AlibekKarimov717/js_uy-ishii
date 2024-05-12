let a = 54;
let sum = 0;
let r;
let u=0;
for (let i = 0; i < a; i++) {
    r = a%10;
    s = Math.floor(r);
    sum < s ? sum = s : '' ;
    a = a/10;
    u++;
}
console.log(sum , u);