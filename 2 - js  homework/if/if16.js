let a= 8481;
let sum = 0;
let r;
for (let i = 0; i < a; i++) {
    r=a%10;
    sum += Math.floor(r);
    a = a/10;

}
console.log(sum);