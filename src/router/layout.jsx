import React, { Suspense ,useState,useEffect, useContext} from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import Home from '../pages/home/home';
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
import Products from '../pages/about/products';
import ProductDetails from '../pages/productdetails/productdetails';



const Layout = () => {
   return(
    <Suspense fallback={<>loading</>}>
        
         <Routes>
         <Route path="/login" element={<LoginPage/>} /> 
         <Route path="/signup" element={<SignUp/>} /> 
           <Route path='' element={<HomePageTemplate/>}>

            <Route path="/"  element={<Home/>} />
            <Route path="/Resturants"  element={<Resturants/>} />
            <Route path="/resturant/:id"  element={<ProductDetails/>} />


            <Route path="/products" element={<Products/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="*" element={<Notfound/>}/>
           </Route>
         
         
        
          </Routes>
        
     </Suspense>
)}

export default Layout;