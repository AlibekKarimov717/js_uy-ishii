let a = 241;
let o = a % 10;
let b = a / 10;
let t = a / 100;
let p = +Math.round(t); 
let r = b % 10;
console.log(`yig'indisi ${o+p+r} \n` + `ko'paytmasi ${o*p*r}`);