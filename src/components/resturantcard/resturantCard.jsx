import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import {Theme} from '../../context/Theme.js'
import './index.css'
import { t } from "i18next";
export default function ResturantCard (props) {
  const navigate = useNavigate()
  const showMovieDetails = (id) => {
    navigate(`/resturant/${id}`)
  }
    const {resturant} = props
    const {theme} = useContext(Theme)

    return(  <div
        className={`card my-2  p-3 col-sm-12 col-lg-5 col-md-12  card-light ${theme==="dark" ? "bg-dark text-light border-light ":""}`}
        style={{maxWidth: "800px", maxHeight:"330px" ,justifyContent:"space-between" }}>
        <div className="row g-0 ">
          <div style={{alignItems: "center", maxHeight:"250px"}} className="col-md-6 col-sm-12">
            <img onClick={() => showMovieDetails(resturant.id)} src={resturant.image} className="card-img-top col-4 mb-2" alt="..." 
            style={{maxHeight:"260px"}}/>
           
          </div>
          <div className="col-12 col-md-6 col-sm-6" >
            <div className="card-body">
              <h3 className="card-title  fw-bolder text-center" onClick={() => showMovieDetails(resturant.id)}>{resturant.name}</h3>
              <br />
              </div>
              
               <p class="card-text p-1 text-center" >
               <strong>Adress :</strong> 
              {resturant.address}
              </p>
              </div>
            </div> 
                         <button  className ="mt-lg-3 mx-lg-4 btn btn-primary " onClick={() => showMovieDetails(resturant.id)}> {t("Show details")}</button>

   </div>
    )
}