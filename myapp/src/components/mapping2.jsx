const Mapping2 = (({ data }) => {

    



    return (<>
        <h1>Products</h1>

        <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%",flexWrap:"wrap" }}>
            {data.map((items) => (
                <div style={{ height: "400px", width: "19%", border: "1px solid black",marginBottom:"10px" }}>

                    <img style={{ width: "100%", height: "60%" }} src={items.Image}></img>
                    <h1>Name: {items.name}</h1>
                    <h1>Size: {items.size}</h1>

                </div>

            ))}
        </div>





    </>



    )






});
export default Mapping2;



