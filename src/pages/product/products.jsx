import { Breadcrumb, Button, Form, Input, Modal, Pagination, Popconfirm, Table, message } from "antd";
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../../api/config";
import Theme from "../../context/Theme";
import { DeleteOutlined,EyeOutlined  } from '@ant-design/icons';


const Products = () => { 
  const {t} =useTranslation()

  const [modalProduct, setmodal] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [addmodalVisible, setAddModalVisible] = useState(false);
  const {theme} = useContext(Theme)
  const [form] = Form.useForm();

  
  const columns = [
    {
      title: `${t('Image')}`,
      key: 'image',
      render: (text, record) => (
          <img src={record.image} alt={record.name} style={{ width: '50px', height: '50px' }} />
      ),
  },
    {
      title: t('Id'),
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: t('Name'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('Price'),
      dataIndex: 'price',
      key: 'price',
    },{
      title: t('Quantity'),
      dataIndex: 'quantity',
      key: 'quantity',
    } ,{
      title: t('Resturant_Id'),
      dataIndex: "restaurant_id",
      key: 'restaurant_id',
    },{
      title: t('Show Product'),
      key: 'action',
      render: (text, record) => (
          <Button
            
             icon={<EyeOutlined />}             
              onClick={() => {
                  setmodal(record);
                  setModalVisible(true);
              }}
          >{t("Show Product")}</Button>
      ),
  },
    {
      title: t('Delete'),
      key: 'action',
      render: (text, record) => (
        <Popconfirm
          title="Are you sure to delete this product?"
          onConfirm={() => handleDelete(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button 
          danger
          icon={<DeleteOutlined />}>
            {t("Delete")}
          </Button>
        </Popconfirm>
      ),
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKey, setSearchKey] = useState("");

  const [totalPages, setTotalPages] = useState(0);
  const [productData, setProductData] = useState([]);

  const productsPerPage = 10; // Number of products per page

  
    

  const fetchProductData = async () => {
      
        axiosInstance.get(`/api/products?skip=${(currentPage - 1) * productsPerPage}&search=${searchKey}`)
        .then((res)=>{
          setProductData(res.data.data);
          setTotalPages(Math.ceil(res.data.count / productsPerPage));
      }).catch((error) => {
        console.log(error)
      })}


  const handlePaginationChange = (page) => {
    setCurrentPage(page);
};

const handleDelete = async (productId) => {
  axiosInstance.delete(`https://academy-training.appssquare.com/api/products/${productId}`)
  .then((response)=>{
   console.log(response.data.message)
   fetchProductData();
   message.success('Product deleted successfully');
  }).catch((error)=>{
   console.log(error)
  })
   
};
 const handleAddProduct = async (values) => {
  axiosInstance.post(`https://academy-training.appssquare.com/api/products`,values)
  .then((response)=>{
    console.log(response.data.message)
    fetchProductData();
    message.success('Product added successfully');
    setAddModalVisible(false)
   }).catch((error)=>{
    console.log(error)
   })

 }
  useEffect(() => {
        fetchProductData();
    }, [currentPage,searchKey]);     //Fetch data when currentPage changes

    return (
     
         <div className="w-w-auto"
      dir="">
      
        <h6 className='fw-bold'>{t("Welcome to addmin panel")} </h6>
    <nav aria-label="breadcrumb" className=''>
     </nav>
  <Breadcrumb>
        <Breadcrumb.Item>{t("Dashboard")}</Breadcrumb.Item>
        <Breadcrumb.Item>{t("Products")}</Breadcrumb.Item>


  </Breadcrumb>
  {/* <div style={{textAlign:"center" ,display:"flex" ,flex:"1",height:"100vh" ,justifyContent:"center", }}>
      
        
        <h3> about us </h3>
        <div>
            <h1>Google Map Example</h1>
            <MapContainer latitude={latitude} longitude={longitude} />
        </div>
        </div> */}

<div className="text-center p-lg-5 justify-content-center w-100" >
<div className={` bg-${theme} rounded p-lg-5 mb-lg-5 lh-lg   `}>
        <h1>{t("Welcome to our resturants app")}</h1>
        <p>{t("Enter product Name to find.")}</p>
        <div className="d-flex ">
            <input onChange={(event)=>{setSearchKey(event.target.value)
                                       setCurrentPage(1)}} 
                                       type="search"  className="form-control rounded vw-75 me-5" placeholder={t("Search and explore")} aria-label="Search" aria-describedby="search-addon" />
            {/* <Button className="bg-primary" style={{width: '150px'}} variant="primary" onClick={(event) => {
              
              fetchProductData();
            }}>Search</Button>{' '} */}
            
        </div>
        <div className="d-flex pt-4 justify-content-center">
              {/* <h3 className="mx-lg-4">{t("Add new Product from here")}</h3> */}
              <Button className="mt-1" type="primary" onClick={() => setAddModalVisible(true)}>
                {t("Add Product")}
            </Button>
            </div>
        </div>

<div
  dir=""> 
    
            <Table className="colorBgSpotlight"
            
                
                style={{backgroundColor:"red", color:"black"}}
                columns={columns}
                dataSource={productData}
                pagination={false} // Disable table pagination
                scroll={{
                  x: 1000,
                  
                }}
                
            />
            <Pagination
                current={currentPage}
                total={totalPages * productsPerPage}
                pageSize={productsPerPage}
                onChange={handlePaginationChange}
                showSizeChanger={false}
            />
        </div>
        <Modal
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                <img src={modalProduct.image} alt="Product" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
                <h5><strong>productName:-</strong> {modalProduct.name}</h5>
                <h5><strong>producPrice:-</strong> {modalProduct.price}</h5>
            </Modal>

             <Modal
                title="Add New Product"
                visible={addmodalVisible}
                onCancel={() => {
                    setAddModalVisible(false);
                    form.resetFields(); // Reset form fields if modal is closed
                }}
                onOk={() => {
                    form.validateFields().then((values) => {
                        handleAddProduct(values);
                        console.log(values)
                    });
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleAddProduct}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter the product name' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please enter the product price' }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item
                        label="Quantity"
                        name="quantity"
                        rules={[{ required: true, message: 'Please enter the product quantity' }]}
                    >
                        <Input type="number" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
        
        </div>
      

    )
  }
  
  export default Products ;