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
import HomePageTemplate from '../pages/homeTemplate/homeTemplate';
import SignUp from '../pages/registration/signup';
import LoginPage from '../pages/registration/login';
import  Resturants  from "../pages/resturants/resturants";



const Layout = () => {
   return(
    <Suspense fallback={<>loading</>}>
        
         <Routes>
         <Route path="/login" element={<LoginPage/>} /> 
         <Route path="/signup" element={<SignUp/>} /> 
           <Route path='' element={<HomePageTemplate/>}>

            <Route path="/"  element={<Home/>} />
            <Route path="/Resturants"  element={<Resturants/>} />


            <Route path="/about" element={<About/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="*" element={<Notfound/>}/>
           </Route>
         
         
        
          </Routes>
        
     </Suspense>
)}

export default Layout;