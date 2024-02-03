import React, { Suspense ,useState,useEffect} from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import Notfound from '../pages/notFound';
import SideBar from '../components/side-par/sideBar';
import NavBar from '../components/nav-bar/nav-bar';
import Users from '../pages/users/Users';



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
        <div className="mt-0 mx-0 w-100" >
          <NavBar toggleSidebar={toggleSidebar}/>
        
        
        
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
    

  );
};

export default Layout;