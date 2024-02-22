import { Breadcrumb } from 'antd';
import coverImage from'../../background/th.jpg'
import { useTranslation } from 'react-i18next';
import "./index.css"
import { useContext } from 'react';
import Theme from '../../context/Theme';
const Home = () => {
  const {theme } = useContext(Theme);
  
  const { t } = useTranslation();
  return(
  <div className='main-container container-fluid w-100'>
    
    <div style={{paddingBottom:"10px"}}
      dir="">
      
        <h6 className='fw-bold'>{t("Welcome to addmin panel")}</h6>
    <nav aria-label="breadcrumb" className=''>
     </nav>
  <Breadcrumb>
        <Breadcrumb.Item>{t("Dashboard")}</Breadcrumb.Item>
        <Breadcrumb.Item>{t("Home")}</Breadcrumb.Item>


  </Breadcrumb>
  </div>

    <div style={{textAlign:"center" ,height:"100%" ,justifyContent:"center", padding:"0px"}}>
    <div className="cover-container">
      <img src={coverImage} alt="Cover" className="cover-image" style={theme==="dark"?{filter:"brightness(50%)"}:{}}/>
      <div className="cover-overlay"></div> {/* Add a semi-transparent overlay to enhance the image */}
      <div className="cover-content">
        {/* Add any additional content here */}
        <h1 className="cover-title">{t("Welcome to My WebSite")}</h1>
        <p className="cover-description">{t("This is a sample moderation of your buisness.")}</p>
      </div>
    </div>
    </div>
    
    <div class="container py-4">
    <div class="row py-4">
        <div class=" my-3">
            <div class={`card  ${theme==="dark" ? "bg-dark text-light border-light ":""}`}>
                <div class="card-body d-flex justify-content-between text-center mx-4 px-3 my-3">
                    <h3 class="card-title">{t("Total Users")}</h3>
                    <h4 class="card-text statistic py-auto">1,234</h4>
                </div>
            </div>
        </div>
        <div class=" my-3">
            <div class={`card  ${theme==="dark" ? "bg-dark text-light border-light ":""}`}>
                <div class="card-body d-flex justify-content-between text-center mx-4 px-3 my-3">
                    <h3 class="card-title">{t("Total Restaurant")}</h3>
                    <h4 class="card-text statistic py-auto">10</h4>
                </div>
            </div>
        </div>
        <div class=" my-3">
            <div class={`card  ${theme==="dark" ? "bg-dark text-light border-light ":""}`}>
                <div class="card-body d-flex justify-content-between text-center mx-4 px-3 my-3">
                    <h3 class="card-title">{t("Total Orders")}</h3>
                    <h4 class="card-text statistic py-auto">5,2374</h4>
                </div>
            </div>
        </div>
        <div class=" my-3">
            <div class={`card  ${theme==="dark" ? "bg-dark text-light border-light ":""}`}>
                <div class="card-body d-flex justify-content-between text-center mx-4 px-3 my-3">
                    <h3 class="card-title">{t("Total Product")}</h3>
                    <h4 class="card-text statistic py-auto">2,374</h4>
                </div>
            </div>
        </div>
        

        </div>
        </div>

    
    </div> ) }
  
  export default Home;