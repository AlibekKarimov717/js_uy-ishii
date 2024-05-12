let a= 8481;
let sum = 0;
let r;
for (let i = 0; i < a; i++) {
    r=a%10;
    s = Math.floor(r);
    s%2===1 ? sum +=s : 0;
    a = a/10;

}
console.log(sum);