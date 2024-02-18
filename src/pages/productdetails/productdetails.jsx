import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../api/config";
import MapContainer from "../../components/mapview";
import { Breadcrumb, Button, Modal, Popconfirm, Table, message } from "antd";
import { t } from "i18next";

function ProductDetails() {
  const [modalProduct, setmodal] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const handleDelete = async (productId) => {
    axiosInstance.delete(`https://academy-training.appssquare.com/api/products/${productId}`)
    .then((response)=>{
     console.log(response.data.message)
     getData();
     message.success('Product deleted successfully');
    }).catch((error)=>{
     console.log(error)
    })
     
  };
    const columns = [
        {
          title: 'Image',
          key: 'image',
          render: (text, record) => (
              <img src={record.image} alt={record.name} style={{ width: '50px', height: '50px' }} />
          ),
      },
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },{
          title: 'Quantity',
          dataIndex: 'quantity',
          key: 'quantity',
        } ,{
          title: 'Resturant_Id',
          dataIndex: "restaurant_id",
          key: 'restaurant_id',
        },{
          title: 'Show product',
          key: 'action',
          render: (text, record) => (
              <Button
            type="primary"
                 color="blue"              
                  onClick={() => {
                      setmodal(record);
                      setModalVisible(true);
                  }}
              >Show Product</Button>
          ),
      },
        {
          title: 'Delete',
          key: 'action',
          render: (text, record) => (
            <Popconfirm
              title="Are you sure to delete this product?"
              onConfirm={() => handleDelete(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button  danger>
                Delete
              </Button>
            </Popconfirm>
          ),
        },
      ];
    const { id } = useParams();
    const [restaurant, setRestauranr] = useState(null);
    const getData = async () => {
        const res = await axiosInstance.get(`https://academy-training.appssquare.com/api/restaurants/${id}`).catch((err) => console.log(err));
        setRestauranr(res.data.data);
        
        
      }
      useEffect(() => {
        getData()
      }, []);
    return  <div>
           <div className="my-2">
     <h6 className='fw-bold'>Welcome to addmin panel </h6>
     <Breadcrumb className="">
        <Breadcrumb.Item>{t("Dashboard")}</Breadcrumb.Item>
        <Breadcrumb.Item>{t("Resturants")}</Breadcrumb.Item>
        <Breadcrumb.Item>{t(id)}</Breadcrumb.Item>


  </Breadcrumb>
       </div>
        {restaurant?
    
         <div dir="ltr" className="container">
            <div className="row py-5 ">
                <div className="col-md-6">
                    <img src={restaurant.image} alt={restaurant.name} className="img-fluid" />
                </div>
                <div className="col-md-6 ">
                    <h2>{restaurant.name}</h2>
                    <p><strong>ID:</strong> {restaurant.id}</p>
                    <p><strong>Address:</strong> {restaurant.address}</p>
                    <p><strong>lat:</strong> {restaurant.restaurant_lat}.     .<strong>Long:</strong> {restaurant.restaurant_long}</p>
         <div className="me-5 pe-5">
            <h1>Google Map View</h1>
            <MapContainer latitude={restaurant.restaurant_lat} longitude={restaurant.restaurant_long} />
        </div>
                </div>
            </div>
            <div className="p-5"
            dir="ltr"> 
    <h4 className="fw-bolder text-center">Restaurant Products</h4>
            <Table 
            
                
                columns={columns}
                dataSource={restaurant.products}
                pagination={false} // Disable table pagination
                
            />
            <Modal
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                <img src={modalProduct.image} alt="Product" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
                <h5><strong>productName:-</strong> {modalProduct.name}</h5>
                <h5><strong>producPrice:-</strong> {modalProduct.price}</h5>
            </Modal>

            </div>
       
        </div> :<></>}
 </div>
 
 }

export default ProductDetails;