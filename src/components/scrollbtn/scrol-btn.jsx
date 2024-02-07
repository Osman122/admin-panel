import { useContext, useState } from "react";
import "./inxex.css"
import { LanguageContext } from "../../context/language";
 const ScrollBnt = () => {
    const {contextLang} = useContext(LanguageContext);

    
        const [isVisible, setIsVisible] = useState(false);
      
        // Show/hide the button based on scroll position
        window.onscroll = () => {
            if (window.pageYOffset > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
      
        // Scroll to the top of the page
        const scrollToTop = () => {
          
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
            
          });
        setIsVisible(false);};
      
        return (
          <button id="myBt"
            style={contextLang === "en" ? {right:"20px"}:{left:"20px"}}
            className={`scroll-up-button ${isVisible ? 'show' : ''}`}
            onClick={scrollToTop}
          >
            <i class="bi bi-chevron-double-up"></i>
          </button>
        );
      };


export default ScrollBnt;