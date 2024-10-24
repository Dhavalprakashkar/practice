
import { useNavigate } from "react-router-dom"
import "../csstyles/nav.css"
import Useeffect2 from "./useeffect2";

function Navbar(){

const path=useNavigate();



function forhome(){
   path("/")
}
function forlogin(){
    path("/login")
   
}

function forregister(){
    path("/register")
}

function double(){
    path("*")
}
function counter(){
path("/counter")
}
function useeffect(){
    path("/useeffect")

}
function useeffect1(){
    path("/useeffect1")

}
function useeffect2(){
    path("/useeffect2")
}
function useeffect3(){
    path("/useeffect3")
}
function mapping2(){
    path("/mapping2")
}
function useparams(){
    path("/prod/id")
}






    return (
        <>
        <div className="nav">
            <h1 onClick={forhome} onDoubleClick={double}>Home</h1>
            <h1 onClick={forlogin}>Login</h1>
            <h1 onClick={forregister}>Register</h1>
            <button onClick={counter}>Use counter</button>
            <h1 onClick={useeffect}>Use effect</h1>
            <h1 onClick={useeffect1}>Use effect1</h1>
            <h1 onClick={useeffect2}>Use effect2</h1>
            <h1 onClick={useeffect3}>Use effect3</h1>
            <h1 onClick={useparams}>Use Prms</h1>
            
            <h1 onClick={mapping2}>Mapping2</h1>
        </div>
        </>
    )
}
export default Navbar;