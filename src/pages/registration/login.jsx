import React, { useEffect, useState } from 'react';
import backgroundImage from '../../background/397493-food-fruit.jpg'; // Import your background image
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import "./index.css"
import { useDispatch, useSelector } from 'react-redux';
import { setAuthToken } from '../../store/reducer';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../api/config';
import { ToastContainer, toast } from 'react-toastify';

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const LoginPage = () => {
  const authToken = useSelector(state => state.authToken);
  const navigate =useNavigate()

  const dispatch = useDispatch();

    const handleLogin = (values) => {
        axiosInstance.post(`https://academy-training.appssquare.com/api/login`,values)
        .then((response)=>{
           // Replace with your actual token
              
          // Dispatch action to store the token in Redux store
          dispatch(setAuthToken(response.data.token));
          console.log(response.data)
          toast.success(response.data.message);
          
         // message.success("You have successfully signed up.");
         
         }).catch((error)=>{
          
           toast.error("Invalid Email Adress");
          
          
         })}

         const onFinish = (values) => {
  
          console.log('Success:', values);
          handleLogin(values);
        };
       
    
  const {passwordVisible, setPasswordVisible} = useState(false);
  useEffect(()=>{if (authToken !== "") {
    console.log("token="+authToken)
    navigate("/")

    
  }
else{navigate("/login")}
console.log("oman"+authToken)},[authToken])
  return(
    
    <div className='registeration'
      style={{
        
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '100vh',
        padding: '20px',
      }}
    >
               <ToastContainer position="top-center" autoClose="2100"  />      

         <div style={{position:"absolute",backdropFilter:"blur(3px)" ,height:"100%",width:"100%",left:"0",top:"0"}}></div>
 
        <section>
        <div className="midscreen container">
            <div className="row justify-content-center">
               
                <div className="register-card col-lg-5">
               <div className='d-flex justify-content-center'>
                <img   className="" src="https://www.spruko.com/demo/dashlot/dist/assets/images/brand-logos/toggle-dark.png" alt="" 
        style={{backgroundColor:"black",width:"50px", textAlign:"center",justifyContent: 'center', alignItems: 'center'}}/>
                    </div> 
                    <div className="text-center">
                        <h1 className='my-3 pt-2'>Welcome to Restu</h1>
                        <p className="text-muted" style={{textTransform:'capitalize'}}>manage your resturant</p>
                    </div>
                <Form
      size='large'          
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input.Password
        prefix={<LockOutlined className="site-form-item-icon" />}
        placeholder="input password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        
      />
      </Form.Item>
     

      <Form.Item style={{justifyContent:"space-between"}}>
        <Button type="primary" htmlType="submit" className="login-form-button w-100">
          Log in
        </Button>
        <h5 className='text-center p-3'>Or</h5>
        <div  className="text-center"> <a style={{justifyContent:"center",fontSize:'18px'}} href="/signup">register now!</a></div>
      </Form.Item>
    </Form>
    </div>
    <div className="d-flex col-lg-5 offset-lg-1 m-0 py-sm-2 py-lg-5 justify-content-center align-items-center">
                    <h1 className='text-light fw-bold text-stroke' style={{width:'400px', fontSize:'48px', }}>Immerse Yourself in a World of foods and drinks.</h1>
                </div>
            </div>

        </div>
        </section>

</div>
)};
export default LoginPage;