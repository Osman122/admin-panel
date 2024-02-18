import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ open }) => {
const { t } = useTranslation();
  
  
  

  return (
    <nav className={`bg-dark sidebar parent `}
    style={open?{width:"250px",height: '100vh' ,transition: 'width 0.5s ease',overflowy:"auto"} : { width:"65px",overflowy:"auto" ,height: '100vh' ,transition: 'width 0.3s ease'}}>
    
      <div dir='ltr' className="sidebar-sticky " style={{ overflowy:"auto",overflowx:"auto"}}>
       
        <div className='mx-4 d-flex my-2  ' style={{position:"relative"}}>
        <img   className={`${!open?"logo":""}`}  src="https://www.spruko.com/demo/dashlot/dist/assets/images/brand-logos/toggle-dark.png" alt="" 
        style={open?{width:"44px"}:{width:"32px" ,marginLeft:"3px",justifyContent: 'center', alignItems: 'center'}}/>
        {open? <h5 className="text-light mt-3">{t('Dashboard')}</h5>:<></>}
        
      </div>

        <ul className="nav flex-column ">

        <li className={` dee ${!open?"d-flex":"rounded  "}`} >
                              <NavLink  className={" NavLink d-flex p-3"} to={"/"} activeClassName="active" exact> 
                               <span className={`border border-1 border-light rounded  d-flex text-center ${open?"mx-3":""}`}  
                                style={{ width:"28px",height:"28px",rotate:"-45deg", position:"relative"}}> 
                                <i className=" mx-auto text-light   bi bi-house " style={{rotate:"45deg", position:"abdolute",top:"50%",left:"50%"}}></i>
                                </span>

                                 {open? <span className="text-light">{t('Home')}</span>:<></>}</NavLink>
{/*               
                                <a
                                    href="/"
                                    className="nav-link active d-flex p-3"
                                >
                               
                                </a> */}
                            </li>
        
                            <li className={` dee ${!open?"d-flex":""}`} >
                            <NavLink  className={" NavLink d-flex p-3"} to={"/Resturants"} activeClassName="active" exact> 

                                <span className={`border border-1 border-light rounded  d-flex text-center ${open?"mx-3":""}`}  
                                style={{ width:"28px",height:"28px",rotate:"-45deg", position:"relative"}}> 
                                <i className=" mx-auto text-light   bi bi-cup-straw " style={{rotate:"45deg", position:"abdolute",top:"50%",left:"50%"}}></i>
                                </span>

                                 {open? <span className="text-light">{t('Resturants')}</span>:<></>}
                                </NavLink>
                            </li>
                            <li className={` dee ${!open?"d-flex":""}`} >
                            <NavLink  className={" NavLink d-flex p-3"} to={"/products"} activeClassName="active" exact> 

                                <span className={`border border-1 border-light rounded  d-flex text-center ${open?"mx-3":""}`}  
                                style={{ width:"28px",height:"28px",rotate:"-45deg", position:"relative"}}> 
                                <i className=" mx-auto text-light   bi bi-body-text " style={{rotate:"45deg", position:"abdolute",top:"50%",left:"50%"}}></i>
                                </span>

                                 {open? <span className="text-light">{t('Products')}</span>:<></>}
                                </NavLink>
                            </li>
                            <li className={` dee ${!open?"d-flex":""}`} >
                            <NavLink  className={" NavLink d-flex p-3"} to={"/users"} activeClassName="active" exact> 

                                <span className={`border border-1 border-light rounded  d-flex text-center ${open?"mx-3":""}`}  
                                style={{ width:"28px",height:"28px",rotate:"-45deg", position:"relative"}}> 
                                <i className=" mx-auto text-light   bi bi-people " style={{rotate:"45deg", position:"abdolute",top:"50%",left:"50%"}}></i>
                                </span>

                                 {open? <span className="text-light">{t('Users')}</span>:<></>}
                                </NavLink>
                            </li>


                        


          {/* Add more sidebar items */}
        </ul>
       
      </div>

       <div className="bottom-div " dir='ltr'>
         <hr className='text-light text-center'/>
         
       <ul className="nav flex-column d-flex  ">
             
       


        <li className={` dee rounded  ${!open?"d-flex":"rounded "}`} >
        <NavLink  className={" NavLink d-flex p-3"} to={"/login"} activeClassName="active" exact> 

            <span className={`border border-1 border-light rounded  d-flex text-center ${open?"mx-3":""}`}  
            style={{ width:"28px",height:"28px",rotate:"-45deg", position:"relative"}}> 

            <i className=" mx-auto text-light   bi bi-door-open-fill" style={{rotate:"45deg", position:"abdolute",top:"50%",left:"50%"}}></i>
            </span>

             {open? <span className="text-light">{t('LogOut')}</span>:<></>}
            </NavLink>
        </li>
       
       </ul>
          </div>
    </nav>

    
      


  );
};

export default Sidebar;
