import { useState } from 'react';
import './App.css';
import Layout from './router/layout';
import { BrowserRouter } from "react-router-dom";
import Theme from './context/Theme';
import { LanguageContext } from './context/language';


function App() {
  const [contextLang, setContextLang] = useState("ar");
  const [theme, setContextTheme] = useState("dark");

  return (
    <BrowserRouter >

       <div   className={`${contextLang === "ar" ? "text-right " : "text-left "} ${theme==="dark" ? "bg-dark" : " "}`}
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
