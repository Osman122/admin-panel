import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

const Sidebar = ({ open }) => {
  
  
  

  return (
    <nav className={`bg-dark sidebar parent `}
    style={open?{width:"300px",height: '100vh' ,transition: 'width 0.5s ease',overflowy:"auto"} : { width:"65px",overflowy:"auto" ,height: '100vh' ,transition: 'width 0.3s ease'}}>
    
      <div className="sidebar-sticky " style={{ overflowy:"auto",overflowx:"auto"}}>
       
        <div className='mx-4 d-flex my-2  ' style={{position:"relative"}}>
        <img   className={`${!open?"logo":""}`}  src="https://www.spruko.com/demo/dashlot/dist/assets/images/brand-logos/toggle-dark.png" alt="" 
        style={open?{width:"44px"}:{width:"40px" ,marginLeft:"0px",justifyContent: 'center', alignItems: 'center'}}/>
        {open? <h5 className="text-light mt-3">Dashboard</h5>:<></>}
        
      </div>

        <ul className="nav flex-column ">
        <li className={` dee ${!open?"d-flex":"rounded  "}`} >
                                <a
                                    href="/"
                                    className="nav-link active d-flex p-3"
                                >
                                <span className={`border border-1 border-light rounded  d-flex text-center ${open?"mx-3":""}`}  
                                style={{ width:"28px",height:"28px",rotate:"-45deg", position:"relative"}}> 
                                <i className=" mx-auto text-light   bi bi-house " style={{rotate:"45deg", position:"abdolute",top:"50%",left:"50%"}}></i>
                                </span>

                                 {open? <span className="text-light">Home</span>:<></>}
                                </a>
                            </li>
        
                            <li className={` dee ${!open?"d-flex":""}`} >
                                <a
                                    href="/about"
                                    className="nav-link active d-flex p-3 "
                                >
                                <span className={`border border-1 border-light rounded  d-flex text-center ${open?"mx-3":""}`}  
                                style={{ width:"28px",height:"28px",rotate:"-45deg", position:"relative"}}> 
                                <i className=" mx-auto text-light   bi bi-body-text " style={{rotate:"45deg", position:"abdolute",top:"50%",left:"50%"}}></i>
                                </span>

                                 {open? <span className="text-light">About</span>:<></>}
                                </a>
                            </li>
                            <li className={` dee ${!open?"d-flex":""}`} >
                                <a
                                    href="/users"
                                    className="nav-link active d-flex p-3"
                                >
                                <span className={`border border-1 border-light rounded  d-flex text-center ${open?"mx-3":""}`}  
                                style={{ width:"28px",height:"28px",rotate:"-45deg", position:"relative"}}> 
                                <i className=" mx-auto text-light   bi bi-people " style={{rotate:"45deg", position:"abdolute",top:"50%",left:"50%"}}></i>
                                </span>

                                 {open? <span className="text-light">Users</span>:<></>}
                                </a>
                            </li>


                        


          {/* Add more sidebar items */}
        </ul>
       
      </div>

       <div className="bottom-div ">
         <hr className='text-light text-center'/>
         
       <ul className="nav flex-column d-flex  ">
             
        
        <li className={` dee rounded  ${!open?"d-flex":"rounded "}`} >
            <a
                href="/"
                className="nav-link active d-flex p-3 "
            >
            <span className={`border border-1 border-light rounded  d-flex text-center ${open?"mx-3":""}`}  
            style={{ width:"28px",height:"28px",rotate:"-45deg", position:"relative"}}> 

            <i className=" mx-auto text-light   bi bi-door-open-fill" style={{rotate:"45deg", position:"abdolute",top:"50%",left:"50%"}}></i>
            </span>

             {open? <span className="text-light">logout</span>:<></>}
            </a>
        </li>
        <li className={`  ${!open?"":""}`} >
            <a
                href="/aa"
                className="nav-link active d-flex p-3"
            >
            <span className={`border border-1 border-light rounded  d-flex text-center ${open?"mx-3":""}`}  
            style={{ width:"28px",height:"28px",rotate:"-45deg", position:"relative"}}> 

            <i className=" mx-auto text-light   bi bi-file-person" style={{rotate:"45deg", position:"abdolute",top:"50%",left:"50%"}}></i>
            </span>

             {open? <span className="text-light">profile</span>:<></>}
            </a>
        </li> 
       </ul>
          </div>
    </nav>

    
      


  );
};

export default Sidebar;