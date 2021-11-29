import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Form, Input, Button, Checkbox, Row,Col } from 'antd';
import { UserOutlined, LockOutlined ,MailOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { greenButton,paddingInput,heading } from './Login';


const Signup = () => {
    const onFinish = values => {
        console.log('Received values of form: ', values);
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
            <Button size={{size:"large"}} type="primary" style={greenButton}><Link to="/home">Signup</Link></Button> 
          </Form.Item>
        </Form>
      </Col>
    </Row>
        
      );
}

export default Signup;