import React from "react";

const Prop=({students,sexy,counter,increment})=>{
    console.log("student",students,"sexy",sexy);


return(
    <>
    <h1>Prop drilling</h1> 
    <h1>Counter:{counter}</h1>
    <button onClick={increment}>Increase</button>
   
    
    </>


)


}

export default Prop;