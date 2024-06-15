import React, { useEffect, useState } from 'react'

import "./AllProduct.scss"

import axios from 'axios';



function AllProduct({addTOCart }) {


  let [searchItem,setSearchItem]=useState("");

  let  [allProduct,setAllProduct]=useState([]);
  let [minValue,setMinValue]=useState("");
  let [maxValue,setMaxValue]=useState("");
  let  [allCatogries,setallCatogries]=useState([]);
  const [selectedCategory, setSelectedCategory] = useState('smartphones');



  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
   
  };
  useEffect(() => {
    document.title = 'All Product';
  }, []);
  
useEffect(()=>{
  let getData=async()=>{
    try{
    let catogries=await axios("https://dummyjson.com/products/categories")
    
    setallCatogries(catogries.data); 
  
  }catch(error){
  console.log("Error in console"); 
}
  }
getData();
},[])
// .................all product..........
useEffect(()=>{
  
  let getProduct=async()=>{
   
    try{
   
        const productDetails=await axios(`https://dummyjson.com/products/category/${selectedCategory}`)
        
        setAllProduct(productDetails.data.products);
  }catch(error){
  console.log(error); 
}

  }
getProduct();
},[selectedCategory])


 
  // .....send Data to App.js file.........
  const sendData = (product) => {
    addTOCart(product)
  };

  const handleSeach=()=>{
        const searchfilter=allProduct.filter((searchitem)=>
        searchitem.title.toLowerCase().includes(searchItem.toLowerCase())

        );
        setAllProduct(searchfilter);
  }

  const priceSeach=()=>{
    let min=parseFloat(minValue);
    let max=parseFloat(maxValue);
    const pricefilter=allProduct.filter((searchitem)=>(!min|| searchitem.price >=min)&&(!max|| searchitem.price <=max)
    );
    setAllProduct(pricefilter);
  }



  return (
   
   
    <div className="container-fluid mt-5 pt-5 ">
      <div className="row my-4 justify-content-center">
        <div className="col-12 col-md-6">

    <select  className='text-center  bg-danger text-white form-control' onChange={handleChange} value={selectedCategory} >
        {allCatogries.map((item,index)=>
   (
    <option  key={index} value={item.slug} >{item.name}</option>
   
   ))}
    
    </select>
      
        </div>
      </div>
    
      <div className="row  justify-content-center bg-primary py-4 ">
        <div className="col-md-5 text-center py-4 col-12 d-flex">
          <input type="text" className=' form-control '  placeholder="Search Here" onChange={(e)=>setSearchItem(e.target.value)}  value={searchItem}/>&nbsp;
          <button className='border  btn btn-danger border-danger' onClick={handleSeach}>Search</button>
        </div>
     
      </div>

<div className="row justify-content-center bg-primary pb-4 mb-4">
  <div className="col-md-6 col-12 d-flex">
    <input type="text" className='form-control' placeholder='minimum' value={minValue} onChange={(e)=>setMinValue(e.target.value)} />&nbsp;
    <input type="text" className='form-control' placeholder='maximum'  value={maxValue} onChange={(e)=>setMaxValue(e.target.value)} />&nbsp;
    <button className='btn btn-danger' onClick={priceSeach}>Search</button>
  </div>
  {/* <div className="col-md-3 col-3"><input type="text" className='form-control' placeholder='maximum'  value={maxValue} onChange={(e)=>setMaxValue(e.target.value)} /></div>
  <div className="col-md-3 col-3"><button className='btn btn-danger' onClick={priceSeach}>Search</button></div> */}
</div>

      <div className="row justify-content-center">
      {allProduct.map((pd,index)=>
   (
    <div className="col-md-3 col-12 col-sm-6" key={index}>

    <div className="card my-2 shadow">
    <img src={pd.thumbnail} className="card-img-top" alt="not found"/>
    <div className="card-body">
      <p className="card-text"><b>Titile:</b> {pd.title}</p>
      <p className="card-text"><b>description :</b>{pd.description.slice(0,30)}</p>
      <p className="card-text"><b>price :</b>{pd.price} INR</p>
      <div className="row">
        <div className="col-md-6 col-6"> <span className="card-text"><b>rating:</b> &nbsp;{ Math.floor(pd.rating)}</span></div>
        <div className="col-md-12 m-2 col-12"><button className='btn form-control btn-primary' onClick={()=>sendData(pd)}>Add to cart</button></div>
      </div>

    
    </div>
  </div>
    </div>
      ))}
      </div>
    </div>
    
  

   
   
  )
}

export default AllProduct