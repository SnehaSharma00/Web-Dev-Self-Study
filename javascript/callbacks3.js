const print =(amount)=>{
    console.log("please pay your bill:  ", amount);
};

const calcBill = (a,b, cb)=>{  //HoF
    const sum = a+b;
    const result = cb(sum);
    return result;
};

const foodBill=(amount)=>{
    const foodtax = amount*1.05;
    return foodtax;
};

const drinksBill= (amount)=>{
    const drinktax = amount * 1.30;
    return drinktax;
};

//food : 300 + 400 * tax ; drinks : 200 , 500 *tax;

calcBill( calcBill(300, 400, foodBill) , calcBill(200, 500, drinksBill), print);