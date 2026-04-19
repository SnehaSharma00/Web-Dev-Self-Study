const print = (txt)=>{
    console.log("(❁´◡`❁)  ", txt);
}

const calcBill=(a, b, cb)=>{
    const ans = a+b;
    const res = cb(ans,1.18);
    return res;
}

const multiply = (a, b)=>{
    const product = a*b;
   // print(product); //globally defined
   return product;
}

const result = calcBill(400, 300, multiply);
print(result);
//calcBill(300, 400,multiply);

//-------------------------------------
