import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { auth } from '../../firebase/firebaseAuth';
import toast from 'react-hot-toast';
import { getAuth, signOut } from "firebase/auth";
function Navbar({cart ,userName}) {
 

  const handleLogout = async() => {
   
const auth = getAuth();
signOut(auth).then(() => {
  toast.success("logOut successfully")
}).catch((error) => {
  toast.error(error);

});


 }
  return (
   <>
<nav className="navbar navbar-expand-lg  mb-5 bg-body-tertiary fixed-top">
  <div className="container-fluid">
 
  <Link className="navbar-brand" to="#">Fashion<b className='text-danger'>Cart</b></Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
  <ul className="navbar-nav  mb-2 mb-lg-0 ">
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link " aria-current="page" to="/AllProduct">All Product</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link " aria-current="page" to="/contact">Contact Us</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link " aria-current="page" to="/about">About us</Link>
    </li>
   

   {userName? <li className="nav-item">
      <p className='nav-link'><i className="fa-solid fa-user"></i> {userName}</p>
    </li>:""}
  
  </ul>
</div>

<form className="d-flex" role="search">
  <Link className="nav-link me-4 fs-2 position-relative" aria-current="page" to="/cart">
    <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6 mt-2'>
      {cart.length}
    </span>
    <FaCartShopping />
  </Link>

  

  </form>
  {userName?<button className="btn btn-outline-success"  onClick={handleLogout}>Logout</button>:
  <Link to="/login"><button className="btn btn-outline-success" type="submit">Login</button></Link>
}


{/* <form className="d-flex" role="search">
  <Link className="nav-link me-4 fs-2" aria-current="page" to="/cart"><span className=' position-absolute text-danger fs-5'>{cart.length}</span><FaCartShopping /></Link>
  <Link to="/login"><button className="btn btn-outline-success" type="submit">Login</button></Link>
</form> */}
  </div>
</nav>

   
   </>
  )
}

export default Navbar