import { useState } from 'react';
import './App.css';
import Layout from './router/layout';
import { BrowserRouter } from "react-router-dom";
import Theme from './context/Theme';
import { LanguageContext } from './context/language';
import ScrollBnt from './components/scrollbtn/scrol-btn';


function App() {
  const [contextLang, setContextLang] = useState("en");
  const [theme, setContextTheme] = useState("white");

  return (
    <BrowserRouter >
{/* ${theme==="dark" ? "bg-secondary" : " "} */}
       <div   className={`${contextLang === "ar" ? "text-right " : "text-left "} `}
       style={theme==="dark"?{backgroundColor:"#3b444c" ,color:"white" ,textDecorationColor:"white"}:{backgroundColor:"#F2F5FA" ,color:"black"}}
        dir={contextLang === "ar" ? "rtl" : "ltr"}>
        <Theme.Provider value={{theme , setContextTheme}}>
        <LanguageContext.Provider value={{ contextLang, setContextLang }}>
    

  
  
 <Layout/>
 </LanguageContext.Provider>
      </Theme.Provider>
      
  </div>
  
  </BrowserRouter>
  
 
  );
}

export default App;
