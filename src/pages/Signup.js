import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Form, Input, Button, Row,Col } from 'antd';
import { UserOutlined, LockOutlined ,MailOutlined} from '@ant-design/icons';
import { greenButton,paddingInput,heading } from './Login';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const signFunction = (email,password)=>{
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log('success',user)
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    alert(errorMessage)
  });
}
const Signup = () => {

    const onFinish = values => {
        console.log('Received values of form: ', values);
        const {email, password} = values;
        signFunction(email,password);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);

      };
    
      return (
    
    <Row>
      <Col span={24}><h1 style={{...heading,color:"#237804"}}>Sign Up</h1></Col>
      <Col xs={{span:18,offset:3}} sm={{span:16,offset:4}} md={{span:14,offset:5}} lg={{span:12,offset:6}} xl={{span:8,offset:8}} >
      <Form
          name="normal_login"
          className="login-form"  
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input style={paddingInput} size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input style={paddingInput} size="large" prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
            style={paddingInput}
            size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
    
          <Form.Item>
            <Button size={{size:"large"}} type="primary" style={greenButton} htmlType="submit">
              {/* <Link to="/home">Signup</Link> */}
              Signup
              </Button> 
          </Form.Item>
        </Form>
      </Col>
    </Row>
        
      );
}

export default Signup;