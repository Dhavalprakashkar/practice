
import { useParams } from "react-router-dom";
function Product(){
const{id}=useParams();

    return(
        <>
        <h1>Product is:{id}</h1>
        
        
        
        </>



    )

}

export default Product;