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
  <div className='main-container container-fluid'>
    
    <div style={{paddingBottom:"10px"}}
      dir="">
      
        <h6 className='fw-bold'>Welcome to addmin panel </h6>
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
        <h1 className="cover-title">Welcome to My Website</h1>
        <p className="cover-description">This is a sample moderation of your buisness.</p>
      </div>
    </div>
    </div>
    
    <div class="container py-4">
    <div class="row py-4">
        <div class="col-md-4 my-3">
            <div class="card light-theme">
                <div class="card-body">
                    <h5 class="card-title">Total Users</h5>
                    <p class="card-text statistic">1,234</p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 my-3 ">
            <div class="card dark-theme bg-dark">
                <div class="card-body">
                    <h5 class="card-title statistic">Total Orders</h5>
                    <p class="card-text statistic">567</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 my-3">
            <div class="card light-theme">
                <div class="card-body">
                    <h5 class="card-title">Total Users</h5>
                    <p class="card-text statistic">1,234</p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 my-3 ">
            <div class="card dark-theme bg-dark">
                <div class="card-body">
                    <h5 class="card-title statistic">Total Orders</h5>
                    <p class="card-text statistic">567</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 my-3">
            <div class="card light-theme">
                <div class="card-body">
                    <h5 class="card-title">Total Users</h5>
                    <p class="card-text statistic">1,234</p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 my-3 ">
            <div class="card dark-theme bg-dark">
                <div class="card-body">
                    <h5 class="card-title statistic">Total Orders</h5>
                    <p class="card-text statistic">567</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 my-3">
            <div class="card light-theme">
                <div class="card-body">
                    <h5 class="card-title">Total Users</h5>
                    <p class="card-text statistic">1,234</p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 my-3 ">
            <div class="card dark-theme bg-dark">
                <div class="card-body">
                    <h5 class="card-title statistic">Total Orders</h5>
                    <p class="card-text statistic">567</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 my-3">
            <div class="card light-theme">
                <div class="card-body">
                    <h5 class="card-title">Total Users</h5>
                    <p class="card-text statistic">1,234</p>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 my-3 ">
            <div class="card dark-theme bg-dark">
                <div class="card-body">
                    <h5 class="card-title statistic">Total Orders</h5>
                    <p class="card-text statistic">567</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 my-3">
            <div class="card light-theme">
                <div class="card-body">
                    <h5 class="card-title">Total Users</h5>
                    <p class="card-text statistic">1,234</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 my-3">
            <div class="card dark-theme">
                <div class="card-body">
                    <h5 class="card-title">Total Orders</h5>
                    <p class="card-text stat">567</p>
                </div>
            </div>
        </div>

        </div>
        </div>

    
    </div> ) }
  
  export default Home;