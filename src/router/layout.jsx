import React, { Suspense ,useState,useEffect, useContext} from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Notfound from '../pages/notFound';
import SideBar from '../components/side-par/sideBar';
import NavBar from '../components/nav-bar/nav-bar';
import Users from '../pages/users/Users';
import Theme from '../context/Theme';
import { LanguageContext } from '../context/language';
import ScrollBnt from '../components/scrollbtn/scrol-btn';



const Layout = () => {
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
    <Suspense fallback={<>loading</>}>
        
        <Routes>
          {/* <Route path="/login" element={<Loginform/>} /> */}
          {/* <Route path='' element={<HomePageTemplate/>}> */}

            <Route path="/"  element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="*" element={<Notfound/>}/>
           {/* </Route> */}
         
         
        
          </Routes>
        
     </Suspense>
     </div>
     
        </div>  
        

         {/* {window.onscroll = function() {
         document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? <ScrollBnt/>:<></>}} */}
    </div>
    

  );
};

export default Layout;