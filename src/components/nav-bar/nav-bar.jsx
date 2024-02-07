import './index.css';
import { LanguageContext } from '../../context/language';

import Theme from '../../context/Theme';


import  {useContext} from 'react';


const NavBar= ({ toggleSidebar }) => {
  const {contextLang, setContextLang} = useContext(LanguageContext);
  const {theme , setContextTheme} = useContext(Theme);
    return (
        <nav className={`navbar navbar-expand-lg navbar-${theme} py-2`}>
          <div className="container-fluid ">
          
            <i onClick={toggleSidebar} className="bi bi-list nav-item"></i>
            
          </div>
          <div class="container">
     
     
      <div class="collapse navbar-collapse" id="navbarNav">
        
        <ul class="navbar-nav mx-auto">
          <li class="nav-item mx-4">
            <button onClick={(e)=>{if (contextLang === "ar") {
                                setContextLang("en")
                                 console.log(contextLang)
                              } else {
                                setContextLang("ar")
                                console.log(contextLang)
                              }}} class="nav-link" href="#"><i class="bi bi-globe "></i> {contextLang}</button>
          </li>
          <li class="nav-item mx-4">
            <button onClick={(e)=>{if (theme === "light") {
                                setContextTheme("dark")
                                 console.log(theme)
                              } else {
                                setContextTheme("light")
                                console.log(theme)
                              }}} class="nav-link" href="#"><i class="bi bi-palette "></i> {theme}</button>
          </li>
        </ul>
      </div>
    </div>
        </nav>
        
      );
    };

export default NavBar;