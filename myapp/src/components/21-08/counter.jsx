import { useState } from "react";

function Counter(){

    const [counter,counterchange]=useState(0);

    function increment(){
        counterchange(counter + 1);

        
    }
   function decrement(){
    if(counter>0){
        counterchange(counter - 1);
    }

   }
    
    function reset(){
        counterchange(0);

    }


    return(
        <>

        <h1>Counter:{counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        
        
        
        </>
    )
}
export default Counter;