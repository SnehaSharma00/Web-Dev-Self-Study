import {useState} from "react";

const App = () =>{
    const [counter, setCounter] = useState(0);
  //remote can take either direct value or function
    const handleIncrement = ()=>{
     // setCounter(counter + 1); pls change the value to +1 -> Noted!
          setCounter((prev)=>{ // pls change the prev value to +1 ->Noted!
        return prev + 1;
      });
      setCounter((prev)=>{ // pls change the prev value to +1 ->Noted!
        return prev + 1;
      });

      console.log(counter);

    };

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick= {handleIncrement}>++</button>
        </div>
    );
};


export default App;