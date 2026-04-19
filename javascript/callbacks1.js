
//calbacks help execute logic in synchronous and async ways
// const print = (txt) =>{
//     console.log("😁" , txt);
// };
 
// print("i shat ");
//--------------------------------------------------------------
const add = (a,b)=>{  // function defined
    const ans = a+b;
    return ans;
};

const result = add(20, 16); //function call result stored
print(result); //another function to print 
//---------------------------------------------------------------
// task : (400 + 300 )* 1.18
const multiply = (a,b)=>{
    const ans = a*b;
    return ans;
};
const sum = add(400,300);
const finalResult = multiply(sum, 1.18);
print(finalResult);
// functions are first class citizens - they are treated normally like other data types like string , number

const Add = (a,b, cb)=>{
    const ans = a +b;
    cb(ans, 1.18, print);
};

const mul =(a,b, show)=>{
    const product = a *b;
    show(product);
};

const print = (txt) =>{
    console.log("😁" , txt);
};

Add(400, 300, mul);
 
//calback is a fuction that is passed as an argument to another function
//higher order function (HoF) is a function that accepts another function as a parameter
