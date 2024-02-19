import { axiosInstance } from "../../api/config.js"
import { useEffect, useState,useContext} from "react"
import {LanguageContext} from '../../context/language.js';
import {Theme} from '../../context/Theme.js'
import { useTranslation } from "react-i18next";
import './index.css'

import { Breadcrumb } from "antd";

import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import ResturantCard from "../../components/resturantcard/resturantCard.jsx";

export default function Resturants () {
    const [ resturantList, setResturantList ] = useState([])
    const {lang} = useContext(LanguageContext)
    const {theme} = useContext(Theme)
    const [searchKey,setSearchKey] = useState("")

    const navigate = useNavigate()
    const {t}= useTranslation()

    useEffect(()=>{
        axiosInstance.get(`api/restaurants?skip=0&search=${searchKey}&id`)
        .then((res)=>{
            setResturantList(res.data.data)
            console.log(resturantList)
            console.log(resturantList.length)
        }).catch((error) => {
            console.log(error)
    })},[searchKey])

    return <div> 
     <div className="my-2">
     <h6 className='fw-bold'>{t("Welcome to addmin panel")} </h6>
     <Breadcrumb className="">
        <Breadcrumb.Item>{t("Dashboard")}</Breadcrumb.Item>
        <Breadcrumb.Item>{t("Resturants")}</Breadcrumb.Item>


  </Breadcrumb>
  </div>
        
    <div className={`bg-${theme} rounded p-5 mb-5 lh-lg text-center  `}>
        <h1>{t("Welcome to our resturants app")}</h1>
        <p>{t("Millions of Place and to explore.")}</p>
        <div className="d-flex">
            <input onChange={(event)=>{setSearchKey(event.target.value)}} 
             type="search"  className="form-control rounded vw-75 me-5" placeholder={t("Search and explore")} aria-label="Search" aria-describedby="search-addon" />
            {/* <Button className="bg-primary" style={{width: '150px'}} variant="primary" onClick={(event) => {
                
            }}>Search</Button>{' '} */}
        </div>
        
    </div>
    {resturantList.length  ? (<>
    <div className="row justify-content-around">
       {resturantList.map((resturant) => {
        
           return <ResturantCard resturant={resturant} />
       })}
    </div></>)
    :<>
   {searchKey === ""? <div class="d-flex justify-content-center  "style={{height:"100vh"}} >
  <div class="spinner-border" role="status">
    <span class="sr-only"></span>
  </div>
</div>:<div className="d-flex justify-content-center  "style={{height:"100vh"}}><h3>
    {t("there is no resturant with name contain..")} {searchKey}</h3> </div>}
    </>}
    
</div>
}