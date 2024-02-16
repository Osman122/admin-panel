import { useNavigate } from 'react-router-dom';
import './index.css'
export default function ResturantCard (props) {
  const navigate = useNavigate()
  const showMovieDetails = (id) => {
    navigate(`/resturant/${id}`)
  }
    const {resturant} = props

    return(  <div
        className="card my-2  p-3 col-lg-5 col-md-12    "
        style={{maxWidth: "800px", maxHeight:"330px" ,justifyContent:"space-between" }}>
        <div className="row g-0 ">
          <div style={{alignItems: "center", maxHeight:"250px"}} className="col-md-4">
            <img onClick={() => showMovieDetails(resturant.id)} src={resturant.image} className="card-img-top col-4 mb-2" alt="..." 
            style={{maxHeight:"260px"}}/>
           
          </div>
          <div className="col-12 col-md-6 ms-5 " >
            <div className="card-body">
              <h3 className="card-title  fw-bolder" onClick={() => showMovieDetails(resturant.id)}>{resturant.name}</h3>
              <h5 className='text-muted'>{resturant.id}</h5>
              </div>
              <p class="card-text p-1" style={{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>
              {resturant.address}
              </p>
              </div>
            </div>
   </div>
    )
}