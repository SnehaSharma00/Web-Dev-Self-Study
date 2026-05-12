//nested callback - callback hell

// const cb = ()=>{
//     console.log("+1 sec");
// }

// // setTimeout(setTimeout(cb, 1000),1000);

//-------------------------------------------------------

setTimeout(()=>{
    console.log("1 sec");
    setTimeout(()=>{
        console.log("2 sec");
        setTimeout(()=>{
            console.log("3 sec");
        },1000);
    },1000);
},1000);

//----------------------------------------------------------
//promise version
function sec(message){   //promise creation factory
       
   return new Promise((resolve)=>{ //why is resolve inside the callback , isnt it an argument of promise itself
    setTimeout(()=>{
        console.log(message);
        resolve();  //success = true so that then executes
    },1000);
   });

}

sec("1 sec").then(()=>{return sec("2 sec");}).then(()=>{return sec("3 sec");});

// sec("1 sec").then(sec("2 sec")).then(sec("3 sec")); // this would execute the functions directly , we use callback so that it is understood that they are suppossed to execute after promise resolution.
// then(somecallback) is the format needed , if execute immediately the format would be then(result)

//so promise is a constructior that has a callback as an argument , we define that callback right at the parameter def, resolve and reject are functions that are used inside the callback thats why we put resolve as parameter for our defined callback . 

//async await code 
function sec(message){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },1000);
    });
}

async function executeasync(){
    await sec("1 sec"); 
    await sec("2 sec");
    await sec("3 sec");
}

//await only waits for a promise . so it needs await func(somepromise) format. 
// so sec is executed immediately using normal function call and not callback as we need to reach to the promise and wait for that


