import './index.css';
import { LanguageContext } from '../../context/language';

import Theme from '../../context/Theme';


import  {useContext} from 'react';
import { useTranslation } from 'react-i18next';



const NavBar= ({ toggleSidebar }) => {
  const {contextLang, setContextLang} = useContext(LanguageContext);
  const {theme , setContextTheme} = useContext(Theme);
  const { t, i18n } = useTranslation();

    return (
        <nav className={`justify-content-between d-flex navbar py-4 px-2 z-3 sticky-top  navbar-${theme} py-2  w-100 bg-${theme}`} >
          <div className=" ">
          
            <i onClick={toggleSidebar} className={`bi bi-list nav-item d-none d-sm-block d-md-block ${theme === 'dark' ?'text-light ':""}`}></i>
            
          </div>
          
     
     
      
        
        <div className='d-flex me-5'>
          <div class="nav-item mx-4  ">
            <button onClick={(e)=>{if (contextLang === "ar") {
                                setContextLang("en")
                                 console.log(contextLang)
                                 i18n.changeLanguage("en")
                              } else {
                                setContextLang("ar")
                                console.log(contextLang)
                                i18n.changeLanguage("ar")
                              }}} class="nav-link" href="#"><i class="bi bi-globe "></i> {contextLang}</button>
          </div>
          <div class="nav-item mx-4">
            <button onClick={(e)=>{if (theme === "white") {
                                setContextTheme("dark")
                                 console.log(theme)
                              } else {
                                setContextTheme("white")
                                console.log(theme)
                              }}} class="nav-link" href="#"><i class="bi bi-palette "></i> {theme}</button>
          </div>
        
          </div>
    
        </nav>
        
      );
    };

export default NavBar;