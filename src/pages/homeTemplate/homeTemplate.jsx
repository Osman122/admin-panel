import { Outlet } from "react-router-dom";
import SideBar from "../../components/side-par/sideBar";
import { useContext, useEffect, useState } from "react";
import TokenContext from '../../context/tokenContext';
import { useNavigate } from 'react-router-dom';
import Layout from "../../router/layout";
import NavBar from "../../components/nav-bar/nav-bar";
import ScrollBnt from "../../components/scrollbtn/scrol-btn";
import { useSelector } from "react-redux";

const HomePageTemplate= () => {
 const token = useSelector(state => state.authToken)


    const navigate =useNavigate()
    const [isSidebarOpen, setSidebarOpen] = useState(() => {
      const storedState = localStorage.getItem('sidebarOpen');
      return storedState ? JSON.parse(storedState) : false; // Use true as a default value if no stored state
    });
    
    useEffect(() => {
      if (token !== "")

      {
        console.log("token is "+ token)
        localStorage.setItem('sidebarOpen', JSON.stringify(isSidebarOpen));

      }else{
      navigate("/login")
      console.log("token is"+ token)
      }
    }, [isSidebarOpen,token]);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
      console.log(isSidebarOpen);
    };
    
    
    return (
      <div className="d-flex mx-0" >
        <SideBar open={isSidebarOpen}  />
          <div className={`mt-0 w-100 ${isSidebarOpen?"":""}`} style={isSidebarOpen?{marginInlineStart:"",transition: ' 0.5s ease'}:{marginInlineStart:"",transition: ' 0.5s ease'}}>
            <NavBar toggleSidebar={toggleSidebar}/>
          
          
          <div className='mx-5'style={{marginTop:"80px", marginBottom:"30px"}} >
          <Outlet />
          </div>
          <ScrollBnt/>
          </div>  
     

      {/* {window.onscroll = function() {
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? <ScrollBnt/>:<></>}} */}
 </div>
 

);
};
  export default HomePageTemplate ;