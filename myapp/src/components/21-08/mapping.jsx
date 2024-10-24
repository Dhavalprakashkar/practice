const Mapping=({name})=>{
    console.log("name:",name)


    return(<>  
    <h1>Mapping</h1>

    {name.map((ele)=>(

        <h1>{ele}</h1>

    ))}

    

    
    
    
    
    
     </>);

}

export default Mapping;