let a = -765;

if(a > 0){
    let f = a / 100;
    let e = Math.floor(f);
    let g = a % 100;
    let p = Math.floor(g/10);
    let t = a % 10;
    console.log(`${p}${e}${t}`); 
}else{
    let f = a / 100;
    let e = Math.ceil(f);
    let g = a % 100;
    let p = Math.ceil(g/10);
    let t = a % 10;
    console.log(`${p}${-e}${-t}`);
}