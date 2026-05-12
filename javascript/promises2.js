const getData =()=>{
    fetch()
    .then(successHandler)
    .catch(()=>{
        alert("Something went wrong");
    });
};

const successHandler = (res)=>{
    console.log("response: " , res);

    res.json().then(renderUI);
}

//for tomorrow 13 may

// const getData = () => {

//     const promiseReturnedByFetch = fetch(
//         "https://dummyjson.com/products?select=id,title,price,thumbnail"
//     );

//     console.log("fetch returned -> ", promiseReturnedByFetch);

//     promiseReturnedByFetch.then((res) => {

//         console.log("Promise resolved");
//         console.log("Resolved value received in then -> ", res);

//         successHandler(res);

//     });

//     promiseReturnedByFetch.catch((err) => {

//         console.log("Promise rejected");
//         console.log("Rejected value -> ", err);

//         alert("Something went wrong..");

//     });

// };

// const successHandler = (res) => {

//     console.log("Inside successHandler");

//     console.log("response -> ", res);

//     const jsonPromise = res.json();

//     console.log("res.json() returned -> ", jsonPromise);

//     jsonPromise.then((data) => {

//         console.log("JSON conversion completed");

//         console.log("Parsed JSON data -> ", data);

//         renderUI(data);

//     });

// };