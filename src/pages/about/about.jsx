import { Breadcrumb } from "antd";
import { useTranslation } from "react-i18next";


const About = () => {
  const {t} =useTranslation()
    return (
     
         <div style={{}}
      dir="">
      
        <h6 className='fw-bold'>Welcome to addmin panel </h6>
    <nav aria-label="breadcrumb" className=''>
     </nav>
  <Breadcrumb>
        <Breadcrumb.Item>{t("Dashboard")}</Breadcrumb.Item>
        <Breadcrumb.Item>{t("About")}</Breadcrumb.Item>


  </Breadcrumb>
  <div style={{textAlign:"center" ,display:"flex" ,flex:"1",height:"100vh" ,justifyContent:"center"}}>
      
        
        <h3> about us </h3>
        </div>
        
        </div>
      

    )
  }
  
  export default About ;