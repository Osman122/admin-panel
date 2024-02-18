import { Breadcrumb, Button, Form, Input, Modal, Pagination, Popconfirm, Table, message } from "antd";
import { useTranslation } from "react-i18next";
import MapContainer from "../../components/mapview";
import { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../../api/config";
import Theme from "../../context/Theme";


const Products = () => { 
  const [modalProduct, setmodal] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [addmodalVisible, setAddModalVisible] = useState(false);
  const {theme} = useContext(Theme)
  const [form] = Form.useForm();

  
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
  const [currentPage, setCurrentPage] = useState(1);
  const [searchKey, setSearchKey] = useState("");

  const [totalPages, setTotalPages] = useState(0);
  const [productData, setProductData] = useState([]);

  const productsPerPage = 10; // Number of products per page

  const {t} =useTranslation()
  const latitude = 37.7749;
    const longitude = -122.4194;
    

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
     
         <div style={{}}
      dir="">
      
        <h6 className='fw-bold'>Welcome to addmin panel </h6>
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

<div className="text-center p-5 justify-content-center w-100" >
<div className={` bg-${theme} rounded p-5 mb-5 lh-lg   `}>
        <h1>Welcome to our resturants app</h1>
        <p>Enter product Name to find.</p>
        <div className="d-flex " dir="ltr">
            <input onChange={(event)=>{setSearchKey(event.target.value)
                                       setCurrentPage(1)}} 
                                       type="search"  className="form-control rounded vw-75 me-5" placeholder="Search and explore" aria-label="Search" aria-describedby="search-addon" />
            {/* <Button className="bg-primary" style={{width: '150px'}} variant="primary" onClick={(event) => {
              
              fetchProductData();
            }}>Search</Button>{' '} */}
            
        </div>
        <div className="d-flex pt-4 justify-content-center">
              <h3 className="mx-4">Add new Product from here</h3>
              <Button type="primary" onClick={() => setAddModalVisible(true)}>
                Add Product
            </Button>
            </div>
        </div>

<div
  dir="ltr"> 
    
            <Table className="colorBgSpotlight"
            
                
                style={{backgroundColor:"red", color:"black"}}
                columns={columns}
                dataSource={productData}
                pagination={false} // Disable table pagination
                
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