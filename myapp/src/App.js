import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from './components/home';
import Login from './components/login';
import Notfound from './components/Notfound';
import Navbar from './components/21-08/navbar';
import Register from './components/register';
import Counter from './components/21-08/counter';
import Useeffect from './components/21-08/useeffect';
import Useeffect1 from './components/21-08/useeffect1';
import Useeffect2 from './components/21-08/useeffect2';
import Useeffect3 from './components/21-08/useeffect3';
import Product from './components/product';
import Prop from './components/props';
import Mapping from './components/21-08/mapping';
import Mapping2 from './components/mapping2';
import { useState } from 'react';

function App() {
  const[product,updatedproduct]=useState([{
    name:"T-shirt",
    size:"M",
    Image:"https://urturms.com/cdn/shop/files/02_4395d9f8-c97b-461f-b029-c648fcb4e4b4.jpg?v=1722596311&width=1500"


  },{
    name:"shirt",
    size:"S",
    Image:"https://urturms.com/cdn/shop/files/02_4395d9f8-c97b-461f-b029-c648fcb4e4b4.jpg?v=1722596311&width=1500"



  },{
    name:"Jeans",
    size:"M",
    Image:"https://urturms.com/cdn/shop/files/02_4395d9f8-c97b-461f-b029-c648fcb4e4b4.jpg?v=1722596311&width=1500"


  },
  {
    name:"Jeans",
    size:"M",
    Image:"https://urturms.com/cdn/shop/files/02_4395d9f8-c97b-461f-b029-c648fcb4e4b4.jpg?v=1722596311&width=1500"


  },{
    name:"Jeans",
    size:"M",
    Image:"https://urturms.com/cdn/shop/files/02_4395d9f8-c97b-461f-b029-c648fcb4e4b4.jpg?v=1722596311&width=1500"


  },{
    name:"Jeans",
    size:"M",
    Image:"https://urturms.com/cdn/shop/files/02_4395d9f8-c97b-461f-b029-c648fcb4e4b4.jpg?v=1722596311&width=1500"


  },{
    name:"Jeans",
    size:"M",
    Image:"https://urturms.com/cdn/shop/files/02_4395d9f8-c97b-461f-b029-c648fcb4e4b4.jpg?v=1722596311&width=1500"


  },{
    name:"Jeans",
    size:"M",
    Image:"https://urturms.com/cdn/shop/files/02_4395d9f8-c97b-461f-b029-c648fcb4e4b4.jpg?v=1722596311&width=1500"


  },{
    name:"Jeans",
    size:"M",
    Image:"https://urturms.com/cdn/shop/files/02_4395d9f8-c97b-461f-b029-c648fcb4e4b4.jpg?v=1722596311&width=1500"


  },{
    name:"Jeans",
    size:"M",
    Image:"https://urturms.com/cdn/shop/files/02_4395d9f8-c97b-461f-b029-c648fcb4e4b4.jpg?v=1722596311&width=1500"


  }]);
  const[state,updatedstate]=useState(["zaid","diaz","bachira","rengoku"]);
  const[counter,setcounter]=useState(0);
  function increase(){
    setcounter(counter + 1);
  }
    return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="*" element={<Notfound/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/counter" element={<Counter/>}/>
    <Route path="/useeffect" element={<Useeffect/>}/>
    <Route path="/useeffect1" element={<Useeffect1/>}/>
    <Route path="/useeffect2" element={<Useeffect2/>}/>
    <Route path="/useeffect3" element={<Useeffect3/>}/>
    <Route path="/prod/:id" element={<Product/>}/>
    <Route path="/props" element={<Prop  students={
      ["zaid","b1","alyx"]} 
      sexy={"yes"}
      counter={counter}
      increment={increase}
    
    
    
    
    
    /> }/>
    <Route path="/mapping" element={<Mapping name={state}/>}/>
    <Route path="/mapping2" element={<Mapping2 data={product}/>}/>






  </Routes>

  
  </>
  )
   
}


export default App;



