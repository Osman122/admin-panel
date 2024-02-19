import React, { useState } from 'react';
import backgroundImage from '../../background/397493-food-fruit.jpg'; // Import your background image
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined , MailOutlined } from '@ant-design/icons';
import "./index.css"
import { axiosInstance } from '../../api/config';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


const SignUp = () => {

  const [form] = Form.useForm();
  
  
  const {passwordVisible, setPasswordVisible} = useState(false);
  
  const handlesignUp =(values) => {
    axiosInstance.post(`https://academy-training.appssquare.com/api/sign_up`,values)
    .then((response)=>{
      console.log(response.data.message)
      toast.success(response.data.message);
      form.resetFields()
     // message.success("You have successfully signed up.");
     
     }).catch((error)=>{
      
       toast.error("Invalid Email Adress");
      
      
     })}
     const onFinish = (values) => {
  
      console.log(values);
      handlesignUp(values);
      
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

  return(
    <div className='registeration'
      style={{
        
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '100vh',
        padding: '20px',
      }}
    >
         <ToastContainer position="top-center" autoClose="1500"  />      
         <div style={{position:"absolute",backdropFilter:"blur(3px)" ,height:"100%",width:"100%",left:"0",top:"0"}}></div>
 
        <section>
        <div className="midscreen container">
            <div className="row justify-content-center">
               
                <div className="register-card col-lg-5"  style={{height:"550px ", paddingTop:"20px"}}>
                <div className='d-flex justify-content-center'>
                <img   className="" src="https://www.spruko.com/demo/dashlot/dist/assets/images/brand-logos/toggle-dark.png" alt="" 
        style={{backgroundColor:"black",width:"50px", textAlign:"center",justifyContent: 'center', alignItems: 'center'}}/>
                    </div> 
                    <div className="text-center">
                        <h1 className='my-3 pt-2'>Welcome to Restu</h1>
                        <p className="text-muted" style={{textTransform:'capitalize'}}>manage your resturant</p>
                    </div>
                <Form
                form={form}
      size='large'          
      name="normal_login"
      className="login-form"
      
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input your Name!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
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
      <br />

      <Form.Item style={{justifyContent:"space-between"}}>
        <Button type="primary" htmlType="submit" className="login-form-button w-100">
          Sign Up
        </Button>
        <h5 className='text-center p-2'>Or</h5>
        <div  className="text-center d-flex justify-content-center"> <p className='text-secondary '>Alredy Have Acount ?</p> <a style={{justifyContent:"center",fontSize:'14px'}} href="/login">Sign In Now!</a></div>
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
export default SignUp;