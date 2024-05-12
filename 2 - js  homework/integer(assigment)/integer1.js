let a = 8;
let b = 5;
let s = 0<a && a<1000 && 0<b && b<1000 ? Math.sqrt(Math.sqrt((Math.pow(a, 3) - Math.pow(b, 3))+(Math.pow(a, 3) + Math.pow(b, 3)))) : 'kiritgan soningiz mingdan katta yoki noldan kichik';
console.log(s);