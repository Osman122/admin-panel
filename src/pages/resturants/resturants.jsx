import { axiosInstance } from "../../api/config.js"
import { useEffect, useState,useContext} from "react"
import {LanguageContext} from '../../context/language.js';
import { useTranslation } from "react-i18next";

import { Breadcrumb } from "antd";

import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import ResturantCard from "../../components/resturantcard/resturantCard.jsx";

export default function Resturants () {
    const [ resturantList, setResturantList ] = useState([])
    const {lang} = useContext(LanguageContext)
    const navigate = useNavigate()
    const {t}= useTranslation()

    useEffect(()=>{
        axiosInstance.get(`api/restaurants?skip=0&search&id`)
        .then((res)=>{
            setResturantList(res.data.data)
            console.log(resturantList)
            console.log(resturantList.length)
        }).catch((error) => {
            console.log(error)
    })},[lang])

    return <div>
     <div className="my-2">
     <h6 className='fw-bold'>Welcome to addmin panel </h6>
     <Breadcrumb>
        <Breadcrumb.Item>{t("Dashboard")}</Breadcrumb.Item>
        <Breadcrumb.Item>{t("Users")}</Breadcrumb.Item>


  </Breadcrumb>
  </div>
        {resturantList.length ? (<>
    <div className="bg-white rounded p-5 mb-5 lh-lg">
        <h1>Welcome to our resturants app</h1>
        <p>Millions of Place and to explore.</p>
        <div className="d-flex">
            <input type="search"  className="form-control rounded vw-75 me-5" placeholder="Search and explore" aria-label="Search" aria-describedby="search-addon" />
            <Button className="bg-primary" style={{width: '150px'}} variant="primary" onClick={(event) => {
                navigate(`/search/${event.target.previousElementSibling.value}`)
            }}>Search</Button>{' '}
        </div>
        
    </div>
    <div className="row justify-content-around">
       {resturantList.map((resturant) => {
        
           return <ResturantCard resturant={resturant}/>
       })}
    </div></>):<>
    
    </>}
    
</div>
}