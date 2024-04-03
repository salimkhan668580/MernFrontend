
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss'
import Home from './pages/Home/Home'
import Cart from './pages/cart/Cart'
import toast, { Toaster } from 'react-hot-toast';
import AllProduct from "./pages/AllProdct/AllProduct";
import Login from "./pages/login/Login";
import Signup from "./pages/Signup/Signup";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";


import { auth } from "./firebase/firebaseAuth";
import About from "./pages/AboutUs/About";
import Contact from "./pages/Contact/Contact";


function App() {
  const [cartData, setCartData] = useState([]);
  const [username,setUsername]=useState("");
 

  // Callback function to receive data from child component
  const addTOCart= (data) => {

    const isProductExist=cartData.find((findItem)=>findItem.id===data.id)

    if(isProductExist){
     
      const updateQuantity=cartData.map((item)=>(
        item.id===data.id?{...item,quantity:item.quantity+1}:item
      
      ))
      
      setCartData(updateQuantity);
      toast.success("add to cart")
       
      
    }else{
      
      setCartData([...cartData, {...data,quantity:1}])
      toast.success("add to cart")
      
    }

    };

  //  .................increse Quantity.....................
   const incHandler=(id)=>{
  
    const incQnty= cartData.map((item)=>(
      item.id==id?{...item,quantity:item.quantity+1}:item
    ))
    setCartData(incQnty);
    toast.success("increses")
   }
  //  .................decrese Quantity.....................
   const decHandler=(id)=>{
    const decQnty= cartData.map((item)=>(
      item.id==id && item.quantity>1 ? {...item,quantity:item.quantity-1}:item
    

    ))
    setCartData(decQnty);
    toast.success("Decrease")
   }

  //  .......................remove Item.................

  const handleRemove=(id)=>{
    const delteProduct=cartData.filter((item)=>item.id !== id)
  
    setCartData(delteProduct);
    toast.success("Remove Successfully")

           
  }

  // ...........total Value...............
  const getTotal=()=>{
        const totalPrice=cartData.reduce((total,productItem)=>{
          return total+productItem.price * productItem.quantity;
        },0);
        return totalPrice;
  };

  // .................set username after Login.apply..........

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUsername(user.displayName);
      }else{
        setUsername("")
      }
    });

  },[])

  return (
    <>
     <BrowserRouter>
     <Navbar cart={cartData} userName={username}/>
      <Routes>
      
          <Route path="/" element={<Home  addTOCart={addTOCart} />} />
          <Route path="/cart" element={<Cart cart={cartData} incHandler={incHandler} decHandler={decHandler} handleRemove={handleRemove} getTotal={getTotal} userName={username} />}  />
          <Route path="/AllProduct"  element={<AllProduct addTOCart={addTOCart} />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signUp" element={<Signup/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />

         
      
      </Routes>
      <Toaster />
      <Footer/>

    </BrowserRouter>
   
    </>
  )
}

export default App
