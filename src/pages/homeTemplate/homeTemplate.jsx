import { Outlet } from "react-router-dom";
import SideBar from "../../components/side-par/sideBar";
import { useContext, useEffect, useState } from "react";
import TokenContext from '../../context/tokenContext';
import { useNavigate } from 'react-router-dom';
import Layout from "../../router/layout";
import NavBar from "../../components/nav-bar/nav-bar";
import ScrollBnt from "../../components/scrollbtn/scrol-btn";

const HomePageTemplate= () => {
    const navigate =useNavigate()
    const [isSidebarOpen, setSidebarOpen] = useState(() => {
      const storedState = localStorage.getItem('sidebarOpen');
      return storedState ? JSON.parse(storedState) : true; // Use true as a default value if no stored state
    });
    
    useEffect(() => {
    
      
      localStorage.setItem('sidebarOpen', JSON.stringify(isSidebarOpen));
    }, [isSidebarOpen]);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
      console.log(isSidebarOpen);
    };
    
    
    return (
      <div className="d-flex mx-0" >
        <SideBar open={isSidebarOpen} />
          <div className="mt-0 w-100" style={isSidebarOpen?{marginInlineStart:"250px",transition: ' 0.5s ease'}:{marginInlineStart:"65px",transition: ' 0.5s ease'}}>
            <NavBar toggleSidebar={toggleSidebar}/>
          <ScrollBnt/>
          
          <div className='mx-3'style={{marginTop:"80px"}} >
          <Outlet />
          </div>
     
          </div>  
     

      {/* {window.onscroll = function() {
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? <ScrollBnt/>:<></>}} */}
 </div>
 

);
};
  export default HomePageTemplate ;