let x1 = -9.7;
let y1 = -9.9;
let x2 = 0.0;
let y2 = 2.9;
let x3 = -0.1;
let y3 = 5.2;

// tomonlari 
let a = Math.sqrt(Math.pow(x2-x1 ,2)+Math.pow(y2-y1 ,2));
let b = Math.sqrt(Math.pow(x3-x2 ,2)+Math.pow(y3-y2 ,2));
let c = Math.sqrt(Math.pow(x1-x3 ,2)+Math.pow(y1-y3 ,2));

// primetri
let P = (a+b+c);

// yarim primetr
let p = P/2;

// yuzi
let s = Math.sqrt(p*(p-a)*(p-b)*(p-c));


console.log(`Perimetri - ${P.toFixed(2)}\nYuzi - ${s.toFixed(2)}`);