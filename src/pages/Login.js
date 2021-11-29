
import React from 'react';
import 'antd/dist/antd.css';
import '../index.css';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const greenButton = { background: "green", borderColor: "green" };
export const paddingInput = { padding: "5px 2px", fontSize: "30px" }
export const heading = { fontFamily: "sans-serif", fontSize: "4em", textAlign: "center", fontWeight: "bold", letterSpacing: "2px", color: "#096dd9" }


const Login = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (

    <Row>
      <Col span={24}><h1 style={heading}>TeamReporter</h1></Col>
      <Col align="center" xs={{ span: 18, offset: 3 }} sm={{ span: 16, offset: 4 }} md={{ span: 14, offset: 5 }} lg={{ span: 12, offset: 6 }} xl={{ span: 8, offset: 8 }} >
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
          <Col><Form.Item >
            <Button style={{ width: 180 }} type="primary" htmlType="submit" className="login-form-button">
              <Link to="/home">Log in</Link>

            </Button></Form.Item></Col>

          <Button size={{ size: "large" }} style={{ ...greenButton, width: 140 }} type="primary"><Link to="/signup">Signup</Link></Button>

        </Form>
      </Col>
    </Row>

  );
};


export default Login;

